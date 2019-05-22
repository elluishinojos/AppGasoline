import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class SessionStorageProvider {
  constructor(private storage: Storage) {
    
  }
  consultar_storage(nombre:string){
    return localStorage.getItem(nombre);
  }

  guardar_storage(nombre:string, valor) {
    localStorage.setItem(nombre, valor)
  }

  borrar_storage(nombre:string){
    localStorage.removeItem(nombre);
  }

}
