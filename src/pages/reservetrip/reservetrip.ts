import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, ToastController, IonicPage } from 'ionic-angular';

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

import {  Subscription } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { instancesService } from '../../services/instances.service';
import { sendUsersService } from '../../services/sendUsers.service';
import { TripsService } from '../../services/trips.service';
import * as moment from 'moment';
import { stringify } from '@angular/core/src/render3/util';

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
  reserveTime:any;
  constructor(public navCtrl: NavController, public SignUpService: SignUpService,public TripsService:TripsService ,public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private geofireService: geofireService, public afDB: AngularFireDatabase, public instances: instancesService, public sendUsersService: sendUsersService, public toastCtrl: ToastController, private geoFireService: geofireService) {
    
    this.SignUpService.getMyInfoDriver(this.userUid)
		.subscribe(userDriver => {
			this.userDriver = userDriver;
			console.log(this.userDriver);
		});
        //get personal info of the driver
      
    this.sendUsersService.getTripsOfReserves(this.userUid)
    .subscribe( tripsReserves => {
      this.tripsReserves = tripsReserves;

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

  ionViewDidLoad(){
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
              this.TripsService.getReserveUsers(tripKeyTrip,this.userUid).
              subscribe( reservesUser => {
                this.reserveUser = reservesUser;
                console.log(this.reserveUser);
                //push the keyTrip,driverId on every User and onTrip = true 
                this.reserveUser.forEach(user => {
                  this.TripsService.startTripForUsers(tripKeyTrip,user.userId,this.userUid);
                });    
                //debería ser en vez de navPop, una funcion que te lleve a myRide y te muestre el viaje
              })
              this.TripsService.pushKeyInDriver(tripKeyTrip,this.userUid);
              this.TripsService.startTrip(tripKeyTrip,this.userUid,trip);   
              this.TripsService.createTripState(tripKeyTrip,this.userUid);
              this.TripsService.deleteReserve(tripKeyTrip,this.userUid); 
              // this.navCtrl.pop();
              this.navCtrl.push('MyridePage');
            }           
          }
        }
      }
    ]
  });
  alert.present();
 }

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
    this.TripsService.cancelReserve(this.userUid,keyTrip);  
  //eliminate reserve
  }
  
  help(){
    const toast = this.toastCtrl.create({
      message: 'Aquí te mostraremos tus reservas, presiona detalles para ver tus compañeros que se unan en tu viaje, después de 5 minutos de pasado el tiempo de la reserva, se cancelará automaticamente, la app te recordará con una notificación',
      showCloseButton:true,
      closeButtonText: 'OK',
      position:'top'
         });
    toast.present();
  }
    // PASAR A RESERVETRIP

    // ionViewDidEnter(){
    //  // reserves delete itself after the startHour passes, TODO: dont eliminate if there are passengers in reserve
    //  // TODO: fix this because reserve must eliminate itself within a timeframe, not static times (currenthour / starthour)
    //   this.usersFindingTrip.forEach(reserveInd => {
    //       this.reserveInd = reserveInd;
    //       var startTime = reserveInd.startHour.split(':');
    //       var currentTime = reserveInd.currentHour.split(':');
    //       var hours = startTime[0] - currentTime[0]
    //       var minutes = startTime[1] - currentTime[1]
    //       var hoursInMilliSeconds = hours*3600000
    //       var minutesInMilliseconds = minutes*60000
    //       this.timeToWait = hoursInMilliSeconds + minutesInMilliseconds; 
    //       console.log(this.timeToWait);
    //       setTimeout(()=>{
    //         this.sendUsersService.removeReserve(this.driver, reserveInd.keyTrip);
    //         //cancel specific geofire of reserve
    //         // TODO: geofire's reserve is not cancelling

    //         if(reserveInd.type == 'origin'){
    //           console.log(reserveInd.geofireKey);
    //           this.geoFireService.cancelGeoqueryOr(reserveInd.geofireKey);
    //         }else if(reserveInd.type == 'destination'){
    //           console.log(reserveInd.geofireKey);
    //           this.geoFireService.cancelGeoqueryDest(reserveInd.geofireKey);
    //         }
    //       }, this.timeToWait) 
    //     });
    // }
 
////////////////////////////////////
}






