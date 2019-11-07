import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, App, AlertController, LoadingController } from 'ionic-angular';
import { SignUpService } from '../../services/signup.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  schedule:string = "makeYourOwn";
  schedules = [];
  userId:any;
  picToView:any;
  description:any;
  showButtonWorkSchedule:boolean = false;

  optionsCamera:CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  optionsLibrary:CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public signUpService: SignUpService, private angularFireAuth: AngularFireAuth, public app: App, public alertCtrl: AlertController, private camera: Camera, public loadingCtrl: LoadingController) {
  
    this.userId = this.angularFireAuth.auth.currentUser.uid;

    this.signUpService.getSchedule(this.signUpService.userPlace, this.userId).subscribe(hour => {
      this.schedules = hour;
      console.log(this.schedules);
      if(this.schedules.length !== 0){        
        this.showButtonWorkSchedule = true;
      }else{
        this.showButtonWorkSchedule = false;
      }  
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

  makeSchedule(){
    let modal = this.modalCtrl.create('AddSchedulePage');
    modal.onDidDismiss(accepted => {
      if(accepted){
        // this.navCtrl.push('ListridePage');
        console.log('hola modal nuevo');
      }
    })
    modal.present();
  }

  skipSchedule(){
    this.app.getRootNav().push('FindRidePage');
  }

  removeTime(sche){
    let modal = this.modalCtrl.create('RemoveSchedulePage', {
      schedule: sche
    });
    modal.onDidDismiss(accepted => {
      if(accepted){
        // this.navCtrl.push('ListridePage');
        const alert = this.alertCtrl.create({
          title: 'Este horario ha sido eliminado',
          buttons: ['OK']
        });
        alert.present();
      }
    })
    modal.present();
    
  }

  usageCameraSchedule(){
    this.camera.getPicture(this.optionsCamera).then((imageData) => {

      let loading = this.loadingCtrl.create({
        spinner: 'crescent',
        content: `
          <div class="custom-spinner-container">
            <div class="custom-spinner-box"></div>
          </div>`
          });
      loading.present();

      let base64Image = 'data:image/jpeg;base64,' + imageData;

      const pictureSchedule = storage().ref(this.signUpService.userPlace + '/schedules/' + this.userId);


      
      pictureSchedule.putString(base64Image, 'data_url').then(()=>{
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: '¡HECHO!',
          subTitle: 'ya tenemos tu horario, en las próximas horas empezarás a recibir solicitudes de compañeros de viaje',
          buttons: [{
            text: 'OK',
            handler: () => {
              this.app.getRootNav().push('TabsPage');
            }
          }]
        });
        alert.present();
      }).catch((error)=>{
        console.log(error);
      const alert = this.alertCtrl.create({
        title: 'hubo un error',
        subTitle: 'intenta subir el horario otra vez',
        buttons: ['OK']
      });
      alert.present();
      })

     }, (err) => {
      console.log(err);
      const alert = this.alertCtrl.create({
        title: 'hubo un error',
        subTitle: 'intenta subir el horario otra vez',
        buttons: ['OK']
      });
      alert.present();
     });
  }

  accessLibrary(){

    this.camera.getPicture(this.optionsLibrary).then((imageData) => {

      let loading = this.loadingCtrl.create({
        spinner: 'crescent',
        content: `
          <div class="custom-spinner-container">
            <div class="custom-spinner-box"></div>
          </div>`
          });
      loading.present();

      let base64Image = 'data:image/jpeg;base64,' + imageData;

      const pictureSchedule = storage().ref(this.signUpService.userPlace + '/schedules/' + this.userId);


      
      pictureSchedule.putString(base64Image, 'data_url').then(()=>{
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: '¡HECHO!',
          subTitle: 'ya tenemos tu horario, en las próximas horas empezarás a recibir solicitudes de compañeros de viaje',
          buttons: [{
            text: 'OK',
            handler: () => {
              this.app.getRootNav().push('TabsPage');
            }
          }]
        });
        alert.present();
      }).catch((error)=>{
        console.log(error);
      const alert = this.alertCtrl.create({
        title: 'hubo un error',
        subTitle: 'intenta subir el horario otra vez',
        buttons: ['OK']
      });
      alert.present();
      })

     }, (err) => {
      console.log(err);
      const alert = this.alertCtrl.create({
        title: 'hubo un error',
        subTitle: 'intenta subir el horario otra vez',
        buttons: ['OK']
      });
      alert.present();
     });
  }

  goFindride(){
    this.app.getRootNav().push('TabsPage');

  }
}
