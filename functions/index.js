const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);



const twilio = require('twilio');
const accountSid = functions.config().twilio.sid 
const authToken = functions.config().twilio.token


const client = new twilio(accountSid, authToken);
const twilioNumber = '+13255154478'


function validE164(num){
    return /^\+?[1-9]\d{1,14}$/.test(num)
}










exports.sendCodeToUserCreated = functions.database.ref(`/uninorte/drivers/{userId}`).onCreate(event =>{
    const userId = event._data.userId;
    return admin.database().ref(`/uninorte/drivers/${userId}`).once('value').then(snap => snap.val()).then(driver =>{
        const phoneNumber = driver.phone
        if(!validE164(phoneNumber)){
            throw new Error('number is in incorrect format')
        }

        const infoOfSMS = {
            to: phoneNumber,
            channel: 'sms'
        }

        return client.verify.services('VA8ff48292f53b52d13635dda53d946922').verifications.create(infoOfSMS)
    })
    .then(verification => console.log(verification.sid, 'success'))
    .catch(error => console.log(error))
})






exports.verifyProvidedCode = functions.database.ref(`/uninorte/drivers/{userId}`).onUpdate( event =>{

    const userId = event.after._data.userId
    return admin.database().ref(`/uninorte/drivers/${userId}`).once('value').then(snap => snap.val()).then(driver => {
        const verificationCode = driver.verificationCode
        const phone = driver.phone

        if(!validE164(phone)){
            throw new Error('number is in incorrect format')
        }

        const infoReceived ={
            to: phone,
            code: verificationCode
        }

        return client.verify.services('VA8ff48292f53b52d13635dda53d946922').verificationChecks.create(infoReceived)
         .then(verification_check => {
            console.log(verification_check.status)
            if(verification_check.status === 'approved'){
                return event.after.ref.child('verificationCodeApproval').set(true);
            }else{
                return event.after.ref.child('verificationCodeApproval').set(false);
            }
        
        })
        .catch(error => console.log(error))
    })

})






exports.resendVerificationCode = functions.database.ref(`/uninorte/drivers/{userId}/`).onUpdate( event =>{

    const userId = event.after._data.userId
    return admin.database().ref(`/uninorte/drivers/${userId}`).once('value').then(snap => snap.val()).then(driver => {
        const resendVerificationCode = driver.resendVerificationCode
        const phone = driver.phone

        if(!validE164(phone)){
            throw new Error('number is in incorrect format')
        }

        const infoReceived ={
            to: phone,
            channel: 'sms'
        }
        if(resendVerificationCode === true){
            return client.verify.services('VA8ff48292f53b52d13635dda53d946922').verifications.create(infoReceived)
        }
        return null;

    })
    .then(verification => console.log(verification.sid, 'success'))
    .catch(error => console.log(error))

})




