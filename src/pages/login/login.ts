import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { FindridePage } from '../findride/findride';
import {CarRegistrationPage } from '../car-registration/car-registration';
import { authenticationService } from '../../services/driverauthentication.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    email:string = null;
    password:string = null;
  constructor(public navCtrl: NavController, private authenticationService: authenticationService, public alertCtrl: AlertController ) {

  }
  
    signup(){
        this.navCtrl.push(SignupPage);
    }
    
    logIn(){
        this.authenticationService.loginWithEmail(this.email, this.password).then((data) => {
            // alert("loggeado correctamente");
            console.log(data);
            this.navCtrl.push(CarRegistrationPage);
            this.authenticationService.getStatus;
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
