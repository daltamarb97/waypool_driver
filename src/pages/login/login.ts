import { Component } from '@angular/core';

import { NavController, AlertController, NavParams } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { FindridePage } from '../findride/findride';
import {CarRegistrationPage } from '../car-registration/car-registration';
import { authenticationService } from '../../services/driverauthentication.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { SignUpService } from '../../services/signup.service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    email:string = '';
    password:string = null;
    auth = this.AngularFireAuth.auth;
    receivedUser;
    // userFirebase = this.AngularFireAuth.auth.currentUser;
    
  constructor(public navCtrl: NavController, private authenticationService: authenticationService, public alertCtrl: AlertController, private AngularFireAuth: AngularFireAuth, public navParams: NavParams, private SignUpService: SignUpService ) {


  }
  
    signup(){
        this.navCtrl.push(SignupPage);

    };

    resetPassword(email:string){
        if(this.email == ''){
            const alert = this.alertCtrl.create({
                title: 'no hay ningun email',
                subTitle: 'ingresa un email para resetear tu contraseña',
                buttons: ['OK']
              });
              alert.present();
              console.log("reset password email hasn't been sent");
        }else{
            this.auth.sendPasswordResetEmail(this.email);
            const alert = this.alertCtrl.create({
                title: 'revisa tu email',
                subTitle: 'un correo te ha sido enviado para resetear tu contraseña',
                buttons: ['OK']
              });
              alert.present(); 
            console.log("reset password email has been sent");
         }; 
    };
    
    logIn(){

        this.receivedUser = this.navParams.data;
        if(!this.receivedUser.userId){
             this.receivedUser.userId = this.AngularFireAuth.auth.currentUser.uid; //verify this because sometimes it fails
             console.log(this.receivedUser.userId); //remember to delete this console.log for safety reasons
           

            };

            //sending email verification and verifying weather email is verified or not
                if(this.AngularFireAuth.auth.currentUser.emailVerified == false){
                   this.AngularFireAuth.auth.currentUser.sendEmailVerification();
                   console.log("verification email has been sent");
                }else{ 
                   console.log("verification email has not been sent or the email is already verifyied");
                };

        this.authenticationService.loginWithEmail(this.email, this.password).then((data) => {
            // alert("loggeado correctamente");
            console.log(data);
            if(data.user.emailVerified == false){
                const alert = this.alertCtrl.create({
                    title: 'Oops!',
                    subTitle: 'por favor verifica tu email',
                    buttons: ['OK']
                  });
                  alert.present();  
            }else{
                let metadata = this.auth.currentUser.metadata;
                if(metadata.creationTime == metadata.lastSignInTime){
                    console.log(metadata.creationTime);
                    console.log(metadata.lastSignInTime);
                    // this.navCtrl.push(CarRegistrationPage);
                    this.navCtrl.push(TabsPage);
                }else{
                    this.navCtrl.push(TabsPage);
                    

                }
                this.authenticationService.getStatus;  
            };
        }).catch((error) => {
            const alert = this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'El usuario o la contraseña están incorrectas',
                buttons: ['OK']
              });
              alert.present();
            console.log(error);
        });
        

    }
    

}
