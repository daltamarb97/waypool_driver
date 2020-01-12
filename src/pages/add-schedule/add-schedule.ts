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
  userInfo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,public renderer: Renderer ,public alertCtrl: AlertController, public signUpService: SignUpService, public angularFireAuth: AngularFireAuth, private instances: instancesService, private afDB: AngularFireDatabase) {
  
    this.userId = this.angularFireAuth.auth.currentUser.uid;

    this.afDB.database.ref(this.signUpService.userPlace + '/drivers/' + this.userId).once('value').then((snap)=>{
      this.userInfo = snap.val();
    })
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
    this.imageURL = 'assets/imgs/workToHouse.png';

    this.textMessage = 'Casa'
    this.geofireType = 'destination';
    this.imageHouseToWork = true;
    this.imageWorkToHouse = false;
  }
  selectImageWork(){
    // this is just to change the css
    this.renderer.setElementStyle(this.work.nativeElement,'border-width','3px')
    this.renderer.setElementStyle(this.work.nativeElement,'border-style','solid')
    this.renderer.setElementStyle(this.work.nativeElement,'border-color','green')
  
    this.renderer.setElementStyle(this.house.nativeElement,'border-width','0px')
    this.textMessage = 'Trabajo';
    this.geofireType = 'origin';
    this.imageURL = 'assets/imgs/houseToWork.png';
    
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
              title: '¿vas a tu ' + this.textMessage + ' a las ' + this.startHour + '?',
              buttons: [
                {
                  text: 'Confirmo este horario',
                  handler: () => {
                    this.afDB.database.ref('allCities/' + this.userInfo.city + '/allPlaces/' + this.userInfo.company + '/zones').once('value').then((snap)=>{
                      let obj = snap.val();

                      this.afDB.database.ref('allSchedules/' +this.userId).push({
                        hour: this.startHour, 
                        type: this.geofireType,
                        description: this.textMessage,
                        image: this.imageURL
                    }).then((snap1)=>{
                        this.afDB.database.ref('allSchedules/' +this.userId + '/' + snap1.key).update({
                            key: snap1.key                              
                        })
                         
                      Object.getOwnPropertyNames(obj).forEach((keyZ)=>{

                          if(obj[keyZ] === 2){

                          }else{
                            this.afDB.database.ref(obj[keyZ] + '/drivers/'+this.userId+'/schedule/' + snap1.key).update({
                              hour: this.startHour, 
                              type: this.geofireType,
                              description: this.textMessage,
                              image: this.imageURL,
                              key: snap1.key
                          })
                          }              
                        })
                      })
                    }).then(()=>{
                      this.viewCtrl.dismiss();
                    })
                  }
                }
              ]
            });
            alert.present();
          }
          
        }else{
          const alert = this.alertCtrl.create({
            title: 'Debes seleccionar una opción',
            subTitle: '¿a esta hora vas a tu casa o a tu trabajo?',
            buttons: ['OK']
          });
          alert.present();
        }
      
    
  }

}
