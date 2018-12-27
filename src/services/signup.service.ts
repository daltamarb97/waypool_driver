import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase';

@Injectable()
export class SignUpService {
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){
    }

   public getMyInfo(userId){
    return this.afDB.object('drivers/'+userId).valueChanges();
    }

    public async saveUser(user){
        this.afDB.database.ref('drivers/'+ user.userId).update(user);
        this.afDB.database.ref('users/'+ user.userId).update(user);

    }

    public turnFindingUsers(user){
        
        firebase.database().ref('drivers/' + user ).update({
            findingUsers: true
        }, function (error) {
            if(error){
                console.log(error);
            }else{
                console.log("everything succesful");
            }
        }); 
        
     }

     public acceptedByDriver(user){
        
        firebase.database().ref('users/' + user ).update({
            findingTrip: false,
            acceptedByDriver: true
        }, function (error) {
            if(error){
                console.log(error);
            }else{
                console.log("everything succesful");
            }
        }); 
        
     }



     public getUsers(){
        return this.afDB.list('/users').valueChanges();
    }

}