import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavigationSettingsPage } from './navigation-settings';

@NgModule({
  declarations: [
    NavigationSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(NavigationSettingsPage),
  ],
})
export class NavigationSettingsPageModule {}
