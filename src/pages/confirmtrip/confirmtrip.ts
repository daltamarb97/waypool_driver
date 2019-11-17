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
import { geofireService } from '../../services/geofire.services';



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
  constructor(public navCtrl: NavController,public SignUpServices:SignUpService ,public sendUsersService:sendUsersService,public TripsService:TripsService,public toastCtrl: ToastController,public viewCtrl: ViewController,private afDB: AngularFireDatabase, public sendCoordsService: sendCoordsService,public navParams: NavParams,public AngularFireAuth: AngularFireAuth, public instances: instancesService, private geofireServices: geofireService) {
    
    this.user= this.navParams.get('user');
    console.log(this.user)



    this.SignUpServices.getMyInfo(this.SignUpServices.userPlace, this.userUid).takeUntil(this.unsubscribe)    
		.subscribe(driverInfo => {
      this.driver = driverInfo;
      console.log(this.driver)

		});
    
       
    

  }
  ionViewDidLeave(){
    this.unsubscribe.next();
     this.unsubscribe.complete();
  }
  rejectUser(){
    //VIOLACION ABSOLUTA
    this.TripsService.eliminateLastMinuteUser(this.SignUpServices.userPlace, this.userUid,this.driver.keyTrip,this.user.userId);
    console.log("nanai kukas")
    this.geofireServices.deleteKeyUserLMU(this.SignUpServices.userPlace, this.user.userId);
    this.geofireServices.setOntripFalseUserLMU(this.SignUpServices.userPlace,this.user.userId);
    this.geofireServices.deleteDriverFromLMUofUser(this.SignUpServices.userPlace, this.user.userId, this.driver.keyTrip);
    this.TripsService.notifyLMUitsBeenRejected(this.SignUpServices.userPlace, this.user.userId)
  


    this.dismiss();
  }

  acceptUser(){  
    this.TripsService.acceptLastMinute(this.SignUpServices.userPlace, this.userUid,this.driver.keyTrip,this.user);   
    this.TripsService.eliminateLastMinuteUser(this.SignUpServices.userPlace, this.userUid,this.driver.keyTrip,this.user.userId); 
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
