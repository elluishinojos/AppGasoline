import { MenuPage } from './../../menu/menu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhoneValidationPage } from '../../index.paginas';
import { ConexionClienteProvider } from '../../../providers/conexion-cliente/conexion-cliente';
import { SessionStorageProvider } from '../../../providers/session-storage/session-storage';

@IonicPage()
@Component({
  selector: 'page-login-form',
  templateUrl: 'login-form.html',
})
export class LoginFormPage {
  loginForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private _conClient: ConexionClienteProvider, private _sessionCtrl: SessionStorageProvider) {
    this.loginForm = this.crearForm();
  }

  private crearForm() {
    return this.formBuilder.group({
      correo: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }

  onSubmit() {
    this._conClient.logIn(this.loginForm.value).subscribe(response => {
      this._sessionCtrl.guardar_storage('usuario', JSON.stringify(response));
      this._sessionCtrl.guardar_storage('usuarioId', response._id);
      this.navCtrl.setRoot(MenuPage);
    })
  }

  validarNumero(){
    this.navCtrl.push(PhoneValidationPage);
  }

}
