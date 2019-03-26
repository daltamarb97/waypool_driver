webpackJsonp([12],{

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnTripPageModule", function() { return OnTripPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__onTrip__ = __webpack_require__(757);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OnTripPageModule = /** @class */ (function () {
    function OnTripPageModule() {
    }
    OnTripPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__onTrip__["a" /* OnTripPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__onTrip__["a" /* OnTripPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__onTrip__["a" /* OnTripPage */]
            ]
        })
    ], OnTripPageModule);
    return OnTripPageModule;
}());

//# sourceMappingURL=onTrip.module.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnTripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sendCoords_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_driverauthentication_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_sendUsers_service__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OnTripPage = /** @class */ (function () {
    function OnTripPage(navCtrl, alertCtrl, sendUsersService, SignupService, toastCtrl, callNumber, navParams, SignUpService, authenticationService, geolocation, zone, sendCoordsService, AngularFireAuth, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.sendUsersService = sendUsersService;
        this.SignupService = SignupService;
        this.toastCtrl = toastCtrl;
        this.callNumber = callNumber;
        this.navParams = navParams;
        this.SignUpService = SignUpService;
        this.authenticationService = authenticationService;
        this.geolocation = geolocation;
        this.zone = zone;
        this.sendCoordsService = sendCoordsService;
        this.AngularFireAuth = AngularFireAuth;
        this.app = app;
        this.directionsService = null;
        this.directionsDisplay = null;
        this.bounds = null;
        this.pickedUpUsers = [];
        this.useruid = this.AngularFireAuth.auth.currentUser.uid;
        this.markers = [];
        //we get the info of the users with navParams
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
        });
        this.bounds = new google.maps.LatLngBounds();
        this.geocoder = new google.maps.Geocoder();
        this.sendUsersService.getPickUpUsers(this.useruid)
            .subscribe(function (user) {
            _this.pickedUpUsers = user;
            console.log(_this.pickedUpUsers);
        });
        this.SignUpService.getMyInfoDriver(this.useruid)
            .subscribe(function (userDriver) {
            _this.driver = userDriver;
            console.log(_this.driver);
        });
    }
    OnTripPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.sendCoordsService.getDestination(this.useruid)
            .subscribe(function (destination) {
            _this.destinationOnTrip = destination;
            console.log(_this.destinationOnTrip);
            _this.loadMap();
        });
    };
    OnTripPage.prototype.loadMap = function () {
        // this gets current position and set the camera of the map and put a marker in your location
        var _this = this;
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
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
            };
            _this.myLatLng = { lat: position.coords.latitude, lng: position.coords.longitude };
            //creates the map and give options
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.geocodeLatLng(latLng);
            _this.geocodeAddress(_this.destinationOnTrip);
            var marker = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: latLng,
                icon: { url: "/assets/imgs/marker-origin.png",
                    scaledSize: new google.maps.Size(90, 90)
                }
            });
            _this.markers.push(marker);
        }, function (err) {
            console.log(err);
        });
        //transform the position of the user into an adress
    };
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
    OnTripPage.prototype.geocodeAddress = function (destinationDriver) {
        var _this = this;
        this.geocoder.geocode({ 'address': JSON.stringify(destinationDriver) }, function (results, status) {
            if (status == 'OK') {
                var marker = new google.maps.Marker({
                    map: _this.map,
                    position: results[0].geometry.location,
                    icon: { url: "/assets/imgs/marker-destination.png",
                        scaledSize: new google.maps.Size(90, 90)
                    }
                });
                _this.directionsDisplay.setMap(_this.map);
                _this.calculateRoute(results[0].geometry.location);
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    OnTripPage.prototype.geocodeLatLng = function (latLng) {
        var _this = this;
        this.geocoder.geocode({ 'location': latLng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    _this.addressOrigin = results[0].formatted_address;
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
    OnTripPage.prototype.calculateRoute = function (destinationOnTrip) {
        //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/
        var _this = this;
        this.bounds.extend(this.myLatLng);
        this.map.fitBounds(this.bounds);
        this.directionsService.route({
            origin: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
            destination: destinationOnTrip,
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
    OnTripPage.prototype.addMarker = function (location) {
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
        });
        this.markers.push(marker);
    };
    OnTripPage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    OnTripPage.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    OnTripPage.prototype.deleteMarkers = function () {
        this.clearMarkers();
        this.markers = [];
    };
    OnTripPage.prototype.endTrip = function () {
        var _this = this;
        //let user rate the trip
        this.navCtrl.push('RatetripPage', { user: this.driver });
        this.pickedUpUsers.forEach(function (user) {
            // save trip in every record of every users
            _this.sendCoordsService.recordTripOnUser(user.userId, user);
            _this.sendCoordsService.endTripUserPickingUsers(user.userId);
            _this.sendCoordsService.endTripUserPickedUpUsers(user.userId);
            _this.sendCoordsService.endTripUserOnTripInstance(user.userId);
            _this.sendCoordsService.endTripUserPickupInstance(user.userId);
            _this.sendCoordsService.endTripUserDriverListRide(user.userId);
            _this.sendCoordsService.pushOnTripFinalUser(user.userId);
        });
        //Save trip into RecordTrip on User & Driver
        this.sendCoordsService.recordTripOnWaypool(this.driver.trips);
        this.sendCoordsService.recordTripOnDriver(this.useruid, this.driver.trips);
        //End trip into RecordTrip on User & Driver
        this.sendCoordsService.endTripDriverPickingUsers(this.useruid);
        this.sendCoordsService.endTripDriverPickedUpUsers(this.useruid);
        this.presentAlert('Viaje Terminado', '¡No olvides seguirnos en Instagram y Twitter para obtener tips y bonos!', 'OK');
    };
    OnTripPage.prototype.presentToast = function (message, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position
        });
        toast.present();
    };
    OnTripPage.prototype.presentAlert = function (title, text, button) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [button]
        });
        alert.present();
    };
    OnTripPage.prototype.help = function () {
        var toast = this.toastCtrl.create({
            message: 'En esta página podrás dirigirte hacia la universidad y ver en el mapa el camino que puedes tomar, cuando hayas llegado presiona el botón finalizar viaje y cuentanos tu experiencia con Waypool.',
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'top'
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], OnTripPage.prototype, "mapElement", void 0);
    OnTripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ontrip',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/onTrip/onTrip.html"*/'<ion-header class="bg-theme">\n    <ion-navbar hideBackButton >\n        <ion-title>IR A MI DESTINO\n                <ion-icon name="help-circle-outline" class="text-white" (click)="help() " style="margin-left: auto;float: right;"></ion-icon> \n\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n        <ion-card class="cardOnTrip">\n                \n                <ion-card-content>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span>{{addressOrigin}}</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span>{{destinationOnTrip}}</p>\n                    </div>\n                    <ion-row class="endTripButton">\n                        \n                        \n                        <ion-col col-5>\n                            <button navPop class="btn bg-theme rounded full text-white" (click)="endTrip()" >Finalizar viaje</button>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n               \n            </ion-card>\n    <div #map id="map"></div>  \n   \n\n\n   \n\n\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/onTrip/onTrip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_5__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], OnTripPage);
    return OnTripPage;
}());

//# sourceMappingURL=onTrip.js.map

/***/ })

});
//# sourceMappingURL=12.js.map