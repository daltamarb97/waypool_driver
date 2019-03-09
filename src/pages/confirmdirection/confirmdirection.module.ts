
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmdirectionPage } from './confirmdirection';
 
@NgModule({
  declarations: [
    ConfirmdirectionPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmdirectionPage),
  ],
  exports: [
    ConfirmdirectionPage
  ]
})
export class ConfirmdirectionPageModule {}