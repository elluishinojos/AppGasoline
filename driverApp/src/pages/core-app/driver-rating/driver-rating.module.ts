import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverRatingPage } from './driver-rating';

@NgModule({
  declarations: [
    DriverRatingPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverRatingPage),
  ],
})
export class DriverRatingPageModule {}
