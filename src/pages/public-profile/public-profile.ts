import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, ModalController, IonicPage, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignUpService } from '../../services/signup.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LoginPage } from '../login/login';
import { authenticationService } from '../../services/driverauthentication.service';
import { ShowInfoCarPage } from '../showinfocar/showinfocar';
/**
 * Generated class for the PublicProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-public-profile',
  templateUrl: 'public-profile.html',
})
export class PublicProfilePage {
 
  passenger:any;
  email:any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,public toastCtrl: ToastController,public alertCtrl:AlertController, public AngularFireAuth:AngularFireAuth,private authenticationService: authenticationService,public SignupService:SignUpService, public navParams: NavParams) {
    this.passenger = this.navParams.get('passenger')
    console.log(this.passenger); 

  
  }
    
  

}
