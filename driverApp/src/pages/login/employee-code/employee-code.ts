import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PasswordPage, DriverRegisterPage } from '../../index.paginas'


@IonicPage()
@Component({
  selector: 'page-employee-code',
  templateUrl: 'employee-code.html',
})
export class EmployeeCodePage {

  constructor(public navCtrl: NavController) {
  }


  validarCodigo(){
    this.navCtrl.push(PasswordPage);
  }

  registrarConductor() {
    this.navCtrl.push(DriverRegisterPage);
  }

}
