import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, ToastController } from 'ionic-angular';

import { FilterPage } from '../filter/filter';
// import { RiderprofilePage } from '../riderprofile/riderprofile';
// import { Observable } from 'rxjs';
// import { AngularFireDatabase} from 'angularfire2/database';
import { SignUpService } from '../../services/signup.service';
import { sendCoordsService } from '../../services/sendCoords.service';
import { ConfirmpopupPage } from '../confirmpopup/confirmpopup';
import { AngularFireAuth } from 'angularfire2/auth';
import { geofireService } from '../../services/geofire.services';
// import * as firebase from 'firebase';
// import { sendUsersService } from '../../services/sendUsers.service';
// import { Geofence } from '@ionic-native/geofence';

import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { instancesService } from '../../services/instances.service';
import { sendUsersService } from '../../services/sendUsers.service';


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



  constructor(public navCtrl: NavController, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private geofireService: geofireService, public afDB: AngularFireDatabase, public instances: instancesService, public sendUsersService: sendUsersService, public toastCtrl: ToastController) {
    
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
        
        
        this.subscribe = this.geofireService.getUsersListRide()
        .subscribe(user=>{
          this.usersFindingTrip = user;
        })

     

        
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
            this.sendUsersService.removeUsersOnListRide(this.driver, userId);

          }
        }
      ]
    });
    alert.present();
  }

 filter(){
    this.navCtrl.push(FilterPage);
 }
 
  confirmpopup(user){
       
        
    let modal = this.modalCtrl.create(ConfirmpopupPage,{user});
    modal.present();
    this.usersFindingTrip.pop();
    this.subscribe.unsubscribe();

    
  }
  help(){
    const toast = this.toastCtrl.create({
      message: 'En esta página podrás ver que estudiantes te han pedido compartir un viaje contigo, sólo tendrás máximo 4 estudiantes debido a que es el máximo numero permitido en colombia para carros particulares, si tienes un carro con más asientos, escríbenos para darte acceso a más',
      showCloseButton:true,
      closeButtonText: 'OK',
      position:'top'
         });
    toast.present();
  }
}






