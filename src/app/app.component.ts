import { Component } from '@angular/core';
import { Platform, IonicPage } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { SignUpService } from '../services/signup.service';






@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any  = 'LoginPage';
  userUniversity:any;



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private signUpService: SignUpService) {
  this.userUniversity = this.signUpService.userUniversity;
  console.log(this.userUniversity);
    
    // firebase.initializeApp({
    //   apiKey: "AIzaSyAPagXvglCXnK3neJwU50EiZnJPmdd__PM",
    //   authDomain: "waypoooldemo.firebaseapp.com",
    //   databaseURL: "https://waypoooldemo.firebaseio.com",
    //   projectId: "waypoooldemo",
    //   storageBucket: "waypoooldemo.appspot.com",
    //   messagingSenderId: "1009109452629"
    // });

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
