import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, IonicPage, App, ModalController } from 'ionic-angular';


import { TabsPage } from '../tabs/tabs';
import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { sendUsersService } from '../../services/sendUsers.service';


import { CallNumber } from '@ionic-native/call-number';
import { geofireService } from '../../services/geofire.services';
import { SignUpService } from '../../services/signup.service';
import * as moment from 'moment';
import { TripsService } from '../../services/trips.service';
import { ThrowStmt } from '@angular/compiler';
import { Subject } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-myride',
  templateUrl: 'myride.html'
})
export class MyridePage {

 hideImage:boolean = false;

 pendingUsers:any = [];
 pickedUpUsers:any = [];

ride: string = "today";
trip:any;
driverUid=this.AngularFireAuth.auth.currentUser.uid;

userInfo;
userDriver:any;
unsubscribe = new Subject;
lastMinuteUsers:any =[];
tripState:any;

  constructor(public navCtrl: NavController,public SignUpService:SignUpService,public TripsService:TripsService,public modalCtrl: ModalController,public toastCtrl: ToastController,public alertCtrl:AlertController,public navParams: NavParams,private callNumber: CallNumber,public sendCoordsService: sendCoordsService,private AngularFireAuth: AngularFireAuth, public sendUsersService: sendUsersService, public geofireServices: geofireService) {
		//get driver information to get the keyTrip
		this.SignUpService.getMyInfoDriver(this.SignUpService.userUniversity, this.driverUid).takeUntil(this.unsubscribe)
			.subscribe(userDriver => {
				this.userDriver = userDriver;
				if (this.userDriver.keyTrip === null || this.userDriver.onTrip === false) {
					//do nothing
					console.log("que dijiste corone");
					console.log(this.userDriver.keyTrip);
				} else {
					this.getTrip( this.userDriver.keyTrip, this.userDriver.userId); //get keyTrip  
					// corregir esta vuelta, no debiera estar ontrip true
				}
				
			});


	}

	getLastMinuteUsers(keyTrip, driverUid) {
		// this.lastMinuteUsers = [];
		console.log(this.lastMinuteUsers)
		console.log("1")

		this.TripsService.getLastMinuteUsers(this.SignUpService.userUniversity, keyTrip,driverUid).takeUntil(this.unsubscribe)
			.subscribe(users => {
				this.lastMinuteUsers = users;
				//verify if user info exist 
				console.log(this.lastMinuteUsers)
				console.log("2")

				if (this.lastMinuteUsers.length === 0) {
					// do nothing
				} else {					
					this.lastMinuteUsers.forEach(userLastMinute => {
						if(userLastMinute.noRepeat === true){
							console.log("TE QUERIAS REPETIR PERO NOOOOO")

						}else{
							this.TripsService.noRepeatLMU(this.SignUpService.userUniversity, this.driverUid,keyTrip,userLastMinute.userId)
							console.log(userLastMinute);
							console.log(this.lastMinuteUsers)
							console.log("3")
	
							let modal = this.modalCtrl.create('ConfirmtripPage', {
								user: userLastMinute,
							
							});
							modal.present();
						}
						
					});				
				}
			});			
	}
	getTrip( keyTrip, driverUid) {
		// this.getLastMinuteUsers(this.userDriver.keyTrip, this.userDriver.userId);
		this.getLastMinuteUsers(keyTrip, driverUid);
		this.TripsService.getTrip(this.SignUpService.userUniversity, keyTrip, driverUid).takeUntil(this.unsubscribe)
			.subscribe(trip => {
        console.log('se repitio?')
			
				this.trip = trip;
				if (this.trip === undefined || this.trip === null) {
					console.log(this.trip);
					console.log("ARMAGEDON")
					this.conditionalsOnTrip();
				} else {
				// after getting trip from node, get pending and pickedUp arrays
					this.getPendingAndPickedUpUsers( keyTrip, driverUid);
				}

			});

	}
	
	getPendingAndPickedUpUsers(keyTrip, driverUid) {

		this.TripsService.getPendingUsers(this.SignUpService.userUniversity, keyTrip, driverUid).takeUntil(this.unsubscribe)
			.subscribe(user => {
				this.pendingUsers = user;
				console.log(this.pendingUsers);
				this.conditionalsOnTrip();

			});
		this.TripsService.getPickedUpUsers(this.SignUpService.userUniversity, keyTrip, driverUid).takeUntil(this.unsubscribe)
			.subscribe(user => {
				this.pickedUpUsers = user;
				console.log(this.pickedUpUsers);
				this.conditionalsOnTrip();

			});

		      
	}

	 conditionalsOnTrip(){
		 console.log("sirvio")
		if (this.trip.pendingUsers === undefined && this.trip.pickedUpUsers === undefined && this.trip.cancelUsers === undefined) {
			// erase trip because driver decide to cancel
			this.unSubscribeServices();
			this.TripsService.eraseKeyTrip(this.SignUpService.userUniversity,this.driverUid);
			this.TripsService.setOnTripFalse(this.SignUpService.userUniversity,this.driverUid);
			this.navCtrl.pop();
			this.TripsService.endTrip(this.SignUpService.userUniversity, this.userDriver.keyTrip, this.driverUid);
		
			// this.navCtrl.setRoot(this.navCtrl.getActive().component);
			let modal = this.modalCtrl.create('CanceltripPage');
			modal.present();
			console.log("me reproduci 1")

      
    }
		if (this.trip.pendingUsers === undefined && this.trip.pickedUpUsers === undefined && this.trip.cancelUsers !== undefined) {
		// erase trip because there is no one to picked Up
		this.unSubscribeServices();

		this.TripsService.eraseKeyTrip(this.SignUpService.userUniversity,this.driverUid);
		this.TripsService.setOnTripFalse(this.SignUpService.userUniversity,this.driverUid);
		this.TripsService.endTrip(this.SignUpService.userUniversity,this.userDriver.keyTrip, this.driverUid);

		this.navCtrl.pop();
		console.log("me reproduci 2")

		let modal = this.modalCtrl.create('CanceltripPage');
		modal.present();

		}     
	 }
	callUser(number) {
		this.callNumber.callNumber(number, true)
			.then(res => console.log('Launched dialer!', res))
			.catch((err) => {
				const alert = this.alertCtrl.create({
					title: 'error de llamada',
					subTitle: 'hubo un error en la llamada, si persiste el problema envíanos un correo a waypooltec@gmail.com',
					buttons: ['OK']
				});
				alert.present();
				console.log('Error launching dialer', err)
			});
	}
	unSubscribeServices(){
		this.unsubscribe.next();
		this.unsubscribe.complete();
	  }   

	goToRide(user) {
		this.navCtrl.push('PickupPage', {
			user: user,
			keyTrip: this.userDriver.keyTrip
		});
	}
	
	endTrip() {

		// se cambiara a finalizar viaje
		if (this.pendingUsers.length == 0 && this.pickedUpUsers.length !== 0) {
			let alert = this.alertCtrl.create({
				title: 'Finalizar Viaje',
				message: `¿Estas seguro que deseas finalizar tu viaje?`,
				buttons: [{
						text: 'Cancelar',
						role: 'cancel',
						handler: () => {

						}
					},
					{
						text: 'Si',
						handler: () => {

							moment.locale('es'); //to make the date be in spanish  

							// this.geofireServices.cancelGeoqueryOr()

							// this.geofireServices.cancelGeoqueryDest()

							let today = moment().format('MMMM Do YYYY, h:mm:ss a'); //set actual date
							this.TripsService.timeFinishedTrip(this.SignUpService.userUniversity,this.userDriver.keyTrip, this.driverUid, today);
							console.log(this.trip)
							// this.TripsService.saveTripOnRecords(this.SignUpService.userUniversity,this.driverUid, this.trip);
							console.log("praise the sun")
							console.log(this.trip)
							

							console.log(this.trip)
							this.TripsService.saveTripUser(this.SignUpService.userUniversity,this.driverUid, this.userDriver.keyTrip);

							setTimeout(() => {
								this.unSubscribeServices();
							this.geofireServices.deleteUserGeofireOrTrip(this.SignUpService.userUniversity, this.userDriver.keyTrip);
							this.geofireServices.deleteUserGeofireDestTrip(this.SignUpService.userUniversity, this.userDriver.keyTrip);
							this.pickedUpUsers.forEach(user => {
								this.TripsService.endTripForUsers(this.SignUpService.userUniversity,user.userId);
							});
							this.TripsService.saveTripOnRecords(this.SignUpService.userUniversity,this.driverUid, this.trip);

							this.TripsService.endTrip(this.SignUpService.userUniversity, this.userDriver.keyTrip, this.driverUid);
							this.TripsService.eraseKeyTrip(this.SignUpService.userUniversity,this.driverUid);
							
							this.TripsService.setOnTripFalse(this.SignUpService.userUniversity,this.driverUid);
							}, 1000);

							//TO-DO: AQUI FALTA RATETRIPPAGE
							this.navCtrl.pop();
							this.navCtrl.push('RatetripPage',{user:this.userDriver, trip:this.trip});
						}
					}
				]
			})
			alert.present();

		} else {
			this.presentAlert('Viaje Incompleto', 'Por favor termina de recoger a todos los usuarios o cancélalos', 'Ok');
		}


	}

	presentToast(message: string, duration, position: string) {
		const toast = this.toastCtrl.create({
			message: message,
			duration: duration,
			position: position
		});
		toast.present();
	}
	presentAlert(title: string, text: string, button: string) {
		let alert = this.alertCtrl.create({
			title: title,
			subTitle: text,
			buttons: [button]
		});
		alert.present();
	}
	deleteUser(userId, nameUser) {

		let alert = this.alertCtrl.create({
			title: 'Eliminar Usuario',
			message: `¿Estas que deseas eliminar a este a ${nameUser} de tu viaje?,borrar muchos usuarios por día/semana esta en contra de nuestras políticas`,
			buttons: [{
					text: 'Cancelar',
					role: 'cancel',
					handler: () => {

					}
				},
				{
					text: 'Eliminar',
					handler: () => {
						this.TripsService.cancelUserFromTrip(this.SignUpService.userUniversity, this.driverUid, this.trip.keyTrip, userId);
						this.presentToast(`Haz eliminado a ${nameUser} de tu viaje`, 3000, 'bottom')
					 
					}
				}
			]
		});
		alert.present();
	}
	help() {
		const toast = this.toastCtrl.create({
			message: 'En esta página podrás recoger, llamar, chatear (próximamente), a los compañeros que hayas escogido',
			showCloseButton: true,
			closeButtonText: 'OK',
			position: 'top'
		});
		toast.present();
	}

	
}
