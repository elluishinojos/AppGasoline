import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpcomingOrdersDetailPage } from './upcoming-orders-detail';

@NgModule({
  declarations: [
    UpcomingOrdersDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(UpcomingOrdersDetailPage),
  ],
})
export class UpcomingOrdersDetailPageModule {}
