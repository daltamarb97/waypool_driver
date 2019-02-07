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
import { geofireService } from '../../services/geofire.services';


@Component({
  selector: 'page-confirmprice',
  templateUrl: 'confirmprice.html'
})
export class ConfirmpricePage {
  
  accepted: boolean;

  precio:string;
  nota:string;
  userDriverUid=this.AngularFireAuth.auth.currentUser.uid
  driver;
  driverInfo:any ={};
  lat;
  lng;
  geoInfo;
  geocoder;
  location;

  constructor(public navCtrl: NavController, public appCtrl: App,  public PriceService:priceService,public alertCtrl: AlertController,private afDB: AngularFireDatabase,public sendUsersService: sendUsersService, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, private geofireService: geofireService) {
    this.geoInfo = this.navParams.get('geoInfo')
    console.log(this.geoInfo)
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
      


        this.SignUpService.getMyInfo(this.userDriverUid).subscribe(driver=>{
          this.driver = driver;
          console.log(this.driver.trips.origin)
          this.driverInfo.origin = this.driver.trips.origin
          this.driverInfo.destination = this.driver.trips.destination
          this.driverInfo.name = this.driver.name
          this.driverInfo.lastname = this.driver.lastname
          this.driverInfo.phone = this.driver.phone
          this.driverInfo.userId = this.driver.userId
          this.driverInfo.carModel = this.driver.carModel
          this.driverInfo.plateNumber  = this.driver.plateNumber
          this.driverInfo.price = this.driver.trips.price
          this.driverInfo.note = this.driver.trips.nota
          console.log(this.driverInfo);

          this.geofireService.setGeofire(1, this.geoInfo.lat, this.geoInfo.lng, this.driverInfo);

     })
  
        
      }
        
      }; 
      
      
        
  dismiss() {
    this.viewCtrl.dismiss(this.accepted);
  }  
}
