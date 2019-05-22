import { Injectable } from '@angular/core';

@Injectable()
export class SessionStorageProvider {

  constructor() {
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
