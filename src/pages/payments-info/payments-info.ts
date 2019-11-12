import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { priceService } from '../../services/price.service';
import { SignUpService } from '../../services/signup.service';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the PaymentsInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payments-info',
  templateUrl: 'payments-info.html',
})
export class PaymentsInfoPage {
  bankList = [];
  id:any;
  bankAccount:any;
  bankEntity:any;
  bankEntityOther:any;
  driverId:any;
  showOther:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase, public viewCtrl: ViewController, public alertCtrl: AlertController, private priceServices: priceService, private signUpServices: SignUpService, private angularFireAuth: AngularFireAuth) {
    this.afDB.database.ref('/bankList/').once('value').then((snap)=>{
      console.log(snap.val());
      this.bankList = snap.val();
    })

    this.driverId = this.angularFireAuth.auth.currentUser.uid;


  }

  onChange(){
    if(this.bankEntity === 'Otro'){
      this.showOther = true;
    }else{
      this.showOther = false;
    }
    
  }

  setPaymentInfo(){
    if(this.bankEntity === 'Otro'){
      if(this.id === null || this.id === undefined || this.bankEntityOther === null || this.bankEntityOther === undefined || this.bankAccount === null || this.bankAccount === undefined){
        const alert = this.alertCtrl.create({
          title: 'Informacion Incompleta',
          subTitle: 'Por favor revisa que pusiste toda la información correctamente',
          buttons: ['OK']
        });
        alert.present();
      }else{
        this.priceServices.sendPaymentInfo(this.signUpServices.userPlace, this.driverId, this.id, this.bankAccount, this.bankEntityOther);
        this.dismiss();
      }
    }else{
      if(this.id === null || this.id === undefined || this.bankEntity === null || this.bankEntity === undefined || this.bankAccount === null || this.bankAccount === undefined){
        const alert = this.alertCtrl.create({
          title: 'Informacion Incompleta',
          subTitle: 'Por favor revisa que pusiste toda la información correctamente',
          buttons: ['OK']
        });
        alert.present();
      }else{
        this.priceServices.sendPaymentInfo(this.signUpServices.userPlace, this.driverId, this.id, this.bankAccount, this.bankEntity);
        this.dismiss();
      }
    }
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
