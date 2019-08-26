import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController } from 'ionic-angular';
import { SignUpService } from '../../services/signup.service';
import { authenticationService } from '../../services/driverauthentication.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { sendFeedbackService } from '../../services/sendFeedback.service';
import { Subject } from 'rxjs';


@IonicPage()

@Component({
  selector: 'page-support',
  templateUrl: 'support.html' 
})
export class SupportPage {
  typeOfSituation:string;
  info:string;
  today:any;
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  userEmail = this.AngularFireAuth.auth.currentUser.email;
  user:any={};
email:any;
unsubscribe = new Subject;

experience:string;


    constructor(public navCtrl: NavController,public navParams: NavParams, public AngularFireAuth:AngularFireAuth,private authenticationService: authenticationService,public SignupService:SignUpService, public sendFeedbackService: sendFeedbackService) {
    this.typeOfSituation=this.navParams.get('typeOfSituation')
    this.info=this.navParams.get('info')

    this.today = Date.now();
    this.SignupService.getMyInfoForProfile(this.SignupService.userUniversity, this.userUid).takeUntil(this.unsubscribe)
    .subscribe(user=>{
      this.user= user;
        console.log(this.user)
    })
  }
  ionViewDidLeave(){
    this.unsubscribe.next();
     this.unsubscribe.complete();
  }
    sendEmail() {
      this.sendFeedbackService.sendFeedback(this.SignupService.userUniversity, this.typeOfSituation, this.experience, this.user.name, this.user.lastname, this.user.phone, this.userUid);
      this.navCtrl.pop()
     }
    

  

}