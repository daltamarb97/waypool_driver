import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class MetricsService {
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){
    }


    public createdReserves(place, driverUid,keyReserve,driver,car,destination,origin,note,precio,startHour,typeOfReserve){
    //send every reserve that were created
    this.afDB.database.ref('data/allReservesCreated/'+place).push({
        driver: driver,
        car:car,
        destination:destination,
        origin:origin,
        note: note,
        price:precio,
        startHour:startHour,
        type: typeOfReserve,
        place:place

      });

   }   
   public tripsInitiated(place, driverUid,keyTrip,trip){
    //send every trip that were initiated
  this.afDB.database.ref('data/allTripsInitiated/'+place).push(trip);

    } 

     }

     
