import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ChatsService } from '../../services/chat.service';

@IonicPage()
@Component({
  selector: 'page-chatting',
  templateUrl: 'chatting.html'
})
export class ChattingPage {
user:any;
driverUid=this.AngularFireAuth.auth.currentUser.uid;
message:string;
chats:any = [];
  constructor(public navCtrl: NavController,public ChatsService:ChatsService,public navParams: NavParams,private AngularFireAuth: AngularFireAuth) {
    this.user= this.navParams.get('user'); 
    console.log(this.user.userId)
    this.ChatsService.getChats(this.driverUid,this.user.userId)
      .subscribe( chat => {
      
        this.chats = chat;
        console.log(this.chats);
          
    });
  }

  sendMessage(){

    this.ChatsService.pushMessage(this.driverUid,this.user.userId,this.message)
  }
}