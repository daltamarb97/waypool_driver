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

  userInReserveInfo:any;


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
    })    
    
        
  }

  ionViewDidLoad(){
 
  }
    
  deleteUser(userId,nameUser){
  
    let alert = this.alertCtrl.create({
      title: 'Eliminar Usuario',
      message: `¿Estas que deseas eliminar a este a ${nameUser} de tus posibles compañeros de viaje?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('holi');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            console.log('user eliminado');
            // setTimeout(()=>{
            //   //REVISAR
            //   this.sendUsersService.removeUsersOnListRide(this.driver, userId);
            //   this.sendUsersService.removeUsersOnPickingUsers(this.driver, userId );
            // }, 600)
            // this.sendUsersService.removeUsersOnListRide(this.userUid, userId);
            // console.log('remove on list')
            this.sendUsersService.removeUsersOnPickingUsers(this.userUid, userId );
          }
        }
      ]
    });
    alert.present();
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
              console.log(tripKeyTrip)
              console.log(trip)
               this.TripsService.startTrip(tripKeyTrip,this.userUid,trip);
               this.TripsService.pushKeyInDriver(tripKeyTrip,this.userUid);
               this.TripsService.pushOnTripInDriver(this.userUid);              
               this.TripsService.deleteReserve(tripKeyTrip,this.userUid);  

            }
           
            
          }
   
 
        }
      }
    ]
  });
  alert.present();
  
 }



  seePassengers(tripKeyTrip){
       
        
    let modal = this.modalCtrl.create('ConfirmreservationPage',{reserveKey:tripKeyTrip});
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

    this.afDB.database.ref('/reserves/' + this.userUid + '/' + keyTrip).remove()
  .then(()=>{
    console.log('the reserve which key is '+ keyTrip + ' has been removed');
    this.afDB.list('/reservesInfoInCaseOfCancelling/' + this.userUid + '/' + keyTrip).valueChanges()
      .subscribe((userInRsv)=>{
        userInRsv.forEach((user)=>{
          this.userInReserveInfo = user;

          this.afDB.database.ref('/users/' + this.userInReserveInfo.userId + '/availableReserves/' + keyTrip).remove();
          this.afDB.database.ref('/users/' + this.userInReserveInfo.userId + '/myReserves/' + keyTrip).remove();
        })

        this.afDB.database.ref('/reservesInfoInCaseOfCancelling/' + this.userUid + '/' + keyTrip).remove();
      })
  })

  }
  
  help(){
    const toast = this.toastCtrl.create({
      message: 'Aquí te saldrán las personas que quieren irse contigo',
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






