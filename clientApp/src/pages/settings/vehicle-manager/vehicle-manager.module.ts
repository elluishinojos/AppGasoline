import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleManagerPage } from './vehicle-manager';

@NgModule({
  declarations: [
    VehicleManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleManagerPage),
  ],
})
export class VehicleManagerPageModule {}
