import { Component } from '@angular/core';
import { Platform, IonicPage, ToastController, AlertController } from 'ionic-angular';
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
  rootPage:any  = 'LoginPage';
  alertInternet:any;
  token:any;
  userId:any;

  constructor(public alertCtrl: AlertController, statusBar: StatusBar, splashScreen: SplashScreen, private signUpService: SignUpService, private geolocation: Geolocation, private platform: Platform, private fcm: FCM, public toastCtrl: ToastController, private firebase: Firebase, public toastController: ToastController, public afDB: AngularFireDatabase, private angularFireAuth: AngularFireAuth) {
    console.log('se cargo')

    this.userId =  this.angularFireAuth.auth.currentUser.uid;

    statusBar.backgroundColorByHexString('#ffffff');     
    splashScreen.hide();
    
    this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then(()=>{
      console.log('location catched');
    }).catch((error)=>{
      console.log(error);
    })



    platform.ready().then(()=>{
      
      this.firebase.onNotificationOpen().subscribe((response)=>{
        if(response.tap){
          console.log('received in background');
        }else{
          const toast = this.toastController.create({
                  message: response.body,
                  duration: 3000
                })
                toast.present();
        }
      });


      // this.fcm.onNotification() .subscribe(data => {
      //   if(data.wasTapped){
      //    console.log('app in background');
      //    console.log(JSON.stringify(data));
      //   }else{
      //    console.log(JSON.stringify(data));
      //   }
      // })
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
    }, 2500);


    firebaseFirst.auth().onAuthStateChanged((user)=>{
      if(user){
        if(user.emailVerified == false){
          this.rootPage = 'LoginPage';
        }else{
          this.afDB.database.ref('allUsers/' + this.userId).once('value').then((snap)=>{
            this.signUpService.userPlace = snap.val().place;
          })

          this.rootPage = 'TabsPage';
        }
      }else{
        this.rootPage = 'LoginPage';
      }
    })
  }


  private async presentToast(message) {
    const toast = await this.toastController.create({
      message: 'Hi this is a test',
      duration: 3000
    });
    toast.present();
  }
}
