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
        

