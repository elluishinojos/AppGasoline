import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UpcomingOrdersPage, PastOrdersPage } from '../../index.paginas';

@IonicPage()
@Component({
  selector: 'page-orders-manager',
  templateUrl: 'orders-manager.html',
})
export class OrdersManagerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  abrirPagina(pagina: string) {
    switch (pagina) {
      case 'past':
        this.navCtrl.push(PastOrdersPage);
        break;
      case 'upcoming':
        this.navCtrl.push(UpcomingOrdersPage);
        break;
    }
  }

}
