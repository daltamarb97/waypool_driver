
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarRegistrationPage } from './car-registration';
 
@NgModule({
  declarations: [
    CarRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(CarRegistrationPage),
  ],
  exports: [
    CarRegistrationPage
  ]
})
export class CarRegistrationPageModule {}