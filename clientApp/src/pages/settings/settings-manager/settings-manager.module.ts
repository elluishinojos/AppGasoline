import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsManagerPage } from './settings-manager';

@NgModule({
  declarations: [
    SettingsManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsManagerPage),
  ],
})
export class SettingsManagerPageModule {}
