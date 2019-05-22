import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterCredentialsPage } from './register-credentials';

@NgModule({
  declarations: [
    RegisterCredentialsPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterCredentialsPage),
  ],
})
export class RegisterCredentialsPageModule {}
