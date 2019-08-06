import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class ChatsService {
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){
    }

    public getChats(university, driverUid,userUid){
      //trae todos los chats del usuario
      return  this.afDB.list(university+ '/drivers/'+driverUid+'/trips/pickingUsers/'+userUid+'/chat/').valueChanges();
  } 

    public pushMessage(university, driverUid,userUid,message){
        //envía todos los chats del usuario
      this.afDB.database.ref(university + '/drivers/'+driverUid+'/trips/pickingUsers/'+userUid+'/chat/').push({
        message:message,
        uid:driverUid

      });

   }    

     }

     



    

