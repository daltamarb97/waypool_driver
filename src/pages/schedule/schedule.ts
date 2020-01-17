import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, App, AlertController, LoadingController } from 'ionic-angular';
import { SignUpService } from '../../services/signup.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';
import { instancesService } from '../../services/instances.service';
import { AngularFireDatabase } from 'angularfire2/database';

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
  userInfo:any;
  defaultZone:any;
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public signUpService: SignUpService, private angularFireAuth: AngularFireAuth, public app: App, public alertCtrl: AlertController, private camera: Camera, public loadingCtrl: LoadingController, private instances: instancesService, private afDB: AngularFireDatabase) {
    this.defaultZone = this.navParams.get('defaultZone');
    this.userId = this.angularFireAuth.auth.currentUser.uid;

        this.afDB.database.ref(this.signUpService.userPlace + '/drivers/' + this.userId).once('value').then((snap)=>{
          this.userInfo = snap.val();
        })


        this.signUpService.getSchedule(this.signUpService.userPlace, this.userId).subscribe(hour => {
          this.schedules = hour;
          console.log(this.schedules);
          if(this.schedules.length !== 0){
            this.afDB.database.ref(this.signUpService.userPlace + '/drivers/' + this.userId + '/scheduleType/').once('value').then((snap)=>{
              if(snap.val() === 'picture'){

              }else{
                this.showButtonWorkSchedule = true;
              }
            })        
          }else{
            this.showButtonWorkSchedule = false;
          }  
        })
  }


  makeSchedule(){
    this.afDB.database.ref(this.signUpService.userPlace + '/drivers/' + this.userId ).once('value').then((snap)=>{
        if(snap.val().toggleStatus === 'online'){
          const alert = this.alertCtrl.create({
            title: 'Para añadir un nuevo horario debes estar offline',
            buttons: ['OK']
          });
          alert.present();
        }else{
          let modal = this.modalCtrl.create('AddSchedulePage');
          modal.onDidDismiss(accepted => {
            if(accepted){
            }
          })
          modal.present();
        }
    })
  }

  skipSchedule(){
    if(!this.userInfo.houseAddress){
      this.app.getRootNav().push('SpecifyOriginPage'); 
    }else{
      this.app.getRootNav().push('FindridePage'); 
    }
  }

  removeTime(sche){

    this.afDB.database.ref(this.signUpService.userPlace + '/drivers/' + this.userId ).once('value').then((snap)=>{
      if(snap.val().toggleStatus === 'online'){
        const alert = this.alertCtrl.create({
          title: 'Para eliminar este horario debes estar offline',
          buttons: ['OK']
        });
        alert.present();
      }else{
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
    })
  }

  usageCameraSchedule(){
    this.camera.getPicture(this.optionsCamera).then((imageData) => {
      this.afDB.database.ref('allCities/' + this.userInfo.city + '/allPlaces/' + this.userInfo.company + '/zones').once('value').then((snap)=>{
        let obj = snap.val();
        Object.getOwnPropertyNames(obj).forEach((key)=>{

          if(obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10){

          }else{
            this.instances.scheduleTypePicture(obj[key], this.userId);
          }
        })
      })

      let loading = this.loadingCtrl.create({
        spinner: 'crescent',
        content: `
          <div class="custom-spinner-container">
            <div class="custom-spinner-box"></div>
          </div>`
          });
      loading.present();

      let base64Image = 'data:image/jpeg;base64,' + imageData;

      const pictureSchedule = storage().ref(this.userInfo.company + '/schedules/' + this.userId);


      
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

      const pictureSchedule = storage().ref(this.userInfo.company + '/schedules/' + this.userId);

      pictureSchedule.putString(base64Image, 'data_url').then(()=>{
        loading.dismiss();

        this.afDB.database.ref('allCities/' + this.userInfo.city + '/allPlaces/' + this.userInfo.company + '/zones').once('value').then((snap)=>{
          let obj = snap.val();
          Object.getOwnPropertyNames(obj).forEach((key)=>{
            
            if(obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10){

            }else{
              this.instances.scheduleTypePicture(obj[key], this.userId);
            }  
          })
        })

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
    this.skipSchedule();

    this.afDB.database.ref('allCities/' + this.userInfo.city + '/allPlaces/' + this.userInfo.company + '/zones').once('value').then((snap)=>{
      let obj = snap.val();
      Object.getOwnPropertyNames(obj).forEach((key)=>{
        
        if(obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10){

        }else{
          this.instances.scheduleTypeManual(obj[key], this.userId);        
        } 
      })
    })
  }
}
