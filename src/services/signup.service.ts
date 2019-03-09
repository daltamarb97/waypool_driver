import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase';
import { clearModulesForTest } from "@angular/core/src/linker/ng_module_factory_loader";

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

    
    public getMyInfoForProfile(userId){
        return this.afDB.object('drivers/'+ userId).valueChanges();
        }
public saveInfoProfile(userUid,phone){
   //permite configurar la información del perfil
this.afDB.database.ref('/drivers/'+ userUid).update({
    phone:phone
    
    });
}
public deleteAccount(userUid){
this.afDB.database.ref('/drivers/'+userUid).remove()
}
public addCar(userUid,carModel,plateNumber,color){
    this.afDB.database.ref('/drivers/'+userUid+'/cars/').push({
        carModel:carModel,
        plateNumber:plateNumber,
        color:color
    })
}
public addCarProfile(userUid,car){
    this.afDB.database.ref('/drivers/'+userUid+'/cars/').push(car)
}
 
public getCar(userId){
    return this.afDB.list('drivers/'+ userId+'/cars').valueChanges();

}
}