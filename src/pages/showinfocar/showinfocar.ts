import { Component } from '@angular/core';
import { NavController, ViewController, ModalController, ToastController, NavParams, IonicPage, AlertController } from 'ionic-angular';
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

  constructor( public modalCtrl: ModalController,public alertCtrl:AlertController,public SignupService:SignUpService,public navParams: NavParams,public viewCtrl: ViewController,public navCtrl: NavController,public toastCtrl: ToastController,  private AngularFireAuth: AngularFireAuth,private afDB: AngularFireDatabase, public SignUpService: SignUpService) {
    this.user = this.navParams.get('user')
    this.SignUpService.getCar(this.userUid)
    .subscribe( car => {
      this.carList = car;
      console.log(this.carList)
    });
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
      this.SignUpService.addCar(this.userUid,this.carModel,this.plateNumber,this.color)

    }
  this.carModel=null; 
  this.plateNumber=null;
  this.color=null;   

  }
 deleteCar(carKey){
   console.log(carKey)
  this.SignUpService.deleteCar(this.userUid,carKey)    
}
  dismiss() {
    this.viewCtrl.dismiss();
  }  
}