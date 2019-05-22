import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdersManagerPage } from './orders-manager';

@NgModule({
  declarations: [
    OrdersManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(OrdersManagerPage),
  ],
})
export class OrdersManagerPageModule {}
