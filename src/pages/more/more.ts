import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { ProfilePage } from '../profile/profile';
import { ReviewsPage } from '../reviews/reviews';
import { NotificationPage } from '../notification/notification';
import { TermsPage } from '../terms/terms';
import { EarnPage } from '../earn/earn';
import { RatevroomPage } from '../ratevroom/ratevroom';
import { HelpPage } from '../help/help';
import { LoginPage } from '../login/login';
import { UploadPage } from '../upload/upload';
import { authenticationService } from '../../services/driverauthentication.service';
import * as firebase from 'firebase';
import { CarRegistrationPage } from '../car-registration/car-registration';


@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {

  constructor(public navCtrl: NavController, private AuthenticationService: authenticationService) {

  }
  
       profile(){
    this.navCtrl.push(ProfilePage);
    }
         reviews(){
    this.navCtrl.push(ReviewsPage);
    }
         notification(){
    this.navCtrl.push(NotificationPage);
    }
         terms(){
    this.navCtrl.push(TermsPage);
    }
         earn(){
    this.navCtrl.push(EarnPage);
    }
         ratevroom(){
    this.navCtrl.push(RatevroomPage);
    }
         help(){
    this.navCtrl.push(HelpPage);
    }
         logout(){
          this.AuthenticationService.logOut();
          console.log(firebase.auth().currentUser);
    this.navCtrl.setRoot(LoginPage);
    }
         upload(){
    this.navCtrl.push(CarRegistrationPage);
    }

}
