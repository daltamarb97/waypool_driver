import { Component} from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, ToastController, IonicPage, AlertController, App, ActionSheetController} from 'ionic-angular';
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
import { TripsService } from '../../services/trips.service';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()

@Component({
	selector: 'page-detailsreserve',
	templateUrl: 'detailsreserve.html'
})
export class DetailsReservePage {
  
 
	reserveKey:any;
	reserve:any;
  	userDriver:any ;
  	userUid=this.AngularFireAuth.auth.currentUser.uid
	accepted: boolean;
	infoUser:any = {};
	unsubscribe = new Subject;
	reserves:any = [];
	passengers: any =[];
  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController,public TripsService:TripsService, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, public geoFireService: geofireService, public instances: instancesService, public toastCtrl: ToastController, public alertCtrl: AlertController, public app: App, private afDB: AngularFireDatabase ) {
	
      this.reserveKey= this.navParams.get('reserveKey') 
console.log(this.reserveKey)

  

      this.sendCoordsService.getPendingUsers(this.SignUpService.userPlace,  this.userUid,this.reserveKey).takeUntil(this.unsubscribe)
        .subscribe( users => {
			this.passengers = users;			
			console.log(this.passengers);
		})	
   
}
ionViewDidLeave(){
    this.unsubscribe.next();
     this.unsubscribe.complete();
  }
		

		 showProfilePassegner(passenger){
			this.app.getRootNav().push('PublicProfilePage', {passenger: passenger});
			this.accepted = true;
			this.dismiss();
 		}
  
		 cancelReserve(){
			this.geoFireService.deleteUserGeofireDest(this.SignUpService.userPlace, this.reserveKey);
			this.geoFireService.deleteUserGeofireOr(this.SignUpService.userPlace, this.reserveKey);
			this.passengers.forEach(user => {
				this.afDB.database.ref(this.SignUpService.userPlace + '/users/'+user.userId+'/myReserves/'+ this.reserveKey).remove();
			});

			this.TripsService.cancelReserve(this.SignUpService.userPlace, this.userUid,this.reserveKey);
			this.dismiss();
		  }

		  presentActionSheet(userId,nameUser) {
			const actionSheet = this.actionSheetCtrl.create({
			  title: 'Opciones',
			  buttons: [
				{
				  text: 'Cancelar Usuario',
				  role: 'destructive',
				  handler: () => {
					  this.deleteUser(userId,nameUser)
					  }
				},
				{
				  text: 'Cancel',
				  role: 'cancel',
				  handler: () => {
					console.log('Cancel clicked');
				  }
				}
			  ]
			});
			actionSheet.present();
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
							this.afDB.database.ref(this.SignUpService.userPlace + '/users/'+userId+'/myReserves/'+ this.reserveKey).remove().then(()=>{
								console.log('se borro user con 3 puntos');
								
							}).catch((error)=>{
								console.log('hubo este esrror: ' + error);
								
							})
							this.sendCoordsService.eraseUser(this.SignUpService.userPlace, userId,this.userUid,this.reserveKey );
							this.navCtrl.setRoot('FindridePage');
							this.presentToast(`Haz eliminado a ${nameUser} de tu viaje`, 3000, 'bottom')
						 
						}
					}
				]
			});
			alert.present();
		}
		presentToast(message: string, duration, position: string) {
			const toast = this.toastCtrl.create({
				message: message,
				duration: duration,
				position: position
			});
			toast.present();
		}
	dismiss() {
		console.log('deleted on click')
		this.viewCtrl.dismiss(this.accepted);
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
}
