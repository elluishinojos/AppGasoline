import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterVehiclePage } from './register-vehicle';

@NgModule({
  declarations: [
    RegisterVehiclePage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterVehiclePage),
  ],
})
export class RegisterVehiclePageModule {}
