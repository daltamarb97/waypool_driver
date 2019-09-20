import { Component } from '@angular/core';
import { Platform, IonicPage, ToastController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { SignUpService } from '../services/signup.service';
import { Geolocation } from '@ionic-native/geolocation/';
import { FCM } from '@ionic-native/fcm';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any  = 'LoginPage';
  alertInternet:any;
  token:any;
  

  constructor(public alertCtrl: AlertController, statusBar: StatusBar, splashScreen: SplashScreen, private signUpService: SignUpService, private geolocation: Geolocation, private platform: Platform, private fcm: FCM, public toastCtrl: ToastController) {
    console.log('se cargo')

    statusBar.backgroundColorByHexString('#ffffff');     
    splashScreen.hide();
    this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then(()=>{
      console.log('location catched');
    }).catch((error)=>{
      console.log(error);
    })

    platform.ready().then(()=>{

      this.fcm.onNotification().subscribe(data => {
        if(data.wasTapped){
         console.log('app in background');
         console.log(JSON.stringify(data));
        }else{
         console.log(JSON.stringify(data));
  
          const toast = this.toastCtrl.create({
            message: 'testing',
            duration: 3000
          })
          toast.present();
        }
      })
    })
    


    setTimeout(() => {
      firebase.database().ref('.info/connected').on('value', (snap)=>{
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
    }, 2500);


     firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        if(user.emailVerified == false){
          this.rootPage = 'LoginPage';
        }else{
          this.rootPage = 'TabsPage';
        }
      }else{
        this.rootPage = 'LoginPage';
      }
    })
  }
}
