import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, MenuController, NavParams } from 'ionic-angular';
import { SelectGasolinePage } from "../../index.paginas";

import leaflet from "leaflet";

@IonicPage({
  name: "SelectGasStationPage"
})
@Component({
  selector: 'page-select-gas-station',
  templateUrl: 'select-gas-station.html',
})
export class SelectGasStationPage {

  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  entregaData: any;
  orden: any;
  user: string = 'Jorge';
  gasolineras=[
    {nombreGasolinera:"Los Silos S. A.", compania: "Grupo Cajeme", direccion:"Calle Sufragio Efectivo 402", precioRegular:10.0, precioPremium:12.0, coordenadas:[27.505969, -109.932956]},
    {nombreGasolinera:"Rendichicas", compania: "Grupo Rendichicas", direccion:"Calle Sufragio Efectivo 402", precioRegular:10.0, precioPremium:12.0, coordenadas:[27.5048768,-109.935133]}
  ]
    
  constructor(private navCtrl: NavController, private menuCtrl: MenuController,public navParams: NavParams) {
    this.menuCtrl.swipeEnable(false);
    this.entregaData = navParams.get("entrega");
    console.log(this.entregaData);
  }

  ionViewDidEnter() {
    this.loadMap();
  }

  loadMap() {
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
      // let markerGroup = leaflet.featureGroup();
      var greenIcon = leaflet.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      var redIcon = leaflet.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      leaflet.marker([e.latitude, e.longitude]).addTo(this.map)
        .bindPopup('Aqui estas actualmente')
        .openPopup();

        this.gasolineras.forEach(gasolinera => {
          leaflet.marker(gasolinera.coordenadas, { icon: greenIcon }).addTo(this.map).bindPopup(gasolinera.nombreGasolinera).openPopup().on('click', () => {
            this.seleccionarGasolina(gasolinera);
          });
        });
      this.map.removeControl(this.map.zoomControl);
    }).on('locationerror', (e) => {
        alert(e.message);
    })
  }

  ionViewWillUnload() {
    this.menuCtrl.swipeEnable(true);
  }

  seleccionarGasolina(gasolinera) {    
    this.navCtrl.push(SelectGasolinePage, { 'gasolinera': gasolinera, 'entrega': this.entregaData });
  }
}
