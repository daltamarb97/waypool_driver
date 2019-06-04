import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase';

@Injectable()
export class priceService {
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){
    }

    

    public setPriceAndNote(user,price,note,car, hour, nowHour){
        
        firebase.database().ref('drivers/' + user+'/trips').update({
           price:price ,
           note:note,
           car:car,
           hour:hour,
           nowHour: nowHour
        })
   }    
    public setPrice(user,price,car,hour, nowHour){
        
      firebase.database().ref('drivers/' + user+'/trips').update({
         price:price, 
         car:car,
         hour:hour,
         nowHour:nowHour
      })
     }

     



    

}