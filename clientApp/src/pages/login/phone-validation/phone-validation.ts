import { SessionStorageProvider } from './../../../providers/session-storage/session-storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterCredentialsPage } from '../../index.paginas';


@IonicPage()
@Component({
  selector: 'page-phone-validation',
  templateUrl: 'phone-validation.html',
})
export class PhoneValidationPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _sessionCtrl: SessionStorageProvider
  ) {
  }

  validarCelular() {
    (<any>window).AccountKitPlugin.loginWithPhoneNumber({
      useAccessToken: true,
      defaultCountryCode: "MX",
      facebookNotificationsEnabled: true
    }, () => {
      (<any>window).AccountKitPlugin.getAccount((res) => {
        this.navCtrl.setRoot(RegisterCredentialsPage, { 'celular': res.phoneNumber });
      });
    }, (err) => {
      alert(err);
    })
  }
}
