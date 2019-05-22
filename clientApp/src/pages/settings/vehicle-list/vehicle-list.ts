import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VehicleManagerPage } from "../../index.paginas";
import { ConexionClienteProvider } from '../../../providers/conexion-cliente/conexion-cliente';

@IonicPage()
@Component({
  selector: 'page-vehicle-list',
  templateUrl: 'vehicle-list.html',
})
export class VehicleListPage {
  cars =[]
  constructor(public navCtrl: NavController, public navParams: NavParams, private _conClient: ConexionClienteProvider) {
    this.loadCars();
  }
  agregarVehiculo(){
    this.navCtrl.push(VehicleManagerPage);
  }

  loadCars(){
    this._conClient.consultarVehiculos().subscribe((response) =>{
      this.cars = response;
      console.log(this.cars);
    }, (err)=>{

    })
  }

}
