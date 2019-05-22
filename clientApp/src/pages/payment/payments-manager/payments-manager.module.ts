import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentsManagerPage } from './payments-manager';

@NgModule({
  declarations: [
    PaymentsManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentsManagerPage),
  ],
})
export class PaymentsManagerPageModule {}
