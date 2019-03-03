import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { MyridePage } from '../pages/myride/myride';
import { ChatsPage } from '../pages/chats/chats';
import { FindridePage } from '../pages/findride/findride';
import { WalletPage } from '../pages/wallet/wallet';
import { MorePage } from '../pages/more/more';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PasswordPage } from '../pages/password/password';
import { VerificationPage } from '../pages/verification/verification';
import { CodePage } from '../pages/code/code';
import { ListridePage } from '../pages/listride/listride';
import { FilterPage } from '../pages/filter/filter';
import { RiderprofilePage } from '../pages/riderprofile/riderprofile';
import { ConfirmridePage } from '../pages/confirmride/confirmride';
import { ConfirmpopupPage } from '../pages/confirmpopup/confirmpopup';
import { RateriderPage } from '../pages/raterider/raterider';
import { ChattingPage } from '../pages/chatting/chatting';
import { ProfilePage } from '../pages/profile/profile';
import { ReviewsPage } from '../pages/reviews/reviews';
import { NotificationPage } from '../pages/notification/notification';
import { TermsPage } from '../pages/terms/terms';
import { EarnPage } from '../pages/earn/earn';
import { RatevroomPage } from '../pages/ratevroom/ratevroom';
import { HelpPage } from '../pages/help/help';
import { UploadPage } from '../pages/upload/upload';
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
import { ConfirmdirectionPage } from '../pages/confirmdirection/confirmdirection';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';



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
    MyApp,
    TabsPage,
    MyridePage,
    ChatsPage,
    FindridePage,
    WalletPage,
    MorePage,
    LoginPage,
    PasswordPage,
    SignupPage,
    VerificationPage,
    CodePage,
    ListridePage,
    FilterPage,
    PickupPage,
    RiderprofilePage,
    ConfirmridePage,
    ConfirmpricePage,
    ConfirmpopupPage,
    RateriderPage,
    ChattingPage,
    ProfilePage,
    ReviewsPage,
    NotificationPage,
    TermsPage,
    EarnPage,
    RatevroomPage,
    RatevroomPage,
    HelpPage,
    RatetripPage,
    ConfirmdirectionPage,
    OnTripPage,
    UploadPage,
    CarRegistrationPage,
    ConfirmdirectionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages:false,
      }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MyridePage,
    ChatsPage,
    FindridePage,
    WalletPage,
    MorePage,
    PickupPage,
    LoginPage,
    PasswordPage,
    SignupPage,
    ConfirmpricePage,
    ConfirmdirectionPage,
    VerificationPage,
    CodePage,
    ListridePage,
    FilterPage,
    RiderprofilePage,
    ConfirmridePage,
    ConfirmpopupPage,
    RateriderPage,
    ChattingPage,
    ProfilePage,
    ReviewsPage,
    NotificationPage,
    TermsPage,
    EarnPage,
    RatevroomPage,
    RatetripPage,
    HelpPage,
    OnTripPage,
    UploadPage,
    CarRegistrationPage,
    ConfirmdirectionPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SignUpService,
    authenticationService,
    geofireService,
    Geolocation,
    sendCoordsService,
    sendUsersService,
    instancesService,
    Camera,
    Geofence,
    priceService,
    Geofence,
    CallNumber,
    MyApp

  ]
})
export class AppModule {}
