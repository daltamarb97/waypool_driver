import { Component, NgZone, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, IonicPage, App } from 'ionic-angular';

import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignUpService } from '../../services/signup.service';
import { authenticationService } from '../../services/driverauthentication.service';
import { Geolocation } from '@ionic-native/geolocation';
import * as firebase from 'Firebase';
import { CallNumber } from '@ionic-native/call-number';
import { RatetripPage } from '../ratetrip/ratetrip';
import { sendUsersService } from '../../services/sendUsers.service';


declare var google; 
@IonicPage()

@Component({
  selector: 'page-ontrip',
  templateUrl: 'onTrip.html'
})
export class OnTripPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  markers:any;
  driver:any;
  directionsService: any = null;
  directionsDisplay: any = null;
  bounds: any = null;
  myLatLng:any;
  destinationOnTrip:any;
  geocoder:any;
  addressOrigin:any;
  updatelocation:any;
  pickedUpUsers:any = [];

  useruid=this.AngularFireAuth.auth.currentUser.uid;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public sendUsersService: sendUsersService,public SignupService:SignUpService,public toastCtrl: ToastController,private callNumber: CallNumber,public navParams: NavParams,public SignUpService:SignUpService,private authenticationService:authenticationService, public geolocation: Geolocation,public zone: NgZone, public sendCoordsService: sendCoordsService, private AngularFireAuth: AngularFireAuth, public app: App) {
    
    this.markers = [];
    //we get the info of the users with navParams
    
  
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
  });
    this.bounds = new google.maps.LatLngBounds();
    this.geocoder = new google.maps.Geocoder();
    this.sendUsersService.getPickUpUsers(this.useruid)
    .subscribe( user => {
    
      this.pickedUpUsers = user;
      console.log(this.pickedUpUsers);
      
    });
    this.SignUpService.getMyInfoDriver(this.useruid)
		.subscribe(userDriver => {
			this.driver = userDriver;
			console.log(this.driver);
    });    
  }
  
  ionViewDidLoad(){ 
    this.sendCoordsService.getDestination(this.useruid)
    .subscribe( destination => {
      this.destinationOnTrip = destination;
      console.log(this.destinationOnTrip)
      this.loadMap();
    });
   
  }
 
  loadMap(){

 // this gets current position and set the camera of the map and put a marker in your location
    
    this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
          center: latLng,
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: true,
            rotateControl: false,
            fullscreenControl: false, 
            styles: [
              {
                featureType: 'poi',
                elementType: 'labels.icon',
                stylers: [
                  {
                    visibility: 'off'
                  }
                ]
              }
            ]
          
        }

        this.myLatLng = {lat: position.coords.latitude , lng: position.coords.longitude};
    //creates the map and give options
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.geocodeLatLng(latLng)
      this.geocodeAddress(this.destinationOnTrip)
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latLng,
        icon: {         url: "assets/imgs/marker-origin.png",
        scaledSize: new google.maps.Size(90, 90)    

      }
        
      });
      this.markers.push(marker);   
      },(err) => {
      console.log(err);    
     });
     //transform the position of the user into an adress
    
     
      
    
   }
    

    // watch: track the position of the user
  //   let watch = this.geolocation.watchPosition();
  //   watch.subscribe((data) => {
  //   this.deleteMarkers();
  //   this.updatelocation = new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
  //   this.geocodeLatLng(this.updatelocation);
  //   console.log(this.updatelocation)
    
  //   this.sendCoordsService.updateGeolocationOrigin(this.useruid,this.addressOrigin)
    
  //   this.addMarker(this.updatelocation);
  //   this.setMapOnAll(this.map); //nose de esta funcion
  // });   
  
   geocodeAddress(destinationDriver) {
    this.geocoder.geocode({'address':JSON.stringify(destinationDriver)}, (results, status) =>  {
      if (status == 'OK') {
     
        
        var marker = new google.maps.Marker({
          map: this.map,
          position: results[0].geometry.location,
          icon: {         url: "assets/imgs/marker-destination.png",
          scaledSize: new google.maps.Size(90, 90)    
  
        }
        });
      
        this.directionsDisplay.setMap(this.map);
        this.calculateRoute(results[0].geometry.location)
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
      
    });
    
  }
  geocodeLatLng(latLng) {

    this.geocoder.geocode({'location': latLng}, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
           this.addressOrigin= results[0].formatted_address
        } else {
         alert('No results found');
        }
      } else {
        alert('Geocoder failed due to: ' + status);
      }
                  
  
    });
  } 
  calculateRoute(destinationOnTrip){
    //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/

    this.bounds.extend(this.myLatLng);

    
  
    this.map.fitBounds(this.bounds);
    
    this.directionsService.route({
     origin: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
      destination: destinationOnTrip,
      travelMode: google.maps.TravelMode.DRIVING,
      avoidTolls: true
    }, (response, status)=> {
      //render
      if(status === google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(response);
      }else{
        alert('Could not display directions due to: ' + status);
      }
      
    });  
    
    
  }


   
    addMarker(location) {
      let marker = new google.maps.Marker({
        position: location,
        map: this.map,
        // icon: image
      });
      this.markers.push(marker);
    }
    
    setMapOnAll(map) {
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(map);
      }
    }
    
    clearMarkers() {
      this.setMapOnAll(null);
    }
    
    deleteMarkers() {
      this.clearMarkers();
      this.markers = [];
    }

    
    endTrip(){

      //let user rate the trip
      this.navCtrl.push('RatetripPage',{user:this.driver});

      this.pickedUpUsers.forEach(user => {
        

      //erase chat message for every user
      this.sendCoordsService.eraseChatsUsers(user.userId,this.useruid);  

      // save trip in every record of every users
      this.sendCoordsService.recordTripOnUser(user.userId,user); 

      this.sendCoordsService.endTripUserPickingUsers(user.userId);
      this.sendCoordsService.endTripUserPickedUpUsers(user.userId);
      this.sendCoordsService.endTripUserOnTripInstance(user.userId);
      this.sendCoordsService.endTripUserPickupInstance(user.userId);
      this.sendCoordsService.endTripUserDriverListRide(user.userId);      
      this.sendCoordsService.pushOnTripFinalUser(user.userId);
      })
       //Save trip into RecordTrip on User & Driver
      this.sendCoordsService.recordTripOnWaypool(this.driver.trips);
      this.sendCoordsService.recordTripOnDriver(this.useruid,this.driver.trips);        
       //End trip into RecordTrip on User & Driver
      this.sendCoordsService.endTripDriverPickingUsers(this.useruid);
      this.sendCoordsService.endTripDriverPickedUpUsers(this.useruid);

      
      
      this.presentAlert('Viaje Terminado', '¡No olvides seguirnos en Instagram y Twitter para obtener tips y bonos!','OK');
    
          }
   
    presentToast(message:string,duration,position:string) {     
      const toast = this.toastCtrl.create({
        message: message,
        duration: duration,
        position:position
      });
      toast.present();
    }
    presentAlert(title:string,text:string,button:string) {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: text,
        buttons: [button]
      });
      alert.present();
    }
    help(){
      const toast = this.toastCtrl.create({
        message: 'En esta página podrás dirigirte hacia la universidad y ver en el mapa el camino que puedes tomar, cuando hayas llegado presiona el botón finalizar viaje y cuentanos tu experiencia con Waypool.',
        showCloseButton:true,
        closeButtonText: 'OK',
        position:'top'
           });
      toast.present();
    }
  }
    


