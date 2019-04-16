import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { ChattingPage } from '../chatting/chatting';
import { sendUsersService } from '../../services/sendUsers.service';
import { AngularFireAuth } from 'angularfire2/auth';
@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html'
})
export class ChatsPage {
  driverUid=this.AngularFireAuth.auth.currentUser.uid;
  pickingUsers:any = [];
  constructor(public navCtrl: NavController,public sendUsersService: sendUsersService,private AngularFireAuth: AngularFireAuth) {
    this.sendUsersService.getUsersOnTrip(this.driverUid)
    .subscribe( user => {
      
        this.pickingUsers = user;
        console.log(this.pickingUsers);
          
    });
  }
  
     chatting(user){
    this.navCtrl.push('ChattingPage',{user:user});

    }

}
