import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelpManagerPage } from './help-manager';

@NgModule({
  declarations: [
    HelpManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(HelpManagerPage),
  ],
})
export class HelpManagerPageModule {}
