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
import { ListridePage } from '../pages/listride/listride';
import { ConfirmpopupPage } from '../pages/confirmpopup/confirmpopup';
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
import { Geolocation } from '@ionic-native/geolocation';
import { sendCoordsService } from '../services/sendCoords.service';
import { sendUsersService } from '../services/sendUsers.service';
import { Camera } from '@ionic-native/camera';
import { Geofence } from '@ionic-native/geofence';

import { geofireService } from '../services/geofire.services';
import { instancesService } from '../services/instances.service';

import { OnTripPage } from '../pages/onTrip/onTrip';
import { CallNumber } from '@ionic-native/call-number';
import { ConfirmpricePage } from '../pages/confirmprice/confirmprice';
import { priceService } from '../services/price.service';
import { PickupPage } from '../pages/pickup/pickup';
import { RatetripPage } from '../pages/ratetrip/ratetrip';
import { ShowInfoCarPage } from '../pages/showinfocar/showinfocar';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { SupportPage } from '../pages/support/support';


export const firebaseConfig = {
  apiKey: "AIzaSyDYldaKvN7lRhAOYesOeWhl7Zs7WfTn9ak",
  authDomain: "waypoolapp-f1349.firebaseapp.com",
  databaseURL: "https://waypoolapp-f1349.firebaseio.com",
  projectId: "waypoolapp-f1349",
  storageBucket: "waypoolapp-f1349.appspot.com",
  messagingSenderId: "729494621596"
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
    AngularFireAuthModule

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
    Geolocation,
    EmailComposer,
    sendCoordsService,
    sendUsersService,
    instancesService,
    Camera,
    Geofence,
    priceService,
    Geofence,
    CallNumber

  ]
})
export class AppModule {}
