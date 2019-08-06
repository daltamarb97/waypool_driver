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
  selector: 'page-confirmtrip',
  templateUrl: 'confirmtrip.html'
})
export class ConfirmtripPage {
  
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
    
    this.user= this.navParams.get('user') 
    console.log(this.user)

    this.SignUpServices.getMyInfo(this.SignUpServices.userUniversity, this.userUid)    
		.subscribe(driverInfo => {
      this.driver = driverInfo;
      console.log(this.driver)

		});
        
       
    

  }
  rejectUser(){
    this.TripsService.eliminateLastMinuteUser(this.SignUpServices.userUniversity, this.userUid,this.driver.keyTrip,this.user.userId);
    console.log("nanai kukas")

    this.dismiss();
  }

  acceptUser(){  
    this.TripsService.acceptLastMinute(this.SignUpServices.userUniversity, this.userUid,this.driver.keyTrip,this.user);   
    this.TripsService.eliminateLastMinuteUser(this.SignUpServices.userUniversity, this.userUid,this.driver.keyTrip,this.user.userId); 
    console.log("bienvenido al combo")
    this.dismiss();
    }

  dismiss() {
    this.viewCtrl.dismiss(this.accepted);
    this.unsubscribe.next();
    this.unsubscribe.complete();
    
    // this.navCtrl.pop();

  }  
}
