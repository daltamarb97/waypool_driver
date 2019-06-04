import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, ToastController, IonicPage, LoadingController } from 'ionic-angular';

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

@IonicPage()
@Component({
  selector: 'page-listride',
  templateUrl: 'listride.html'
})
export class ListridePage{
  locationOrigin:any =[];
  locationDestination:any =[];
  driver=this.AngularFireAuth.auth.currentUser.uid;
  usersFindingTrip : any = [];
  user:any = [];
  subscribe:Subscription;
  usersOnListRide:any=[];
  text = 'Aceptar viaje';
  userDriver;
  timer:any;
  loading:any;
  // this variable determines the amount of time to wait until a rserve should be deleted
  timeToWait:any;
  constructor(public navCtrl: NavController, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private geofireService: geofireService, public afDB: AngularFireDatabase, public instances: instancesService, public sendUsersService: sendUsersService, public toastCtrl: ToastController, private geoFireService: geofireService, public loadingCtrl: LoadingController) {
    
    //get origin from driver
    this.sendCoordsService.getOrigin(this.driver)
        .subscribe( origin => {
          this.locationOrigin = origin;
         
        })

  
        //get destination from driver
      this.sendCoordsService.getDestination(this.driver)
        .subscribe( destination => {
          this.locationDestination = destination;

        })

        this.SignUpService.getMyInfoDriver(this.driver)
		.subscribe(userDriver => {
			this.userDriver = userDriver;  
    });
        
    
        
  }

  ionViewDidLoad(){

    this.subscribe = this.geofireService.getMyReserves(this.driver)
    .subscribe(reserve=>{
        this.usersFindingTrip = reserve;  
        // reserves delete itself after the startHour passes, TODO: dont eliminate if there are passengers in reserve
        // TODO: fix this because reserve must eliminate itself even when the user have not entered into listRide
        this.usersFindingTrip.forEach(reserveInd => {
          var startTime = reserveInd.startHour.split(':');
          var currentTime = reserveInd.currentHour.split(':');
          var hours = startTime[0] - currentTime[0]
          var minutes = startTime[1] - currentTime[1]
          var hoursInMilliSeconds = hours*3600000
          var minutesInMilliseconds = minutes*60000
          this.timeToWait = hoursInMilliSeconds + minutesInMilliseconds; 
          console.log(this.timeToWait);
          setTimeout(()=>{
            this.sendUsersService.removeReserve(this.driver, reserveInd.keyTrip);
          }, this.timeToWait) 
        });
     
    })
  }


  ionViewDidLeave(){
    this.geoFireService.cancelGeoqueryDest();
    this.geoFireService.cancelGeoqueryOr();
    // clearTimeout(this.timer);


  }
  

  deleteUser(reserveKey,nameUser){
  
    let alert = this.alertCtrl.create({
      title: 'Eliminar Usuario',
      message: `¿Estas que deseas eliminar a este a ${nameUser} de tus posibles compañeros de viaje?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.sendUsersService.removeReserve(this.driver, reserveKey);
          }
        }
      ]
    });
    alert.present();
  }

 
  confirmpopup(user){
       
        
    let modal = this.modalCtrl.create('ConfirmpopupPage',{user});
    modal.present();
    // this.usersFindingTrip.pop();
    
    // this.subscribe.unsubscribe();
  }
  
  help(){
    const toast = this.toastCtrl.create({
      message: 'Aquí te saldrán los estudiantes que te hayan escogido, ahora te toca escoger a quienes y cuantos quieres llevar (máximo 4), a los que no quieras llevar, elimínalos',
      showCloseButton:true,
      closeButtonText: 'OK',
      position:'top'
         });
    toast.present();
  }
}






