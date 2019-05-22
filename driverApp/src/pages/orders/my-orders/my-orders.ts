import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UpcomingOrdersPage, PastOrdersPage } from '../../index.paginas';

@IonicPage()
@Component({
  selector: 'page-my-orders',
  templateUrl: 'my-orders.html',
})
export class MyOrdersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
