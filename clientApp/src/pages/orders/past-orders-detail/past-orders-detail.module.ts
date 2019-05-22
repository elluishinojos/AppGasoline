import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PastOrdersDetailPage } from './past-orders-detail';

@NgModule({
  declarations: [
    PastOrdersDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PastOrdersDetailPage),
  ],
})
export class PastOrdersDetailPageModule {}
