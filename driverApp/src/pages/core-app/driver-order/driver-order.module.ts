import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverOrderPage } from './driver-order';

@NgModule({
  declarations: [
    DriverOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverOrderPage),
  ],
})
export class DriverOrderPageModule {}
