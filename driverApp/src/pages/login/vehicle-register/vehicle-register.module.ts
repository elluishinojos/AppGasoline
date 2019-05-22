import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleRegisterPage } from './vehicle-register';

@NgModule({
  declarations: [
    VehicleRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleRegisterPage),
  ],
})
export class VehicleRegisterPageModule {}
