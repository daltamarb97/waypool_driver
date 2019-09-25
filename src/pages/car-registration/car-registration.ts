import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { FindridePage } from '../findride/findride';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignUpService } from '../../services/signup.service';
import { Subject } from 'rxjs';



/**
 * Generated class for the CarRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car-registration',
  templateUrl: 'car-registration.html',
})
export class CarRegistrationPage {
//everything that has number 1 refers to license and number 2 refers to Id (also in HTML)

  driver;
  driverInfo;
  namePicture:any = "Licencia" ;
  description:any = "Sube una foto clara de tu" ;
  img1 = "Licencia";
  img2 = "Cédula";
  
  des1 = "Sube una foto clara de tu";
  picToView:string = "assets/imgs/v2.png";;
  picToViewLicense:string= "assets/imgs/v2.png";
  picToViewId:string ="assets/imgs/v4.png";
  data;
  accepted1:boolean;
  accepted2:boolean;
  showLicense:boolean = true;
  showId:boolean = false ;
  cameraPicLicense:boolean = false;
  cameraPicId:boolean = false;
  unsubscribe = new Subject;


  options:CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private camera: Camera, public AngularFireauth: AngularFireAuth, public alertCtrl: AlertController, public SignUpService:SignUpService, public loadingCtrl: LoadingController) {
    this.driver =  this.AngularFireauth.auth.currentUser.uid;

    this.SignUpService.getMyInfo(this.SignUpService.userUniversity, this.driver).takeUntil(this.unsubscribe).subscribe(user=>{
      this.driverInfo = user
      if(this.driverInfo.documents){
        if(this.driverInfo.documents.license == true ){
          this.picToViewLicense = "assets/imgs/v2.3.png";
          this.picToView =  "assets/imgs/v2.3.png";
        }else if(this.driverInfo.documents.id == true ){
          this.picToViewId = "assets/imgs/_v4.3.png";
        }else if(this.driverInfo.documents.license == false){
          this.picToViewLicense = "assets/imgs/v2.2.png";
          this.picToView =  "assets/imgs/v2.2.png";
        }else if(this.driverInfo.documents.id == false ){
          this.picToViewId = "assets/imgs/v4.2.png";
        }else if(this.driverInfo.documents.license == undefined ){
          this.picToViewLicense = "assets/imgs/v2.png";
          this.picToView =  "assets/imgs/v2.png";
        }else if(this.driverInfo.documents.id == undefined ){
          this.picToViewId = "assets/imgs/v4.png";
          
        }
      }
    })

    
    
    
  }

  ionViewDidLeave(){
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
  usageCameraLicense(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):

      let loading = this.loadingCtrl.create({
        spinner: 'crescent',
        content: `
          <div class="custom-spinner-container">
            <div class="custom-spinner-box"></div>
          </div>`
          });
      loading.present();


      let base64Image = 'data:image/jpeg;base64,' + imageData;
      const picturesDrivers = storage().ref(this.SignUpService.userUniversity + '/documentsDrivers/' + this.driver + '/documents/' + this.data);
      picturesDrivers.putString(base64Image, 'data_url').then(()=>{
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: '¡HECHO!',
          subTitle: 'ya tenemos tu documento, lo verificaremos en las proximas 24 horas y te enviaremos un correo cuando todo este listo',
          buttons: ['OK']
        });
        alert.present();
      }).catch((error)=>{
        loading.dismiss();
        console.log(error);
      const alert = this.alertCtrl.create({
        title: 'hubo un error',
        subTitle: 'intenta subir el documento otra vez',
        buttons: ['OK']
      });
      alert.present();
      })

      

      this.picToViewLicense = "assets/imgs/v2.2.png";
      this.picToView = "assets/imgs/v2.2.png";
      this.SignUpService.pushDocsL(this.SignUpService.userUniversity, this.driver);
      

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

  usageCameraId(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):

      let loading = this.loadingCtrl.create({
        spinner: 'crescent',
        content: `
          <div class="custom-spinner-container">
            <div class="custom-spinner-box"></div>
          </div>`
          });
      loading.present();

      let base64Image = 'data:image/jpeg;base64,' + imageData;
      const picturesDrivers = storage().ref(this.SignUpService.userUniversity + '/documentsDrivers/' + this.driver + '/documents/' + this.data);
      picturesDrivers.putString(base64Image, 'data_url').then(()=>{
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: '¡HECHO!',
          subTitle: 'ya tenemos tu documento, lo verificaremos en las proximas 24 horas y te enviaremos un correo cuando todo este listo',
          buttons: ['OK']
        });
        alert.present();
      }).catch((error)=>{
        loading.dismiss();
        console.log(error);
      const alert = this.alertCtrl.create({
        title: 'hubo un error',
        subTitle: 'intenta subir el documento otra vez',
        buttons: ['OK']
      });
      alert.present();
      })

      this.picToViewId = "assets/imgs/v4.2.png";
      this.picToView = "assets/imgs/v4.2.png";
      this.SignUpService.pushDocsId(this.SignUpService.userUniversity, this.driver);

      

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

  if(this.driverInfo.documents){
    if(this.driverInfo.documents.license == undefined ){
      this.picToViewLicense = "assets/imgs/v2.png";
      this.picToView = "assets/imgs/v2.png";

    
    }else if (this.driverInfo.documents.license == false){
      this.picToViewLicense = "assets/imgs/v2.2.png";
      this.picToView = "assets/imgs/v2.2.png";

    }else if(this.driverInfo.documents.license == true){
      this.picToViewLicense = "assets/imgs/v2.3.png";
      this.picToView = "assets/imgs/v2.3.png";

    }else{
      this.picToViewLicense = "assets/imgs/v2.png";
      this.picToView = "assets/imgs/v2.png";
      this.showLicense = true;

    }
  }
  
    this.namePicture = this.img1;
    this.description = this.des1;
    this.data = "licencia";
    this.showLicense = true;
    this.showId = false;
  };

  changeNamePicture2(){
  if(this.driverInfo.documents){
    if(this.driverInfo.documents.id == undefined){
      this.picToViewId = "assets/imgs/v4.png";
      this.picToView = "assets/imgs/v4.png";

    }else if(this.driverInfo.documents.id == false){
      this.picToViewId = "assets/imgs/v4.2.png";
      this.picToView = "assets/imgs/v4.2.png";

    }else if(this.driverInfo.documents.id == true){
      this.picToViewId = "assets/imgs/_v4.3.png";
      this.picToView = "assets/imgs/_v4.3.png";

    }else{
      this.picToViewId = "assets/imgs/v4.png";
      this.picToView = "assets/imgs/v4.png";

      
    }

  }
    
    this.namePicture = this.img2;
    this.description = this.des1;
    this.data = "cedula";
    this.showId = true;
    this.showLicense = false;
 
  };



}
