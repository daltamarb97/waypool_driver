

import { Component, ViewChild, ElementRef,NgZone, Renderer } from '@angular/core';


// import { TabsPage } from '../tabs/tabs';
// import { Geofence } from '@ionic-native/geofence';
import { Geolocation } from '@ionic-native/geolocation/';
import { NavController, Platform, ViewController, AlertController, ModalController, ToastController, IonicPage, App, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { sendCoordsService } from '../../services/sendCoords.service';

// import { authenticationService } from '../../services/driverauthentication.service';
import { SignUpService } from '../../services/signup.service';
// import { Geofence } from '@ionic-native/geofence';
import { geofireService } from '../../services/geofire.services';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { authenticationService } from '../../services/driverauthentication.service';
import { sendUsersService } from '../../services/sendUsers.service';
import { TripsService } from '../../services/trips.service';
import { instancesService } from '../../services/instances.service';
import { FCM } from '@ionic-native/fcm';
import { Firebase } from '@ionic-native/firebase';
 
declare var google;
@IonicPage()
@Component({
  selector: 'page-specifyorigin',
  templateUrl: 'specifyorigin.html'
})
export class SpecifyOriginPage {
 

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('buttonConected',{read:ElementRef}) buttonConected;
  @ViewChild('buttonDisconected',{read:ElementRef}) buttonDisconected;

  map: any;
  markers: any;
  
  // autocomplete/geocoder variables
  
  autocompleteMyPos: any;
  autocompleteMyDest: any;
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any
  autocompleteItems: any;
  autocompleteItems2: any[];

  // waypoints variables
  directionsService: any = null;
  directionsDisplay: any = null;
  bounds: any = null;
  myLatLng: any=[];
  waypoints: any[];
  myLatLngDest:any;
  
  //¿Adonde vas? 
  destinationSelect: any;
  //firebase 
  trip:any = {};
  // tripIdFirebase = this.AngularFireAuth.auth.currentUser;
  desFirebase:any;
  houseAddress:any;
  placeAddress:any;
  tripId:any = null;
  orFirebase:any;

  user=this.AngularFireAuth.auth.currentUser.uid;
  userInfo:any;
  currentUser = this.AngularFireAuth.auth.currentUser;
  //geofire variables
  dbRef:any;
  geoFire:any;
  key;
  driver;
  driverInfo:any = {};
  geoInfo1:any = {};
  geoInfo2:any = {};
  markerGeolocation:any;
  markerDest:any;
  universityInfo:any;
  //variables for geofire reserves
  reserves= [];
  geocoordinatesOr:any;
  geocoordinatesDest:any;

  locationUniversity:any ={};
  university:any;
  doGeoquery:boolean;
  keyTrip:any; 
  onTrip:any;
  token:any;
  isConected:boolean = false;
  positionDest:any;
  positionOr:any;
  lat:any;
  lng:any;
  myInfoAboutMyPlace:any;
  schedules = [];
  myReserves = [];
  geocoordinatesHouse:any;
  checked:boolean = false;
  isDisconected:boolean;
  driverReserves: any;
  fullReserves = [];
  city:any;
  company:any;
  
  constructor( private geofireService: geofireService,public TripsService:TripsService, public afDB: AngularFireDatabase, public navCtrl: NavController,public SignUpService:SignUpService,public modalCtrl: ModalController,private authenticationService: authenticationService, public geolocation: Geolocation,public zone: NgZone, public sendCoordsService: sendCoordsService, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private toastCtrl: ToastController, private app: App, private sendUsersService: sendUsersService, public instancesService: instancesService, public firebaseNative: Firebase, private platform: Platform, private fcm: FCM, public loadingCtrl: LoadingController, public renderer: Renderer ) {


    
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.geocoder = new google.maps.Geocoder;

    this.autocompleteMyPos = { input: '' };
    this.autocompleteMyDest = { input: '' };

    this.autocompleteItems = [];
    this.autocompleteItems2 = [];

    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
  });
    this.bounds = new google.maps.LatLngBounds();
    
    this.markers = [];
    //meter datos por el id del firebase

 } // END OF CONSTRUCTOR


 ionViewDidLoad(){

      
  this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user).once('value').then((snap)=>{
    this.city = snap.val().city;
    this.company = snap.val().company;
    console.log(this.SignUpService.userPlace);


    this.loadMap();

  
  })


 }




  


 
  loadMap(){
    //check if user have houseAddress
 // this gets current position and set the camera of the map and put a marker in your location
 this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then((position) => {

  let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  console.log(latLng);

  let mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
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
//creates the map and give options
  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  this.myLatLng = {lat: position.coords.latitude , lng: position.coords.longitude};
    
  this.markerGeolocation = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: latLng,
    draggable:true,
    icon: {         url: "assets/imgs/house.png",
    scaledSize: new google.maps.Size(70, 70)    

  }
  });
  this.markers.push(this.markerGeolocation);
  this.geocoordinatesHouse = {lat: position.coords.latitude , lng: position.coords.longitude};

  //allow the marker to be draged and changed the position
  this.dragMarkerOr(this.markerGeolocation,this.autocompleteMyPos);


 
  },(err) => {
  console.log(err);    
 });
    

  }
  

//autocomplete of myPosition searchbar
updateSearchResultsMyPos(){
    if (this.autocompleteMyPos.input == '') {
      this.autocompleteItems = [];     
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocompleteMyPos.input, componentRestrictions: {country:'co'} },
    (predictions, status) => {
      this.autocompleteItems = [];
      if(predictions){
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItems.push(prediction);
          });
        });
      }
  });
}
  ////select result of my position searchbar
selectSearchResultMyPos(item){
  this.autocompleteItems=[];

  this.clearMarkers();

  this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
    if(status === 'OK' && results[0]){
      
      // let position = {
      //     lat: results[0].geometry.location.lat,
      //     lng: results[0].geometry.location.lng
      // };

      
        this.markerGeolocation = new google.maps.Marker({
        position: results[0].geometry.location,
        map: this.map,
        draggable: true,
        icon: {         url: "assets/imgs/house.png",
        scaledSize: new google.maps.Size(70, 70)    

      },
      animation: google.maps.Animation.DROP,

      });
      this.geocoordinatesHouse = {latOr: results[0].geometry.location.lat(), lngOr: results[0].geometry.location.lng()}
      console.log(this.geocoordinatesHouse);
      console.log(this.positionDest);
      
      this.dragMarkerOr(this.markerGeolocation,this.autocompleteMyPos)
      this.markers.push( this.markerGeolocation);
      this.map.setCenter(results[0].geometry.location);
      console.log(results[0].geometry.location);
      console.log(this.positionDest);
      
      this.autocompleteMyPos.input=[item.description];
      
    
  
      // this.map.fitBounds(this.bounds);
    }
  })
  
  
}

  ////select result of my destination searchbar


////////Markers
clearMarkers(){
    for (var i = 0; i < this.markers.length; i++) {
      
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }
  
 
dragMarkerOr(marker,inputName){
     //allow origin marker to be draged and calculate route with the new position

  google.maps.event.addListener(marker, 'dragend',  (evt) => {
    let lat = marker.getPosition().lat()
    let lng = marker.getPosition().lng()
    let latOr = marker.getPosition().lat()
    let lngOr = marker.getPosition().lng()
    let latLng = {lat,lng}

    let latLngOr = {latOr,lngOr}
   console.log(latLng);
   
    this.geocodeLatLng(latLng,inputName)
    console.log(this.positionDest);
    
    this.geocoordinatesHouse = latLngOr;
    
})
}

geocodeLatLng(latLng,inputName) {

  this.geocoder.geocode({'location': latLng}, (results, status) => {
    if (status === 'OK') {
      if (results[0]) {
         inputName.input=[results[0].formatted_address];
      } else {
       alert('No results found');
      }
    } else {
      alert('Geocoder failed due to: ' + status);
    }
                

  });
}

sendLocation(){
  this.houseAddress = this.autocompleteMyPos.input;
  this.afDB.database.ref('allCities/' + this.city + '/allPlaces/' + this.company + '/zones').once('value').then((snap)=>{
    let obj = snap.val();
    console.log(obj);
    Object.getOwnPropertyNames(obj).forEach((key)=>{
        if(obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10){

        }else{
          this.afDB.database.ref(obj[key] + '/drivers/' + this.user + '/houseAddress/').update({
            name: this.houseAddress[0]
          }).then((data)=>{
            this.afDB.database.ref(obj[key] + '/drivers/' + this.user + '/houseAddress/coordinates').update({
              lat:this.geocoordinatesHouse.latOr,
              lng:this.geocoordinatesHouse.lngOr
             });
           })
        }
    })
    
  }).then(()=>{
    this.navCtrl.setRoot('FindridePage')
  })
  
 }
} 





 
