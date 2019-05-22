import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectGasolinePage } from './select-gasoline';

@NgModule({
  declarations: [
    SelectGasolinePage,
  ],
  imports: [
    IonicPageModule.forChild(SelectGasolinePage),
  ],
})
export class SelectGasolinePageModule {}
