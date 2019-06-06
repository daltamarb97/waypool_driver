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
geoqueryU:any;

driverUid:any;
driver:any;
origin:any;
destination:any;
name:any;
lastname:any;
phone:any;
carModel:any;
plateNumber:any;
proofToCancelDest:any;
proofToCancelOr:any;


constructor(public afDB: AngularFireDatabase, private AngularFireAuth: AngularFireAuth){

 

  this.driverUid = this.AngularFireAuth.auth.currentUser.uid;
 

}



setGeofireDest( radius:number, lat, lng, geofirename, name, lastname, car, destination, note, origin, price, driverId):void{ 
  this.proofToCancelDest = this.variableName(geofirename);
  this.dbRef = this.afDB.database.ref('geofireDest/' );
  this.geoFire = new GeoFire(this.dbRef); 

  this.geoquery1 = this.geoFire.query({
    center: [lat, lng],
    radius: radius
  })

  
  this.keyEnteredDest(name, lastname, car, destination, note, origin, price, driverId);
  this.keyExitedDest();

// if(this.geoquery2){
//   this.geoquery2.cancel();
// }

console.log('geoquery dest added');
}

variableName(variable){
  var variableName = variable;
  return variableName;
}

setGeofireOr( radius:number, lat, lng, geofirename, name, lastname, car, destination, note, origin, price, driverId):void{ 
  this.proofToCancelOr = this.variableName(geofirename);
  this.dbRef = this.afDB.database.ref('geofireOr/' );
  this.geoFire = new GeoFire(this.dbRef); 

  this.geoquery2 = this.geoFire.query({
    center: [lat, lng],
    radius: radius
  })

  this.keyEnteredOr(name, lastname, car, destination, note, origin, price, driverId);
  this.keyExitedOr();

  // if(this.geoquery1){
  //   this.geoquery1.cancel();
  // }

  console.log('geoquery or added');


}


//JUAN DAVID: created a sub-node "availableRserves" inside users node, so they are able to read the reserves from their node
keyEnteredDest(name, lastname, car, destination, note, origin, price, driverId ){
   this.geoquery1.on("key_entered", function(key){
    console.log(key);
    setTimeout(()=>{
      this.afDB.database.ref('/users/' + key + '/availableReserves/').push({
      origin:origin,
       destination:destination,
       car:car,      
       price: price,
       note:note,
       name:name,
       lastname:lastname,
       driverId: driverId
       
      })
    }, 2000)
    
    
  }.bind(this))
}

keyExitedDest(){
  
  this.geoquery1.on("key_exited", function(key){
    this.afDB.database.ref('/users/' + key + '/trips/driversListRide/' + this.driverUid).remove()
  }.bind(this))
}

//JUAN DAVID: created a sub-node "availableRserves" inside users node, so they are able to read the reserves from their node
keyEnteredOr(name, lastname, car, destination, note, origin, price, driverId){
  this.geoquery2.on("key_entered", function(key){
   console.log(key);
   setTimeout(()=>{
     this.afDB.database.ref('/users/' + key + '/availableReserves/').push({
      origin:origin,
      destination:destination,
      car:car,      
      price: price,
      note:note,
      name:name,
      lastname:lastname,
      driverId: driverId
      
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

public getMyReserves(driverId){
  
  return this.afDB.list('/reserves/' + driverId).valueChanges();
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

cancelGeoqueryDest(geofirename){
  if(this.proofToCancelDest === geofirename){
    if(this.geoquery1){
      this.geoquery1.cancel()
      console.log('geofireDest deleted');
    }else{
      console.log('dont dest query')
    }
  }
}

cancelGeoqueryOr(geofirename){
  if(this.proofToCancelOr === geofirename){
    if(this.geoquery2){
      this.geoquery2.cancel()
      console.log('geofireOr deleted');
  
    }else{
      console.log('dont or query')
    }
  }
}

// set a new node on firebase which is the location of the university
setLocationUniversity( key, lat, lng){
  this.dbRef = this.afDB.database.ref('geofireUniversity/' );
  this.geoFire = new GeoFire(this.dbRef); 
    this.geoFire.set(key, [lat, lng]).then(function(){
    console.log('location updated');
    }, function(error){
    console.log('error: ' + error)
  });
}

// set geoquery that determines if the person is in university
setGeofireUniversity( radius:number, lat, lng, driverId):void{ 
  
  this.dbRef = this.afDB.database.ref('geofireUniversity/' );
  this.geoFire = new GeoFire(this.dbRef); 

  this.geoqueryU = this.geoFire.query({
    center: [lat, lng],
    radius: radius
  })

  this.keyEnteredUniversity(driverId);

console.log('geoquery university added');
}

keyEnteredUniversity(driverId){
  this.geoqueryU.on("key_entered", function(key){
   this.afDB.database.ref('/drivers/' + driverId ).update({
     geofireOrigin: true
   }).then(()=>{
     console.log('geofireOrigin = true');
   })
   console.log(key + ' detected')
 }.bind(this))

}

cancelGeoqueryUniversity(){
  if(this.geoqueryU){
    this.geoqueryU.cancel()
    console.log('geoqueryU deleted');

  }else{
    console.log('dont uni query')
  }
  
}

public cancelGeofireOrigin(driverId){
  this.afDB.database.ref('/drivers/' + driverId).update({
    geofireOrigin: false
  }).then(()=>{
    console.log('geofireOrigin = false');
  })
}

public getLocationUniversity(){
   return this.afDB.object('uninorte/').valueChanges();
 }
}