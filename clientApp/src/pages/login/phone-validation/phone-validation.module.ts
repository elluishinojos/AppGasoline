import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneValidationPage } from './phone-validation';

@NgModule({
  declarations: [
    PhoneValidationPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneValidationPage),
  ],
})
export class PhoneValidationPageModule {}
