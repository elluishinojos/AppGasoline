import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, PopoverController } from 'ionic-angular';

@IonicPage()

@Component({
  template: `
    <ion-list>
      <ion-item>
        <ion-icon icon-start name="create"></ion-icon>
        Edit info
      </ion-item>
      <ion-item>
        <ion-icon icon-start name="trash"></ion-icon>
        Delete card
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  constructor() {
  }
}

@Component({
  selector: 'page-payments-manager',
  templateUrl: 'payments-manager.html',
})
export class PaymentsManagerPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private viewCtrl: ViewController, 
    private popoverCtrl: PopoverController
  ) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(PopoverPage, {
    });

    popover.present({
      ev: ev
    });
  }

}
