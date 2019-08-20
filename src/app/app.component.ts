import { Component } from '@angular/core';
import { Platform, IonicPage, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { SignUpService } from '../services/signup.service';
import { FcmProvider } from '../providers/fcm/fcm';
import { tap } from 'rxjs/operators';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any  = 'LoginPage';
  userUniversity:any;
  oneSignalAppId:string = '58b65ff2-abec-43de-8596-ec82288d0255';
  firebaseSenderId:string = '1009109452629';


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private signUpService: SignUpService, public fcm: FcmProvider, public toastCtrl: ToastController) {
  this.userUniversity = this.signUpService.userUniversity;
  console.log(this.userUniversity);
  //get Token of the device for push notification
    this.fcm.getToken()

    this.fcm.listenToNotifications().pipe(
      tap(message => {
        const toast = this.toastCtrl.create({
          message: message.body,
          duration: 3000
        });
        toast.present();
      })
    ).subscribe()
    
   platform.ready().then(()=>{
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
   })
    


  }
}
