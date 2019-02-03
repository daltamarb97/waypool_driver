import { Component, NgZone, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { ChattingPage } from '../chatting/chatting';
import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignUpService } from '../../services/signup.service';
import { authenticationService } from '../../services/driverauthentication.service';
import { Geolocation } from '@ionic-native/geolocation';
import * as firebase from 'Firebase';
import { CallNumber } from '@ionic-native/call-number';

declare var google; 
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
  useruid=this.AngularFireAuth.auth.currentUser.uid;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public SignupService:SignUpService,public toastCtrl: ToastController,private callNumber: CallNumber,public navParams: NavParams,public SignUpService:SignUpService,private authenticationService:authenticationService, public geolocation: Geolocation,public zone: NgZone, public sendCoordsService: sendCoordsService, private AngularFireAuth: AngularFireAuth) {
    
    this.markers = [];
    //we get the info of the users with navParams
    
  
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
  });
    this.bounds = new google.maps.LatLngBounds();
    this.geocoder = new google.maps.Geocoder();
   
  }
  
  ionViewDidLoad(){
    
    this.loadMap();
    this.sendCoordsService.getDestination(this.useruid)
    .subscribe( destination => {
      this.destinationOnTrip = destination;
      this.geocodeAddress(this.destinationOnTrip)

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
            fullscreenControl: false
          
        }

        this.myLatLng = {lat: position.coords.latitude , lng: position.coords.longitude};
    //creates the map and give options
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.geocodeLatLng(latLng)

      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latLng,
        
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
          position: results[0].geometry.location
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
     chatting(){
    this.navCtrl.push(ChattingPage);
    }
    notifyDriver(){
      this.presentToast('Se le ha notificado a tu compañero que ya llegaste',3000,'top')
    }
    endTrip(){
      this.sendCoordsService.endTrip(this.useruid)
      // push viaje al historial
      this.navCtrl.pop();
      this.presentAlert('Viaje Terminado', '¡No olvides seguirnos en Instagram y Twitter para obtener tips y bonos!','OK')
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
  }
    


