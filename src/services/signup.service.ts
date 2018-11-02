import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

@Injectable()
export class SignUpService {
    constructor(public afDB: AngularFireDatabase){

    }

    public saveUser(user){
        this.afDB.database.ref('drivers/'+ user.userId).set(user);
    }
}