import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-vehicle-manager',
  templateUrl: 'vehicle-manager.html',
})
export class VehicleManagerPage {

  addVehicleForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {
    this.addVehicleForm = this.createMyForm();
  }

  agregarVehiculo() {
    this.navCtrl.pop();
  }

  saveData() {
    console.log(this.addVehicleForm.value);
  }

  private createMyForm() {
    return this.formBuilder.group({
      modelo: ['', Validators.required],
      marca: ['', Validators.required],
      color: ['', Validators.required],
      placas: ['', Validators.required],
      fotoPlaca: ['', Validators.required],
    });
  }

}
