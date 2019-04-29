import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, IonicPage } from 'ionic-angular';
import { SignUpService } from '../../services/signup.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { sendFeedbackService } from '../../services/sendFeedback.service';
import { geofireService } from '../../services/geofire.services';
@IonicPage()

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
title = 'calificacion de viaje';
  constructor(public navCtrl: NavController,public navParams: NavParams,private emailComposer: EmailComposer,public SignUpServices:SignUpService,private afDB: AngularFireDatabase, public SignUpService: SignUpService, private AngularFireAuth: AngularFireAuth, public sendfeedback:sendFeedbackService, private geofireService: geofireService) {
    this.today = Date.now();
    this.userDriver= this.navParams.get('user')   
  }
  
  sendEmail() {
    this.sendfeedback.sendFeedback(this.title, this.experience, this.userDriver.name, this.userDriver.lastname, this.userDriver.phone, this.userDriverUid);
    this.geofireService.cancelGeoqueryDest();
    this.geofireService.cancelGeoqueryOr();

  }

  ionViewWillLeave(){
    this.geofireService.cancelGeoqueryDest();
    this.geofireService.cancelGeoqueryOr();
  }
}