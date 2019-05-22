import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from "../../index.paginas";

@IonicPage()
@Component({
  selector: 'page-select-gasoline',
  templateUrl: 'select-gasoline.html',
})
export class SelectGasolinePage {
  gasolinera: any;
  gasolineraNombre: any;
  gasolineraDireccion: string;
  litros: number = 10;
  pesos: number = 100;
  tipoGas: string = "";
  isenabled: boolean = false;
  metodo: string = "litros";
  entrega: any;
  gasolina: any;
  deliveryFee:number= 30;
  appFee:number= 5;
  precioTotal:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gasolinera = this.navParams.get('gasolinera');
    this.entrega = this.navParams.get('entrega');
    this.gasolineraNombre= this.gasolinera.nombreGasolinera;
    this.gasolineraDireccion = this.gasolinera.direccion;    
  }
  //Calculos para el total 
  obtenerPrecioLitros(){
    if(this.metodo == 'litros'){
      if(this.tipoGas == 'Regular'){
        this.precioTotal = (this.gasolinera.precioRegular*this.litros)+(this.deliveryFee+this.appFee)
      }else{
        this.precioTotal = (this.gasolinera.precioPremium*this.litros)+(this.deliveryFee+this.appFee);
      }
    }else{
      if(this.tipoGas == 'Regular'){
        this.precioTotal = this.pesos;
        this.litros = (this.pesos-(this.deliveryFee+this.appFee))/this.gasolinera.precioRegular;
      }else{
        this.precioTotal = this.pesos;
        this.litros = (this.pesos-(this.deliveryFee+this.appFee))/this.gasolina.precioPremium;
      }
    }
  }

  confirmarDireccion() {
    this.obtenerPrecioLitros();
    this.navCtrl.push(CheckoutPage, {
      'gasolinera': this.gasolinera,
      'entrega': this.entrega,
      'precioTotal': this.precioTotal,
      'litros': this.litros,
      'tipoGasolina': this.tipoGas
    });
  }

  setGasRegular() {
    this.tipoGas = 'Regular';
    this.isenabled = true;
  }
  setGasPremium() {
    this.tipoGas = 'Premium';
    this.isenabled = true;
  }

  menosLitros() {
    if (this.litros > 5) {
      this.litros--;
    } else {
      console.log("no se puede menos");
    }
  }
  masLitros() {
    if (this.litros < 50) {
      this.litros++;
    } else {
      console.log("no se puede mas");
    }
  }
  menosPesos() {
    if (this.pesos > 50) {
      this.pesos = this.pesos - 10;
    } else {
      console.log("no se puede menos");
    }
  }
  masPesos() {
    if (this.pesos < 1000) {
      this.pesos = this.pesos + 10;
    } else {
      console.log("no se puede mas");
    }
  }

}
