import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth,  public navParams: NavParams, public alertCtrl: AlertController, private geofireService: geofireService ) {
    

    //get origin from driver
    this.sendCoordsService.getOrigin(this.user)
        .subscribe( origin => {
          this.locationOrigin = origin;
          console.log(this.locationOrigin[0]);
        })

  
        //get destination from driver
      this.sendCoordsService.getDestination(this.user)
        .subscribe( destination => {
          this.locationDestination = destination;
          console.log(destination);
        })


    // this.geofireService.getUsersGeofire()
    //   .subscribe(users =>{
    //     this.usersTotal = users;
    //     this.usersTotal.forEach(user => {
    //           if(this.usersFindingTrip.length < 4){
    //               this.usersFindingTrip.push(user);
  
    //         }
    //       });
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






