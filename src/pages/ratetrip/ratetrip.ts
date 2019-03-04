import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { SignUpService } from '../../services/signup.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'page-ratetrip',
  templateUrl: 'ratetrip.html'
})
export class RatetripPage {
today:any;
email:any;
userDriverUid = this.AngularFireAuth.auth.currentUser.uid
userDriver:any={};
experience:string;
  constructor(public navCtrl: NavController,public navParams: NavParams,private emailComposer: EmailComposer,public SignUpServices:SignUpService,private afDB: AngularFireDatabase, public SignUpService: SignUpService, private AngularFireAuth: AngularFireAuth) {
    this.today = Date.now();
    this.userDriver= this.navParams.get('user')  

    
    
    
  }
  
  sendEmail() {
    //send email
  this.emailComposer.isAvailable().then((available: boolean) =>{
    if(available) {
      //if its available we can send the mail
      
        this.email = {
          to:'waypooltec@gmail.com',
          cc: `${this.userDriver.email}${this.userDriver.fixedemail}`,      
          subject: 'Mi experiencia en viaje',
          body: this.experience,
          isHtml: true
        };
     
        this.emailComposer.open(this.email);
      // add alias
    this.email.addAlias('gmail', 'com.google.android.gm');

// then use alias when sending email
    this.email.open({
  app: 'gmail'
  
})
    }else{
      console.log('hay un problema con el correo')
    }
   })
  }
}