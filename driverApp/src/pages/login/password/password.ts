import { ConexionDriverProvider } from './../../../providers/conexion-driver/conexion-driver';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MenuPage } from '../../index.paginas';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { SessionStorageProvider } from '../../../providers/session-storage/session-storage';

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {

  driverLoginForm: FormGroup;


  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    private _conDriver: ConexionDriverProvider,
    private _sessionCtrl: SessionStorageProvider
  ) {
    this.driverLoginForm = this.crearForm();
  }
  
  onSubmit() {
    this._conDriver.verificarCredenciales(this.driverLoginForm.value).subscribe(res => {
      if (res) {
        //this.omitirLogIn();
        this._sessionCtrl.guardar_storage('driver', JSON.stringify(res));
        this._sessionCtrl.guardar_storage('driverId', res._id);
        this.navCtrl.setRoot(MenuPage);
      }
    });
  }
  

  // omitirLogIn() {
  //   this._sessionCtrl.sesion.mostrar_login = false;
  //   this._sessionCtrl.guardar_storage();
  // }

  private crearForm() {
    return this.formBuilder.group({
      correo: ['', Validators.required],
      contrasena: ['', Validators.required],
    })
  }

}
