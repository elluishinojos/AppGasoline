import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LobbyPage, MyOrdersPage, HelpPage, SettingsPage, EmployeeCodePage } from '../index.paginas';
import { SessionStorageProvider } from '../../providers/session-storage/session-storage';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  lobby = LobbyPage;
  orders = MyOrdersPage;
  help = HelpPage;
  settings = SettingsPage;

  rootPage: any = LobbyPage;
  driver: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController,
    private _sessionCtrl: SessionStorageProvider
  ) {
    this.driver = JSON.parse(this._sessionCtrl.consultar_storage('driver'));
    console.log(this.driver);
  }

  openPage(pagina: any) {
    this.rootPage = pagina;
    this.menuCtrl.close();
  }

  logOut() {
    this._sessionCtrl.borrar_storage('driverId');
    this._sessionCtrl.borrar_storage('driver');
    this.navCtrl.setRoot(EmployeeCodePage);
  }

}
