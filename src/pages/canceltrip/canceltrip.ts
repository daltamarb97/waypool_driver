import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { sendUsersService } from '../../services/sendUsers.service';
import { instancesService } from '../../services/instances.service';
import { Subject, onErrorResumeNext } from 'rxjs';
import { TripsService } from '../../services/trips.service';
import { SignUpService } from '../../services/signup.service';

@IonicPage()

@Component({
  selector: 'page-canceltrip',
  templateUrl: 'canceltrip.html'
})
export class CanceltripPage {
  accepted

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {
    
    
       
    

  }


 

  dismiss() {
    this.viewCtrl.dismiss(this.accepted);

    
    // this.navCtrl.pop();

  }  
}
