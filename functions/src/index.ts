import * as functions from 'firebase-functions';
import * as admin from  'firebase-admin';
admin.initializeApp(functions.config().firebase);


exports.newUserInReserve = functions.database.ref(`/{university}/reserves/{userId}/{reserveKey}/pendingUsers/{passengerId}`).onCreate((snap, context) =>{
    const university = context.params.university;
    const userId = context.params.userId;

    return admin.database().ref(`/${university}/drivers/${userId}/devices/token`).once('value').then(snapshot => snapshot.val()).then(device => {
         const deviceToken = device
         console.log(deviceToken)

 
         const notificationContent = {
            notification: {
                title: '¡Tienes un nuevo compañero!',
                body: `Alguien se ha unido a uno de tus viajes, haz click y checkea quién es en 'Mis Viajes!'`
            }
        }
 
         return admin.messaging().sendToDevice(deviceToken, notificationContent)
 
 
     })


})


exports.newMessageInReserve = functions.database.ref(`/{university}/reserves/{userId}/{reserveKey}/chat/messages/{messageId}`).onCreate((snap, context) =>{
    const university = context.params.university;
    const userId = context.params.userId;
    return admin.database().ref(`/${university}/drivers/${userId}/devices/token`).once('value').then(snapshot => snapshot.val()).then(device => {
         const deviceToken = device
         console.log(deviceToken)

 
         const notificationContent = {
            notification: {
                title: 'Nuevo mensaje',
                body: `Te ha llegado un mensaje en uno de tus viajes`
            }
        }
 
         return admin.messaging().sendToDevice(deviceToken, notificationContent)
 
 
     })


})


exports.newMessageInTrips = functions.database.ref(`/{university}/trips/{userId}/{reserveKey}/chat/messages/{messageId}`).onCreate((snap, context) =>{
    const university = context.params.university;
    const userId = context.params.userId;
    return admin.database().ref(`/${university}/drivers/${userId}/devices/token`).once('value').then(snapshot => snapshot.val()).then(device => {
         const deviceToken = device
         console.log(deviceToken)

 
         const notificationContent = {
            notification: {
                title: 'Nuevo mensaje',
                body: `Te ha llegado un mensaje en tu viaje en curso`
            }
        }
 
         return admin.messaging().sendToDevice(deviceToken, notificationContent)
 
 
     })


})




exports.newLMU = functions.database.ref(`/{university}/trips/{userId}/{reserveKey}/lastMinuteUsers/{passengerId}`).onCreate((snap, context) =>{
    const university = context.params.university;
    const userId = context.params.userId;
    return admin.database().ref(`/${university}/drivers/${userId}/devices/token`).once('value').then(snapshot => snapshot.val()).then(device => {
         const deviceToken = device
         console.log(deviceToken)

 
         const notificationContent = {
            notification: {
                title: 'Viaje de último minuto',
                body: `Alguien quiere compartir el viaje contigo a última minuto, acéptalo o rechazalo`
            }
        }
 
         return admin.messaging().sendToDevice(deviceToken, notificationContent)
 
 
     })


})


exports.newMessageInReserveUser = functions.database.ref(`/{university}/reserves/{userId}/{reserveKey}/chat/messages/{messageId}`).onCreate((snap, context) =>{
    const university = context.params.university;
    const userId = context.params.userId;

    return admin.database().ref(`/${university}/users/${userId}/devices/token`).once('value').then(snapshot => snapshot.val()).then(device => {
         const deviceToken = device
         console.log(deviceToken)

 
         const notificationContent = {
            notification: {
                title: 'Nuevo mensaje',
                body: `Te ha llegado un mensaje en uno de tus viajes`
            }
        }
 
         return admin.messaging().sendToDevice(deviceToken, notificationContent)
 
 
     })


})



exports.newMessageInTripsUser = functions.database.ref(`/{university}/trips/{userId}/{reserveKey}/chat/messages/{messageId}`).onCreate((snap, context) =>{
    const university = context.params.university;
    const userId = context.params.userId;

    return admin.database().ref(`/${university}/users/${userId}/devices/token`).once('value').then(snapshot => snapshot.val()).then(device => {
         const deviceToken = device
         console.log(deviceToken)

 
         const notificationContent = {
            notification: {
                title: 'Nuevo mensaje',
                body: `Te ha llegado un mensaje en tu viaje en curso`
            }
        }
 
         return admin.messaging().sendToDevice(deviceToken, notificationContent)
 
 
     })


})


exports.onTripMessage = functions.database.ref(`/{university}/users/{userId}/onTrip/`).onCreate((snap, context) =>{
    const university = context.params.university;
    const userId = context.params.userId;

    return admin.database().ref(`/${university}/users/${userId}/devices/token`).once('value').then(snapshot => snapshot.val()).then(device => {
         const deviceToken = device
         console.log(deviceToken)

 
         const notificationContent = {
            notification: {
                title: '¡ya estás en viaje!',
                body: `en breve estarán yendo por ti, comunícate con el pooler de este viaje`
            }
        }
 
         return admin.messaging().sendToDevice(deviceToken, notificationContent)
 
 
     })


})
