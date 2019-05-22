import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpcomingOrdersPage } from './upcoming-orders';

@NgModule({
  declarations: [
    UpcomingOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(UpcomingOrdersPage),
  ],
})
export class UpcomingOrdersPageModule {}
