
import { NgModule } from '@angular/core';
import { IonicPageModule, IonicPage } from 'ionic-angular';
import { ChatsPage } from './chats';
@IonicPage()
@NgModule({
  declarations: [
    ChatsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatsPage),
  ],
  exports: [
    ChatsPage
  ]
})
export class ChatsPageModule {}