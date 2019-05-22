import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController } from 'ionic-angular';
import { VehicleRegisterPage } from "../../index.paginas";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { ConexionFirebaseProvider } from '../../../providers/conexion-firebase/conexion-firebase';

@IonicPage()
@Component({
  selector: 'page-driver-register',
  templateUrl: 'driver-register.html',
})
export class DriverRegisterPage {

  driverRegisterForm: FormGroup;
  foto: string = 'assets/imgs/placeholder-photo.jpg';
  ine: string = 'assets/imgs/placeholder-photo.jpg';
  noAntecedentes: string = 'assets/imgs/placeholder-photo.jpg';
  comprobanteDomicilio: string = 'assets/imgs/placeholder-photo.jpg';
  curp: string = 'assets/imgs/placeholder-photo.jpg';
  bool1: boolean = false;
  bool2: boolean = false;
  bool3: boolean = false;
  bool4: boolean = false;
  bool5: boolean = false;
  boolValidator: boolean = false;
  titleAlert: string = 'Este campo es requerido.';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private imagePicker: ImagePicker,
    private conecFireBase: ConexionFirebaseProvider,
    public loadingCtrl: LoadingController
  ) {
    this.driverRegisterForm = this.crearForm();
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
        case 'foto':
          this.foto = 'data:image/jpeg;base64,' + imageData;
          this.bool1 = true;
          break;
        case 'ine':
          this.ine = 'data:image/jpeg;base64,' + imageData;
          this.bool2 = true;
          break;
        case 'noAntecedentes':
          this.noAntecedentes = 'data:image/jpeg;base64,' + imageData;
          this.bool3 = true;
          break;
        case 'comprobanteDomicilio':
          this.comprobanteDomicilio = 'data:image/jpeg;base64,' + imageData;
          this.bool4 = true;
          break;
        case 'curp':
          this.curp = 'data:image/jpeg;base64,' + imageData;
          this.bool5 = true;
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
          case 'foto':
            this.foto = 'data:image/jpeg;base64,' + results[i];
            this.bool1 = true;
            break;
          case 'ine':
            this.ine = 'data:image/jpeg;base64,' + results[i];
            this.bool2 = true;
            break;
          case 'noAntecedentes':
            this.noAntecedentes = 'data:image/jpeg;base64,' + results[i];
            this.bool3 = true;
            break;
          case 'comprobanteDomicilio':
            this.comprobanteDomicilio = 'data:image/jpeg;base64,' + results[i];
            this.bool4 = true;
            break;
          case 'curp':
            this.curp = 'data:image/jpeg;base64,' + results[i];
            this.bool5 = true;
            break;
        }
      }
      this.validarForm();
    }, (err) => {
      console.log("ERROR en selector", JSON.stringify(err));
    });
  }

  validarForm() {
    if (this.driverRegisterForm.valid) {
      if (this.bool1 && this.bool2 && this.bool3 && this.bool4 && this.bool5) {
        this.boolValidator = true;
      }
    } else {
      this.boolValidator = false;
    }
  }

  onSubmit() {
    let loading = this.loadingCtrl.create({
      content: 'Procesando información...'
    });
    loading.present();
    this.uploadPhoto(this.foto,'perfil/').then((response)=>{
      this.driverRegisterForm.value.foto = response;
      this.uploadPhoto(this.ine, 'ine/').then((response)=>{
        this.driverRegisterForm.value.ine = response;
        this.uploadPhoto(this.noAntecedentes,'carta/').then((response)=>{
          this.driverRegisterForm.value.noAntecedentes = response;
          this.uploadPhoto(this.comprobanteDomicilio, 'comprobante/').then((response)=>{
            this.driverRegisterForm.value.comprobanteDomicilio = response;
            this.uploadPhoto(this.ine, 'curp/').then((response)=>{
              this.driverRegisterForm.value.curp = response;
              console.log(this.driverRegisterForm.value);
              loading.dismiss();
              this.navCtrl.push(VehicleRegisterPage, { "datosDriver": this.driverRegisterForm.value });
            }).catch((err)=>{
             console.log(err)
             loading.dismiss();
            })
          }).catch((err)=>{
           console.log(err)
           loading.dismiss();
          })
        }).catch((err)=>{
          console.log(err);
          loading.dismiss();
        })
      }).catch((err)=>{
       console.log(err)
       loading.dismiss();
      })
    }).catch((err)=>{
      console.log(err);
      loading.dismiss();
    })
  }

  private crearForm() {
    return this.formBuilder.group({
      correo: ['', Validators.compose([Validators.required, Validators.email])],
      contrasena: ['', Validators.required],
      contrasenaRetry: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      celular: ['', Validators.compose([Validators.required, Validators.pattern("^[0-9]{10}$"), Validators.minLength(10), Validators.maxLength(10)])],
      direccion: this.formBuilder.group({
        calle: ['', Validators.required],
        noExterior: ['', Validators.required],
        noInterior: [''],
        colonia: ['', Validators.required],
        CP: ['', Validators.compose([Validators.required, Validators.min(10000), Validators.minLength(5), Validators.maxLength(5)])],
        ciudad: ['', Validators.required],
        estado: ['', Validators.required]
      }),
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