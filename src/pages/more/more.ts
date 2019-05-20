import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage, App } from 'ionic-angular';



// import { UploadPage } from '../upload/upload';
import { authenticationService } from '../../services/driverauthentication.service';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignUpService } from '../../services/signup.service';

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {
     userUid=this.AngularFireAuth.auth.currentUser.uid;
     user:any={};
     constructor(public navCtrl: NavController,public modalCtrl: ModalController, public AngularFireAuth:AngularFireAuth,private authenticationService: authenticationService,public SignupService:SignUpService, public app: App) {
          this.SignupService.getMyInfoForProfile(this.userUid).subscribe(user=>{
          this.user= user;
            console.log(this.user)
        })
  }
  
       profile(){
    
    this.app.getRootNav().push('ProfilePage');
    }
    showInfoCars(){

     let modal = this.modalCtrl.create('ShowInfoCarPage', {user:this.user});
    
  modal.present();   
    }
        
         terms(){
    this.navCtrl.push('TermsPage');
    }
     
         help(){
    this.navCtrl.push('HelpPage');
    }
         logout(){
          this.authenticationService.logOut();
          console.log(firebase.auth().currentUser);
          this.app.getRootNav().push('LoginPage');
    }
         docs(){
    this.navCtrl.push('CarRegistrationPage');
    }

}
