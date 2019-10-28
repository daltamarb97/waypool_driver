import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, Tabs, AlertController, App, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.service';
import { sendCoordsService } from '../../services/sendCoords.service';

import { sendUsersService } from '../../services/sendUsers.service';
import { priceService } from '../../services/price.service';
import { geofireService } from '../../services/geofire.services';
import { Subscription, Subject, Subscriber } from 'rxjs';
import * as moment from 'moment';
import { MetricsService } from '../../services/metrics.service';
import { instancesService } from '../../services/instances.service';

 

@IonicPage()
@Component({
  selector: 'page-add-schedule',
  templateUrl: 'add-schedule.html',
})
export class AddSchedulePage {

  accepted:any;
  button1WasTapped:boolean;
  button2WasTapped:boolean;
  button1WasntTapped:boolean = true;
  button2WasntTapped:boolean = true;
  textMessage: string;
  startHour:any;
  userId: any;
  geofireType:string;
  imageURL:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController, public signUpService: SignUpService, public angularFireAuth: AngularFireAuth, private instances: instancesService) {
  
    this.userId = this.angularFireAuth.auth.currentUser.uid;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSchedulePage');
  }


  dismiss(){
    this.viewCtrl.dismiss(this.accepted);

  }

  button1(){
    console.log('fue presionado boton 1')
    this.button1WasTapped = true;
    this.button2WasTapped = false;
    this.button1WasntTapped = false;
    this.button2WasntTapped = true;
    this.textMessage = 'trabajo/universidad a CASA';
    this.geofireType = 'destination';
    this.imageURL = 'assets/imgs/home.png';
  }

  button2(){
    console.log('fue presionado boton 2')
    this.button1WasTapped = false;
    this.button2WasTapped = true;
    this.button1WasntTapped = true;
    this.button2WasntTapped = false;
    this.textMessage = 'casa al TRABAJO/UNIVERSIDAD'
    this.geofireType = 'origin';
    this.imageURL = 'assets/imgs/work.png';
  }

  confirm(){
    if(this.button1WasntTapped && this.button2WasntTapped === true){
      const alert = this.alertCtrl.create({
        title: 'Debes seleccionar una opción',
        subTitle: '¿a esta hora vas de tu trabajo a tu casa o de tu casa a tu trabajo?',
        buttons: ['OK']
      });
      alert.present();
    }else if(this.startHour === undefined || this.startHour === null){
      const alert = this.alertCtrl.create({
        title: 'Debes seleccionar una hora de partida',
        subTitle: '¿A qué hora sales del trabajo o de tu casa?',
        buttons: ['OK']
      });
      alert.present();
    }else if(this.button1WasntTapped === true && this.button2WasntTapped === true && this.startHour === undefined ){
      const alert = this.alertCtrl.create({
        title: 'Información incompleta',
        subTitle: 'Es aqui donde debes decirnos como te movilizas del trabajo a tu casa o de tu casa al trabajo',
        buttons: ['OK']
      });
      alert.present();
    }else{
      const alert = this.alertCtrl.create({
        title: '¿vas de tu ' + this.textMessage + ' a las ' + this.startHour + '?',
        buttons: [
          {
            text: 'Confirmo este horario',
            handler: () => {
              this.signUpService.pushSchedule(this.signUpService.userPlace, this.userId, this.startHour, this.geofireType, this.textMessage, this.imageURL );
              this.viewCtrl.dismiss();
            }
          }
        ]
      });
      alert.present();
    }
    
  }

}
