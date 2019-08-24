
import { Component, ViewChild } from '@angular/core';


import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { LoginPage } from '../login/login';
// import { VerificationPage } from '../verification/verification';

// import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { authenticationService } from '../../services/driverauthentication.service';
import { SignUpService } from '../../services/signup.service';
import { AlertController } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { WindowService } from '../../services/window.service';
// import * as firebase from 'firebase';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})

export class SignupPage {

    @ViewChild(Content) content: Content;
    user:any ={};
    car:any={};
    tokenId:any = '';
    userId:any = '';
    isReadonly = true;
    private signupGroup: FormGroup;

    //variables linked among them 
    emailVar:any;
    universityVar:any;
    universities = [];
    showReadonly:boolean = true;
    onlyEmail:any;


    windowRef:any;
    verificationCode:string;
    
  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private authenticationService: authenticationService, private SignUpService: SignUpService, public  alertCtrl: AlertController, private AngularFireAuth: AngularFireAuth, public navParams: NavParams, public windowService: WindowService) {
    this.signupGroup = this.formBuilder.group({
        name: ["", Validators.required],
        lastname: ["", Validators.required],
        email: ["", Validators.required],
        fixedemail: ["", Validators.required],
        password: ["", Validators.required],
        passwordconf: ["", Validators.required],
        phone: ["", Validators.required],
        carModel: ["", Validators.required],
        plateNumber: ["", Validators.required],
        color: ["", Validators.required],
        university: ["", Validators.required],
        isChecked:[true, Validators.required]
    })


    this.SignUpService.getUniversities().subscribe(universities => {
        this.universities = universities;
        console.log(this.universities);
    })
  }

  

  onChange(){
    this.showReadonly = true;
    if(this.showReadonly == true){
            var count = this.universities.length;
            for(var i=0; i<count; i++){
                if(this.universities[i].name == this.universityVar){
                  if(this.universities[i].email == undefined){
                            this.showReadonly = false;
                        }else{
                            this.emailVar = this.universities[i].email
                        }
                    }
                }
        }
        
    }


    scrolling(){
        this.content.scrollTo(30, 0);
    };


    login(){
        this.navCtrl.push('LoginPage');
    }
     
    verification(){
      if(!this.signupGroup.controls['isChecked'].value === true ){

        const alert = this.alertCtrl.create({
            title: 'No aceptaste nuestros términos y condiciones',
            subTitle: 'Debes estar de acuerdo con nustros términos y condiciones para usar Waypool',
            buttons: ['OK']
          });
          alert.present(); 

        }else{
        if(this.showReadonly== true){
            let userName = this.signupGroup.controls['name'].value;
            let userLastName = this.signupGroup.controls['lastname'].value;
            let userPhone = this.signupGroup.controls['phone'].value;
            let userEmail = this.signupGroup.controls['email'].value 
          let userFixedemail = this.signupGroup.controls['fixedemail'].value;
          let userEmailComplete = userEmail + userFixedemail;
          let userPassword = this.signupGroup.controls['password'].value;
          let userPasswordconf = this.signupGroup.controls['passwordconf'].value;
        //   let userPhone = this.signupGroup.controls['phone'].value;
          let userCarModel = this.signupGroup.controls['carModel'].value;
          let userPlateNumber = this.signupGroup.controls['plateNumber'].value;
          let usercarColor = this.signupGroup.controls['color'].value;
          let userUniversity = this.signupGroup.controls['university'].value;

          this.car = {
            carModel: userCarModel,
            plateNumber:userPlateNumber,
            color:usercarColor
          }

          // saving data in variable
          this.user = {
            name: userName,
            lastname: userLastName,
            email: userEmailComplete,
            phone: '+57'+userPhone,
            university: userUniversity,
            createdBy: 'driver'
        };


        this.SignUpService.userUniversity = userUniversity;
        
          if(this.signupGroup.controls['password'].value === this.signupGroup.controls['passwordconf'].value){
            this.authenticationService.registerWithEmail(userEmailComplete, userPassword).then(() =>{
                if(!this.user.userId){
                    this.AngularFireAuth.auth.onAuthStateChanged((user)=>{
                        if(user){
                                   user.getIdToken().then((token)=>{
                                   this.user.tokenId = token;
    
                                })
                             if(!this.user.userId){
                                this.user.userId = user.uid;
                            }
                            this.SignUpService.saveUser(this.SignUpService.userUniversity, this.user);
                            this.SignUpService.addCarProfile(this.SignUpService.userUniversity, this.user.userId,this.car);
                            //send text message with code
                            this.sendVerificationCode(this.user.userId);
                        }else{
                            console.log('there is no user');
                        }
                    })
                };
    
                //sending email verification and verifying weather email is verified or not
                this.AngularFireAuth.auth.onAuthStateChanged((user)=>{
                    if(user){
                        if(user.emailVerified == false){
                            user.sendEmailVerification();
                        console.log("verification email has been sent");
                        }else{
                            console.log("verification email has not been sent or the email is already verifyied");
                        }
                    }else{
                        console.log('there is no user');
                    }
                }) 
            }).catch((error)=>{
                if(error.code === "auth/email-already-in-use"){
                    const alert = this.alertCtrl.create({
                        title: 'ya existe una cuenta con este correo',
                        subTitle: 'Si ya te registraste en WAYPOOL, sólo debes iniciar sesión con los datos con los que te registraste. También puedes estar registrandote con un correo ya existente',
                        buttons: ['OK']
                      });
                      alert.present(); 
                }
            })
            // this.navCtrl.push('LoginPage', this.user);
               
        }else{
            const alert = this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'las contraseñas no coinciden, intenta de nuevo',
                buttons: ['OK']
              });
              alert.present();
        }

        }else if(this.showReadonly === false){
            let userName = this.signupGroup.controls['name'].value;
            let userLastName = this.signupGroup.controls['lastname'].value;
            let userPhone = this.signupGroup.controls['phone'].value;
            let userEmail = this.signupGroup.controls['email'].value 
          let userFixedemail = this.signupGroup.controls['fixedemail'].value;
          let userEmailComplete = userEmail + userFixedemail;
          let userPassword = this.signupGroup.controls['password'].value;
          let userPasswordconf = this.signupGroup.controls['passwordconf'].value;
        //   let userPhone = this.signupGroup.controls['phone'].value;
          let userCarModel = this.signupGroup.controls['carModel'].value;
          let userPlateNumber = this.signupGroup.controls['plateNumber'].value;
          let usercarColor = this.signupGroup.controls['color'].value;
          let userUniversity = this.signupGroup.controls['university'].value;

          this.car = {
            carModel: userCarModel,
            plateNumber:userPlateNumber,
            color:usercarColor
          }

          // saving data in variable
          this.user = {
            name: userName,
            lastname: userLastName,
            email: userEmail,
            phone: '+57'+userPhone,
            university: userUniversity,
            createdBy: 'driver'
        };

        this.SignUpService.userUniversity = userUniversity;
        
          if(this.signupGroup.controls['password'].value === this.signupGroup.controls['passwordconf'].value){
            this.authenticationService.registerWithEmail(userEmailComplete, userPassword).then(() => {

            if(!this.user.userId){
                this.AngularFireAuth.auth.onAuthStateChanged((user)=>{
                    if(user){
                               user.getIdToken().then((token)=>{
                               this.user.tokenId = token;

                            })
                         if(!this.user.userId){
                            this.user.userId = user.uid;
                        }
                        this.SignUpService.saveUser(this.SignUpService.userUniversity, this.user);
                        this.SignUpService.addCarProfile(this.SignUpService.userUniversity, this.user.userId,this.car);
                        //send text message with code
                         this.sendVerificationCode(this.user.userId);
                    }else{
                        console.log('there is no user');
                    }
                })
            };

           // sending email verification and verifying weather email is verified or not
            this.AngularFireAuth.auth.onAuthStateChanged((user)=>{
                if(user){
                    if(user.emailVerified == false){
                        user.sendEmailVerification();
                    console.log("verification email has been sent");
                    }else{
                        console.log("verification email has not been sent or the email is already verifyied");
                    }
                }else{
                    console.log('there is no user');
                }
            })
            }).catch((error)=>{
                if(error.code === "auth/email-already-in-use"){
                    const alert = this.alertCtrl.create({
                        title: 'ya existe una cuenta con este correo',
                        subTitle: 'Si ya te registraste en WAYPOOL, sólo debes iniciar sesión con los datos con los que te registraste. También puedes estar registrandote con un correo ya existente',
                        buttons: ['OK']
                      });
                      alert.present(); 
                }
            })
               
        }else{
            const alert = this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'las contraseñas no coinciden, intenta de nuevo',
                buttons: ['OK']
              });
              alert.present();
        }
        }
          
    }

    }

    sendVerificationCode(userId){
            this.navCtrl.push('VerificationNumberPage', {userId: userId});
    }

   
}
