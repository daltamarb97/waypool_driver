import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
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
  picToView:string = "assets/imgs/v2.png";
  picToViewLicense:string = "assets/imgs/v2.png";
  picToViewId:string = "assets/imgs/v3.png";
  data;
  accepted1:boolean;
  accepted2:boolean;

  options:CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private camera: Camera, public AngularFireauth: AngularFireAuth, public alertCtrl: AlertController) {
    this.driver =  this.AngularFireauth.auth.currentUser.uid;
  }

  usageCamera(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      const picturesDrivers = storage().ref('documentsDrivers/' + this.driver + '/documents/' + this.data);
      picturesDrivers.putString(base64Image, 'data_url');

      const alert = this.alertCtrl.create({
        title: '¡HECHO!',
        subTitle: 'ya tenemos tu documento',
        buttons: ['OK']
      });
      alert.present();
      

     }, (err) => {
      console.log(err);
      const alert = this.alertCtrl.create({
        title: 'hubo un error',
        subTitle: 'intenta subir el documento otra vez',
        buttons: ['OK']
      });
      alert.present();
     });
  }

  changeNamePicture1(){
    this.picToViewLicense = "assets/imgs/v2.png";
    this.namePicture = this.img1;
    this.description = this.des1;
    this.picToView = "assets/imgs/v2.png";
    this.data = "licencia";
  };

  changeNamePicture2(){
    this.picToViewId = "assets/imgs/v3.png";
    this.namePicture = this.img2;
    this.description = this.des1;
    this.picToView = "assets/imgs/v3.png";
    this.data = "cedula";
 
  };

 


  findRide(){
    this.navCtrl.push(FindridePage);
  };

}
