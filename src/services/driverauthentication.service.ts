import { Injectable, NgModule } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class authenticationService{

    constructor(private angularFireAuth: AngularFireAuth,public afDB: AngularFireDatabase){

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
}