import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, Tabs, AlertController, App, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.service';
import { sendCoordsService } from '../../services/sendCoords.service';

import { sendUsersService } from '../../services/sendUsers.service';
import { priceService } from '../../services/price.service';
import { geofireService } from '../../services/geofire.services';
import { Subscription, Subject } from 'rxjs';


declare var google;
@IonicPage()

@Component({
  selector: 'page-confirmprice',
  templateUrl: 'confirmprice.html'
})
export class ConfirmpricePage {
  
  accepted: boolean;

  precio:string;
  note:string;
  userDriverUid=this.AngularFireAuth.auth.currentUser.uid
  //variable for get data in function
  driver:any ={};
  // variable to get data on constructor
  driver2:any;
  //variable to transfer data from driver to this one
  driverInfo:any ={};
  driverInfoNote:any ={};
  lat;
  lng;

  geoInfo1;
  geoInfo2;
  location;
  buttonColor:string = '#0fc874';
  buttonColor2:string = '#0fc874';
  unsubscribe = new Subject;
  carModelList:any=[];
  car:string;

  hour:any;
  nowHour:any = new Date();
  hourToSend:any;

   //geocoder variable
   geocoder: any
   geocoordinatesDest:any ={};
   geocoordinatesOr:any ={};
   destination:any;
   origin:any;
   destinationNote:any;
   originNote:any;

   // variables for reserve
   goefireKey:any;
   typeOfReserve:any;
   reserve:any;


  constructor(public navCtrl: NavController, public appCtrl: App,  public PriceService:priceService,public alertCtrl: AlertController,private afDB: AngularFireDatabase,public sendUsersService: sendUsersService, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, private geofireService: geofireService) {
    //hay dos variables, driver y driver2 lo cual significa que debo llamar a la info del driver en dos ocasiones distintas, cuando hay nota y cuando no
    this.SignUpService.getCar(this.userDriverUid)
    .subscribe( car => {
      //get cars registered
      this.carModelList = car;
      console.log(this.carModelList)
    });

    this.SignUpService.getMyInfo(this.userDriverUid).subscribe(driver=>{
      this.driver = driver;
      
      this.driverInfo.origin = this.driver.trips.origin
      this.driverInfo.destination = this.driver.trips.destination
      this.driverInfo.name = this.driver.name
      this.driverInfo.lastname = this.driver.lastname
      this.driverInfo.phone = this.driver.phone
      this.driverInfo.userId = this.driver.userId
      this.driverInfo.car = this.driver.trips.car
      this.driverInfo.price = this.driver.trips.price
      this.driverInfo.currentHour = this.driver.trips.nowHour
      this.driverInfo.startHour = this.driver.trips.hour
      this.driverInfo.note = 'No hay nota.'
      this.driverInfo.keyReserve = this.driver.keyLastReserve
 })

 this.SignUpService.getMyInfo(this.userDriverUid).subscribe(driver=>{
  this.driver2 = driver;
  
     this.driverInfoNote.origin = this.driver2.trips.origin
     this.driverInfoNote.destination = this.driver2.trips.destination
     this.driverInfoNote.name = this.driver2.name
     this.driverInfoNote.lastname = this.driver2.lastname
     this.driverInfoNote.phone = this.driver2.phone
     this.driverInfoNote.userId = this.driver2.userId
     this.driverInfoNote.car = this.driver2.trips.car
     this.driverInfoNote.price = this.driver2.trips.price
     this.driverInfoNote.currentHour = this.driver2.trips.nowHour
     this.driverInfoNote.startHour = this.driver2.trips.hour
     this.driverInfoNote.note = this.driver2.trips.note
     this.driverInfoNote.keyReserve = this.driver2.keyLastReserve  
    })    
    this.geocoder = new google.maps.Geocoder;
  }

  ionViewDidEnter(){
     this.geofireService.cancelGeoqueryUniversity();
    }
  


    setPriceDriver(){
  
      if(this.precio == null || this.precio == '' || this.car == null || this.car=='' || this.hour == null || this.hour == ''){
        const alert = this.alertCtrl.create({
            title: 'Informacion Incompleta',
            subTitle: 'No haz colocado el precio por el que estas dispuesto a compatir tu viaje, no haz especificado en que carro te moverás o no haz puesto la hora del inicio del viaje',
            buttons: ['OK']
          });
          alert.present();
    }else if(this.note == null || this.note == '' ){
        this.hourToSend = this.nowHour.getHours()+":"+this.nowHour.getMinutes();
        this.PriceService.setPrice(this.userDriverUid,this.precio,this.car, this.hour, this.hourToSend);
        this.accepted = true;
        this.dismiss();
        this.goefireKey = Date.now();
        console.log(this.goefireKey);
      
      if(this.driver.geofireOrigin === true){
        this.typeOfReserve = 'origin';
        this.note = 'No hay nota.'
       this.sendCoordsService.addReserve(this.userDriverUid, this.car, this.driverInfo.destination, this.driverInfo.origin, this.note, this.precio, this.hour, this.hourToSend, this.goefireKey, this.typeOfReserve,this.driverInfo);
      }else{
        this.typeOfReserve = 'destination'
        this.note = 'No hay nota.'
       this.sendCoordsService.addReserve(this.userDriverUid, this.car, this.driverInfo.destination, this.driverInfo.origin, this.note, this.precio, this.hour, this.hourToSend, this.goefireKey, this.typeOfReserve,this.driverInfo);
      }
    // geocoding of addresses that came from findRide
   this.destination = this.driverInfo.destination[0][0];
   this.origin = this.driverInfo.origin[0][0];
   
    this.geocoder.geocode({'address': this.destination}, (results, status)=>{
      if(status==='OK'){
        this.geocoordinatesDest={
          lat:results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        }
      }
      // turn geofire On
      if(!this.driver.geofireOrigin === true){
        console.log(this.goefireKey);
      this.geofireService.setGeofireDest(2, this.geocoordinatesDest.lat, this.geocoordinatesDest.lng, this.goefireKey, this.driverInfo.userId, this.driverInfo.keyReserve);
      console.log('executed geofire Dest')
      }else{
        console.log('not destination');
    }

  })

    this.geocoder.geocode({'address': this.origin}, (results, status)=>{
      if(status==='OK'){
        this.geocoordinatesOr={
          lat:results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        }
      }
          // turn geofire On
        if(this.driver.geofireOrigin === true){
          console.log(this.goefireKey);
        this.geofireService.setGeofireOr(2, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng, this.goefireKey, this.driverInfo.userId, this.driverInfo.keyReserve)
        console.log('executed geofire Or')
        }else{
          console.log('not origin');
      }

 })
    
      } else {
        console.log(this.driverInfoNote.car);
        this.hourToSend = this.nowHour.getHours()+":"+this.nowHour.getMinutes();
        this.PriceService.setPriceAndNote(this.userDriverUid,this.precio,this.note,this.car, this.hour, this.hourToSend)
        this.accepted = true;
        this.dismiss();
        this.goefireKey = Date.now();
        console.log(this.goefireKey);

     // add reserve and command to dismiss modal
     // IMPORTANT: the timeout is because the reserve settles too fast, so the price and note are not taken into account by the
        setTimeout(()=>{
          if(this.driver.geofireOrigin === true){
            this.typeOfReserve = 'origin';
            this.sendCoordsService.addReserve(this.userDriverUid, this.driverInfoNote.car, this.driverInfoNote.destination, this.driverInfoNote.origin, this.driverInfoNote.note, this.driverInfoNote.price, this.driverInfoNote.currentHour, this.driverInfoNote.startHour, this.goefireKey, this.typeOfReserve,this.driverInfoNote);
          }else{
            this.typeOfReserve = 'destination'
            this.sendCoordsService.addReserve(this.userDriverUid, this.driverInfoNote.car, this.driverInfoNote.destination, this.driverInfoNote.origin, this.driverInfoNote.note, this.driverInfoNote.price, this.driverInfoNote.currentHour, this.driverInfoNote.startHour, this.goefireKey, this.typeOfReserve,this.driverInfoNote);
          }
        }, 2000)
        
      // geocoding of addresses that came from findRide
     this.destinationNote = this.driverInfoNote.destination[0][0];
     this.originNote = this.driverInfoNote.origin[0][0];

    this.geocoder.geocode({'address': this.destinationNote}, (results, status)=>{
      if(status==='OK'){
        this.geocoordinatesDest={
          lat:results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        }
      }
      if(!this.driver.geofireOrigin === true){
        console.log(this.goefireKey);
        this.geofireService.setGeofireDest(2, this.geocoordinatesDest.lat, this.geocoordinatesDest.lng, this.goefireKey, this.driverInfoNote.userId, this.driverInfoNote.keyReserve)
        console.log('executed geofire Dest')
      }else{
        console.log('not destination');
      }
    })

    this.geocoder.geocode({'address': this.originNote}, (results, status)=>{
      if(status==='OK'){
        this.geocoordinatesOr={
          lat:results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        }
      }
       // turn geofire On
        if(this.driver.geofireOrigin === true){
          console.log(this.goefireKey);
          this.geofireService.setGeofireOr(2, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng, this.goefireKey,this.driverInfoNote.userId, this.driverInfoNote.keyReserve)
          console.log('executed geofire Or')
        }else{
          console.log('not origin')
        }
  })
        
}
      
}; 
    addReserve(){ 
      if(this.driver.geofireOrigin === true){
         this.typeOfReserve = 'origin';
       this.sendCoordsService.addReserve(this.userDriverUid, this.driverInfo.car, this.driverInfo.destination, this.driverInfo.origin, this.driverInfo.note, this.driverInfo.price, this.driverInfo.currentHour, this.driverInfo.startHour, this.goefireKey, this.typeOfReserve,this.driverInfo);
      }else{
        this.typeOfReserve = 'destination'
       this.sendCoordsService.addReserve(this.userDriverUid, this.driverInfo.car, this.driverInfo.destination, this.driverInfo.origin, this.driverInfo.note, this.driverInfo.price, this.driverInfo.currentHour, this.driverInfo.startHour, this.goefireKey, this.typeOfReserve,this.driverInfo);
      }
     
    }
        
  dismiss() {
    this.viewCtrl.dismiss(this.accepted);
    // this.unsubscribe.next();
    // this.unsubscribe.unsubscribe();
  }  

  ionViewDidLeave(){
    this.geofireService.cancelGeofireOrigin(this.userDriverUid);
  }

}
