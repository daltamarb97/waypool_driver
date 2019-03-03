import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FindridePage } from '../findride/findride';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';



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
  driver;
  namePicture:any = "Licencia" ;
  description:any = "Sube una foto clara de tu" ;
  img1 = "Licencia";
  img2 = "Cédula";
  
  des1 = "Sube una foto clara de tu";
  des2 = "Necesitamos la información de tu";
  options:CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private camera: Camera, public AngularFireauth: AngularFireAuth) {
    this.driver =  this.AngularFireauth.auth.currentUser.uid;
  }

  usageCamera(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      const picturesDrivers = storage().ref('documentsDrivers/' + this.driver + 'picture');
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



  findRide(){
    this.navCtrl.push(FindridePage);
  };

}
