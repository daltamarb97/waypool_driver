webpackJsonp([18],{

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindridePageModule", function() { return FindridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__findride__ = __webpack_require__(825);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__findride__["a" /* FindridePage */]),
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

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation___ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_signup_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_geofire_services__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_driverauthentication_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_sendUsers_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_trips_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_instances_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// import { TabsPage } from '../tabs/tabs';
// import { Geofence } from '@ionic-native/geofence';




// import { authenticationService } from '../../services/driverauthentication.service';

// import { Geofence } from '@ionic-native/geofence';








var FindridePage = /** @class */ (function () {
    function FindridePage(geofireService, TripsService, afDB, navCtrl, SignUpService, modalCtrl, authenticationService, geolocation, zone, sendCoordsService, AngularFireAuth, alertCtrl, toastCtrl, app, sendUsersService, instancesService, firebaseNative, platform, fcm) {
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
        this.instancesService = instancesService;
        this.firebaseNative = firebaseNative;
        this.platform = platform;
        this.fcm = fcm;
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
        this.isConected = false;
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
    FindridePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afDB.database.ref('allUsers/' + this.user).once('value').then(function (snap) {
            _this.SignUpService.userPlace = snap.val().place;
            console.log(_this.SignUpService.userPlace);
            _this.platform.ready().then(function () {
                _this.getToken();
                // this.token = this.fcm.getToken().then((token)=>{
                //   console.log('this is the token ' + token);
                //   this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/devices/').update({
                //     token: token
                //   })
                // })
            });
            _this.SignUpService.getMyInfo(_this.SignUpService.userPlace, _this.user).subscribe(function (user) {
                _this.userInfo = user;
                console.log(_this.userInfo);
                var lat = _this.userInfo.fixedLocation.coordinates.lat;
                console.log(_this.lat);
                var lng = _this.userInfo.fixedLocation.coordinates.lng;
                _this.positionDest = { lat: lat, lng: lng };
                console.log(_this.positionDest);
            });
            //search keyTrip
            //search keyTrip
            _this.TripsService.getKeyTrip(_this.SignUpService.userPlace, _this.user)
                .subscribe(function (keyTrip) {
                _this.keyTrip = keyTrip;
                console.log(_this.user);
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
            // set geofire key of university to avoid asking users to put where they are going
            console.log(_this.SignUpService.userPlace);
            _this.geofireService.getLocationPlace(_this.SignUpService.userPlace).subscribe(function (university) {
                _this.university = university;
                _this.locationUniversity = _this.university.location;
                _this.geofireService.setLocationPlace(_this.SignUpService.userPlace, "some_key", _this.locationUniversity.lat, _this.locationUniversity.lng);
            });
            console.log(_this.SignUpService.userPlace);
            _this.SignUpService.getMyInfo(_this.SignUpService.userPlace, _this.user).subscribe(function (user) {
                _this.userInfo = user;
                console.log(_this.userInfo);
                _this.afDB.database.ref('allPlaces/' + _this.SignUpService.userPlace).once('value').then(function (snap) {
                    _this.universityInfo = snap.val();
                    console.log(_this.universityInfo);
                    if (_this.universityInfo.emails == undefined) {
                        if (_this.userInfo.documents) {
                            if (_this.userInfo.documents.carne === undefined || _this.userInfo.documents.id === undefined) {
                                var modal = _this.modalCtrl.create('VerificationImagesPage');
                                modal.present();
                            }
                            else if (_this.userInfo.documents.carne === true && _this.userInfo.documents.id === true) {
                                _this.instancesService.isVerifiedPerson(_this.SignUpService.userPlace, _this.user);
                            }
                        }
                        else if (!_this.userInfo.documents) {
                            console.log('no hay docs');
                            var modal = _this.modalCtrl.create('VerificationImagesPage');
                            modal.present();
                        }
                    }
                    else {
                        _this.instancesService.isVerifiedPerson(_this.SignUpService.userPlace, _this.user);
                    }
                });
            });
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
            _this.loadMap();
        });
    };
    FindridePage.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.platform.is('android')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.firebaseNative.getToken().then(function (token) {
                                console.log('this is the token ' + token);
                                _this.afDB.database.ref(_this.SignUpService.userPlace + '/drivers/' + _this.user + '/devices/').update({
                                    token: token
                                });
                            })];
                    case 1:
                        _a.token = _c.sent();
                        _c.label = 2;
                    case 2:
                        if (!this.platform.is('ios')) return [3 /*break*/, 5];
                        _b = this;
                        return [4 /*yield*/, this.firebaseNative.getToken().then(function (token) {
                                console.log('this is the token ' + token);
                                _this.afDB.database.ref(_this.SignUpService.userPlace + '/drivers/' + _this.user + '/devices/').update({
                                    token: token
                                });
                            })];
                    case 3:
                        _b.token = _c.sent();
                        return [4 /*yield*/, this.firebaseNative.grantPermission()];
                    case 4:
                        _c.sent();
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FindridePage.prototype.conectDriver = function () {
        if (this.isConected === true) {
            console.log("estoy true");
            this.disable();
            console.log(this.userInfo.fixedLocation.name);
            var modal = this.modalCtrl.create('ConfirmpricePage');
            modal.onDidDismiss(function (accepted) {
                if (accepted) {
                    // // this.navCtrl.push('ListridePage');
                    // this.app.getRootNav().push('ReservetripPage');
                }
            });
            modal.present();
        }
        else {
            this.enable();
        }
    };
    FindridePage.prototype.getTrip = function () {
        var _this = this;
        this.afDB.database.ref(this.SignUpService.userPlace + '/trips/' + this.user + '/' + this.keyTrip)
            .once('value').then(function (snapshot) {
            var trip = snapshot.val();
            console.log(trip);
            if (trip === null || trip === undefined) {
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
        this.TripsService.getOnTrip(this.SignUpService.userPlace, this.user)
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
    FindridePage.prototype.loadMap = function () {
        var _this = this;
        // this gets current position and set the camera of the map and put a marker in your location
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            console.log(latLng);
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
                icon: { url: "assets/imgs/house.png",
                    scaledSize: new google.maps.Size(90, 90)
                }
            });
            _this.markers.push(_this.markerGeolocation);
            //allow the marker to be draged and changed the position
            _this.dragMarkerOr(_this.markerGeolocation, _this.autocompleteMyPos);
            //to reverse-geocode position
            _this.geocodeLatLng(latLng, _this.autocompleteMyPos);
            console.log(_this.userInfo.fixedLocation.name);
            _this.markerDest = new google.maps.Marker({
                position: _this.positionDest,
                map: _this.map,
                animation: google.maps.Animation.DROP,
                draggable: true,
                icon: { url: "assets/imgs/university.png",
                    scaledSize: new google.maps.Size(90, 90)
                }
            });
            _this.calculateRoute(latLng, _this.positionDest);
            _this.directionsDisplay.setMap(_this.map);
        }, function (err) {
            console.log(err);
        });
    };
    FindridePage.prototype.calculateRoute = function (positionOr, positionDest) {
        var _this = this;
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
                _this.calculateRoute(results[0].geometry.location, _this.positionDest);
                // this.directionsDisplay.setMap(null)
            }
        });
    };
    ////select result of my destination searchbar
    FindridePage.prototype.showMyDest = function (item) {
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
    };
    ////////Markers
    FindridePage.prototype.clearMarkers = function () {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
        this.markers = [];
    };
    FindridePage.prototype.dragMarkerOr = function (marker, inputName) {
        //allow origin marker to be draged and calculate route with the new position
        var _this = this;
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            var lat = marker.getPosition().lat();
            var lng = marker.getPosition().lng();
            var latLng = { lat: lat, lng: lng };
            console.log(latLng);
            _this.geocodeLatLng(latLng, inputName);
            _this.calculateRoute(latLng, _this.positionDest);
        });
    };
    FindridePage.prototype.centerMap = function () {
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
            var alert_1 = this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'por favor verifica tu email',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            if (this.userInfo.documents) {
                if (this.userInfo.documents.license == true && this.userInfo.documents.id == true) {
                    try {
                        this.orFirebase = [this.autocompleteMyPos.input];
                        this.desFirebase = [this.userInfo.fixedLocation.name];
                        console.log(this.orFirebase);
                        if (this.autocompleteMyPos.input == '') {
                            this.presentAlert('No tienes toda la informacion', 'Por favor asegura que tengas las dirección de tu casa sea correcta', 'Ok');
                            this.clearMarkers();
                            this.directionsDisplay.setDirections({ routes: [] });
                            this.loadMap();
                        }
                        else {
                            this.sendCoordsService.pushcoordinatesDrivers(this.SignUpService.userPlace, this.user, this.desFirebase, this.orFirebase);
                            this.geoInfo1 = this.myLatLng;
                            console.log(this.geoInfo1);
                            //   this.geoInfo2 = {
                            //     lat: this.myLatLngDest.lat(),
                            //     lng: this.myLatLngDest.lng()
                            //   }
                            console.log("AQUIIIIIIIIIIIIIII");
                            console.log(this.geoInfo2.lat);
                            //turn on geoquery university to determine wether the user is in university
                            this.geofireService.setGeofirePlace(this.SignUpService.userPlace, 0.56, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.user);
                            //
                            this.confirmPrice(this.geoInfo1, this.geoInfo2);
                        }
                    }
                    catch (error) {
                        // console.log(error);
                        // if(this.geoInfo2.lat === null || this.geoInfo2.lat === undefined ){
                        //   //this is to tell the user to select a place before publishing a trip
                        //   this.presentAlert('Información Incompleta','no puedes publicar un viaje sin antes seleccionar un lugar de la lista.','Ok') 
                        // }else {
                        //   this.presentAlert('Hay un error en la aplicación','Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.','Ok') 
                        // }
                    }
                    console.log(this.orFirebase);
                }
                else {
                    var alert_2 = this.alertCtrl.create({
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
                    alert_2.present();
                }
            }
            else {
                var alert_3 = this.alertCtrl.create({
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
                alert_3.present();
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
    FindridePage.prototype.disable = function () {
        var inputs = document.getElementById("input").getElementsByTagName("INPUT");
        inputs[0].disabled = true;
        // const inputs2: any = document.getElementById("input2").getElementsByTagName("INPUT");
        // inputs2[0].disabled=true;
    };
    FindridePage.prototype.enable = function () {
        var inputs = document.getElementById("input").getElementsByTagName("INPUT");
        inputs[0].disabled = false;
        // const inputs2: any = document.getElementById("input2").getElementsByTagName("INPUT");
        // inputs2[0].disabled=false;
        //     }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], FindridePage.prototype, "mapElement", void 0);
    FindridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-findride',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_driver\src\pages\findride\findride.html"*/'<ion-header class="bg-theme"  >\n\n    \n\n    <ion-navbar  >\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu" style="color: white;"></ion-icon>\n\n    \n\n          </button>\n\n\n\n          <ion-buttons style="display: flex; justify-content: center;"> \n\n              <ion-item style="background-color: transparent;">\n\n                  <ion-toggle  color="primary" (ionChange)="conectDriver()" [(ngModel)]="isConected"  ></ion-toggle>\n\n\n\n              </ion-item>\n\n\n\n           \n\n\n\n          </ion-buttons> \n\n       \n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content  padding>\n\n\n\n      <ion-card class="search" >\n\n          <ion-card-content>\n\n           \n\n              <span class="dot bg-theme"></span>\n\n              <ion-searchbar required [(ngModel)]="autocompleteMyPos.input" id="input" [animated]=true (ionInput)="updateSearchResultsMyPos()"  placeholder="Cóloca la dirección de tu casa"></ion-searchbar>\n\n            \n\n              <ion-list   [hidden]="autocompleteItems.length == 0">\n\n                  <ion-item  *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResultMyPos(item)">\n\n                    {{ item.description }}\n\n                  </ion-item>\n\n                </ion-list>\n\n                <!-- <ion-icon name="md-locate" (click)="getPositionAndMarker()" class="text-black"></ion-icon> -->\n\n          </ion-card-content>\n\n          <!-- <ion-card-content>\n\n              <span class="dot bg-yellow"></span>           \n\n             <ion-searchbar required [(ngModel)]="autocompleteMyDest.input"  id="input2" (ionInput)="updateSearchResultsMyDest()" placeholder="Cóloca tu destino"></ion-searchbar>\n\n  \n\n  \n\n              <ion-list   [hidden]="autocompleteItems2.length == 0">\n\n              <ion-item class="item" *ngFor="let item of autocompleteItems2" tappable (click)="selectSearchResultMyDest(item)">\n\n                {{ item.description }}\n\n              </ion-item>\n\n            </ion-list>\n\n              <span class="text-light search-text">Office &nbsp;<ion-icon name="ios-arrow-down" class="text-light"></ion-icon></span>\n\n  \n\n          <!- </ion-card-content> -->\n\n           \n\n      </ion-card>\n\n      <ion-avatar item-end>\n\n          <img style="height: 15%; width: 15%;" src="assets/imgs/centermap.png" (click)="centerMap()">\n\n      </ion-avatar>\n\n  \n\n   <div #map id="map"></div>  \n\n     \n\n\n\n  \n\n            <div *ngIf="onTrip" >\n\n              <button class="btn rounded bg-theme text-white animated infinite pulse" style=" width: 100% ;\n\n              position: fixed ;\n\n              bottom: 0px ;\n\n              left: 0px ;\n\n              height: 51px; \n\n              font-size: large;\n\n              \n\n          " (click)="goToTrip() " >VIAJE EN CURSO\n\n              </button>\n\n          </div>\n\n     \n\n  \n\n \n\n    \n\n   \n\n    \n\n\n\n\n\n \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_driver\src\pages\findride\findride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_geofire_services__["a" /* geofireService */], __WEBPACK_IMPORTED_MODULE_10__services_trips_service__["a" /* TripsService */], __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_8__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation___["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_9__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_11__services_instances_service__["a" /* instancesService */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__["a" /* FCM */]])
    ], FindridePage);
    return FindridePage;
}());

//# sourceMappingURL=findride.js.map

/***/ })

});
//# sourceMappingURL=18.js.map