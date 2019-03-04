import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable, keyframes } from "@angular/core";
import * as GeoFire from 'geofire';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs";


@Injectable()
export class geofireService {

dbRef:any;
geoFire:any;
geoquery:any;
driverUid:any;
driver:any;
origin:any;
destination:any;
name:any;
lastname:any;
phone:any;
carModel:any;
plateNumber:any;


constructor(public afDB: AngularFireDatabase, private AngularFireAuth: AngularFireAuth){

  this.dbRef = this.afDB.database.ref('geofire/' );
  this.geoFire = new GeoFire(this.dbRef); 

  this.driverUid = this.AngularFireAuth.auth.currentUser.uid;
 

}



setGeofire( radius:number, lat, lng, driverInfor):void{ 
  
  this.geoquery = this.geoFire.query({
    center: [lat, lng],
    radius: radius
  })

  this.keyEntered(driverInfor);
  this.keyExited();
}



keyEntered(driverInfo){
   this.geoquery.on("key_entered", function(key){
    console.log(key);
    setTimeout(()=>{
      this.afDB.database.ref('/users/' + key + '/trips/driversListRide/' + this.driverUid).update({
      origin:driverInfo.origin,
       destination:driverInfo.destination,
       name: driverInfo.name,
       lastname: driverInfo.lastname,
       phone: driverInfo.phone,
       userId: driverInfo.userId,
       car:driverInfo.car,      
       price: driverInfo.price,
       note: driverInfo.note
       
      })
    }, 2000)
    
    
  }.bind(this))
}

keyExited(){
  
  this.geoquery.on("key_exited", function(key){
    this.afDB.database.ref('/users/' + key + '/trips/driversListRide/' + this.driverUid).remove()
  }.bind(this))
}

   

public  getMyInfo(userId){
  return this.afDB.object('drivers/'+userId).valueChanges();
  }

public getUsersListRide(){
  
  return this.afDB.list('/drivers/' + this.driverUid + '/trips/usersListRide').valueChanges();
}


public getUsersGeofire(){
  return this.afDB.list('/drivers/'+ this.driverUid + '/trips/usersListRide/').valueChanges();
}

public deleteUserListRide(driverId, userId){
  this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + userId).remove();
}

public onTripUserListRide(driverId, userId){
  this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + userId).update({
    onTrip: true
  });
}



}