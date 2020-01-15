webpackJsonp([10],{

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecifyOriginPageModule", function() { return SpecifyOriginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specifyorigin__ = __webpack_require__(833);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpecifyOriginPageModule = /** @class */ (function () {
    function SpecifyOriginPageModule() {
    }
    SpecifyOriginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__specifyorigin__["a" /* SpecifyOriginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__specifyorigin__["a" /* SpecifyOriginPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__specifyorigin__["a" /* SpecifyOriginPage */]
            ]
        })
    ], SpecifyOriginPageModule);
    return SpecifyOriginPageModule;
}());

//# sourceMappingURL=specifyorigin.module.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecifyOriginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation___ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_signup_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_geofire_services__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_driverauthentication_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_sendUsers_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_trips_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_instances_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__ = __webpack_require__(203);
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








var SpecifyOriginPage = /** @class */ (function () {
    function SpecifyOriginPage(geofireService, TripsService, afDB, navCtrl, SignUpService, modalCtrl, authenticationService, geolocation, zone, sendCoordsService, AngularFireAuth, alertCtrl, toastCtrl, app, sendUsersService, instancesService, firebaseNative, platform, fcm, loadingCtrl, renderer) {
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
        this.loadingCtrl = loadingCtrl;
        this.renderer = renderer;
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
        this.schedules = [];
        this.myReserves = [];
        this.checked = false;
        this.fullReserves = [];
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
    SpecifyOriginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afDB.database.ref('allUsers/' + this.user).once('value').then(function (snap) {
            _this.SignUpService.userPlace = snap.val().place;
            console.log(_this.SignUpService.userPlace);
            _this.loadMap();
        });
    };
    SpecifyOriginPage.prototype.loadMap = function () {
        var _this = this;
        //check if user have houseAddress
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
                    scaledSize: new google.maps.Size(70, 70)
                }
            });
            _this.markers.push(_this.markerGeolocation);
            _this.geocoordinatesHouse = { lat: position.coords.latitude, lng: position.coords.longitude };
            //allow the marker to be draged and changed the position
            _this.dragMarkerOr(_this.markerGeolocation, _this.autocompleteMyPos);
        }, function (err) {
            console.log(err);
        });
    };
    //autocomplete of myPosition searchbar
    SpecifyOriginPage.prototype.updateSearchResultsMyPos = function () {
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
    SpecifyOriginPage.prototype.selectSearchResultMyPos = function (item) {
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
                    icon: { url: "assets/imgs/house.png",
                        scaledSize: new google.maps.Size(70, 70)
                    },
                    animation: google.maps.Animation.DROP,
                });
                _this.geocoordinatesHouse = { latOr: results[0].geometry.location.lat(), lngOr: results[0].geometry.location.lng() };
                console.log(_this.geocoordinatesHouse);
                console.log(_this.positionDest);
                _this.dragMarkerOr(_this.markerGeolocation, _this.autocompleteMyPos);
                _this.markers.push(_this.markerGeolocation);
                _this.map.setCenter(results[0].geometry.location);
                console.log(results[0].geometry.location);
                console.log(_this.positionDest);
                _this.autocompleteMyPos.input = [item.description];
                // this.map.fitBounds(this.bounds);
            }
        });
    };
    ////select result of my destination searchbar
    ////////Markers
    SpecifyOriginPage.prototype.clearMarkers = function () {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
        this.markers = [];
    };
    SpecifyOriginPage.prototype.dragMarkerOr = function (marker, inputName) {
        //allow origin marker to be draged and calculate route with the new position
        var _this = this;
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            var lat = marker.getPosition().lat();
            var lng = marker.getPosition().lng();
            var latOr = marker.getPosition().lat();
            var lngOr = marker.getPosition().lng();
            var latLng = { lat: lat, lng: lng };
            var latLngOr = { latOr: latOr, lngOr: lngOr };
            console.log(latLng);
            _this.geocodeLatLng(latLng, inputName);
            console.log(_this.positionDest);
            _this.geocoordinatesHouse = latLngOr;
        });
    };
    SpecifyOriginPage.prototype.geocodeLatLng = function (latLng, inputName) {
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
    SpecifyOriginPage.prototype.sendLocation = function () {
        var _this = this;
        this.houseAddress = this.autocompleteMyPos.input;
        this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/houseAddress/').update({
            name: this.houseAddress[0]
        }).then(function (data) {
            _this.afDB.database.ref(_this.SignUpService.userPlace + '/drivers/' + _this.user + '/houseAddress/coordinates').update({
                lat: _this.geocoordinatesHouse.latOr,
                lng: _this.geocoordinatesHouse.lngOr
            });
            _this.navCtrl.setRoot('FindridePage');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SpecifyOriginPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('buttonConected', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], SpecifyOriginPage.prototype, "buttonConected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('buttonDisconected', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], SpecifyOriginPage.prototype, "buttonDisconected", void 0);
    SpecifyOriginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-specifyorigin',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/specifyorigin/specifyorigin.html"*/'\n\n\n\n<ion-content  padding>\n      <h5 class="text-theme" style="font-weight: bold;">DIRECCIÓN DE TU HOGAR</h5>\n      <ion-card class="search" >\n          <ion-card-content>\n              <span style=" z-index: 1;position: relative;" class="text-light search-text">Tu casa &nbsp;<ion-icon name="ios-arrow-down" class="text-light"></ion-icon></span>\n\n              <span class="dot bg-theme"></span>\n              <ion-searchbar required [(ngModel)]="autocompleteMyPos.input" id="input" [animated]=true (ionInput)="updateSearchResultsMyPos()"  placeholder="Cóloca la dirección de tu casa"></ion-searchbar>\n\n              <ion-list   [hidden]="autocompleteItems.length == 0">\n                  <ion-item  *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResultMyPos(item)">\n                    {{ item.description }}\n                  </ion-item>\n                </ion-list>\n                <!-- <ion-icon name="md-locate" (click)="getPositionAndMarker()" class="text-black"></ion-icon> -->\n          </ion-card-content>\n\n           \n      </ion-card>\n      <!-- <ion-avatar item-end>\n          <img style="height: 15%; width: 15%;" src="assets/imgs/centermap.png" (click)="centerMap()">\n      </ion-avatar> -->\n      <div style="display: flex; justify-content: center;">    \n          <button class="btn text-white bg-theme rounded" style="width: 80%;" (click)="sendLocation()">Listo</button>\n      </div>\n   <div #map id="map"></div>  \n</ion-content>\n\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/specifyorigin/specifyorigin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_geofire_services__["a" /* geofireService */], __WEBPACK_IMPORTED_MODULE_10__services_trips_service__["a" /* TripsService */], __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_8__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation___["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_9__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_11__services_instances_service__["a" /* instancesService */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], SpecifyOriginPage);
    return SpecifyOriginPage;
}());

//# sourceMappingURL=specifyorigin.js.map

/***/ })

});
//# sourceMappingURL=10.js.map