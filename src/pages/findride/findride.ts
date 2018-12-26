import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { Geofence } from '@ionic-native/geofence';
import { SignUpService } from '../../services/signup.service';
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'page-findride',
  templateUrl: 'findride.html'
})
export class FindridePage {
ride: string = "oneway";
userFirebase = this.AngularFireAuth.auth.currentUser.uid;

  constructor(public navCtrl: NavController, private SignUpServices: SignUpService, public AngularFireAuth: AngularFireAuth) {
    
  }
  
 tabs(){

    this.SignUpServices.turnFindingUsers(this.userFirebase)
    this.navCtrl.push(TabsPage);
 }
 

}
