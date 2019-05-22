import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-promotions-manager',
  templateUrl: 'promotions-manager.html',
})
export class PromotionsManagerPage {

  promocode: string = "XYZB32";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private socialSharing: SocialSharing,
    private alertCtrl: AlertController
  ) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  compartirPromocode() {
    this.socialSharing.share("Canjea este promocode para recibir Gasify Points: " + this.promocode).then(() => {
    })
      .catch(() => {
      });
  }

  agregarCodigo() {
    let prompt = this.alertCtrl.create({
      title: 'Agregar Promocode',
      message: "Introduce un código para agregar una promoción!",
      inputs: [
        {
          name: 'code',
          placeholder: 'Código'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}