import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, ToastController, IonicPage, App, LoadingController } from 'ionic-angular';

// import { RiderprofilePage } from '../riderprofile/riderprofile';
// import { Observable } from 'rxjs';
// import { AngularFireDatabase} from 'angularfire2/database';
import { SignUpService } from '../../services/signup.service';
import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { geofireService } from '../../services/geofire.services';
// import * as firebase from 'firebase';
// import { sendUsersService } from '../../services/sendUsers.service';
// import { Geofence } from '@ionic-native/geofence';

import {  Subscription, Subject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { instancesService } from '../../services/instances.service';
import { sendUsersService } from '../../services/sendUsers.service';
import { TripsService } from '../../services/trips.service';
import * as moment from 'moment';
import { stringify } from '@angular/core/src/render3/util';

declare var google;
@IonicPage()
@Component({
  selector: 'page-reservetrip',
  templateUrl: 'reservetrip.html'
})
export class ReservetripPage{

  userUid=this.AngularFireAuth.auth.currentUser.uid;
  usersFindingTrip : any = [];
  user:any = [];
  subscribe:Subscription;
  usersOnListRide:any=[];
  text = 'Aceptar viaje';
  userDriver;
  tripsReserves:any =[];
  reserveUser:any = [];
  userInReserveInfo:any;
  geocoder: any
  geocoordinatesOr:any;
  geocoordinatesDest:any;
  unsubscribe = new Subject;
  noReserve:boolean;


  reserveTime:any;
  constructor(public navCtrl: NavController, public SignUpService: SignUpService,public loadingCtrl: LoadingController,public TripsService:TripsService , private app: App,public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private geofireService: geofireService, public afDB: AngularFireDatabase, public instances: instancesService, public sendUsersService: sendUsersService, public toastCtrl: ToastController, private geoFireService: geofireService) {
    this.geocoder = new google.maps.Geocoder;
    this.SignUpService.getMyInfoDriver(this.SignUpService.userUniversity, this.userUid).takeUntil(this.unsubscribe)
		.subscribe(userDriver => {
			this.userDriver = userDriver;
			console.log(this.userDriver);
		});
        //get personal info of the driver
      
    this.sendUsersService.getTripsOfReserves(this.SignUpService.userUniversity,this.userUid).takeUntil(this.unsubscribe)
    .subscribe( tripsReserves => {
      console.log(this.SignUpService.userUniversity)
      this.tripsReserves = tripsReserves;
      console.log(tripsReserves);
      if(this.tripsReserves.length === 0){
        //there are no reserves to show
        this.presentLoadingCustom();   
      }else{
        //there are reserves
          this.noReserve = false;
  
      }
      console.log(this.tripsReserves);
      //check if reserve  
      moment.locale('es');   
      let currentDate:string = moment().format(' HH:mm ');
      console.log(currentDate);
      this.tripsReserves.forEach(reserve => {   
     
        this.reserveTime = moment(JSON.stringify(reserve.startHour), 'HH:mm')
        console.log(this.reserveTime)
        //confirmar si la reserva ha pasado el tiempo
        if(moment().isBefore(this.reserveTime)=== true){
          console.log("esta a tiempo");
          
        }else{
          if(reserve.isLate === true){
            //check if driver has passengers .
            if(reserve.pendingUsers === undefined||reserve.pendingUsers.length === 0 || reserve.pendingUsers === null ){
              // this.TripsService.cancelReserve(this.userUid,reserve.keyTrip);
      
              console.log("cate que no lo vi")   
      
      
            }

          }
          //esperar 5 minutos para iniciar el viaje o eliminarlo
          // setTimeout(()=>{
          // this.TripsService.cancelReserve(this.userUid,reserve.keyTrip);   
          // // TO-DO: PUSH NOTIFICATION
          // this.navCtrl.pop();
          //         }, 300000) 
          console.log("Se le olvido la reserva")

        }
      });
    }) 
  }

 ionViewDidLeave(){
    this.unsubscribe.next();
     this.unsubscribe.complete();
  }
 startTrip(tripKeyTrip,trip){
  let alert = this.alertCtrl.create({
    title: 'Iniciar Viaje',
    message: `¿Estas que seguro deseas iniciar viaje?`,
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('holi');
        }
      },
      {
        text: 'Sí',
        handler: () => {
          //check if driver has an active trip
          if(this.userDriver.onTrip === true ){

            const toast = this.toastCtrl.create({
              message: 'No puedes iniciar otro viaje porque tienes un viaje en curso',
              showCloseButton:true,
              closeButtonText: 'OK',
              position:'middle'
                 });
            toast.present();
          } else {
            //check if there is someone in the trip
            console.log(trip.pendingUsers);
            if(trip.pendingUsers === null || trip.pendingUsers === undefined){
            //do nothing because there is no one in the trip
            const toast = this.toastCtrl.create({
              message: 'No puedes iniciar un viaje sin ningún usuario a quien recoger',
              showCloseButton:true,
              closeButtonText: 'OK',
              position:'middle'
                 });
            toast.present();
            }else{
              this.TripsService.setOnTrip(this.SignUpService.userUniversity,this.userUid);   

              this.TripsService.getReserveUsers(this.SignUpService.userUniversity,tripKeyTrip,this.userUid).takeUntil(this.unsubscribe)
              .subscribe( reservesUser => {
                this.reserveUser = reservesUser;
                console.log(this.reserveUser);
                //push the keyTrip,driverId on every User and onTrip = true 
                this.reserveUser.forEach(user => {
                  this.TripsService.startTripForUsers(this.SignUpService.userUniversity,tripKeyTrip,user.userId,this.userUid);
                });    
                //debería ser en vez de navPop, una funcion que te lleve a myRide y te muestre el viaje
              })
              this.TripsService.pushKeyInDriver(this.SignUpService.userUniversity,tripKeyTrip,this.userUid);

              this.TripsService.startTrip(this.SignUpService.userUniversity,tripKeyTrip,this.userUid,trip);   
              this.TripsService.createTripState(this.SignUpService.userUniversity,tripKeyTrip,this.userUid);
              // this.navCtrl.pop();

              // steps needed to get LMU right
               this.geofireService.deleteUserGeofireDest(this.SignUpService.userUniversity, tripKeyTrip);
               this.geofireService.deleteUserGeofireOr(this.SignUpService.userUniversity, tripKeyTrip);
              setTimeout(() => {
                this.TripsService.deleteReserve(this.SignUpService.userUniversity,tripKeyTrip,this.userUid); 

                if(trip.type == 'origin'){

                  // geocoding of addresses 
                  this.geocoder.geocode({'address': trip.origin[0][0]}, (results, status)=>{
                    if(status==='OK'){
                      this.geocoordinatesOr={
                      lat:results[0].geometry.location.lat(),
                      lng: results[0].geometry.location.lng()
                       }
                     }
                     // set geofirekey for LMU
                       this.geofireService.setGeofireOrOnTrip(this.SignUpService.userUniversity, tripKeyTrip, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng);
                       this.afDB.database.ref(this.SignUpService.userUniversity + '/geofireOrTrip/' + tripKeyTrip).update({
                       driverId: this.userUid
                     })
                     console.log('executed geofire Or on Trip')
                   })
 
 
                }else if(trip.type == 'destination'){
 
                 // geocoding of addresses 
                 this.geocoder.geocode({'address': trip.destination[0][0]}, (results, status)=>{
                   if(status==='OK'){
                     this.geocoordinatesDest={
                     lat:results[0].geometry.location.lat(),
                     lng: results[0].geometry.location.lng()
                      }
                    }
                    // set geofirekey for LMU
                    this.geofireService.setGeofireDestOnTrip(this.SignUpService.userUniversity, tripKeyTrip, this.geocoordinatesDest.lat, this.geocoordinatesDest.lng);
                    this.afDB.database.ref(this.SignUpService.userUniversity + '/geofireDestTrip/' + tripKeyTrip).update({
                      driverId: this.userUid
                    })
                    console.log('executed geofire Dest on Trip')
                  })
 
 
                }
                this.app.getRootNav().push('MyridePage');
                this.MetricsService.tripsInitiated(this.SignUpService.userUniversity,this.userUid,tripKeyTrip,trip)

              }, 2500);
             

               ////
              }
            }           

          }
        }
      ]
    })
  alert.present();
  };

  
 

 lateReserve(keyTrip,reserve){
  
   let modal = this.modalCtrl.create('ReserveReminderPage', {keyTrip:keyTrip,trip:reserve});
 
   modal.present();

}

  seePassengers(KeyTrip){    
        
    let modal = this.modalCtrl.create('ConfirmreservationPage',{reserveKey:KeyTrip});
    modal.present();
    // this.usersFindingTrip.pop();
    
    // this.subscribe.unsubscribe();
  }


  cancelReserve(typeOfReserve, geofireKey, keyTrip){

    //HERE IT IS NECESSARY TO SET A PUSH NOT NOTICING USERS IN THE RESERVE THAT IT HAS BEEN REMOVED
    if(typeOfReserve == 'origin'){
      this.geofireService.cancelGeoqueryOr(geofireKey);
    }else if(typeOfReserve == 'destination'){
      this.geofireService.cancelGeoqueryDest(geofireKey);
    }
    this.TripsService.cancelReserve(this.SignUpService.userUniversity, this.userUid,keyTrip);  
  //eliminate reserve
  }
  
  help(){
    const toast = this.toastCtrl.create({
      message: 'Todas reservas serán eliminadas al finalizar el día a las 11:59pm ',
      showCloseButton:true,
      closeButtonText: 'OK',
      position:'top'
         });
    toast.present();
  }
  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box"></div>
        </div>`,
      duration: 250
    });
  
    loading.onDidDismiss(() => {
      this.noReserve = true;
  
    });
  
    loading.present();
  }
}






