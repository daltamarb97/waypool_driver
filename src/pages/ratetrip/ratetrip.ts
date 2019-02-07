import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SignUpService } from '../../services/signup.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'page-ratetrip',
  templateUrl: 'ratetrip.html'
})
export class RatetripPage {
today:any;
userDriverUid = this.AngularFireAuth.auth.currentUser.uid
userDriver:any;
  constructor(public navCtrl: NavController,public SignUpServices:SignUpService,private afDB: AngularFireDatabase, public SignUpService: SignUpService, private AngularFireAuth: AngularFireAuth) {
    this.today = Date.now();
    this.SignUpService.getMyInfo(this.userDriverUid)
    .subscribe(userDriver => {
      this.userDriver = userDriver;
      console.log(this.userDriver);
    });
  }

}