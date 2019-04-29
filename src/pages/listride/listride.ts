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

  constructor(public navCtrl: NavController, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private geofireService: geofireService, public afDB: AngularFireDatabase, public instances: instancesService, public sendUsersService: sendUsersService, public toastCtrl: ToastController, private geoFireService: geofireService, public loadingCtrl: LoadingController) {
    
    //get origin from driver
    this.sendCoordsService.getOrigin(this.driver)
        .subscribe( origin => {
          this.locationOrigin = origin;
          console.log(this.locationOrigin[0]);
        })

  
        //get destination from driver
      this.sendCoordsService.getDestination(this.driver)
        .subscribe( destination => {
          this.locationDestination = destination;
          console.log(destination);
        })

        this.SignUpService.getMyInfoDriver(this.driver)
		.subscribe(userDriver => {
			this.userDriver = userDriver;
      console.log(this.userDriver);
      
    });
        
    
        
  }

  ionViewDidLoad(){
    this.subscribe = this.geofireService.getUsersListRide()
    .subscribe(user=>{
        this.usersFindingTrip = user;
    })
  }

  ionViewDidEnter(){
    this.timer = setTimeout(()=>{
      if(this.usersFindingTrip.length == 0 ){  
        this.instances.noDriversAvailableInstance(this.driver);
        setTimeout(()=>{
          if(this.userDriver.noUsersMessage == true){
            this.instances.clickedDirectionMessageCancel(this.driver);
            const alert =  this.alertCtrl.create({
              message: 'No hay compañeros en este momento para compartir tu viaje, vuelve a intentar en unos minutos',
              buttons: [
                {
                  text: 'OK',
                  handler: () => {
                    this.instances.noDriversAvailableInstanceDelete(this.driver);
                    this.geoFireService.cancelGeoqueryDest();
                    this.geoFireService.cancelGeoqueryOr();
                    this.navCtrl.pop();
                  }
                }
              ]
            });
            alert.present();
          }
        }, 500)
        
        }    
    }, 24000)
  }

  ionViewDidLeave(){
    this.geoFireService.cancelGeoqueryDest();
    this.geoFireService.cancelGeoqueryOr();
    clearTimeout(this.timer);


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
            this.sendUsersService.removeUsersOnListRide(this.driver, userId);
            console.log('remove on list')
            this.sendUsersService.removeUsersOnPickingUsers(this.driver, userId );
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






