import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PaySubscriptionPage } from "../../index.paginas";

@IonicPage()
@Component({
  selector: 'page-subscriptions-manager',
  templateUrl: 'subscriptions-manager.html',
})
export class SubscriptionsManagerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  seeDetail() {
    this.navCtrl.push(PaySubscriptionPage);
  }

}
