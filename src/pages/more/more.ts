import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';


import { ProfilePage } from '../profile/profile';
import { ReviewsPage } from '../reviews/reviews';
import { NotificationPage } from '../notification/notification';
import { TermsPage } from '../terms/terms';
import { EarnPage } from '../earn/earn';
import { HelpPage } from '../help/help';
import { LoginPage } from '../login/login';
// import { UploadPage } from '../upload/upload';
import { authenticationService } from '../../services/driverauthentication.service';
import * as firebase from 'firebase';
import { CarRegistrationPage } from '../car-registration/car-registration';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignUpService } from '../../services/signup.service';
import { ShowInfoCarPage } from '../showinfocar/showinfocar';


@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {
     userUid=this.AngularFireAuth.auth.currentUser.uid;
     user:any={};
     constructor(public navCtrl: NavController,public modalCtrl: ModalController, public AngularFireAuth:AngularFireAuth,private authenticationService: authenticationService,public SignupService:SignUpService) {
          this.SignupService.getMyInfoForProfile(this.userUid).subscribe(user=>{
          this.user= user;
            console.log(this.user)
        })
  }
  
       profile(){
    this.navCtrl.push(ProfilePage);
    }
    showInfoCars(){

     let modal = this.modalCtrl.create(ShowInfoCarPage, {user:this.user});
    
  modal.present();   
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
    }
         help(){
    this.navCtrl.push(HelpPage);
    }
         logout(){
          this.authenticationService.logOut();
          console.log(firebase.auth().currentUser);
          this.navCtrl.setRoot(LoginPage);
    }
         upload(){
    this.navCtrl.push(CarRegistrationPage);
    }

}
