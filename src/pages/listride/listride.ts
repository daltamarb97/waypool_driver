import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

import { FilterPage } from '../filter/filter';
// import { RiderprofilePage } from '../riderprofile/riderprofile';
// import { Observable } from 'rxjs';
// import { AngularFireDatabase} from 'angularfire2/database';
import { SignUpService } from '../../services/signup.service';
import { sendCoordsService } from '../../services/sendCoords.service';
import { ConfirmpopupPage } from '../confirmpopup/confirmpopup';
import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase';
// import { sendUsersService } from '../../services/sendUsers.service';
// import { Geofence } from '@ionic-native/geofence';


// declare var google;
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
  //variables for geofence
  fence;
  constructor(public navCtrl: NavController, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth,  public navParams: NavParams ) {
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

       this.fence=this.navParams.get('data');
       console.log(this.fence);

      //  this.geofence.addOrUpdate(this.fence).then(
      //   ()=>this.alertCtrl.create({
      //     title: 'geofence added',
      //     buttons: ['ok']
      //   }),
      //   (err)=>console.log('geofence failed to add due to ' + err)
      // )
       



        
    // this.SignUpService.getUsers()
    //   .subscribe(users =>{
    //     this.usersTotal = users;
    //     this.usersTotal.forEach(user => {
    //         if(user.findingTrip == true){
    //           console.log(user);
    //             if(this.usersFindingTrip.length < 4){
    //               this.usersFindingTrip.push(user);
    //               this.navCtrl.push(ConfirmpopupPage, this.usersFindingTrip);
    //             }else{
    //               console.log('there is more than 4 users');
    //             }
    //         }else if(user.findingTrip == false && user.findingTrip == null){
    //           this.usersFindingTrip.pop(user);
    //         } 
    //     });
    //   });

  
    
  }

  

  

 filter(){
    this.navCtrl.push(FilterPage);
 }
 
  confirmpopup(user){
       
    // this.navCtrl.push(ConfirmpopupPage)
    let modal = this.modalCtrl.create(ConfirmpopupPage,{user});
    modal.present();
    // this.SignUpServices.acceptedByDriver(this.usersFindingTrip)
    
  }

}






