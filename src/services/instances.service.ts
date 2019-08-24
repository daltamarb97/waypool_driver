import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

@Injectable()
export class instancesService {

constructor(public afDB: AngularFireDatabase){
              
    }
    
public turnOntripUsers(university, user){
    this.afDB.database.ref(university + 'users/' + user + '/trips/').update({
        onTrip: true
    }, (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("everything successful");
        }
    })
} 

public turnOntripUsersFalse(university, user){
    this.afDB.database.ref(university + 'users/' + user + '/trips/').update({
        onTrip: false
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

public noDriversAvailableInstance(userId){
    this.afDB.database.ref('/drivers/' + userId).update({
        noUsersMessage: true
    })
}

public noDriversAvailableInstanceDelete(userId){
    this.afDB.database.ref('/drivers/' + userId).update({
        noUsersMessage: false
    })
}

public clickedDirectionMessage(userId){
    this.afDB.database.ref('/drivers/' + userId).update({
        clickedDirection: true
    })
}

public clickedDirectionMessageCancel(userId){
    this.afDB.database.ref('/drivers/' + userId).update({
        clickedDirection: false
    })
}


public isVerifiedPerson (university, userId){
    this.afDB.database.ref(university + '/drivers/' + userId).update({
        verifiedPerson: true
    })
}

}

