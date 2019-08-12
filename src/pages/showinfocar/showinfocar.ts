import { Component } from '@angular/core';
import { NavController, ViewController, ModalController, ToastController, NavParams, IonicPage } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignUpService } from '../../services/signup.service';

@IonicPage()

@Component({
  selector: 'page-showinfocar',
  templateUrl: 'showinfocar.html'
})
export class ShowInfoCarPage {
user:any;
userUid=this.AngularFireAuth.auth.currentUser.uid;
carList:any=[];
carModel:string;
plateNumber:string;
color:string;

  constructor( public modalCtrl: ModalController,public SignupService:SignUpService,public navParams: NavParams,public viewCtrl: ViewController,public navCtrl: NavController,public toastCtrl: ToastController,  private AngularFireAuth: AngularFireAuth,private afDB: AngularFireDatabase, public SignUpService: SignUpService) {
    this.user = this.navParams.get('user')
    this.SignUpService.getCar(this.SignUpService.userUniversity, this.userUid)
    .subscribe( car => {
      this.carList = car;
      console.log(this.carList)

    });
  }
  addCar(){
this.SignUpService.addCar(this.SignUpService.userUniversity, this.userUid,this.carModel,this.plateNumber,this.color)    
  }
 
  dismiss() {
    this.viewCtrl.dismiss();
  }  
}