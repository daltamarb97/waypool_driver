
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmpricePage } from './confirmprice';
 
@NgModule({
  declarations: [
    ConfirmpricePage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmpricePage),
  ],
  exports: [
    ConfirmpricePage
  ]
})
export class ConfirmpricePageModule {}