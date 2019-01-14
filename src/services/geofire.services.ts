import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable, keyframes } from "@angular/core";
import * as GeoFire from 'geofire';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireAuth } from "angularfire2/auth";


@Injectable()
export class geofireService {

dbRef:any;
geoFire:any;
geoquery:any;
hits = [];

constructor(public afDB: AngularFireDatabase, private AngularFireAuth: AngularFireAuth){

  this.dbRef = this.afDB.database.ref('geofire/' );
  this.geoFire = new GeoFire(this.dbRef); 
}



setGeofire( radius:number, lat, lng):void{ 
  
  this.geoquery = this.geoFire.query({
    center: [lat, lng],
    radius: radius
  })
  
  this.geoquery
  .on("key_entered", function(key){
    this.hits.push(key);
  }.bind(this))

  this.geoquery
  .on("key_exited", function(key){
    this.hits.pop(key);
  }.bind(this))

  
}


   
  
public getUsers(){
  return this.afDB.list('users/').valueChanges();
}

public getUsersGeofire(key){
  return this.afDB.list('users/' + key).valueChanges();
}



}