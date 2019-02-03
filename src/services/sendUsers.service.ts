import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
// import { UrlSerializer } from "ionic-angular";
// import { useAnimation } from "@angular/core/src/animation/dsl";
// import * as firebase from 'firebase';
// import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class sendUsersService {

constructor(public afDB: AngularFireDatabase){
              
    }
    public getUsersOnListRide(userUid){
        // Get all the students from the usersListRide
         return  this.afDB.list('/drivers/'+ userUid +'/trips/usersListRide').valueChanges();
     } 
    public getUsersOnTrip(userUid){
        // Get all the students the driver acepts in myListRidePage to be send to the students
         return  this.afDB.list('/drivers/'+ userUid +'/trips/usersOnTrip').valueChanges();
     }   
     public removeUsersOnListRide(userUid,userId ){
        //send the information of every student the driver acepts in myRide
           this.afDB.database.ref('/drivers/'+ userUid +'/trips/usersListRide/'+ userId).remove();
               
           }
    public pushUsersOnTripOnDrivers(userUid,userId ,origin,destination,name,lastname,phone){
     //send the information of every student the driver acepts in myRide
        this.afDB.database.ref('/drivers/'+ userUid +'/trips/usersOnTrip/'+ userId).update(
            {
             origin: origin,
             destination: destination,
             name:name,
             lastname:lastname,
             phone: phone,
             userId:userId
            
            }
            );

        }
        public pushDriverOnUsers(userUid,userId ,origin,destination,name,lastname,phone,carModel,plateNumber,price){
            //send the driver information to the students
            this.afDB.database.ref('/users/'+ userId +'/trips/usersOnTrip/driver/'+ userUid).update(
                {
                 origin: origin,
                 destination: destination,
                 name:name,
                 lastname:lastname,
                 phone: phone,
                 userId:userUid,
                 carModel:carModel,
                 plateNumber:plateNumber,    
                 price:price    
                }
                );
            }
    
    
    

   
}

