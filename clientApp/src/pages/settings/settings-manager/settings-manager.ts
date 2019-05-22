import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { VehicleListPage } from "../../index.paginas";
import { SessionStorageProvider } from '../../../providers/session-storage/session-storage';

@IonicPage()
@Component({
  selector: 'page-settings-manager',
  templateUrl: 'settings-manager.html',
})
export class SettingsManagerPage {
  user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private _sessionCtrl: SessionStorageProvider) {
    this.user = JSON.parse(this._sessionCtrl.consultar_storage('usuario'));
    console.log(this.user);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  gestionarVehiculos(){
    this.navCtrl.push(VehicleListPage);
  }

}
