webpackJsonp([18],{

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindridePageModule", function() { return FindridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__findride__ = __webpack_require__(776);
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

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_signup_service__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_geofire_services__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_driverauthentication_service__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_sendUsers_service__ = __webpack_require__(330);
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
    function FindridePage(geofireService, afDB, navCtrl, SignUpService, modalCtrl, authenticationService, geolocation, zone, sendCoordsService, AngularFireAuth, alertCtrl, toastCtrl, app, sendUsersService) {
        this.geofireService = geofireService;
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
    }
    FindridePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
            if (user.emailVerified == false) {
                var alert = _this.alertCtrl.create({
                    title: 'Por favor verifica tu email',
                    subTitle: 'Estas casi listo para empezar a disfrutar de Waypool',
                    buttons: ['OK']
                });
                alert.present();
            }
        });
        if (this.SignUpService.userUniversity == undefined) {
            var modal = this.modalCtrl.create('ConfirmUniversityPage');
            modal.onDidDismiss(function (readyToStart) {
                if (readyToStart) {
                    // set geofire key of university to avoid asking users to put where they are going
                    _this.geofireService.getLocationUniversity(_this.SignUpService.userUniversity).subscribe(function (university) {
                        _this.university = university;
                        _this.locationUniversity = _this.university.location;
                        _this.geofireService.setLocationUniversity(_this.SignUpService.userUniversity, "some_key", _this.locationUniversity.lat, _this.locationUniversity.lng);
                    });
                    _this.SignUpService.getMyInfo(_this.SignUpService.userUniversity, _this.user).subscribe(function (user) {
                        _this.userInfo = user;
                    });
                }
                _this.SignUpService.getInfoUniversity(_this.SignUpService.userUniversity).subscribe(function (uni) {
                    _this.universityInfo = uni;
                    if (_this.universityInfo.email == undefined) {
                        if (_this.userInfo.documents) {
                            if (_this.userInfo.documents.carne == undefined || _this.userInfo.documents.id == undefined) {
                                var modal_1 = _this.modalCtrl.create('VerificationImagesPage');
                                modal_1.present();
                            }
                            else {
                            }
                        }
                        else if (!_this.universityInfo.documents) {
                            console.log('no hay docs');
                            var modal_2 = _this.modalCtrl.create('VerificationImagesPage');
                            modal_2.present();
                        }
                    }
                    else {
                    }
                });
            });
            modal.present();
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
            var alert = this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'por favor verifica tu email',
                buttons: ['OK']
            });
            alert.present();
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
                            this.sendCoordsService.pushcoordinatesDrivers(this.SignUpService.userUniversity, this.user, this.desFirebase, this.orFirebase);
                            this.geoInfo1 = this.myLatLng;
                            console.log(this.geoInfo1);
                            this.geoInfo2 = {
                                lat: this.myLatLngDest.lat(),
                                lng: this.myLatLngDest.lng()
                            };
                            //turn on geoquery university to determine wether the user is in university
                            this.geofireService.setGeofireUniversity(this.SignUpService.userUniversity, 0.56, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.user);
                            //
                            this.confirmPrice(this.geoInfo1, this.geoInfo2);
                        }
                    }
                    catch (error) {
                        console.log(error);
                        this.presentAlert('Hay un error en la aplicación', 'Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.', 'Ok');
                    }
                    console.log(this.orFirebase);
                }
                else {
                    var alert = this.alertCtrl.create({
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
                    alert.present();
                }
            }
            else {
                var alert = this.alertCtrl.create({
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
                alert.present();
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
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], FindridePage.prototype, "mapElement", void 0);
    FindridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-findride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_driver/src/pages/findride/findride.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title><span class="text-white">COMPARTE TU VIAJE</span>\n            <ion-icon name="help-circle-outline" class="text-white" (click)="help() " style="margin-left: auto;float: right;"></ion-icon> \n        </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content  padding>\n    \n    <ion-card class="search">\n          \n        <ion-card-content>\n            <span class="dot bg-theme"></span>\n            <ion-searchbar required [(ngModel)]="autocompleteMyPos.input" [animated]=true (ionInput)="updateSearchResultsMyPos()"  placeholder="Tu origen"></ion-searchbar>\n          \n            <ion-list   [hidden]="autocompleteItems.length == 0">\n                <ion-item  *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResultMyPos(item)">\n                  {{ item.description }}\n                </ion-item>\n              </ion-list>\n              <!-- <ion-icon name="md-locate" (click)="getPositionAndMarker()" class="text-black"></ion-icon> -->\n        </ion-card-content>\n        <ion-card-content>\n            <span class="dot bg-yellow"></span>           \n           <ion-searchbar required [(ngModel)]="autocompleteMyDest.input" (ionInput)="updateSearchResultsMyDest()" placeholder="Tu destino"></ion-searchbar>\n\n\n            <ion-list   [hidden]="autocompleteItems2.length == 0">\n            <ion-item class="item" *ngFor="let item of autocompleteItems2" tappable (click)="selectSearchResultMyDest(item)">\n              {{ item.description }}\n            </ion-item>\n          </ion-list>\n            <!-- <span class="text-light search-text">Office &nbsp;<ion-icon name="ios-arrow-down" class="text-light"></ion-icon></span> -->\n\n        </ion-card-content>\n        \n    </ion-card>\n\n\n <div #map id="map"></div>  \n    <div></div>\n    <ion-row>        \n    <button (click)="listride()" class="btn rounded bg-theme text-white" style="width: 100%">Publicar Viaje</button>\n          \n          \n\n    </ion-row>\n    <div class="btn-footer">\n        <button class="btn rounded bg-theme text-white" style="width: 100%" (click)="availableReserves()" >Mis Reservas</button>\n    </div>\n\n    \n\n\n \n</ion-content>\n\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_driver/src/pages/findride/findride.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_geofire_services__["a" /* geofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_geofire_services__["a" /* geofireService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__["AngularFireDatabase"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_signup_service__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_signup_service__["a" /* SignUpService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__services_driverauthentication_service__["a" /* authenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_driverauthentication_service__["a" /* authenticationService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_9__services_sendUsers_service__["a" /* sendUsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_sendUsers_service__["a" /* sendUsersService */]) === "function" && _q || Object])
    ], FindridePage);
    return FindridePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
}());

//# sourceMappingURL=findride.js.map

/***/ })

});
//# sourceMappingURL=18.js.map