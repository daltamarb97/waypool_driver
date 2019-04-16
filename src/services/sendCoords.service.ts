import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
// import { UrlSerializer } from "ionic-angular";
// import { useAnimation } from "@angular/core/src/animation/dsl";
// import * as firebase from 'firebase';
// import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class sendCoordsService {

constructor(public afDB: AngularFireDatabase){
              
    }
    
    public getDestination(user){
        return  this.afDB.list('/drivers/'+ user +'/trips/destination').valueChanges();
    } 
    public getOrigin(user){
        return  this.afDB.list('/drivers/'+ user +'/trips/origin').valueChanges();
    }     
    
   public pushcoordinatesDrivers(user , dest, or){
     
    this.afDB.database.ref('drivers/'+ user+'/trips').update({
        origin: or,
        destination: dest,
        
        });
             
            
        }
    public recordTripOnDriver(userUid,trip){
      

        this.afDB.database.ref('/drivers/'+ userUid + '/recordTrips/').push(trip);

    }
    public recordTripOnUser(userDriverUid,trip){
      
     

        this.afDB.database.ref('/users/'+ userDriverUid + '/recordTrips/').push(trip);
        
    }
    public recordTripOnWaypool(trip){ 
     

        this.afDB.database.ref('/allTrips/').push(trip);
        
    }

  
    public timeOfPickedUpUser(userUid,date){
                //set time when user is picked up in user's trips

        this.afDB.database.ref('/users/'+ userUid + '/trips/').update({
            pickedUpTime:date
        });

    }
    public timeOfPickedUpDriver(userDriverUid,date,userUid){
        //set time when user is picked up in driver's trips
        this.afDB.database.ref('/drivers/'+ userDriverUid + '/trips/pickedUpUsers/'+userUid).update({
            pickedUpTime:date
        });

    }
    timeOfDestinationDriver(userDriverUid,date){
                //set time when driver go to destination 

        this.afDB.database.ref('/drivers/'+ userDriverUid + '/trips/').update({
            DestinationTime:date
        });
    }
    timeOfDestinationUser(userUid,date){
        this.afDB.database.ref('/users/'+ userUid + '/trips/').update({
            DestinationTime:date
        });
    }
    pushPriceOnUser(userDriverUid,userUid,price){
        this.afDB.database.ref('/drivers/'+ userDriverUid + '/trips/pickedUpUsers/'+userUid).update({
            price:price
        });
    }

    public updateGeolocationOrigin(user,origin){
        this.afDB.database.ref('drivers/' + user+'/trips').update({
            origin:origin
        })

    }
    public endTripDriverPickingUsers(DriverUid){
        this.afDB.database.ref('drivers/' + DriverUid+'/trips/pickingUsers').remove()
    }

    public eraseChatsUsers(userId,DriverUid){
        this.afDB.database.ref('drivers/' + DriverUid+'/trips/pickingUsers/'+userId+'/chat').remove()
    }
    
    public endTripDriverPickedUpUsers(DriverUid){
        this.afDB.database.ref('drivers/' + DriverUid+'/trips/pickedUpUsers').remove()
    }
    
    public endTripUserPickingUsers(userUid){
        this.afDB.database.ref('users/' + userUid+'/trips/pickingUsers').remove()
    }
    public endTripUserPickedUpUsers(userUid){
        this.afDB.database.ref('users/' + userUid+'/trips/pickedUpUsers').remove()
    }
    public endTripUserOnTripInstance(userUid){
        this.afDB.database.ref('users/' + userUid+'/trips/onTrip').remove()
    }
    public endTripUserPickupInstance(userUid){
        this.afDB.database.ref('users/' + userUid+'/trips/pickedUp').remove()
    }
    public endTripUserDriverListRide(userUid){
        this.afDB.database.ref('users/' + userUid+'/trips/driverListRide').remove()
    }
    public pickUp(DriverUid,userId,user){
       

       // add the driver to pickedUpUsers 
       this.afDB.database.ref('/drivers/'+ DriverUid +'/trips/pickedUpUsers/'+ userId).update(user);

    }
    public pickUpInstance(userId){       

        // driver add pickup instance to the user when picked up
        this.afDB.database.ref('/users/'+ userId +'/trips').update({
            pickedUp:true
        });
 
     }
     public eliminateOnTrip(userId){
        this.afDB.database.ref('/drivers/'+ userId ).update({
            onTrip:false
        });
    }

    public pushOnTripFinalUser(userId){
        this.afDB.database.ref('/users/'+ userId ).update({
            onTripFinal: true
        });
    }


    public eliminatePickingUsers(DriverUid,userId){
      

               //eliminate the user from pickingUsers
        this.afDB.database.ref('/drivers/'+ DriverUid +'/trips/pickingUsers/'+ userId).remove();
    }
    sumTotal(trip,total){
      total = total + trip;
    
      }
 
}

