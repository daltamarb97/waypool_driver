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
import * as moment from 'moment';


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
   startHour:any;

  constructor(public navCtrl: NavController, public appCtrl: App,  public PriceService:priceService,public alertCtrl: AlertController,private afDB: AngularFireDatabase,public sendUsersService: sendUsersService, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, private geofireService: geofireService) {
    //hay dos variables, driver y driver2 lo cual significa que debo llamar a la info del driver en dos ocasiones distintas, cuando hay nota y cuando no
    this.SignUpService.getCar( this.SignUpService.userUniversity , this.userDriverUid)
    .subscribe( car => {
      //get cars registered
      this.carModelList = car;
      console.log(this.carModelList)
    });

    this.SignUpService.getMyInfo(this.SignUpService.userUniversity , this.userDriverUid).subscribe(driver=>{
      this.driver = driver;
      
      this.driverInfo.origin = this.driver.trips.origin
      this.driverInfo.destination = this.driver.trips.destination
      this.driverInfo.name = this.driver.name
      this.driverInfo.lastname = this.driver.lastname
      this.driverInfo.phone = this.driver.phone
      this.driverInfo.userId = this.driver.userId
      this.driverInfo.car = this.driver.trips.car
      this.driverInfo.price = this.driver.trips.price
      this.driverInfo.note = 'No hay nota.'
      this.driverInfo.verifiedPerson = this.driver.verifiedPerson
      console.log('got info here');
 })
 

 this.SignUpService.getMyInfo(this.SignUpService.userUniversity , this.userDriverUid).subscribe(driver=>{
  this.driver2 = driver;
  
     this.driverInfoNote.origin = this.driver2.trips.origin
     this.driverInfoNote.destination = this.driver2.trips.destination
     this.driverInfoNote.name = this.driver2.name
     this.driverInfoNote.lastname = this.driver2.lastname
     this.driverInfoNote.phone = this.driver2.phone
     this.driverInfoNote.userId = this.driver2.userId
     this.driverInfoNote.car = this.driver2.trips.car
     this.driverInfoNote.price = this.driver2.trips.price
     this.driverInfoNote.note = this.driver2.trips.note
     this.driverInfoNote.verifiedPerson = this.driver2.verifiedPerson
  
})

    
    this.geocoder = new google.maps.Geocoder;
  }

  ionViewDidEnter(){
     this.geofireService.cancelGeoqueryUniversity();
    }
  


    setPriceDriver(){
     let reserveDate = moment(JSON.stringify(this.startHour), 'HH:mm')
      console.log(reserveDate);      
      console.log(moment().isBefore(reserveDate));
      if(moment().isBefore(reserveDate) === true){
      if(this.precio == null || this.precio == '' || this.car == null || this.car=='' || this.startHour == null || this.startHour == ''){
        const alert = this.alertCtrl.create({
            title: 'Informacion Incompleta',
            subTitle: 'No haz colocado el precio por el que estas dispuesto a compatir tu viaje, no haz especificado en que carro te moverás o no haz puesto la hora del inicio del viaje',
            buttons: ['OK']
          });
          alert.present();
    }else if(this.note == null || this.note == '' ){
        this.hourToSend = this.nowHour.getHours()+":"+this.nowHour.getMinutes();
        this.PriceService.setPrice(this.SignUpService.userUniversity, this.userDriverUid,this.precio,this.car);
        this.accepted = true;
        this.dismiss();
        // this.goefireKey = Date.now();

        
      if(this.driver.geofireOrigin === true){
        this.typeOfReserve = 'origin';
        this.note = 'No hay nota.'

      // IMPORTANT: addService from sendCoordsService is no longer used because it was generating that the availableReserve in user had a deprecated keyTrip
      this.afDB.database.ref(this.SignUpService.userUniversity + '/reserves/'+ this.userDriverUid).push({
        driver: this.driverInfo,
        car:this.car,
        destination:this.driverInfo.destination,
        origin:this.driverInfo.origin,
        note:this.note,
        price:this.precio,
        startHour: this.startHour,
        type: this.typeOfReserve

    }).then((snap)=>{
      this.destination = this.driverInfo.destination[0][0];
      this.origin = this.driverInfo.origin[0][0];
      const key = snap.key;
       
      // geocoding of addresses that came from findRide
        this.geocoder.geocode({'address': this.origin}, (results, status)=>{
          if(status==='OK'){
            this.geocoordinatesOr={
              lat:results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            }
          }
              // set geofirekey 
            // this.geofireService.setGeofireOr(2, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng, this.goefireKey, this.driverInfo.userId, key)
            this.geofireService.setGeofireOrNEWTEST(this.SignUpService.userUniversity, key, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng );
            this.afDB.database.ref(this.SignUpService.userUniversity + '/geofireOr/' + key).update({
              driverId: this.driverInfo.userId
            })
            console.log('executed geofire Or')
     })


        this.afDB.database.ref(this.SignUpService.userUniversity + '/reserves/'+ this.userDriverUid + '/' + key).update({
            keyTrip: key 
        }) 
    })
    }else{
        this.typeOfReserve = 'destination'
        this.note = 'No hay nota.'
  
        this.afDB.database.ref(this.SignUpService.userUniversity + '/reserves/'+ this.userDriverUid).push({
          driver: this.driverInfo,
        car:this.car,
        destination:this.driverInfo.destination,
        origin:this.driverInfo.origin,
        note:this.note,
        price:this.precio,
        startHour: this.startHour,

        // geofireKey: this.goefireKey,
        type: this.typeOfReserve

    }).then((snap)=>{
      this.destination = this.driverInfo.destination[0][0];
      this.origin = this.driverInfo.origin[0][0];
      const key = snap.key;
    
      // geocoding of addresses that came from findRide
      this.geocoder.geocode({'address': this.destination}, (results, status)=>{
        if(status==='OK'){
          this.geocoordinatesDest={
            lat:results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          }
        }
        // set geofire key
          // this.geofireService.setGeofireDest(2, this.geocoordinatesDest.lat, this.geocoordinatesDest.lng, this.goefireKey, this.driverInfo.userId, key);
        
          this.geofireService.setGeofireDestNEWTEST(this.SignUpService.userUniversity, key, this.geocoordinatesDest.lat, this.geocoordinatesDest.lng);
          this.afDB.database.ref(this.SignUpService.userUniversity + '/geofireDest/' + key).update({
            driverId: this.driverInfo.userId
          })
          
          console.log('executed geofire Dest')  
    })

    this.afDB.database.ref(this.SignUpService.userUniversity + '/reserves/'+ this.userDriverUid + '/' + key).update({
      keyTrip: key 
  })

    })
    }
    
      } else {
        this.hourToSend = this.nowHour.getHours()+":"+this.nowHour.getMinutes();
        this.PriceService.setPriceAndNote(this.SignUpService.userUniversity, this.userDriverUid,this.precio,this.note,this.car);
        this.accepted = true;
        this.dismiss();
        // this.goefireKey = Date.now();
        // console.log(this.goefireKey);

     // add reserve and command to dismiss modal
        
     if(this.driver.geofireOrigin === true){
      this.typeOfReserve = 'origin';

      this.afDB.database.ref(this.SignUpService.userUniversity + '/reserves/'+ this.userDriverUid).push({
        driver: this.driverInfoNote,
        car:this.car,
        destination:this.driverInfoNote.destination,
        origin:this.driverInfoNote.origin,
        note: this.note,
        price:this.precio,
        startHour: this.startHour,

        // geofireKey: this.goefireKey,
        type: this.typeOfReserve
      }).then((snap)=>{
        this.destinationNote = this.driverInfoNote.destination[0][0];
        this.originNote = this.driverInfoNote.origin[0][0];
        const key = snap.key;

        // geocoding of addresses that came from findRide
        this.geocoder.geocode({'address': this.originNote}, (results, status)=>{
          if(status==='OK'){
            this.geocoordinatesOr={
              lat:results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            }
          }
           // set geofire key 
              // this.geofireService.setGeofireOr(2, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng, this.goefireKey,this.driverInfoNote.userId, key)
              this.geofireService.setGeofireOrNEWTEST(this.SignUpService.userUniversity, key, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng );
              this.afDB.database.ref(this.SignUpService.userUniversity +'/geofireOr/' + key).update({
                driverId: this.driverInfoNote.userId
              })
              console.log('executed geofire Or')
      })

      this.afDB.database.ref(this.SignUpService.userUniversity + '/reserves/'+ this.userDriverUid + '/' + key).update({
        keyTrip: key 
       })
      })
    }else{
      this.typeOfReserve = 'destination';

      this.afDB.database.ref(this.SignUpService.userUniversity + '/reserves/'+ this.userDriverUid).push({
        driver: this.driverInfoNote,
        car:this.car,
        destination:this.driverInfoNote.destination,
        origin:this.driverInfoNote.origin,
        note: this.note,
        price:this.precio,
        startHour: this.startHour,

        // geofireKey: this.goefireKey,
        type: this.typeOfReserve
      }).then((snap)=>{
        this.destinationNote = this.driverInfoNote.destination[0][0];
        this.originNote = this.driverInfoNote.origin[0][0];
        const key = snap.key;

        // geocoding of addresses that came from findRide
        this.geocoder.geocode({'address': this.destinationNote}, (results, status)=>{
          if(status==='OK'){
            this.geocoordinatesDest={
              lat:results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            }
          }
              // this.geofireService.setGeofireDest(2, this.geocoordinatesDest.lat, this.geocoordinatesDest.lng, this.goefireKey,this.driverInfoNote.userId, key)
             
        // set geofire key 
              this.geofireService.setGeofireDestNEWTEST(this.SignUpService.userUniversity, key, this.geocoordinatesDest.lat, this.geocoordinatesDest.lng);
              this.afDB.database.ref(this.SignUpService.userUniversity + '/geofireDest/' + key).update({
                driverId: this.driverInfoNote.userId
              })
              
              console.log('executed geofire Dest')
      })

      this.afDB.database.ref(this.SignUpService.userUniversity + '/reserves/'+ this.userDriverUid + '/' + key).update({
        keyTrip: key 
       })
      })
    }
          
}
      }else{
           	let alert = this.alertCtrl.create({
            title: 'Información erronea',
            subTitle: 'no se puede colocar una reserva para unas horas que ya pasaron',
            buttons: ['OK']
          });
          alert.present();
          console.log('es una fecha pasada');
      }   

      console.log(this.car);
}; 
        
  dismiss() {
    this.viewCtrl.dismiss(this.accepted);
    // this.unsubscribe.next();
    // this.unsubscribe.unsubscribe();
  }  

  ionViewDidLeave(){
    this.geofireService.cancelGeofireOrigin(this.SignUpService.userUniversity, this.userDriverUid);
  }

}