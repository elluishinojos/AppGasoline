import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PastOrdersDetailPage } from "../../index.paginas";

@IonicPage()
@Component({
  selector: 'page-past-orders',
  templateUrl: 'past-orders.html',
})
export class PastOrdersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  seeDetail() {
    this.navCtrl.push(PastOrdersDetailPage);
  }

}
