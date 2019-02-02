import { Component, IterableDiffers, DoCheck, ChangeDetectorRef } from '@angular/core';
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
import * as _ from 'underscore';
import { copyFile } from 'fs';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { instancesService } from '../../services/instances.service';


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



  constructor(public navCtrl: NavController, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth,  public navParams: NavParams, public alertCtrl: AlertController, private geofireService: geofireService, public differs: IterableDiffers , private cd: ChangeDetectorRef, public afDB: AngularFireDatabase, public instances: instancesService) {
    
    // localStorage.removeItem('firebase:previous_websocket_failure');

    

    

    // this.usersFindingTrip$ = new BehaviorSubject<Array<string>>(this.usersFindingTrip);

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
        
        // this.afDB.list('/drivers/' + this.driver + '/trips/usersListRide').valueChanges()
        // .subscribe(user => {
        //   this.user = user;
        //   console.log(this.user);
        //   this.afDB.database.ref('/drivers/' + this.driver + '/trips/usersListRide').on('child_added', ()=>{
        //       if(this.user.showDriver == true){
        //         this.usersFindingTrip = this.user;
        //         console.log(this.usersFindingTrip);
        //       }else{
        //         console.log('no se ejecuto');
        //       }
        //   }) 
        // })  
        
        

        // this.afDB.database.ref('/drivers/' + this.driver + '/trips/usersListRide').orderByChild('onTrip')
        // .equalTo(true).on("value", (snapshot)=>{
        //   snapshot.forEach((childSnapshot)=>{
        //     childSnapshot.ref.remove();
        //     console.log('hola eliminado');
        //   })
        // })
        
        this.subscribe = this.geofireService.getUsersListRide()
        .subscribe(user=>{
          this.usersFindingTrip = user;
        })

     

        
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



}






