import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcceptOrderPage } from './accept-order';

@NgModule({
  declarations: [
    AcceptOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(AcceptOrderPage),
  ],
})
export class AcceptOrderPageModule {}
