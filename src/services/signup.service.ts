import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase';
import { clearModulesForTest } from "@angular/core/src/linker/ng_module_factory_loader";

@Injectable()
export class SignUpService {
    
    //gloabl variable for university identifaction
    userUniversity:any;

    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){
    }

   public getMyInfo(university, userId){
    return this.afDB.object(university + '/drivers/'+userId).valueChanges();
    }

    public getUniversities(){
        return this.afDB.list('universities/').valueChanges()
     }

    public pushDocsL(university, userId){
       this.afDB.database.ref(university + '/drivers/'+userId+'/documents').update({
           license: false
       })
    }
    public pushDocsId(university, userId){
        this.afDB.database.ref(university + '/drivers/'+userId+'/documents').update({
            id: false
        })
     }
     public emailVerificationMessage(university, user){

        this.afDB.database.ref(university + '/drivers/' + user).update({
            emailVerificationMessage: true
        })
    }

    public getMyInfoDriver(university, userId){
        return this.afDB.object(university + '/drivers/' + userId).valueChanges();
    }
    public getInfoUser(university, userId){
        return this.afDB.object(university+ '/users/' + userId).valueChanges();
    }
    
    public async saveUser(university, user){
        this.afDB.database.ref(university + '/drivers/'+ user.userId).update(user);
        this.afDB.database.ref(university + '/users/'+ user.userId).update(user);

    }

    
    public getMyInfoForProfile(university, userId){
        return this.afDB.object(university + '/drivers/'+ userId).valueChanges();
        }

        
public saveInfoProfilePhone(university, userUid,phone){
   //permite configurar la información del perfil
this.afDB.database.ref(university + '/drivers/'+ userUid).update({
    phone:phone
    });
}

public saveInfoProfileAbout(university, userUid,about){
    //permite configurar la información del perfil
 this.afDB.database.ref(university + '/drivers/'+ userUid).update({
     about:about 
     });
 }

 public saveInfoProfileUrl(university, userUid,url){
    //permite configurar la información del perfil
 this.afDB.database.ref(university + '/drivers/'+ userUid).update({
     url:url
     });
 }


public deleteAccount(university, userUid){
    this.afDB.database.ref(university + '/drivers/'+userUid).remove();
    this.afDB.database.ref(university + '/users/'+userUid).remove();
}

public addCar(university, userUid,carModel,plateNumber,color){
    this.afDB.database.ref(university + '/drivers/'+userUid+'/cars/').push({
        carModel:carModel,
        plateNumber:plateNumber,
        color:color
    })
}

public addCarProfile(university, userUid,car){
    this.afDB.database.ref(university + '/drivers/'+userUid+'/cars/').push(car)
}
 
public getCar(university, userId){
    return this.afDB.list(university + '/drivers/'+ userId+'/cars').valueChanges();

}
}