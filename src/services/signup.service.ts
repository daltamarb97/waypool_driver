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

    public pushDocsL(userId){
       this.afDB.database.ref('drivers/'+userId+'/documents').update({
           license: false
       })
    }
    public pushDocsId(userId){
        this.afDB.database.ref('drivers/'+userId+'/documents').update({
            id: false
        })
     }
     public emailVerificationMessage(user){

        this.afDB.database.ref('/drivers/' + user).update({
            emailVerificationMessage: true
        })
    }

    public getMyInfoDriver(userId){
        return this.afDB.object('drivers/' + userId).valueChanges();
    }
    public getInfoUser(userId){
        return this.afDB.object('users/' + userId).valueChanges();
    }
    public async saveUser(user){
        this.afDB.database.ref('drivers/'+ user.userId).update(user);
        this.afDB.database.ref('users/'+ user.userId).update(user);

    }

    
    public getMyInfoForProfile(userId){
        return this.afDB.object('drivers/'+ userId).valueChanges();
        }
public saveInfoProfilePhone(userUid,phone){
   //permite configurar la información del perfil
this.afDB.database.ref('/drivers/'+ userUid).update({
    phone:phone
    });

this.afDB.database.ref('/users/'+ userUid).update({
    phone:phone
    });
}

public saveInfoProfileAbout(userUid,about){
    //permite configurar la información del perfil
 this.afDB.database.ref('/drivers/'+ userUid).update({
     about:about 
     });

this.afDB.database.ref('/users/'+ userUid).update({
     about:about
     });
 }

 public saveInfoProfileUrl(userUid,url){
    //permite configurar la información del perfil
 this.afDB.database.ref('/drivers/'+ userUid).update({
     url:url
     });

 this.afDB.database.ref('/users/'+ userUid).update({
     url:url
     });
 }


public deleteAccount(userUid){
    this.afDB.database.ref('/drivers/'+userUid).remove();
    this.afDB.database.ref('/users/'+userUid).remove();
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