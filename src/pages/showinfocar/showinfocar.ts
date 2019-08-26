import { Component } from '@angular/core';
import { NavController, ViewController, ModalController, ToastController, NavParams, IonicPage, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignUpService } from '../../services/signup.service';
import { Subject } from 'rxjs';

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
unsubscribe = new Subject;

  constructor( public modalCtrl: ModalController,public alertCtrl:AlertController,public SignupService:SignUpService,public navParams: NavParams,public viewCtrl: ViewController,public navCtrl: NavController,public toastCtrl: ToastController,  private AngularFireAuth: AngularFireAuth,private afDB: AngularFireDatabase, public SignUpService: SignUpService) {
    this.user = this.navParams.get('user')
    this.SignUpService.getCar(this.SignUpService.userUniversity, this.userUid).takeUntil(this.unsubscribe)
    .subscribe( car => {
      this.carList = car;
      console.log(this.carList)
    });
  }
  ionViewDidLeave(){
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
  addCar(){
    if(this.carList.length >= 3){
      const alert = this.alertCtrl.create({
        title: 'OPERACION DENEGADA',
        subTitle: 'No puedes tener más de 3 carros en tu cuenta, si quieres agregar otro, elimina alguno de los que tienes',
        buttons: ['OK']
      });
      alert.present();
    }else{
      this.SignUpService.addCar(this.SignupService.userUniversity, this.userUid,this.carModel,this.plateNumber,this.color)

    }
  this.carModel=null; 
  this.plateNumber=null;
  this.color=null;   

  }
 deleteCar(carKey){
   console.log(carKey)
  this.SignUpService.deleteCar(this.SignupService.userUniversity, this.userUid,carKey)    
}
  dismiss() {
    this.viewCtrl.dismiss();
  }  
}