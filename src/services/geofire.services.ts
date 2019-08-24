import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable, keyframes } from "@angular/core";
import * as GeoFire from 'geofire';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs";
import * as firebase from 'firebase';


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

KeyLastTripSaved:any

constructor(public afDB: AngularFireDatabase, private AngularFireAuth: AngularFireAuth){

 

  this.driverUid = this.AngularFireAuth.auth.currentUser.uid;
 

}



// setGeofireDest( radius:number, lat, lng, geofirename, driverId, keyReserve):void{ 
//   this.proofToCancelDest = this.variableName(geofirename);
//   this.dbRef = this.afDB.database.ref('geofireDest/' );
//   this.geoFire = new GeoFire(this.dbRef); 

//   this.geoquery1 = this.geoFire.query({
//     center: [lat, lng],
//     radius: radius
//   })

  
//   this.keyEnteredDest( driverId, keyReserve);
//   this.keyExitedDest(keyReserve);

// console.log('geoquery dest added');
// }

// variableName(variable){
//   var variableName = variable;
//   return variableName;
// }

// setGeofireOr( radius:number, lat, lng, geofirename, driverId, keyReserve):void{ 
//   this.proofToCancelOr = this.variableName(geofirename);
//   this.dbRef = this.afDB.database.ref('geofireOr/' );
//   this.geoFire = new GeoFire(this.dbRef); 

//   this.geoquery2 = this.geoFire.query({
//     center: [lat, lng],
//     radius: radius
//   })

//   this.keyEnteredOr( driverId, keyReserve);
//   this.keyExitedOr(keyReserve);

//   // if(this.geoquery1){
//   //   this.geoquery1.cancel();
//   // }

//   console.log('geoquery or added');


// }

///////////


setGeofireOrNEWTEST(university, key, lat, lng){
  this.dbRef = this.afDB.database.ref(university + '/geofireOr/' );
  this.geoFire = new GeoFire(this.dbRef); 

          this.geoFire.set(key, [lat, lng]).then(function(){
              console.log('location updated');
             }, function(error){
            console.log('error: ' + error)
             });

   
}

setGeofireDestNEWTEST(university, key, lat, lng){
  this.dbRef = this.afDB.database.ref(university + '/geofireDest/' );
  this.geoFire = new GeoFire(this.dbRef); 

          this.geoFire.set(key, [lat, lng]).then(function(){
              console.log('location updated');
             }, function(error){
            console.log('error: ' + error)
             });


}


setGeofireOrOnTrip(university, key, lat, lng){
  this.dbRef = this.afDB.database.ref(university + '/geofireOrTrip/' );
  this.geoFire = new GeoFire(this.dbRef); 

          this.geoFire.set(key, [lat, lng]).then(function(){
              console.log('location updated');
             }, function(error){
            console.log('error: ' + error)
             });

   
}

setGeofireDestOnTrip(university, key, lat, lng){
  this.dbRef = this.afDB.database.ref(university + '/geofireDestTrip/' );
  this.geoFire = new GeoFire(this.dbRef); 

          this.geoFire.set(key, [lat, lng]).then(function(){
              console.log('location updated');
             }, function(error){
            console.log('error: ' + error)
             });


}

////////////////////


//JUAN DAVID: created a sub-node "availableRserves" inside users node, so they are able to read the reserves from their node
keyEnteredDest( driverId, keyReserve ){
   this.geoquery1.on("key_entered", function(key, location, distance){
    console.log(key);
    setTimeout(()=>{
      this.afDB.database.ref('/users/' + key + '/availableReserves/' + keyReserve).update({
       driverId: driverId,
       keyReserve: keyReserve
      })
      console.log('keyentered here');
    }, 3000)
    
    
  }.bind(this))
}


keyExitedDest(keyReserve){
  
  this.geoquery1.on("key_exited", function(key){
    this.afDB.database.ref('/users/' + key + '/availableReserves/' + keyReserve).remove()
  }.bind(this))
}

//JUAN DAVID: created a sub-node "availableRserves" inside users node, so they are able to read the reserves from their node
keyEnteredOr( driverId, keyReserve){
  this.geoquery2.on("key_entered", function(key, location, distance){
   console.log(key);
   this.afDB.database.ref('/users/' + key + '/availableReserves/' + keyReserve).update({
    driverId: driverId,
    keyReserve: keyReserve
   })

   this.afDB.database.ref('/reservesInfoInCaseOfCancelling/'+ driverId + '/' + keyReserve).push({
    userId: key

  })
       
 }.bind(this))
}

keyExitedOr(keyReserve){
 
 this.geoquery2.on("key_exited", function(key){
   this.afDB.database.ref('/users/' + key + '/availableReserves/' + keyReserve).remove()
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

public deleteUserListRide(university, driverId, userId){
  this.afDB.database.ref(university + '/drivers/' + driverId + '/trips/usersListRide/' + userId).remove();
}

public deleteUserListRideTotal(driverId){
  this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/').remove();
}

public onTripUserListRide(driverId, userId){
  this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + userId).update({
    onTrip: true
  });
}

deleteUserGeofireDest(university, keyTrip){
  this.afDB.database.ref(university + '/geofireDest/' + keyTrip).remove().then(()=>{
      console.log("GeofireDest succesfully removed");
  }).catch(error =>{
      console.log(error);
  })
  
  
}

deleteUserGeofireOr(university, keyTrip){
  this.afDB.database.ref(university + '/geofireOr/' + keyTrip).remove().then(()=>{
      console.log("GeofireOr succesfully removed");
  }).catch(error =>{
      console.log(error);
  })
  
  
}


deleteUserGeofireOrTrip(university, keyTrip){
  this.afDB.database.ref(university + '/geofireOrTrip/' +  keyTrip).remove().then(()=>{
      console.log("geofireOrTrip succesfully removed");
  }).catch(error =>{
      console.log(error);
  })
}



deleteUserGeofireDestTrip(university, keyTrip){
  this.afDB.database.ref(university + '/geofireDestTrip/' + keyTrip).remove().then(()=>{
      console.log("geofireDestTrip succesfully removed");
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
      console.log('geoqueryDest deleted');
    }else{
      console.log('dont dest query')
    }
  }
}

cancelGeoqueryOr(geofirename){
  if(this.proofToCancelOr === geofirename){
    if(this.geoquery2){
      this.geoquery2.cancel()
      console.log('geoqueryOr deleted');
  
    }else{
      console.log('dont or query')
    }
  }
}


// set a new node on firebase which is the location of the university
setLocationUniversity(university, key, lat, lng){
  this.dbRef = this.afDB.database.ref(university + '/geofireUniversity/' );
  this.geoFire = new GeoFire(this.dbRef); 
    this.geoFire.set(key, [lat, lng]).then(function(){
    console.log('location updated');
    }, function(error){
    console.log('error: ' + error)
  });
}

// set geoquery that determines if the person is in university
setGeofireUniversity(university, radius:number, lat, lng, driverId):void{ 
  
  this.dbRef = this.afDB.database.ref(university + '/geofireUniversity/' );
  this.geoFire = new GeoFire(this.dbRef); 

  this.geoqueryU = this.geoFire.query({
    center: [lat, lng],
    radius: radius
  })

  this.keyEnteredUniversity(university, driverId);

console.log('geoquery university added');
}

keyEnteredUniversity(university, driverId){
  this.geoqueryU.on("key_entered", function(key){
   this.afDB.database.ref(university + '/drivers/' + driverId ).update({
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

public cancelGeofireOrigin(university, driverId){
  this.afDB.database.ref(university + '/drivers/' + driverId).update({
    geofireOrigin: false
  }).then(()=>{
    console.log('geofireOrigin = false');
  })
}

public getLocationUniversity(university){
   return this.afDB.object('/universities/'+ university).valueChanges();
 }
}