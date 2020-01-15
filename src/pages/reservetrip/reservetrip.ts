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
import { MetricsService } from '../../services/metrics.service';

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
  constructor(public navCtrl: NavController, public SignUpService: SignUpService,public loadingCtrl: LoadingController,public TripsService:TripsService , private app: App,public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private geofireService: geofireService, public afDB: AngularFireDatabase, public instances: instancesService, public sendUsersService: sendUsersService, public toastCtrl: ToastController, private geoFireService: geofireService, private MetricsService: MetricsService) {
    this.geocoder = new google.maps.Geocoder;
    this.SignUpService.getMyInfoDriver(this.SignUpService.userPlace, this.userUid).takeUntil(this.unsubscribe)
		.subscribe(userDriver => {
			this.userDriver = userDriver;
			console.log(this.userDriver);
		});
        //get personal info of the driver
      
    this.sendUsersService.getTripsOfReserves(this.SignUpService.userPlace,this.userUid).takeUntil(this.unsubscribe)
    .subscribe( tripsReserves => {
      console.log(this.SignUpService.userPlace)
      this.tripsReserves = tripsReserves;
      console.log(tripsReserves);
      if(this.tripsReserves.length === 0){
        //there are no reserves to show
        this.presentLoadingCustom();
        // TO-DO: CAMBIAR LA FRASE QUE DIGA "NADIE SE HA UNIDO TODAVÍA A TU VIAJE"
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
              this.TripsService.setOnTrip(this.SignUpService.userPlace,this.userUid);   
              console.log(tripKeyTrip);
              


              this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/'+this.userUid+'/'+ tripKeyTrip+'/pendingUsers').once('value').then((snapReserve)=>{
                this.reserveUser = snapReserve.val();

                console.log(this.reserveUser);

                let obj = this.reserveUser;
                Object.getOwnPropertyNames(obj).forEach((key)=>{
                  console.log(obj[key]);
                  this.TripsService.startTripForUsers(this.SignUpService.userPlace,tripKeyTrip,obj[key].userId,this.userUid);
                  console.log(obj[key].userId);
    
                })
                
              }).then(()=>{              
                this.TripsService.pushKeyInDriver(this.SignUpService.userPlace,tripKeyTrip,this.userUid);
  
                this.TripsService.startTrip(this.SignUpService.userPlace,tripKeyTrip,this.userUid,trip);   
                this.TripsService.createTripState(this.SignUpService.userPlace,tripKeyTrip,this.userUid);
                // this.navCtrl.pop();
  
                // steps needed to get LMU right
                 this.geofireService.deleteUserGeofireDest(this.SignUpService.userPlace, tripKeyTrip);
                 this.geofireService.deleteUserGeofireOr(this.SignUpService.userPlace, tripKeyTrip);

                 this.TripsService.deleteReserve(this.SignUpService.userPlace,tripKeyTrip,this.userUid); 

                 if(trip.type == 'origin'){
 
                   // geocoding of addresses 
                   console.log(trip.houseAddr[0][0]);
                   console.log(trip.houseAddr[0]);
                   console.log(trip.houseAddr);
                   
                   
                   
                   this.geocoder.geocode({'address': trip.houseAddr}, (results, status)=>{
                     if(status==='OK'){
                       this.geocoordinatesOr={
                       lat:results[0].geometry.location.lat(),
                       lng: results[0].geometry.location.lng()
                        }
                      }
                      // set geofirekey for LMU
                        this.geofireService.setGeofireOrOnTrip(this.SignUpService.userPlace, tripKeyTrip, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng);
                        this.afDB.database.ref(this.SignUpService.userPlace + '/geofireOrTrip/' + tripKeyTrip).update({
                        driverId: this.userUid
                      })
                      console.log('executed geofire Or on Trip')
                    })
  
  
                 }else if(trip.type == 'destination'){
  
                  // geocoding of addresses 
                  this.geocoder.geocode({'address': trip.placeAddr}, (results, status)=>{
                    if(status==='OK'){
                      this.geocoordinatesDest={
                      lat:results[0].geometry.location.lat(),
                      lng: results[0].geometry.location.lng()
                       }
                     }
                     // set geofirekey for LMU
                     this.geofireService.setGeofireDestOnTrip(this.SignUpService.userPlace, tripKeyTrip, this.geocoordinatesDest.lat, this.geocoordinatesDest.lng);
                     this.afDB.database.ref(this.SignUpService.userPlace + '/geofireDestTrip/' + tripKeyTrip).update({
                       driverId: this.userUid
                     })
                     console.log('executed geofire Dest on Trip')
                   })
  
  
                 }
                 this.app.getRootNav().push('MyridePage');
                 this.MetricsService.tripsInitiated(this.SignUpService.userPlace,this.userUid,tripKeyTrip,trip)
 
              })







              // this.TripsService.getReserveUsers(this.SignUpService.userPlace,tripKeyTrip,this.userUid).takeUntil(this.unsubscribe)
              // .subscribe( reservesUser => {
              //   this.reserveUser = reservesUser;
              //   console.log(this.reserveUser);
              //   //push the keyTrip,driverId on every User and onTrip = true 
              //   this.reserveUser.forEach(user => {
              //     this.TripsService.startTripForUsers(this.SignUpService.userPlace,tripKeyTrip,user.userId,this.userUid);
              //     console.log(user.userId);
              //   });    
              //   //debería ser en vez de navPop, una funcion que te lleve a myRide y te muestre el viaje
              // })
              // console.log(this.reserveUser);
              
              
              // this.TripsService.pushKeyInDriver(this.SignUpService.userPlace,tripKeyTrip,this.userUid);

              // this.TripsService.startTrip(this.SignUpService.userPlace,tripKeyTrip,this.userUid,trip);   
              // this.TripsService.createTripState(this.SignUpService.userPlace,tripKeyTrip,this.userUid);
              // // this.navCtrl.pop();

              // // steps needed to get LMU right
              //  this.geofireService.deleteUserGeofireDest(this.SignUpService.userPlace, tripKeyTrip);
              //  this.geofireService.deleteUserGeofireOr(this.SignUpService.userPlace, tripKeyTrip);
              // setTimeout(() => {
              //   this.TripsService.deleteReserve(this.SignUpService.userPlace,tripKeyTrip,this.userUid); 

              //   if(trip.type == 'origin'){

              //     // geocoding of addresses 
              //     this.geocoder.geocode({'address': trip.houseAddr[0][0]}, (results, status)=>{
              //       if(status==='OK'){
              //         this.geocoordinatesOr={
              //         lat:results[0].geometry.location.lat(),
              //         lng: results[0].geometry.location.lng()
              //          }
              //        }
              //        // set geofirekey for LMU
              //          this.geofireService.setGeofireOrOnTrip(this.SignUpService.userPlace, tripKeyTrip, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng);
              //          this.afDB.database.ref(this.SignUpService.userPlace + '/geofireOrTrip/' + tripKeyTrip).update({
              //          driverId: this.userUid
              //        })
              //        console.log('executed geofire Or on Trip')
              //      })
 
 
              //   }else if(trip.type == 'destination'){
 
              //    // geocoding of addresses 
              //    this.geocoder.geocode({'address': trip.placeAddr[0][0]}, (results, status)=>{
              //      if(status==='OK'){
              //        this.geocoordinatesDest={
              //        lat:results[0].geometry.location.lat(),
              //        lng: results[0].geometry.location.lng()
              //         }
              //       }
              //       // set geofirekey for LMU
              //       this.geofireService.setGeofireDestOnTrip(this.SignUpService.userPlace, tripKeyTrip, this.geocoordinatesDest.lat, this.geocoordinatesDest.lng);
              //       this.afDB.database.ref(this.SignUpService.userPlace + '/geofireDestTrip/' + tripKeyTrip).update({
              //         driverId: this.userUid
              //       })
              //       console.log('executed geofire Dest on Trip')
              //     })
 
 
              //   }
              //   this.app.getRootNav().push('MyridePage');
              //   this.MetricsService.tripsInitiated(this.SignUpService.userPlace,this.userUid,tripKeyTrip,trip)

              // }, 4000);
             

               ////




              }
            }           

          }
        }
      ]
    })
  alert.present();
  };

  
 
  enterChat(trip) {
    //send isTrip=true for the chat to know if its a reserve or a trip

    let modal = this.modalCtrl.create('ChattingPage', {
        reserve: trip,
        isTrip: false
    })
    modal.present();
  }

 lateReserve(keyTrip,reserve){
  
   let modal = this.modalCtrl.create('ReserveReminderPage', {keyTrip:keyTrip,trip:reserve});
 
   modal.present();

}

  seePassengers(KeyTrip){    
        this.navCtrl.push('DetailsReservePage',{reserveKey:KeyTrip});
    // let modal = this.modalCtrl.create('ConfirmreservationPage',{reserveKey:KeyTrip});
    // modal.present();
    // this.usersFindingTrip.pop();
    
    // this.subscribe.unsubscribe();
  }


  
  help(){
    // const toast = this.toastCtrl.create({
    //   message: 'Aquí se mostrarán las reservas cuando tengas al menos un pasajero, no te preocupes, hacemos nuestro más grande esfuerzo por conectarte con tus compañeros.',
    //   showCloseButton:true,
    //   closeButtonText: 'OK',
    //   position:'top'
    //      });
    // toast.present();
    this.navCtrl.push('WalkthroughPage');
    
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






