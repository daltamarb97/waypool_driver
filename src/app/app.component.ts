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
  constructor(public alertCtrl: AlertController, statusBar: StatusBar, splashScreen: SplashScreen, private signUpService: SignUpService, private geolocation: Geolocation, private platform: Platform, private fcm: FCM, public toastCtrl: ToastController, private firebase: Firebase, public toastController: ToastController, public afDB: AngularFireDatabase, private angularFireAuth: AngularFireAuth) {
    console.log('se cargo')
    this.pages = [
      {title:'Mi viajes',component:'ReservetripPage'},
      {title: 'Mi Billetera', component:'WalletPage'},
      {title: 'Mi horario', component:'SchedulePage'}, 
      {title:'Mi perfil',component:'ProfilePage'},
      {title:'Mis documentos',component:'CarRegistrationPage'},
      {title:'Mis vehículos',component:'ShowInfoCarPage'},
      {title: 'Soporte', component:'HelpPage'},
      {title: 'Terminos y Condiciones', component:'TermsPage'}
    

    ]
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
}
