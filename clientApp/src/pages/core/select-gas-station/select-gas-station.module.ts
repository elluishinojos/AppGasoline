import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectGasStationPage } from './select-gas-station';

@NgModule({
  declarations: [
    SelectGasStationPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectGasStationPage),
  ],
})
export class SelectGasStationPageModule {}
