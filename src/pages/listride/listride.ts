import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { RiderprofilePage } from '../riderprofile/riderprofile';
import { SignUpService } from '../../services/signup.service';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { ConfirmpopupPage } from '../confirmpopup/confirmpopup';
@Component({
  selector: 'page-listride',
  templateUrl: 'listride.html'
})
export class ListridePage {
  usersTotal:any = [];
  usersFindingTrip:any = [];
  accptedUsers:any = [];
  constructor(public navCtrl: NavController, private SignUpServices: SignUpService, public AngularFireDatabase: AngularFireDatabase, ) {
    this.SignUpServices.getUsers()
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

    // this.usersRef = firebase.database().ref().child('users');
    // this.usersRef.on('child_changed', function(data){
    //   let onTripChange = data.val();
    //   console.log(onTripChange);

      // data.val().forEach(user =>{
      //   if(user.findingTrip == true){
      //     if(this.usersFindingTrip.length < 4){
      //       this.usersFindingTrip.push(user);
      //     }else{
      //       console.log('there is more than 4 users');
      //     }
      //   }else{
      //     console.log('user is not findingTrip');
      //   }
      // })
    // })
    
  }
    


    acceptUsers(){
this.usersFindingTrip.forEach(function(valor, indice ){
  console.log(valor);
})
// this.SignUpServices.acceptedByDriver(this.usersFindingTrip)
this.accptedUsers.push();
}


}

