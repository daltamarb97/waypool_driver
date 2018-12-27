import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';



@Injectable()
export class authenticationService{

    constructor(private angularFireAuth: AngularFireAuth){

    }

    loginWithEmail(email:string, password:string){
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
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

