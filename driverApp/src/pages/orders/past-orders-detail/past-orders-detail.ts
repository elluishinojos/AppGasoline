import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ShowTicketPage  } from "../../index.paginas";

@IonicPage()
@Component({
  selector: 'page-past-orders-detail',
  templateUrl: 'past-orders-detail.html',
})
export class PastOrdersDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  verTicket() {
    var modal = this.modalCtrl.create(ShowTicketPage);
    modal.present();
  }

}
