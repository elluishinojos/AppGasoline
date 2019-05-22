import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SelectGasStationPage } from "../../index.paginas";
import leaflet from "leaflet";
import { GeoSearchControl, EsriProvider } from 'leaflet-geosearch';
import { ConexionNominatimProvider } from '../../../providers/conexion-nominatim/conexion-nominatim';
import { SessionStorageProvider } from '../../../providers/session-storage/session-storage';

const esriPro = new EsriProvider();
const searchControl = new GeoSearchControl({
  provider: esriPro,
  autoClose: true,
  keepResult: true
});
@IonicPage()
@Component({
  selector: 'page-select-client-location',
  templateUrl: 'select-client-location.html',
})
export class SelectClientLocationPage {
  
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  //user: string = 'Jorge';
  usuario:any;
  entregaData = {lugarEntrega:'', ubicacionEntrega:{lat:0, lng:0}};
  constructor(private navCtrl: NavController, private conectNomiProv: ConexionNominatimProvider, private _sessionCtrl: SessionStorageProvider) {
    this.usuario = JSON.parse(this._sessionCtrl.consultar_storage('usuario'));
  }

  ionViewDidEnter() { 
    this.loadMap();
  }

  ionViewCanLeave(){
    document.getElementById("map").outerHTML = "";
  }

  loadMap() {
    console.log("Entro")
    this.map = leaflet.map('map').fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Yo mero',
      maxZoom: 18
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 15,
      timeout: 700000
    }).on('locationfound', (e) => {
      let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([e.latitude, e.longitude])
        .bindPopup('Aqui estas actualmente')
        .openPopup();
      this.map.removeControl(this.map.zoomControl);
      this.entregaData.ubicacionEntrega.lat = e.latitude;
      this.entregaData.ubicacionEntrega.lng = e.longitude;
      this.conectNomiProv.getAddress(this.entregaData.ubicacionEntrega).subscribe(response => {
        this.entregaData.lugarEntrega = response.display_name;
      }, err => {
        console.log(err);
      })
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
    })
    .on('locationerror', (e) => {
      alert(e.message);

    })
    this.map.addControl(searchControl);

    
    this.map.on('geosearch/showlocation', function(e) {
      this.entregaData.lugarEntrega = e.location.label;
      this.entregaData.ubicacionEntrega.lat = e.location.y;
      this.entregaData.ubicacionEntrega.lng = e.location.x;
    });
  }

  confirmarPedido() {
    this.navCtrl.push(SelectGasStationPage, {'entrega': this.entregaData});
  }

  


}
