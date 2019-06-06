import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase';

@Injectable()
export class priceService {
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){
    }

    

    public setPriceAndNote(user,price,note,car,timeLeaving){
        
        firebase.database().ref('drivers/' + user+'/trips').update({
          //set important information with note

           price:price ,
           note:note,
           car:car,
           timeLeaving:timeLeaving
        })
   }    
    public setPrice(user,price,car,timeLeaving){
        //set important information without note
      firebase.database().ref('drivers/' + user+'/trips').update({
         price:price, 
         car:car,
         timeLeaving:timeLeaving
      })
     }

     public saveTripToReserves(driverUid,or,dest,timeLeaving,price,car,note,driver){
      let arrayReserves =this.afDB.database.ref('reserves/'+ driverUid+'/').push({
          orReserve: or,
          destReserve: dest,
          timeLeaving:timeLeaving,
          price:price,
          car:car,
          note:note,
          driver:driver
        
          
          });
          //get key of reserve pushed
        let KeyLastTripSaved = arrayReserves.key;
          //save key inside reserve
        firebase.database().ref('reserves/'+driverUid+'/'+arrayReserves.key+'/').update({
           keyTrip:arrayReserves.key
        })
          //save key inside driver momentarily to access reserve 
        firebase.database().ref('drivers/'+driverUid+'/'+arrayReserves.key).update({
          keyLastReserve:arrayReserves.key
       })
        console.log(KeyLastTripSaved); 
       }
}