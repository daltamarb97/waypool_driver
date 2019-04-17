import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class ChatsService {
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){
    }

    public getChats(driverUid,userUid){
      //trae todos los chats del usuario
      return  this.afDB.list('/drivers/'+driverUid+'/trips/pickingUsers/'+userUid+'/chat/').valueChanges();
  } 

    public pushMessage(driverUid,userUid,message){
        //envía todos los chats del usuario
      this.afDB.database.ref('/drivers/'+driverUid+'/trips/pickingUsers/'+userUid+'/chat/').push({
        message:message,
        uid:driverUid

      });

   }    

     }

     



    

