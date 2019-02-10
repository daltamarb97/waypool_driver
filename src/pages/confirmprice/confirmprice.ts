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
  note:string;
  userDriverUid=this.AngularFireAuth.auth.currentUser.uid
  driver;
  driverInfo:any ={};
  lat;
  lng;
  geoInfo1;
  geoInfo2;
  geocoder;
  location;
  buttonColor:string = '#0fc874';
  buttonColor2:string = '#0fc874';

  constructor(public navCtrl: NavController, public appCtrl: App,  public PriceService:priceService,public alertCtrl: AlertController,private afDB: AngularFireDatabase,public sendUsersService: sendUsersService, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, private geofireService: geofireService) {
    this.geoInfo1 = this.navParams.get('geoInfo1')
    console.log(this.geoInfo1)

    this.geoInfo2 = this.navParams.get('geoInfo2')
    console.log(this.geoInfo2)

    this.SignUpService.getMyInfo(this.userDriverUid).subscribe(driver=>{
      this.driver = driver;
      console.log(this.driver.origin)
      this.driverInfo.origin = this.driver.origin
      this.driverInfo.destination = this.driver.destination
      this.driverInfo.name = this.driver.name
      this.driverInfo.lastname = this.driver.lastname
      this.driverInfo.phone = this.driver.phone
      this.driverInfo.userId = this.driver.userId
      this.driverInfo.carModel = this.driver.carModel
      this.driverInfo.plateNumber  = this.driver.plateNumber
      this.driverInfo.price = this.driver.trips.price
      this.driverInfo.note = this.driver.trips.note
      console.log(this.driverInfo);
 })
  }
  
    setPriceDriver(){
    
      if(this.precio == null || this.precio == ''){
        const alert = this.alertCtrl.create({
            title: 'Informacion Incompleta',
            subTitle: 'No haz colocado el precio por el que estas dispuesto a compatir tu carro',
            buttons: ['OK']
          });
          alert.present();
    }else if(this.note == null ){
        this.PriceService.setPrice(this.userDriverUid,this.precio)
        this.accepted = true;
        this.dismiss();
        
      } else {
        this.PriceService.setPriceAndNote(this.userDriverUid,this.precio,this.note)
        this.accepted = true;
        this.dismiss();
              
      }
        
      }; 

      

      
  setGeoFireOrigin(){
    this.geofireService.setGeofireOr(1, this.geoInfo1.lat, this.geoInfo1.lng, this.driverInfo);
    this.buttonColor2 = '#1AA3E8';
    this.buttonColor = '#0fc874';

      } 

  setGeoFireDestination(){
    this.geofireService.setGeofireDest(1, this.geoInfo2.lat, this.geoInfo2.lng, this.driverInfo);
    this.buttonColor = '#1AA3E8';
    this.buttonColor2 = '#0fc874';
      }
        
  dismiss() {
    this.viewCtrl.dismiss(this.accepted);
  }  
}
