import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, Tabs, AlertController, App, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.service';
import { sendCoordsService } from '../../services/sendCoords.service';

import { sendUsersService } from '../../services/sendUsers.service';
import { priceService } from '../../services/price.service';
import { geofireService } from '../../services/geofire.services';
import { ConfirmdirectionPage } from '../confirmdirection/confirmdirection';
import { Subscription, Subject } from 'rxjs';

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

  geoInfo1;
  geoInfo2;
  geocoder;
  location;
  buttonColor:string = '#0fc874';
  buttonColor2:string = '#0fc874';
  unsubscribe = new Subject;
  carModelList:any=[];
  car:string;
  

  constructor(public navCtrl: NavController, public appCtrl: App,  public PriceService:priceService,public alertCtrl: AlertController,private afDB: AngularFireDatabase,public sendUsersService: sendUsersService, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, private geofireService: geofireService) {
    this.geoInfo1 = this.navParams.get('geoInfo1')
    console.log(this.geoInfo1)

    this.geoInfo2 = this.navParams.get('geoInfo2')
    console.log(this.geoInfo2)

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
        this.SignUpService.getMyInfo(this.userDriverUid).takeUntil(this.unsubscribe).subscribe(driver=>{
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
     })
     this.confirmDirection(this.geoInfo1, this.geoInfo2, this.driverInfo);

        
      } else {
        this.PriceService.setPriceAndNote(this.userDriverUid,this.precio,this.note,this.car)
        this.accepted = true;
        this.dismiss();
        this.SignUpService.getMyInfo(this.userDriverUid).takeUntil(this.unsubscribe).subscribe(driver=>{
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
     })
        
     this.confirmDirection(this.geoInfo1, this.geoInfo2, this.driverInfo);

              
      }

       
      }; 

      confirmDirection(geoInfo1, geoInfo2, driverInfo){
        let modal = this.modalCtrl.create('ConfirmdirectionPage', {geoInfo1, geoInfo2, driverInfo});
     modal.present();
     
     }
      
    
        
  dismiss() {
    this.viewCtrl.dismiss(this.accepted);
   
  }  

  // ngOnDestroy(){
  //   this.unsubscribe.next();
  //   this.unsubscribe.complete();
  // }
}
