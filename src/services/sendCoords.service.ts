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
    
    public getPendingUsers(university, userUid,pushKey){
        return  this.afDB.list(university + '/reserves/'+ userUid +'/'+pushKey+'/pendingUsers').valueChanges();
    }
    public getSpecificReserves(userUid,pushKey){
        return  this.afDB.object('/reserves/'+ userUid +'/'+pushKey).valueChanges();
    } 
    public eraseUser(university, userId,DriverUid,pushKey){
        this.afDB.database.ref(university + '/reserves/' + DriverUid+'/'+ pushKey+'/pendingUsers/'+userId).remove()
    }
    public getDestination(university, user){
        return  this.afDB.list(university+ '/drivers/'+ user +'/trips/destination').valueChanges();
    } 
    public getOrigin(university, user){
        return  this.afDB.list(university + '/drivers/'+ user +'/trips/origin').valueChanges();
    }     
       public pushcoordinatesReserves(user , dest, or){
     
    this.afDB.database.ref('drivers/'+ user+'/Reserves').push({
        orReserve: or,
        destReserve: dest,
        
        });
             
            
        }
   public pushcoordinatesDrivers(university, user , dest, or){
     
    this.afDB.database.ref(university + '/drivers/'+ user+'/trips').update({
        origin: or,
        destination: dest,
        
        });
             
            
        }
    public recordTripOnDriver(university, userUid,trip){
      

        this.afDB.database.ref(university+ '/drivers/'+ userUid + '/recordTrips/').push(trip);

    }
    public recordTripOnUser(university, userDriverUid,trip){
      
     

        this.afDB.database.ref(university + '/users/'+ userDriverUid + '/recordTrips/').push(trip);
        
    }
    public recordTripOnWaypool(university, trip){ 
     

        this.afDB.database.ref(university + '/allTrips/').push(trip);
        
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
    public endTripDriverPickingUsers(university, DriverUid){
        this.afDB.database.ref(university + '/drivers/' + DriverUid+'/trips/pickingUsers').remove()
    }

    public eraseChatsUsers(university, userId,DriverUid){
        this.afDB.database.ref(university + 'drivers/' + DriverUid+'/trips/pickingUsers/'+userId+'/chat').remove()
    }
    
    public endTripDriverPickedUpUsers(university, DriverUid){
        this.afDB.database.ref(university + '/drivers/' + DriverUid+'/trips/pickedUpUsers').remove()
    }
    
    public endTripUserPickingUsers(userUid){
        this.afDB.database.ref('users/' + userUid+'/trips/pickingUsers').remove()
    }
    public endTripUserPickedUpUsers(university , userUid){
        this.afDB.database.ref(university + '/users/' + userUid+'/trips/pickedUpUsers').remove()
    }
    public endTripUserOnTripInstance(university, userUid){
        this.afDB.database.ref(university + '/users/' + userUid+'/trips/onTrip').remove()
    }
    public endTripUserPickupInstance(university, userUid){
        this.afDB.database.ref(university + '/users/' + userUid+'/trips/pickedUp').remove()
    }
    public endTripUserDriverListRide(university, userUid){
        this.afDB.database.ref(university + '/users/' + userUid+'/trips/driverListRide').remove()
    }
    public pickUp(DriverUid,userId,user){
       

       // add the driver to pickedUpUsers 
       this.afDB.database.ref('/drivers/'+ DriverUid +'/trips/pickedUpUsers/'+ userId).update(user);

    }

    // TODO: DRIVER NO PUEDE ENTRAR TODO, SOLO DRIVERINFO (UNA PARTE DEL DRIVER, PREGUNTAR DANIEL QUE INFO)
    public addReserve(driverId, name, lastname, car, dest, or, note, price, currentHour, startHour, geofireKey, type){
        this.afDB.database.ref('/reserves/'+ driverId).push({
            name:name,
            lastname:lastname,
            car:car,
            destination:dest,
            origin:or,
            note:note,
            price:price,
            currentHour:currentHour,
            startHour:startHour,
            geofireKey: geofireKey,
            type: type,
            // driver:driver

        }).then((snap)=>{
            const key = snap.key;
            this.afDB.database.ref('/reserves/'+ driverId + '/' + key).update({
                keyTrip: key 
            })
            this.afDB.database.ref('/drivers/' + driverId).update({
                keyLastReserve: key
            })
            console.log(' keylastreserve');
        })
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

    public eliminateOnTripUser(userId){
        this.afDB.database.ref('/users/'+ userId + '/trips' ).update({
            onTrip:false
        });
    }

    public pushOnTripFinalUser(university, userId){
        this.afDB.database.ref(university + '/users/'+ userId ).update({
            onTripFinal: true
        });
    }


    public eliminatePickingUsers(DriverUid,userId){
      

               //eliminate the user from pickingUsers
        this.afDB.database.ref('/drivers/'+ DriverUid +'/trips/pickingUsers/'+ userId).remove();
    }

    public eliminatePickingUsersUser(userId){
 this.afDB.database.ref('/users/'+ userId + '/trips/pickingUsers').remove();
}

    sumTotal(trip,total){
      total = total + trip;
    
      }
 
}

