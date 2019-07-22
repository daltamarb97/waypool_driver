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
onTrip:boolean = false;
unsubscribe:any;
lastMinuteUsers:any =[];
  constructor(public navCtrl: NavController,public SignUpService:SignUpService,public TripsService:TripsService,public modalCtrl: ModalController,public toastCtrl: ToastController,public alertCtrl:AlertController,public navParams: NavParams,private callNumber: CallNumber,public sendCoordsService: sendCoordsService,private AngularFireAuth: AngularFireAuth, public sendUsersService: sendUsersService, public geofireServices: geofireService) {
  	console.log(this.onTrip)
		//get driver information to get the keyTrip
		this.SignUpService.getMyInfoDriver(this.driverUid)
			.subscribe(userDriver => {
				this.userDriver = userDriver;
				if (this.userDriver.keyTrip === null) {
					//do nothing
					console.log("que dijiste corone")
					console.log(this.userDriver.keyTrip)
				} else {
					this.getTrip(this.userDriver.keyTrip, this.userDriver.userId); //get keyTrip  
					this.getLastMinuteUsers(this.userDriver.keyTrip, this.userDriver.userId);
					// corregir esta vuelta, no debiera estar ontrip true
				}

			});


	}
	getLastMinuteUsers(keyTrip, driverUid) {
		this.TripsService.getLastMinuteUsers(keyTrip, driverUid)
			.subscribe(user => {
				this.lastMinuteUsers = user;
				//verify if user info exist 
				if (this.lastMinuteUsers.length === 0) {
					// do nothing
				} else {
					this.lastMinuteUsers.forEach(userLastMinute => {
						console.log(userLastMinute);
						let modal = this.modalCtrl.create('ConfirmtripPage', {
							user: userLastMinute
						});
						modal.present();
					});
				}

			});
	}
	getTrip(keyTrip, driverUid) {
		this.TripsService.getTrip(keyTrip, driverUid)
			.subscribe(trip => {
        console.log(this.onTrip)

				this.trip = trip;
				if (this.trip === undefined || this.trip === null) {
					this.onTrip = false;
				} else {
					this.onTrip = true;
					this.getPendingAndPickedUpUsers(keyTrip, driverUid);
				}
				// after getting trip from node, get pending and pickedUp arrays


				console.log(this.trip);


			});

	}
	getPendingAndPickedUpUsers(keyTrip, driverUid) {
		this.TripsService.getPendingUsers(keyTrip, driverUid)
			.subscribe(user => {
				this.pendingUsers = user;
				console.log(this.pendingUsers);
			});
		this.TripsService.getPickedUpUsers(keyTrip, driverUid)
			.subscribe(user => {
				this.pickedUpUsers = user;
				console.log(this.pickedUpUsers);
			});

		if (this.trip.pendingUsers === undefined && this.trip.pickedUpUsers === undefined && this.trip.cancelUsers === undefined) {
			// erase trip because there is no one to picked Up
			this.onTrip = false;
			this.TripsService.endTrip(this.userDriver.keyTrip, this.driverUid);
			this.TripsService.eraseKeyTrip(this.driverUid);
			this.TripsService.setOnTripFalse(this.driverUid);
			this.navCtrl.setRoot(this.navCtrl.getActive().component);
      this.presentToast(' tu compañero te ha cancelado el viaje', 5000, 'middle');
      
    }
    if (this.trip.pendingUsers === undefined && this.trip.pickedUpUsers === undefined && this.trip.cancelUsers !== undefined) {
      // erase trip because there is no one to picked Up
      this.TripsService.endTrip(this.userDriver.keyTrip, this.driverUid);
      this.onTrip = false;
      this.TripsService.eraseKeyTrip(this.driverUid);
      this.TripsService.setOnTripFalse(this.driverUid);
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
      this.onTrip = false;
      console.log(this.onTrip)

    } else {
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
				title: 'Ir a mi destino',
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

							this.onTrip = false;

							moment.locale('es'); //to make the date be in spanish  

							// this.geofireServices.cancelGeoqueryOr()

							// this.geofireServices.cancelGeoqueryDest()


							let today = moment().format('MMMM Do YYYY, h:mm:ss a'); //set actual date

							this.TripsService.timeFinishedTrip(this.userDriver.keyTrip, this.driverUid, today);
							this.TripsService.saveTripUser(this.driverUid, this.userDriver.keyTrip)


							this.TripsService.saveTripOnRecords(this.driverUid, this.trip);
							this.TripsService.endTrip(this.userDriver.keyTrip, this.driverUid);
							this.TripsService.eraseKeyTrip(this.driverUid);
							this.TripsService.setOnTripFalse(this.driverUid);
							this.navCtrl.setRoot(this.navCtrl.getActive().component);
							this.presentToast('Haz finalizado el viaje, ¡esperamos verte pronto!', 5000, 'middle')
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
    console.log(this.onTrip)

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
						this.TripsService.cancelUserFromTrip(this.driverUid, this.trip.keyTrip, userId);
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

	// ionViewDidLeave(){
	//   this.unsubscribe.next();
	//   this.unsubscribe.complete();
	// }
}
