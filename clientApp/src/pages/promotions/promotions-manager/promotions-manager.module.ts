import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromotionsManagerPage } from './promotions-manager';

@NgModule({
  declarations: [
    PromotionsManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(PromotionsManagerPage),
  ],
})
export class PromotionsManagerPageModule {}
