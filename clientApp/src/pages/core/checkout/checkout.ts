import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { OrderLogPage } from "../../index.paginas";
// import { ChatProvider } from './../../../providers/chat/chat';
import { DatePipe } from '@angular/common';
import { ConexionClienteProvider } from '../../../providers/conexion-cliente/conexion-cliente';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  tipoGas: string;
  litros: number;
  gasolinera: any;
  entrega: any;
  precioTotal:0
  comentarios:string='';
  order= {
    lugarEntrega:'', 
    ubicacionEntrega: {
      lat: 0,
      lng: 0
    },
    tipoGasolina: '',
    litros: 0,
    horarioProgramado: null,
    comentario: '',
    deliveryFee: 30,
    appFee: 5,
    precioTotal: 0,
    fecha: null,
    ticket: null,
    nombreGasolinera: '',
    compania: '',
    direccion: '',
    precioRegular: 0,
    precioPremium: 0,
    promocodesID: null,
    clienteID: "5cb60bb9ff29b84c44400472",
    driverID: null,
    status: "Abierto",
    vehiculo: {
     _id: '',
      modelo: '',
      marca: '',
      placas: '',
      placaFoto: '',
      color: ''
    }
  }
  vehiculos = [];
  vehiculo= null;
  minDate:string = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  public event = {
    date: this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
    hour: this.datePipe.transform(new Date(), 'HH:mm'),
  }

  constructor( private navCtrl: NavController, private navParams: NavParams,public alertCtrl: AlertController, private datePipe: DatePipe, private _conClient: ConexionClienteProvider, public toastCtrl: ToastController) {
    this.consultarVehiculos();
    this.tipoGas = this.navParams.get('tipoGasolina');
    this.litros = this.navParams.get('litros');
    this.gasolinera = this.navParams.get('gasolinera');
    this.entrega = this.navParams.get('entrega');
    this.precioTotal = this.navParams.get('precioTotal');
    this.onChangeDate();
    this.crearOrden();
    
  }
  crearOrden(){
    this.order.lugarEntrega = this.entrega.lugarEntrega; 
    this.order.ubicacionEntrega.lat = this.entrega.ubicacionEntrega.lat;
    this.order.ubicacionEntrega.lng = this.entrega.ubicacionEntrega.lng;
    this.order.tipoGasolina = this.tipoGas;
    this.order.litros = this.litros;
    this.order.precioTotal = this.precioTotal;
    this.order.fecha = new Date().toISOString();
    this.order.ticket = '0000000';
    this.order.nombreGasolinera = this.gasolinera.nombreGasolinera;
    this.order.compania = this.gasolinera.compania;
    this.order.direccion = this.gasolinera.direccion;
    this.order.precioRegular = this.gasolinera.precioPremium;
    this.order.precioPremium = this.gasolinera.precioRegular;
  }
  enviarOrden(){
    this.order.comentario =this.comentarios;
    this.crearVehiculo();
    this._conClient.enviarOrden(this.order).subscribe(response => {
      this.navCtrl.push(OrderLogPage);
    }, err => {
      console.log(err);
      this.presentToast();
    })
  }
  consultarVehiculos(){
    this._conClient.consultarVehiculos().subscribe(response => {
      this.vehiculos = response;
      this.vehiculo = response[0];
    }, err => {
      console.log(err);
    })
  }
  crearVehiculo(){
    this.order.vehiculo={
      _id: this.vehiculo._id,
       modelo: this.vehiculo.modelo,
       marca: this.vehiculo.marca,
       placas: this.vehiculo.placas,
       placaFoto: this.vehiculo.placas,
       color: this.vehiculo.color
    }
  }
  onChangeVehiculo(vehiculo){
    this.vehiculo = vehiculo;
  }
  onChangeDate(){
    var hora = this.event.hour.split(':');
    var date = new Date(this.event.date.replace(/-/g, '\/'));
    date.setHours(Number(hora[0]), Number(hora[1]));
    this.order.horarioProgramado = date.toISOString();
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Erro realizando la orden. Favor de intentar más tarde.',
      duration: 3000
    });
    toast.present();
  }
}
