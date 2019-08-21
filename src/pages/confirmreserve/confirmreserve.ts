import { Component} from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, ToastController, IonicPage, AlertController, App} from 'ionic-angular';
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


@IonicPage()

@Component({
	selector: 'page-confirmreserve',
	templateUrl: 'confirmreserve.html'
})
export class ConfirmreservationPage {
  

	reserveKey:any;
	reserve:any;
  	userDriver:any ;
  	userUid=this.AngularFireAuth.auth.currentUser.uid
	accepted: boolean;
	infoUser:any = {};
	unsubscribe = new Subject;
	reserves:any = [];
	passengers: any =[];
  constructor(public navCtrl: NavController,public TripsService:TripsService, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, public geoFireService: geofireService, public instances: instancesService, public toastCtrl: ToastController, public alertCtrl: AlertController, public app: App ) {
	
      this.reserveKey= this.navParams.get('reserveKey') 
console.log(this.reserveKey)

  

      this.sendCoordsService.getPendingUsers(this.SignUpService.userUniversity,  this.userUid,this.reserveKey).takeUntil(this.unsubscribe)
        .subscribe( users => {
			this.passengers = users;			
			console.log(this.passengers);
		})	
   
}

		deleteUser(userId) {
		this.sendCoordsService.eraseUser(this.SignUpService.userUniversity, userId,this.userUid,this.reserveKey );
 		}

		 showProfilePassegner(passenger){
			this.app.getRootNav().push('PublicProfilePage', {passenger: passenger});
			this.accepted = true;
			this.dismiss();
 		}
  
		 cancelReserve(){

			// //HERE IT IS NECESSARY TO SET A PUSH NOT NOTICING USERS IN THE RESERVE THAT IT HAS BEEN REMOVED
			// if(typeOfReserve == 'origin'){
			//   this.geofireService.cancelGeoqueryOr(geofireKey);
			// }else if(typeOfReserve == 'destination'){
			//   this.geofireService.cancelGeoqueryDest(geofireKey);
			// }
			this.TripsService.cancelReserve(this.SignUpService.userUniversity, this.userUid,this.reserveKey);
			this.dismiss();
		  
		
		  //eliminate reserve
		
		  }
	dismiss() {
		console.log('deleted on click')
		this.viewCtrl.dismiss(this.accepted);
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
}
