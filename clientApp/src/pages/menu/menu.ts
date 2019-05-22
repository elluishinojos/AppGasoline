import { LoginFormPage } from './../login/login-form/login-form';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import {
  OrdersManagerPage,
  PaymentsManagerPage,
  SubscriptionsManagerPage,
  PromotionsManagerPage,
  SettingsManagerPage,
  HelpManagerPage,
  SelectClientLocationPage,
} from '../index.paginas'
import { SessionStorageProvider } from '../../providers/session-storage/session-storage';

@IonicPage({
  name: 'menuPage'
})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage: any = SelectClientLocationPage;
  usuario:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private menuCtrl: MenuController,
    private _sessionCtrl: SessionStorageProvider
  ) {
    this.usuario = JSON.parse(this._sessionCtrl.consultar_storage('usuario'));
  }

  openPage(pagina: any) {

    switch (pagina) {
      case 'ordersPage':
        this.modalCtrl.create(OrdersManagerPage).present();
        break;
      case 'paymentPage':
        this.modalCtrl.create(PaymentsManagerPage).present();
        break;
      case 'subsPage':
        this.modalCtrl.create(SubscriptionsManagerPage).present();
        break;
      case 'promotionsPage':
        this.modalCtrl.create(PromotionsManagerPage).present();
        break;
      case 'settingsPage':
        this.modalCtrl.create(SettingsManagerPage).present();
        break;
      case 'helpPage':
        this.modalCtrl.create(HelpManagerPage).present();
        break;
    }
    this.menuCtrl.close();
  }

  logOut() {
    // (<any>window).AccountKitPlugin.logout();
    this._sessionCtrl.borrar_storage('usuario');
    this._sessionCtrl.borrar_storage('usuarioId');
    this.navCtrl.setRoot(LoginFormPage);
  }
}
