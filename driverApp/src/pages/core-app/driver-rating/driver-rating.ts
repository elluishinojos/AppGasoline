import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
//import { ChatProvider } from './../../../providers/chat/chat';

@IonicPage()
@Component({
  selector: 'page-driver-rating',
  templateUrl: 'driver-rating.html',
})
export class DriverRatingPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // private chat: ChatProvider,
    public viewCtrl: ViewController
  ) {
  }

  finish() {
    this.viewCtrl.dismiss();
  }

  changeValue(n: number) {
    return this.change(n).then(res => {
    });
  }

  change(n: number) {
    return new Promise((resolve, reject) => {
      let imgUno: any;
      let imgDos: any;
      let imgTres: any;
      let imgCuatro: any;
      let imgCinco: any;
      switch (n) {
        case 0:
          imgUno = document.getElementById('1pts') as HTMLImageElement;
          imgUno.src = "assets/imgs/gasify-rate-alt-1.svg";
          imgDos = document.getElementById('2pts') as HTMLImageElement;
          imgDos.src = "assets/imgs/gasify-rate-2.svg";
          imgTres = document.getElementById('3pts') as HTMLImageElement;
          imgTres.src = "assets/imgs/gasify-rate-3.svg";
          imgCuatro = document.getElementById('4pts') as HTMLImageElement;
          imgCuatro.src = "assets/imgs/gasify-rate-4.svg";
          imgCinco = document.getElementById('5pts') as HTMLImageElement;
          imgCinco.src = "assets/imgs/gasify-rate-5.svg";
          document.getElementById("mensaje").innerHTML = "¡Has calificado con " + n + " puntos al Cliente!";
          resolve();
          break;
        case 2:
          imgUno = document.getElementById('1pts') as HTMLImageElement;
          imgUno.src = "assets/imgs/gasify-rate-1.svg";
          imgDos = document.getElementById('2pts') as HTMLImageElement;
          imgDos.src = "assets/imgs/gasify-rate-alt-2.svg";
          imgTres = document.getElementById('3pts') as HTMLImageElement;
          imgTres.src = "assets/imgs/gasify-rate-3.svg";
          imgCuatro = document.getElementById('4pts') as HTMLImageElement;
          imgCuatro.src = "assets/imgs/gasify-rate-4.svg";
          imgCinco = document.getElementById('5pts') as HTMLImageElement;
          imgCinco.src = "assets/imgs/gasify-rate-5.svg";
          document.getElementById("mensaje").innerHTML = "¡Has calificado con " + n + " puntos al Cliente!";
          resolve();
          break;
        case 4:
          imgUno = document.getElementById('1pts') as HTMLImageElement;
          imgUno.src = "assets/imgs/gasify-rate-1.svg";
          imgDos = document.getElementById('2pts') as HTMLImageElement;
          imgDos.src = "assets/imgs/gasify-rate-2.svg";
          imgTres = document.getElementById('3pts') as HTMLImageElement;
          imgTres.src = "assets/imgs/gasify-rate-alt-3.svg";
          imgCuatro = document.getElementById('4pts') as HTMLImageElement;
          imgCuatro.src = "assets/imgs/gasify-rate-4.svg";
          imgCinco = document.getElementById('5pts') as HTMLImageElement;
          imgCinco.src = "assets/imgs/gasify-rate-5.svg";
          document.getElementById("mensaje").innerHTML = "¡Has calificado con " + n + " puntos al Cliente!";
          resolve();
          break;
        case 6:
          imgUno = document.getElementById('1pts') as HTMLImageElement;
          imgUno.src = "assets/imgs/gasify-rate-1.svg";
          imgDos = document.getElementById('2pts') as HTMLImageElement;
          imgDos.src = "assets/imgs/gasify-rate-2.svg";
          imgTres = document.getElementById('3pts') as HTMLImageElement;
          imgTres.src = "assets/imgs/gasify-rate-3.svg";
          imgCuatro = document.getElementById('4pts') as HTMLImageElement;
          imgCuatro.src = "assets/imgs/gasify-rate-alt-4.svg";
          imgCinco = document.getElementById('5pts') as HTMLImageElement;
          imgCinco.src = "assets/imgs/gasify-rate-5.svg";
          document.getElementById("mensaje").innerHTML = "¡Has calificado con " + n + " puntos al Cliente!";
          resolve();
          break;
        case 8:
          imgUno = document.getElementById('1pts') as HTMLImageElement;
          imgUno.src = "assets/imgs/gasify-rate-1.svg";
          imgDos = document.getElementById('2pts') as HTMLImageElement;
          imgDos.src = "assets/imgs/gasify-rate-2.svg";
          imgTres = document.getElementById('3pts') as HTMLImageElement;
          imgTres.src = "assets/imgs/gasify-rate-3.svg";
          imgCuatro = document.getElementById('4pts') as HTMLImageElement;
          imgCuatro.src = "assets/imgs/gasify-rate-4.svg";
          imgCinco = document.getElementById('5pts') as HTMLImageElement;
          imgCinco.src = "assets/imgs/gasify-rate-alt-5.svg";
          document.getElementById("mensaje").innerHTML = "¡Has calificado con " + n + " puntos al Cliente!";
          resolve();
          break;
        default:
          reject();
          break;
      }
      //this.chat.sendStage4('{"terminada": true, "idOrden": 4433}');
    })
  }

}
