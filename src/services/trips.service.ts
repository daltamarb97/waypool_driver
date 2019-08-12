import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";
import { elementClass } from "@angular/core/src/render3/instructions";

@Injectable()
export class TripsService {
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){
    }
      public getTrip(university, keyTrip,driverUid){
              //get trip in Trip's node
              return  this.afDB.object(university + '/trips/'+driverUid+'/'+ keyTrip).valueChanges();
          } 
      public getPendingUsers(university, keyTrip,driverUid){
            //get trip in Trip's node
            return  this.afDB.list(university + '/trips/'+driverUid+'/'+ keyTrip+'/pendingUsers').valueChanges();
        } 
      public getLastMinuteUsers(university, keyTrip,driverUid){
          //get trip in Trip's node
          return  this.afDB.list(university + '/trips/'+driverUid+'/'+ keyTrip+'/lastMinuteUsers').valueChanges();
      } 
      public getPickedUpUsers(university, keyTrip,driverUid){
          //get trip in Trip's node
          return  this.afDB.list(university + '/trips/'+driverUid+'/'+ keyTrip+'/pickedUpUsers').valueChanges();
      } 

       public startTrip(university, keyTrip,driverUid,trip){
                //create a trip in Trip's node in database
              this.afDB.database.ref(university+ '/trips/'+driverUid+'/'+ keyTrip).update(trip);
              this.afDB.database.ref(university+ '/trips/'+driverUid+'/'+ keyTrip).update({
                onTrip:true
              });
          }   
       public acceptLastMinute(university, driverUid,keyTrip,user){
        this.afDB.database.ref(university + '/trips/'+driverUid+'/'+ keyTrip+'/pendingUsers/'+ user.userId).update(user);

       }        
      
      public eliminateLastMinuteUser(university, driverUid,keyTrip,userId){  

          //eliminate the user from pendingUsers
            this.afDB.database.ref(university + '/trips/'+driverUid+'/'+ keyTrip +'/lastMinuteUsers/'+ userId).remove();
      }
          public deleteReserve(university, keyTrip,driverUid){
            this.afDB.database.ref(university + '/reserves/'+driverUid+'/'+ keyTrip).remove();

          }
        public pushKeyInDriver(university, keyTrip,DriverUid){
          //push a key of the trip to the driver, in this way the driver can acces the trip in Trip's node
        this.afDB.database.ref(university + '/drivers/'+ DriverUid).update({
          keyTrip:keyTrip
        });

    }  
    public pushOnTripInDriver(university, DriverUid){
      //push a onTrip in Driver's node
    this.afDB.database.ref(university+ '/drivers/'+ DriverUid).update({
      onTrip:true
    });
  }
      public eliminatePendingUsers(university, keyTrip,driverUid,userId){  

          //eliminate the user from pendingUsers
            this.afDB.database.ref(university+ '/trips/'+driverUid+'/'+ keyTrip +'/pendingUsers/'+ userId).remove();
      }
      public pickUp(university, keyTrip,driverUid,userId,user){
       

        // add the driver to pickedUpUsers 
        this.afDB.database.ref(university + '/trips/'+driverUid+'/'+ keyTrip +'/pickedUpUsers/'+ userId).update(user);
 
     }

     public timeFinishedTrip(university, keyTrip,driverUid,date){
      //set time when driver go to destination 

          this.afDB.database.ref(university + '/trips/'+driverUid+'/'+ keyTrip).update({
            DestinationTime:date
          });
          }

          public endTrip(university, keyTrip,driverUid){          
             //erase trip in trip's node
            this.afDB.database.ref(university + '/trips/'+driverUid+'/'+ keyTrip).remove();
        }
        public setOnTripFalse(university, driverUid){           
          // set false to onTrip instance in driver's node
          this.afDB.database.ref(university + '/drivers/'+driverUid).update({
            onTrip:false
          });  
        }
        public saveTripUser(university, driverUid,keyTrip){           
          // this instance allows the user to save the trip in his records
          this.afDB.database.ref(university + '/trips/'+driverUid+'/'+ keyTrip).update({
            saveTrip:true
          });  
        }
        public eraseKeyTrip(university, driverUid){           
          // erase keyTrip in driver's node
          this.afDB.database.ref(university + '/drivers/' + driverUid +'/keyTrip').remove();
        }
        public cancelUserFromTrip(university, driverUid,keyTrip,userId){ 
          // save user in cancelUsers array
            this.afDB.database.ref(university + '/trips/'+driverUid+'/'+ keyTrip +'/cancelUsers/'+userId).update({
              userId:userId
            });            
          //eliminate the user from pendingUsers
          this.afDB.database.ref('/trips/'+driverUid+'/'+ keyTrip +'/pendingUsers/'+userId).remove();  
          
        }
        public saveTripOnRecords(university, driverUid,trip){
          //save trip in recordTrips
          
        this.afDB.database.ref(university + '/drivers/'+driverUid+'/recordTrips/').push(trip);
   
       }
  
 }

     



    

