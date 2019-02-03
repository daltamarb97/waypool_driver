import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
// import { UrlSerializer } from "ionic-angular";
// import { useAnimation } from "@angular/core/src/animation/dsl";
// import * as firebase from 'firebase';
// import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class sendCoordsService {

constructor(public afDB: AngularFireDatabase){
              
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
             
            this.afDB.database.ref('/drivers/'+ user + '/trips/recordTrips').push({
                origin: or,
                destination: dest,
                
            });
        }
    public updateGeolocationOrigin(user,origin){
        this.afDB.database.ref('drivers/' + user+'/trips').update({
            origin:origin
        })
    }
    public endTrip(user){
        this.afDB.database.ref('drivers/' + user+'/trips').remove()
    }
    public pickUp(user){
       //eliminate instance of picking up
    }
}

