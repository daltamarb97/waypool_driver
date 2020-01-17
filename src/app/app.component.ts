import { Component, ViewChild } from '@angular/core';
import { Platform, IonicPage, ToastController, AlertController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebaseFirst from 'firebase';
import { SignUpService } from '../services/signup.service';
import { Geolocation } from '@ionic-native/geolocation/';
import { FCM } from '@ionic-native/fcm';
import { Firebase } from '@ionic-native/firebase';
import { tap } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { WindowService } from '../services/window.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage:any  = 'LoginPage';
  alertInternet:any;
  token:any;
  pages:any=[];
  driverUninorte = [];
  count:any;
  stop:boolean = false;
  constructor(public alertCtrl: AlertController, statusBar: StatusBar, splashScreen: SplashScreen, private geolocation: Geolocation, private platform: Platform, private fcm: FCM, public toastCtrl: ToastController, private firebase: Firebase, public toastController: ToastController, public afDB: AngularFireDatabase, private angularFireAuth: AngularFireAuth, private signUpService: SignUpService) {
    console.log('se cargo')
    this.pages = [
      {title:'Mis viajes',component:'ReservetripPage', icon:'md-paper'},
      {title: 'Billetera', component:'WalletPage',icon:'card'},
      {title: 'Horario', component:'SchedulePage',icon:'time'}, 
      {title:'Mi perfil',component:'MorePage',icon:'person'},
      {title:'Instrucciones',component:'WalkthroughPage',icon:'alert'},

    

    ]
    statusBar.backgroundColorByHexString('#ffffff');     
    splashScreen.hide();
    
    this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then(()=>{
      console.log('location catched');
    }).catch((error)=>{
      console.log(error);
    }) 



    
    
    console.log('esta notificacion la queria ver');


    platform.ready().then(()=>{

      
      // this.firebase.onNotificationOpen().subscribe((response)=>{
      //   if(response.tap){
      //     console.log('received in background');
      //   }else{
      //     const toast = this.toastController.create({
      //             message: response.body,
      //             duration: 3000
      //           })
      //           toast.present();
      //   }
      // });


      console.log('esta notificacion la queria ver');

      this.fcm.onNotification() .subscribe(data => {
        if(data.wasTapped){
         console.log('app in background');
         console.log(JSON.stringify(data));
        }else{
         console.log(JSON.stringify(data));
        }
      })
    })
    

    setTimeout(() => {
      firebaseFirst.database().ref('.info/connected').on('value', (snap)=>{
        if(snap.val() === false){
          this.alertInternet = this.alertCtrl.create({
            title: '¡Oops!',
            subTitle: 'Ocurrió un error conectándote a Waypool. Por favor verifica tu conexión a internet',
          });
          this.alertInternet.present();
        }else if(snap.val() === true){
          if(this.alertInternet){
            this.alertInternet.dismiss();
          }else{

          }
        }
      })
    }, 1500);


    firebaseFirst.auth().onAuthStateChanged((user)=>{
      if(user){
        if(user.emailVerified == false){
          this.rootPage = 'LoginPage';
        }else{
          this.rootPage = 'FindridePage'; 
        }
      }else{
        this.rootPage = 'LoginPage';
      }
    })
  }
  openPage(page){
    this.nav.push(page.component)
  }
  goAsPassenger(){
    this.nav.setRoot('FindridePassPage')
  }

}
