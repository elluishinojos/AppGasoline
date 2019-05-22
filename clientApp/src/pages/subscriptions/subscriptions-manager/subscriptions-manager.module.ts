import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubscriptionsManagerPage } from './subscriptions-manager';

@NgModule({
  declarations: [
    SubscriptionsManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(SubscriptionsManagerPage),
  ],
})
export class SubscriptionsManagerPageModule {}
