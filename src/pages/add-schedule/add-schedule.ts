import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
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
  @ViewChild('house',{read:ElementRef}) house;
  @ViewChild('work',{read:ElementRef}) work;
  accepted:any;
  imageHouseToWork:boolean = false;
  imageWorkToHouse:boolean = false;
  button1WasntTapped:boolean = true;
  button2WasntTapped:boolean = true;
  textMessage: string;
  startHour:any;
  userId: any;
  geofireType:string;
  imageURL:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,public renderer: Renderer ,public alertCtrl: AlertController, public signUpService: SignUpService, public angularFireAuth: AngularFireAuth, private instances: instancesService) {
  
    this.userId = this.angularFireAuth.auth.currentUser.uid;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSchedulePage');
  }


  dismiss(){
    this.viewCtrl.dismiss(this.accepted);

  }

  
  selectImageHouse(){
    // this is just to change the css
    this.renderer.setElementStyle(this.house.nativeElement,'border-width','3px')
    this.renderer.setElementStyle(this.house.nativeElement,'border-style','solid')
    this.renderer.setElementStyle(this.house.nativeElement,'border-color','green')
  
    this.renderer.setElementStyle(this.work.nativeElement,'border-width','0px')
    this.imageURL = 'assets/imgs/houseToWork.png';

    this.textMessage = 'Trabajo'
    this.geofireType = 'origin';
    this.imageHouseToWork = true;
    this.imageWorkToHouse = false;
  }
  selectImageWork(){
    // this is just to change the css
    this.renderer.setElementStyle(this.work.nativeElement,'border-width','3px')
    this.renderer.setElementStyle(this.work.nativeElement,'border-style','solid')
    this.renderer.setElementStyle(this.work.nativeElement,'border-color','green')
  
    this.renderer.setElementStyle(this.house.nativeElement,'border-width','0px')
    this.textMessage = 'Casa';
    this.geofireType = 'destination';
    this.imageURL = 'assets/imgs/workToHouse.png';
    this.imageHouseToWork = false;
    this.imageWorkToHouse = true;
  
  }
 

  confirm(){
    console.log(this.imageHouseToWork);
    console.log(this.imageWorkToHouse);
    
    if(this.imageHouseToWork === true  || this.imageWorkToHouse === true){ 
      if(this.startHour === undefined || this.startHour === null){
        const alert = this.alertCtrl.create({
          title: 'Debes seleccionar una hora de partida',
          subTitle: '¿A qué hora sales del trabajo o de tu casa?',
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
      
    }else{
      const alert = this.alertCtrl.create({
        title: 'Debes seleccionar una opción',
        subTitle: '¿a esta hora vas de tu trabajo a tu casa o de tu casa a tu trabajo?',
        buttons: ['OK']
      });
      alert.present();
    }
  
  }

}
