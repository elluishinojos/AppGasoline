import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderLogPage } from './order-log';

@NgModule({
  declarations: [
    OrderLogPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderLogPage),
  ],
})
export class OrderLogPageModule {}
