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
                body: `Un estudiante se ha unido a tu reserva, haz click y checkea quien es!`
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
                body: `Te ha llegado un mensaje en una de tus reservas`
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
                body: `Te ha llegado un mensaje en tu viaje`
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
                title: 'Nuevo Usuario',
                body: `Alguien quiere compartir el viaje contigo a última hora, aceptalo o recházalo`
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
                body: `Te ha llegado un mensaje en tu viaje`
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
                body: `Te ha llegado un mensaje en tu viaje`
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
                body: `el driver de la reserva en la que estas ya inició el viaje`
            }
        }
 
         return admin.messaging().sendToDevice(deviceToken, notificationContent)
 
 
     })


})

