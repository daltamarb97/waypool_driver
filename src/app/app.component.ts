import { Component } from '@angular/core';
import { Platform, IonicPage, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { SignUpService } from '../services/signup.service';
import { FCM } from '@ionic-native/fcm/ngx';


// ESTEEEEEEEEEEEEEE ES NO TE CONFUNDAS


declare var require: any;
declare var module: any;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any  = 'LoginPage';
  userUniversity:any;
  oneSignalAppId:string = '58b65ff2-abec-43de-8596-ec82288d0255';
  firebaseSenderId:string = '1009109452629';
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private signUpService: SignUpService, private fcm: FCM) {
  this.userUniversity = this.signUpService.userUniversity;
  console.log(this.userUniversity);
  


    statusBar.backgroundColorByHexString('#ffffff');     splashScreen.hide();
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
