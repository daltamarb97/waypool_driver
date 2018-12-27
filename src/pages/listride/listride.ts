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
  locationOrigin:any =[];
  locationDestination:any =[];
  user=this.AngularFireAuth.auth.currentUser.uid;
  usersTotal:any = [];
  usersFindingTrip:any = [];
  accptedUsers:any = [];
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
      .subscribe(users =>{
        this.usersTotal = users;
        this.usersTotal.forEach(user => {
            if(user.findingTrip == true){
              debugger;
                if(this.usersFindingTrip.length < 4){
                  this.usersFindingTrip.push(user);
                }else{
                  console.log('there is more than 4 users');
                }
            }else if(user.findingTrip == false && user.findingTrip == null){
              this.usersFindingTrip.pop(user);
            } 
        });
      });

  
    
  }
    

 filter(){
    this.navCtrl.push(FilterPage);
 }
 
  confirmpopup(user){
       
    // this.navCtrl.push(ConfirmpopupPage)
    let modal = this.modalCtrl.create(ConfirmpopupPage,{user});
    modal.present();
    console.log(user)
    this.usersFindingTrip.forEach(function(valor, indice ){
      console.log(valor);
    })
    // this.SignUpServices.acceptedByDriver(this.usersFindingTrip)
    this.accptedUsers.push();
  }

}






