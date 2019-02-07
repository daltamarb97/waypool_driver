import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { UrlSerializer } from "ionic-angular";
import { useAnimation } from "@angular/core/src/animation/dsl";
import * as firebase from 'firebase';
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class sendCoordsService {

constructor(public afDB: AngularFireDatabase, private afAuth: AngularFireAuth){
              
    }
    
    public getDestination(user){
        return  this.afDB.list('/drivers/'+ user +'/trips/destination').valueChanges();
    } 
    public getOrigin(user){
        return  this.afDB.list('/drivers/'+ user +'/trips/origin').valueChanges();
    }     
    
   public pushcoordinatesDrivers(user , dest, or){
     
    this.afDB.database.ref('drivers/'+ user+'/trips').update({
        origin: or,
        destination: dest,
        
        });
             
            
        }
    public updateGeolocationOrigin(user,origin){
        this.afDB.database.ref('drivers/' + user+'/trips').update({
            origin:origin
        })
    }
    public endTrip(DriverUid){
        this.afDB.database.ref('drivers/' + DriverUid+'/trips').remove()
    }
    public pickUp(DriverUid,userId,user){
       

       // add the driver to pickedUpUsers 
       this.afDB.database.ref('/drivers/'+ DriverUid +'/trips/pickedUpUsers/'+ userId).update(user);

    }
    public eliminatePickingUsers(DriverUid,userId){
               //eliminate the user from pickingUsers
        this.afDB.database.ref('/drivers/'+ DriverUid +'/trips/pickingUsers/'+ userId).remove();
    }
}

