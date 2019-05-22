import { AngularFireStorage } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ConexionFirebaseProvider {

  constructor(public http: HttpClient, private afStorage: AngularFireStorage) {
  }
  uploadPhoto(foto, photoName ){
    return this.afStorage.ref(photoName).putString(foto,'data_url');
  }

  getPhotoUrl(name){
    var storageRef = this.afStorage.storage.ref(name);
      let urlPhoto = new Promise((resolve, reject) =>{
        storageRef.getDownloadURL().then((url) => {
          resolve(url)
        });
      })
     return urlPhoto;
  }

}
