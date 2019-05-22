import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaySubscriptionPage } from './pay-subscription';

@NgModule({
  declarations: [
    PaySubscriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(PaySubscriptionPage),
  ],
})
export class PaySubscriptionPageModule {}
