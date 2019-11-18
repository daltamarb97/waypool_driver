webpackJsonp([20],{

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindridePageModule", function() { return FindridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__findride__ = __webpack_require__(831);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FindridePageModule = /** @class */ (function () {
    function FindridePageModule() {
    }
    FindridePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__findride__["a" /* FindridePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__findride__["a" /* FindridePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__findride__["a" /* FindridePage */]
            ]
        })
    ], FindridePageModule);
    return FindridePageModule;
}());

//# sourceMappingURL=findride.module.js.map

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation___ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_signup_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_geofire_services__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_driverauthentication_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_sendUsers_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_trips_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_instances_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__ = __webpack_require__(203);
// import { Component, ViewChild, ElementRef,NgZone, Renderer } from '@angular/core';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// // import { TabsPage } from '../tabs/tabs';
// // import { Geofence } from '@ionic-native/geofence';
// import { Geolocation } from '@ionic-native/geolocation/';
// import { NavController, Platform, ViewController, AlertController, ModalController, ToastController, IonicPage, App, LoadingController } from 'ionic-angular';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { sendCoordsService } from '../../services/sendCoords.service';
// // import { authenticationService } from '../../services/driverauthentication.service';
// import { SignUpService } from '../../services/signup.service';
// // import { Geofence } from '@ionic-native/geofence';
// import { geofireService } from '../../services/geofire.services';
// import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
// import { authenticationService } from '../../services/driverauthentication.service';
// import { sendUsersService } from '../../services/sendUsers.service';
// import { TripsService } from '../../services/trips.service';
// import { instancesService } from '../../services/instances.service';
// import { FCM } from '@ionic-native/fcm';
// import { Firebase } from '@ionic-native/firebase';
// declare var google;
// @IonicPage()
// @Component({
//   selector: 'page-findride',
//template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/findride/findride.html"*/'<ion-header class="bg-theme"  >\n    \n    <ion-navbar  >\n        <button ion-button menuToggle>\n            <ion-icon name="menu" style="color: white;"></ion-icon>\n           \n          </button>\n          <!-- <ion-avatar ion-button menuToggle>\n            <img style="height:60px; width:60px" src="assets/imgs/menuIcon2.png">\n        </ion-avatar> -->\n          <ion-buttons style="display: flex; justify-content: center;"> \n              <ion-item style="background-color: transparent;">\n                <!-- <ion-toggle [(ngModel)]="isConected" [checked]="isConected" (ionChange)="conectDriver()"></ion-toggle> -->\n\n                  <!-- <div><p class="text-white">Conectado</p></div> -->\n              \n                  <ion-row class="center-align row" style="margin-left: 16px; justify-content: flex-end;" >\n                    \n                      <button  #buttonDisconected class="btn rounded bg-red  text-white buttonDisconected" (click)="disconectDriver()" >Offline</button>\n                      <button #buttonConected  class="btn  text-white buttonConected" (click)="conectDriver()" >Online</button>\n                    \n                    \n                </ion-row>\n              </ion-item>\n\n           \n \n          </ion-buttons> \n       \n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content  padding>\n\n      <ion-card class="search" >\n          <ion-card-content>\n              <span style=" z-index: 1;position: relative;" class="text-theme search-text">Tu casa &nbsp;<ion-icon name="ios-arrow-down" class="text-light"></ion-icon></span>\n\n              <span class="dot bg-theme"></span>\n              <ion-searchbar required [(ngModel)]="autocompleteMyPos.input" id="input" [animated]=true (ionInput)="updateSearchResultsMyPos()"  placeholder="Cóloca la dirección de tu casa"></ion-searchbar>\n\n              <ion-list   [hidden]="autocompleteItems.length == 0">\n                  <ion-item  *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResultMyPos(item)">\n                    {{ item.description }}\n                  </ion-item>\n                </ion-list>\n                <!-- <ion-icon name="md-locate" (click)="getPositionAndMarker()" class="text-black"></ion-icon> -->\n          </ion-card-content>\n          <!-- <ion-card-content>\n              <span class="dot bg-yellow"></span>           \n             <ion-searchbar required [(ngModel)]="autocompleteMyDest.input"  id="input2" (ionInput)="updateSearchResultsMyDest()" placeholder="Cóloca tu destino"></ion-searchbar>\n  \n  \n              <ion-list   [hidden]="autocompleteItems2.length == 0">\n              <ion-item class="item" *ngFor="let item of autocompleteItems2" tappable (click)="selectSearchResultMyDest(item)">\n                {{ item.description }}\n              </ion-item>\n            </ion-list>\n              <span class="text-light search-text">Office &nbsp;<ion-icon name="ios-arrow-down" class="text-light"></ion-icon></span>\n  \n          <!- </ion-card-content> -->\n           \n      </ion-card>\n      <!-- <ion-avatar item-end>\n          <img style="height: 15%; width: 15%;" src="assets/imgs/centermap.png" (click)="centerMap()">\n      </ion-avatar> -->\n  \n   <div #map id="map"></div>  \n     \n\n  \n            <div *ngIf="onTrip" >\n              <button class="btn rounded bg-theme text-white animated infinite pulse" style=" width: 100% ;\n              position: fixed ;\n              bottom: 0px ;\n              left: 0px ;\n              height: 51px; \n              font-size: large;\n              \n          " (click)="goToTrip() " >VIAJE EN CURSO\n              </button>\n          </div>\n     \n  \n \n    \n   \n    \n\n\n \n</ion-content>\n\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/findride/findride.html"*/
// })
// export class FindridePage {
//   @ViewChild('map') mapElement: ElementRef;
//   @ViewChild('buttonConected',{read:ElementRef}) buttonConected;
//   @ViewChild('buttonDisconected',{read:ElementRef}) buttonDisconected;
//   map: any;
//   markers: any;
//   // autocomplete/geocoder variables
//   autocompleteMyPos: any;
//   autocompleteMyDest: any;
//   GoogleAutocomplete: any;
//   GooglePlaces: any;
//   geocoder: any
//   autocompleteItems: any;
//   // waypoints variables
//   directionsService: any = null;
//   directionsDisplay: any = null;
//   bounds: any = null;
//   myLatLng: any=[];
//   waypoints: any[];
//   myLatLngDest:any;
//   //¿Adonde vas? 
//   destinationSelect: any;
//   //firebase 
//   trip:any = {};
//   // tripIdFirebase = this.AngularFireAuth.auth.currentUser;
//   desFirebase:any;
//   houseAddress:any;
//   placeAddress:any;
//   tripId:any = null;
//   orFirebase:any;
//   user=this.AngularFireAuth.auth.currentUser.uid;
//   userInfo:any;
//   currentUser = this.AngularFireAuth.auth.currentUser;
//   //geofire variables
//   dbRef:any;
//   geoFire:any;
//   key;
//   driver;
//   driverInfo:any = {};
//   geoInfo1:any = {};
//   geoInfo2:any = {};
//   markerGeolocation:any;
//   markerDest:any;
//   universityInfo:any;
//   //variables for geofire reserves
//   reserves= [];
//   geocoordinatesOr:any;
//   geocoordinatesDest:any;
//   locationUniversity:any ={};
//   university:any;
//   doGeoquery:boolean;
//   keyTrip:any; 
//   onTrip:any;
//   token:any;
//   isConected:boolean = false;
//   positionDest:any;
//   lat:any;
//   lng:any;
//   myInfoAboutMyPlace:any;
//   schedules = [];
//   myReserves = [];
//   geocoordinatesHouse:any;
//   checked:boolean = false;
//   isDisconected:boolean;
//   driverReserves: any;
//   fullReserves = [];
//   constructor( private geofireService: geofireService,public TripsService:TripsService, public afDB: AngularFireDatabase, public navCtrl: NavController,public SignUpService:SignUpService,public modalCtrl: ModalController,private authenticationService: authenticationService, public geolocation: Geolocation,public zone: NgZone, public sendCoordsService: sendCoordsService, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private toastCtrl: ToastController, private app: App, private sendUsersService: sendUsersService, public instancesService: instancesService, public firebaseNative: Firebase, private platform: Platform, private fcm: FCM, public loadingCtrl: LoadingController, public renderer: Renderer) {
//     this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
//     this.geocoder = new google.maps.Geocoder;
//     this.autocompleteMyPos = { input: '' };
//     this.autocompleteItems = [];
//     this.directionsService = new google.maps.DirectionsService();
//     this.directionsDisplay = new google.maps.DirectionsRenderer({
//       suppressMarkers: true,
//   });
//     this.bounds = new google.maps.LatLngBounds();
//     this.markers = [];
//     //meter datos por el id del firebase
//  } // END OF CONSTRUCTOR
//  ionViewDidLoad(){
//   this.afDB.database.ref('allUsers/' + this.user).once('value').then((snap)=>{
//     this.SignUpService.userPlace = snap.val().place;
//     console.log(this.SignUpService.userPlace);
//     this.platform.ready().then(()=>{
//       this.getToken();
//       // this.token = this.fcm.getToken().then((token)=>{
//       //   console.log('this is the token ' + token);
//       //   this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/devices/').update({
//       //     token: token
//       //   })
//       // })
//   })
//   this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/'+this.user).once('value').then((snap)=>{
//     this.userInfo = snap.val();
//     console.log(this.userInfo);
//     let lat=this.userInfo.fixedLocation.coordinates.lat
//     console.log(this.lat);
//     let lng=this.userInfo.fixedLocation.coordinates.lng
//     this.positionDest = {lat,lng};
//     console.log(this.positionDest);
//     if(this.userInfo.toggleStatus === 'online'){
//       // this.checked = true;
//       this.isConected = true;
//       this.isDisconected = false;
//       this.changeColorOnline();
//     }else{
//       this.isConected = false;
//       this.isDisconected = true;
//       this.changeColorOffline();
//     }
//     this.loadMap();
//   })
//   //search keyTrip
//    //search keyTrip
//    this.TripsService.getKeyTrip(this.SignUpService.userPlace, this.user)
//    .subscribe(keyTrip=>{
//      this.keyTrip =keyTrip;
//      console.log(this.user)
//      console.log(this.keyTrip)
//      //if key its deleted don't show VIAJE EN CURSO  
//      if(this.keyTrip === undefined || this.keyTrip === null){
//      this.onTrip=false;
//      //  this.TripsService.eraseKeyTrip(this.user);
//      //  this.TripsService.setOnTripFalse(this.user);
//        console.log("llegue adonde era")
//      }else{
//        //confirm that trip exist and get it
//        this.getTrip();
//      }
// })
//      // set geofire key of university to avoid asking users to put where they are going
//     //  console.log(this.SignUpService.userPlace);
//     //  this.geofireService.getLocationPlace(this.SignUpService.userPlace).subscribe(university=>{
//     //    this.university = university
//     //    this.locationUniversity = this.university.location;
//     //    this.geofireService.setLocationPlace(this.SignUpService.userPlace, "some_key", this.locationUniversity.lat, this.locationUniversity.lng);
//     //  })
//      console.log(this.SignUpService.userPlace);
//      this.SignUpService.getMyInfo(this.SignUpService.userPlace, this.user).subscribe(user=>{
//        this.userInfo = user;
//       console.log(this.userInfo);
//        this.afDB.database.ref('allPlaces/' + this.SignUpService.userPlace).once('value').then((snap)=>{
//         this.universityInfo = snap.val();
//         console.log(this.universityInfo);
//         if(this.universityInfo.emails == undefined){
//           if(this.userInfo.documents){
//             if(this.userInfo.documents.carne === undefined || this.userInfo.documents.id === undefined){
//               let modal = this.modalCtrl.create('VerificationImagesPage');
//               modal.present();
//             }else if(this.userInfo.documents.carne === true && this.userInfo.documents.id === true){
//               this.instancesService.isVerifiedPerson(this.SignUpService.userPlace, this.user);
//             }
//           }else if(!this.userInfo.documents) {
//             console.log('no hay docs')
//             let modal = this.modalCtrl.create('VerificationImagesPage');
//               modal.present();
//           } 
//         }else{
//           this.instancesService.isVerifiedPerson(this.SignUpService.userPlace, this.user);
//         }
//        })
//      }) 
//     //  this.SignUpService.getInfoPlace(this.SignUpService.userPlace).subscribe(uni => {
//     //   this.universityInfo = uni;
//     //   if(this.universityInfo.email == undefined){
//     //     if(this.userInfo.documents){
//     //       if(this.userInfo.documents.carne === undefined || this.userInfo.documents.id === undefined){
//     //         let modal = this.modalCtrl.create('VerificationImagesPage');
//     //         modal.present();
//     //       }else if(this.userInfo.documents.carne === true && this.userInfo.documents.id === true){
//     //         this.instancesService.isVerifiedPerson(this.SignUpService.userPlace, this.user);
//     //       }
//     //     }else if(!this.userInfo.documents) {
//     //       console.log('no hay docs')
//     //       let modal = this.modalCtrl.create('VerificationImagesPage');
//     //         modal.present();
//     //     } 
//     //   }else{
//     //     this.instancesService.isVerifiedPerson(this.SignUpService.userPlace, this.user);
//     //   }
//     // })
//   })
// }
// async getToken() {
//   if (this.platform.is('android')) {
//     this.token = await this.firebaseNative.getToken().then((token)=>{
//       console.log('this is the token ' + token);
//       this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/devices/').update({
//         token: token
//       })
//     })
//   }
//   if (this.platform.is('ios')) {
//     this.token = await this.firebaseNative.getToken().then((token)=>{
//       console.log('this is the token ' + token);
//       this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/devices/').update({
//         token: token
//       })
//     })
//     await this.firebaseNative.grantPermission();
//   }
// }
// changeColorOnline(){
//   this.renderer.setElementStyle(this.buttonConected.nativeElement,'background-color','green')
//   this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-width','2px')
//   this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-style','solid')
//   this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-color','green')
//   this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-width','2px')
//   this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-style','solid')
//   this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-color','green')
//   this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'background-color','transparent')
//   this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'font-color','#bfbfbf')
//   this.showPopup();
// }
// changeColorOffline(){
//   this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-width','2px')
//   this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'background-color','rgb(167, 23, 23)')
//   this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-style','solid')
//   this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-color','rgb(167, 23, 23)')
//   this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-width','2px')
//   this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-style','solid')
//   this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-color','rgb(167, 23, 23)')
//   this.renderer.setElementStyle(this.buttonConected.nativeElement,'background-color','transparent')
//   this.renderer.setElementStyle(this.buttonConected.nativeElement,'font-color','#bfbfbf')
// }
// conectDriver(){
//   if(this.userInfo.onTrip === true ){
//   // if the user is on trip dont let be offline
//   const alert = this.alertCtrl.create({
//     title: '¡Cuidado!',
//     subTitle: 'No puedes desconectarte en un viaje en curso, cancélalo primero y después desconectate',
//     buttons: ['OK']
//   });
//   alert.present(); 
//   }else{ 
//       if(this.userInfo.toggleStatus === 'online'){
//         const alert = this.alertCtrl.create({
//           title: '¡Ya estas conectado!',
//           subTitle: 'Si deseas cambiar el precio de tus viajes, desconectate y vuelvete a conectar',
//           buttons: ['OK']
//         });
//         alert.present(); 
//         }else{
//           this.isConected = true;
//       this.isDisconected = false;
//       if(this.currentUser.emailVerified == false){
//         const alert = this.alertCtrl.create({
//           title: 'Oops!',
//           subTitle: 'por favor verifica tu email',
//           buttons: ['OK']
//         });
//         alert.present(); 
//         this.isConected = false;
//       this.isDisconected = true;
//       this.changeColorOffline();
//       }else{
//         if(this.userInfo.documents){
//           if(this.userInfo.documents.license == true && this.userInfo.documents.id == true){
//             if(this.userInfo.schedule){
//               try{
//                 this.houseAddress = this.autocompleteMyPos.input;
//                 this.placeAddress = this.userInfo.fixedLocation.name;
//                 console.log(this.houseAddress);
//                 if(this.autocompleteMyPos.input == ''){
//                   this.presentAlert('No tienes toda la informacion','Por favor asegura que tengas las dirección de tu casa sea correcta','Ok');
//                   this.isConected = false;
//                   this.isDisconected = true;
//                   this.changeColorOffline();
//                   this.clearMarkers();
//                   this.directionsDisplay.setDirections({routes: []});
//                   this.loadMap();
//                 }else{
//                   this.geocoder.geocode({'address': this.houseAddress[0]}, (results, status)=>{
//                     if(status==='OK'){
//                       this.geocoordinatesHouse={
//                         lat:results[0].geometry.location.lat(),
//                         lng: results[0].geometry.location.lng()
//                       }
//                     }
//                     this.geofireService.setHouseAddressName(this.SignUpService.userPlace, this.user, this.houseAddress[0]);
//                     this.geofireService.setHouseAddress(this.SignUpService.userPlace, this.user, this.geocoordinatesHouse.lat, this.geocoordinatesHouse.lng);
//                   })
//                   let loading = this.loadingCtrl.create({
//                     spinner: 'crescent',
//                     content: `
//                       <div class="custom-spinner-container">
//                         <div class="custom-spinner-box"></div>
//                       </div>`
//                       });
//                   loading.present();
//                   setTimeout(() => {
//                     loading.dismiss();
//                     let modal = this.modalCtrl.create('ConfirmpricePage');
//                     modal.onDidDismiss(accepted => {
//                       if(accepted){
//                         this.instancesService.ToggleStatusOnline(this.SignUpService.userPlace, this.user);
//                         this.changeColorOnline();
//                         console.log("estoy true")
//                         this.disable();
//                         console.log(this.userInfo.fixedLocation.name);
//                         // this.confirmPrice();
//                         // this.geocoder.geocode({'address': this.houseAddress[0]}, (results, status)=>{
//                         //   if(status==='OK'){
//                         //     this.geocoordinatesHouse={
//                         //       lat:results[0].geometry.location.lat(),
//                         //       lng: results[0].geometry.location.lng()
//                         //     }
//                         //   }
//                         //   this.geofireService.setHouseAddressName(this.SignUpService.userPlace, this.user, this.houseAddress[0]);
//                         //   this.geofireService.setHouseAddress(this.SignUpService.userPlace, this.user, this.geocoordinatesHouse.lat, this.geocoordinatesHouse.lng);
//                         // })                  
//                       }else{
//                         this.presentAlert('Información incompleta','Por favor escribe toda la información para conectarte','OK')
//                       }         
//                     })
//                  modal.present();
//                   }, 2000);             
//                 }
//               }catch(error){
//                 console.log(error);
//               }
//             }else{
//               let alert = this.alertCtrl.create({
//                 title: 'No tienes ningún horario',
//                 subTitle: 'Por favor arma tu horario o mandanos foto del horario',
//                buttons: [
//                 { 
//                   text: 'Mandar mi horario',
//                   handler: () => {
//                     this.navCtrl.push('SchedulePage');
//                   }
//                 },
//                   {
//                     text: 'Cancelar',
//                     role: 'cancel',
//                     handler: () => {
//                     }
//                   }
//                 ],
//                 cssClass: 'alertDanger'
//               });
//               alert.present();
//               this.isConected = false;
//             this.isDisconected = true;
//             this.changeColorOffline();
//             }
//           }else{
//               let alert = this.alertCtrl.create({
//                 title: '¡oh-uh!',
//                 subTitle: 'faltan documentos por subir, dirigete al menú, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
//                buttons: [
//                 { 
//                   text: 'Subir mis documentos',
//                   handler: () => {
//                     this.navCtrl.push('CarRegistrationPage');
//                   }
//                 },
//                   {
//                     text: 'Cancelar',
//                     role: 'cancel',
//                     handler: () => {
//                     }
//                   }
//                 ],
//                 cssClass: 'alertDanger'
//               });
//               alert.present();
//             }
//             this.isConected = false;
//             this.isDisconected = true;
//             this.changeColorOffline();
//         }else{
//           let alert = this.alertCtrl.create({
//             title: '¡oh-oh!',
//             subTitle: 'faltan documentos por subir, dirigete al menú, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
//            buttons: [
//             { 
//               text: 'Subir mis documentos',
//               handler: () => {
//                 this.navCtrl.push('CarRegistrationPage');
//               }
//             },
//               {
//                 text: 'Cancelar',
//                 role: 'cancel',
//                 handler: () => {
//                 }
//               }
//             ],
//             cssClass: 'alertDanger'
//           });
//           alert.present();
//           this.isConected = false;
//             this.isDisconected = true;
//             this.changeColorOffline();
//          }
//         }
//       }
//   }
// }
// disconectDriver(){
//   if(this.userInfo.toggleStatus === 'offline'){ 
//     //do nothing
//   }else{
//     //get all reserves from driver
//     this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/'+this.user).once('value').then((snapReserve)=>{
//       this.driverReserves = snapReserve.val();
//       console.log(this.driverReserves);
//       let obj = this.driverReserves;
//       Object.getOwnPropertyNames(obj).forEach((key)=>{
//         console.log(obj[key]);
//         //check if user have any user in their reserve
//         console.log(obj[key].pendingUsers);
//         if (obj[key].pendingUsers !== undefined) {
//           this.fullReserves.push(obj[key])
//         } else {
//           //there is people in the drivers' reserve
//           console.log("funciono");
//         }
//       })
//     }).then(()=>{
//       if( this.fullReserves.length === 0 ||  this.fullReserves.length === undefined ){
//         this.isConected = false;
//       this.isDisconected = true;
//       this.changeColorOffline();
//       this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/' + this.user).once('value').then(snap => {
//         console.log(snap.val()); 
//         let obj = snap.val();
//         Object.getOwnPropertyNames(obj).forEach(key => {
//           console.log(obj[key]);
//           if(obj[key].type === 'origin'){
//                 this.geofireService.deleteUserGeofireOr(this.SignUpService.userPlace, key);
//           }else if(obj[key].type === 'destination'){
//                 this.geofireService.deleteUserGeofireDest(this.SignUpService.userPlace, key);
//               }             
//         })
//       }).then(()=>{
//         this.TripsService.deleteAllReserves(this.SignUpService.userPlace, this.user);
//       })
//       this.instancesService.ToggleStatusOffline(this.SignUpService.userPlace, this.user);
//       this.enable();
//       }else{
//         this.alertOffline();
//       }
//     })
//   }  
// }
//  getTrip(){
//     this.afDB.database.ref(this.SignUpService.userPlace + '/trips/'+ this.user +'/'+ this.keyTrip)
//     .once('value').then((snapshot) => {
//       let trip = snapshot.val();
//       console.log(trip);
//       if(trip === null || trip === undefined){
//         console.log("borre");
//         //  this.TripsService.eraseKeyTrip(this.user);
//       //  this.TripsService.setOnTripFalse(this.user);
//       }else{
//         this.getOnTrip();
//       }
//     })
//  } 
//  getOnTrip(){
//    this.TripsService.getOnTrip(this.SignUpService.userPlace, this.user)
//    .subscribe(onTrip=>{
//      this.onTrip =onTrip;
//      console.log(this.onTrip)
//    })
//  }
//  goToTrip(){
//   if (this.onTrip === true) {
//     console.log('DISPARADOR')
//     let modal = this.modalCtrl.create('MyridePage');                      
//     modal.present();
//   }else{
//     this.presentAlert('Error en el viaje','Intenta entrar otra vez, si el error persiste hay un problema con el viaje, porfavor elimina el viaje en Mis reservas','OK')
//   }
//  }
//   loadMap(){
//   // this gets current position and set the camera of the map and put a marker in your location
//   this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then((position) => {
//     let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//     console.log(latLng);
//     let mapOptions = {
//         center: latLng,
//         zoom: 17,
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//         zoomControl: false,
//           mapTypeControl: false,
//           scaleControl: false,
//           streetViewControl: false,
//           rotateControl: false,
//           fullscreenControl: false,
//           styles: [
//             {
//               featureType: 'poi',
//               elementType: 'labels.icon',
//               stylers: [
//                 {
//                   visibility: 'off'
//                 }
//               ]
//             }
//           ]
//       }
//   //creates the map and give options
//     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//     this.myLatLng = {lat: position.coords.latitude , lng: position.coords.longitude};
//     this.markerGeolocation = new google.maps.Marker({
//       map: this.map,
//       animation: google.maps.Animation.DROP,
//       position: latLng,
//       draggable:true,
//       icon: {         url: "assets/imgs/house.png",
//       scaledSize: new google.maps.Size(70, 70)    
//     }
//     });
//     this.markers.push(this.markerGeolocation);
//     //allow the marker to be draged and changed the position
//     this.dragMarkerOr(this.markerGeolocation,this.autocompleteMyPos);
//     //to reverse-geocode position
//     this.geocodeLatLng(latLng,this.autocompleteMyPos);
// console.log(this.userInfo.fixedLocation.name);
//      this.markerDest = new google.maps.Marker({
//             position: this.positionDest,
//             map: this.map,
//             animation: google.maps.Animation.DROP,
//                icon: {         url: "assets/imgs/workbuilding.png",
//             scaledSize: new google.maps.Size(250, 250)    
//              }})
//              this.calculateRoute(latLng,this.positionDest);
//               this.directionsDisplay.setMap(this.map);
//     },(err) => {
//     console.log(err);    
//    });
//   }
//    calculateRoute(positionOr,positionDest){
//     //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/
//     //calculate route between markers
//     console.log("LO LOGREEEEEEEEEEEE");
//     this.bounds.extend(this.myLatLng);
//     this.map.fitBounds(this.bounds);
//     this.directionsService.route({
//      origin: positionOr,
//       destination: this.positionDest,
//       travelMode: google.maps.TravelMode.DRIVING,
//       avoidTolls: true
//     }, (response, status)=> {
//       //render
//       if(status === google.maps.DirectionsStatus.OK) {
//         this.directionsDisplay.setDirections(response);
//       }else{
//         alert('Could not display directions due to: ' + status);
//       }
//     });  
//   }
// //autocomplete of myPosition searchbar
// updateSearchResultsMyPos(){
//     if (this.autocompleteMyPos.input == '') {
//       this.autocompleteItems = [];     
//       return;
//     }
//     this.GoogleAutocomplete.getPlacePredictions({ input: this.autocompleteMyPos.input, componentRestrictions: {country:'co'} },
//     (predictions, status) => {
//       this.autocompleteItems = [];
//       if(predictions){
//         this.zone.run(() => {
//           predictions.forEach((prediction) => {
//             this.autocompleteItems.push(prediction);
//           });
//         });
//       }
//   });
// }
//   ////select result of my position searchbar
// selectSearchResultMyPos(item){
//   this.autocompleteItems=[];
//   this.clearMarkers();
//   this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
//     if(status === 'OK' && results[0]){
//       // let position = {
//       //     lat: results[0].geometry.location.lat,
//       //     lng: results[0].geometry.location.lng
//       // };
//         this.markerGeolocation = new google.maps.Marker({
//         position: results[0].geometry.location,
//         map: this.map,
//         draggable: true,
//         icon: {         url: "assets/imgs/marker-origin-driver.png",
//         scaledSize: new google.maps.Size(90, 90)    
//       },
//       animation: google.maps.Animation.DROP,
//       });
//       this.dragMarkerOr(this.markerGeolocation,this.autocompleteMyPos)
//       this.markers.push( this.markerGeolocation);
//       this.map.setCenter(results[0].geometry.location);
//       console.log(results[0].geometry.location);
//       this.autocompleteMyPos.input=[item.description]
//        this.calculateRoute(results[0].geometry.location,this.positionDest);
//       // this.directionsDisplay.setMap(null)
//     }
//   })
// }
//   ////select result of my destination searchbar
// showMyDest(item){
//   // this.geocoder.geocode({'placeId': item}, (results, status) => {
//   //   if(status === 'OK' && results[0]){
//   //     // let position = {
//   //     //   latitude: results[0].geometry.location.lat,
//   //     //   longitude: results[0].geometry.location.lng
//   //     // };
//   //       let position = new google.maps.LatLng( results[0].geometry.location.lat,
//   //        results[0].geometry.location.lng)
//   //         console.log(position)
//   //      this.markerDest = new google.maps.Marker({
//   //       position: results[0].geometry.location,
//   //       map: this.map,
//   //       animation: google.maps.Animation.DROP,
//   //       draggable:true,
//   //          icon: {         url: "assets/imgs/marker-destination2.png",
//   //       scaledSize: new google.maps.Size(90, 90)    
//   //        }})
//   //     }
//   //   })
//   }  
// ////////Markers
// clearMarkers(){
//     for (var i = 0; i < this.markers.length; i++) {
//       this.markers[i].setMap(null);
//     }
//     this.markers = [];
//   }
// dragMarkerOr(marker,inputName){
//      //allow origin marker to be draged and calculate route with the new position
//   google.maps.event.addListener(marker, 'dragend',  (evt) => {
//     let lat = marker.getPosition().lat()
//     let lng = marker.getPosition().lng()
//     let latLng = {lat,lng}
//    console.log(latLng);
//     this.geocodeLatLng(latLng,inputName)
//     this.calculateRoute(latLng,this.positionDest);
// })
// }
// centerMap(){
// }
// geocodeLatLng(latLng,inputName) {
//   this.geocoder.geocode({'location': latLng}, (results, status) => {
//     if (status === 'OK') {
//       if (results[0]) {
//          inputName.input=[results[0].formatted_address]
//       } else {
//        alert('No results found');
//       }
//     } else {
//       alert('Geocoder failed due to: ' + status);
//     }
//   });
// }
//   listride(){
//     if(this.currentUser.emailVerified == false){
//       const alert = this.alertCtrl.create({
//         title: 'Oops!',
//         subTitle: 'por favor verifica tu email',
//         buttons: ['OK']
//       });
//       alert.present();  
//     }else{
//       if(this.userInfo.documents){
//         if(this.userInfo.documents.license == true && this.userInfo.documents.id == true){
//           try {
//             this.orFirebase=[this.autocompleteMyPos.input]
//             this.desFirebase=[this.userInfo.fixedLocation.name]   
//             console.log(this.orFirebase);
//           if( this.autocompleteMyPos.input==''){
//                 this.presentAlert('No tienes toda la informacion','Por favor asegurate de que la dirección de tu casa sea la correcta','Ok');
//                 this.clearMarkers();
//                 this.directionsDisplay.setDirections({routes: []});
//                 this.loadMap();
//                } else {
//                 this.sendCoordsService.pushcoordinatesDrivers(this.SignUpService.userPlace, this.user,this.desFirebase,this.orFirebase)
//                 this.geoInfo1 = this.myLatLng;
//                 console.log(this.geoInfo1);
//                 console.log("AQUIIIIIIIIIIIIIII")
//                 console.log(this.geoInfo2.lat);
//                 //turn on geoquery university to determine wether the user is in university
//                 this.geofireService.setGeofirePlace(this.SignUpService.userPlace, 0.56, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.user);
//                //
//                 this.confirmPrice(this.geoInfo1, this.geoInfo2);
//               }
//              }
//           catch(error) {
//             // console.log(error);
//             // if(this.geoInfo2.lat === null || this.geoInfo2.lat === undefined ){
//             //   //this is to tell the user to select a place before publishing a trip
//             //   this.presentAlert('Información Incompleta','no puedes publicar un viaje sin antes seleccionar un lugar de la lista.','Ok') 
//             // }else {
//             //   this.presentAlert('Hay un error en la aplicación','Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.','Ok') 
//             // }
//             }
//             console.log(this.orFirebase);
//         }else{
//           let alert = this.alertCtrl.create({
//             title: '¡oh-uh!',
//             subTitle: 'faltan documentos por subir, dirigete a perfil, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
//            buttons: [
//             { 
//               text: 'Subir mis documentos',
//               handler: () => {
//                 this.navCtrl.push('CarRegistrationPage');
//               }
//             },
//               {
//                 text: 'Cancelar',
//                 role: 'cancel',
//                 handler: () => {
//                 }
//               }
//             ],
//             cssClass: 'alertDanger'
//           });
//           alert.present();
//         }
//       }else{
//         let alert = this.alertCtrl.create({
//           title: '¡oh-oh!',
//           subTitle: 'faltan documentos por subir, dirigete a perfil, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
//          buttons: [
//           { 
//             text: 'Subir mis documentos',
//             handler: () => {
//               this.navCtrl.push('CarRegistrationPage');
//             }
//           },
//             {
//               text: 'Cancelar',
//               role: 'cancel',
//               handler: () => {
//               }
//             }
//           ],
//           cssClass: 'alertDanger'
//         });
//         alert.present();
//       }
//     }
// }
//     presentAlert(title,text,button) {
//       let alert = this.alertCtrl.create({
//         title: title,
//         subTitle: text,
//         buttons: [button]
//       });
//       alert.present();
//     }
//    confirmPrice(houseAddr, placeAddr){
//      this.doGeoquery = false;
//       let modal = this.modalCtrl.create('ConfirmpricePage', {houseAddr, placeAddr});
//       modal.present();
//    }
//    help(){
//     const toast = this.toastCtrl.create({
//       message: 'En esta página podrás conectarte con compañeros de tu misma universidad que quieran compartir un viaje contigo.',
//      showCloseButton:true,
//       closeButtonText: 'OK',
//               position:'top'
//          });
//     toast.present();
//   }
//   disable() {
//     const inputs: any = document.getElementById("input").getElementsByTagName("INPUT");
//     inputs[0].disabled=true;
//     // const inputs2: any = document.getElementById("input2").getElementsByTagName("INPUT");
//     // inputs2[0].disabled=true;
//         }
//         enable() {
//           const inputs: any = document.getElementById("input").getElementsByTagName("INPUT");
//           inputs[0].disabled=false;
//           // const inputs2: any = document.getElementById("input2").getElementsByTagName("INPUT");
//           // inputs2[0].disabled=false;
//           //     }
//   }  
//   showPopup() {
//     let profileModal = this.modalCtrl.create('SuccessNotificationPage');
//     profileModal.present();
//   //   setTimeout(() => {
//   //     profileModal.dismiss();
//   // }, 3000);
//   }
//   alertOffline(){
//     let alert = this.alertCtrl.create({
//       title: '¿Quieres desconectarte?',
//       message: 'Waypool te conectó con otra persona, si te desconectas, le cancelarás el viaje',
//       buttons: [
//         {
//           text: 'Ir a Mis Viajes',
//           handler: () => {
//             this.navCtrl.push('ReservetripPage');
//           }
//         },
//         {
//           text: 'Offline :(',
//           handler: () => {
//             this.isConected = false;
//             this.isDisconected = true;
//             this.changeColorOffline();
//             this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/' + this.user).once('value').then(snap => {
//               console.log(snap.val()); 
//               let obj = snap.val();
//               Object.getOwnPropertyNames(obj).forEach(key => {
//                 console.log(obj[key]);
//                 if(obj[key].type === 'origin'){
//                       this.geofireService.deleteUserGeofireOr(this.SignUpService.userPlace, key);
//                 }else if(obj[key].type === 'destination'){
//                       this.geofireService.deleteUserGeofireDest(this.SignUpService.userPlace, key);
//                     }             
//               })
//             }).then(()=>{
//               this.TripsService.deleteAllReserves(this.SignUpService.userPlace, this.user);
//             })
//             this.instancesService.ToggleStatusOffline(this.SignUpService.userPlace, this.user);
//             this.enable();
//           }
//         }
//       ]
//     });
//     alert.present();
//   }
// }

// import { TabsPage } from '../tabs/tabs';
// import { Geofence } from '@ionic-native/geofence';




// import { authenticationService } from '../../services/driverauthentication.service';

// import { Geofence } from '@ionic-native/geofence';








var FindridePage = /** @class */ (function () {
    function FindridePage(geofireService, TripsService, afDB, navCtrl, SignUpService, modalCtrl, authenticationService, geolocation, zone, sendCoordsService, AngularFireAuth, alertCtrl, toastCtrl, app, sendUsersService, instancesService, firebaseNative, platform, fcm, loadingCtrl, renderer) {
        this.geofireService = geofireService;
        this.TripsService = TripsService;
        this.afDB = afDB;
        this.navCtrl = navCtrl;
        this.SignUpService = SignUpService;
        this.modalCtrl = modalCtrl;
        this.authenticationService = authenticationService;
        this.geolocation = geolocation;
        this.zone = zone;
        this.sendCoordsService = sendCoordsService;
        this.AngularFireAuth = AngularFireAuth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.sendUsersService = sendUsersService;
        this.instancesService = instancesService;
        this.firebaseNative = firebaseNative;
        this.platform = platform;
        this.fcm = fcm;
        this.loadingCtrl = loadingCtrl;
        this.renderer = renderer;
        // waypoints variables
        this.directionsService = null;
        this.directionsDisplay = null;
        this.bounds = null;
        this.myLatLng = [];
        //firebase 
        this.trip = {};
        this.tripId = null;
        this.user = this.AngularFireAuth.auth.currentUser.uid;
        this.currentUser = this.AngularFireAuth.auth.currentUser;
        this.driverInfo = {};
        this.geoInfo1 = {};
        this.geoInfo2 = {};
        //variables for geofire reserves
        this.reserves = [];
        this.locationUniversity = {};
        this.isConected = false;
        this.schedules = [];
        this.myReserves = [];
        this.checked = false;
        this.fullReserves = [];
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder;
        this.autocompleteMyPos = { input: '' };
        this.autocompleteItems = [];
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
        });
        this.bounds = new google.maps.LatLngBounds();
        this.markers = [];
        //meter datos por el id del firebase
    } // END OF CONSTRUCTOR
    FindridePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afDB.database.ref('allUsers/' + this.user).once('value').then(function (snap) {
            _this.SignUpService.userPlace = snap.val().place;
            console.log(_this.SignUpService.userPlace);
            _this.platform.ready().then(function () {
                _this.getToken();
                // this.token = this.fcm.getToken().then((token)=>{
                //   console.log('this is the token ' + token);
                //   this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/devices/').update({
                //     token: token
                //   })
                // })
            });
            _this.afDB.database.ref(_this.SignUpService.userPlace + '/drivers/' + _this.user).once('value').then(function (snap) {
                _this.userInfo = snap.val();
                console.log(_this.userInfo);
                var lat = _this.userInfo.fixedLocation.coordinates.lat;
                console.log(_this.lat);
                var lng = _this.userInfo.fixedLocation.coordinates.lng;
                _this.positionDest = { lat: lat, lng: lng };
                console.log(_this.positionDest);
                if (_this.userInfo.toggleStatus === 'online') {
                    // this.checked = true;
                    _this.isConected = true;
                    _this.isDisconected = false;
                    _this.changeColorOnline();
                }
                else {
                    _this.isConected = false;
                    _this.isDisconected = true;
                    _this.changeColorOffline();
                }
                if (_this.userInfo.houseAddress === undefined || _this.userInfo.houseAddress === null) {
                    _this.LoadMapWithoutHouseAdress();
                }
                else {
                    var latOr = _this.userInfo.houseAddress.coordinates.lat;
                    var lngOr = _this.userInfo.houseAddress.coordinates.lng;
                    _this.positionOr = { latOr: latOr, lngOr: lngOr };
                    console.log(_this.positionOr);
                    _this.LoadMapWithHouseAdress(_this.positionOr);
                }
            });
            //search keyTrip
            //search keyTrip
            _this.TripsService.getKeyTrip(_this.SignUpService.userPlace, _this.user)
                .subscribe(function (keyTrip) {
                _this.keyTrip = keyTrip;
                console.log(_this.user);
                console.log(_this.keyTrip);
                //if key its deleted don't show VIAJE EN CURSO  
                if (_this.keyTrip === undefined || _this.keyTrip === null) {
                    _this.onTrip = false;
                    //  this.TripsService.eraseKeyTrip(this.user);
                    //  this.TripsService.setOnTripFalse(this.user);
                    console.log("llegue adonde era");
                }
                else {
                    //confirm that trip exist and get it
                    _this.getTrip();
                }
            });
            // set geofire key of university to avoid asking users to put where they are going
            //  console.log(this.SignUpService.userPlace);
            //  this.geofireService.getLocationPlace(this.SignUpService.userPlace).subscribe(university=>{
            //    this.university = university
            //    this.locationUniversity = this.university.location;
            //    this.geofireService.setLocationPlace(this.SignUpService.userPlace, "some_key", this.locationUniversity.lat, this.locationUniversity.lng);
            //  })
            console.log(_this.SignUpService.userPlace);
            _this.SignUpService.getMyInfo(_this.SignUpService.userPlace, _this.user).subscribe(function (user) {
                _this.userInfo = user;
                console.log(_this.userInfo);
                _this.afDB.database.ref('allPlaces/' + _this.SignUpService.userPlace).once('value').then(function (snap) {
                    _this.universityInfo = snap.val();
                    console.log(_this.universityInfo);
                    if (_this.universityInfo.emails == undefined) {
                        if (_this.userInfo.documents) {
                            if (_this.userInfo.documents.carne === undefined || _this.userInfo.documents.id === undefined) {
                                var modal = _this.modalCtrl.create('VerificationImagesPage');
                                modal.present();
                            }
                            else if (_this.userInfo.documents.carne === true && _this.userInfo.documents.id === true) {
                                _this.instancesService.isVerifiedPerson(_this.SignUpService.userPlace, _this.user);
                            }
                        }
                        else if (!_this.userInfo.documents) {
                            console.log('no hay docs');
                            var modal = _this.modalCtrl.create('VerificationImagesPage');
                            modal.present();
                        }
                    }
                    else {
                        _this.instancesService.isVerifiedPerson(_this.SignUpService.userPlace, _this.user);
                    }
                });
            });
            //  this.SignUpService.getInfoPlace(this.SignUpService.userPlace).subscribe(uni => {
            //   this.universityInfo = uni;
            //   if(this.universityInfo.email == undefined){
            //     if(this.userInfo.documents){
            //       if(this.userInfo.documents.carne === undefined || this.userInfo.documents.id === undefined){
            //         let modal = this.modalCtrl.create('VerificationImagesPage');
            //         modal.present();
            //       }else if(this.userInfo.documents.carne === true && this.userInfo.documents.id === true){
            //         this.instancesService.isVerifiedPerson(this.SignUpService.userPlace, this.user);
            //       }
            //     }else if(!this.userInfo.documents) {
            //       console.log('no hay docs')
            //       let modal = this.modalCtrl.create('VerificationImagesPage');
            //         modal.present();
            //     } 
            //   }else{
            //     this.instancesService.isVerifiedPerson(this.SignUpService.userPlace, this.user);
            //   }
            // })
        });
    };
    FindridePage.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.platform.is('android')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.firebaseNative.getToken().then(function (token) {
                                console.log('this is the token ' + token);
                                _this.afDB.database.ref(_this.SignUpService.userPlace + '/drivers/' + _this.user + '/devices/').update({
                                    token: token
                                });
                            })];
                    case 1:
                        _a.token = _c.sent();
                        _c.label = 2;
                    case 2:
                        if (!this.platform.is('ios')) return [3 /*break*/, 5];
                        _b = this;
                        return [4 /*yield*/, this.firebaseNative.getToken().then(function (token) {
                                console.log('this is the token ' + token);
                                _this.afDB.database.ref(_this.SignUpService.userPlace + '/drivers/' + _this.user + '/devices/').update({
                                    token: token
                                });
                            })];
                    case 3:
                        _b.token = _c.sent();
                        return [4 /*yield*/, this.firebaseNative.grantPermission()];
                    case 4:
                        _c.sent();
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FindridePage.prototype.changeColorOnline = function () {
        this.renderer.setElementStyle(this.buttonConected.nativeElement, 'background-color', 'green');
        this.renderer.setElementStyle(this.buttonConected.nativeElement, 'border-width', '2px');
        this.renderer.setElementStyle(this.buttonConected.nativeElement, 'border-style', 'solid');
        this.renderer.setElementStyle(this.buttonConected.nativeElement, 'border-color', 'green');
        this.renderer.setElementStyle(this.buttonDisconected.nativeElement, 'border-width', '2px');
        this.renderer.setElementStyle(this.buttonDisconected.nativeElement, 'border-style', 'solid');
        this.renderer.setElementStyle(this.buttonDisconected.nativeElement, 'border-color', 'green');
        this.renderer.setElementStyle(this.buttonDisconected.nativeElement, 'background-color', 'transparent');
        this.renderer.setElementStyle(this.buttonDisconected.nativeElement, 'font-color', '#bfbfbf');
        this.showPopup();
    };
    FindridePage.prototype.changeColorOffline = function () {
        this.renderer.setElementStyle(this.buttonDisconected.nativeElement, 'border-width', '2px');
        this.renderer.setElementStyle(this.buttonDisconected.nativeElement, 'background-color', 'rgb(167, 23, 23)');
        this.renderer.setElementStyle(this.buttonDisconected.nativeElement, 'border-style', 'solid');
        this.renderer.setElementStyle(this.buttonDisconected.nativeElement, 'border-color', 'rgb(167, 23, 23)');
        this.renderer.setElementStyle(this.buttonConected.nativeElement, 'border-width', '2px');
        this.renderer.setElementStyle(this.buttonConected.nativeElement, 'border-style', 'solid');
        this.renderer.setElementStyle(this.buttonConected.nativeElement, 'border-color', 'rgb(167, 23, 23)');
        this.renderer.setElementStyle(this.buttonConected.nativeElement, 'background-color', 'transparent');
        this.renderer.setElementStyle(this.buttonConected.nativeElement, 'font-color', '#bfbfbf');
    };
    FindridePage.prototype.conectDriver = function () {
        var _this = this;
        if (this.userInfo.toggleStatus === 'online') {
            var alert = this.alertCtrl.create({
                title: '¡Ya estas conectado!',
                subTitle: 'Si deseas cambiar el precio de tus viajes, desconectate y vuelvete a conectar',
                buttons: ['OK']
            });
            alert.present();
        }
        else {
            this.isConected = true;
            this.isDisconected = false;
            if (this.currentUser.emailVerified == false) {
                var alert = this.alertCtrl.create({
                    title: 'Oops!',
                    subTitle: 'por favor verifica tu email',
                    buttons: ['OK']
                });
                alert.present();
                this.isConected = false;
                this.isDisconected = true;
                this.changeColorOffline();
            }
            else {
                if (this.userInfo.documents) {
                    if (this.userInfo.documents.license == true && this.userInfo.documents.id == true) {
                        if (this.userInfo.schedule) {
                            try {
                                this.houseAddress = this.autocompleteMyPos.input;
                                this.placeAddress = this.userInfo.fixedLocation.name;
                                console.log(this.houseAddress);
                                if (this.autocompleteMyPos.input == '') {
                                    this.presentAlert('No tienes toda la informacion', 'Por favor asegura que tengas las dirección de tu casa sea correcta', 'Ok');
                                    this.isConected = false;
                                    this.isDisconected = true;
                                    this.changeColorOffline();
                                    // this.clearMarkers();
                                    // this.directionsDisplay.setDirections({routes: []});
                                    // this.loadMap();
                                }
                                else {
                                    console.log(this.houseAddress[0]);
                                    console.log(this.geocoordinatesHouse.latOr);
                                    console.log(this.autocompleteMyPos.input);
                                    //wait to get name and coordinates for confirmPricePage when the geofire starts
                                    this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/houseAddress/').update({
                                        name: this.houseAddress[0]
                                    }).then(function (token) {
                                        _this.afDB.database.ref(_this.SignUpService.userPlace + '/drivers/' + _this.user + '/houseAddress/coordinates').update({
                                            lat: _this.geocoordinatesHouse.latOr,
                                            lng: _this.geocoordinatesHouse.lngOr
                                        });
                                    }).then(function (token) {
                                        // start modal
                                        var modal = _this.modalCtrl.create('ConfirmpricePage');
                                        modal.onDidDismiss(function (accepted) {
                                            if (accepted) {
                                                _this.instancesService.ToggleStatusOnline(_this.SignUpService.userPlace, _this.user);
                                                _this.changeColorOnline();
                                                console.log("estoy true");
                                                _this.disable();
                                                console.log(_this.userInfo.fixedLocation.name);
                                            }
                                            else {
                                                _this.presentAlert('Información incompleta', 'Por favor escribe toda la información para conectarte', 'OK');
                                            }
                                        });
                                        modal.present();
                                    });
                                }
                            }
                            catch (error) {
                                console.log(error);
                            }
                        }
                        else {
                            var alert = this.alertCtrl.create({
                                title: 'No tienes ningún horario',
                                subTitle: 'Por favor arma tu horario o mandanos foto del horario',
                                buttons: [
                                    {
                                        text: 'Mandar mi horario',
                                        handler: function () {
                                            _this.navCtrl.push('SchedulePage');
                                        }
                                    },
                                    {
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        handler: function () {
                                        }
                                    }
                                ],
                                cssClass: 'alertDanger'
                            });
                            alert.present();
                            this.isConected = false;
                            this.isDisconected = true;
                            this.changeColorOffline();
                        }
                    }
                    else {
                        var alert = this.alertCtrl.create({
                            title: '¡oh-uh!',
                            subTitle: 'faltan documentos por subir, dirigete al menú, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
                            buttons: [
                                {
                                    text: 'Subir mis documentos',
                                    handler: function () {
                                        _this.navCtrl.push('CarRegistrationPage');
                                    }
                                },
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }
                            ],
                            cssClass: 'alertDanger'
                        });
                        alert.present();
                    }
                    this.isConected = false;
                    this.isDisconected = true;
                    this.changeColorOffline();
                }
                else {
                    var alert = this.alertCtrl.create({
                        title: '¡oh-oh!',
                        subTitle: 'faltan documentos por subir, dirigete al menú, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
                        buttons: [
                            {
                                text: 'Subir mis documentos',
                                handler: function () {
                                    _this.navCtrl.push('CarRegistrationPage');
                                }
                            },
                            {
                                text: 'Cancelar',
                                role: 'cancel',
                                handler: function () {
                                }
                            }
                        ],
                        cssClass: 'alertDanger'
                    });
                    alert.present();
                    this.isConected = false;
                    this.isDisconected = true;
                    this.changeColorOffline();
                }
            }
        }
    };
    FindridePage.prototype.disconectDriver = function () {
        var _this = this;
        if (this.userInfo.toggleStatus === 'offline') {
            //do nothing
        }
        else {
            //get all reserves from driver
            this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/' + this.user).once('value').then(function (snapReserve) {
                _this.driverReserves = snapReserve.val();
                console.log(_this.driverReserves);
                var obj = _this.driverReserves;
                Object.getOwnPropertyNames(obj).forEach(function (key) {
                    console.log(obj[key]);
                    //check if user have any user in their reserve
                    console.log(obj[key].pendingUsers);
                    if (obj[key].pendingUsers !== undefined) {
                        _this.fullReserves.push(obj[key]);
                    }
                    else {
                        //there is people in the drivers' reserve
                        console.log("funciono");
                    }
                });
            }).then(function () {
                if (_this.fullReserves.length === 0 || _this.fullReserves.length === undefined) {
                    _this.isConected = false;
                    _this.isDisconected = true;
                    _this.changeColorOffline();
                    _this.afDB.database.ref(_this.SignUpService.userPlace + '/reserves/' + _this.user).once('value').then(function (snap) {
                        console.log(snap.val());
                        var obj = snap.val();
                        Object.getOwnPropertyNames(obj).forEach(function (key) {
                            console.log(obj[key]);
                            if (obj[key].type === 'origin') {
                                _this.geofireService.deleteUserGeofireOr(_this.SignUpService.userPlace, key);
                            }
                            else if (obj[key].type === 'destination') {
                                _this.geofireService.deleteUserGeofireDest(_this.SignUpService.userPlace, key);
                            }
                        });
                    }).then(function () {
                        _this.TripsService.deleteAllReserves(_this.SignUpService.userPlace, _this.user);
                    });
                    _this.instancesService.ToggleStatusOffline(_this.SignUpService.userPlace, _this.user);
                    _this.enable();
                }
                else {
                    _this.alertOffline();
                }
            });
        }
    };
    FindridePage.prototype.getTrip = function () {
        var _this = this;
        this.afDB.database.ref(this.SignUpService.userPlace + '/trips/' + this.user + '/' + this.keyTrip)
            .once('value').then(function (snapshot) {
            var trip = snapshot.val();
            console.log(trip);
            if (trip === null || trip === undefined) {
                console.log("borre");
                //  this.TripsService.eraseKeyTrip(this.user);
                //  this.TripsService.setOnTripFalse(this.user);
            }
            else {
                _this.getOnTrip();
            }
        });
    };
    FindridePage.prototype.getOnTrip = function () {
        var _this = this;
        this.TripsService.getOnTrip(this.SignUpService.userPlace, this.user)
            .subscribe(function (onTrip) {
            _this.onTrip = onTrip;
            console.log(_this.onTrip);
        });
    };
    FindridePage.prototype.goToTrip = function () {
        if (this.onTrip === true) {
            console.log('DISPARADOR');
            var modal = this.modalCtrl.create('MyridePage');
            modal.present();
        }
        else {
            this.presentAlert('Error en el viaje', 'Intenta entrar otra vez, si el error persiste hay un problema con el viaje, porfavor elimina el viaje en Mis reservas', 'OK');
        }
    };
    FindridePage.prototype.loadMap = function () {
        var _this = this;
        //check if user have houseAddress
        if (this.houseAddress === undefined) {
            // this gets current position and set the camera of the map and put a marker in your location
            this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (position) {
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                console.log(latLng);
                var mapOptions = {
                    center: latLng,
                    zoom: 17,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoomControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                    styles: [
                        {
                            featureType: 'poi',
                            elementType: 'labels.icon',
                            stylers: [
                                {
                                    visibility: 'off'
                                }
                            ]
                        }
                    ]
                };
                //creates the map and give options
                _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                _this.myLatLng = { lat: position.coords.latitude, lng: position.coords.longitude };
                _this.markerGeolocation = new google.maps.Marker({
                    map: _this.map,
                    animation: google.maps.Animation.DROP,
                    position: latLng,
                    draggable: true,
                    icon: { url: "assets/imgs/house.png",
                        scaledSize: new google.maps.Size(70, 70)
                    }
                });
                _this.markers.push(_this.markerGeolocation);
                _this.geocoordinatesHouse = { lat: position.coords.latitude, lng: position.coords.longitude };
                //allow the marker to be draged and changed the position
                _this.dragMarkerOr(_this.markerGeolocation, _this.autocompleteMyPos);
                //to reverse-geocode position
                _this.geocodeLatLng(latLng, _this.autocompleteMyPos);
                console.log(_this.userInfo.fixedLocation.name);
                _this.markerDest = new google.maps.Marker({
                    position: _this.positionDest,
                    map: _this.map,
                    animation: google.maps.Animation.DROP,
                    icon: { url: "assets/imgs/workbuilding.png",
                        scaledSize: new google.maps.Size(250, 250)
                    }
                });
                _this.calculateRoute(latLng, _this.positionDest);
                _this.directionsDisplay.setMap(_this.map);
            }, function (err) {
                console.log(err);
            });
        }
        else {
        }
    };
    FindridePage.prototype.calculateRoute = function (positionOr, positionDest) {
        var _this = this;
        //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/
        //calculate route between markers
        console.log("LO LOGREEEEEEEEEEEE");
        this.bounds.extend(this.myLatLng);
        this.map.fitBounds(this.bounds);
        this.directionsService.route({
            origin: positionOr,
            destination: this.positionDest,
            travelMode: google.maps.TravelMode.DRIVING,
            avoidTolls: true
        }, function (response, status) {
            //render
            if (status === google.maps.DirectionsStatus.OK) {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                alert('Could not display directions due to: ' + status);
            }
        });
    };
    //autocomplete of myPosition searchbar
    FindridePage.prototype.updateSearchResultsMyPos = function () {
        var _this = this;
        if (this.autocompleteMyPos.input == '') {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocompleteMyPos.input, componentRestrictions: { country: 'co' } }, function (predictions, status) {
            _this.autocompleteItems = [];
            if (predictions) {
                _this.zone.run(function () {
                    predictions.forEach(function (prediction) {
                        _this.autocompleteItems.push(prediction);
                    });
                });
            }
        });
    };
    ////select result of my position searchbar
    FindridePage.prototype.selectSearchResultMyPos = function (item) {
        var _this = this;
        this.autocompleteItems = [];
        this.clearMarkers();
        this.geocoder.geocode({ 'placeId': item.place_id }, function (results, status) {
            if (status === 'OK' && results[0]) {
                // let position = {
                //     lat: results[0].geometry.location.lat,
                //     lng: results[0].geometry.location.lng
                // };
                _this.markerGeolocation = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: _this.map,
                    draggable: true,
                    icon: { url: "assets/imgs/house.png",
                        scaledSize: new google.maps.Size(70, 70)
                    },
                    animation: google.maps.Animation.DROP,
                });
                _this.geocoordinatesHouse = { latOr: results[0].geometry.location.lat(), lngOr: results[0].geometry.location.lng() };
                console.log(_this.geocoordinatesHouse);
                _this.dragMarkerOr(_this.markerGeolocation, _this.autocompleteMyPos);
                _this.markers.push(_this.markerGeolocation);
                _this.map.setCenter(results[0].geometry.location);
                console.log(results[0].geometry.location);
                _this.autocompleteMyPos.input = [item.description];
                _this.calculateRoute(results[0].geometry.location, _this.positionDest);
                // this.directionsDisplay.setMap(null)
            }
        });
    };
    ////select result of my destination searchbar
    FindridePage.prototype.showMyDest = function (item) {
        // this.geocoder.geocode({'placeId': item}, (results, status) => {
        //   if(status === 'OK' && results[0]){
        //     // let position = {
        //     //   latitude: results[0].geometry.location.lat,
        //     //   longitude: results[0].geometry.location.lng
        //     // };
        //       let position = new google.maps.LatLng( results[0].geometry.location.lat,
        //        results[0].geometry.location.lng)
        //         console.log(position)
        //      this.markerDest = new google.maps.Marker({
        //       position: results[0].geometry.location,
        //       map: this.map,
        //       animation: google.maps.Animation.DROP,
        //       draggable:true,
        //          icon: {         url: "assets/imgs/marker-destination2.png",
        //       scaledSize: new google.maps.Size(90, 90)    
        //        }})
        //     }
        //   })
    };
    ////////Markers
    FindridePage.prototype.clearMarkers = function () {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
        this.markers = [];
    };
    FindridePage.prototype.dragMarkerOr = function (marker, inputName) {
        //allow origin marker to be draged and calculate route with the new position
        var _this = this;
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            var lat = marker.getPosition().lat();
            var lng = marker.getPosition().lng();
            var latOr = marker.getPosition().lat();
            var lngOr = marker.getPosition().lng();
            var latLng = { lat: lat, lng: lng };
            var latLngOr = { latOr: latOr, lngOr: lngOr };
            console.log(latLng);
            _this.geocodeLatLng(latLng, inputName);
            _this.calculateRoute(latLng, _this.positionDest);
            _this.geocoordinatesHouse = latLngOr;
        });
    };
    FindridePage.prototype.centerMap = function () {
    };
    FindridePage.prototype.geocodeLatLng = function (latLng, inputName) {
        this.geocoder.geocode({ 'location': latLng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    inputName.input = [results[0].formatted_address];
                }
                else {
                    alert('No results found');
                }
            }
            else {
                alert('Geocoder failed due to: ' + status);
            }
        });
    };
    FindridePage.prototype.listride = function () {
        var _this = this;
        if (this.currentUser.emailVerified == false) {
            var alert = this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'por favor verifica tu email',
                buttons: ['OK']
            });
            alert.present();
        }
        else {
            if (this.userInfo.documents) {
                if (this.userInfo.documents.license == true && this.userInfo.documents.id == true) {
                    try {
                        this.orFirebase = [this.autocompleteMyPos.input];
                        this.desFirebase = [this.userInfo.fixedLocation.name];
                        console.log(this.orFirebase);
                        if (this.autocompleteMyPos.input == '') {
                            this.presentAlert('No tienes toda la informacion', 'Por favor asegurate de que la dirección de tu casa sea la correcta', 'Ok');
                            this.clearMarkers();
                            this.directionsDisplay.setDirections({ routes: [] });
                            this.loadMap();
                        }
                        else {
                            this.sendCoordsService.pushcoordinatesDrivers(this.SignUpService.userPlace, this.user, this.desFirebase, this.orFirebase);
                            this.geoInfo1 = this.myLatLng;
                            console.log(this.geoInfo1);
                            //   this.geoInfo2 = {
                            //     lat: this.myLatLngDest.lat(),
                            //     lng: this.myLatLngDest.lng()
                            //   }
                            console.log("AQUIIIIIIIIIIIIIII");
                            console.log(this.geoInfo2.lat);
                            //turn on geoquery university to determine wether the user is in university
                            this.geofireService.setGeofirePlace(this.SignUpService.userPlace, 0.56, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.user);
                            //
                            this.confirmPrice(this.geoInfo1, this.geoInfo2);
                        }
                    }
                    catch (error) {
                        // console.log(error);
                        // if(this.geoInfo2.lat === null || this.geoInfo2.lat === undefined ){
                        //   //this is to tell the user to select a place before publishing a trip
                        //   this.presentAlert('Información Incompleta','no puedes publicar un viaje sin antes seleccionar un lugar de la lista.','Ok') 
                        // }else {
                        //   this.presentAlert('Hay un error en la aplicación','Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.','Ok') 
                        // }
                    }
                    console.log(this.orFirebase);
                }
                else {
                    var alert = this.alertCtrl.create({
                        title: '¡oh-uh!',
                        subTitle: 'faltan documentos por subir, dirigete a perfil, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
                        buttons: [
                            {
                                text: 'Subir mis documentos',
                                handler: function () {
                                    _this.navCtrl.push('CarRegistrationPage');
                                }
                            },
                            {
                                text: 'Cancelar',
                                role: 'cancel',
                                handler: function () {
                                }
                            }
                        ],
                        cssClass: 'alertDanger'
                    });
                    alert.present();
                }
            }
            else {
                var alert = this.alertCtrl.create({
                    title: '¡oh-oh!',
                    subTitle: 'faltan documentos por subir, dirigete a perfil, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
                    buttons: [
                        {
                            text: 'Subir mis documentos',
                            handler: function () {
                                _this.navCtrl.push('CarRegistrationPage');
                            }
                        },
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            handler: function () {
                            }
                        }
                    ],
                    cssClass: 'alertDanger'
                });
                alert.present();
            }
        }
    };
    FindridePage.prototype.presentAlert = function (title, text, button) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [button]
        });
        alert.present();
    };
    FindridePage.prototype.confirmPrice = function (houseAddr, placeAddr) {
        this.doGeoquery = false;
        var modal = this.modalCtrl.create('ConfirmpricePage', { houseAddr: houseAddr, placeAddr: placeAddr });
        modal.present();
    };
    FindridePage.prototype.help = function () {
        var toast = this.toastCtrl.create({
            message: 'En esta página podrás conectarte con compañeros de tu misma universidad que quieran compartir un viaje contigo.',
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'top'
        });
        toast.present();
    };
    FindridePage.prototype.disable = function () {
        var inputs = document.getElementById("input").getElementsByTagName("INPUT");
        inputs[0].disabled = true;
        // const inputs2: any = document.getElementById("input2").getElementsByTagName("INPUT");
        // inputs2[0].disabled=true;
    };
    FindridePage.prototype.enable = function () {
        var inputs = document.getElementById("input").getElementsByTagName("INPUT");
        inputs[0].disabled = false;
        // const inputs2: any = document.getElementById("input2").getElementsByTagName("INPUT");
        // inputs2[0].disabled=false;
        //     }
    };
    FindridePage.prototype.showPopup = function () {
        var profileModal = this.modalCtrl.create('SuccessNotificationPage');
        profileModal.present();
    };
    FindridePage.prototype.LoadMapWithoutHouseAdress = function () {
        var _this = this;
        // this gets current position and set the camera of the map and put a marker in your location
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            console.log(latLng);
            var mapOptions = {
                center: latLng,
                zoom: 17,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoomControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false,
                styles: [
                    {
                        featureType: 'poi',
                        elementType: 'labels.icon',
                        stylers: [
                            {
                                visibility: 'off'
                            }
                        ]
                    }
                ]
            };
            //creates the map and give options
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.myLatLng = { lat: position.coords.latitude, lng: position.coords.longitude };
            _this.markerGeolocation = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: latLng,
                draggable: true,
                icon: { url: "assets/imgs/house.png",
                    scaledSize: new google.maps.Size(70, 70)
                }
            });
            _this.markers.push(_this.markerGeolocation);
            _this.geocoordinatesHouse = { latOr: position.coords.latitude, lngOr: position.coords.longitude };
            //allow the marker to be draged and changed the position
            _this.dragMarkerOr(_this.markerGeolocation, _this.autocompleteMyPos);
            //to reverse-geocode position
            _this.geocodeLatLng(latLng, _this.autocompleteMyPos);
            console.log(_this.userInfo.fixedLocation.name);
            _this.markerDest = new google.maps.Marker({
                position: _this.positionDest,
                map: _this.map,
                animation: google.maps.Animation.DROP,
                icon: { url: "assets/imgs/workbuilding.png",
                    scaledSize: new google.maps.Size(250, 250)
                }
            });
            _this.calculateRoute(latLng, _this.positionDest);
            _this.directionsDisplay.setMap(_this.map);
        }, function (err) {
            console.log(err);
        });
    };
    FindridePage.prototype.LoadMapWithHouseAdress = function (positionOr) {
        var _this = this;
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            console.log(latLng);
            var positionOrMarker = new google.maps.LatLng(positionOr.latOr, positionOr.lngOr);
            var mapOptions = {
                center: latLng,
                zoom: 17,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoomControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false,
                styles: [
                    {
                        featureType: 'poi',
                        elementType: 'labels.icon',
                        stylers: [
                            {
                                visibility: 'off'
                            }
                        ]
                    }
                ]
            };
            //creates the map and give options
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.myLatLng = { lat: position.coords.latitude, lng: position.coords.longitude };
            _this.markerGeolocation = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: positionOrMarker,
                draggable: true,
                icon: { url: "assets/imgs/house.png",
                    scaledSize: new google.maps.Size(70, 70)
                }
            });
            _this.markers.push(_this.markerGeolocation);
            _this.geocoordinatesHouse = positionOr;
            //allow the marker to be draged and changed the position
            _this.dragMarkerOr(_this.markerGeolocation, _this.autocompleteMyPos);
            //to reverse-geocode position
            _this.geocodeLatLng(positionOrMarker, _this.autocompleteMyPos);
            console.log(_this.userInfo.fixedLocation.name);
            _this.markerDest = new google.maps.Marker({
                position: _this.positionDest,
                map: _this.map,
                animation: google.maps.Animation.DROP,
                icon: { url: "assets/imgs/workbuilding.png",
                    scaledSize: new google.maps.Size(250, 250)
                }
            });
            _this.calculateRoute(positionOrMarker, _this.positionDest);
            _this.directionsDisplay.setMap(_this.map);
        }, function (err) {
            console.log(err);
        });
    };
    FindridePage.prototype.alertOffline = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Quieres desconectarte?',
            message: 'Waypool te conectó con otra persona, si te desconectas, le cancelarás el viaje',
            buttons: [
                {
                    text: 'Ir a Mis Viajes',
                    handler: function () {
                        _this.navCtrl.push('ReservetripPage');
                    }
                },
                {
                    text: 'Offline :(',
                    handler: function () {
                        _this.isConected = false;
                        _this.isDisconected = true;
                        _this.changeColorOffline();
                        _this.afDB.database.ref(_this.SignUpService.userPlace + '/reserves/' + _this.user).once('value').then(function (snap) {
                            console.log(snap.val());
                            var obj = snap.val();
                            Object.getOwnPropertyNames(obj).forEach(function (key) {
                                console.log(obj[key]);
                                if (obj[key].type === 'origin') {
                                    _this.geofireService.deleteUserGeofireOr(_this.SignUpService.userPlace, key);
                                }
                                else if (obj[key].type === 'destination') {
                                    _this.geofireService.deleteUserGeofireDest(_this.SignUpService.userPlace, key);
                                }
                            });
                        }).then(function () {
                            _this.TripsService.deleteAllReserves(_this.SignUpService.userPlace, _this.user);
                        });
                        _this.instancesService.ToggleStatusOffline(_this.SignUpService.userPlace, _this.user);
                        _this.enable();
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], FindridePage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('buttonConected', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], FindridePage.prototype, "buttonConected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('buttonDisconected', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], FindridePage.prototype, "buttonDisconected", void 0);
    FindridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-findride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/findride/findride.html"*/'<ion-header class="bg-theme"  >\n    \n    <ion-navbar  >\n        <button ion-button menuToggle>\n            <ion-icon name="menu" style="color: white;"></ion-icon>\n           \n          </button>\n          <!-- <ion-avatar ion-button menuToggle>\n            <img style="height:60px; width:60px" src="assets/imgs/menuIcon2.png">\n        </ion-avatar> -->\n          <ion-buttons style="display: flex; justify-content: center;"> \n              <ion-item style="background-color: transparent;">\n                <!-- <ion-toggle [(ngModel)]="isConected" [checked]="isConected" (ionChange)="conectDriver()"></ion-toggle> -->\n\n                  <!-- <div><p class="text-white">Conectado</p></div> -->\n              \n                  <ion-row class="center-align row" style="margin-left: 16px; justify-content: flex-end;" >\n                    \n                      <button  #buttonDisconected class="btn rounded bg-red  text-white buttonDisconected" (click)="disconectDriver()" >Offline</button>\n                      <button #buttonConected  class="btn  text-white buttonConected" (click)="conectDriver()" >Online</button>\n                    \n                    \n                </ion-row>\n              </ion-item>\n\n           \n \n          </ion-buttons> \n       \n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content  padding>\n\n      <ion-card class="search" >\n          <ion-card-content>\n              <span style=" z-index: 1;position: relative;" class="text-theme search-text">Tu casa &nbsp;<ion-icon name="ios-arrow-down" class="text-light"></ion-icon></span>\n\n              <span class="dot bg-theme"></span>\n              <ion-searchbar required [(ngModel)]="autocompleteMyPos.input" id="input" [animated]=true (ionInput)="updateSearchResultsMyPos()"  placeholder="Cóloca la dirección de tu casa"></ion-searchbar>\n\n              <ion-list   [hidden]="autocompleteItems.length == 0">\n                  <ion-item  *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResultMyPos(item)">\n                    {{ item.description }}\n                  </ion-item>\n                </ion-list>\n                <!-- <ion-icon name="md-locate" (click)="getPositionAndMarker()" class="text-black"></ion-icon> -->\n          </ion-card-content>\n          <!-- <ion-card-content>\n              <span class="dot bg-yellow"></span>           \n             <ion-searchbar required [(ngModel)]="autocompleteMyDest.input"  id="input2" (ionInput)="updateSearchResultsMyDest()" placeholder="Cóloca tu destino"></ion-searchbar>\n  \n  \n              <ion-list   [hidden]="autocompleteItems2.length == 0">\n              <ion-item class="item" *ngFor="let item of autocompleteItems2" tappable (click)="selectSearchResultMyDest(item)">\n                {{ item.description }}\n              </ion-item>\n            </ion-list>\n              <span class="text-light search-text">Office &nbsp;<ion-icon name="ios-arrow-down" class="text-light"></ion-icon></span>\n  \n          <!- </ion-card-content> -->\n           \n      </ion-card>\n      <!-- <ion-avatar item-end>\n          <img style="height: 15%; width: 15%;" src="assets/imgs/centermap.png" (click)="centerMap()">\n      </ion-avatar> -->\n  \n   <div #map id="map"></div>  \n     \n\n  \n            <div *ngIf="onTrip" >\n              <button class="btn rounded bg-theme text-white animated infinite pulse" style=" width: 100% ;\n              position: fixed ;\n              bottom: 0px ;\n              left: 0px ;\n              height: 51px; \n              font-size: large;\n              \n          " (click)="goToTrip() " >VIAJE EN CURSO\n              </button>\n          </div>\n     \n  \n \n    \n   \n    \n\n\n \n</ion-content>\n\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/findride/findride.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_geofire_services__["a" /* geofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_geofire_services__["a" /* geofireService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__services_trips_service__["a" /* TripsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_trips_service__["a" /* TripsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__["AngularFireDatabase"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_signup_service__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_signup_service__["a" /* SignUpService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__services_driverauthentication_service__["a" /* authenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_driverauthentication_service__["a" /* authenticationService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation___["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation___["a" /* Geolocation */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_9__services_sendUsers_service__["a" /* sendUsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_sendUsers_service__["a" /* sendUsersService */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_11__services_instances_service__["a" /* instancesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_instances_service__["a" /* instancesService */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__["a" /* Firebase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__["a" /* Firebase */]) === "function" && _t || Object, typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */]) === "function" && _u || Object, typeof (_v = typeof __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__["a" /* FCM */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__["a" /* FCM */]) === "function" && _v || Object, typeof (_w = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */]) === "function" && _w || Object, typeof (_x = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]) === "function" && _x || Object])
    ], FindridePage);
    return FindridePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
}());

//# sourceMappingURL=findride.js.map

/***/ })

});
//# sourceMappingURL=20.js.map