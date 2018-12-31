import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RateriderPage } from '../raterider/raterider';
import { ChattingPage } from '../chatting/chatting';
// import { RidetodayPage } from '../ridetoday/ridetoday';
// import { TabsPage } from '../tabs/tabs';
import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { sendUsersService } from '../../services/sendUsers.service';

@Component({
  selector: 'page-myride',
  templateUrl: 'myride.html'
})
export class MyridePage {
 usersAvailable:any = [];

ride: string = "today";
user=this.AngularFireAuth.auth.currentUser.uid;

  constructor(public navCtrl: NavController,public navParams: NavParams,public sendCoordsService: sendCoordsService,private AngularFireAuth: AngularFireAuth, public sendUsersService: sendUsersService) {
    this.sendUsersService.getUsersOnTrip(this.user)
    .subscribe( user => {
      this.usersAvailable = user;
      console.log(this.usersAvailable);
      
    });
    

   
  }
raterider(){
this.navCtrl.push(RateriderPage);
}

      chatting(){
    this.navCtrl.push(ChattingPage);
    }
          ridetoday(){
    this.navCtrl.push(MyridePage);
    }

}
