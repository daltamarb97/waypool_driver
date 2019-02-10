import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

@Injectable()
export class instancesService {

constructor(public afDB: AngularFireDatabase){
              
    }
    
public turnOntripUsers(user){
    this.afDB.database.ref('users/' + user + '/trips/').update({
        onTrip: true
    }, (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("everything successful");
        }
    })
} 

public turnOntripUsersListRide(driverId, user){
    this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + user).update({
        onTrip: true
    }, (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("everything successful");
        }
    })
} 

public stopShowingOnDriver(driverId, user){
    this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + user).update({
        showDriver: false
    }, (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("everything successful");
        }
    })
}  

}

