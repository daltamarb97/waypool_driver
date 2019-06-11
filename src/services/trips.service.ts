import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";
import { elementClass } from "@angular/core/src/render3/instructions";

@Injectable()
export class TripsService {
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){
    }
            public getTrip(keyTrip,driverUid){
              //get trip in Trip's node
              return  this.afDB.object('/trips/'+driverUid+'/'+ keyTrip).valueChanges();
          } 
          public getPendingUsers(keyTrip,driverUid){
            //get trip in Trip's node
            return  this.afDB.list('/trips/'+driverUid+'/'+ keyTrip+'/pendingUsers').valueChanges();
        } 
        public getPickedUpUsers(keyTrip,driverUid){
          //get trip in Trip's node
          return  this.afDB.list('/trips/'+driverUid+'/'+ keyTrip+'/pickedUpUsers').valueChanges();
      } 

       public startTrip(keyTrip,driverUid,trip){
                //create a trip in Trip's node in database
              this.afDB.database.ref('/trips/'+driverUid+'/'+ keyTrip).update(trip);
              this.afDB.database.ref('/trips/'+driverUid+'/'+ keyTrip).update({
                onTrip:true
              });
          }    
          public deleteReserve(keyTrip,driverUid){
            this.afDB.database.ref('/reserves/'+driverUid+'/'+ keyTrip).remove();

          }
        public pushKeyInDriver(keyTrip,DriverUid){
          //push a key of the trip to the driver, in this way the driver can acces the trip in Trip's node
        this.afDB.database.ref('/drivers/'+ DriverUid).update({
          keyTrip:keyTrip
        });

    }  
    public pushOnTripInDriver(DriverUid){
      //push a onTrip in Driver's node
    this.afDB.database.ref('/drivers/'+ DriverUid).update({
      onTrip:true
    });
  }
      public eliminatePendingUsers(keyTrip,driverUid,userId){  

          //eliminate the user from pendingUsers
            this.afDB.database.ref('/trips/'+driverUid+'/'+ keyTrip +'/pendingUsers/'+ userId).remove();
      }
      public pickUp(keyTrip,driverUid,userId,user){
       

        // add the driver to pickedUpUsers 
        this.afDB.database.ref('/trips/'+driverUid+'/'+ keyTrip +'/pickedUpUsers/'+ userId).update(user);
 
     }

     public timeFinishedTrip(keyTrip,driverUid,date){
      //set time when driver go to destination 

          this.afDB.database.ref('/trips/'+driverUid+'/'+ keyTrip).update({
            DestinationTime:date
          });
          }
          public endTrip(keyTrip,driverUid){          
             //erase trip in trip's node
            this.afDB.database.ref('/trips/'+driverUid+'/'+ keyTrip).remove();
        }
        public setOnTripFalse(driverUid){           
          // set false to onTrip instance in driver's node
          this.afDB.database.ref('/drivers/'+driverUid).update({
            onTrip:false
          });        }
        public eraseKeyTrip(driverUid){           
          // erase keyTrip in driver's node
          this.afDB.database.ref('drivers/' + driverUid +'/keyTrip').remove();
        }
        public saveTripOnRecords(driverUid,trip){
          //save trip in recordTrips
          
        this.afDB.database.ref('/drivers/'+driverUid+'/recordTrips/').push(trip);
   
       }
  
 }

     



    

