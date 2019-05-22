import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-vehicle-manager',
  templateUrl: 'vehicle-manager.html',
})
export class VehicleManagerPage {

  vehicleRegisterForm: FormGroup;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder  ) {
    this.vehicleRegisterForm = this.crearForm();
  }

  onSubmit() {
    console.log(this.vehicleRegisterForm.value);
  }

  terminarRegistroVehiculo() {
    this.navCtrl.popToRoot();
  }

  private crearForm() {
    return this.formBuilder.group({
      tipoVehiculo: ['', Validators.required],
      modelo: ['', Validators.required],
      marca: ['', Validators.required],
      placas: ['', Validators.required],
      placaFoto: ['', Validators.required],
      color: ['', Validators.required],
    });
  }

}
