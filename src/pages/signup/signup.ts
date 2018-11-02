import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { VerificationPage } from '../verification/verification';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { authenticationService } from '../../services/driverauthentication.service';
import { SignUpService } from '../../services/signup.service';
import { AlertController } from 'ionic-angular';
import { Content } from 'ionic-angular';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
    @ViewChild(Content) content: Content;
    user:any ={};
    userId:any = null;
    isReadonly = true;
    private signupGroup: FormGroup;

  constructor(public navCtrl: NavController, private afDB: AngularFireDatabase, private formBuilder: FormBuilder, private authenticationService: authenticationService, private SignUpService: SignUpService, public  alertCtrl: AlertController) {
    this.signupGroup = this.formBuilder.group({
        name: ["", Validators.required],
        lastname: ["", Validators.required],
        email: ["", Validators.required],
        fixedemail: [""],
        password: ["", Validators.required],
        passwordconf: ["", Validators.required],
        phone: ["", Validators.required],
        carModel: ["", Validators.required],
        plateNumber: ["", Validators.required]
        
    })
  }
    scrolling(){
        this.content.scrollTo(30, 0);
    };

    login(){
        this.navCtrl.push(LoginPage);
    }
     
    verification(){
          let userName = this.signupGroup.controls['name'].value;
          let userLastName = this.signupGroup.controls['lastname'].value;
          let userEmail = this.signupGroup.controls['email'].value 
          let userFixedemail = this.signupGroup.controls['fixedemail'].value;
          let userEmailComplete = userEmail + userFixedemail;
          let userPassword = this.signupGroup.controls['password'].value;
          let userPasswordconf = this.signupGroup.controls['passwordconf'].value;
          let userPhone = this.signupGroup.controls['phone'].value;
          let userCarModel = this.signupGroup.controls['carModel'].value;
          let userPlateNumber = this.signupGroup.controls['plateNumber'].value;
          this.user = this.signupGroup.value;
          if(userPassword === userPasswordconf){
            if(!this.user.userId){
                this.user.userId = Date.now() ;
                console.log(this.user.userId); 
            }
            this.authenticationService.registerWithEmail(userEmailComplete, userPassword);
            this.SignUpService.saveUser(this.user);
            this.navCtrl.push(LoginPage);
        }else{
            const alert = this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'las contraseñas no coinciden, intenta de nuevo',
                buttons: ['OK']
              });
              alert.present();
        }
        // this.navCtrl.push(VerificationPage);
    }

}
