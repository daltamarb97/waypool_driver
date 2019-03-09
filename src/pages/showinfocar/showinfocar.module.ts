
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowInfoCarPage } from './showinfocar';
 
@NgModule({
  declarations: [
    ShowInfoCarPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowInfoCarPage),
  ],
  exports: [
    ShowInfoCarPage
  ]
})
export class ShowInfoCarPageModule {}