import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, Tabs, AlertController, App, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.service';
import { sendCoordsService } from '../../services/sendCoords.service';

import { sendUsersService } from '../../services/sendUsers.service';
import { priceService } from '../../services/price.service';
import { geofireService } from '../../services/geofire.services';

@IonicPage()

@Component({
  selector: 'page-confirmprice',
  templateUrl: 'confirmprice.html'
})
export class ConfirmpricePage {
  
  accepted: boolean;

  precio:string;
  note:string;
  userDriverUid=this.AngularFireAuth.auth.currentUser.uid
  driver:any ={};
  driverInfo:any ={};
  lat;
  lng;
  geoInfo;

  geocoder;
  location;
  carModelList:any=[];
  car:string;
  constructor(public navCtrl: NavController, public appCtrl: App,  public PriceService:priceService,public alertCtrl: AlertController,private afDB: AngularFireDatabase,public sendUsersService: sendUsersService, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, private geofireService: geofireService) {
    this.geoInfo = this.navParams.get('geoInfo')
    console.log(this.geoInfo)
    this.SignUpService.getCar(this.userDriverUid)
    .subscribe( car => {
      this.carModelList = car;
      console.log(this.carModelList)

    });
   
  }
    setPriceDriver(){
      console.log(this.car)
      
      if(this.precio == null || this.precio == '' || this.car == null || this.car==''){
        const alert = this.alertCtrl.create({
            title: 'Informacion Incompleta',
            subTitle: 'No haz colocado el precio por el que estas dispuesto a compatir tu carro o no haz especificado en que carro te moverás',
            buttons: ['OK']
          });
          alert.present();
    }else if(this.note == null || this.note == '' ){
        this.PriceService.setPrice(this.userDriverUid,this.precio,this.car)
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
          this.driverInfo.car = this.driver.trips.car
          this.driverInfo.price = this.driver.trips.price
          this.driverInfo.note = 'No hay nota.'
          console.log(this.driverInfo);

          this.geofireService.setGeofire(1, this.geoInfo.lat, this.geoInfo.lng, this.driverInfo);

     })
        
      } else {
        this.PriceService.setPriceAndNote(this.userDriverUid,this.precio,this.note,this.car)
        this.accepted = true;
        this.dismiss();
      


        this.SignUpService.getMyInfo(this.userDriverUid).subscribe(driver=>{
          this.driver = driver;
       
          this.driverInfo.origin = this.driver.trips.origin
          this.driverInfo.destination = this.driver.trips.destination
          this.driverInfo.name = this.driver.name
          this.driverInfo.lastname = this.driver.lastname
          this.driverInfo.phone = this.driver.phone
          this.driverInfo.userId = this.driver.userId
          this.driverInfo.car = this.car
          this.driverInfo.price = this.driver.trips.price
          this.driverInfo.note = this.driver.trips.note

          console.log(this.driverInfo);

          this.geofireService.setGeofire(1, this.geoInfo.lat, this.geoInfo.lng, this.driverInfo);

     })
  
        
      }
        
      }; 
      
      
        
  dismiss() {
    this.viewCtrl.dismiss(this.accepted);
  }  
}
