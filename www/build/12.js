webpackJsonp([12],{

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickupPageModule", function() { return PickupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pickup__ = __webpack_require__(765);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PickupPageModule = /** @class */ (function () {
    function PickupPageModule() {
    }
    PickupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pickup__["a" /* PickupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pickup__["a" /* PickupPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__pickup__["a" /* PickupPage */]
            ]
        })
    ], PickupPageModule);
    return PickupPageModule;
}());

//# sourceMappingURL=pickup.module.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sendCoords_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_driverauthentication_service__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_trips_service__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PickupPage = /** @class */ (function () {
    function PickupPage(navCtrl, alertCtrl, TripsService, toastCtrl, callNumber, navParams, SignUpService, authenticationService, geolocation, zone, sendCoordsService, AngularFireAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.TripsService = TripsService;
        this.toastCtrl = toastCtrl;
        this.callNumber = callNumber;
        this.navParams = navParams;
        this.SignUpService = SignUpService;
        this.authenticationService = authenticationService;
        this.geolocation = geolocation;
        this.zone = zone;
        this.sendCoordsService = sendCoordsService;
        this.AngularFireAuth = AngularFireAuth;
        this.directionsService = null;
        this.directionsDisplay = null;
        this.bounds = null;
        this.useruid = this.AngularFireAuth.auth.currentUser.uid;
        this.markers = [];
        //we get the info of the users with navParams
        this.user = this.navParams.get('user');
        this.keyTrip = this.navParams.get('keyTrip');
        console.log(this.user);
        console.log(this.keyTrip);
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
        });
        this.bounds = new google.maps.LatLngBounds();
        this.geocoder = new google.maps.Geocoder();
        this.SignUpService.getMyInfoDriver(this.useruid)
            .subscribe(function (userDriver) {
            _this.userDriver = userDriver;
            console.log(_this.userDriver);
        });
        this.SignUpService.getInfoUser(this.user.userId)
            .subscribe(function (userFirebase) {
            //modificar
            //get info user and observe if user has not canceled
            _this.userFirebase = userFirebase;
            // if(this.userFirebase.trips.onTrip === true ){
            // } else {
            //   //if canceled go back to myRidePage
            //   this.navCtrl.pop();
            //   const toast = this.toastCtrl.create({
            //     message: `El estudiante ${this.user.name} que ibas a recoger te ha cancelado`,
            //     showCloseButton:true,
            //     closeButtonText: 'OK',
            //     position:'middle'
            //        });
            //   toast.present();
            // }
        });
    }
    PickupPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    PickupPage.prototype.loadMap = function () {
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
            _this.myLatLng = { lat: position.coords.latitude, lng: position.coords.longitude };
            //creates the map and give options
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.geocodeLatLng(latLng);
            var marker = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: latLng,
                icon: { url: "assets/imgs/marker-origin-driver.png",
                    scaledSize: new google.maps.Size(90, 90)
                }
            });
            _this.markers.push(marker);
        }, function (err) {
            console.log(err);
        });
        //transform the position of the user into an adress
        this.geocodeAddress(this.user.origin);
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
    };
    PickupPage.prototype.geocodeAddress = function (userOrigin) {
        var _this = this;
        this.geocoder.geocode({ 'address': JSON.stringify(userOrigin) }, function (results, status) {
            if (status == 'OK') {
                var marker = new google.maps.Marker({
                    map: _this.map,
                    position: results[0].geometry.location,
                    icon: { url: "assets/imgs/marker-destination2.png",
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
    PickupPage.prototype.geocodeLatLng = function (latLng) {
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
    PickupPage.prototype.calculateRoute = function (destinationOnTrip) {
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
    PickupPage.prototype.addMarker = function (location) {
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
        });
        this.markers.push(marker);
    };
    PickupPage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    PickupPage.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    PickupPage.prototype.deleteMarkers = function () {
        this.clearMarkers();
        this.markers = [];
    };
    PickupPage.prototype.notifyDriver = function () {
        this.presentToast("Se le ha notificado a " + this.user.name + " que ya llegaste", 3000, 'top');
    };
    PickupPage.prototype.PickUp = function () {
        this.TripsService.eliminatePendingUsers(this.keyTrip, this.useruid, this.user.userId);
        // this.sendCoordsService.pushPriceOnUser(this.useruid,this.user.userId,this.userDriver.trips.price)
        this.TripsService.pickUp(this.keyTrip, this.useruid, this.user.userId, this.user);
        this.presentToast("Acabas de recoger a " + this.user.name + ", \u00A1Sal\u00FAdalo por nosotros!", 4000, 'top');
        // this.sendCoordsService.pickUpInstance(this.user.userId);
        // moment.locale('es');   
        // let currDate = moment().format('MMMM Do YYYY, h:mm:ss a');
        //   this.sendCoordsService.timeOfPickedUpDriver(this.useruid,currDate,this.user.userId)
        //   this.sendCoordsService.timeOfPickedUpUser(this.user.userId,currDate)
    };
    PickupPage.prototype.callUser = function () {
        var _this = this;
        this.callNumber.isCallSupported()
            .then(function (response) {
            if (response == true) {
                _this.callNumber.callNumber(_this.user.phone, true)
                    .then(function (res) { return console.log('Launched dialer!', res); }) //si no es necesario esta promesa, eliminarla
                    .catch(function (err) { return console.log('Error launching dialer', err); });
            }
            else {
                _this.presentAlert('Error', 'No se pudo generar la llamada', 'ok');
            }
        });
    };
    PickupPage.prototype.presentToast = function (message, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position
        });
        toast.present();
    };
    PickupPage.prototype.presentAlert = function (title, text, button) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [button]
        });
        alert.present();
    };
    PickupPage.prototype.help = function () {
        var toast = this.toastCtrl.create({
            message: 'En esta página podrás ver mejor la dirección que de tu compañer@s a través de un mapa, cuando hayas llegado al lugar donde está tu compañer@, cada vez que presiones el botón "Ya llegué" se le enviará una notificación al estudiante de que ya llegaste. ¡Que disfruten el viaje!',
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'top'
        });
        toast.present();
    };
    PickupPage.prototype.more = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PickupPage.prototype, "mapElement", void 0);
    PickupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pickup',template:/*ion-inline-start:"D:\Users\Daniel\waypool\waypooltest\w_driver_test\src\pages\pickup\pickup.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>Escoger Compañero\n\n                <ion-icon name="help-circle-outline" class="text-white" (click)="help() " style="margin-left: auto;float: right;"></ion-icon> \n\n\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n        <ion-card class="cardOnTrip">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/userPicture.png">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>{{user.name |titlecase}} {{user.lastname |titlecase | slice:0:1}}.\n\n                        </h2>\n\n                       \n\n                    </div>\n\n                    <div class="more">\n\n                        <h2 class="text-theme">\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h2>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="ride-detail">\n\n                        <p>\n\n                            <span class="icon-location bg-theme"></span>{{addressOrigin}}</p>\n\n                        <p>\n\n                            <span class="icon-location bg-yellow"></span>{{user.origin}}</p>\n\n                    </div>\n\n                    <ion-row>\n\n                       \n\n                        \n\n                            <!-- <div text-left>\n\n                                <button class="btn bg-theme rounded full text-white" (click)="notifyDriver()">Ya llegué</button>\n\n                                \n\n                            </div> -->\n\n                        \n\n                        \n\n                            \n\n                                <!-- <button class="btn bg-yellow rounded full text-white"><ion-icon name="chatboxes" class="text-white"></ion-icon></button> -->\n\n                                <button (click)="callUser()" class="btn bg-yellow rounded full text-white"><ion-icon name="ios-call" class="text-white"></ion-icon></button>\n\n\n\n                        \n\n                        \n\n                            <button navPop class="btn bg-theme rounded full text-white" (click)="PickUp()">Listo</button>\n\n                        \n\n                    </ion-row>\n\n                </ion-card-content>\n\n               \n\n            </ion-card>\n\n    <div #map id="map"></div>  \n\n   \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\waypool\waypooltest\w_driver_test\src\pages\pickup\pickup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__services_trips_service__["a" /* TripsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_5__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]])
    ], PickupPage);
    return PickupPage;
}());

//# sourceMappingURL=pickup.js.map

/***/ })

});
//# sourceMappingURL=12.js.map