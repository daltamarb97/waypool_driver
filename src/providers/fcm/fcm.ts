import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Platform } from 'ionic-angular/umd';
import {Firebase} from '@ionic-native/firebase/ngx'
import { AngularFireAuth } from 'angularfire2/auth';
/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FcmProvider {
  token:any;
  userId:any;
  constructor(public firebase: Firebase, public afDB: AngularFireDatabase, private platfrom: Platform, public angularFireAuth: AngularFireAuth) {
      this.userId = this.angularFireAuth.auth.currentUser.uid;
  }

  async getToken(){

    if(this.platfrom.is('android')){
      this.token = await this.firebase.getToken();
    }


    if(this.platfrom.is('ios')){
      this.token = await this.firebase.getToken();
      await this.firebase.grantPermission();
    }

    return this.saveTokenToFirebase(this.token);

  }


  private saveTokenToFirebase(token){
    if(!token) return;

    const devicesRef = this.afDB.database.ref('/devices/' + this.userId);

    const docData = {
      token: token
    }

    return devicesRef.set(docData);
  }


  listenToNotifications(){
    return this.firebase.onNotificationOpen()
  }

}
