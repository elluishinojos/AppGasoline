import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { DriverRatingPage } from '../../index.paginas';
import { ChatProvider } from './../../../providers/chat/chat';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-driver-order-completed',
  templateUrl: 'driver-order-completed.html',
})
export class DriverOrderCompletedPage {

  private executed: Boolean = false;
  placa: string = null;
  bool1: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private camera: Camera,
    // private chat: ChatProvider,
    public viewCtrl: ViewController
  ) {
  }

  onSwipe(e) {
    if (e._openAmount < -150) {
      if (!this.executed) {
        // this.chat.sendStage3('{"aceptada": true, "idOrden": 4433}');
        var modal = this.modalCtrl.create(DriverRatingPage);
        modal.present();
        this.executed = true;
        this.viewCtrl.dismiss();
      }
    }
  }
  
  mostarCamara() {
    const options: CameraOptions = {
      quality: 75,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.placa = 'data:image/jpeg;base64,' + imageData;
      this.bool1 = true;
    }, (err) => {
      console.log("ERROR EN CAMARA", JSON.stringify(err));
    });
  }

}
