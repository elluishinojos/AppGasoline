import { ConexionClienteProvider } from './../../../providers/conexion-cliente/conexion-cliente';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterVehiclePage } from "../../index.paginas";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-register-credentials',
  templateUrl: 'register-credentials.html',
})
export class RegisterCredentialsPage {

  clientRegisterForm: FormGroup;
  num: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
  ) {
    this.num = navParams.get('celular');
    console.log(this.num);
    this.clientRegisterForm = this.crearForm();
  }

  onSubmit() {
    this.clientRegisterForm.value.celular=this.num;
    this.navCtrl.push(RegisterVehiclePage, { "cliente" : this.clientRegisterForm.value });
  }

  

  private crearForm() {
    return this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      contrasena: ['', Validators.required],
      foto: ['', Validators.required],
    });
  }
}
