import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemoveSchedulePage } from './remove-schedule';

@NgModule({
  declarations: [
    RemoveSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(RemoveSchedulePage),
  ],
})
export class RemoveSchedulePageModule {}
