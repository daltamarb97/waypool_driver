import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { UrlSerializer } from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class SignUpService {

    constructor(public afDB: AngularFireDatabase ,private angularFireAuth: AngularFireAuth){
        
    }

    public saveUser(user){
        this.afDB.database.ref('/users/'+ user.userId).update(user);
    }
    public saveDriver(user){
        this.afDB.database.ref('drivers/'+ user.userId).set(user);
    }
    public getUsers(){
        return this.afDB.list('users/').valueChanges();
    }
   public getMyInfo(userId){
    return this.afDB.object('drivers/'+userId).valueChanges();
    }
}