import { Component} from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, ToastController, IonicPage, AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.service';
import { sendCoordsService } from '../../services/sendCoords.service';
// import { RidetodayPage } from '../ridetoday/ridetoday';
// import { MyridePage } from '../myride/myride';
// import { TabsPage } from '../tabs/tabs';
import { sendUsersService } from '../../services/sendUsers.service';
import { geofireService } from '../../services/geofire.services';
import { instancesService } from '../../services/instances.service';
import { Subject } from 'rxjs';


@IonicPage()

@Component({
	selector: 'page-confirmpopup',
	templateUrl: 'confirmpopup.html'
})
export class ConfirmpopupPage {
  

  user:any;
  userDriver:any ;
  locationOrigin:any =[];
  locationDestination:any =[];
  userDriverUid=this.AngularFireAuth.auth.currentUser.uid
  accepted: any;
  infoUser:any = {};
  unsubscribe = new Subject;
  pickingUsers:any =  [];
  pickedUpUsers:any = [];
  constructor(public navCtrl: NavController,public sendUsersService: sendUsersService, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, public geoFireService: geofireService, public instances: instancesService, public toastCtrl: ToastController, public alertCtrl: AlertController ) {
      //we get the info of the users with navParams
      this.user= this.navParams.get('user') 
      console.log(this.user)
  
         //get origin from driver
      this.sendCoordsService.getOrigin(this.userDriverUid).takeUntil(this.unsubscribe)
      .subscribe( origin => {
        this.locationOrigin = origin;
      })
         //get destination from driver
      this.sendCoordsService.getDestination(this.userDriverUid).takeUntil(this.unsubscribe)
        .subscribe( destination => {
          this.locationDestination = destination;
		})
		
		this.SignUpService.getMyInfoDriver(this.userDriverUid).takeUntil(this.unsubscribe)
		.subscribe(userDriver => {
			this.userDriver = userDriver;
			this.pickingUsers = this.userDriver.trips.pickingUsers;
			this.pickedUpUsers = this.userDriver.trips.pickedUpUsers;

		});
		
   
    }

	acceptUser() {
	if(this.userDriver.trips.pickingUsers){

		if(this.userDriver.trips.pickedUpUsers){


			if(Object.keys(this.pickingUsers).length + Object.keys(this.pickedUpUsers).length >= 4){


				this.sendUsersService.removeUsersOnListRideTotal(this.userDriverUid);
				// this.geoFireService.cancelGeoqueryDest();
				// this.geoFireService.cancelGeoqueryOr();
				const alert = this.alertCtrl.create({
					title: 'limite de estudiantes permitido',
					subTitle: 'ya recogiste o aceptaste más de 4 personas. Este es el limite de personas para cada viaje',
					buttons: ['OK']
				  });
				  alert.present();

				this.instances.turnOntripUsersFalse(this.user.userId);
			}else{


				console.log('before delete')
				// this.sendUsersService.removeUsersOnListRide(this.userDriverUid, this.user.userId);
				console.log('after delete')
				this.sendUsersService.pushPickingUpUsersOnDrivers(this.userDriverUid, this.user.userId, this.user.origin, this.user.destination, this.user.name, this.user.lastname, this.user.phone, this.user.about);
				this.sendUsersService.pushDriverOnUsers(this.userDriverUid, this.user.userId, this.locationOrigin, this.locationDestination, this.userDriver.name, this.userDriver.lastname, this.userDriver.phone,this.userDriver.trips.price,this.userDriver.trips.car, this.userDriver.about);
					this.geoFireService.deleteUserListRide(this.userDriverUid, this.user.userId);
					this.geoFireService.deleteUserListRide(this.userDriverUid, this.user.userId);
		
					this.instances.turnOntripUsers(this.user.userId);
			//   this.sendUsersService.removeUsersOnListRide(this.userDriverUid, this.user.userId);
			  this.instances.turnOntripUsers(this.user.userId);
			  this.accepted = true;
			  this.dismiss();
				const toast = this.toastCtrl.create({
					message: `¡Haz aceptado a ${this.user.name} en tu viaje!, Acepta otros compañeros y dirigete a Viajes para encontrar su dirección`,
					duration: 4500,
					position: 'middle'
				});
				toast.present();
			}
		}else if(Object.keys(this.pickingUsers).length >= 4){


			this.sendUsersService.removeUsersOnListRideTotal(this.userDriverUid);
				// this.geoFireService.cancelGeoqueryDest();
				// this.geoFireService.cancelGeoqueryOr();
				const alert = this.alertCtrl.create({
					title: 'limite de estudiantes permitido',
					subTitle: 'ya recogiste o aceptaste más de 4 personas. Este es el limite de personas para cada viaje',
					buttons: ['OK']
				  });
				  alert.present();
				  this.instances.turnOntripUsersFalse(this.user.userId);

			
		}else{
			console.log('before delete')
				// this.sendUsersService.removeUsersOnListRide(this.userDriverUid, this.user.userId);
				console.log('after delete')
				this.sendUsersService.pushPickingUpUsersOnDrivers(this.userDriverUid, this.user.userId, this.user.origin, this.user.destination, this.user.name, this.user.lastname, this.user.phone, this.user.about);
				this.sendUsersService.pushDriverOnUsers(this.userDriverUid, this.user.userId, this.locationOrigin, this.locationDestination, this.userDriver.name, this.userDriver.lastname, this.userDriver.phone,this.userDriver.trips.price,this.userDriver.trips.car,this.userDriver.about);
					this.geoFireService.deleteUserListRide(this.userDriverUid, this.user.userId);
					this.geoFireService.deleteUserListRide(this.userDriverUid, this.user.userId);
		
					this.instances.turnOntripUsers(this.user.userId);
			//   this.sendUsersService.removeUsersOnListRide(this.userDriverUid, this.user.userId);
			  this.instances.turnOntripUsers(this.user.userId);
			  this.accepted = true;
			  this.dismiss();
				const toast = this.toastCtrl.create({
					message: `¡Haz aceptado a ${this.user.name} en tu viaje!, Acepta otros compañeros y dirigete a Viajes para encontrar su dirección`,
					duration: 4500,
					position: 'middle'
				});
				toast.present();
		}
	}else{
		console.log('g');

		console.log('before delete')
			// this.sendUsersService.removeUsersOnListRide(this.userDriverUid, this.user.userId);
			console.log('after delete')
			this.sendUsersService.pushPickingUpUsersOnDrivers(this.userDriverUid, this.user.userId, this.user.origin, this.user.destination, this.user.name, this.user.lastname, this.user.phone, this.user.about);
			this.sendUsersService.pushDriverOnUsers(this.userDriverUid, this.user.userId, this.locationOrigin, this.locationDestination, this.userDriver.name, this.userDriver.lastname, this.userDriver.phone,this.userDriver.trips.price,this.userDriver.trips.car, this.userDriver.about);
				this.geoFireService.deleteUserListRide(this.userDriverUid, this.user.userId);
				this.geoFireService.deleteUserListRide(this.userDriverUid, this.user.userId);
	
				this.instances.turnOntripUsers(this.user.userId);
		//   this.sendUsersService.removeUsersOnListRide(this.userDriverUid, this.user.userId);
		  this.instances.turnOntripUsers(this.user.userId);
		  this.accepted = true;
		  this.dismiss();
			const toast = this.toastCtrl.create({
				message: `¡Haz aceptado a ${this.user.name} en tu viaje!, Acepta otros compañeros y dirigete a Viajes para encontrar su dirección`,
				duration: 4500,
				position: 'middle'
			});
			toast.present();
	}

 }
  

	dismiss() {
		console.log('deleted on click')
		this.viewCtrl.dismiss(this.accepted);
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
}
