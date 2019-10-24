import { Component } from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, Tabs, AlertController, App, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.service';
import { sendCoordsService } from '../../services/sendCoords.service';
/**
 * Generated class for the RemoveSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remove-schedule',
  templateUrl: 'remove-schedule.html',
})
export class RemoveSchedulePage {


  accepted:any;
  textMessage: string;
  startHour:any;
  userId: any;
  geofireType:string;
  picToView:any;
  schedule:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController, public signUpService: SignUpService, public angularFireAuth: AngularFireAuth) {

    this.schedule= this.navParams.get('schedule') 
console.log(this.schedule);

    this.userId = this.angularFireAuth.auth.currentUser.uid;

    this.startHour = this.schedule.hour;
    this.picToView = this.schedule.image;
    this.textMessage = this.schedule.description;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemoveSchedulePage');
  }


  dismiss(){
    this.viewCtrl.dismiss(this.accepted);

  }

  remove(){
    this.signUpService.removeSchedule(this.signUpService.userPlace, this.userId, this.schedule.key);
    this.dismiss();
  }

}
