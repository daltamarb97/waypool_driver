import { Component } from '@angular/core';

import { NavController, AlertController, NavParams, IonicPage, Platform } from 'ionic-angular';


import { authenticationService } from '../../services/driverauthentication.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignUpService } from '../../services/signup.service';
import { Http } from '@angular/http';
// import * as firebase from 'firebase';
// import { SignUpService } from '../../services/signup.service';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    email:string = '';
    password:string;
    auth = this.AngularFireAuth.auth;
    receivedUser;
    private loginGroup: FormGroup;
    driverInfo:any;
    // userFirebase = this.AngularFireAuth.auth.currentUser;
    
  constructor(public navCtrl: NavController, private authenticationService: authenticationService, public alertCtrl: AlertController, private AngularFireAuth: AngularFireAuth, public navParams: NavParams, private formBuilder: FormBuilder, public SignUpService: SignUpService,  public platform: Platform) {
    this.loginGroup = this.formBuilder.group({
        email: ["", Validators.required],
        password: ["", Validators.required]
    })

    if(this.auth.currentUser){
        this.SignUpService.getMyInfo(this.SignUpService.userPlace, this.auth.currentUser.uid).subscribe(driver => {
            this.driverInfo = driver;
        })
    }
      
}

  
    signup(){
        this.navCtrl.push('SignupPage');

    };

    resetPassword(email:string){
        if(this.loginGroup.controls['email'].value  == ''){
            const alert = this.alertCtrl.create({
                title: 'no hay ningun email',
                subTitle: 'ingresa un email para resetear tu contraseña',
                buttons: ['OK']
              });
              alert.present();
              console.log("reset password email hasn't been sent");
        }else{
            this.auth.sendPasswordResetEmail(this.loginGroup.controls['email'].value);
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

        let email = this.loginGroup.controls['email'].value;
        let password = this.loginGroup.controls['password'].value;

            this.authenticationService.loginWithEmail(email, password).then((data) => {
                console.log(data);
                if(data.user.emailVerified == false){
                    const alert = this.alertCtrl.create({
                        title: 'Oops!',
                        subTitle: 'por favor verifica tu email',
                        buttons: ['OK']
                      });
                      alert.present();  
                }else{
                    // let metadata = this.auth.currentUser.metadata;
                    // if(metadata.creationTime === metadata.lastSignInTime){
                    //     console.log(metadata.creationTime);
                    //     console.log(metadata.lastSignInTime);
    
                    //     this.navCtrl.push('CarRegistrationLoginPage');

                    //     setTimeout(()=>{
                    //         if(this.navCtrl.getActive().id === 'LoginPage'){

                    //             this.navCtrl.push('CarRegistrationLoginPage');
                    //         }else{
                    //             console.log('actuo el abservable')
                    //         }
                    //     }, 500)
    
                    // }
                        setTimeout(()=>{
                            if(this.navCtrl.getActive().id === 'LoginPage'){
                                this.navCtrl.setRoot('FindridePage');

                            }else{
                                console.log('actuo el abservable')
                            }
                        }, 500) 
                    
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