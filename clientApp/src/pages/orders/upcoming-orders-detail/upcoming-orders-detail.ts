import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-upcoming-orders-detail',
  templateUrl: 'upcoming-orders-detail.html',
})
export class UpcomingOrdersDetailPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {
  }

  cancelOrder() {
    const toast = this.toastCtrl.create({
      message: 'Orden cancelada',
      duration: 3000
    });
    toast.present();
    this.navCtrl.pop();
  }

}
