import { Component} from '@angular/core';
import { NavController, ViewController, ModalController, NavParams} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.service';
import { sendCoordsService } from '../../services/sendCoords.service';
// import { RidetodayPage } from '../ridetoday/ridetoday';
// import { MyridePage } from '../myride/myride';
// import { TabsPage } from '../tabs/tabs';
import { sendUsersService } from '../../services/sendUsers.service';


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
  constructor(public navCtrl: NavController,public sendUsersService: sendUsersService, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams) {
      //we get the info of the users with navParams
      this.user= this.navParams.get('user') 
  
         //get origin from driver
      this.sendCoordsService.getOrigin(this.userDriverUid)
      .subscribe( origin => {
        this.locationOrigin = origin;
      })
         //get destination from driver
      this.sendCoordsService.getDestination(this.userDriverUid)
        .subscribe( destination => {
          this.locationDestination = destination;
        })
         //get the info of the driver 
        this.SignUpService.getMyInfo(this.userDriverUid)
        .subscribe( userDriver => {
          this.userDriver = userDriver;
          console.log(this.userDriver);          
        });
   
    }
    //IDEA:aqui puede ir texto del user que le envia al driver.
    goToRide(){
      this.sendUsersService.pushUsersOnTripOnDrivers(this.userDriverUid,this.user.userId,this.user.trips.origin,this.user.trips.destination,this.user.name,this.user.lastname,this.user.phone);
      this.sendUsersService.pushDriverOnUsers(this.userDriverUid,this.user.userId, this.locationOrigin,this.locationDestination,this.userDriver.name,this.userDriver.lastname,this.userDriver.phone,this.userDriver.carModel,this.userDriver.plateNumber);
      this.viewCtrl.dismiss();
      
      // this.navCtrl.setRoot(TabsPage,{user});      
      // this.navCtrl.parent.select();

      }
  dismiss() {
    this.viewCtrl.dismiss();
  }  
}
