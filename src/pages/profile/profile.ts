import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, ModalController, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignUpService } from '../../services/signup.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LoginPage } from '../login/login';
import { authenticationService } from '../../services/driverauthentication.service';
import { ShowInfoCarPage } from '../showinfocar/showinfocar';

@IonicPage()

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
myprofile: string = "about";
name:string;
lastname:string;
phone:string;
emailComplete:string;
about:string;
url:any;
userForDelete = this.AngularFireAuth.auth.currentUser;
userUid=this.AngularFireAuth.auth.currentUser.uid;
emailUser = this.AngularFireAuth.auth.currentUser.email;
user:any={};
constructor(public navCtrl: NavController, public modalCtrl: ModalController,public toastCtrl: ToastController,public alertCtrl:AlertController, public AngularFireAuth:AngularFireAuth,private authenticationService: authenticationService,public SignupService:SignUpService) {  
  this.SignupService.getMyInfoForProfile(this.SignupService.userPlace, this.userUid).subscribe(user=>{
      this.user= user;
      
        console.log(this.user)
        this.showInfoProfile(user);
      

    })
  }


  saveChanges(){
    
    if(this.phone == null && this.user.about == null && this.user.url == null){
      
      this.toastConfirmation();
      this.navCtrl.pop();
    }else if(this.phone == null && this.user.about == null && this.user.url != null){
      this.SignupService.saveInfoProfileUrl(this.SignupService.userPlace, this.userUid,this.user.url);
      this.toastConfirmation();
      this.navCtrl.pop();
    }else if(this.phone == null && this.user.about != null && this.user.url == null){
      this.SignupService.saveInfoProfileAbout(this.SignupService.userPlace, this.userUid,this.user.about);
      this.toastConfirmation();
      this.navCtrl.pop();
    }else if(this.phone != null && this.user.about == null && this.user.url == null){
      this.SignupService.saveInfoProfilePhone(this.SignupService.userPlace, this.userUid,this.phone);
      this.toastConfirmation();
      this.navCtrl.pop();
    }else if(this.phone != null && this.user.about != null && this.user.url == null){
      this.SignupService.saveInfoProfilePhone(this.SignupService.userPlace, this.userUid,this.phone);
      this.SignupService.saveInfoProfileAbout(this.SignupService.userPlace, this.userUid,this.user.about);
      this.toastConfirmation();
      this.navCtrl.pop();
    }else if(this.phone != null && this.user.about == null && this.user.url != null){
      this.SignupService.saveInfoProfilePhone(this.SignupService.userPlace, this.userUid,this.phone);
      this.SignupService.saveInfoProfileUrl(this.SignupService.userPlace, this.userUid,this.user.url);
      this.toastConfirmation();
      this.navCtrl.pop();
    }else if(this.phone == null && this.user.about != null && this.user.url != null){
      this.SignupService.saveInfoProfileAbout(this.SignupService.userPlace, this.userUid,this.user.about);
      this.SignupService.saveInfoProfileUrl(this.SignupService.userPlace, this.userUid,this.user.url);
      this.toastConfirmation();
      this.navCtrl.pop(); 
    }else if(this.phone != null && this.user.about != null && this.user.url != null){
      this.SignupService.saveInfoProfileAbout(this.SignupService.userPlace, this.userUid,this.user.about);
      this.SignupService.saveInfoProfileUrl(this.SignupService.userPlace, this.userUid,this.user.url);
      this.SignupService.saveInfoProfilePhone(this.SignupService.userPlace, this.userUid, this.phone);
      this.toastConfirmation();
      this.navCtrl.pop();
    }else{
      console.log('go to the f*cking hell');
    }
  }

    toastConfirmation(){
      let toast = this.toastCtrl.create({
        message: 'Información actualizada',
        duration: 1000,
        position: 'bottom'
      })
      toast.present();
    }
    
     
    deleteAccount(){
      let alert = this.alertCtrl.create({
        title: 'Eliminar Cuenta',
        message: `¿Estas segur@ que deseas eliminar esta cuenta?, si tienes cuenta en WAYPOOL USER también se eliminará`,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
           
            }
          },
          { 
            text: 'Eliminar',
            handler: () => {
             
              
              this.SignupService.deleteAccount(this.SignupService.userPlace, this.userUid)
              this.AngularFireAuth.auth.currentUser.delete().then(()=>{
                console.log('user has been deleted');
              }).catch((error)=>{
                console.log('error:', error)
              })
              
              this.navCtrl.setRoot('LoginPage')

              const toast = this.toastCtrl.create({
                message: `Acabas de eliminar esta cuenta, si deseas volver a ser parte de la comunidad por favor regístrate de nuevo`,
                showCloseButton: true,
                closeButtonText: 'Ok'
              });
              toast.present();
      
  
            }
          }
        ]
      });
      alert.present();
     
    }
  showInfoProfile(user){
    this.name = user.name;
    this.lastname = user.lastname;
    this.url = user.url;
    this.about = user.about;
    this.emailComplete = user.email+user.fixedemail;
  }

  changePassword(){
    this.AngularFireAuth.auth.sendPasswordResetEmail(this.emailUser).then(()=>{
      let alert = this.alertCtrl.create({
        title: 'Revisa tu email',
        subTitle: 'te enviamos un correo donde podras reestablecer tu contraseña',
        buttons: ['OK']
      });
      alert.present();
    }).catch((error)=>{
      console.log(error);
    })
  }
  
}