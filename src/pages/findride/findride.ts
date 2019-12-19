// import { Component, ViewChild, ElementRef,NgZone, Renderer } from '@angular/core';


// // import { TabsPage } from '../tabs/tabs';
// // import { Geofence } from '@ionic-native/geofence';
// import { Geolocation } from '@ionic-native/geolocation/';
// import { NavController, Platform, ViewController, AlertController, ModalController, ToastController, IonicPage, App, LoadingController } from 'ionic-angular';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { sendCoordsService } from '../../services/sendCoords.service';

// // import { authenticationService } from '../../services/driverauthentication.service';
// import { SignUpService } from '../../services/signup.service';
// // import { Geofence } from '@ionic-native/geofence';
// import { geofireService } from '../../services/geofire.services';
// import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
// import { authenticationService } from '../../services/driverauthentication.service';
// import { sendUsersService } from '../../services/sendUsers.service';
// import { TripsService } from '../../services/trips.service';
// import { instancesService } from '../../services/instances.service';
// import { FCM } from '@ionic-native/fcm';
// import { Firebase } from '@ionic-native/firebase';
 
// declare var google;
// @IonicPage()
// @Component({
//   selector: 'page-findride',
//   templateUrl: 'findride.html'
// })
// export class FindridePage {
 

//   @ViewChild('map') mapElement: ElementRef;
//   @ViewChild('buttonConected',{read:ElementRef}) buttonConected;
//   @ViewChild('buttonDisconected',{read:ElementRef}) buttonDisconected;

//   map: any;
//   markers: any;
  
//   // autocomplete/geocoder variables
  
//   autocompleteMyPos: any;
//   autocompleteMyDest: any;
//   GoogleAutocomplete: any;
//   GooglePlaces: any;
//   geocoder: any
//   autocompleteItems: any;
  
//   // waypoints variables
//   directionsService: any = null;
//   directionsDisplay: any = null;
//   bounds: any = null;
//   myLatLng: any=[];
//   waypoints: any[];
//   myLatLngDest:any;
  
//   //¿Adonde vas? 
//   destinationSelect: any;
//   //firebase 
//   trip:any = {};
//   // tripIdFirebase = this.AngularFireAuth.auth.currentUser;
//   desFirebase:any;
//   houseAddress:any;
//   placeAddress:any;
//   tripId:any = null;
//   orFirebase:any;

//   user=this.AngularFireAuth.auth.currentUser.uid;
//   userInfo:any;
//   currentUser = this.AngularFireAuth.auth.currentUser;
//   //geofire variables
//   dbRef:any;
//   geoFire:any;
//   key;
//   driver;
//   driverInfo:any = {};
//   geoInfo1:any = {};
//   geoInfo2:any = {};
//   markerGeolocation:any;
//   markerDest:any;
//   universityInfo:any;
//   //variables for geofire reserves
//   reserves= [];
//   geocoordinatesOr:any;
//   geocoordinatesDest:any;

//   locationUniversity:any ={};
//   university:any;
//   doGeoquery:boolean;
//   keyTrip:any; 
//   onTrip:any;
//   token:any;
//   isConected:boolean = false;
//   positionDest:any;
//   lat:any;
//   lng:any;
//   myInfoAboutMyPlace:any;
//   schedules = [];
//   myReserves = [];
//   geocoordinatesHouse:any;
//   checked:boolean = false;
//   isDisconected:boolean;
//   driverReserves: any;
//   fullReserves = [];
//   constructor( private geofireService: geofireService,public TripsService:TripsService, public afDB: AngularFireDatabase, public navCtrl: NavController,public SignUpService:SignUpService,public modalCtrl: ModalController,private authenticationService: authenticationService, public geolocation: Geolocation,public zone: NgZone, public sendCoordsService: sendCoordsService, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private toastCtrl: ToastController, private app: App, private sendUsersService: sendUsersService, public instancesService: instancesService, public firebaseNative: Firebase, private platform: Platform, private fcm: FCM, public loadingCtrl: LoadingController, public renderer: Renderer) {


    
//     this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
//     this.geocoder = new google.maps.Geocoder;

//     this.autocompleteMyPos = { input: '' };

//     this.autocompleteItems = [];
    
//     this.directionsService = new google.maps.DirectionsService();
//     this.directionsDisplay = new google.maps.DirectionsRenderer({
//       suppressMarkers: true,
//   });
//     this.bounds = new google.maps.LatLngBounds();
    
//     this.markers = [];
//     //meter datos por el id del firebase

//  } // END OF CONSTRUCTOR


//  ionViewDidLoad(){

      
//   this.afDB.database.ref('allUsers/' + this.user).once('value').then((snap)=>{
//     this.SignUpService.userPlace = snap.val().place;
//     console.log(this.SignUpService.userPlace);


    
//     this.platform.ready().then(()=>{


//       this.getToken();

//       // this.token = this.fcm.getToken().then((token)=>{
//       //   console.log('this is the token ' + token);
//       //   this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/devices/').update({
//       //     token: token
//       //   })
//       // })
  
//   })
//   this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/'+this.user).once('value').then((snap)=>{
//     this.userInfo = snap.val();
//     console.log(this.userInfo);
    
//     let lat=this.userInfo.fixedLocation.coordinates.lat
//     console.log(this.lat);
    
//     let lng=this.userInfo.fixedLocation.coordinates.lng
//     this.positionDest = {lat,lng};
//     console.log(this.positionDest);

//     if(this.userInfo.toggleStatus === 'online'){
//       // this.checked = true;
//       this.isConected = true;
//       this.isDisconected = false;
//       this.changeColorOnline();
//     }else{
//       this.isConected = false;
//       this.isDisconected = true;
//       this.changeColorOffline();
//     }
//     this.loadMap();
//   })
    
  
//   //search keyTrip

//    //search keyTrip
//    this.TripsService.getKeyTrip(this.SignUpService.userPlace, this.user)
//    .subscribe(keyTrip=>{
//      this.keyTrip =keyTrip;
//      console.log(this.user)
//      console.log(this.keyTrip)
//      //if key its deleted don't show VIAJE EN CURSO  
//      if(this.keyTrip === undefined || this.keyTrip === null){
//      this.onTrip=false;
//      //  this.TripsService.eraseKeyTrip(this.user);
//      //  this.TripsService.setOnTripFalse(this.user);
//        console.log("llegue adonde era")
//      }else{
//        //confirm that trip exist and get it
//        this.getTrip();
       
//      }

// })
//      // set geofire key of university to avoid asking users to put where they are going
//     //  console.log(this.SignUpService.userPlace);
//     //  this.geofireService.getLocationPlace(this.SignUpService.userPlace).subscribe(university=>{
//     //    this.university = university
//     //    this.locationUniversity = this.university.location;
//     //    this.geofireService.setLocationPlace(this.SignUpService.userPlace, "some_key", this.locationUniversity.lat, this.locationUniversity.lng);
//     //  })

//      console.log(this.SignUpService.userPlace);
     
//      this.SignUpService.getMyInfo(this.SignUpService.userPlace, this.user).subscribe(user=>{
//        this.userInfo = user;
//       console.log(this.userInfo);
      

//        this.afDB.database.ref('allPlaces/' + this.SignUpService.userPlace).once('value').then((snap)=>{
//         this.universityInfo = snap.val();
//         console.log(this.universityInfo);
        
//         if(this.universityInfo.emails == undefined){
//           if(this.userInfo.documents){
//             if(this.userInfo.documents.carne === undefined || this.userInfo.documents.id === undefined){
//               let modal = this.modalCtrl.create('VerificationImagesPage');
//               modal.present();
//             }else if(this.userInfo.documents.carne === true && this.userInfo.documents.id === true){
//               this.instancesService.isVerifiedPerson(this.SignUpService.userPlace, this.user);
//             }
//           }else if(!this.userInfo.documents) {
//             console.log('no hay docs')
//             let modal = this.modalCtrl.create('VerificationImagesPage');
//               modal.present();
//           } 
//         }else{
//           this.instancesService.isVerifiedPerson(this.SignUpService.userPlace, this.user);

//         }

//        })
//      }) 
     
//     //  this.SignUpService.getInfoPlace(this.SignUpService.userPlace).subscribe(uni => {
//     //   this.universityInfo = uni;
//     //   if(this.universityInfo.email == undefined){
//     //     if(this.userInfo.documents){
//     //       if(this.userInfo.documents.carne === undefined || this.userInfo.documents.id === undefined){
//     //         let modal = this.modalCtrl.create('VerificationImagesPage');
//     //         modal.present();
//     //       }else if(this.userInfo.documents.carne === true && this.userInfo.documents.id === true){
//     //         this.instancesService.isVerifiedPerson(this.SignUpService.userPlace, this.user);
//     //       }
//     //     }else if(!this.userInfo.documents) {
//     //       console.log('no hay docs')
//     //       let modal = this.modalCtrl.create('VerificationImagesPage');
//     //         modal.present();
//     //     } 
//     //   }else{
//     //     this.instancesService.isVerifiedPerson(this.SignUpService.userPlace, this.user);

//     //   }


//     // })


//   })
// }



// async getToken() {

//   if (this.platform.is('android')) {
//     this.token = await this.firebaseNative.getToken().then((token)=>{
//       console.log('this is the token ' + token);
//       this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/devices/').update({
//         token: token
//       })
//     })
//   }

//   if (this.platform.is('ios')) {
//     this.token = await this.firebaseNative.getToken().then((token)=>{
//       console.log('this is the token ' + token);
//       this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/devices/').update({
//         token: token
//       })
//     })
//     await this.firebaseNative.grantPermission();
//   }

// }
// changeColorOnline(){
//   this.renderer.setElementStyle(this.buttonConected.nativeElement,'background-color','green')
//   this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-width','2px')
//   this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-style','solid')
//   this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-color','green')

//   this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-width','2px')
//   this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-style','solid')
//   this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-color','green')

//   this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'background-color','transparent')
//   this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'font-color','#bfbfbf')

//   this.showPopup();
// }
// changeColorOffline(){
//   this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-width','2px')
//   this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'background-color','rgb(167, 23, 23)')
//   this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-style','solid')
//   this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-color','rgb(167, 23, 23)')

//   this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-width','2px')
//   this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-style','solid')
//   this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-color','rgb(167, 23, 23)')
//   this.renderer.setElementStyle(this.buttonConected.nativeElement,'background-color','transparent')
//   this.renderer.setElementStyle(this.buttonConected.nativeElement,'font-color','#bfbfbf')

// }
// conectDriver(){
//   if(this.userInfo.onTrip === true ){
//   // if the user is on trip dont let be offline
//   const alert = this.alertCtrl.create({
//     title: '¡Cuidado!',
//     subTitle: 'No puedes desconectarte en un viaje en curso, cancélalo primero y después desconectate',
//     buttons: ['OK']
//   });
//   alert.present(); 
//   }else{ 

//       if(this.userInfo.toggleStatus === 'online'){
//         const alert = this.alertCtrl.create({
//           title: '¡Ya estas conectado!',
//           subTitle: 'Si deseas cambiar el precio de tus viajes, desconectate y vuelvete a conectar',
//           buttons: ['OK']
//         });
//         alert.present(); 
//         }else{
//           this.isConected = true;
//       this.isDisconected = false;
      
//       if(this.currentUser.emailVerified == false){
//         const alert = this.alertCtrl.create({
//           title: 'Oops!',
//           subTitle: 'por favor verifica tu email',
//           buttons: ['OK']
//         });
//         alert.present(); 
//         this.isConected = false;
//       this.isDisconected = true;
//       this.changeColorOffline();
//       }else{
    
//         if(this.userInfo.documents){
//           if(this.userInfo.documents.license == true && this.userInfo.documents.id == true){
//             if(this.userInfo.schedule){
//               try{
              
//                 this.houseAddress = this.autocompleteMyPos.input;
//                 this.placeAddress = this.userInfo.fixedLocation.name;
//                 console.log(this.houseAddress);
                
      
//                 if(this.autocompleteMyPos.input == ''){
//                   this.presentAlert('No tienes toda la informacion','Por favor asegura que tengas las dirección de tu casa sea correcta','Ok');
//                   this.isConected = false;
//                   this.isDisconected = true;
//                   this.changeColorOffline();
//                   this.clearMarkers();
//                   this.directionsDisplay.setDirections({routes: []});
//                   this.loadMap();
//                 }else{
                    


//                   this.geocoder.geocode({'address': this.houseAddress[0]}, (results, status)=>{
//                     if(status==='OK'){
//                       this.geocoordinatesHouse={
//                         lat:results[0].geometry.location.lat(),
//                         lng: results[0].geometry.location.lng()
//                       }
//                     }
//                     this.geofireService.setHouseAddressName(this.SignUpService.userPlace, this.user, this.houseAddress[0]);
//                     this.geofireService.setHouseAddress(this.SignUpService.userPlace, this.user, this.geocoordinatesHouse.lat, this.geocoordinatesHouse.lng);
//                   })


//                   let loading = this.loadingCtrl.create({
//                     spinner: 'crescent',
//                     content: `
//                       <div class="custom-spinner-container">
//                         <div class="custom-spinner-box"></div>
//                       </div>`
//                       });
//                   loading.present();

//                   setTimeout(() => {
//                     loading.dismiss();
//                     let modal = this.modalCtrl.create('ConfirmpricePage');
//                     modal.onDidDismiss(accepted => {
//                       if(accepted){
//                         this.instancesService.ToggleStatusOnline(this.SignUpService.userPlace, this.user);
//                         this.changeColorOnline();
                     
//                         console.log("estoy true")
//                         this.disable();
//                         console.log(this.userInfo.fixedLocation.name);
//                         // this.confirmPrice();
          
//                         // this.geocoder.geocode({'address': this.houseAddress[0]}, (results, status)=>{
//                         //   if(status==='OK'){
//                         //     this.geocoordinatesHouse={
//                         //       lat:results[0].geometry.location.lat(),
//                         //       lng: results[0].geometry.location.lng()
//                         //     }
//                         //   }
//                         //   this.geofireService.setHouseAddressName(this.SignUpService.userPlace, this.user, this.houseAddress[0]);
//                         //   this.geofireService.setHouseAddress(this.SignUpService.userPlace, this.user, this.geocoordinatesHouse.lat, this.geocoordinatesHouse.lng);
//                         // })                  
//                       }else{
//                         this.presentAlert('Información incompleta','Por favor escribe toda la información para conectarte','OK')
    
//                       }         
//                     })
//                  modal.present();
//                   }, 2000);             
//                 }
//               }catch(error){
//                 console.log(error);
                
//               }
//             }else{
//               let alert = this.alertCtrl.create({
//                 title: 'No tienes ningún horario',
//                 subTitle: 'Por favor arma tu horario o mandanos foto del horario',
//                buttons: [
//                 { 
//                   text: 'Mandar mi horario',
//                   handler: () => {
//                     this.navCtrl.push('SchedulePage');
//                   }
//                 },
//                   {
//                     text: 'Cancelar',
//                     role: 'cancel',
//                     handler: () => {
                   
//                     }
//                   }
//                 ],
//                 cssClass: 'alertDanger'
//               });
//               alert.present();
//               this.isConected = false;
//             this.isDisconected = true;
//             this.changeColorOffline();
//             }
            
    
    
//           }else{
//               let alert = this.alertCtrl.create({
//                 title: '¡oh-uh!',
//                 subTitle: 'faltan documentos por subir, dirigete al menú, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
//                buttons: [
//                 { 
//                   text: 'Subir mis documentos',
//                   handler: () => {
//                     this.navCtrl.push('CarRegistrationPage');
//                   }
//                 },
//                   {
//                     text: 'Cancelar',
//                     role: 'cancel',
//                     handler: () => {
                   
//                     }
//                   }
//                 ],
//                 cssClass: 'alertDanger'
//               });
//               alert.present();
//             }
//             this.isConected = false;
//             this.isDisconected = true;
//             this.changeColorOffline();
//         }else{
//           let alert = this.alertCtrl.create({
//             title: '¡oh-oh!',
//             subTitle: 'faltan documentos por subir, dirigete al menú, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
//            buttons: [
//             { 
//               text: 'Subir mis documentos',
//               handler: () => {
//                 this.navCtrl.push('CarRegistrationPage');
//               }
//             },
//               {
//                 text: 'Cancelar',
//                 role: 'cancel',
//                 handler: () => {
               
//                 }
//               }
//             ],
//             cssClass: 'alertDanger'
//           });
//           alert.present();
//           this.isConected = false;
//             this.isDisconected = true;
//             this.changeColorOffline();
//          }
//         }
      
//       }
//   }
 

// }


  
  




// disconectDriver(){
//   if(this.userInfo.toggleStatus === 'offline'){ 
//     //do nothing
//   }else{
//     //get all reserves from driver
//     this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/'+this.user).once('value').then((snapReserve)=>{
//       this.driverReserves = snapReserve.val();

//       console.log(this.driverReserves);

//       let obj = this.driverReserves;
//       Object.getOwnPropertyNames(obj).forEach((key)=>{
//         console.log(obj[key]);
//         //check if user have any user in their reserve
//         console.log(obj[key].pendingUsers);
        
//         if (obj[key].pendingUsers !== undefined) {
          
//           this.fullReserves.push(obj[key])

//         } else {
//           //there is people in the drivers' reserve
//           console.log("funciono");
         
//         }

//       })
//     }).then(()=>{
//       if( this.fullReserves.length === 0 ||  this.fullReserves.length === undefined ){
//         this.isConected = false;
//       this.isDisconected = true;
//       this.changeColorOffline();
//       this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/' + this.user).once('value').then(snap => {
                      
//         console.log(snap.val()); 
//         let obj = snap.val();
//         Object.getOwnPropertyNames(obj).forEach(key => {
//           console.log(obj[key]);
//           if(obj[key].type === 'origin'){
//                 this.geofireService.deleteUserGeofireOr(this.SignUpService.userPlace, key);
//           }else if(obj[key].type === 'destination'){
//                 this.geofireService.deleteUserGeofireDest(this.SignUpService.userPlace, key);
//               }             
//         })
//       }).then(()=>{
//         this.TripsService.deleteAllReserves(this.SignUpService.userPlace, this.user);
//       })
//       this.instancesService.ToggleStatusOffline(this.SignUpService.userPlace, this.user);
//       this.enable();
    
//       }else{
//         this.alertOffline();
//       }
//     })

//   }  
// }




//  getTrip(){

//     this.afDB.database.ref(this.SignUpService.userPlace + '/trips/'+ this.user +'/'+ this.keyTrip)
//     .once('value').then((snapshot) => {
//       let trip = snapshot.val();
//       console.log(trip);

//       if(trip === null || trip === undefined){
//         console.log("borre");
//         //  this.TripsService.eraseKeyTrip(this.user);
//       //  this.TripsService.setOnTripFalse(this.user);
//       }else{
//         this.getOnTrip();
//       }
//     })
    
//  } 


//  getOnTrip(){
//    this.TripsService.getOnTrip(this.SignUpService.userPlace, this.user)
//    .subscribe(onTrip=>{
//      this.onTrip =onTrip;
//      console.log(this.onTrip)
//    })
//  }
//  goToTrip(){
//   if (this.onTrip === true) {
//     console.log('DISPARADOR')
//     let modal = this.modalCtrl.create('MyridePage');                      
//     modal.present();
//   }else{
//     this.presentAlert('Error en el viaje','Intenta entrar otra vez, si el error persiste hay un problema con el viaje, porfavor elimina el viaje en Mis reservas','OK')
//   }
//  }
 

 
//   loadMap(){

//   // this gets current position and set the camera of the map and put a marker in your location
//   this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then((position) => {

//     let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//     console.log(latLng);

//     let mapOptions = {
//         center: latLng,
//         zoom: 17,
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//         zoomControl: false,
//           mapTypeControl: false,
//           scaleControl: false,
//           streetViewControl: false,
//           rotateControl: false,
//           fullscreenControl: false,
//           styles: [
//             {
//               featureType: 'poi',
//               elementType: 'labels.icon',
//               stylers: [
//                 {
//                   visibility: 'off'
//                 }
//               ]
//             }
//           ]
//       }
//   //creates the map and give options
//     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//     this.myLatLng = {lat: position.coords.latitude , lng: position.coords.longitude};
      
//     this.markerGeolocation = new google.maps.Marker({
//       map: this.map,
//       animation: google.maps.Animation.DROP,
//       position: latLng,
//       draggable:true,
//       icon: {         url: "assets/imgs/house.png",
//       scaledSize: new google.maps.Size(70, 70)    

//     }
//     });
//     this.markers.push(this.markerGeolocation);

//     //allow the marker to be draged and changed the position
//     this.dragMarkerOr(this.markerGeolocation,this.autocompleteMyPos);
//     //to reverse-geocode position
//     this.geocodeLatLng(latLng,this.autocompleteMyPos);
// console.log(this.userInfo.fixedLocation.name);

//      this.markerDest = new google.maps.Marker({
//             position: this.positionDest,
//             map: this.map,
//             animation: google.maps.Animation.DROP,
//                icon: {         url: "assets/imgs/workbuilding.png",
//             scaledSize: new google.maps.Size(250, 250)    
//              }})
            

//              this.calculateRoute(latLng,this.positionDest);
//               this.directionsDisplay.setMap(this.map);
   
//     },(err) => {
//     console.log(err);    
//    });

//   }
  
//    calculateRoute(positionOr,positionDest){
//     //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/
//     //calculate route between markers
//     console.log("LO LOGREEEEEEEEEEEE");
    

//     this.bounds.extend(this.myLatLng);

    
  
//     this.map.fitBounds(this.bounds);
    
//     this.directionsService.route({
//      origin: positionOr,
//       destination: this.positionDest,
//       travelMode: google.maps.TravelMode.DRIVING,
//       avoidTolls: true
//     }, (response, status)=> {
//       //render
//       if(status === google.maps.DirectionsStatus.OK) {
//         this.directionsDisplay.setDirections(response);
//       }else{
//         alert('Could not display directions due to: ' + status);
//       }
      
//     });  
    
    
//   }
  


// //autocomplete of myPosition searchbar
// updateSearchResultsMyPos(){
//     if (this.autocompleteMyPos.input == '') {
//       this.autocompleteItems = [];     
//       return;
//     }
//     this.GoogleAutocomplete.getPlacePredictions({ input: this.autocompleteMyPos.input, componentRestrictions: {country:'co'} },
//     (predictions, status) => {
//       this.autocompleteItems = [];
//       if(predictions){
//         this.zone.run(() => {
//           predictions.forEach((prediction) => {
//             this.autocompleteItems.push(prediction);
//           });
//         });
//       }
//   });
// }

//   ////select result of my position searchbar
// selectSearchResultMyPos(item){
//   this.autocompleteItems=[];

//   this.clearMarkers();

//   this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
//     if(status === 'OK' && results[0]){
      
//       // let position = {
//       //     lat: results[0].geometry.location.lat,
//       //     lng: results[0].geometry.location.lng
//       // };

      
//         this.markerGeolocation = new google.maps.Marker({
//         position: results[0].geometry.location,
//         map: this.map,
//         draggable: true,
//         icon: {         url: "assets/imgs/marker-origin-driver.png",
//         scaledSize: new google.maps.Size(90, 90)    

//       },
//       animation: google.maps.Animation.DROP,

//       });
//       this.dragMarkerOr(this.markerGeolocation,this.autocompleteMyPos)
//       this.markers.push( this.markerGeolocation);
//       this.map.setCenter(results[0].geometry.location);
//       console.log(results[0].geometry.location);
//       this.autocompleteMyPos.input=[item.description]
//        this.calculateRoute(results[0].geometry.location,this.positionDest);
//       // this.directionsDisplay.setMap(null)
//     }
//   })
  
  
// }

//   ////select result of my destination searchbar

// showMyDest(item){

//   // this.geocoder.geocode({'placeId': item}, (results, status) => {
//   //   if(status === 'OK' && results[0]){

//   //     // let position = {
//   //     //   latitude: results[0].geometry.location.lat,
//   //     //   longitude: results[0].geometry.location.lng
//   //     // };
//   //       let position = new google.maps.LatLng( results[0].geometry.location.lat,
//   //        results[0].geometry.location.lng)
//   //         console.log(position)
//   //      this.markerDest = new google.maps.Marker({
//   //       position: results[0].geometry.location,
//   //       map: this.map,
//   //       animation: google.maps.Animation.DROP,
//   //       draggable:true,
//   //          icon: {         url: "assets/imgs/marker-destination2.png",
//   //       scaledSize: new google.maps.Size(90, 90)    
//   //        }})
//   //     }
//   //   })
//   }  
// ////////Markers
// clearMarkers(){
//     for (var i = 0; i < this.markers.length; i++) {
      
//       this.markers[i].setMap(null);
//     }
//     this.markers = [];
//   }
  
 
// dragMarkerOr(marker,inputName){
//      //allow origin marker to be draged and calculate route with the new position

//   google.maps.event.addListener(marker, 'dragend',  (evt) => {
//     let lat = marker.getPosition().lat()
//     let lng = marker.getPosition().lng()
//     let latLng = {lat,lng}
//    console.log(latLng);
   
//     this.geocodeLatLng(latLng,inputName)
    
//     this.calculateRoute(latLng,this.positionDest);

    
// })
// }
// centerMap(){

// }
// geocodeLatLng(latLng,inputName) {

//   this.geocoder.geocode({'location': latLng}, (results, status) => {
//     if (status === 'OK') {
//       if (results[0]) {
//          inputName.input=[results[0].formatted_address]
//       } else {
//        alert('No results found');
//       }
//     } else {
//       alert('Geocoder failed due to: ' + status);
//     }
                

//   });
// }


  

//   listride(){
//     if(this.currentUser.emailVerified == false){
//       const alert = this.alertCtrl.create({
//         title: 'Oops!',
//         subTitle: 'por favor verifica tu email',
//         buttons: ['OK']
//       });
//       alert.present();  
//     }else{
//       if(this.userInfo.documents){
//         if(this.userInfo.documents.license == true && this.userInfo.documents.id == true){
//           try {
//             this.orFirebase=[this.autocompleteMyPos.input]
//             this.desFirebase=[this.userInfo.fixedLocation.name]   


//             console.log(this.orFirebase);
//           if( this.autocompleteMyPos.input==''){
//                 this.presentAlert('No tienes toda la informacion','Por favor asegurate de que la dirección de tu casa sea la correcta','Ok');
//                 this.clearMarkers();
                
//                 this.directionsDisplay.setDirections({routes: []});
//                 this.loadMap();
//                } else {
                 
//                 this.sendCoordsService.pushcoordinatesDrivers(this.SignUpService.userPlace, this.user,this.desFirebase,this.orFirebase)
       
//                 this.geoInfo1 = this.myLatLng;
//                 console.log(this.geoInfo1);
              
               

//                 console.log("AQUIIIIIIIIIIIIIII")
//                 console.log(this.geoInfo2.lat);
//                 //turn on geoquery university to determine wether the user is in university
//                 this.geofireService.setGeofirePlace(this.SignUpService.userPlace, 0.56, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.user);
//                //
//                 this.confirmPrice(this.geoInfo1, this.geoInfo2);
                      
//               }
            
//              }
             
//           catch(error) {
//             // console.log(error);
//             // if(this.geoInfo2.lat === null || this.geoInfo2.lat === undefined ){
//             //   //this is to tell the user to select a place before publishing a trip
//             //   this.presentAlert('Información Incompleta','no puedes publicar un viaje sin antes seleccionar un lugar de la lista.','Ok') 
//             // }else {
//             //   this.presentAlert('Hay un error en la aplicación','Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.','Ok') 

//             // }
//             }
      
//             console.log(this.orFirebase);
//         }else{
//           let alert = this.alertCtrl.create({
//             title: '¡oh-uh!',
//             subTitle: 'faltan documentos por subir, dirigete a perfil, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
//            buttons: [
//             { 
//               text: 'Subir mis documentos',
//               handler: () => {
//                 this.navCtrl.push('CarRegistrationPage');
//               }
//             },
//               {
//                 text: 'Cancelar',
//                 role: 'cancel',
//                 handler: () => {
               
//                 }
//               }
//             ],
//             cssClass: 'alertDanger'
//           });
//           alert.present();
//         }
//       }else{
//         let alert = this.alertCtrl.create({
//           title: '¡oh-oh!',
//           subTitle: 'faltan documentos por subir, dirigete a perfil, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
//          buttons: [
//           { 
//             text: 'Subir mis documentos',
//             handler: () => {
//               this.navCtrl.push('CarRegistrationPage');
//             }
//           },
//             {
//               text: 'Cancelar',
//               role: 'cancel',
//               handler: () => {
             
//               }
//             }
//           ],
//           cssClass: 'alertDanger'
//         });
//         alert.present();
//       }
//     }
  

// }


//     presentAlert(title,text,button) {
//       let alert = this.alertCtrl.create({
//         title: title,
//         subTitle: text,
//         buttons: [button]
//       });
//       alert.present();
//     }

  

   
  
//    confirmPrice(houseAddr, placeAddr){
//      this.doGeoquery = false;
     
//       let modal = this.modalCtrl.create('ConfirmpricePage', {houseAddr, placeAddr});
//       modal.present();

//    }



//    help(){
//     const toast = this.toastCtrl.create({
//       message: 'En esta página podrás conectarte con compañeros de tu misma universidad que quieran compartir un viaje contigo.',
//      showCloseButton:true,
//       closeButtonText: 'OK',
//               position:'top'
//          });
//     toast.present();
//   }
//   disable() {
//     const inputs: any = document.getElementById("input").getElementsByTagName("INPUT");
//     inputs[0].disabled=true;
//     // const inputs2: any = document.getElementById("input2").getElementsByTagName("INPUT");
//     // inputs2[0].disabled=true;
//         }



//         enable() {
//           const inputs: any = document.getElementById("input").getElementsByTagName("INPUT");
//           inputs[0].disabled=false;
//           // const inputs2: any = document.getElementById("input2").getElementsByTagName("INPUT");
//           // inputs2[0].disabled=false;
//           //     }
//   }  
//   showPopup() {
//     let profileModal = this.modalCtrl.create('SuccessNotificationPage');
//     profileModal.present();

//   //   setTimeout(() => {
//   //     profileModal.dismiss();
//   // }, 3000);
//   }




//   alertOffline(){
//     let alert = this.alertCtrl.create({
//       title: '¿Quieres desconectarte?',
//       message: 'Waypool te conectó con otra persona, si te desconectas, le cancelarás el viaje',
//       buttons: [
//         {
//           text: 'Ir a Mis Viajes',
          
//           handler: () => {
//             this.navCtrl.push('ReservetripPage');
//           }
//         },
//         {
//           text: 'Offline :(',
//           handler: () => {
//             this.isConected = false;
//             this.isDisconected = true;
//             this.changeColorOffline();
//             this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/' + this.user).once('value').then(snap => {
                            
//               console.log(snap.val()); 
//               let obj = snap.val();
//               Object.getOwnPropertyNames(obj).forEach(key => {
//                 console.log(obj[key]);
//                 if(obj[key].type === 'origin'){
//                       this.geofireService.deleteUserGeofireOr(this.SignUpService.userPlace, key);
//                 }else if(obj[key].type === 'destination'){
//                       this.geofireService.deleteUserGeofireDest(this.SignUpService.userPlace, key);
//                     }             
//               })
//             }).then(()=>{
//               this.TripsService.deleteAllReserves(this.SignUpService.userPlace, this.user);
//             })
//             this.instancesService.ToggleStatusOffline(this.SignUpService.userPlace, this.user);
//             this.enable();
//           }
//         }
//       ]
//     });
//     alert.present();
//   }
 
// }



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
  selector: 'page-findride',
  templateUrl: 'findride.html'
})
export class FindridePage {
 

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

  
  constructor( private geofireService: geofireService,public TripsService:TripsService, public afDB: AngularFireDatabase, public navCtrl: NavController,public SignUpService:SignUpService,public modalCtrl: ModalController,private authenticationService: authenticationService, public geolocation: Geolocation,public zone: NgZone, public sendCoordsService: sendCoordsService, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private toastCtrl: ToastController, private app: App, private sendUsersService: sendUsersService, public instancesService: instancesService, public firebaseNative: Firebase, private platform: Platform, private fcm: FCM, public loadingCtrl: LoadingController, public renderer: Renderer ) {


    
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.geocoder = new google.maps.Geocoder;

    this.autocompleteMyPos = { input: '' };

    this.autocompleteItems = [];
    
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


      // this.getToken();

      console.log('aqui cogi el token');

      this.token = this.fcm.getToken().then((token)=>{
        console.log('this is the token ' + token);
        this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/devices/').update({
          token: token
        })
      })
  
  })
  this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/'+this.user).once('value').then((snap)=>{
    this.userInfo = snap.val();
    console.log(this.userInfo);
    
    let lat=this.userInfo.fixedLocation.coordinates.lat
    console.log(this.lat);
    
    let lng=this.userInfo.fixedLocation.coordinates.lng
    this.positionDest = {lat,lng};
    console.log(this.positionDest);
   
    

    if(this.userInfo.toggleStatus === 'online'){
      // this.checked = true;
      this.isConected = true;
      this.isDisconected = false;
      this.changeColorOnline();
    }else{
      this.isConected = false;
      this.isDisconected = true;
      this.changeColorOffline();
    }
    if (this.userInfo.houseAddress === undefined || this.userInfo.houseAddress === null) {
      this.LoadMapWithoutHouseAdress();


    } else {
      let latOr = this.userInfo.houseAddress.coordinates.lat;

    let lngOr = this.userInfo.houseAddress.coordinates.lng;
    this.positionOr = {latOr,lngOr};
    console.log(this.positionOr);
    
    this.LoadMapWithHouseAdress(this.positionOr);

    }
  })
    
  
  //search keyTrip

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
    //  console.log(this.SignUpService.userPlace);
    //  this.geofireService.getLocationPlace(this.SignUpService.userPlace).subscribe(university=>{
    //    this.university = university
    //    this.locationUniversity = this.university.location;
    //    this.geofireService.setLocationPlace(this.SignUpService.userPlace, "some_key", this.locationUniversity.lat, this.locationUniversity.lng);
    //  })

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


  })
}



async getToken() {

  if (this.platform.is('android')) {
    this.token = await this.firebaseNative.getToken().then((token)=>{
      console.log('this is the token ' + token);
      this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/devices/').update({
        token: token
      })
    })
  }

  if (this.platform.is('ios')) {
    this.token = await this.firebaseNative.getToken().then((token)=>{
      console.log('this is the token ' + token);
      this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/devices/').update({
        token: token
      })
    })
    await this.firebaseNative.grantPermission();
  }

}
changeColorOnline(){
  this.renderer.setElementStyle(this.buttonConected.nativeElement,'background-color','green')
  this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-width','2px')
  this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-style','solid')
  this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-color','green')

  this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-width','2px')
  this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-style','solid')
  this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-color','green')

  this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'background-color','transparent')
  this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'font-color','#bfbfbf')

  this.showPopup();
}
changeColorOffline(){
  this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-width','2px')
  this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'background-color','rgb(167, 23, 23)')
  this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-style','solid')
  this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-color','rgb(167, 23, 23)')

  this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-width','2px')
  this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-style','solid')
  this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-color','rgb(167, 23, 23)')
  this.renderer.setElementStyle(this.buttonConected.nativeElement,'background-color','transparent')
  this.renderer.setElementStyle(this.buttonConected.nativeElement,'font-color','#bfbfbf')

}
conectDriver(){
  if(this.userInfo.toggleStatus === 'online'){
    const alert = this.alertCtrl.create({
      title: '¡Ya estas conectado!',
      subTitle: 'Si deseas cambiar el precio de tus viajes, desconectate y vuelvete a conectar',
      buttons: ['OK']
    });
    alert.present(); 
    }else{
      this.isConected = true;
  this.isDisconected = false;
  
  if(this.currentUser.emailVerified == false){
    const alert = this.alertCtrl.create({
      title: 'Oops!',
      subTitle: 'por favor verifica tu email',
      buttons: ['OK']
    });
    alert.present(); 
    this.isConected = false;
  this.isDisconected = true;
  this.changeColorOffline();
  }else{

    if(this.userInfo.documents){
      if(this.userInfo.documents.license == true && this.userInfo.documents.id == true){
        if(this.userInfo.schedule){
          try{
          
            this.houseAddress = this.autocompleteMyPos.input;
            this.placeAddress = this.userInfo.fixedLocation.name;
            console.log(this.houseAddress);
            
  
            if(this.autocompleteMyPos.input == ''){
              this.presentAlert('No tienes toda la informacion','Por favor asegura que tengas las dirección de tu casa sea correcta','Ok');
              this.isConected = false;
              this.isDisconected = true;
              this.changeColorOffline();
              // this.clearMarkers();
              // this.directionsDisplay.setDirections({routes: []});
              // this.loadMap();
            }else{
                console.log(this.houseAddress[0]);
                console.log(this.geocoordinatesHouse.latOr);
                        console.log(this.autocompleteMyPos.input);

                //wait to get name and coordinates for confirmPricePage when the geofire starts
                this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/houseAddress/').update({
                  name: this.houseAddress[0]
                }).then((token)=>{
                  this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/houseAddress/coordinates').update({
                    lat:this.geocoordinatesHouse.latOr,
                    lng:this.geocoordinatesHouse.lngOr
                  })
                  
                }).then((token)=>{
                  // start modal
                  let modal = this.modalCtrl.create('ConfirmpricePage');
                  modal.onDidDismiss(accepted => {
                    if(accepted){
                      this.instancesService.ToggleStatusOnline(this.SignUpService.userPlace, this.user);
                      this.changeColorOnline();
                   
                      console.log("estoy true")
                      this.disable();
                      console.log(this.userInfo.fixedLocation.name);                 
                    }else{
                      this.presentAlert('Información incompleta','Por favor escribe toda la información para conectarte','OK')
  
                    }         
                  })
               modal.present();    
                  
                })
               
            }
          }catch(error){
            console.log(error);
            
          }
        }else{
          let alert = this.alertCtrl.create({
            title: 'No tienes ningún horario',
            subTitle: 'Por favor arma tu horario o mandanos foto del horario',
           buttons: [
            { 
              text: 'Mandar mi horario',
              handler: () => {
                this.navCtrl.push('SchedulePage');
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
          this.isConected = false;
        this.isDisconected = true;
        this.changeColorOffline();
        }
        


      }else{
          let alert = this.alertCtrl.create({
            title: '¡oh-uh!',
            subTitle: 'faltan documentos por subir, dirigete al menú, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
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
        this.isConected = false;
        this.isDisconected = true;
        this.changeColorOffline();
    }else{
      let alert = this.alertCtrl.create({
        title: '¡oh-oh!',
        subTitle: 'faltan documentos por subir, dirigete al menú, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
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
      this.isConected = false;
        this.isDisconected = true;
        this.changeColorOffline();
     }
    }
  
  }

}


  
  




disconectDriver(){
  if(this.userInfo.toggleStatus === 'offline'){ 
    //do nothing
  }else{

    //get all reserves from driver
    this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/'+this.user).once('value').then((snapReserve)=>{
      this.driverReserves = snapReserve.val();

      console.log(this.driverReserves);

      
       //este if sirve para saber si si hay reservas y no crashear la app al desconectarse
      if(snapReserve.val() === null || snapReserve.val() === undefined ){
        this.isConected = false;
        this.isDisconected = true;
        this.changeColorOffline();
        this.instancesService.ToggleStatusOffline(this.SignUpService.userPlace, this.user);
        this.enable();
      }else{
        let obj = this.driverReserves;
      Object.getOwnPropertyNames(obj).forEach((key)=>{
        console.log(obj[key]);
        //check if user have any user in their reserve
        console.log(obj[key].pendingUsers);
        
        if (obj[key].pendingUsers !== undefined) {
          
          this.fullReserves.push(obj[key])

        } else {
          //there is people in the drivers' reserve
          console.log("funciono");
         
        }

      })
      }
      
    }).then(()=>{

      //este if sirve para saber si si hay reservas y no crashear la app al desconectarse
      if(this.driverReserves === null || this.driverReserves === undefined){
        this.isConected = false;
        this.isDisconected = true;
        this.changeColorOffline();
        this.instancesService.ToggleStatusOffline(this.SignUpService.userPlace, this.user);
        this.enable();
      }else{
        if( this.fullReserves.length === 0 ||  this.fullReserves.length === undefined ){
          this.isConected = false;
        this.isDisconected = true;
        this.changeColorOffline();
        this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/' + this.user).once('value').then(snap => {
                        
          console.log(snap.val()); 
          let obj = snap.val();
          Object.getOwnPropertyNames(obj).forEach(key => {
            console.log(obj[key]);
            if(obj[key].type === 'origin'){
                  this.geofireService.deleteUserGeofireOr(this.SignUpService.userPlace, key);
            }else if(obj[key].type === 'destination'){
                  this.geofireService.deleteUserGeofireDest(this.SignUpService.userPlace, key);
                }             
          })
        }).then(()=>{
          this.TripsService.deleteAllReserves(this.SignUpService.userPlace, this.user);
        })
        this.instancesService.ToggleStatusOffline(this.SignUpService.userPlace, this.user);
        this.enable();
      
        }else{
          this.alertOffline();
        }
      }
    })

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
    //check if user have houseAddress
    if(this.houseAddress === undefined){
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
  //to reverse-geocode position
  this.geocodeLatLng(latLng,this.autocompleteMyPos);
console.log(this.userInfo.fixedLocation.name);

   this.markerDest = new google.maps.Marker({
          position: this.positionDest,
          map: this.map,
          animation: google.maps.Animation.DROP,
             icon: {         url: "assets/imgs/workbuilding.png",
          scaledSize: new google.maps.Size(250, 250)    
           }})
          

           this.calculateRoute(latLng,this.positionDest);
            this.directionsDisplay.setMap(this.map);
 
  },(err) => {
  console.log(err);    
 });
    }else{

    }
 

  }
  
   calculateRoute(positionOr,positionDest){
    //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/
    //calculate route between markers
    console.log("LO LOGREEEEEEEEEEEE");
    

    this.bounds.extend(this.myLatLng);

    
  
    this.map.fitBounds(this.bounds);
    
    this.directionsService.route({
     origin: positionOr,
      destination: this.positionDest,
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
      
      this.dragMarkerOr(this.markerGeolocation,this.autocompleteMyPos)
      this.markers.push( this.markerGeolocation);
      this.map.setCenter(results[0].geometry.location);
      console.log(results[0].geometry.location);
      this.autocompleteMyPos.input=[item.description];
      this.calculateRoute(results[0].geometry.location,this.positionDest);
      // this.directionsDisplay.setMap(null)
    }
  })
  
  
}

  ////select result of my destination searchbar

showMyDest(item){

  // this.geocoder.geocode({'placeId': item}, (results, status) => {
  //   if(status === 'OK' && results[0]){

  //     // let position = {
  //     //   latitude: results[0].geometry.location.lat,
  //     //   longitude: results[0].geometry.location.lng
  //     // };
  //       let position = new google.maps.LatLng( results[0].geometry.location.lat,
  //        results[0].geometry.location.lng)
  //         console.log(position)
  //      this.markerDest = new google.maps.Marker({
  //       position: results[0].geometry.location,
  //       map: this.map,
  //       animation: google.maps.Animation.DROP,
  //       draggable:true,
  //          icon: {         url: "assets/imgs/marker-destination2.png",
  //       scaledSize: new google.maps.Size(90, 90)    
  //        }})
  //     }
  //   })
  }  
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
    
    this.calculateRoute(latLng,this.positionDest);
    this.geocoordinatesHouse = latLngOr;
    
})
}
centerMap(){

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
            this.desFirebase=[this.userInfo.fixedLocation.name]   


            console.log(this.orFirebase);
          if( this.autocompleteMyPos.input==''){
                this.presentAlert('No tienes toda la informacion','Por favor asegurate de que la dirección de tu casa sea la correcta','Ok');
                this.clearMarkers();
                
                this.directionsDisplay.setDirections({routes: []});
                this.loadMap();
               } else {
                 
                this.sendCoordsService.pushcoordinatesDrivers(this.SignUpService.userPlace, this.user,this.desFirebase,this.orFirebase)
       
                this.geoInfo1 = this.myLatLng;
                console.log(this.geoInfo1);
               


      
              //   this.geoInfo2 = {
              //     lat: this.myLatLngDest.lat(),
              //     lng: this.myLatLngDest.lng()
              //   }
               

                console.log("AQUIIIIIIIIIIIIIII")
                console.log(this.geoInfo2.lat);
                //turn on geoquery university to determine wether the user is in university
                this.geofireService.setGeofirePlace(this.SignUpService.userPlace, 0.56, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.user);
               //
                this.confirmPrice(this.geoInfo1, this.geoInfo2);
                      
              }
            
             }
             
          catch(error) {
            // console.log(error);
            // if(this.geoInfo2.lat === null || this.geoInfo2.lat === undefined ){
            //   //this is to tell the user to select a place before publishing a trip
            //   this.presentAlert('Información Incompleta','no puedes publicar un viaje sin antes seleccionar un lugar de la lista.','Ok') 
            // }else {
            //   this.presentAlert('Hay un error en la aplicación','Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.','Ok') 

            // }
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

  

   
  
   confirmPrice(houseAddr, placeAddr){
     this.doGeoquery = false;
     
      let modal = this.modalCtrl.create('ConfirmpricePage', {houseAddr, placeAddr});
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
  disable() {
    const inputs: any = document.getElementById("input").getElementsByTagName("INPUT");
    inputs[0].disabled=true;
    // const inputs2: any = document.getElementById("input2").getElementsByTagName("INPUT");
    // inputs2[0].disabled=true;
        }



        enable() {
          const inputs: any = document.getElementById("input").getElementsByTagName("INPUT");
          inputs[0].disabled=false;
          // const inputs2: any = document.getElementById("input2").getElementsByTagName("INPUT");
          // inputs2[0].disabled=false;
          //     }
  }  
  showPopup() {
    let profileModal = this.modalCtrl.create('SuccessNotificationPage');
    profileModal.present();

  }
  LoadMapWithoutHouseAdress(){
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
    this.geocoordinatesHouse = {latOr: position.coords.latitude , lngOr: position.coords.longitude};

    //allow the marker to be draged and changed the position
    this.dragMarkerOr(this.markerGeolocation,this.autocompleteMyPos);
    //to reverse-geocode position
    this.geocodeLatLng(latLng,this.autocompleteMyPos);
console.log(this.userInfo.fixedLocation.name);

     this.markerDest = new google.maps.Marker({
            position: this.positionDest,
            map: this.map,
            animation: google.maps.Animation.DROP,
               icon: {         url: "assets/imgs/workbuilding.png",
            scaledSize: new google.maps.Size(250, 250)    
             }})
            

             this.calculateRoute(latLng,this.positionDest);
              this.directionsDisplay.setMap(this.map);
   
    },(err) => {
    console.log(err);    
   });
  }
 LoadMapWithHouseAdress(positionOr){
  this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then((position) => {

    let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    console.log(latLng);
   let  positionOrMarker = new google.maps.LatLng(positionOr.latOr,positionOr.lngOr);
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
      position: positionOrMarker,
      draggable:true,
      icon: {         url: "assets/imgs/house.png",
      scaledSize: new google.maps.Size(70, 70)    

    }
    });
    this.markers.push(this.markerGeolocation);
    this.geocoordinatesHouse = positionOr;

    //allow the marker to be draged and changed the position
    this.dragMarkerOr(this.markerGeolocation,this.autocompleteMyPos);
    //to reverse-geocode position
    this.geocodeLatLng(positionOrMarker,this.autocompleteMyPos);
    console.log(this.userInfo.fixedLocation.name);

     this.markerDest = new google.maps.Marker({
            position: this.positionDest,
            map: this.map,
            animation: google.maps.Animation.DROP,
               icon: {         url: "assets/imgs/workbuilding.png",
            scaledSize: new google.maps.Size(250, 250)    
             }})
            

             this.calculateRoute(positionOrMarker,this.positionDest);
              this.directionsDisplay.setMap(this.map);
   
    },(err) => {
    console.log(err);    
   });
 }




 alertOffline(){
      let alert = this.alertCtrl.create({
        title: '¿Quieres desconectarte?',
        message: 'Waypool te conectó con otra persona, si te desconectas, le cancelarás el viaje',
        buttons: [
          {
            text: 'Ir a Mis Viajes',
            
            handler: () => {
              this.navCtrl.push('ReservetripPage');
            }
          },
          {
            text: 'Offline :(',
            handler: () => {
              this.isConected = false;
              this.isDisconected = true;
              this.changeColorOffline();
              this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/' + this.user).once('value').then(snap => {
                              
                console.log(snap.val()); 
                let obj = snap.val();
                Object.getOwnPropertyNames(obj).forEach(key => {
                  console.log(obj[key]);
                  if(obj[key].type === 'origin'){
                        this.geofireService.deleteUserGeofireOr(this.SignUpService.userPlace, key);
                  }else if(obj[key].type === 'destination'){
                        this.geofireService.deleteUserGeofireDest(this.SignUpService.userPlace, key);
                      }             
                })
              }).then(()=>{
                this.TripsService.deleteAllReserves(this.SignUpService.userPlace, this.user);
              })
              this.instancesService.ToggleStatusOffline(this.SignUpService.userPlace, this.user);
              this.enable();
            }
          }
        ]
      });
      alert.present();
    }


}