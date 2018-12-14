import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { TabsPage } from '../pages/tabs/tabs';
//import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
<<<<<<< HEAD
import { CarRegistrationPage } from '../pages/car-registration/car-registration';
import { FindridePage } from '../pages/findride/findride';
=======
>>>>>>> 02e06de45b81de5a30d16be9dae81ab80bd0a7e1


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage:any = FindridePage;
=======
  rootPage:any = LoginPage;
>>>>>>> 02e06de45b81de5a30d16be9dae81ab80bd0a7e1

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
