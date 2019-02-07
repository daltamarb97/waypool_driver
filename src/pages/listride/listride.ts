import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, ToastController } from 'ionic-angular';

import { FilterPage } from '../filter/filter';
import { RiderprofilePage } from '../riderprofile/riderprofile';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { SignUpService } from '../../services/signup.service';
import { sendCoordsService } from '../../services/sendCoords.service';
import { ConfirmpopupPage } from '../confirmpopup/confirmpopup';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { sendUsersService } from '../../services/sendUsers.service';


@Component({
  selector: 'page-listride',
  templateUrl: 'listride.html'
})
export class ListridePage {
  locationOrigin:any =[];
  locationDestination:any =[];
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  // usersTotal:any = [];
  // usersFindingTrip:any = [];
  // accptedUsers:any = [];

  usersOnListRide:any=[];
  constructor(public navCtrl: NavController,public toastCtrl: ToastController,private alertCtrl: AlertController,public sendUsersService:sendUsersService,  private afDB: AngularFireDatabase, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth ) {
   //get origin from driver
    this.sendCoordsService.getOrigin(this.userUid)
        .subscribe( origin => {
          this.locationOrigin = origin;
          console.log(origin);
        })

  
        //get destination from driver
      this.sendCoordsService.getDestination(this.userUid)
        .subscribe( destination => {
          this.locationDestination = destination;
          console.log(destination);
        })
        this.sendUsersService.getUsersOnListRide(this.userUid) 
        .subscribe( user => {
          this.usersOnListRide = user;
          console.log(this.usersOnListRide);
          
        });
    // this.SignUpService.getUsers()
    //   .subscribe(users =>{
    //     this.usersTotal = users;
    //     this.usersTotal.forEach(user => {
    //         if(user.findingTrip == true){
    //             if(this.usersFindingTrip.length < 4){
    //               this.usersFindingTrip.push(user);
    //             }else{
    //               console.log('there is more than 4 users');
    //             }
    //         }else if(user.findingTrip == false && user.findingTrip == null){
    //           this.usersFindingTrip.pop(user);
    //         } 
    //     });
    //   });

  
    
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
            this.sendUsersService.removeUsersOnListRide(this.userUid,userId);

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
       
    // this.navCtrl.push(ConfirmpopupPage)
    let modal = this.modalCtrl.create(ConfirmpopupPage,{user});
    modal.present();
   
    // this.usersFindingTrip.forEach(function(valor, indice ){
    //   console.log(valor);
    // })
    // this.SignUpServices.acceptedByDriver(this.usersFindingTrip)
    // this.accptedUsers.push();
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






