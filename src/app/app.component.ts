import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { TabsPage } from '../pages/tabs/tabs';
//import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';

import { CarRegistrationPage } from '../pages/car-registration/car-registration';
import { FindridePage } from '../pages/findride/findride';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
 


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    localStorage.removeItem('firebase:previous_websocket_failure');
    this.rootPage = LoginPage;
    
  }
}
