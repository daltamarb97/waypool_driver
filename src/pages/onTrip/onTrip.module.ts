
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnTripPage } from './onTrip';
 
@NgModule({
  declarations: [
    OnTripPage,
  ],
  imports: [
    IonicPageModule.forChild(OnTripPage),
  ],
  exports: [
    OnTripPage
  ]
})
export class OnTripPageModule {}