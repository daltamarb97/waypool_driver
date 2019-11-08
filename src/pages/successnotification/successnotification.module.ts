import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuccessNotificationPage } from './successnotification';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  declarations: [
    SuccessNotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(SuccessNotificationPage),
    LottieAnimationViewModule.forRoot()
  ],
})
export class SuccessNotificationPageModule {}
