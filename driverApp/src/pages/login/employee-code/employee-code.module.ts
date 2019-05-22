import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeCodePage } from './employee-code';

@NgModule({
  declarations: [
    EmployeeCodePage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeCodePage),
  ],
})
export class EmployeeCodePageModule {}
