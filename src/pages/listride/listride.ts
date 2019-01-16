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
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'page-listride',
  templateUrl: 'listride.html'
})
export class ListridePage implements DoCheck{
  locationOrigin:any =[];
  locationDestination:any =[];
  user=this.AngularFireAuth.auth.currentUser.uid;
  usersKeys:any = [];
  usersFindingTrip = [];
  usersFindingTrip$: BehaviorSubject<Array<string>>;
  userTotal:any =[];
  differ:any;



  constructor(public navCtrl: NavController, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth,  public navParams: NavParams, public alertCtrl: AlertController, private geofireService: geofireService, public differs: IterableDiffers , private cd: ChangeDetectorRef) {
    
    localStorage.removeItem('firebase:previous_websocket_failure');

    setTimeout(()=>{
      this.cd.detectChanges();
    }, 500)

    this.differ = differs.find([]).create(null);

    this.usersFindingTrip$ = new BehaviorSubject<Array<string>>(this.usersFindingTrip);

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

        this.usersKeys = this.geofireService.hits;
        
        

      
    
  }

  ngDoCheck(){
    const change = this.differ.diff(this.usersKeys);
    if(change){
      change.forEachAddedItem(r => {
        this.geofireService.getUsersGeofire(r.item)
        .subscribe(user => {
            if(this.usersFindingTrip.length < 4){
              this.usersFindingTrip.push(user);
              this.usersFindingTrip$.next(this.usersFindingTrip);
              console.log(this.usersFindingTrip)
            }
          
        })
      })
      change.forEachRemovedItem(r => {
        this.usersFindingTrip.forEach(user=>{
          if(user[9] == r.item){
            let i = this.usersFindingTrip.indexOf(user);
            if(i !== -1){
              this.usersFindingTrip.splice(i, 1);
              this.usersFindingTrip$.next(this.usersFindingTrip);
              console.log(this.usersFindingTrip);
            }
          }
        })

      })
    }

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






