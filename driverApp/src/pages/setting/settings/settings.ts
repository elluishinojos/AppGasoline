import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavigationSettingsPage, VehicleManagerPage } from "../../index.paginas";
import { SessionStorageProvider } from '../../../providers/session-storage/session-storage';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  driver:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _sessionCtrl: SessionStorageProvider) {
    this.driver = JSON.parse(this._sessionCtrl.consultar_storage('driver'));
  }

  selectNavigation() {
    this.navCtrl.push(NavigationSettingsPage);
  }

  agregarAuto() {
    this.navCtrl.push(VehicleManagerPage);
  }

}
