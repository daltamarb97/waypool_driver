import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, Tabs, AlertController, App } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.service';
import { sendCoordsService } from '../../services/sendCoords.service';
import { MyridePage } from '../myride/myride';
import { TabsPage } from '../tabs/tabs';
import { sendUsersService } from '../../services/sendUsers.service';
import { priceService } from '../../services/price.service';
import { ListridePage } from '../listride/listride';


@Component({
  selector: 'page-confirmprice',
  templateUrl: 'confirmprice.html'
})
export class ConfirmpricePage {
  
  accepted: boolean;

  precio:string;
  nota:string;
  userDriverUid=this.AngularFireAuth.auth.currentUser.uid
  constructor(public navCtrl: NavController,      public appCtrl: App,  public PriceService:priceService,public alertCtrl: AlertController,private afDB: AngularFireDatabase,public sendUsersService: sendUsersService, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams) {
      
  }
  
    setPriceDriver(){
      if(this.precio == null || this.precio == ''){
        const alert = this.alertCtrl.create({
            title: 'Informacion Incompleta',
            subTitle: 'No haz colocado el precio por el que estas dispuesto a compatir tu carro',
            buttons: ['OK']
          });
          alert.present();
    }else if(this.nota == null || this.nota == null){
        this.PriceService.setPrice(this.userDriverUid,this.precio)
        this.accepted = true;
        this.dismiss();
        
      } else {
        this.PriceService.setPriceAndNote(this.userDriverUid,this.precio,this.nota)
        this.accepted = true;
        this.dismiss();
      

        
      }
        
      }; 
      
      
        
  dismiss() {
    this.viewCtrl.dismiss(this.accepted);
  }  
}
