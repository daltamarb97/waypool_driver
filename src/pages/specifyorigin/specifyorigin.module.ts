
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecifyOriginPage } from './specifyorigin';
 
@NgModule({
  declarations: [
    SpecifyOriginPage,
  ],
  imports: [
    IonicPageModule.forChild(SpecifyOriginPage),
  ],
  exports: [
    SpecifyOriginPage
  ]
})
export class SpecifyOriginPageModule {}