import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SessionStorageProvider } from '../session-storage/session-storage';

@Injectable()
export class ConexionClienteProvider {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  readonly URL = 'http://192.241.218.41:3000';
  private userId:string
  constructor(private _http: HttpClient, private _sessionCtrl: SessionStorageProvider) {
   this.userId = this._sessionCtrl.consultar_storage('usuarioId');
  }

  logIn(user):Observable<any> {
    var header = {
      headers: new HttpHeaders({
        'loginfrom': 'mobile-client',
      })
    } 
    return this._http.post(this.URL +'/login', user, header)
  }

  agregarCliente(cliente): Observable<any> {
    console.log(cliente);
    return this._http.post(this.URL + '/api/cliente/', cliente, this.httpOptions);
  }

  // agregarVehiculo(vehiculo): Observable<any> {
  //   //this._http.post(this.URL + '/vehiculo', vehiculo);
  // }

  enviarOrden(orden):Observable<any>{
    return this._http.post(this.URL +'/api/order', orden, this.httpOptions);
  }

  consultarVehiculos():Observable<any>{
    return this._http.get(this.URL + '/api/client/cars/'+this.userId);
  }

}