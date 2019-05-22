import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DriverRatingPage } from "../../index.paginas";
// import { ChatProvider } from './../../../providers/chat/chat';

@IonicPage()
@Component({
  selector: 'page-order-log',
  templateUrl: 'order-log.html',
})
export class OrderLogPage {

  constructor(
    // private chat: ChatProvider,
    private navCtrl: NavController
  ) {
    
  }

  abrirModal() {
    //Esta es la linea que recibe los estados de la orden; Aquí es hasta cierto punto Síncrono supongo.
    // this.chat.getStage1();
    // this.chat.getStage2();
    // this.chat.getStage3();

    //A partir de este punto el mensaje ya se manda por a la API principal
    this.navCtrl.push(DriverRatingPage);
  }

}
