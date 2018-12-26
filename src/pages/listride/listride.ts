import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

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
  usersAvailable:any = [];
  locationOrigin:any =[];
  locationDestination:any =[];
  user=this.AngularFireAuth.auth.currentUser.uid;

  constructor(public navCtrl: NavController, private afDB: AngularFireDatabase, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth ) {
   //get origin from driver
    this.sendCoordsService.getOrigin(this.user)
        .subscribe( origin => {
          this.locationOrigin = origin;
          console.log(origin);
        })

  
        //get destination from driver
      this.sendCoordsService.getDestination(this.user)
        .subscribe( destination => {
          this.locationDestination = destination;
          console.log(destination);
        })

    this.SignUpService.getUsers()
      .subscribe( user => {
        this.usersAvailable = user;
        console.log(this.usersAvailable);        
      });

     
  };



 filter(){
    this.navCtrl.push(FilterPage);
 }
 
  confirmpopup(user){
       
    // this.navCtrl.push(ConfirmpopupPage)
    let modal = this.modalCtrl.create(ConfirmpopupPage,{user});
    modal.present();
    console.log(user)
  }
}