webpackJsonp([18],{

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindridePageModule", function() { return FindridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__findride__ = __webpack_require__(770);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FindridePageModule = /** @class */ (function () {
    function FindridePageModule() {
    }
    FindridePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__findride__["a" /* FindridePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__findride__["a" /* FindridePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__findride__["a" /* FindridePage */]
            ]
        })
    ], FindridePageModule);
    return FindridePageModule;
}());

//# sourceMappingURL=findride.module.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_signup_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_geofire_services__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_driverauthentication_service__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_sendUsers_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_trips_service__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { TabsPage } from '../tabs/tabs';
// import { Geofence } from '@ionic-native/geofence';




// import { authenticationService } from '../../services/driverauthentication.service';

// import { Geofence } from '@ionic-native/geofence';





var FindridePage = /** @class */ (function () {
    function FindridePage(geofireService, TripsService, afDB, navCtrl, SignUpService, modalCtrl, authenticationService, geolocation, zone, sendCoordsService, AngularFireAuth, alertCtrl, toastCtrl, app, sendUsersService) {
        var _this = this;
        this.geofireService = geofireService;
        this.TripsService = TripsService;
        this.afDB = afDB;
        this.navCtrl = navCtrl;
        this.SignUpService = SignUpService;
        this.modalCtrl = modalCtrl;
        this.authenticationService = authenticationService;
        this.geolocation = geolocation;
        this.zone = zone;
        this.sendCoordsService = sendCoordsService;
        this.AngularFireAuth = AngularFireAuth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.sendUsersService = sendUsersService;
        // waypoints variables
        this.directionsService = null;
        this.directionsDisplay = null;
        this.bounds = null;
        this.myLatLng = [];
        //firebase 
        this.trip = {};
        this.tripId = null;
        this.user = this.AngularFireAuth.auth.currentUser.uid;
        this.currentUser = this.AngularFireAuth.auth.currentUser;
        this.driverInfo = {};
        this.geoInfo1 = {};
        this.geoInfo2 = {};
        //variables for geofire reserves
        this.reserves = [];
        this.locationUniversity = {};
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
        // set geofire key of university to avoid asking users to put where they are going
        this.geofireService.getLocationUniversity().subscribe(function (location) {
            _this.locationUniversity = location;
            _this.geofireService.setLocationUniversity("some_key", _this.locationUniversity.lat, _this.locationUniversity.lng);
        });
        //search keyTrip
        this.TripsService.getKeyTrip(this.user)
            .subscribe(function (keyTrip) {
            _this.keyTrip = keyTrip;
            console.log(_this.keyTrip);
            //if key its deleted don't show VIAJE EN CURSO  
            if (_this.keyTrip === undefined || _this.keyTrip === null) {
                _this.onTrip = false;
                //  this.TripsService.eraseKeyTrip(this.user);
                //  this.TripsService.setOnTripFalse(this.user);
                console.log("llegue adonde era");
            }
            else {
                //confirm that trip exist and get it
                _this.getTrip();
            }
        });
    } // END OF CONSTRUCTOR
    FindridePage.prototype.getTrip = function () {
        var _this = this;
        this.TripsService.getTrip(this.keyTrip, this.user)
            .subscribe(function (trip) {
            _this.trip = trip;
            console.log(_this.trip);
            //if there is no trip, eliminate key
            if (_this.trip === null || _this.trip === undefined) {
                console.log("borre");
                //  this.TripsService.eraseKeyTrip(this.user);
                //  this.TripsService.setOnTripFalse(this.user);
            }
            else {
                _this.getOnTrip();
            }
        });
    };
    FindridePage.prototype.getOnTrip = function () {
        var _this = this;
        this.TripsService.getOnTrip(this.user)
            .subscribe(function (onTrip) {
            _this.onTrip = onTrip;
            console.log(_this.onTrip);
        });
    };
    FindridePage.prototype.goToTrip = function () {
        if (this.onTrip === true) {
            console.log('DISPARADOR');
            var modal = this.modalCtrl.create('MyridePage');
            modal.present();
        }
        else {
            this.presentAlert('Error en el viaje', 'Intenta entrar otra vez, si el error persiste hay un problema con el viaje, porfavor elimina el viaje en Mis reservas', 'OK');
        }
    };
    FindridePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.SignUpService.getMyInfo(this.user).subscribe(function (user) {
            _this.userInfo = user;
            if (_this.userInfo.emailVerificationMessage !== true) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'VERIFICA TU EMAIL',
                    subTitle: 'te hemos enviado un correo de verificación. Sigue los pasos del correo para empezar a disfrutar de Waypool.',
                    buttons: ['OK']
                });
                alert_1.present();
                _this.SignUpService.emailVerificationMessage(_this.user);
            }
            else {
            }
        });
        this.doGeoquery = true;
        if (this.doGeoquery === true) {
            //here I will try to make the geofire lasts until it is deleted 
            this.sendUsersService.getTripsOfReserves(this.user).subscribe(function (reserves) {
                _this.reserves = reserves;
                console.log(_this.reserves);
                _this.reserves.forEach(function (reserve) {
                    if (reserve.type === 'origin') {
                        _this.geocoder.geocode({ 'address': reserve.origin[0][0] }, function (results, status) {
                            if (status === 'OK') {
                                _this.geocoordinatesOr = {
                                    lat: results[0].geometry.location.lat(),
                                    lng: results[0].geometry.location.lng()
                                };
                            }
                            // turn geofire On
                            _this.geofireService.setGeofireOr(2, _this.geocoordinatesOr.lat, _this.geocoordinatesOr.lng, reserve.geofireKey, _this.user, reserve.keyTrip);
                            console.log('executed geoquery Or in constructor findride');
                        });
                    }
                    else if (reserve.type === 'destination') {
                        // geocoding of addresses that came from findRide
                        _this.geocoder.geocode({ 'address': reserve.destination[0][0] }, function (results, status) {
                            if (status === 'OK') {
                                _this.geocoordinatesDest = {
                                    lat: results[0].geometry.location.lat(),
                                    lng: results[0].geometry.location.lng()
                                };
                            }
                            // turn geofire On
                            _this.geofireService.setGeofireDest(2, _this.geocoordinatesDest.lat, _this.geocoordinatesDest.lng, reserve.geofireKey, _this.user, reserve.keyTrip);
                            console.log('executed geoquery Dest in constructor findride');
                        });
                    }
                });
            });
        }
        this.loadMap();
    };
    FindridePage.prototype.loadMap = function () {
        var _this = this;
        // this gets current position and set the camera of the map and put a marker in your location
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
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
            };
            //creates the map and give options
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.myLatLng = { lat: position.coords.latitude, lng: position.coords.longitude };
            _this.markerGeolocation = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: latLng,
                draggable: true,
                icon: { url: "assets/imgs/marker-origin-driver.png",
                    scaledSize: new google.maps.Size(90, 90)
                }
            });
            _this.markers.push(_this.markerGeolocation);
            //allow the marker to be draged and changed the position
            _this.dragMarkerOr(_this.markerGeolocation, _this.autocompleteMyPos);
            //to reverse-geocode position
            _this.geocodeLatLng(latLng, _this.autocompleteMyPos);
        }, function (err) {
            console.log(err);
        });
    };
    FindridePage.prototype.calculateRoute = function (positionOr, positionDest) {
        //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/
        //calculate route between markers
        var _this = this;
        this.bounds.extend(this.myLatLng);
        this.map.fitBounds(this.bounds);
        this.directionsService.route({
            origin: positionOr,
            destination: positionDest,
            travelMode: google.maps.TravelMode.DRIVING,
            avoidTolls: true
        }, function (response, status) {
            //render
            if (status === google.maps.DirectionsStatus.OK) {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                alert('Could not display directions due to: ' + status);
            }
        });
    };
    //autocomplete of myPosition searchbar
    FindridePage.prototype.updateSearchResultsMyPos = function () {
        var _this = this;
        if (this.autocompleteMyPos.input == '') {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocompleteMyPos.input, componentRestrictions: { country: 'co' } }, function (predictions, status) {
            _this.autocompleteItems = [];
            if (predictions) {
                _this.zone.run(function () {
                    predictions.forEach(function (prediction) {
                        _this.autocompleteItems.push(prediction);
                    });
                });
            }
        });
    };
    ////autocomplete of my destination Searchbar
    FindridePage.prototype.updateSearchResultsMyDest = function () {
        var _this = this;
        if (this.autocompleteMyDest.input == '') {
            this.autocompleteItems2 = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocompleteMyDest.input, componentRestrictions: { country: 'co' } }, function (predictions, status) {
            _this.autocompleteItems2 = [];
            if (predictions) {
                _this.zone.run(function () {
                    predictions.forEach(function (prediction) {
                        _this.autocompleteItems2.push(prediction);
                    });
                });
            }
        });
    };
    ////select result of my position searchbar
    FindridePage.prototype.selectSearchResultMyPos = function (item) {
        var _this = this;
        this.autocompleteItems = [];
        this.clearMarkers();
        this.geocoder.geocode({ 'placeId': item.place_id }, function (results, status) {
            if (status === 'OK' && results[0]) {
                // let position = {
                //     lat: results[0].geometry.location.lat,
                //     lng: results[0].geometry.location.lng
                // };
                _this.markerGeolocation = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: _this.map,
                    draggable: true,
                    icon: { url: "assets/imgs/marker-origin-driver.png",
                        scaledSize: new google.maps.Size(90, 90)
                    },
                    animation: google.maps.Animation.DROP,
                });
                _this.dragMarkerOr(_this.markerGeolocation, _this.autocompleteMyPos);
                _this.markers.push(_this.markerGeolocation);
                _this.map.setCenter(results[0].geometry.location);
                console.log(results[0].geometry.location);
                _this.autocompleteMyPos.input = [item.description];
                _this.autocompleteMyDest.input = '';
                _this.directionsDisplay.setMap(null);
            }
        });
    };
    ////select result of my destination searchbar
    FindridePage.prototype.selectSearchResultMyDest = function (item) {
        var _this = this;
        this.autocompleteItems2 = [];
        if (this.markerDest !== undefined) {
            this.markerDest.setMap(null);
        }
        this.geocoder.geocode({ 'placeId': item.place_id }, function (results, status) {
            if (status === 'OK' && results[0]) {
                // let position = {
                //   latitude: results[0].geometry.location.lat,
                //   longitude: results[0].geometry.location.lng
                // };
                var position = new google.maps.LatLng(results[0].geometry.location.lat, results[0].geometry.location.lng);
                console.log(position);
                _this.markerDest = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: _this.map,
                    animation: google.maps.Animation.DROP,
                    draggable: true,
                    icon: { url: "assets/imgs/marker-destination2.png",
                        scaledSize: new google.maps.Size(90, 90)
                    }
                });
                console.log(position);
                _this.map.fitBounds(_this.bounds);
                _this.markers.push(_this.markerDest);
                _this.map.setCenter(results[0].geometry.location);
                console.log(results[0].geometry.location);
                _this.autocompleteMyDest.input = [item.description];
                _this.dragMarkerDest(_this.markerDest, _this.autocompleteMyDest);
                _this.directionsDisplay.setMap(_this.map);
                _this.myLatLngDest = results[0].geometry.location;
                _this.calculateRoute(_this.markerGeolocation.position, results[0].geometry.location);
            }
        });
    };
    ////////Markers
    FindridePage.prototype.clearMarkers = function () {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
        this.markers = [];
    };
    FindridePage.prototype.dragMarkerDest = function (marker, inputName) {
        var _this = this;
        //allow destination marker to be draged and calculate route with the new position
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            var lat = marker.getPosition().lat();
            var lng = marker.getPosition().lng();
            var latLng = { lat: lat, lng: lng };
            _this.map.setCenter(latLng);
            _this.geocodeLatLng(latLng, inputName);
            _this.calculateRoute(_this.markerGeolocation.position, latLng);
        });
    };
    FindridePage.prototype.dragMarkerOr = function (marker, inputName) {
        //allow origin marker to be draged and calculate route with the new position
        var _this = this;
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            var lat = marker.getPosition().lat();
            var lng = marker.getPosition().lng();
            var latLng = { lat: lat, lng: lng };
            _this.map.setCenter(latLng);
            _this.geocodeLatLng(latLng, inputName);
            if (_this.autocompleteMyDest.input == undefined || _this.autocompleteMyDest.input == '') {
                console.log("funciona");
            }
            else {
                _this.calculateRoute(latLng, _this.markerDest.position);
            }
        });
    };
    FindridePage.prototype.geocodeLatLng = function (latLng, inputName) {
        this.geocoder.geocode({ 'location': latLng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    inputName.input = [results[0].formatted_address];
                }
                else {
                    alert('No results found');
                }
            }
            else {
                alert('Geocoder failed due to: ' + status);
            }
        });
    };
    FindridePage.prototype.listride = function () {
        var _this = this;
        if (this.currentUser.emailVerified == false) {
            var alert_2 = this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'por favor verifica tu email',
                buttons: ['OK']
            });
            alert_2.present();
        }
        else {
            if (this.userInfo.documents) {
                if (this.userInfo.documents.license == true && this.userInfo.documents.id == true) {
                    try {
                        this.orFirebase = [this.autocompleteMyPos.input];
                        this.desFirebase = [this.autocompleteMyDest.input];
                        console.log(this.orFirebase);
                        if (this.autocompleteMyDest.input == '' || this.autocompleteMyPos.input == '') {
                            this.presentAlert('No tienes toda la informacion', 'Por favor asegura que tu origen y destino sean correctos', 'Ok');
                            this.clearMarkers();
                            this.directionsDisplay.setDirections({ routes: [] });
                            this.loadMap();
                        }
                        else {
                            console.log("AQUIIIIIIIIIIIIIII");
                            console.log(this.desFirebase);
                            this.sendCoordsService.pushcoordinatesDrivers(this.user, this.desFirebase, this.orFirebase);
                            //se hara la geocerca y mostraran hasta 4 users q hayan escogido al driver, despues se le preguntara a dichos users que si tienen direccion, si tienen se le deja pasaral driver y si no no.
                            this.geoInfo1 = this.myLatLng;
                            console.log(this.geoInfo1);
                            console.log(this.geoInfo2);
                            console.log(this.geoInfo2.lat);
                            this.geoInfo2 = {
                                lat: this.myLatLngDest.lat(),
                                lng: this.myLatLngDest.lng()
                            };
                            console.log("AQUIIIIIIIIIIIIIII");
                            console.log(this.geoInfo2.lat);
                            //turn on geoquery university to determine wether the user is in university
                            this.geofireService.setGeofireUniversity(0.56, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.user);
                            this.confirmPrice(this.geoInfo1, this.geoInfo2);
                        }
                    }
                    catch (error) {
                        console.log(error);
                        if (this.geoInfo2.lat === null || this.geoInfo2.lat === undefined) {
                            //this is to tell the user to select a place before publishing a trip
                            this.presentAlert('Información Incompleta', 'no puedes publicar un viaje sin antes seleccionar un lugar de la lista.', 'Ok');
                        }
                        else {
                            this.presentAlert('Hay un error en la aplicación', 'Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.', 'Ok');
                        }
                    }
                    console.log(this.orFirebase);
                }
                else {
                    var alert_3 = this.alertCtrl.create({
                        title: '¡oh-uh!',
                        subTitle: 'faltan documentos por subir, dirigete a perfil, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
                        buttons: [
                            {
                                text: 'Subir mis documentos',
                                handler: function () {
                                    _this.navCtrl.push('CarRegistrationPage');
                                }
                            },
                            {
                                text: 'Cancelar',
                                role: 'cancel',
                                handler: function () {
                                }
                            }
                        ],
                        cssClass: 'alertDanger'
                    });
                    alert_3.present();
                }
            }
            else {
                var alert_4 = this.alertCtrl.create({
                    title: '¡oh-oh!',
                    subTitle: 'faltan documentos por subir, dirigete a perfil, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
                    buttons: [
                        {
                            text: 'Subir mis documentos',
                            handler: function () {
                                _this.navCtrl.push('CarRegistrationPage');
                            }
                        },
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            handler: function () {
                            }
                        }
                    ],
                    cssClass: 'alertDanger'
                });
                alert_4.present();
            }
        }
    };
    FindridePage.prototype.presentAlert = function (title, text, button) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [button]
        });
        alert.present();
    };
    FindridePage.prototype.availableReserves = function () {
        this.app.getRootNav().push('ReservetripPage');
    };
    FindridePage.prototype.confirmPrice = function (geoInfo1, geoInfo2) {
        var _this = this;
        this.doGeoquery = false;
        var modal = this.modalCtrl.create('ConfirmpricePage', { geoInfo1: geoInfo1, geoInfo2: geoInfo2 });
        modal.onDidDismiss(function (accepted) {
            if (accepted) {
                // this.navCtrl.push('ListridePage');
                _this.app.getRootNav().push('ReservetripPage');
            }
        });
        modal.present();
    };
    FindridePage.prototype.help = function () {
        var toast = this.toastCtrl.create({
            message: 'En esta página podrás conectarte con compañeros de tu misma universidad que quieran compartir un viaje contigo.',
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'top'
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], FindridePage.prototype, "mapElement", void 0);
    FindridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-findride',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\test\waypool_driver\waypool_driver\src\pages\findride\findride.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title><span class="text-white">COMPARTE TU VIAJE</span>\n\n            <ion-icon name="help-circle-outline" class="text-white" (click)="help() " style="margin-left: auto;float: right;"></ion-icon> \n\n        </ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content  padding>\n\n    \n\n    <ion-card class="search">\n\n          \n\n        <ion-card-content>\n\n            <span class="dot bg-theme"></span>\n\n            <ion-searchbar required [(ngModel)]="autocompleteMyPos.input" [animated]=true (ionInput)="updateSearchResultsMyPos()"  placeholder="Tu origen"></ion-searchbar>\n\n          \n\n            <ion-list   [hidden]="autocompleteItems.length == 0">\n\n                <ion-item  *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResultMyPos(item)">\n\n                  {{ item.description }}\n\n                </ion-item>\n\n              </ion-list>\n\n              <!-- <ion-icon name="md-locate" (click)="getPositionAndMarker()" class="text-black"></ion-icon> -->\n\n        </ion-card-content>\n\n        <ion-card-content>\n\n            <span class="dot bg-yellow"></span>           \n\n           <ion-searchbar required [(ngModel)]="autocompleteMyDest.input" (ionInput)="updateSearchResultsMyDest()" placeholder="Tu destino"></ion-searchbar>\n\n\n\n\n\n            <ion-list   [hidden]="autocompleteItems2.length == 0">\n\n            <ion-item class="item" *ngFor="let item of autocompleteItems2" tappable (click)="selectSearchResultMyDest(item)">\n\n              {{ item.description }}\n\n            </ion-item>\n\n          </ion-list>\n\n            <!-- <span class="text-light search-text">Office &nbsp;<ion-icon name="ios-arrow-down" class="text-light"></ion-icon></span> -->\n\n\n\n        </ion-card-content>\n\n        \n\n    </ion-card>\n\n\n\n\n\n <div #map id="map"></div>  \n\n    <div></div>\n\n    \n\n    <ion-row class="rowOfButtons">\n\n\n\n            <div class="btn-footer btn-left">\n\n                    <button (click)="listride()" class="btn rounded bg-theme text-white" style="width: 100%">Publicar Viaje</button>\n\n            \n\n            </div>\n\n            <div class="btn-right">\n\n                  <button class="btn rounded bg-darkblue text-white myReservesButton" style="width: 100%" (click)="availableReserves()" >Mis Reservas</button>\n\n            </div>\n\n           \n\n          </ion-row>\n\n\n\n          <div *ngIf="onTrip" >\n\n            <button class="btn rounded bg-theme text-white animated infinite pulse" style=" width: 100% ;\n\n            position: fixed ;\n\n            bottom: 0px ;\n\n            left: 0px ;\n\n            height: 51px; \n\n            font-size: large;\n\n            \n\n        " (click)="goToTrip() " >VIAJE EN CURSO\n\n            </button>\n\n        </div>\n\n   \n\n\n\n    \n\n\n\n\n\n \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\test\waypool_driver\waypool_driver\src\pages\findride\findride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_geofire_services__["a" /* geofireService */], __WEBPACK_IMPORTED_MODULE_10__services_trips_service__["a" /* TripsService */], __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_8__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_9__services_sendUsers_service__["a" /* sendUsersService */]])
    ], FindridePage);
    return FindridePage;
}());

//# sourceMappingURL=findride.js.map

/***/ })

});
//# sourceMappingURL=18.js.map