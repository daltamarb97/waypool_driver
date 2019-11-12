import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentsInfoPage } from './payments-info';

@NgModule({
  declarations: [
    PaymentsInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentsInfoPage),
  ],
})
export class PaymentsInfoPageModule {}
