import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { RateriderPage } from '../raterider/raterider';
import { ChattingPage } from '../chatting/chatting';
import { TabsPage } from '../tabs/tabs';
import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { sendUsersService } from '../../services/sendUsers.service';
import { OnTripPage } from '../onTrip/onTrip';
import { PickupPage } from '../pickup/pickup';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-myride',
  templateUrl: 'myride.html'
})
export class MyridePage {
  pickingUsers:any = [];
 pickedUpUsers:any = [];

ride: string = "today";
userUid=this.AngularFireAuth.auth.currentUser.uid;

  constructor(public navCtrl: NavController,public toastCtrl: ToastController,public alertCtrl:AlertController,public navParams: NavParams,private callNumber: CallNumber,public sendCoordsService: sendCoordsService,private AngularFireAuth: AngularFireAuth, public sendUsersService: sendUsersService) {
    this.sendUsersService.getUsersOnTrip(this.userUid)
    .subscribe( user => {
      
        this.pickingUsers = user;
        console.log(this.pickingUsers);
        
      
     
    });
    this.sendUsersService.getPickUpUsers(this.userUid)
    .subscribe( user => {
    
      this.pickedUpUsers = user;
      console.log(this.pickedUpUsers);
      
    });

   
  }
raterider(){
this.navCtrl.push(RateriderPage);
}
callUser(number){
    console.log(number)
  this.callNumber.isCallSupported()
.then((response) => {
if (response == true) {
  this.callNumber.callNumber(number, true)
  .then(res => console.log('Launched dialer!', res)) //si no es necesario esta promesa, eliminarla
  .catch(err => console.log('Error launching dialer', err));
}
else {
    console.log('error')
      }
  });
}
      chatting(){
    this.navCtrl.push(ChattingPage);
    }
          goToRide(user){
    this.navCtrl.push(PickupPage,{user});
    }
    goToMyDestination(){
      if(this.pickingUsers.length == 0 && this.pickedUpUsers.length !== 0 ){
        this.navCtrl.push(OnTripPage);
        
      } else {
        this.presentAlert('Viaje Incompleto','Por favor termina de recoger a todos los usuarios o cancélalos','Ok');
      }
            


    }
    DisplayUserNote(note){
      this.presentToast(note,4000,'bottom')
    }
    presentToast(message:string,duration,position:string) {     
      const toast = this.toastCtrl.create({
        message: message,
        duration: duration,
        position:position
      });
      toast.present();
    }
    presentAlert(title:string,text:string,button:string) {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: text,
        buttons: [button]
      });
      alert.present();
    }
    deleteUser(userId,nameUser){
  
      let alert = this.alertCtrl.create({
        title: 'Eliminar Usuario',
        message: `¿Estas que deseas eliminar a este a ${nameUser} de tu viaje?, recuerda que si borras muchos usuarios por día/semana esta en contra de nuestras políticas`,
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
              console.log('user eliminado');
              this.sendCoordsService.eliminatePickingUsers(this.userUid,userId);
              this.presentToast(`Haz eliminado a ${name} de tu viaje`,4000,'bottom')
  
            }
          }
        ]
      });
      alert.present();
    }
    help(){
      const toast = this.toastCtrl.create({
        message: 'En esta página podrás recoger, llamar, chatear (próximamente), a los compañeros que hayas escogido',
        showCloseButton:true,
        closeButtonText: 'OK',
        position:'top'
           });
      toast.present();
    }
}
