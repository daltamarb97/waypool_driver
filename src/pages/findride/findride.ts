import { Component, ViewChild, ElementRef,NgZone } from '@angular/core';


// import { TabsPage } from '../tabs/tabs';
// import { Geofence } from '@ionic-native/geofence';
import { Geolocation } from '@ionic-native/geolocation/';
import { NavController, Platform, ViewController, AlertController, ModalController, ToastController, IonicPage, App } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { sendCoordsService } from '../../services/sendCoords.service';

// import { authenticationService } from '../../services/driverauthentication.service';
import { SignUpService } from '../../services/signup.service';
// import { Geofence } from '@ionic-native/geofence';
import { geofireService } from '../../services/geofire.services';
import * as GeoFire from 'geofire';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { ConfirmpricePage } from '../confirmprice/confirmprice';
import { authenticationService } from '../../services/driverauthentication.service';
import { Geofence } from '@ionic-native/geofence';
import { sendUsersService } from '../../services/sendUsers.service';
import { TripsService } from '../../services/trips.service';
import { instancesService } from '../../services/instances.service';
import { FCM } from '@ionic-native/fcm';
import { Firebase } from '@ionic-native/firebase';
 
declare var google;
@IonicPage()
@Component({
  selector: 'page-findride',
  templateUrl: 'findride.html'
})
export class FindridePage {
 

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  markers: any;
  
  // autocomplete/geocoder variables
  
  autocompleteMyPos: any;
  autocompleteMyDest: any;
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any
  autocompleteItems: any;
  autocompleteItems2:any;
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
  myInfoAboutMyPlace:any;
  constructor( private geofireService: geofireService,public TripsService:TripsService, public afDB: AngularFireDatabase, public navCtrl: NavController,public SignUpService:SignUpService,public modalCtrl: ModalController,private authenticationService: authenticationService, public geolocation: Geolocation,public zone: NgZone, public sendCoordsService: sendCoordsService, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private toastCtrl: ToastController, private app: App, private sendUsersService: sendUsersService, public instancesService: instancesService, private platform: Platform, private fcm: FCM, private firebase: Firebase ) {
    
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.geocoder = new google.maps.Geocoder;

    this.autocompleteMyPos = { input: '' };
    this.autocompleteMyDest = { input: '' };

    this.autocompleteItems = [];
    this.autocompleteItems2=[];
    
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
  });
    this.bounds = new google.maps.LatLngBounds();
    
    this.markers = [];
    //meter datos por el id del firebase

 } // END OF CONSTRUCTOR


 ionViewDidLoad(){

      
  this.afDB.database.ref('allUsers/' + this.user).once('value').then((snap)=>{
    this.SignUpService.userPlace = snap.val().place;
    console.log(this.SignUpService.userPlace);

    this.platform.ready().then(()=>{


      this.getToken();

      // this.token = this.fcm.getToken().then((token)=>{
      //   console.log('this is the token ' + token);
      //   this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/devices/').update({
      //     token: token
      //   })
      // })
  
  })


   //search keyTrip
   this.TripsService.getKeyTrip(this.SignUpService.userPlace, this.user)
   .subscribe(keyTrip=>{
     this.keyTrip =keyTrip;
     console.log(this.user)
     console.log(this.keyTrip)
     //if key its deleted don't show VIAJE EN CURSO  
     if(this.keyTrip === undefined || this.keyTrip === null){
     this.onTrip=false;
     //  this.TripsService.eraseKeyTrip(this.user);
     //  this.TripsService.setOnTripFalse(this.user);
       console.log("llegue adonde era")
     }else{
       //confirm that trip exist and get it
       this.getTrip();
       
     }

})
     // set geofire key of university to avoid asking users to put where they are going
     console.log(this.SignUpService.userPlace);
     this.geofireService.getLocationPlace(this.SignUpService.userPlace).subscribe(university=>{
       this.university = university
       this.locationUniversity = this.university.location;
       this.geofireService.setLocationPlace(this.SignUpService.userPlace, "some_key", this.locationUniversity.lat, this.locationUniversity.lng);
     })

     console.log(this.SignUpService.userPlace);
     
     this.SignUpService.getMyInfo(this.SignUpService.userPlace, this.user).subscribe(user=>{
       this.userInfo = user;
      console.log(this.userInfo);
      

       this.afDB.database.ref('allPlaces/' + this.SignUpService.userPlace).once('value').then((snap)=>{
        this.universityInfo = snap.val();
        console.log(this.universityInfo);
        
        if(this.universityInfo.emails == undefined){
          if(this.userInfo.documents){
            if(this.userInfo.documents.carne === undefined || this.userInfo.documents.id === undefined){
              let modal = this.modalCtrl.create('VerificationImagesPage');
              modal.present();
            }else if(this.userInfo.documents.carne === true && this.userInfo.documents.id === true){
              this.instancesService.isVerifiedPerson(this.SignUpService.userPlace, this.user);
            }
          }else if(!this.userInfo.documents) {
            console.log('no hay docs')
            let modal = this.modalCtrl.create('VerificationImagesPage');
              modal.present();
          } 
        }else{
          this.instancesService.isVerifiedPerson(this.SignUpService.userPlace, this.user);

        }

       })
     })  

     

     


    //  this.SignUpService.getInfoPlace(this.SignUpService.userPlace).subscribe(uni => {
    //   this.universityInfo = uni;
    //   if(this.universityInfo.email == undefined){
    //     if(this.userInfo.documents){
    //       if(this.userInfo.documents.carne === undefined || this.userInfo.documents.id === undefined){
    //         let modal = this.modalCtrl.create('VerificationImagesPage');
    //         modal.present();
    //       }else if(this.userInfo.documents.carne === true && this.userInfo.documents.id === true){
    //         this.instancesService.isVerifiedPerson(this.SignUpService.userPlace, this.user);
    //       }
    //     }else if(!this.userInfo.documents) {
    //       console.log('no hay docs')
    //       let modal = this.modalCtrl.create('VerificationImagesPage');
    //         modal.present();
    //     } 
    //   }else{
    //     this.instancesService.isVerifiedPerson(this.SignUpService.userPlace, this.user);

    //   }


    // })


this.loadMap();
  })
}



async getToken() {

  if (this.platform.is('android')) {
    this.token = await this.firebase.getToken().then((token)=>{
      console.log('this is the token ' + token);
      this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/devices/').update({
        token: token
      })
    })
  }

  if (this.platform.is('ios')) {
    this.token = await this.firebase.getToken().then((token)=>{
      console.log('this is the token ' + token);
      this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/devices/').update({
        token: token
      })
    })
    await this.firebase.grantPermission();
  }

}




 getTrip(){

    this.afDB.database.ref(this.SignUpService.userPlace + '/trips/'+ this.user +'/'+ this.keyTrip)
    .once('value').then((snapshot) => {
      let trip = snapshot.val();
      console.log(trip);

      if(trip === null || trip === undefined){
        console.log("borre");
        //  this.TripsService.eraseKeyTrip(this.user);
      //  this.TripsService.setOnTripFalse(this.user);
      }else{
        this.getOnTrip();
      }
    })
    
 } 


 getOnTrip(){
   this.TripsService.getOnTrip(this.SignUpService.userPlace, this.user)
   .subscribe(onTrip=>{
     this.onTrip =onTrip;
     console.log(this.onTrip)
    
   })
 }
 goToTrip(){
  if (this.onTrip === true) {
    console.log('DISPARADOR')
    let modal = this.modalCtrl.create('MyridePage');                      
    modal.present();
  }else{
    this.presentAlert('Error en el viaje','Intenta entrar otra vez, si el error persiste hay un problema con el viaje, porfavor elimina el viaje en Mis reservas','OK')
  }
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
        icon: {         url: "assets/imgs/marker-origin-driver.png",
        scaledSize: new google.maps.Size(90, 90)    

      }
      });
      this.markers.push(this.markerGeolocation);
      //allow the marker to be draged and changed the position
      this.dragMarkerOr(this.markerGeolocation,this.autocompleteMyPos)
      //to reverse-geocode position
      this.geocodeLatLng(latLng,this.autocompleteMyPos)
 
      
     
      },(err) => {
      console.log(err);    
     });

  }
  
   calculateRoute(positionOr,positionDest){
    //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/
    //calculate route between markers

    this.bounds.extend(this.myLatLng);

    
  
    this.map.fitBounds(this.bounds);
    
    this.directionsService.route({
     origin: positionOr,
      destination: positionDest,
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
  ////autocomplete of my destination Searchbar
  updateSearchResultsMyDest(){
    if (this.autocompleteMyDest.input == '') {
      this.autocompleteItems2 = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocompleteMyDest.input, componentRestrictions: {country:'co'} },
    (predictions, status) => {
      this.autocompleteItems2 = [];
      if(predictions){


        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItems2.push(prediction);
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
        icon: {         url: "assets/imgs/marker-origin-driver.png",
        scaledSize: new google.maps.Size(90, 90)    

      },
      animation: google.maps.Animation.DROP,

      });
      this.dragMarkerOr(this.markerGeolocation,this.autocompleteMyPos)
      this.markers.push( this.markerGeolocation);
      this.map.setCenter(results[0].geometry.location);
      console.log(results[0].geometry.location)
      this.autocompleteMyPos.input=[item.description]
      this.autocompleteMyDest.input=''
      this.directionsDisplay.setMap(null)
    }
  })
  
  
}

  ////select result of my destination searchbar

selectSearchResultMyDest(item){
  this.autocompleteItems2=[];
  if(this.markerDest!==undefined){
    this.markerDest.setMap(null)
  }
  this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
    if(status === 'OK' && results[0]){

      // let position = {
      //   latitude: results[0].geometry.location.lat,
      //   longitude: results[0].geometry.location.lng
      // };
        let position = new google.maps.LatLng( results[0].geometry.location.lat,
         results[0].geometry.location.lng)
          console.log(position)
       this.markerDest = new google.maps.Marker({
        position: results[0].geometry.location,
        map: this.map,
        animation: google.maps.Animation.DROP,
        draggable:true,
           icon: {         url: "assets/imgs/marker-destination2.png",
        scaledSize: new google.maps.Size(90, 90)    

      }
      });
      console.log(position)
      this.map.fitBounds(this.bounds);     
      this.markers.push(this.markerDest);
      this.map.setCenter(results[0].geometry.location);
      console.log(results[0].geometry.location)
      this.autocompleteMyDest.input=[item.description]
      this.dragMarkerDest(this.markerDest,this.autocompleteMyDest)
      this.directionsDisplay.setMap(this.map);
      this.myLatLngDest= results[0].geometry.location;
      this.calculateRoute(this.markerGeolocation.position,results[0].geometry.location);
     
     
    }
  })
  
}
////////Markers
clearMarkers(){
    for (var i = 0; i < this.markers.length; i++) {
      
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }
  
 dragMarkerDest(marker,inputName){
   //allow destination marker to be draged and calculate route with the new position
  google.maps.event.addListener(marker, 'dragend',  (evt) => {
    let lat = marker.getPosition().lat()
    let lng = marker.getPosition().lng()
    let latLng = {lat,lng}
   
    this.map.setCenter(latLng);
    this.geocodeLatLng(latLng,inputName)
    
   this.calculateRoute(this.markerGeolocation.position,latLng);
})
}
dragMarkerOr(marker,inputName){
     //allow origin marker to be draged and calculate route with the new position

  google.maps.event.addListener(marker, 'dragend',  (evt) => {
    let lat = marker.getPosition().lat()
    let lng = marker.getPosition().lng()
    let latLng = {lat,lng}
   
    this.map.setCenter(latLng);
    this.geocodeLatLng(latLng,inputName)
    if(this.autocompleteMyDest.input == undefined || this.autocompleteMyDest.input==''){
      console.log("funciona")
    } else {

      this.calculateRoute(latLng,this.markerDest.position);

    }
})
}
geocodeLatLng(latLng,inputName) {

  this.geocoder.geocode({'location': latLng}, (results, status) => {
    if (status === 'OK') {
      if (results[0]) {
         inputName.input=[results[0].formatted_address]
      } else {
       alert('No results found');
      }
    } else {
      alert('Geocoder failed due to: ' + status);
    }
                

  });
}


  

  listride(){
    if(this.currentUser.emailVerified == false){
      const alert = this.alertCtrl.create({
        title: 'Oops!',
        subTitle: 'por favor verifica tu email',
        buttons: ['OK']
      });
      alert.present();  
    }else{
      if(this.userInfo.documents){
        if(this.userInfo.documents.license == true && this.userInfo.documents.id == true){
          try {
            this.orFirebase=[this.autocompleteMyPos.input]
            this.desFirebase=[this.autocompleteMyDest.input]   
            console.log(this.orFirebase);
          if(this.autocompleteMyDest.input ==''|| this.autocompleteMyPos.input==''){
                this.presentAlert('No tienes toda la informacion','Por favor asegura que tu origen y destino sean correctos','Ok');
                this.clearMarkers();
                
                this.directionsDisplay.setDirections({routes: []});
                this.loadMap();
               } else {
                 
                this.sendCoordsService.pushcoordinatesDrivers(this.SignUpService.userPlace, this.user,this.desFirebase,this.orFirebase)
       
                this.geoInfo1 = this.myLatLng;
                console.log(this.geoInfo1);
               


      
                this.geoInfo2 = {
                  lat: this.myLatLngDest.lat(),
                  lng: this.myLatLngDest.lng()
                }
               

                console.log("AQUIIIIIIIIIIIIIII")
                console.log(this.geoInfo2.lat);
                //turn on geoquery university to determine wether the user is in university
                this.geofireService.setGeofirePlace(this.SignUpService.userPlace, 0.56, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.user);
               //
                this.confirmPrice(this.geoInfo1, this.geoInfo2);
                      
              }
            
             }
             
          catch(error) {
            console.log(error);
            if(this.geoInfo2.lat === null || this.geoInfo2.lat === undefined ){
              //this is to tell the user to select a place before publishing a trip
              this.presentAlert('Información Incompleta','no puedes publicar un viaje sin antes seleccionar un lugar de la lista.','Ok') 
            }else {
              this.presentAlert('Hay un error en la aplicación','Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.','Ok') 

            }
            }
      
            console.log(this.orFirebase);
        }else{
          let alert = this.alertCtrl.create({
            title: '¡oh-uh!',
            subTitle: 'faltan documentos por subir, dirigete a perfil, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
           buttons: [
            { 
              text: 'Subir mis documentos',
              handler: () => {
                this.navCtrl.push('CarRegistrationPage');
              }
            },
              {
                text: 'Cancelar',
                role: 'cancel',
                handler: () => {
               
                }
              }
            ],
            cssClass: 'alertDanger'
          });
          alert.present();
        }
      }else{
        let alert = this.alertCtrl.create({
          title: '¡oh-oh!',
          subTitle: 'faltan documentos por subir, dirigete a perfil, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
         buttons: [
          { 
            text: 'Subir mis documentos',
            handler: () => {
              this.navCtrl.push('CarRegistrationPage');
            }
          },
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => {
             
              }
            }
          ],
          cssClass: 'alertDanger'
        });
        alert.present();
      }
    }
  

}
    presentAlert(title,text,button) {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: text,
        buttons: [button]
      });
      alert.present();
    }

    availableReserves(){
      this.app.getRootNav().push('ReservetripPage');


    }

   
  
   confirmPrice(geoInfo1, geoInfo2){
     this.doGeoquery = false;
      let modal = this.modalCtrl.create('ConfirmpricePage', {geoInfo1, geoInfo2});
      modal.onDidDismiss(accepted => {
        if(accepted){
          // this.navCtrl.push('ListridePage');
          this.app.getRootNav().push('ReservetripPage');
        }
      })
   modal.present();
   }
   help(){
    const toast = this.toastCtrl.create({
      message: 'En esta página podrás conectarte con compañeros de tu misma universidad que quieran compartir un viaje contigo.',
     showCloseButton:true,
      closeButtonText: 'OK',
              position:'top'
         });
    toast.present();
  }
  }  
  