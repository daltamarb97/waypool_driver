import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { MyridePage } from '../pages/myride/myride';
import { FindridePage } from '../pages/findride/findride';
import { WalletPage } from '../pages/wallet/wallet';
import { MorePage } from '../pages/more/more';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { TermsPage } from '../pages/terms/terms';
import { HelpPage } from '../pages/help/help';
import { CarRegistrationPage } from '../pages/car-registration/car-registration';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SignUpService } from '../services/signup.service';
import { authenticationService } from '../services/driverauthentication.service';
import { sendCoordsService } from '../services/sendCoords.service';
import { sendUsersService } from '../services/sendUsers.service';
import { Camera } from '@ionic-native/camera';
import { Geofence } from '@ionic-native/geofence';

import { geofireService } from '../services/geofire.services';
import { instancesService } from '../services/instances.service';

 
import { CallNumber } from '@ionic-native/call-number';
import { ConfirmpricePage } from '../pages/confirmprice/confirmprice';
import { priceService } from '../services/price.service';
import { PickupPage } from '../pages/pickup/pickup';
import { RatetripPage } from '../pages/ratetrip/ratetrip';
// import { ConfirmdirectionPage } from '../pages/confirmdirection/confirmdirection';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { ShowInfoCarPage } from '../pages/showinfocar/showinfocar';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { SupportPage } from '../pages/support/support';
import { sendFeedbackService } from '../services/sendFeedback.service';
import { ChatsService } from '../services/chat.service';
import { TripsService } from '../services/trips.service';
import { MbscModule } from '@mobiscroll/angular-lite';
import { WindowService } from '../services/window.service';
import { MetricsService } from '../services/metrics.service';
import { Geolocation } from '@ionic-native/geolocation';
import { Firebase } from '@ionic-native/firebase';
import { FCM } from '@ionic-native/fcm';

export const firebaseConfig = {
    apiKey: "AIzaSyB7Py2pOZEUJD2Ar34a-8z-rReiDtsikxw",
    authDomain: "waypool-511be.firebaseapp.com",
    databaseURL: "https://waypool-511be.firebaseio.com",
    projectId: "waypool-511be",
    storageBucket: "waypool-511be.appspot.com",
    messagingSenderId: "904521954579"

  };




@NgModule({
  declarations: [
    MyApp
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages:false,
      }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    HttpModule,
    MbscModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SignUpService,
    authenticationService,
    geofireService,
    EmailComposer,
    sendCoordsService,
    sendUsersService,
    instancesService,
    Camera,
    Geofence,
    priceService,
    Geofence,
    CallNumber,
    MyApp,
    EmailComposer,
    sendFeedbackService,
    ChatsService,
    TripsService,
    WindowService,
    MetricsService,
    Geolocation,
    Firebase,
    FCM

  ]
})
export class AppModule {}
