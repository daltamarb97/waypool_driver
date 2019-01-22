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

driver;


constructor(public afDB: AngularFireDatabase, private AngularFireAuth: AngularFireAuth){

  this.dbRef = this.afDB.database.ref('geofire/' );
  this.geoFire = new GeoFire(this.dbRef); 

  this.driver = this.AngularFireAuth.auth.currentUser.uid;

}



setGeofire( radius:number, lat, lng):void{ 
  
  this.geoquery = this.geoFire.query({
    center: [lat, lng],
    radius: radius
  })

  this.keyEntered();
  this.keyExited();
}

keyEntered(){
  
  this.geoquery.on("key_entered", function(key){
    // this.hits.push(key);
    // console.log(this.hits);
    
    this.afDB.object('/drivers/' + this.driver).valueChanges().subscribe(driver=>{
    
          this.afDB.database.ref('/users/' + key + '/trips/driversListRide/' + this.driver).set({

            origin: driver.trips.origin,
             destination: driver.trips.destination,
             name: driver.name,
             lastname: driver.lastname,
             phone: driver.phone,
             userId: driver.userId,
             carModel: driver.carModel,
             plateNumber: driver.plateNumber

          });
        }
      )
        
   
    
  }.bind(this))
}

keyExited(){
  
  this.geoquery.on("key_exited", function(key){
    // let i = this.hits.indexOf(key);
    // if(i !== -1){
    //   this.hits.splice(i, 1);
    // }
    // console.log(this.hits);
    this.afDB.database.ref('/users/' + key + '/trips/driversListRide/' + this.user).remove()
  }.bind(this))
}
   
  
public getUsersListRide(){
  return this.afDB.list('/drivers/' + this.driver + '/trips/usersListRide').valueChanges();
}

public getUsersGeofire(){
  return this.afDB.list('/drivers/'+ this.driver + '/trips/usersListRide/').valueChanges();
}



}