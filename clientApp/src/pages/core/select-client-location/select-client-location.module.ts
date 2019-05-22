import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectClientLocationPage } from './select-client-location';

@NgModule({
  declarations: [
    SelectClientLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectClientLocationPage),
  ],
})
export class SelectClientLocationPageModule {}
