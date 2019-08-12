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
  constructor(private signUpService: SignUpService, public viewCtrl: ViewController, private angularFireAuth: AngularFireAuth, public alertCtrl: AlertController) {
    this.signUpService.getUniversities().subscribe(universities => {
      this.universities = universities;
      console.log(this.universities);
    })

    this.userId = this.angularFireAuth.auth.currentUser.uid;
    
  }

  onChange(){
    this.showButton = false;
    this.signUpService.userUniversity = this.universityChosen;
    
      this.signUpService.getMyInfo(this.signUpService.userUniversity, this.userId).subscribe(user =>{
        this.user = user;
      })
   
      setTimeout(()=>{
        if(this.user == null){
          this.alertUni()
        }else{
          this.showButton = true;
        } 
      }, 500)
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
