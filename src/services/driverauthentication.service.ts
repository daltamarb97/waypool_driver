import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';



@Injectable()
export class authenticationService{

    constructor(private angularFireAuth: AngularFireAuth, private afDB: AngularFireDatabase){

    }

    loginWithEmail(email:string, password:string){
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
     }

     sendVerificationCodeToFirebase(university, userId, code){
         this.afDB.database.ref(university + '/drivers/' + userId).update({
             verificationCode: code
         })
     }

     
     registerWithEmail(email:string, password:string){
         return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
      }
 
      getStatus(){
          return  this.angularFireAuth.authState;
      }
    
     logOut(){
         return this.angularFireAuth.auth.signOut();
     }  
    
    resetPassword(email:string){
        let auth = firebase.auth();
        return auth.sendPasswordResetEmail(email)
            .then(() => console.log("email sent"))
            .catch((error) => console.log(error))
    };
   
}

