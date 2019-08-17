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
        public getReserveUsers(keyTrip,driverUid){
          //get trip in Trip's node
          return  this.afDB.list('/reserves/'+driverUid+'/'+ keyTrip+'/pendingUsers').valueChanges();
      } 
      public getLastMinuteUsers(keyTrip,driverUid){
          //get trip in Trip's node
          return  this.afDB.list('/trips/'+driverUid+'/'+ keyTrip+'/lastMinuteUsers').valueChanges();
      } 
      public getPickedUpUsers(keyTrip,driverUid){
          //get trip in Trip's node
          return  this.afDB.list('/trips/'+driverUid+'/'+ keyTrip+'/pickedUpUsers').valueChanges();
      } 
      public startTripForUsers(keyTrip,userId,driverId){
        //create a trip in Trip's node in database     
      this.afDB.database.ref('/users/'+userId+'/onTrip').update({        
        onTrip:true        
      });
      this.afDB.database.ref('/users/'+userId+'/keyTrip').update({        
        keyTrip:keyTrip,
        driverId:driverId        
      });
    }
       public startTrip(keyTrip,driverUid,trip){
                //create a trip in Trip's node in database
              this.afDB.database.ref('/trips/'+driverUid+'/'+ keyTrip).update(trip);
              this.afDB.database.ref('/trips/'+driverUid+'/'+ keyTrip).update({
                onTrip:true
              });
          }   
       public acceptLastMinute(driverUid,keyTrip,user){
        this.afDB.database.ref('/trips/'+driverUid+'/'+ keyTrip+'/pendingUsers/'+ user.userId).update(user);
       }        
      
      public eliminateLastMinuteUser(driverUid,keyTrip,userId){  

          //eliminate the user from pendingUsers
            this.afDB.database.ref('/trips/'+driverUid+'/'+ keyTrip +'/lastMinuteUsers/'+ userId).remove();
      }
          public pushInitiating(keyTrip,driverUid){
            this.afDB.database.ref('/reserves/'+driverUid+'/'+ keyTrip).update({
              initiating:true
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
    
      public eliminatePendingUsers(keyTrip,driverUid,userId){  

          //eliminate the user from pendingUsers
            this.afDB.database.ref('/trips/'+driverUid+'/'+ keyTrip +'/pendingUsers/'+ userId).remove();
      }
      public pickUp(keyTrip,driverUid,userId,user){
       

        // add the driver to pickedUpUsers 
        this.afDB.database.ref('/trips/'+driverUid+'/'+ keyTrip +'/pickedUpUsers/'+ userId).update(user);
 
     }
     public createTripState(keyTrip,driverUid){
      this.afDB.database.ref('/tripsState/'+driverUid+'/'+ keyTrip).update({
        saveTrip:false,
        canceledTrip:false        
      });
     }
     
    
     public eliminateTripState(keyTrip,driverUid){
      this.afDB.database.ref('/tripsState/'+driverUid+'/'+ keyTrip).remove();

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
          });  
        }
       public saveTripUser(driverUid,keyTrip){           
          // this instance allows the user to save the trip in his records
          this.afDB.database.ref('/tripsState/'+driverUid+'/'+ keyTrip).update({
            saveTrip:true
          });  
        }
       public getTripState(reserveId,driverId){
          return  this.afDB.object('/tripsState/'+driverId+'/'+reserveId+'/').valueChanges();
      
        }
       public eraseKeyTrip(driverUid){           
          // erase keyTrip in driver's node
          this.afDB.database.ref('drivers/' + driverUid +'/keyTrip').remove();
        }
       public cancelUserFromTrip(driverUid,keyTrip,userId){ 
          // save user in cancelUsers array
            this.afDB.database.ref('/tripsState/'+driverUid+'/'+ keyTrip +'/cancelUsers/'+userId).update({
              userId:userId
            });            
          //eliminate the user from pendingUsers
          this.afDB.database.ref('/trips/'+driverUid+'/'+ keyTrip +'/pendingUsers/'+userId).remove();  
          
        }
       public saveTripOnRecords(driverUid,trip){
          //save trip in recordTrips
          
        this.afDB.database.ref('/drivers/'+driverUid+'/recordTrips/').push(trip);
   
       }
       public cancelReserve(driverUid,keyTrip){
        this.afDB.database.ref('/reserves/'+driverUid+'/'+ keyTrip).remove();  
        console.log("hola")
       }
  
 }

     



    

