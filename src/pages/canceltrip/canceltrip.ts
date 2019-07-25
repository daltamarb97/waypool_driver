import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { sendUsersService } from '../../services/sendUsers.service';
import { instancesService } from '../../services/instances.service';
import { Subject, onErrorResumeNext } from 'rxjs';
import { TripsService } from '../../services/trips.service';
import { SignUpService } from '../../services/signup.service';

@IonicPage()

@Component({
  selector: 'page-canceltrip',
  templateUrl: 'canceltrip.html'
})
export class CanceltripPage {

  usersOnTrip:any;
  accepted: boolean;
  reserve:any;
  user:any ={};
  hideButton:boolean = true;
  hideText:boolean = false;
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  unsubscribe = new Subject;
  trip:any;
  driver:any;
  constructor(public navCtrl: NavController,public SignUpServices:SignUpService ,public sendUsersService:sendUsersService,public TripsService:TripsService,public toastCtrl: ToastController,public viewCtrl: ViewController,private afDB: AngularFireDatabase, public sendCoordsService: sendCoordsService,public navParams: NavParams,public AngularFireAuth: AngularFireAuth, public instances: instancesService) {
    
    
       
    

  }


 

  dismiss() {
    this.viewCtrl.dismiss(this.accepted);

    
    // this.navCtrl.pop();

  }  
}
