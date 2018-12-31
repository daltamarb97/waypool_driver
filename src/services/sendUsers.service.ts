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
    
    public getUsersOnTrip(userUid){
        // Get all the students the driver acepts in myListRidePage to be send to the students
         return  this.afDB.list('/drivers/'+ userUid +'/trips/usersOnTrip').valueChanges();
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
        public pushDriverOnUsers(userUid,userId ,origin,destination,name,lastname,phone,carModel,plateNumber){
            //send the driver information to the students
            this.afDB.database.ref('/users/'+ userId +'/trips/usersOnTrip/Driver/'+ userUid).update(
                {
                 origin: origin,
                 destination: destination,
                 name:name,
                 lastname:lastname,
                 phone: phone,
                 userId:userUid,
                 carModel:carModel,
                 plateNumber:plateNumber         
                }
                );
            }
    
    
    

    public pushcoordinatesDrivers(user , dest, or){
     
    this.afDB.database.ref('/drivers/'+ user+'/trips').update({
        origin: or,
        destination: dest,
        
        });    
     
            this.afDB.database.ref('/drivers/'+ user+'/trips/recordTrips').push({
                origin: or,
                destination: dest,
                
            });
        }
}

