import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RateriderPage } from '../raterider/raterider';
import { ChattingPage } from '../chatting/chatting';
import { RidetodayPage } from '../ridetoday/ridetoday';

@Component({
  selector: 'page-myride',
  templateUrl: 'myride.html'
})
export class MyridePage {

ride: string = "today";

  constructor(public navCtrl: NavController) {

  }
raterider(){
this.navCtrl.push(RateriderPage);
}

      chatting(){
    this.navCtrl.push(ChattingPage);
    }
          ridetoday(){
    this.navCtrl.push(RidetodayPage);
    }

}
