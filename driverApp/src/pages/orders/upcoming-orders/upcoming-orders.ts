import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UpcomingOrdersDetailPage } from "../../index.paginas";

@IonicPage()
@Component({
  selector: 'page-upcoming-orders',
  templateUrl: 'upcoming-orders.html',
})
export class UpcomingOrdersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  seeDetail() {
    this.navCtrl.push(UpcomingOrdersDetailPage);
  }

}
