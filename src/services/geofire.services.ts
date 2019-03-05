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
geoquery1:any;
geoquery2:any;


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

 

  this.driverUid = this.AngularFireAuth.auth.currentUser.uid;
 

}



setGeofireDest( radius:number, lat, lng, driverInfor):void{ 
  
  this.dbRef = this.afDB.database.ref('geofireDest/' );
  this.geoFire = new GeoFire(this.dbRef); 

  this.geoquery1 = this.geoFire.query({
    center: [lat, lng],
    radius: radius
  })

  this.keyEnteredDest(driverInfor);
  this.keyExitedDest();

if(this.geoquery2){
  this.geoquery2.cancel();
}
}

setGeofireOr( radius:number, lat, lng, driverInfor):void{ 
  
  this.dbRef = this.afDB.database.ref('geofireOr/' );
  this.geoFire = new GeoFire(this.dbRef); 

  this.geoquery2 = this.geoFire.query({
    center: [lat, lng],
    radius: radius
  })

  this.keyEnteredOr(driverInfor);
  this.keyExitedOr();

  if(this.geoquery1){
    this.geoquery1.cancel();
  }

}



keyEnteredDest(driverInfo){
   this.geoquery1.on("key_entered", function(key){
    console.log(key);
    setTimeout(()=>{
      this.afDB.database.ref('/users/' + key + '/trips/driversListRide/' + this.driverUid).set({
      origin:driverInfo.origin,
       destination:driverInfo.destination,
       name: driverInfo.name,
       lastname: driverInfo.lastname,
       phone: driverInfo.phone,
       userId: driverInfo.userId,
       carModel: driverInfo.carModel,
       plateNumber: driverInfo.plateNumber,
       price: driverInfo.price,
       note: driverInfo.note
       
      })
    }, 2000)
    
    
  }.bind(this))
}

keyExitedDest(){
  
  this.geoquery1.on("key_exited", function(key){
    this.afDB.database.ref('/users/' + key + '/trips/driversListRide/' + this.driverUid).remove()
  }.bind(this))
}

keyEnteredOr(driverInfo){
  this.geoquery2.on("key_entered", function(key){
   console.log(key);
   setTimeout(()=>{
     this.afDB.database.ref('/users/' + key + '/trips/driversListRide/' + this.driverUid).set({
     origin: driverInfo.origin,
      destination:driverInfo.destination,
      name: driverInfo.name,
      lastname: driverInfo.lastname,
      phone: driverInfo.phone,
      userId: driverInfo.userId,
      carModel: driverInfo.carModel,
      plateNumber: driverInfo.plateNumber,
      price: driverInfo.price,
      note: driverInfo.note
      
     })
   }, 2000)
   
   
 }.bind(this))
}

keyExitedOr(){
 
 this.geoquery2.on("key_exited", function(key){
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

public deleteUserListRideTotal(driverId){
  this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/').remove();
}

public onTripUserListRide(driverId, userId){
  this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + userId).update({
    onTrip: true
  });
}

deleteUserGeofireDest(userId){
  this.afDB.database.ref('geofireDest/' + userId).remove().then(()=>{
      console.log("succesfully removed");
  }).catch(error =>{
      console.log(error);
  })
  
  
}

deleteUserGeofireOr(userId){
  this.afDB.database.ref('geofireOr/' + userId).remove().then(()=>{
      console.log("succesfully removed");
  }).catch(error =>{
      console.log(error);
  })
  
  
}

public getInfoUser(userId){
 return this.afDB.object('users/' + userId).valueChanges();
}

cancelGeoqueryDest(){
  if(this.geoquery1){
    this.geoquery1.cancel()
  }else{
    console.log('dont dest query')
  }
  
}

cancelGeoqueryOr(){
  if(this.geoquery2){
    this.geoquery2.cancel()
  }else{
    console.log('dont or query')
  }
  
}


}