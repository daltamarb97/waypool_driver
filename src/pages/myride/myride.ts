import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RateriderPage } from '../raterider/raterider';
import { ChattingPage } from '../chatting/chatting';
import { TabsPage } from '../tabs/tabs';
import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { sendUsersService } from '../../services/sendUsers.service';
import { OnTripPage } from '../onTrip/onTrip';
import { PickupPage } from '../pickup/pickup';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-myride',
  templateUrl: 'myride.html'
})
export class MyridePage {
 usersOnTrip:any = [];

ride: string = "today";
userUid=this.AngularFireAuth.auth.currentUser.uid;

  constructor(public navCtrl: NavController,public navParams: NavParams,private callNumber: CallNumber,public sendCoordsService: sendCoordsService,private AngularFireAuth: AngularFireAuth, public sendUsersService: sendUsersService) {
    this.sendUsersService.getUsersOnTrip(this.userUid)
    .subscribe( user => {
      this.usersOnTrip = user;
      console.log(this.usersOnTrip);
      
    });
    

   
  }
raterider(){
this.navCtrl.push(RateriderPage);
}
callUser(number){
    console.log(number)
  this.callNumber.isCallSupported()
.then((response) => {
if (response == true) {
  this.callNumber.callNumber(number, true)
  .then(res => console.log('Launched dialer!', res)) //si no es necesario esta promesa, eliminarla
  .catch(err => console.log('Error launching dialer', err));
}
else {
    console.log('error')
      }
  });
}
      chatting(){
    this.navCtrl.push(ChattingPage);
    }
          goToRide(user){
    this.navCtrl.push(PickupPage,{user});
    }

}
