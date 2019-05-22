import { ConexionClienteProvider } from './../../../providers/conexion-cliente/conexion-cliente';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../../index.paginas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-register-vehicle',
  templateUrl: 'register-vehicle.html',
})
export class RegisterVehiclePage {

  registerVehicleForm: FormGroup;
  cliente: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private _conClient: ConexionClienteProvider
  ) {
    this.cliente = navParams.get("cliente");
    this.registerVehicleForm = this.createMyForm();
  }

  // irLobby() {
  //   this.navCtrl.setRoot(MenuPage);
  // }

  saveData() {
    let vehiculo = this.registerVehicleForm.value;
    vehiculo.vehiculoID = null;
    this.cliente.vehiculo = [vehiculo];
    this.cliente.metodoPago = null;
    this.cliente.puntaje = null;
    this.cliente.costo = null;
    this.cliente.titulo = null;
    this.cliente.duracion = null;
    this.cliente.promocodesID = null;
    this.cliente.fechaInicio = new Date();
    console.log(this.cliente);

    this._conClient.agregarCliente(this.cliente).subscribe((response) =>{
      console.log(response);
      this.navCtrl.setRoot(MenuPage);
    }, err => {
      console.log(err);
    })
  }

  private createMyForm() {
    return this.formBuilder.group({
      modelo: ['', Validators.required],
      marca: ['', Validators.required],
      color: ['', Validators.required],
      placas: ['', Validators.required],
      placaFoto: ['', Validators.required],
    });
  }
}