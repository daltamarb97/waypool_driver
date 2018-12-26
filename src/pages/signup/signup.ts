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
import { AngularFireAuth } from 'angularfire2/auth';



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
    userFirebase = this.AngularFireAuth.auth.currentUser;

  constructor(public navCtrl: NavController, private afDB: AngularFireDatabase, private formBuilder: FormBuilder, private authenticationService: authenticationService, private SignUpService: SignUpService, public  alertCtrl: AlertController, private AngularFireAuth: AngularFireAuth) {
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

          //creating user on firebase
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
            this.authenticationService.registerWithEmail(userEmailComplete, userPassword);
            this.navCtrl.push(LoginPage, this.user);
            

            // if(!this.user.userId){
            //     this.user.userId = this.userFirebase.uid; //verify this because sometimes it fails
            //     debugger;
            //     console.log(this.user.userId); //remember to delete this console.log for safety reasons
            //     this.SignUpService.saveUser(this.user);
            
            // };

            // sending email verification and verifying weather email is verified or not
                // if(this.userFirebase.emailVerified == false){
                //     this.userFirebase.sendEmailVerification();
                //     console.log("verification email has been sent");
                // }else{ 
                //     console.log("verification email has not been sent or the email is already verifyied");
                // }
               
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
