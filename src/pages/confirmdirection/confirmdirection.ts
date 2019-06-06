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
import { priceService } from '../../services/price.service';



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
  buttonColor:string = '#001127';
  buttonColor2:string = '#001127';
  buttonColor3:string = '#001127';
  buttonColor4:string = '#001127';
  click1 = false;
  click2 = false;
  click3 = false;
  click4 = false;

  driverInfo;

  constructor(public navCtrl: NavController, public PriceService:priceService,public appCtrl: App,public alertCtrl: AlertController,private afDB: AngularFireDatabase,public sendUsersService: sendUsersService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, private geofireService: geofireService) {

    this.geoinfo1 = this.navParams.get('geoInfo1')
    console.log(this.geoinfo1)

    this.geoinfo2 = this.navParams.get('geoInfo2')
    console.log(this.geoinfo2)

    this.driverInfo = this.navParams.get('driverInfo')
    console.log(this.driverInfo);

    
  }

  acceptTrip(){
    this.PriceService.saveTripToReserves(this.userUid,this.driverInfo.origin,this.driverInfo.destination,this.driverInfo.timeLeaving,this.driverInfo.price,this.driverInfo.car,this.driverInfo.note,this.driverInfo)
    
    this.accepted = true;
    this.dismiss();
    

  }
  
  setGeoFireOrigin(){

    this.buttonColor2 = '#0fc874';
    this.buttonColor = '#001127';
    this.buttonColor3 = '#001127';
    this.buttonColor4 = '#001127';
    this.geofireService.setGeofireOr(1, this.geoinfo1.lat, this.geoinfo1.lng, this.driverInfo);
    this.click1 = true;
    if(this.click4 == true){
      this.geofireService.cancelGeoqueryDest();
      this.click4 = false;
    }
   } 

   setGeoFireOrigin1(){
    this.buttonColor2 = '#001127';
    this.buttonColor = '#001127';
    this.buttonColor3 = '#0fc874';
    this.buttonColor4 = '#001127';
    this.geofireService.setGeofireOr(1, this.geoinfo1.lat, this.geoinfo1.lng, this.driverInfo);
    this.click2 = true;
    if(this.click4 == true){
      this.geofireService.cancelGeoqueryDest();
      this.click4 = false;
    }
   } 

   setGeoFireOrigin2(){
    this.buttonColor2 = '#001127';
    this.buttonColor = '#001127';
    this.buttonColor3 = '#001127';
    this.buttonColor4 = '#0fc874';
    this.geofireService.setGeofireOr(1, this.geoinfo1.lat, this.geoinfo1.lng, this.driverInfo);
    this.click3 = true;
    if(this.click4 == true){
      this.geofireService.cancelGeoqueryDest();
      this.click4 = false;
    }
   } 

  setGeoFireDestination(){
    this.buttonColor = '#0fc874';
      this.buttonColor2 = '#001127';
      this.buttonColor3 = '#001127';
      this.buttonColor4 = '#001127';
      this.geofireService.setGeofireDest(1, this.geoinfo2.lat, this.geoinfo2.lng, this.driverInfo);
      this.click4 = true;
    if(this.click1 == true || this.click2 == true || this.click3 == true){
      this.geofireService.cancelGeoqueryOr();
      this.click1 = false;
      this.click2 = false;
      this.click3 = false;

    }
    
    }  
  dismiss() {
    this.viewCtrl.dismiss(this.accepted);
    
  }  
}

