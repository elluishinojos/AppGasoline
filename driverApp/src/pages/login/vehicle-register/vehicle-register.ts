import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ConexionDriverProvider } from './../../../providers/conexion-driver/conexion-driver';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController } from 'ionic-angular';
import { ConexionFirebaseProvider } from '../../../providers/conexion-firebase/conexion-firebase';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-vehicle-register',
  templateUrl: 'vehicle-register.html',
})
export class VehicleRegisterPage {

  vehicleRegisterForm: FormGroup;
  datosDriver: any;
  titleAlert: string = 'Este campo es requerido.';
  placafoto: string = 'assets/imgs/placeholder-photo.jpg';
  bool1: boolean = false;
  boolValidator: boolean = false;
  foto: string= 'assets/imgs/placeholder-photo.jpg';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private imagePicker: ImagePicker,
    private conDriver: ConexionDriverProvider,
    private conecFireBase: ConexionFirebaseProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.vehicleRegisterForm = this.crearForm();
    this.datosDriver = navParams.get("datosDriver");
  }

  onSubmit() {
    let loading = this.loadingCtrl.create({
      content: 'Procesando información...'
    });
    loading.present();
    this.uploadPhoto(this.placafoto, 'placas/').then((response) => {
      this.vehicleRegisterForm.value.placaFoto= response;
      this.uploadPhoto(this.foto, 'vehiculos/').then((response) => {
        this.vehicleRegisterForm.value.foto= response;
        let vehiculo = this.vehicleRegisterForm.value;
        vehiculo.vehiculoID = null;
        this.datosDriver.vehiculo = [vehiculo];
        this.conDriver.agregarDriver(this.datosDriver).subscribe(response => {
          loading.dismiss();
          this.presentToast() 
          this.navCtrl.popToRoot();
        })
      })
    })
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: '¡Registro exitoso! Espera tu correo de aprovación.',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  
  presentActionSheet(event: Event, tipoFoto: any) {
    event.preventDefault();
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Tomar foto o seleccionar de la galería',
      buttons: [
        {
          text: 'Cámara',
          icon: 'camera',
          handler: () => {
            this.mostarCamara(tipoFoto);
          }
        },
        {
          text: 'Galería',
          icon: 'albums',
          handler: () => {
            this.mostrarGaleria(tipoFoto);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

  mostarCamara(tipoFoto: any) {
    const options: CameraOptions = {
      quality: 75,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      switch (tipoFoto) {
        case 'placa':
          this.placafoto = 'data:image/jpeg;base64,' + imageData;
          this.bool1 = true
          break;
        case 'vehiculo':
          this.foto = 'data:image/jpeg;base64,' + imageData;
          break;
      }
      this.validarForm();
    }, (err) => {
      console.log("ERROR EN CAMARA", JSON.stringify(err));
    });
   
  }

  mostrarGaleria(tipoFoto: any) {
    let opciones: ImagePickerOptions = {
      quality: 70,
      outputType: 1,
      maximumImagesCount: 1
    }

    this.imagePicker.getPictures(opciones).then((results) => {
      for (var i = 0; i < results.length; i++) {
        switch (tipoFoto) {
          case 'placa':
            this.placafoto = 'data:image/jpeg;base64,' + results[i];
            this.bool1 = true
         
            break;
          case 'vehiculo':
            this.foto = 'data:image/jpeg;base64,' + results[i];
            this.bool1 = true
        }
      }
      this.validarForm();
    }, (err) => {
      console.log("ERROR en selector", JSON.stringify(err));
    });
  }


  validarForm() {
    if (this.vehicleRegisterForm.valid) {
      if (this.bool1) {
        this.boolValidator = true;
      }
    } else {
      this.boolValidator = false;
    }
  }

  private crearForm() {
    return this.formBuilder.group({
      tipoVehiculo: ['', Validators.required],
      modelo: ['', Validators.required],
      marca: ['', Validators.required],
      placas: ['', Validators.required],
      color: ['', Validators.required],
    });
  }

  uploadPhoto(photo, name){
    let promise = new Promise((resolve, reject) =>{
      let photoName =  name+new Date().getTime().toString();
      let uploadPhoto = this.conecFireBase.uploadPhoto(photo, photoName);
      uploadPhoto.then().then(res => {
        this.conecFireBase.getPhotoUrl(photoName).then((response)=>{
          resolve(response)
        }, err=>{
          reject()
        });
      }).catch((err)=>{
          reject()
      });
    })
    return promise;
  }
}