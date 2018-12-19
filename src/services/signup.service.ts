import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class SignUpService {
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){

    }

    public async saveUser(user){
        this.afDB.database.ref('drivers/'+ user.userId).update(user);
        this.afDB.database.ref('users/'+ user.userId).update(user);

    }

    

}