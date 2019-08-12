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
     public getTripsOfReserves(university, userUid){
        // Get all the trips the driver have reserve
         return  this.afDB.list(university + '/reserves/'+ userUid).valueChanges();
     } 
    public getUsersOnTrip(university, userUid){
        // Get all the students the driver acepts in myListRidePage to be send to the students
         return  this.afDB.list(university + '/drivers/'+ userUid +'/trips/pickingUsers').valueChanges();
     }   

     public getPickUpUsers(university, userUid){
         //get all the users from the pickUpUsers []
        return  this.afDB.list(university + '/drivers/'+ userUid +'/trips/pickedUpUsers').valueChanges();
     }
     public removeReserve(driverId, keyReserve ){
        //remove the reserve done
           this.afDB.database.ref('/reserves/'+ driverId + '/' + keyReserve).remove();
           }

           public removeUsersOnListRideTotal(university, userUid ){
            //send the information of every student the driver acepts in myRide
               this.afDB.database.ref(university + '/drivers/'+ userUid +'/trips/usersListRide/').remove();

               }

           public removeUsersOnPickingUsers(university, userUid,userId ){
            //send the information of every student the driver acepts in myRide
               this.afDB.database.ref(university + '/drivers/'+ userUid +'/trips/pickingUsers/'+ userId).remove();
               this.afDB.database.ref(university + '/users/'+ userId +'/trips/pickingUsers/driver/' + userUid).remove();
               }

    


    public pushPickingUpUsersOnDrivers(university, userUid,userId ,origin,destination,name,lastname,phone, about){
     //send the information of every student the driver acepts in myRide
        this.afDB.database.ref(university + '/drivers/'+ userUid +'/trips/pickingUsers/'+ userId).update(
            {
             origin: origin,
             destination: destination,
             name:name,
             lastname:lastname,
             phone: phone,
             userId:userId,
             about:about
            
            }
            );

        }
        public pushDriverOnUsers(university, userUid,userId ,origin,destination,name,lastname,phone,price,car,about){
            //send the driver information to the students
            this.afDB.database.ref(university + '/users/'+ userId +'/trips/pickingUsers/driver/'+ userUid).update(
                {
                 origin: origin,
                 destination: destination,
                 name:name,
                 lastname:lastname,
                 phone: phone,
                 userId:userUid,
                 car:car, 
                 price:price,
                 about:about
                 
                
                }
                );
            }
    
    public pushTripOnRecordDriver(userUid){
        //historial
        this.afDB.database.ref('/drivers/'+ userUid +'/trips').push();
    }

   public getRecordTrips(university, userUid){
    return  this.afDB.list(university + '/drivers/'+ userUid +'/recordTrips/').valueChanges();

   }

   public badgeTrue(userUid){
       this.afDB.database.ref('/drivers/'+ userUid).update({
           badgePicking: true
       })
   }

   public badgeFalse(userUid){
    this.afDB.database.ref('/drivers/'+ userUid).update({
        badgePicking: false
    })
}
public badgeTrueOntrip(userUid){
    this.afDB.database.ref('/drivers/'+ userUid).update({
        badgeOntrip: true
    })
}

public badgeFalseOntrip(userUid){
 this.afDB.database.ref('/drivers/'+ userUid).update({
     badgeOntrip: false
 })
}
}

