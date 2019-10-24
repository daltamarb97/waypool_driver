import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { sendCoordsService } from '../../services/sendCoords.service';
import { SignUpService } from '../../services/signup.service';
import { sendUsersService } from '../../services/sendUsers.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Subject } from 'rxjs';
@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html'
})
export class WalletPage {
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  recordTrips:any=[];
  price:any;
  total:any=0;
  subtotal:any = 0;
  trip:any;
  totalTrip:any;
  pickedUpUsers = [];
  newNumber:any = 0;
  unsubscribe = new Subject;

  constructor(public navCtrl: NavController,public toastCtrl: ToastController,public sendUsersService:sendUsersService,public sendCoordsService: sendCoordsService, private AngularFireAuth: AngularFireAuth, public signupService: SignUpService) {
    
   
    this.sendUsersService.getRecordTrips(this.signupService.userPlace, this.userUid)
    .subscribe( user => {
    
      this.recordTrips = user;
      console.log(this.recordTrips); 
      

      this.hola()
      


   });

   console.log(this.total)

   
}
hola(){
  this.newNumber = 0
      this.total = 0
  console.log(this.total)
  this.recordTrips.forEach(trip => {
    
    this.trip=trip
    this.pickedUpUsers =  Object.keys(this.trip.pickedUpUsers)
   this.totalTrip = this.pickedUpUsers.length*this.trip.price 
    console.log(this.newNumber)
    this.newNumber = this.newNumber + this.totalTrip 

  })

  this.total = this.total + this.newNumber


}
 
  help(){
    const toast = this.toastCtrl.create({
      message: 'En esta página podrás ver cuanto dinero haz hecho por viaje, ádemas del historial de viajes en los que podrás ver la hora en la que terminaste el viaje, origen y destino, y el precio que colocaste por persona',
      showCloseButton:true,
      closeButtonText: 'OK',
      position:'top'
         });
    toast.present();
  }
}
