import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, Tabs, AlertController, App, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { sendCoordsService } from '../../services/sendCoords.service';
import { MyridePage } from '../myride/myride';
import { TabsPage } from '../tabs/tabs';
import { sendUsersService } from '../../services/sendUsers.service';
import { geofireService } from '../../services/geofire.services';
import { ListridePage } from '../listride/listride';



@IonicPage()

@Component({
  selector: 'page-confirmdirection',
  templateUrl: 'confirmdirection.html'
})
export class ConfirmdirectionPage {
  
  accepted: boolean;

  
  note:string;
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  geoinfo1;
  geoinfo2;
  buttonColor:string = '#0fc874';
  buttonColor2:string = '#0fc874';
  driverInfo;

  constructor(public navCtrl: NavController, public appCtrl: App,public alertCtrl: AlertController,private afDB: AngularFireDatabase,public sendUsersService: sendUsersService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, private geofireService: geofireService) {

    this.geoinfo1 = this.navParams.get('geoInfo1')
    console.log(this.geoinfo1)

    this.geoinfo2 = this.navParams.get('geoInfo2')
    console.log(this.geoinfo2)

    this.driverInfo = this.navParams.get('driverInfo')
    console.log(this.driverInfo);

    
  }

  acceptTrip(){
    this.accepted = true;
    this.dismiss();
  }
  
  setGeoFireOrigin(){
    this.buttonColor2 = '#1AA3E8';
    this.buttonColor = '#0fc874';
    this.geofireService.setGeofireOr(1, this.geoinfo1.lat, this.geoinfo1.lng, this.driverInfo);
    
   } 

  setGeoFireDestination(){
    this.buttonColor = '#1AA3E8';
      this.buttonColor2 = '#0fc874';
      this.geofireService.setGeofireDest(1, this.geoinfo2.lat, this.geoinfo2.lng, this.driverInfo);
    }  
  dismiss() {
    this.viewCtrl.dismiss(this.accepted);
    
  }  
}

