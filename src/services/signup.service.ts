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

    public getMyInfoDriver(userId){
        return this.afDB.object('drivers/' + userId).valueChanges();
    }

    public async saveUser(user){
        this.afDB.database.ref('drivers/'+ user.userId).update(user);

    }

   

    


     

}