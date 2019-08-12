import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, App } from 'ionic-angular';
import { authenticationService } from '../../services/driverauthentication.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignUpService } from '../../services/signup.service';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-verification-number',
  templateUrl: 'verification-number.html',
})
export class VerificationNumberPage {


  confText:any;
  userId:any;
  driverInfo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private authenticationService: authenticationService, public alertCtrl: AlertController, private AngularFireAuth: AngularFireAuth, public signUpService: SignUpService, public app: App) {
    this.userId = this.navParams.get('userId')
    
  }

  code(){
    this.authenticationService.sendVerificationCodeToFirebase(this.signUpService.userUniversity, this.userId, this.confText);
    this.signUpService.getMyInfo(this.signUpService.userUniversity, this.userId).subscribe(driver => {
      this.driverInfo = driver;

      if(this.driverInfo.verificationCodeApproval === true){
        this.app.getRootNav().push('LoginPage');
      }
    })

    // this.app.getRootNav().push('LoginPage');

  }

     

}
