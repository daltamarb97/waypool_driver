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
  locationOrigin:any =[];
  locationDestination:any =[];
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  usersFindingTrip : any = [];
  user:any = [];
  subscribe:Subscription;
  usersOnListRide:any=[];
  text = 'Aceptar viaje';
  userDriver;
  tripsReserves:any =[];


  constructor(public navCtrl: NavController, public SignUpService: SignUpService,public TripsService:TripsService ,public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private geofireService: geofireService, public afDB: AngularFireDatabase, public instances: instancesService, public sendUsersService: sendUsersService, public toastCtrl: ToastController, private geoFireService: geofireService) {
    
  
        //get personal info of the driver
        this.SignUpService.getMyInfoDriver(this.userUid)
		.subscribe(userDriver => {
			this.userDriver = userDriver;
			console.log(this.userDriver);
		});
    this.sendUsersService.getTripsOfReserves(this.userUid)
    .subscribe( tripsReserves => {
      this.tripsReserves = tripsReserves;
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
            this.sendUsersService.removeUsersOnListRide(this.userUid, userId);
            console.log('remove on list')
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
          if(this.userDriver.onTrip === true){
            const toast = this.toastCtrl.create({
              message: 'No puedes iniciar otro viaje porque tienes un viaje en curso',
              showCloseButton:true,
              closeButtonText: 'OK',
              position:'middle'
                 });
            toast.present();
          } else {
            
            console.log(tripKeyTrip)
            console.log(trip)
             this.TripsService.startTrip(tripKeyTrip,this.userUid,trip);
             this.TripsService.pushKeyInDriver(tripKeyTrip,this.userUid);
             this.TripsService.pushOnTripInDriver(this.userUid);         
             //BORRAR RESERVA
             // this.TripsService.deleteReserve(tripKeyTrip,this.userUid);
         
           
            
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
  
  help(){
    const toast = this.toastCtrl.create({
      message: 'Aquí te saldrán las personas que quieren irse contigo',
      showCloseButton:true,
      closeButtonText: 'OK',
      position:'top'
         });
    toast.present();
  }
}






