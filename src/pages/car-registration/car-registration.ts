import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FindridePage } from '../findride/findride';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';



/**
 * Generated class for the CarRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-car-registration',
  templateUrl: 'car-registration.html',
})
export class CarRegistrationPage {
  namePicture:any = "Licencia" ;
  description:any = "Sube una foto clara de tu" ;
  img1 = "Licencia";
  img2 = "Cédula";
  img3 = "SOAT del vehículo";
  img4 = "Revisión Técnico Mecánica";
  img5 = "Tarjeta de Crédito";
  img6 = "Cuenta de Ahorros";
  des1 = "Sube una foto clara de tu";
  des2 = "Necesitamos la información de tu";
  options:CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private camera: Camera) {
  }

  usageCamera(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      const picturesDrivers = storage().ref('documentsDrivers/licencias');
      picturesDrivers.putString(base64Image, 'data_url');

     }, (err) => {
      console.log(err);
     });
  }

  changeNamePicture1(){
    this.namePicture = this.img1;
    this.description = this.des1;
  };

  changeNamePicture2(){
    this.namePicture = this.img2;
    this.description = this.des1;
  };

  changeNamePicture3(){
    this.namePicture = this.img3;
    this.description = this.des1;
  };

  changeNamePicture4(){
    this.namePicture = this.img4;
    this.description = this.des1;
  };

  changeNamePicture5(){
    this.namePicture = this.img5;
    this.description = this.des2;
  };

  changeNamePicture6(){
    this.namePicture = this.img6;
    this.description = this.des2;
  };

  findRide(){
    this.navCtrl.push(FindridePage);
  };

}
