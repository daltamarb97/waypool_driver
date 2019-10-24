
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsReservePage } from './detailsreserve';

 
@NgModule({
  declarations: [
    DetailsReservePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsReservePage),
  ],
  exports: [
    DetailsReservePage
  ]
})
export class DetailsReservePagePageModule {}