import { ConexionDriverProvider } from './../../../providers/conexion-driver/conexion-driver';
// import { ChatProvider } from './../../../providers/chat/chat';
import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { AcceptOrderPage, DriverOrderPage } from '../../index.paginas';
import { Geolocation } from '@ionic-native/geolocation';
import { OrdersProvider } from '../../../providers/orders/orders';
import { SessionStorageProvider } from '../../../providers/session-storage/session-storage';
import { Socket, SocketIoConfig } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';
const config: SocketIoConfig = { url: 'http://192.241.218.41:3001', options: {} };


@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class LobbyPage {
  public status: boolean = false;
  public offline: string = 'offline';
  private socket: Socket
  latitude: number;
  longitude: number;
  constructor(
    public modalCtrl: ModalController,
    // private chat: ChatProvider,
    private geolocation: Geolocation,
    // private ordersSocket: OrdersProvider,
    private conectDriver: ConexionDriverProvider,
    private _sessionCtrl: SessionStorageProvider
  ) {
    //this.status=JSON.parse(this._sessionCtrl.consultar_storage('status'));
    
  }

  toggleOnline() {
    if(this.status){
      this._sessionCtrl.guardar_storage('status', this.status);
      this.socket = this.getSocket();
      this.socket.emit("askForOrders",JSON.parse(this._sessionCtrl.consultar_storage('driver')));
      this.getOrder().subscribe((response)=>{
          var modal = this.modalCtrl.create(AcceptOrderPage, {order: response});
          modal.onDidDismiss(data => {
            let info ={ 
              order: response,
              driver: JSON.parse(this._sessionCtrl.consultar_storage('driver'))
            }
            console.log(info);
            if(data.status){
                this.socket.emit( "orderAccepted", info);
                this.socket.disconnect();
                this.socket = null;
                this.conectDriver.updateOrderDriver(response._id).subscribe((res)=>{
                  console.log(res)
                  var modal = this.modalCtrl.create(DriverOrderPage,{ 'order': response});
                  modal.present();
                }, err=>{
                  console.log(err);
                  setTimeout(()=>{
                    this.toggleOnline();
                  }, 10000)
                })
            } else {
                this.socket.disconnect();
                this.socket = null;
                setTimeout(()=>{
                  this.toggleOnline();
                }, 10000)
            }
          });
            modal.present();
      })
    }else{
      if(this.socket!=null){
        this.socket.disconnect();
      this.socket = null;
      }
      
    }
    // var modal = this.modalCtrl.create(DriverOrderPage,{ 'order': ''});
    // modal.present();
  }

  getOrder(){
    let observable = new Observable<any>(observer =>{
      this.socket.on('orderSent', (order) => {
        console.log(order);
        observer.next(order)
      });
    })
    return observable;
  }

  showModal() {
    var modal = this.modalCtrl.create(AcceptOrderPage);
    modal.present();
  }

  getSocket(){
    return new Socket(config);
  }
}