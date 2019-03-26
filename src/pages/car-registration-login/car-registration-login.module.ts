
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarRegistrationLoginPage } from './car-registration-login';
 
@NgModule({
  declarations: [
    CarRegistrationLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(CarRegistrationLoginPage),
  ],
  exports: [
    CarRegistrationLoginPage
  ]
})
export class CarRegistrationPageModule {}