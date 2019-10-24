import { Component } from '@angular/core';
import { IonicPage, ViewController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { SignUpService } from '../../services/signup.service';


@IonicPage()
@Component({
  selector: 'page-confirm-university',
  templateUrl: 'confirm-university.html',
})
export class ConfirmUniversityPage {
  universityChosen:any;
  universities = [];
  readyToStart:boolean;
  userId:any;
  user:any;
  showButton:boolean = false;
  constructor(private signUpService: SignUpService, public viewCtrl: ViewController, private angularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private afDB: AngularFireDatabase) {
    this.signUpService.getAllPlaces().subscribe(universities => {
      this.universities = universities;
      console.log(this.universities);
    })

    this.userId = this.angularFireAuth.auth.currentUser.uid;
    
  }

  onChange(){
    this.showButton = false;
    this.signUpService.userPlace = this.universityChosen;

    setTimeout(() => {
      this.afDB.database.ref(this.signUpService.userPlace + '/drivers/'+ this.userId)
      .once('value')
      .then((snap)=> {
        let user = snap.val();
        if(user === null){
          this.alertUni()
        }else{
          this.showButton = true;
        } 
      })
    }, 500); 
  }

  alertUni(){
    let alert = this.alertCtrl.create({
      title: '¿estas seguro que es tu universidad?',
      subTitle: 'Seleccionaste una universidad que no es la misma que seleccionaste cuando te registraste',
      buttons: ['OK']
    });
    alert.present();
  }

  goToFindaride(){
    this.readyToStart = true;
    this.viewCtrl.dismiss(this.readyToStart);
  }


 
}
