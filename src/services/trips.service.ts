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
        getKeyTrip(university, driverUid){
          //get key of driver's trip
          return  this.afDB.object(university + '/drivers/'+driverUid+'/keyTrip').valueChanges();
      }
       
     public getOnTrip(university, userUid){
      return  this.afDB.object(university + '/drivers/'+ userUid+'/onTrip').valueChanges();

     }
     
        public getSpecificUser(university, keyTrip,driverUid,userId){
          //get trip in Trip's node
          return  this.afDB.list(university + '/trips/'+driverUid+'/'+ keyTrip+'/pendingUsers/'+userId).valueChanges();
      } 
        public getReserveUsers(university , keyTrip,driverUid){
          //get trip in Trip's node
          return  this.afDB.list(university + '/reserves/'+driverUid+'/'+ keyTrip+'/pendingUsers').valueChanges();
      } 
      public getLastMinuteUsers(university, keyTrip,driverUid){
          //get trip in Trip's node
          return  this.afDB.list(university + '/trips/'+driverUid+'/'+ keyTrip+'/lastMinuteUsers').valueChanges();
      } 
      public getPickedUpUsers(university, keyTrip,driverUid){
          //get trip in Trip's node
          return  this.afDB.list(university + '/trips/'+driverUid+'/'+ keyTrip+'/pickedUpUsers').valueChanges();
      } 
      public startTripForUsers(university, keyTrip,userId,driverId){
        //create a trip in Trip's node in database     
      this.afDB.database.ref(university + '/users/'+userId).update({        
        onTrip:true        
      });
      this.afDB.database.ref(university + '/users/'+userId+'/keyTrip').update({        
        keyTrip:keyTrip,
        driverId:driverId        
      });
    }
       public startTrip(university, keyTrip,driverUid,trip){
                //create a trip in Trip's node in database
               
              this.afDB.database.ref(university+ '/trips/'+driverUid+'/'+ keyTrip).update(trip);
             
             
          }  

       public acceptLastMinute(university, driverUid,keyTrip,user){
        this.afDB.database.ref(university + '/trips/'+driverUid+'/'+ keyTrip+'/pendingUsers/'+ user.userId).update(user);

       }        
       public noRepeatLMU(university, driverUid,keyTrip,userId){
        this.afDB.database.ref(university + '/trips/'+driverUid+'/'+ keyTrip+'/lastMinuteUsers/'+ userId).update({
          noRepeat:true
        });

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
     public createTripState(university, keyTrip,driverUid){
      this.afDB.database.ref(university + '/tripsState/'+driverUid+'/'+ keyTrip).update({
        saveTrip:false,
        canceledTrip:false        
      });
     }
     
    
     public eliminateTripState(university,keyTrip,driverUid){
      this.afDB.database.ref(university + '/tripsState/'+driverUid+'/'+ keyTrip).remove();
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
        public setOnTripFalseUser(university, userId){           
          // set false to onTrip instance in driver's node
          this.afDB.database.ref(university + '/users/'+userId).update({
            onTrip:false
          });  
        }
        public setOnTrip(university, driverUid){           
          // set false to onTrip instance in driver's node
          this.afDB.database.ref(university + '/drivers/'+driverUid).update({
            onTrip:true
          });  
        }
        
        public endTripForUsers(university,userId){          
          this.afDB.database.ref(university + '/users/'+userId+'/saveTrip').update({
            saveTrip:true
          });  
          
        
     }
     public sentTripUser(university,userId,trip){          
      this.afDB.database.ref(university + '/users/'+userId+'/trip').update(trip);  
      
    
 }
       public saveTripUser(university, driverUid,keyTrip){           
          // this instance allows the user to save the trip in his records
          this.afDB.database.ref(university+ '/tripsState/'+driverUid+'/'+ keyTrip).update({
            saveTrip:true
          });  
        }
        public allTrips(university, driverUid,keyTrip,trip){           
          // this instance allows the user to save the trip in his records
          this.afDB.database.ref('allTrips/'+university+'/'+driverUid+'/'+ keyTrip).update(trip);  
        }
       public getTripState(university, reserveId,driverId){
          return  this.afDB.object(university + '/tripsState/'+driverId+'/'+reserveId+'/').valueChanges();
      
        }
       
       public eraseKeyTrip(university, driverUid){           
          // erase keyTrip in driver's node
          this.afDB.database.ref(university + '/drivers/' + driverUid +'/keyTrip').remove();
        }
       public cancelUserFromTrip(university, driverUid,keyTrip,userId){ 
    
            this.afDB.database.ref(university +'/users/'+userId+'/' +'/cancelTrip/').update({
              cancelTrip:true
            });       
         
          //eliminate the user from pendingUsers
          this.afDB.database.ref(university + '/trips/'+driverUid+'/'+ keyTrip +'/pendingUsers/'+userId).remove();  
          
        }
        public saveTripOnRecords(university, driverUid,trip){
          //save trip in recordTrips
          
        this.afDB.database.ref(university + '/drivers/'+driverUid+'/recordTrips/').push(trip);
   
       }
       public cancelReserve(university, driverUid,keyTrip){
        this.afDB.database.ref(university + '/reserves/'+driverUid+'/'+ keyTrip).remove();  
        console.log("hola")
       }
  
 }

     



    

