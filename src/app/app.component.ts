import { Component } from '@angular/core';
import { Platform, IonicPage } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';






@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any  = 'LoginPage';



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  
    firebase.initializeApp({
      apiKey: "AIzaSyDrNPJBT1eVEFvZDfIfwnuD3ivJo7hVw2M",
      authDomain: "securityrules-93b35.firebaseapp.com",
      databaseURL: "https://securityrules-93b35.firebaseio.com",
      projectId: "securityrules-93b35",
      storageBucket: "",
      messagingSenderId: "181111098326"
    });

   platform.ready().then(()=>{
    statusBar.backgroundColorByHexString('#ffffff');     splashScreen.hide();
     firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.rootPage = 'TabsPage';
      }else{
        this.rootPage = 'LoginPage';
      }
    })
   })
    
  }
}
