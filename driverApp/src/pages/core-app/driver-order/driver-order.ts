import { ConexionDriverProvider } from './../../../providers/conexion-driver/conexion-driver';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Component } from '@angular/core';
import { IonicPage, ModalController, ViewController, LoadingController, NavParams } from 'ionic-angular';
import { DriverOrderCompletedPage } from '../../index.paginas';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
// import { ChatProvider } from './../../../providers/chat/chat';
import { ConexionFirebaseProvider } from '../../../providers/conexion-firebase/conexion-firebase';
import { SocketIoConfig, Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';
import { SessionStorageProvider } from '../../../providers/session-storage/session-storage';
const config: SocketIoConfig = { url: 'http://192.241.218.41:3002', options: {} };
@Component({
  selector: 'page-driver-order',
  templateUrl: 'driver-order.html',
})
export class DriverOrderPage {

  private executed: Boolean = false;
  latitude: number;
  longitude: number;
  ticket: string = '';
  bool1: boolean = true;
  order: any;
  status: string = 'Asignado'
  placaFoto = '';
  msg = ''
  mensaje = ''
  socket: Socket;
  constructor(
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    private launchNavigator: LaunchNavigator,
    private camera: Camera,
    // private chat: ChatProvider,
    private geolocation: Geolocation,
    private conecFireBase: ConexionFirebaseProvider,
    public loadingCtrl: LoadingController,
    private params: NavParams,
    private conectDriver: ConexionDriverProvider,
    private _sessionCtrl: SessionStorageProvider

  ) {
    this.order = this.params.get('order');

    
  }

  ionViewDidEnter(){
    console.log(this.order);
    this.conectDriver.changeStatus({ orderId: this.order._id, status: this.status }).subscribe(response => {
      this.socket = this.getSocket();
      console.log(this.socket);
      this.socket.connect();
      this.socket.emit(this.order.clienteID, { tipo: 'driver', id:this._sessionCtrl.consultar_storage('driverId') , orderId:this.order.clienteID })
      this.getMessages().subscribe((response)=>{
        this.msg+= "Driver: "+response.mensaje+"\n"
      })
      //this.socket.emit("test", { tipo: 'driver', id: this.order.driverID })
    }, err=>{
      console.log(err)
    });
  }

  getMessages() {
    let observable = new Observable<any>(observer => {
      this.socket.on(this.order.clienteID, (data) => {
        observer.next(data);
      });
    })
    return observable;
  }

  navigate() {
    console.log("Navigate")
    var coordenadas = []
    if (this.status == 'Asignado') {
      coordenadas = [this.order.ubicacionGasolinera.lat, this.order.ubicacionGasolinera.lng]
      this.launchNavigator.navigate(coordenadas)
        .then(
          success => console.log('Launched navigator'),
          error => console.log('Error launching navigator', error)
        );
    } else {
      coordenadas = [this.order.ubicacionEntrega.lat, this.order.ubicacionEntrega.lng]
      this.launchNavigator.navigate(coordenadas)
        .then(
          success => console.log('Launched navigator'),
          error => console.log('Error launching navigator', error)
        );
    }
  }

  sendPhoto(foto) {
    var loading = this.loadingCtrl.create({
      content: 'Procesando foto...'
    });
    loading.present();
    var photoName = '';
    var fotoBase = '';
    if (foto == "ticket") {
      photoName = 'ticket/' + new Date().getTime().toString();
      fotoBase = this.ticket;
    } else {
      photoName = 'placas/' + new Date().getTime().toString();
      fotoBase = this.placaFoto;
    }

    let uploadPhoto = this.conecFireBase.uploadPhoto(fotoBase, photoName);
    uploadPhoto.then().then(res => {
      this.conecFireBase.getPhotoUrl(photoName).then((response) => {
        if (foto == "ticket") {
          let data = {
            orderId: this.order._id,
            ticketFoto: response
          }
          this.conectDriver.sendTicketPhoto(data).subscribe(response => {
            this.status = "En Proceso";
            this.conectDriver.changeStatus({ orderId: this.order._id, status: this.status }).subscribe(response => {
              this.socket.emit(this.order.clienteID, { tipo: 'estado', estado: 'En Progreso', orderId:this.order.clienteID })
              loading.dismiss();
            }, err=>{
              console.log(err)
            })
          }, err => {
            console.log(err);
          })
        } else {
          let data = {
            orderId: this.order._id,
            placaFoto: response
          }
          this.conectDriver.sendPlacaFoto(data).subscribe(response => {
            console.log("foto placa")
            this.status = "Entregado"
            this.conectDriver.changeStatus({ orderId: this.order._id, status: this.status }).subscribe(response => {
              this.socket.emit(this.order.clienteID, { tipo: 'estado', estado: 'Terminado', orderId:this.order.clienteID })
              this.socket.disconnect();
              this.socket = null;
              loading.dismiss();
              this.viewCtrl.dismiss();
            }, err=>{
              console.log(err)
            });
          }, err => {
            console.log(err);
          })
        }
      }, err => {
        console.log(err)
      });
    }).catch((err) => {
      console.log(err)
    });

  }

  mostarCamara() {
    const options: CameraOptions = {
      quality: 75,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      if (this.status == "Asignado") {
        this.ticket = 'data:image/jpeg;base64,' + imageData;
        this.sendPhoto('ticket');
      } else {
        this.placaFoto = 'data:image/jpeg;base64,' + imageData;
        this.sendPhoto('placas');
      }
    }, (err) => {
      console.log("ERROR EN CAMARA", JSON.stringify(err));
    });
  }
  eviarMensaje() {

    this.msg = this.msg.concat("Tu: " + this.mensaje + "\n");
    this.socket.emit(this.order.clienteID, { tipo: 'chat', mensaje: this.mensaje,  orderId:this.order.clienteID});
    this.mensaje ='';
  }
  getSocket() {
    return new Socket(config);
  }
}
