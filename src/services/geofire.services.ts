import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import * as GeoFire from 'geofire';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class geofireService {

dbRef:any;
geoFire:any;




constructor(public afDB: AngularFireDatabase, private AngularFireAuth: AngularFireAuth){

  this.dbRef = this.afDB.database.ref('geofire/' );
  this.geoFire = new GeoFire(this.dbRef); 
}


setGeofire( radius:number, lat, lng){ 
  this.geoFire.query({
    center: [lat, lng],
    radius: radius
  })
  .on("key_entered", function(key) {
    console.log('these key entered: ' + key)
  })
}



// public getUsersGeofire(){
//   return this.afDB.list('/geofire').valueChanges();
// }



}