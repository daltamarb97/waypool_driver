// import { Component, ViewChild } from '@angular/core';
// import { NavController, ViewController, ModalController, NavParams, Tabs, AlertController, App, IonicPage, LoadingController } from 'ionic-angular';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { sendCoordsService } from '../../services/sendCoords.service';
// import { MyridePage } from '../myride/myride';
// import { TabsPage } from '../tabs/tabs';
// import { sendUsersService } from '../../services/sendUsers.service';
// import { geofireService } from '../../services/geofire.services';
// import { ListridePage } from '../listride/listride';
// import { instancesService } from '../../services/instances.service';
// import { SignUpService } from '../../services/signup.service';


// declare var google;
// @IonicPage()

// @Component({
//   selector: 'page-confirmdirection',
//   templateUrl: 'confirmdirection.html'
// })
// export class ConfirmdirectionPage {
  
//   accepted: boolean;

  
//   note:string;
//   userUid=this.AngularFireAuth.auth.currentUser.uid;
//   geoinfo1;
//   geoinfo2;
//   buttonColor:string = '#001127';
//   buttonColor2:string = '#001127';
//   buttonColor3:string = '#001127';
//   buttonColor4:string = '#001127';
//   click2:any;
//   click3:any;
//   click1:any;
//   click4:any;

//   driverInfo;
//   driver:any;
//   //geocoder variable
//   geocoder: any
//   geocoordinatesDest:any ={};
//   geocoordinatesOr:any ={};


//   constructor(public navCtrl: NavController, public appCtrl: App,public alertCtrl: AlertController,private afDB: AngularFireDatabase,public sendUsersService: sendUsersService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, private geofireService: geofireService, public instances: instancesService, public loadingCtrl: LoadingController, private signupService:SignUpService ) {

//     this.geoinfo1 = this.navParams.get('geoInfo1')
//     console.log(this.geoinfo1)

//     this.geoinfo2 = this.navParams.get('geoInfo2')
//     console.log(this.geoinfo2)

//     this.driverInfo = this.navParams.get('driverInfo')
//     console.log(this.driverInfo);

//     this.geocoder = new google.maps.Geocoder;

//     // geocoding of addresses that came from findaRide
//     this.geocoder.geocode({'address': this.driverInfo.destination[0][0]}, (results, status)=>{
//       if(status==='OK'){
//         this.geocoordinatesDest={
//           lat:results[0].geometry.location.lat(),
//           lng: results[0].geometry.location.lng()
//         }
//         console.log(this.geocoordinatesDest.lat, this.geocoordinatesDest.lng )
//       }
//     })

//     this.geocoder.geocode({'address': this.driverInfo.origin[0][0]}, (results, status)=>{
//       if(status==='OK'){
//         this.geocoordinatesOr={
//           lat:results[0].geometry.location.lat(),
//           lng: results[0].geometry.location.lng()
//         }
//         console.log(this.geocoordinatesOr.lat, this.geocoordinatesOr.lng )
//       }
//     })

//     this.signupService.getMyInfoDriver(this.userUid).subscribe((driver)=>{
//       this.driver = driver;
//     })


    
//   }

//   ionViewWillEnter(){
//     this.click1 = false;
//     this.click2 = false;
//     this.click3 = false;
//     this.click4 = false;
   
//   }




//   acceptTrip(){
//     this.accepted = true;
//     this.sendCoordsService.addReserve(this.userUid, this.driverInfo.car, this.driverInfo.destination, this.driverInfo.origin, this.driverInfo.note, this.driverInfo.price, this.driverInfo.currentHour, this.driverInfo.startHour);
//     this.dismiss();

//   }
  
//   setGeoFireOrigin(){
//     this.buttonColor2 = '#0fc874';
//     this.buttonColor = '#001127';
//     this.buttonColor3 = '#001127';
//     this.buttonColor4 = '#001127';
//     this.geofireService.setGeofireOr(2, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng, this.driverInfo.name, this.driverInfo.lastname, this.driverInfo.car, this.driverInfo.destination, this.driverInfo.note, this.driverInfo.origin, this.driverInfo.price, this.driverInfo.userId);
//     this.click1 = true;
//     if(this.click4 == true){
//       this.geofireService.cancelGeoqueryDest();
//       this.click4 = false;
//     }
//    } 

//    setGeoFireOrigin1(){
//     this.buttonColor2 = '#001127';
//     this.buttonColor = '#001127';
//     this.buttonColor3 = '#0fc874';
//     this.buttonColor4 = '#001127';
//     this.geofireService.setGeofireOr(2, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng, this.driverInfo.name, this.driverInfo.lastname, this.driverInfo.car, this.driverInfo.destination, this.driverInfo.note, this.driverInfo.origin, this.driverInfo.price, this.driverInfo.userId);
//     this.click2 = true;
//     if(this.click4 == true){
//       this.geofireService.cancelGeoqueryDest();
//       this.click4 = false;
//     }
//    } 

//    setGeoFireOrigin2(){
//     this.buttonColor2 = '#001127';
//     this.buttonColor = '#001127';
//     this.buttonColor3 = '#001127';
//     this.buttonColor4 = '#0fc874';
//     this.geofireService.setGeofireOr(2, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng, this.driverInfo.name, this.driverInfo.lastname, this.driverInfo.car, this.driverInfo.destination, this.driverInfo.note, this.driverInfo.origin, this.driverInfo.price, this.driverInfo.userId);
//     this.click3 = true;
//     if(this.click4 == true){
//       this.geofireService.cancelGeoqueryDest();
//       this.click4 = false;
//     }
//    } 

//   setGeoFireDestination(){
//     this.buttonColor = '#0fc874';
//       this.buttonColor2 = '#001127';
//       this.buttonColor3 = '#001127';
//       this.buttonColor4 = '#001127';
//       this.geofireService.setGeofireDest(2, this.geocoordinatesDest.lat, this.geocoordinatesDest.lng, this.driverInfo.name, this.driverInfo.lastname, this.driverInfo.car, this.driverInfo.destination, this.driverInfo.note, this.driverInfo.origin, this.driverInfo.price, this.driverInfo.userId);
//       this.click4 = true;
//     if(this.click1 == true || this.click2 == true || this.click3 == true){
//       this.geofireService.cancelGeoqueryOr();
//       this.click1 = false;
//       this.click2 = false;
//       this.click3 = false;

//     }
    
//     }  
//   dismiss() {
//     this.viewCtrl.dismiss(this.accepted);
    
//   }  

  


// }

