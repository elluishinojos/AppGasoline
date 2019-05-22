import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Component } from '@angular/core';
import { IonicPage, ViewController, ModalController, NavParams } from 'ionic-angular';
import { DriverOrderPage } from '../../index.paginas';
import { ChatProvider } from './../../../providers/chat/chat';
import { OrdersProvider } from '../../../providers/orders/orders';

@IonicPage()
@Component({
  selector: 'page-accept-order',
  templateUrl: 'accept-order.html',
})
export class AcceptOrderPage {

  private executed: Boolean = false;
  latitude: number;
  longitude: number;
  order:any;
  constructor(
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    private launchNavigator: LaunchNavigator,
    // private chat: ChatProvider,
    //private geolocation: Geolocation,
    params: NavParams,
    // private ordersSocket: OrdersProvider,
  ) {
    this.order = params.get('order');
  }

  onSwipe(order) {
    if (order =='acepted') {
      if (!this.executed) {
        this.executed = true;
        this.viewCtrl.dismiss({ 'status': true });
      }
    }else{
      this.viewCtrl.dismiss({ 'status': false });
    }
  }
}