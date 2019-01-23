webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_driverauthentication_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_signup_service__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    // userFirebase = this.AngularFireAuth.auth.currentUser;
    function LoginPage(navCtrl, authenticationService, alertCtrl, AngularFireAuth, navParams, SignUpService) {
        this.navCtrl = navCtrl;
        this.authenticationService = authenticationService;
        this.alertCtrl = alertCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.navParams = navParams;
        this.SignUpService = SignUpService;
        this.email = '';
        this.password = null;
        this.auth = this.AngularFireAuth.auth;
    }
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    ;
    LoginPage.prototype.resetPassword = function (email) {
        if (this.email == '') {
            var alert_1 = this.alertCtrl.create({
                title: 'no hay ningun email',
                subTitle: 'ingresa un email para resetear tu contraseña',
                buttons: ['OK']
            });
            alert_1.present();
            console.log("reset password email hasn't been sent");
        }
        else {
            this.auth.sendPasswordResetEmail(this.email);
            var alert_2 = this.alertCtrl.create({
                title: 'revisa tu email',
                subTitle: 'un correo te ha sido enviado para resetear tu contraseña',
                buttons: ['OK']
            });
            alert_2.present();
            console.log("reset password email has been sent");
        }
        ;
    };
    ;
    LoginPage.prototype.logIn = function () {
        var _this = this;
        this.receivedUser = this.navParams.data;
        this.authenticationService.loginWithEmail(this.email, this.password).then(function (data) {
            console.log(data);
            if (data.user.emailVerified == false) {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Oops!',
                    subTitle: 'por favor verifica tu email',
                    buttons: ['OK']
                });
                alert_3.present();
            }
            else {
                var metadata = _this.auth.currentUser.metadata;
                if (metadata.creationTime == metadata.lastSignInTime) {
                    console.log(metadata.creationTime);
                    console.log(metadata.lastSignInTime);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]); //aqui va registration car, no tabspge
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                }
                _this.authenticationService.getStatus;
            }
            ;
        }).catch(function (error) {
            var alert = _this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'El usuario o la contraseña están incorrectas',
                buttons: ['OK']
            });
            alert.present();
            console.log(error);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\login\login.html"*/'<ion-header class="transparent">\n\n    <ion-navbar>\n\n        <ion-title><span class="text-white">SIGN IN</span></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-background-img">\n\n    <div class="logo">\n\n        <img src="assets/imgs/logo.png" alt="logo">\n\n    </div>\n\n\n\n    <div class="bg-white login">\n\n        <div class="">\n\n            <ion-list class="form">\n\n                <ion-item>\n\n\n\n                    <ion-label></ion-label>\n\n                    <ion-input type="email"  text-right [(ngModel)]="email" placeholder= "email universitario"  text-right></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label></ion-label>\n\n                    <ion-input type="password" text-right  [(ngModel)]="password" placeholder= "Tú contraseña"  text-right></ion-input>\n\n                </ion-item>\n\n            </ion-list>\n\n            <button ion-button full class="bg-theme text-white btn rounded" (click)="logIn(user)">LOGIN</button>\n\n            <ion-row style="padding-top: 8px;">\n\n                <ion-col (click)="signup()"><small>New user <strong class="text-theme">Sign up</strong></small></ion-col>\n\n                <ion-col text-right (click)="resetPassword(email)"><small>Forgot <strong class="text-theme">Password?</strong></small></ion-col>\n\n            </ion-row>\n\n            <!-- <p text-center class="option-login"><span>OR CONTINUE WITH</span></p> -->\n\n            <!-- <ion-row>\n\n\n\n                <ion-col col-6><button ion-button full class="bg-blue text-white btn rounded small"><img src="assets/imgs/fb_white.png">\n\n                    <span>Facebook</span></button></ion-col>\n\n                <ion-col col-6><button ion-button full class="bg-white text-dark btn rounded small"><img src="assets/imgs/google.png">\n\n                    <span>Google&nbsp;&nbsp;</span></button></ion-col>\n\n\n\n            </ion-row> -->\n\n\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__services_signup_service__["a" /* SignUpService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listride_listride__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geofence__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sendCoords_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_driverauthentication_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_signup_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__confirmprice_confirmprice__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var FindridePage = /** @class */ (function () {
    function FindridePage(navCtrl, SignUpService, modalCtrl, authenticationService, geolocation, zone, sendCoordsService, AngularFireAuth, alertCtrl, geofence) {
        this.navCtrl = navCtrl;
        this.SignUpService = SignUpService;
        this.modalCtrl = modalCtrl;
        this.authenticationService = authenticationService;
        this.geolocation = geolocation;
        this.zone = zone;
        this.sendCoordsService = sendCoordsService;
        this.AngularFireAuth = AngularFireAuth;
        this.alertCtrl = alertCtrl;
        this.geofence = geofence;
        // waypoints variables
        this.directionsService = null;
        this.directionsDisplay = null;
        this.bounds = null;
        //firebase 
        this.trip = {};
        this.tripId = null;
        this.user = this.AngularFireAuth.auth.currentUser.uid;
        this.geofence.initialize().then(function () { return console.log('geofence plugin ready'); }, function (err) { return console.log(err); });
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
        this.loadMap();
    };
    FindridePage.prototype.loadMap = function () {
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
                fullscreenControl: false
            };
            //creates the map and give options
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.myLatLng = { lat: position.coords.latitude, lng: position.coords.longitude };
            var marker = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: latLng,
                draggable: true
            });
            _this.markers.push(marker);
            _this.dragMarker(marker, _this.autocompleteMyPos);
            //to reverse-geocode position
            _this.geocodeLatLng(latLng, _this.autocompleteMyPos);
        }, function (err) {
            console.log(err);
        });
    };
    FindridePage.prototype.calculateRoute = function (positionDest) {
        //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/
        var _this = this;
        this.bounds.extend(this.myLatLng);
        this.map.fitBounds(this.bounds);
        this.directionsService.route({
            origin: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
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
    ////autocomplete of my destination
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
                var position = {
                    lat: results[0].geometry.location.lat,
                    lng: results[0].geometry.location.lng
                };
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: _this.map,
                    draggable: true
                });
                _this.dragMarker(marker, _this.autocompleteMyPos);
                _this.markers.push(marker);
                _this.map.setCenter(results[0].geometry.location);
                _this.autocompleteMyPos.input = [item.description];
            }
        });
    };
    ////select result of my destination searchbar
    FindridePage.prototype.selectSearchResultMyDest = function (item) {
        var _this = this;
        this.autocompleteItems2 = [];
        this.geocoder.geocode({ 'placeId': item.place_id }, function (results, status) {
            if (status === 'OK' && results[0]) {
                var position = {
                    latitude: results[0].geometry.location.lat,
                    longitude: results[0].geometry.location.lng
                };
                // let position = new google.maps.LatLng( results[0].geometry.location.lat,
                //  results[0].geometry.location.lng)
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: _this.map,
                    draggable: true
                });
                _this.map.fitBounds(_this.bounds);
                _this.markers.push(marker);
                _this.map.setCenter(results[0].geometry.location);
                _this.autocompleteMyDest.input = [item.description];
                _this.dragMarker(marker, _this.autocompleteMyDest);
                _this.directionsDisplay.setMap(_this.map);
                _this.calculateRoute(results[0].geometry.location);
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
    FindridePage.prototype.dragMarker = function (marker, inputName) {
        var _this = this;
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            var lat = marker.getPosition().lat();
            var lng = marker.getPosition().lng();
            var latLng = { lat: lat, lng: lng };
            _this.map.setCenter(latLng);
            _this.geocodeLatLng(latLng, inputName);
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
        // TO DO: IF  (GEOPOSITION !== POSITIONDEST){
        //      NO PERMITIR VIAJE , ES UNA IDEA PERO NO ESTOY 100% DE ACUERDO
        //}
        try {
            this.orFirebase = this.autocompleteMyPos.input;
            this.desFirebase = this.autocompleteMyDest.input;
            if (this.autocompleteMyDest.input == '' || this.autocompleteMyPos.input == '') {
                this.presentAlert('No tienes toda la informacion', 'Por favor asegura que tu origen y destino sean correctos', 'Ok');
                this.clearMarkers();
                this.directionsDisplay.setDirections({ routes: [] });
                this.loadMap();
            }
            else {
                this.sendCoordsService.pushcoordinatesDrivers(this.user, this.desFirebase, this.orFirebase);
                //se hara la geocerca y mostraran hasta 4 users q hayan escogido al driver, despues se le preguntara a dichos users que si tienen direccion, si tienen se le deja pasaral driver y si no no.
                this.addGeofence(this.myLatLng.lat, this.myLatLng.lng);
                this.confirmPrice();
                // this.navCtrl.push(ConfirmpopupPage)
                // this.SignUpServices.acceptedByDriver(this.usersFindingTrip)
                //   if(!this.user.userId){
                //     this.user.userId =this.userFirebase;
                //     this.userFirebase =  firebase.auth().currentUser.uid;
                //     console.log(this.user.userId); 
                // }
            }
        }
        catch (_a) {
            this.presentAlert('Hay un error en la aplicación', 'Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.', 'Ok');
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
    FindridePage.prototype.addGeofence = function (lat, lng) {
        //options describing geofence
        var fence = {
            id: Date.now(),
            latitude: lat,
            longitude: lng,
            radius: 100,
            transitionType: 3,
            notification: {
                id: 1,
                title: 'You crossed a fence',
                text: 'You just arrived to Gliwice city center.',
                openAppOnClick: true //open app when notification is tapped
            }
        };
        this.geofence.addOrUpdate(fence).then(function () { return console.log('Geofence added'); }, function (err) { return console.log('Geofence failed to add'); });
    };
    FindridePage.prototype.confirmPrice = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__confirmprice_confirmprice__["a" /* ConfirmpricePage */]);
        modal.onDidDismiss(function (accepted) {
            if (accepted) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__listride_listride__["a" /* ListridePage */]);
            }
        });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], FindridePage.prototype, "mapElement", void 0);
    FindridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-findride',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\findride\findride.html"*/'<ion-header class="transparent">\n\n    <ion-navbar>\n\n        <ion-title><span class="text-white">PIDE TU VIAJE</span></ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="bg-background-img" padding>\n\n    \n\n    <ion-card class="search">\n\n          \n\n        <ion-card-content>\n\n            <span class="dot bg-theme"></span>\n\n            <ion-searchbar required [(ngModel)]="autocompleteMyPos.input" [animated]=true (ionInput)="updateSearchResultsMyPos()"  placeholder="Tu origen"></ion-searchbar>\n\n          \n\n            <ion-list   [hidden]="autocompleteItems.length == 0">\n\n                <ion-item  *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResultMyPos(item)">\n\n                  {{ item.description }}\n\n                </ion-item>\n\n              </ion-list>\n\n              <!-- <ion-icon name="md-locate" (click)="getPositionAndMarker()" class="text-black"></ion-icon> -->\n\n        </ion-card-content>\n\n        <ion-card-content>\n\n            <span class="dot bg-yellow"></span>           \n\n           <ion-searchbar required [(ngModel)]="autocompleteMyDest.input" (ionInput)="updateSearchResultsMyDest()" placeholder="Tu destino"></ion-searchbar>\n\n\n\n\n\n            <ion-list   [hidden]="autocompleteItems2.length == 0">\n\n            <ion-item class="item" *ngFor="let item of autocompleteItems2" tappable (click)="selectSearchResultMyDest(item)">\n\n              {{ item.description }}\n\n            </ion-item>\n\n          </ion-list>\n\n            <!-- <span class="text-light search-text">Office &nbsp;<ion-icon name="ios-arrow-down" class="text-light"></ion-icon></span> -->\n\n\n\n        </ion-card-content>\n\n        \n\n    </ion-card>\n\n  \n\n <div #map id="map"></div>  \n\n    \n\n    \n\n    \n\n    <button (click)="listride()" class="btn rounded bg-white text-theme" style="width: 100%">Pedir</button>\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\findride\findride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_6__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geofence__["a" /* Geofence */]])
    ], FindridePage);
    return FindridePage;
}());

//# sourceMappingURL=findride.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__myride_myride__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chats_chats__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wallet_wallet__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__more_more__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__findride_findride__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__findride_findride__["a" /* FindridePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__myride_myride__["a" /* MyridePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__chats_chats__["a" /* ChatsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__wallet_wallet__["a" /* WalletPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__more_more__["a" /* MorePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\tabs\tabs.html"*/'<ion-tabs #myTabs tabsHideOnSubPages="false">\n\n    <ion-tab [root]="tab1Root" tabTitle="Pedir Viaje" ></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Mi Viaje" tabIcon="md-car" ></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="Chats " tabIcon="md-chatboxes" ></ion-tab>\n\n    <ion-tab [root]="tab4Root" tabTitle="Wallet" tabIcon="md-card" ></ion-tab>\n\n    <ion-tab [root]="tab5Root" tabTitle="More" tabIcon="md-person" ></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarRegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__findride_findride__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CarRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarRegistrationPage = /** @class */ (function () {
    function CarRegistrationPage(navCtrl, navParams, viewCtrl, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.namePicture = "Licencia";
        this.description = "Sube una foto clara de tu";
        this.img1 = "Licencia";
        this.img2 = "Cédula";
        this.img3 = "SOAT del vehículo";
        this.img4 = "Revisión Técnico Mecánica";
        this.img5 = "Tarjeta de Crédito";
        this.img6 = "Cuenta de Ahorros";
        this.des1 = "Sube una foto clara de tu";
        this.des2 = "Necesitamos la información de tu";
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
    }
    CarRegistrationPage.prototype.usageCamera = function () {
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var picturesDrivers = Object(__WEBPACK_IMPORTED_MODULE_4_firebase__["storage"])().ref('documentsDrivers/licencias');
            picturesDrivers.putString(base64Image, 'data_url');
        }, function (err) {
            console.log(err);
        });
    };
    CarRegistrationPage.prototype.changeNamePicture1 = function () {
        this.namePicture = this.img1;
        this.description = this.des1;
    };
    ;
    CarRegistrationPage.prototype.changeNamePicture2 = function () {
        this.namePicture = this.img2;
        this.description = this.des1;
    };
    ;
    CarRegistrationPage.prototype.changeNamePicture3 = function () {
        this.namePicture = this.img3;
        this.description = this.des1;
    };
    ;
    CarRegistrationPage.prototype.changeNamePicture4 = function () {
        this.namePicture = this.img4;
        this.description = this.des1;
    };
    ;
    CarRegistrationPage.prototype.changeNamePicture5 = function () {
        this.namePicture = this.img5;
        this.description = this.des2;
    };
    ;
    CarRegistrationPage.prototype.changeNamePicture6 = function () {
        this.namePicture = this.img6;
        this.description = this.des2;
    };
    ;
    CarRegistrationPage.prototype.findRide = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__findride_findride__["a" /* FindridePage */]);
    };
    ;
    CarRegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-car-registration',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\car-registration\car-registration.html"*/'<!--\n\n  Generated template for the CarRegistrationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>VERIFIY MY ID\n\n            <!--           <ion-icon name="md-search" class="text-white" style="margin-left: auto;float: right;"></ion-icon>-->\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding-right padding-left>\n\n    <p text-center padding-top margin-top>{{description}}</p>\n\n    <h2 text-center>{{namePicture}}</h2>\n\n\n\n    <ion-row>\n\n        <ion-col col-4 text-center>\n\n            <img  src="assets/imgs/v2.png" (click)="changeNamePicture1()">\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n            <img  src="assets/imgs/v3.png" (click)="changeNamePicture2()">\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n            <img  src="assets/imgs/v4.png" (click)="changeNamePicture3()">\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n            <img  src="assets/imgs/v4.png" (click)="changeNamePicture4()">\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n            <img  src="assets/imgs/credit-card (1).png" (click)="changeNamePicture5()">\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n            <img  src="../../assets/imgs/credit-card (1).png" (click)="changeNamePicture6()">\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <div text-center class="verifiy">\n\n        <img src="assets/imgs/v1.png">\n\n    </div>\n\n    <ion-row>\n\n        <ion-col>\n\n            <p padding-top class="btn-box"><button class="btn text-white bg-theme rounded" style="width: 80%;" (click)="usageCamera()">Subir Foto</button></p>\n\n        </ion-col>\n\n        <ion-col>\n\n            <p padding-top class="btn-box"><button class="btn text-white rounded buttonLight" style="width: 80%;" (click)= "findRide()">Hacer después</button></p>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\car-registration\car-registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], CarRegistrationPage);
    return CarRegistrationPage;
}());

//# sourceMappingURL=car-registration.js.map

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 211;

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/car-registration/car-registration.module": [
		540,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 252;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_filter__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirmpopup_confirmpopup__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListridePage = /** @class */ (function () {
    function ListridePage(navCtrl, afDB, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.SignUpService = SignUpService;
        this.sendCoordsService = sendCoordsService;
        this.modalCtrl = modalCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.locationOrigin = [];
        this.locationDestination = [];
        this.user = this.AngularFireAuth.auth.currentUser.uid;
        this.usersTotal = [];
        this.usersFindingTrip = [];
        this.accptedUsers = [];
        //get origin from driver
        this.sendCoordsService.getOrigin(this.user)
            .subscribe(function (origin) {
            _this.locationOrigin = origin;
            console.log(origin);
        });
        //get destination from driver
        this.sendCoordsService.getDestination(this.user)
            .subscribe(function (destination) {
            _this.locationDestination = destination;
            console.log(destination);
        });
        this.SignUpService.getUsers()
            .subscribe(function (users) {
            _this.usersTotal = users;
            _this.usersTotal.forEach(function (user) {
                if (user.findingTrip == true) {
                    if (_this.usersFindingTrip.length < 4) {
                        _this.usersFindingTrip.push(user);
                    }
                    else {
                        console.log('there is more than 4 users');
                    }
                }
                else if (user.findingTrip == false && user.findingTrip == null) {
                    _this.usersFindingTrip.pop(user);
                }
            });
        });
    }
    ListridePage.prototype.filter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__filter_filter__["a" /* FilterPage */]);
    };
    ListridePage.prototype.confirmpopup = function (user) {
        // this.navCtrl.push(ConfirmpopupPage)
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__confirmpopup_confirmpopup__["a" /* ConfirmpopupPage */], { user: user });
        modal.present();
        console.log(user);
        this.usersFindingTrip.forEach(function (valor, indice) {
            console.log(valor);
        });
        // this.SignUpServices.acceptedByDriver(this.usersFindingTrip)
        this.accptedUsers.push();
    };
    ListridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listride',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\listride\listride.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title class="Title">DRIVER\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-light" class="hideLongText">\n\n    <ion-row class="center-align bg-white flow-ride">\n\n        <ion-col *ngFor = "let origin of locationOrigin"  class="hideLongText" col-5>\n\n            <h2>Origen</h2> {{origin}}\n\n\n\n        </ion-col>\n\n        <ion-col col-2 text-center>\n\n            <img src="assets/imgs/arrow.jpg">\n\n        </ion-col>\n\n        <ion-col *ngFor = "let destination of locationDestination" class="hideLongText" col-5>\n\n            <h2>Destino</h2> {{destination}}\n\n        </ion-col>\n\n\n\n    </ion-row>\n\n    <ion-card *ngFor = "let user of usersFindingTrip">\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/face-1.jpg">\n\n            </ion-avatar>\n\n            <div class="name">\n\n                <h2>{{user.name}} {{user.lastname}}\n\n\n\n                    <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                </h2>\n\n                <p>Honda Cvic | White</p>\n\n            </div>\n\n            <div class="more">\n\n                <h2 class="text-light">\n\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n\n                    <ion-icon name="star"></ion-icon>\n\n                </h2>\n\n                <p class="text-light">(34 Reviews)</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                <p  >\n\n                    <span class="icon-location bg-theme"></span><span class="time">Origen:</span>{{user.trips.origin}}</p>\n\n                <p > \n\n                    <span class="icon-location bg-yellow"></span><span class="time">Destino:</span>{{user.trips.destination}}</p>\n\n            </div>\n\n            <ion-row class="center-align">\n\n                <!-- <ion-col col-3 class="detail-text text-theme">\n\n                    3 seats\n\n                </ion-col> -->\n\n                <ion-col col-2 class="detail-text text-theme">\n\n                    <span class="detail-text text-light">Pago:</span> Tarjeta\n\n                </ion-col>\n\n                <ion-col col-4 class="detail-text text-theme">\n\n                    <span class="detail-text text-light">Vuelto: </span>$10.000\n\n                </ion-col>\n\n                <ion-col center text-center col-4 text-right style="margin-left: auto;">\n\n                    <button class="btn bg-theme rounded full text-white" (click)=confirmpopup(user)>Request Ride</button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\listride\listride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuth"]])
    ], ListridePage);
    return ListridePage;
}());

//# sourceMappingURL=listride.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterPage = /** @class */ (function () {
    function FilterPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.structure = { lower: 33, upper: 60 };
    }
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\filter\filter.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>FILTER</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <p class="text-light" padding>Shorting By</p>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-list radio-group>\n\n                <ion-item>\n\n                    <ion-label>Rating</ion-label>\n\n                    <ion-radio checked="true" value="Rating"></ion-radio>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label>Price</ion-label>\n\n                    <ion-radio value="Price"></ion-radio>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-card-header>\n\n    </ion-card>\n\n    <p class="text-light" padding>Price Range</p>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-item>\n\n                <ion-range dualKnobs="true" [(ngModel)]="structure" color="success">\n\n                    <span range-left class="left-text">$ 40</span>\n\n                    <span range-right class="right-text">$ 70</span>\n\n                </ion-range>\n\n            </ion-item>\n\n        </ion-card-header>\n\n    </ion-card>\n\n    <p class="text-light" padding>Availiblity</p>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-list>\n\n                <ion-item>\n\n                    <ion-label>Seat Available</ion-label>\n\n                    <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                        <ion-option selected value="1">1 Seat</ion-option>\n\n                        <ion-option value="2">2 Seats</ion-option>\n\n                        <ion-option value="3">3 Seats</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n                <ion-item class="check-item">\n\n                    <ion-checkbox></ion-checkbox>\n\n                    <ion-label>Air Conditioner</ion-label>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-card-header>\n\n    </ion-card>\n\n    <ion-row class="fix-btn">\n\n        <ion-col>\n\n            <button class="btn rounded text-theme bg-white full">RESET</button>\n\n        </ion-col>\n\n        <ion-col>\n\n            <button class="btn rounded text-white bg-theme full">APPLY</button>\n\n        </ion-col>\n\n    </ion-row>\n\n    <div class="space">&nbsp;</div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\filter\filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmpricePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_price_service__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConfirmpricePage = /** @class */ (function () {
    function ConfirmpricePage(navCtrl, appCtrl, PriceService, alertCtrl, afDB, sendUsersService, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.PriceService = PriceService;
        this.alertCtrl = alertCtrl;
        this.afDB = afDB;
        this.sendUsersService = sendUsersService;
        this.SignUpService = SignUpService;
        this.sendCoordsService = sendCoordsService;
        this.modalCtrl = modalCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.userDriverUid = this.AngularFireAuth.auth.currentUser.uid;
    }
    ConfirmpricePage.prototype.setPriceDriver = function () {
        if (this.precio == null) {
            var alert_1 = this.alertCtrl.create({
                title: 'Informacion Incompleta',
                subTitle: 'No haz colocado el precio por el que estas dispuesto a compatir tu carro',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.nota == null) {
            this.PriceService.setPrice(this.userDriverUid, this.precio);
            this.accepted = true;
            this.dismiss();
        }
        else {
            this.PriceService.setPriceAndNote(this.userDriverUid, this.precio, this.nota);
            this.accepted = true;
            this.dismiss();
        }
    };
    ;
    ConfirmpricePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
    };
    ConfirmpricePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmprice',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\confirmprice\confirmprice.html"*/'<ion-content>\n\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n\n    <ion-card>\n\n        <h6 class="text-theme">Detalles del Viaje</h6>\n\n        \n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                <ion-item class="form">\n\n                    <ion-label floating>Precio</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="precio"></ion-input>\n\n                  </ion-item>\n\n                  <ion-item>\n\n                    <div class="form">\n\n                        <ion-list no-lines>\n\n                            <ion-item>\n\n                                <ion-textarea [(ngModel)]="nota" type="text"  ></ion-textarea>\n\n                            </ion-item>\n\n                        </ion-list>\n\n                    </div>\n\n                  </ion-item>\n\n            </div>\n\n        </ion-card-content>\n\n\n\n        <ion-card-content>\n\n            <div class="ride-detail no-before">\n\n                <p><small>Date</small>\n\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n\n                    22<sup>nd</sup> Feb, 2018 </p>\n\n                <p>\n\n                    <small>Vuelto</small>\n\n                    <ion-icon name="md-time" class="icon-location"></ion-icon>\n\n                    No necesita vuelto</p>\n\n            </div>\n\n        </ion-card-content>\n\n\n\n        <ion-card-content>\n\n            <div class="seats">\n\n                <ion-row>\n\n                    <ion-col col-4 class="rate">\n\n                        <small>Precio</small> $ 2500\n\n                    </ion-col>\n\n                    <ion-col col-5 class="rate">\n\n                        <small>Seat Request</small> 2 Seats\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row style="margin-top: 14px;">\n\n                    <ion-col col-4>\n\n                        <button class="btn bg-white text-theme rounded" style="width: 100%;"><ion-icon name="md-calendar" class="icon-location"></ion-icon></button>\n\n                    </ion-col>\n\n                    <ion-col col-8>\n\n                        <button class="btn bg-theme text-white rounded" style="width: 100%;font-size: .95rem;" (click)="setPriceDriver()">Aceptar Viaje</button>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\confirmprice\confirmprice.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_7__services_price_service__["a" /* priceService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ConfirmpricePage);
    return ConfirmpricePage;
}());

//# sourceMappingURL=confirmprice.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return priceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var priceService = /** @class */ (function () {
    function priceService(afDB, AngularFireAuth) {
        this.afDB = afDB;
        this.AngularFireAuth = AngularFireAuth;
    }
    priceService.prototype.setPriceAndNote = function (user, price, nota) {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('drivers/' + user + '/trips').update({
            price: price,
            nota: nota
        });
    };
    priceService.prototype.setPrice = function (user, price) {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('drivers/' + user + '/trips').update({
            price: price
        });
    };
    priceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], priceService);
    return priceService;
}());

//# sourceMappingURL=price.service.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_driverauthentication_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_signup_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SignupPage = /** @class */ (function () {
    // userFirebase = this.AngularFireAuth.auth.currentUser;
    function SignupPage(navCtrl, afDB, formBuilder, authenticationService, SignUpService, alertCtrl, AngularFireAuth, navParams) {
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.SignUpService = SignUpService;
        this.alertCtrl = alertCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.navParams = navParams;
        this.user = {};
        this.tokenId = '';
        this.userId = '';
        this.isReadonly = true;
        this.signupGroup = this.formBuilder.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            lastname: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            email: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            fixedemail: [""],
            password: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            passwordconf: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            phone: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            carModel: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            plateNumber: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
    }
    SignupPage.prototype.scrolling = function () {
        this.content.scrollTo(30, 0);
    };
    ;
    SignupPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.verification = function () {
        var _this = this;
        //creating user on firebase
        var userName = this.signupGroup.controls['name'].value;
        var userLastName = this.signupGroup.controls['lastname'].value;
        var userEmail = this.signupGroup.controls['email'].value;
        var userFixedemail = this.signupGroup.controls['fixedemail'].value;
        var userEmailComplete = userEmail + userFixedemail;
        var userPassword = this.signupGroup.controls['password'].value;
        var userPasswordconf = this.signupGroup.controls['passwordconf'].value;
        var userPhone = this.signupGroup.controls['phone'].value;
        var userCarModel = this.signupGroup.controls['carModel'].value;
        var userPlateNumber = this.signupGroup.controls['plateNumber'].value;
        this.user = this.signupGroup.value;
        if (userPassword === userPasswordconf) {
            this.authenticationService.registerWithEmail(userEmailComplete, userPassword);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], this.user);
            if (!this.user.userId) {
                this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
                    if (user) {
                        user.getIdToken().then(function (token) {
                            _this.user.tokenId = token;
                            console.log(_this.user.tokenId);
                        });
                        if (!_this.user.userId) {
                            _this.user.userId = user.uid;
                            console.log(_this.user.userId); //remember to delete this console.log for safety reasons
                        }
                        _this.SignUpService.saveUser(_this.user);
                    }
                    else {
                        console.log('there is no user');
                    }
                });
            }
            ;
            // sending email verification and verifying weather email is verified or not
            this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
                if (user) {
                    if (user.emailVerified == false) {
                        user.sendEmailVerification();
                        console.log("verification email has been sent");
                    }
                    else {
                        console.log("verification email has not been sent or the email is already verifyied");
                    }
                }
                else {
                    console.log('there is no user');
                }
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'las contraseñas no coinciden, intenta de nuevo',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], SignupPage.prototype, "content", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\signup\signup.html"*/'<ion-header class="transparent">\n\n    <ion-navbar>\n\n        <ion-title><span class="text-white">SIGN UP</span></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n    <ion-content class="bg-background-img">\n\n        <div class="logo">\n\n            <img src="../../assets/imgs/logo waypool-01.png" alt="logo">\n\n        </div>\n\n        <form [formGroup]="signupGroup" (ngSubmit)="verification()">\n\n        <div class="bg-white login">\n\n            <div class="">\n\n                <ion-row>\n\n                    <ion-col class="click-img">\n\n                        <div class="form">\n\n                            <ion-icon name="camera"></ion-icon>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col class="name-fild">\n\n                        <ion-list class="form" style="margin-bottom: 0">\n\n                            <ion-item>\n\n                                <ion-label></ion-label>\n\n                                <ion-input  type="text"  text-right formControlName="name" placeholder= "Tú nombre"></ion-input>\n\n                            </ion-item>\n\n                            <ion-item>\n\n                                <ion-label></ion-label>\n\n                                <ion-input type="text"  text-right  formControlName="lastname" placeholder= "Tú apellido"></ion-input>\n\n                            </ion-item>\n\n                        </ion-list>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col class="name-fild-2">\n\n                        <ion-list class="form">\n\n                            <ion-item class="editable-email">\n\n                                    <ion-label></ion-label>\n\n                                        <ion-input type="text" text-right formControlName="email" placeholder= "email"></ion-input>\n\n                                    </ion-item>\n\n                            </ion-list>\n\n                    </ion-col>\n\n                    <ion-col class="name-fild-2">\n\n                        <ion-list class="form">\n\n                            <ion-item class="nonEditable-email">\n\n                                    <!-- <ion-input type="email" value="@uninorte.edu.co"  text-right formControlName="fixedemail" [readonly]="isReadonly"></ion-input> -->\n\n                                    <ion-select formControlName="fixedemail" type="email">\n\n                                            <ion-option value="@uninorte.edu.co">@uninorte.edu.co</ion-option>\n\n                                            <ion-option value="@uniautonoma.edu.co">@uniautonoma.edu.co</ion-option>\n\n                                            <ion-option value="@gmail.com">@gmail.com</ion-option>\n\n                                        </ion-select>\n\n                            </ion-item>\n\n                        </ion-list>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-list class="form" style="margin-bottom: 0">\n\n                    <ion-item>\n\n                        <ion-label floating>contraseña nueva <span style="font-weight: bold; color: red;">(minimo 6 caracteres)</span></ion-label>\n\n                        <ion-input type="password"  text-right formControlName="password"  minlength="6"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label></ion-label>\n\n                        <ion-input type="password"  text-right formControlName="passwordconf" placeholder= "confirma tu contraseña" minlength="6"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label></ion-label>\n\n                        <ion-input type="text" text-right formControlName="phone" placeholder= "Tú némero de celular"></ion-input>\n\n                    </ion-item>\n\n                    <ion-row>\n\n                        <ion-col class="name-fild-2">\n\n                            <ion-list class="form">\n\n                                <ion-item class="carModel">\n\n                                        <ion-label></ion-label>\n\n                                            <ion-input type="text" text-right formControlName="carModel" placeholder= "marca de carro"></ion-input>\n\n                                        </ion-item>\n\n                                </ion-list>\n\n                        </ion-col>\n\n                        <ion-col class="name-fild-2">\n\n                            <ion-list class="form">\n\n                                <ion-item class="plateNumber">\n\n                                        <ion-input type="text"  text-right formControlName="plateNumber" placeholder= "placa de carro" ></ion-input>\n\n                                </ion-item>\n\n                            </ion-list>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-list>\n\n                        <button ion-button full class="bg-theme text-white btn rounded" type="submit" [disabled]="!signupGroup.valid">¡Únete ya!</button>\n\n                        <p text-center>¿ya estas registrado? <strong class="text-theme" (click)="login()">Sign in</strong></p>\n\n            </div>\n\n        </div>\n\n    </form>\n\n    </ion-content>\n\n    \n\n\n\n\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_6__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raterider_raterider__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatting_chatting__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pickup_pickup__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyridePage = /** @class */ (function () {
    function MyridePage(navCtrl, navParams, sendCoordsService, AngularFireAuth, sendUsersService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendCoordsService = sendCoordsService;
        this.AngularFireAuth = AngularFireAuth;
        this.sendUsersService = sendUsersService;
        this.usersAvailable = [];
        this.ride = "today";
        this.user = this.AngularFireAuth.auth.currentUser.uid;
        this.sendUsersService.getUsersOnTrip(this.user)
            .subscribe(function (user) {
            _this.usersAvailable = user;
            console.log(_this.usersAvailable);
        });
    }
    MyridePage.prototype.raterider = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__raterider_raterider__["a" /* RateriderPage */]);
    };
    MyridePage.prototype.chatting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chatting_chatting__["a" /* ChattingPage */]);
    };
    MyridePage.prototype.goToRide = function (user) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pickup_pickup__["a" /* PickupPage */], { user: user });
    };
    MyridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myride',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\myride\myride.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title class="text-center">MY RIDE\n\n            <ion-icon name="md-locate" class="text-white" style="margin-left: auto;float: right;"></ion-icon>\n\n        </ion-title>\n\n\n\n    </ion-navbar>\n\n    <div padding-left padding-right>\n\n        <ion-segment [(ngModel)]="ride">\n\n            <ion-segment-button value="past">\n\n                Historial de Viaje  \n\n            </ion-segment-button>\n\n            <ion-segment-button value="today">\n\n                Viaje Actual\n\n            </ion-segment-button>            \n\n        </ion-segment>\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <div [ngSwitch]="ride">\n\n        <ion-list *ngSwitchCase="\'past\'">\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>David Johnson\n\n                        </h2>\n\n                        <p>Honda Cvic | White</p>\n\n                    </div>\n\n                    <div class="more">\n\n                        <h2 class="text-theme">$ 120\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h2>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="ride-detail">\n\n                        <p>\n\n                            <span class="icon-location bg-theme"></span>Washington sq.park New York</p>\n\n                        <p>\n\n                            <span class="icon-location bg-yellow"></span>Harison, east sq.park New York</p>\n\n                    </div>\n\n                    <ion-row>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>Today: 12:15</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>2 Seats</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-4 text-right style="max-width: 100px;">\n\n                            <button class="btn bg-yellow rounded full text-white" (click)="raterider()" style="width: 100%;">Rate Now</button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card-content>\n\n            </ion-card>\n\n\n\n            <!-- repilica -->\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>David Johnson\n\n                                <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                        </h2>\n\n                        <p>Aqui puede ir  | algo interesante</p>\n\n                    </div>\n\n                    <div class="more">\n\n                        <h2 class="text-theme">$ GRATIS\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h2>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="ride-detail">\n\n                        <p>\n\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n\n                        <p>\n\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Washington sq.park New York</p>\n\n                    </div>\n\n                    <ion-row>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>Today: 12:15</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>2 Seats</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-4 class="detail-text" text-right style="max-width: 100px;">\n\n                            <div text-left>Rated\n\n                                <div style="margin-top: 5px;">\n\n                                    <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                                    <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                                    <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                                    <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                                    <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                                </div>\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>David Johnson\n\n                        </h2>\n\n                        <p>Honda Cvic | White</p>\n\n                    </div>\n\n                    <div class="more">\n\n                        <h2 class="text-theme">$ 120\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h2>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="ride-detail">\n\n                        <p>\n\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n\n                        <p>\n\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n\n                    </div>\n\n                    <ion-row>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>Today: 12:15</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>2 Seats</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-4 class="detail-text" text-right style="max-width: 100px;">\n\n                            <div text-left>Cancled Ride\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-list>\n\n<!-- -------------------------------------------------------------------------------------------------------------------------- -->\n\n<!-- -------------------------------------------------------------------------------------------------------------------------- -->\n\n<!-- -------------------------------------- TODAY ----------------------------------------------------------------------------- -->\n\n<!-- -------------------------------------------------------------------------------------------------------------------------- -->\n\n<!-- -------------------------------------------------------------------------------------------------------------------------- -->\n\n\n\n        <ion-list *ngSwitchCase="\'today\'">\n\n            <ion-card *ngFor = "let user of usersAvailable">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>{{user.name}} {{user.lastname}}\n\n                        </h2>\n\n                        <p>Bonitos y | Gorditos muchachos</p>\n\n                    </div>\n\n                    <div class="more">\n\n                        <h2 class="text-theme">$ 120\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h2>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="ride-detail">\n\n                        <p>\n\n                            <span class="icon-location bg-theme"></span>{{user.origin}}</p>\n\n                        <p>\n\n                            <span class="icon-location bg-yellow"></span>{{user.destination}}</p>\n\n                    </div>\n\n                    <ion-row>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>Today: 12:15</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>2 Seats</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-5>\n\n                            <button class="btn bg-theme rounded full text-white" (click)="goToRide(user)">Recoger</button>\n\n                            <button class="btn bg-yellow rounded full text-white"><ion-icon name="ios-call" class="text-white"></ion-icon></button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card-content>\n\n            </ion-card>\n\n\n\n           \n\n            \n\n            \n\n            \n\n        </ion-list>\n\n       \n\n\n\n            \n\n            \n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\myride\myride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__["a" /* sendUsersService */]])
    ], MyridePage);
    return MyridePage;
}());

//# sourceMappingURL=myride.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateriderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RateriderPage = /** @class */ (function () {
    function RateriderPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RateriderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-raterider',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\raterider\raterider.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>RATE DRIVER</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card class="slip">\n\n        <div text-center>\n\n            <h4 class="text-dark">We hope you had a grate ride!</h4>\n\n            <p class="text-light">22nd Feb 2018, 12:20 pm</p>\n\n            <h1 class="text-theme">$ 120</h1>\n\n            <h4 class="text-dark">Payment has been donevia<br>your Vroom Wallet</h4>\n\n        </div>\n\n    </ion-card>\n\n    <ion-card class="rate">\n\n        <div text-center>\n\n            <p>So how was your experience with...</p>\n\n            <div class="driver">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <h2>David Johnson\n\n                        <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                    </h2>\n\n                    <p>Honda Civic | White</p>\n\n                </ion-item>\n\n                <p class="icons">\n\n                    <ion-icon name="ios-star"></ion-icon>\n\n                    <ion-icon name="ios-star"></ion-icon>\n\n                    <ion-icon name="ios-star"></ion-icon>\n\n                    <ion-icon name="ios-star"></ion-icon>\n\n                    <ion-icon name="ios-star"></ion-icon>\n\n                </p>\n\n                <div class="form">\n\n                    <ion-list no-lines>\n\n                        <ion-item>\n\n                            <ion-textarea type="text" value="Leave a feedback"></ion-textarea>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </div>\n\n                <p padding-top><button class="btn text-white bg-theme rounded" style="width: 100%;">SUBMIT RATING</button></p>\n\n            </div>\n\n        </div>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\raterider\raterider.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], RateriderPage);
    return RateriderPage;
}());

//# sourceMappingURL=raterider.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatting_chatting__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_signup_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_driverauthentication_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__ = __webpack_require__(171);
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
    function PickupPage(navCtrl, alertCtrl, toastCtrl, callNumber, navParams, SignUpService, authenticationService, geolocation, zone, sendCoordsService, AngularFireAuth) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
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
        console.log(this.user);
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
        });
        this.bounds = new google.maps.LatLngBounds();
        this.geocoder = new google.maps.Geocoder();
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
                streetViewControl: true,
                rotateControl: false,
                fullscreenControl: false
            };
            _this.myLatLng = { lat: position.coords.latitude, lng: position.coords.longitude };
            //creates the map and give options
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.geocodeLatLng(latLng);
            var marker = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: latLng,
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
    PickupPage.prototype.geocodeAddress = function (originDriver) {
        var _this = this;
        this.geocoder.geocode({ 'address': JSON.stringify(originDriver) }, function (results, status) {
            if (status == 'OK') {
                var marker = new google.maps.Marker({
                    map: _this.map,
                    position: results[0].geometry.location
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
    PickupPage.prototype.chatting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatting_chatting__["a" /* ChattingPage */]);
    };
    PickupPage.prototype.notifyDriver = function () {
        this.presentToast('Se le ha notificado a tu compañero que ya llegaste', 3000, 'top');
    };
    PickupPage.prototype.PickUp = function () {
        this.sendCoordsService.pickUp(this.useruid);
    };
    PickupPage.prototype.callUser = function () {
        var _this = this;
        this.callNumber.isCallSupported()
            .then(function (response) {
            if (response == true) {
                _this.callNumber.callNumber(_this.user.phone, true)
                    .then(function (res) { return console.log('Launched dialer!', res); })
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PickupPage.prototype, "mapElement", void 0);
    PickupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pickup',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\pickup\pickup.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>Escoger Compañero\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n        <ion-card class="cardOnTrip">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>{{user.name}} {{user.lastname}}\n\n                        </h2>\n\n                       \n\n                    </div>\n\n                    <div class="more">\n\n                        <h2 class="text-theme">\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h2>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="ride-detail">\n\n                        <p>\n\n                            <span class="icon-location bg-theme"></span>{{addressOrigin}}</p>\n\n                        <p>\n\n                            <span class="icon-location bg-yellow"></span>{{user.origin}}</p>\n\n                    </div>\n\n                    <ion-row>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <button class="btn bg-theme rounded full text-white" (click)="notifyDriver()">Ya Llegué</button>\n\n                                \n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col class="detail-text">\n\n                            \n\n                                <button class="btn bg-yellow rounded full text-white"><ion-icon name="chatboxes" class="text-white"></ion-icon></button>\n\n                            \n\n                        </ion-col>\n\n                        <ion-col col-5>\n\n                            <button navPop class="btn bg-theme rounded full text-white" (click)="pickUp()">Recoger</button>\n\n                            <button (click)="callUser()" class="btn bg-yellow rounded full text-white"><ion-icon name="ios-call" class="text-white"></ion-icon></button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card-content>\n\n               \n\n            </ion-card>\n\n    <div #map id="map"></div>  \n\n   \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\pickup\pickup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_6__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"]])
    ], PickupPage);
    return PickupPage;
}());

//# sourceMappingURL=pickup.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatting_chatting__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatsPage = /** @class */ (function () {
    function ChatsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChatsPage.prototype.chatting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatting_chatting__["a" /* ChattingPage */]);
    };
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chats',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\chats\chats.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title class="text-center">CHATS\n\n            <ion-icon name="md-search" class="text-white" style="margin-left: auto;float: right;"></ion-icon>\n\n        </ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-item (click)="chatting()">\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/face-1.jpg">\n\n            <ion-badge color="danger">9+</ion-badge>\n\n        </ion-avatar>\n\n        <h2 class="text-theme">Buzz Lightyear\n\n        </h2>\n\n        <p>Washington sq Park?</p>\n\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n\n    </ion-item>\n\n    <!-- repeat -->\n\n    <ion-item (click)="chatting()">\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man1.png">\n\n        </ion-avatar>\n\n        <h2>Buzz Lightyear\n\n        </h2>\n\n        <p>Washington sq Park?</p>\n\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man2.png">\n\n        </ion-avatar>\n\n        <h2>Buzz Lightyear</h2>\n\n        <p>Washington sq Park?</p>\n\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n\n    </ion-item>\n\n    <ion-item (click)="chatting()">\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man3.png">\n\n        </ion-avatar>\n\n        <h2>Buzz Lightyear\n\n        </h2>\n\n        <p>Washington sq Park?</p>\n\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man4.png">\n\n        </ion-avatar>\n\n        <h2>Buzz Lightyear</h2>\n\n        <p>Washington sq Park?</p>\n\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n\n    </ion-item>\n\n    <p text-center class="text-light"><small>Chat will be dessapear after completed the ride or<br>in case of cancelation of ride.</small></p>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\chats\chats.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WalletPage = /** @class */ (function () {
    function WalletPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wallet',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\wallet\wallet.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title class="text-center">MY WALLET</ion-title>\n\n    </ion-navbar>\n\n    <div text-center padding>\n\n        <p><small class="text-white">Total Balance</small></p>\n\n        <h1 class="text-white">$ 120</h1>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button class="btn text-white bg-yellow rounded">ADD MONEY</button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button class="btn text-theme bg-white rounded">SEND TO BANK</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/face-1.jpg">\n\n            </ion-avatar>\n\n            <div class="name">\n\n                <h2>Paid for Ride\n\n                    <small>19 Feb, 05:15 pm</small>\n\n                </h2>\n\n                <p>Washing sq. Park to East Network</p>\n\n            </div>\n\n            <div class="more" text-right>\n\n                <h2 class="text-theme">+$120\n\n                </h2>\n\n                <p class="text-dark">To Johnson</p>\n\n            </div>\n\n        </ion-item>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/man3.png">\n\n            </ion-avatar>\n\n            <div class="name">\n\n                <h2>Paid for Ride\n\n                    <small>19 Feb, 05:15 pm</small>\n\n                </h2>\n\n                <p>Washing sq. Park to East Network</p>\n\n            </div>\n\n            <div class="more" text-right>\n\n                <h2 class="text-theme">+$120\n\n                </h2>\n\n                <p class="text-dark">To Johnson</p>\n\n            </div>\n\n        </ion-item>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/man1.png">\n\n            </ion-avatar>\n\n            <div class="name">\n\n                <h2>Paid for Ride\n\n                    <small>19 Feb, 05:15 pm</small>\n\n                </h2>\n\n                <p>Washing sq. Park to East Network</p>\n\n            </div>\n\n            <div class="more" text-right>\n\n                <h2 class="text-theme">+$120\n\n                </h2>\n\n                <p class="text-dark">To Johnson</p>\n\n            </div>\n\n        </ion-item>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/man2.png">\n\n            </ion-avatar>\n\n            <div class="name">\n\n                <h2>Paid for Ride\n\n                    <small>19 Feb, 05:15 pm</small>\n\n                </h2>\n\n                <p>Washing sq. Park to East Network</p>\n\n            </div>\n\n            <div class="more" text-right>\n\n                <h2 class="text-theme">+$120\n\n                </h2>\n\n                <p class="text-dark">To Johnson</p>\n\n            </div>\n\n        </ion-item>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\wallet\wallet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reviews_reviews__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_notification__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__terms_terms__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__earn_earn__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ratevroom_ratevroom__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__help_help__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_driverauthentication_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__car_registration_car_registration__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MorePage = /** @class */ (function () {
    function MorePage(navCtrl, AuthenticationService) {
        this.navCtrl = navCtrl;
        this.AuthenticationService = AuthenticationService;
    }
    MorePage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    MorePage.prototype.reviews = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reviews_reviews__["a" /* ReviewsPage */]);
    };
    MorePage.prototype.notification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__notification_notification__["a" /* NotificationPage */]);
    };
    MorePage.prototype.terms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__terms_terms__["a" /* TermsPage */]);
    };
    MorePage.prototype.earn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__earn_earn__["a" /* EarnPage */]);
    };
    MorePage.prototype.ratevroom = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__ratevroom_ratevroom__["a" /* RatevroomPage */]);
    };
    MorePage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__help_help__["a" /* HelpPage */]);
    };
    MorePage.prototype.logout = function () {
        this.AuthenticationService.logOut();
        console.log(__WEBPACK_IMPORTED_MODULE_11_firebase__["auth"]().currentUser);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
    };
    MorePage.prototype.upload = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__car_registration_car_registration__["a" /* CarRegistrationPage */]);
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\more\more.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title class="text-center">MORE</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-item>\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/face-1.jpg">\n\n        </ion-avatar>\n\n        <div class="name">\n\n            <h2>David Johnson\n\n            </h2>\n\n            <p (click)="profile()">View Profile</p>\n\n        </div>\n\n        <div class="more">\n\n            <h2>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n            </h2>\n\n            <p>(53 Reviews)</p>\n\n        </div>\n\n    </ion-item>\n\n\n\n    <ion-list no-lines>\n\n        <button ion-item (click)="reviews()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n            </ion-avatar>\n\n            My Reviews\n\n        </button>\n\n        <button ion-item (click)="notification()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="md-notifications"></ion-icon>\n\n            </ion-avatar>\n\n            Notification\n\n        </button>\n\n        <button ion-item (click)="terms()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="md-paper"></ion-icon>\n\n            </ion-avatar>\n\n            Term and Condition\n\n        </button>\n\n        <button ion-item (click)="earn()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="md-share"></ion-icon>\n\n            </ion-avatar>\n\n            Refer and Earn\n\n        </button>\n\n        <button ion-item (click)="ratevroom()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="md-thumbs-up"></ion-icon>\n\n            </ion-avatar>\n\n            Rate Vroom\n\n        </button>\n\n        <button ion-item (click)="help()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="md-alert"></ion-icon>\n\n            </ion-avatar>\n\n            Help\n\n        </button>\n\n        <button ion-item (click)="upload()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="md-paper"></ion-icon>   \n\n            </ion-avatar>\n\n            Verifiy My Id\n\n        </button>\n\n    </ion-list>\n\n    <ion-list no-lines>\n\n        <button ion-item (click)="logout()" text-center><h2 class="text-theme"><strong>Log out</strong></h2></button>\n\n\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\more\more.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_10__services_driverauthentication_service__["a" /* authenticationService */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.myprofile = "about";
    }
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\profile\profile.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>MY PROFILE</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-item style="position: relative;z-index: 2;">\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man3.png">\n\n        </ion-avatar>\n\n        <div class="name">\n\n            <h2>David Johnson\n\n            </h2>\n\n            <p>Edit Profile</p>\n\n        </div>\n\n        <div class="more">\n\n            <h2>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n            </h2>\n\n            <p>(53 Reviews)</p>\n\n        </div>\n\n    </ion-item>\n\n    <div class="tabs bg-white">\n\n        <ion-segment [(ngModel)]="myprofile">\n\n            <ion-segment-button value="about">\n\n                About\n\n            </ion-segment-button>\n\n            <ion-segment-button value="reviews">\n\n                Reviews\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </div>\n\n    <div [ngSwitch]="myprofile">\n\n        <ion-list *ngSwitchCase="\'about\'">\n\n            <div class="bg-white about address">\n\n                <p class="text-theme heading">Address<span float-right>Edit</span></p>\n\n                <div class="ride-detail">\n\n                    <p><small>Home</small>\n\n                        <span class="icon-location bg-theme"></span>140 central Building near hdfc bank Washington sq.park New York</p>\n\n                    <p>\n\n                        <small>Office</small>\n\n                        <span class="icon-location bg-yellow"></span>Harison, central Building near hdfc bank east sq.park New York</p>\n\n                </div>\n\n            </div>\n\n            <div class="bg-white about info">\n\n                <p class="text-theme heading">Personal Info<span float-right>Edit</span></p>\n\n                <ion-list no-lines class="form-list">\n\n                    <ion-item>\n\n                        <ion-label floating>User Name</ion-label>\n\n                        <ion-input type="text" value="Johan Bitoda" readonly></ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n            <div class="bg-white about info">\n\n                <p class="text-theme heading">Verification<span float-right>Save</span></p>\n\n                <ion-list no-lines class="form-list">\n\n                    <ion-item>\n\n\n\n                        <ion-label floating>Phone Verification</ion-label>\n\n                        <ion-input type="text" value="+91 964 148 6000" readonly></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-icon name="ios-checkmark-circle" class="text-theme check"></ion-icon>\n\n                        <ion-label floating>Email Verification</ion-label>\n\n                        <ion-input type="text" value="johanbittoda@email.com" readonly></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-icon name="ios-checkmark-circle" class="text-theme check"></ion-icon>\n\n                        <ion-label floating>Goverment ID Verification</ion-label>\n\n                        <ion-input type="text" value="Senior Architechat Alex Designs." readonly></ion-input>\n\n\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n            <div class="bg-white about info">\n\n                <p class="text-theme heading">Car Info<span float-right>Save</span></p>\n\n                <ion-list no-lines class="form-list">\n\n                    <ion-row>\n\n                        <ion-col col-6>\n\n                            <ion-item>\n\n                                <ion-label floating>Car Brand</ion-label>\n\n                                <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                                    <ion-option selected value="Honda">Honda</ion-option>\n\n                                    <ion-option value="Audi">Audi</ion-option>\n\n                                    <ion-option value="BMW">BMW</ion-option>\n\n                                </ion-select>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-6>\n\n                            <ion-item>\n\n                                <ion-label floating>Car Model</ion-label>\n\n                                <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                                    <ion-option selected value="Civik">Civik</ion-option>\n\n                                    <ion-option value="Luxary">Luxary</ion-option>\n\n                                </ion-select>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-6>\n\n                            <ion-item>\n\n                                <ion-label floating>Seat for Passanger</ion-label>\n\n                                <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                                    <ion-option value="1">1 Seat</ion-option>\n\n                                    <ion-option value="2">2 Seats</ion-option>\n\n                                    <ion-option selected value="2">3 Seat</ion-option>\n\n                                </ion-select>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-6>\n\n                            <ion-item>\n\n                                <ion-label floating>Air Conditioner availibility</ion-label>\n\n                                <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                                    <ion-option selected value="yes">AC Availible</ion-option>\n\n                                    <ion-option value="no">Not Availible</ion-option>\n\n                                </ion-select>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-6>\n\n                            <ion-item>\n\n                                <ion-label floating>Car Number</ion-label>\n\n                                <ion-input type="text" value="D3 34 45D" readonly></ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-6>\n\n                            <ion-item>\n\n                                <ion-label floating>Car Color</ion-label>\n\n                                <ion-input type="text" value="White" readonly></ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-list>\n\n            </div>\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'reviews\'">\n\n            <div class="bg-white" padding style="margin-bottom: 4px;">\n\n                <div class="rating-box">\n\n                    <p>\n\n                        <span class="text-1">5<ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="rate-bar"><span class="bg-theme" style="width: 100%"></span></span>\n\n                        <span class="text-2">100</span>\n\n                    </p>\n\n                    <p>\n\n                        <span class="text-1">4<ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="rate-bar"><span class="bg-theme" style="width: 90%"></span></span>\n\n                        <span class="text-2">90</span></p>\n\n                    <p>\n\n                        <span class="text-1">3<ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="rate-bar"><span class="bg-theme" style="width: 70%"></span></span>\n\n                        <span class="text-2">60</span>\n\n                    </p>\n\n                    <p>\n\n                        <span class="text-1">2<ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="rate-bar"><span class="bg-theme" style="width: 50%"></span></span>\n\n                        <span class="text-2">40</span>\n\n                    </p>\n\n                    <p>\n\n                        <span class="text-1">1<ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="rate-bar"><span class="bg-theme" style="width: 20%"></span></span>\n\n                        <span class="text-2">20</span>\n\n                    </p>\n\n                </div>\n\n            </div>\n\n            <ion-card class="review">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <h2>Buzz Lightyear</h2>\n\n                    <p>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star"></ion-icon>\n\n                        <ion-icon name="ios-star"></ion-icon>\n\n                    </p>\n\n                    <ion-note item-end>15 April 2017</ion-note>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="detail">\n\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card class="review">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <h2>Buzz Lightyear</h2>\n\n                    <p>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star"></ion-icon>\n\n                        <ion-icon name="ios-star"></ion-icon>\n\n                    </p>\n\n                    <ion-note item-end>15 April 2017</ion-note>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="detail">\n\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewsPage = /** @class */ (function () {
    function ReviewsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ReviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reviews',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\reviews\reviews.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>MY REVIEWS</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/face-1.jpg">\n\n            </ion-avatar>\n\n            <h2>Buzz Lightyear</h2>\n\n            <p>\n\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n            </p>\n\n            <ion-note item-end>15 April 2017</ion-note>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="detail">\n\n                <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/man1.png">\n\n            </ion-avatar>\n\n            <h2>Buzz Lightyear</h2>\n\n            <p>\n\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n            </p>\n\n            <ion-note item-end>15 April 2017</ion-note>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="detail">\n\n                <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/man2.png">\n\n            </ion-avatar>\n\n            <h2>Buzz Lightyear</h2>\n\n            <p>\n\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n            </p>\n\n            <ion-note item-end>15 April 2017</ion-note>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="detail">\n\n                <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\reviews\reviews.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ReviewsPage);
    return ReviewsPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\notification\notification.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>NOTIFICATION</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-item>\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man1.png">\n\n        </ion-avatar>\n\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n\n        </h2>\n\n        <ion-note item-end>22 Feb 2018</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man2.png">\n\n        </ion-avatar>\n\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n\n        </h2>\n\n        <ion-note item-end>22 Feb 2018</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man3.png">\n\n        </ion-avatar>\n\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n\n        </h2>\n\n        <ion-note item-end>22 Feb 2018</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man4.png">\n\n        </ion-avatar>\n\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n\n        </h2>\n\n        <ion-note item-end>22 Feb 2018</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man5.png">\n\n        </ion-avatar>\n\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n\n        </h2>\n\n        <ion-note item-end>22 Feb 2018</ion-note>\n\n    </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\notification\notification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\terms\terms.html"*/'<ion-header class="transparent">\n\n    <ion-navbar>\n\n        <ion-title><span class="text-white">TEARMS & CONDITIONS</span></ion-title>\n\n    </ion-navbar>\n\n    <div class="logo">\n\n        <img src="assets/imgs/logo.png" alt="logo">\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content class="bg-background-img">\n\n    <div class="bg-white">\n\n        <h4 class="text-theme">Terms Of Vroom</h4>\n\n        <p class="text-dark">Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed.</p>\n\n        <p class="text-dark">Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed.</p>\n\n        <p class="text-dark">Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed.</p>\n\n\n\n    </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\terms\terms.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EarnPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EarnPage = /** @class */ (function () {
    function EarnPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EarnPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-earn',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\earn\earn.html"*/'<ion-header class="transparent">\n\n    <ion-navbar>\n\n        <ion-title><span class="text-white"></span></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <img src="assets/imgs/menu-bg2.jpg">\n\n    <div padding-left padding-right>\n\n        <ion-card class="bg-theme">\n\n            <ion-card-content text-center>\n\n                <p class="text-white">Your Referral Code</p>\n\n                <h6 class="text-white">532461</h6>\n\n            </ion-card-content>\n\n        </ion-card>\n\n        <div padding-left padding-right padding-top padding>\n\n            <br>\n\n            <h4 class="text-theme">Refer and earn</h4>\n\n            <p class="text-drack">Share the referral code with your friends and family members and get 30% off on cab fare</p>\n\n        </div>\n\n        <ion-row>\n\n            <ion-col col-3 text-center padding>\n\n                <img src="assets/imgs/fb.png">\n\n            </ion-col>\n\n            <ion-col col-3 text-center padding padding>\n\n                <img src="assets/imgs/wpp.png">\n\n            </ion-col>\n\n            <ion-col col-3 text-center padding>\n\n                <img src="assets/imgs/tw.png">\n\n            </ion-col>\n\n            <ion-col col-3 text-center padding>\n\n                <img src="assets/imgs/more.png">\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\earn\earn.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], EarnPage);
    return EarnPage;
}());

//# sourceMappingURL=earn.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatevroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatevroomPage = /** @class */ (function () {
    function RatevroomPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RatevroomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ratevroom',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\ratevroom\ratevroom.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>RATE VROOM</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card class="slip">\n\n        <div text-center>\n\n            <h4 class="text-dark">We hope you had a grate ride!</h4>\n\n            <p class="text-light">22nd Feb 2018, 12:20 pm</p>\n\n            <h1 class="text-theme">$ 120</h1>\n\n            <h4 class="text-dark">Payment has been donevia<br>your Vroom Wallet</h4>\n\n        </div>\n\n    </ion-card>\n\n    <ion-card class="rate">\n\n        <div text-center>\n\n            <p>So how was your experience with...</p>\n\n            <div class="driver">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <h2>David Johnson\n\n                        <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                    </h2>\n\n                    <p>Honda Civic | White</p>\n\n                </ion-item>\n\n                <p class="icons">\n\n                    <ion-icon name="ios-star"></ion-icon>\n\n                    <ion-icon name="ios-star"></ion-icon>\n\n                    <ion-icon name="ios-star"></ion-icon>\n\n                    <ion-icon name="ios-star"></ion-icon>\n\n                    <ion-icon name="ios-star"></ion-icon>\n\n                </p>\n\n                <div class="form">\n\n                    <ion-list no-lines>\n\n                        <ion-item>\n\n                            <ion-textarea type="text" value="Leave a feedback"></ion-textarea>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </div>\n\n                <p padding-top><button class="btn text-white bg-theme rounded" style="width: 100%;">SUBMIT RATING</button></p>\n\n            </div>\n\n        </div>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\ratevroom\ratevroom.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], RatevroomPage);
    return RatevroomPage;
}());

//# sourceMappingURL=ratevroom.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\help\help.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>HELP</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <p class="text-light" padding>choose your issue</p>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <h1><strong>Trips and fare</strong>\n\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n\n            </h1>\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            <small>Any issue regarding your trip and fare</small>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <h1><strong>Payment</strong>\n\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n\n            </h1>\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            <small>problim while paying fare or related issue</small>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <h1><strong>App Usability</strong>\n\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n\n            </h1>\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            <small>Any issue while using our App</small>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <h1><strong>Account</strong>\n\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n\n            </h1>\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            <small>your account info can\'t change details or change Password .</small>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\help\help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CodePage = /** @class */ (function () {
    function CodePage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */];
    }
    CodePage.prototype.rootpage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    CodePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-code',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\code\code.html"*/'<ion-content padding>\n\n    <h1 text-right>\n\n        <ion-icon class="text-white" name="md-close" (click)="dismiss()"></ion-icon>\n\n    </h1>\n\n    <ion-card>\n\n        <img src="assets/imgs/menu-bg.png" />\n\n        <ion-card-content>\n\n            <div padding-top padding-right padding-left>\n\n                <ion-card-title class="text-theme">\n\n                    Do you have any referral code?\n\n                </ion-card-title>\n\n                <h5 padding-top>\n\n                    Add referral code and get <br> 100% cashback on first ride.\n\n                </h5>\n\n                <ion-list class="form">\n\n                    <ion-item class="bg-light">\n\n                        <ion-input type="text" placeholder="Add 6 digit referral code" class="text-light"></ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n                <p><strong class="text-dark">I Dont\'have </strong><strong class="text-theme" style="float: right;" (click)="rootpage()">Continue</strong></p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\code\code.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], CodePage);
    return CodePage;
}());

//# sourceMappingURL=code.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(461);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
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




var SignUpService = /** @class */ (function () {
    function SignUpService(afDB, AngularFireAuth) {
        this.afDB = afDB;
        this.AngularFireAuth = AngularFireAuth;
    }
    SignUpService.prototype.getMyInfo = function (userId) {
        return this.afDB.object('drivers/' + userId).valueChanges();
    };
    SignUpService.prototype.saveUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.afDB.database.ref('drivers/' + user.userId).update(user);
                this.afDB.database.ref('users/' + user.userId).update(user);
                return [2 /*return*/];
            });
        });
    };
    SignUpService.prototype.turnFindingUsers = function (user) {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('drivers/' + user).update({
            findingUsers: true
        }, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("everything succesful");
            }
        });
    };
    SignUpService.prototype.acceptedByDriver = function (user) {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('users/' + user).update({
            findingTrip: false,
            acceptedByDriver: true
        }, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("everything succesful");
            }
        });
    };
    SignUpService.prototype.getUsers = function () {
        return this.afDB.list('/users').valueChanges();
    };
    SignUpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], SignUpService);
    return SignUpService;
}());

//# sourceMappingURL=signup.service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendCoordsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var sendCoordsService = /** @class */ (function () {
    function sendCoordsService(afDB, afAuth) {
        this.afDB = afDB;
        this.afAuth = afAuth;
    }
    sendCoordsService.prototype.getDestination = function (user) {
        return this.afDB.list('/drivers/' + user + '/trips/destination').valueChanges();
    };
    sendCoordsService.prototype.getOrigin = function (user) {
        return this.afDB.list('/drivers/' + user + '/trips/origin').valueChanges();
    };
    sendCoordsService.prototype.pushcoordinatesDrivers = function (user, dest, or) {
        this.afDB.database.ref('drivers/' + user + '/trips').update({
            origin: or,
            destination: dest,
        });
    };
    sendCoordsService.prototype.updateGeolocationOrigin = function (user, origin) {
        this.afDB.database.ref('drivers/' + user + '/trips').update({
            origin: origin
        });
    };
    sendCoordsService.prototype.endTrip = function (user) {
        this.afDB.database.ref('drivers/' + user + '/trips').remove();
    };
    sendCoordsService.prototype.pickUp = function (user) {
        //eliminate instance of picking up
    };
    sendCoordsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], sendCoordsService);
    return sendCoordsService;
}());

//# sourceMappingURL=sendCoords.service.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_myride_myride__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chats_chats__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_findride_findride__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_wallet_wallet__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_more_more__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_password_password__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_verification_verification__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_code_code__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_listride_listride__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_riderprofile_riderprofile__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_confirmride_confirmride__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_confirmpopup_confirmpopup__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_raterider_raterider__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_chatting_chatting__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_reviews_reviews__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_terms_terms__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_earn_earn__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_ratevroom_ratevroom__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_help_help__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_upload_upload__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_car_registration_car_registration__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_status_bar__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_splash_screen__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_fire__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_fire_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_fire_auth__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_signup_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_driverauthentication_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_geolocation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_sendCoords_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_sendUsers_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_camera__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_geofence__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_onTrip_onTrip__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_call_number__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_confirmprice_confirmprice__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__services_price_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_pickup_pickup__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















































var firebaseConfig = {
    apiKey: "AIzaSyDYldaKvN7lRhAOYesOeWhl7Zs7WfTn9ak",
    authDomain: "waypoolapp-f1349.firebaseapp.com",
    databaseURL: "https://waypoolapp-f1349.firebaseio.com",
    projectId: "waypoolapp-f1349",
    storageBucket: "waypoolapp-f1349.appspot.com",
    messagingSenderId: "729494621596"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_myride_myride__["a" /* MyridePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_findride_findride__["a" /* FindridePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_code_code__["a" /* CodePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_listride_listride__["a" /* ListridePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_pickup_pickup__["a" /* PickupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_riderprofile_riderprofile__["a" /* RiderprofilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_confirmride_confirmride__["a" /* ConfirmridePage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_confirmprice_confirmprice__["a" /* ConfirmpricePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_confirmpopup_confirmpopup__["a" /* ConfirmpopupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_raterider_raterider__["a" /* RateriderPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_earn_earn__["a" /* EarnPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_ratevroom_ratevroom__["a" /* RatevroomPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_ratevroom_ratevroom__["a" /* RatevroomPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_onTrip_onTrip__["a" /* OnTripPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_car_registration_car_registration__["a" /* CarRegistrationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { tabsHideOnSubPages: false,
                }, {
                    links: [
                        { loadChildren: '../pages/car-registration/car-registration.module#CarRegistrationPageModule', name: 'CarRegistrationPage', segment: 'car-registration', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_33__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_34__angular_fire_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_35__angular_fire_auth__["AngularFireAuthModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_myride_myride__["a" /* MyridePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_findride_findride__["a" /* FindridePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_pickup_pickup__["a" /* PickupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_confirmprice_confirmprice__["a" /* ConfirmpricePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_code_code__["a" /* CodePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_listride_listride__["a" /* ListridePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_riderprofile_riderprofile__["a" /* RiderprofilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_confirmride_confirmride__["a" /* ConfirmridePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_confirmpopup_confirmpopup__["a" /* ConfirmpopupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_raterider_raterider__["a" /* RateriderPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_earn_earn__["a" /* EarnPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_ratevroom_ratevroom__["a" /* RatevroomPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_ratevroom_ratevroom__["a" /* RatevroomPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_onTrip_onTrip__["a" /* OnTripPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_car_registration_car_registration__["a" /* CarRegistrationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_36__services_signup_service__["a" /* SignUpService */],
                __WEBPACK_IMPORTED_MODULE_37__services_driverauthentication_service__["a" /* authenticationService */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_39__services_sendCoords_service__["a" /* sendCoordsService */],
                __WEBPACK_IMPORTED_MODULE_40__services_sendUsers_service__["a" /* sendUsersService */],
                __WEBPACK_IMPORTED_MODULE_46__services_price_service__["a" /* priceService */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_geofence__["a" /* Geofence */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_call_number__["a" /* CallNumber */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var authenticationService = /** @class */ (function () {
    function authenticationService(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    authenticationService.prototype.loginWithEmail = function (email, password) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    };
    authenticationService.prototype.registerWithEmail = function (email, password) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    authenticationService.prototype.getStatus = function () {
        return this.angularFireAuth.authState;
    };
    authenticationService.prototype.logOut = function () {
        return this.angularFireAuth.auth.signOut();
    };
    authenticationService.prototype.resetPassword = function (email) {
        var auth = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]();
        return auth.sendPasswordResetEmail(email)
            .then(function () { return console.log("email sent"); })
            .catch(function (error) { return console.log(error); });
    };
    ;
    authenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], authenticationService);
    return authenticationService;
}());

//# sourceMappingURL=driverauthentication.service.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../pages/tabs/tabs';
//import { AboutPage } from '../pages/about/about';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { SignupPage } from '../signup/signup';
//import { PasswordPage } from '../password/password';
var PasswordPage = /** @class */ (function () {
    function PasswordPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\password\password.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>password</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <p (click)="signup()">signup</p>\n\n    <p (click)="password()">forgot password</p>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\password\password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_code__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerificationPage = /** @class */ (function () {
    function VerificationPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    VerificationPage.prototype.code = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__code_code__["a" /* CodePage */]);
        modal.present();
    };
    VerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verification',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\verification\verification.html"*/'<ion-header class="transparent">\n\n    <ion-navbar>\n\n        <ion-title><span class="text-white">verification</span></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-background-img">\n\n    <div class="logo">\n\n        <img src="assets/imgs/logo.png" alt="logo">\n\n    </div>\n\n    <div class="bg-white login">\n\n        <div class="">\n\n            <p padding text-center>Enter confirmation code<br>sent to you on your SMS!</p>\n\n            <br>\n\n            <ion-list class="form" text-center>\n\n                <ion-item>\n\n                    <ion-input type="text" value="33456" text-right></ion-input>\n\n                </ion-item>\n\n            </ion-list>\n\n            <button ion-button full class="bg-theme text-white btn rounded" (click)="code()">Next</button>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\verification\verification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], VerificationPage);
    return VerificationPage;
}());

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmpopup_confirmpopup__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatting_chatting__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RiderprofilePage = /** @class */ (function () {
    function RiderprofilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rideprofile = "about";
    }
    RiderprofilePage.prototype.confirmpopup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__confirmpopup_confirmpopup__["a" /* ConfirmpopupPage */]);
    };
    RiderprofilePage.prototype.chatting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chatting_chatting__["a" /* ChattingPage */]);
    };
    RiderprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-riderprofile',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\riderprofile\riderprofile.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>PASSANGER PROFILE</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-item style="position: relative;z-index: 2;">\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man3.png">\n\n        </ion-avatar>\n\n        <div class="name">\n\n            <h2>David Johnson\n\n            </h2>\n\n            <p>Honda Civic | White</p>\n\n        </div>\n\n        <div class="more">\n\n            <h2>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n            </h2>\n\n            <p>(53 Reviews)</p>\n\n        </div>\n\n    </ion-item>\n\n    <div class="tabs bg-white">\n\n        <ion-segment [(ngModel)]="rideprofile">\n\n            <ion-segment-button value="about">\n\n                About\n\n            </ion-segment-button>\n\n            <ion-segment-button value="reviews">\n\n                Reviews\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </div>\n\n    <div [ngSwitch]="rideprofile">\n\n        <ion-list *ngSwitchCase="\'about\'">\n\n            <div class="bg-white about address">\n\n                <p class="text-theme heading">Address<span float-right>Edit</span></p>\n\n                <div class="ride-detail">\n\n                    <p><small>Home</small>\n\n                        <span class="icon-location bg-theme"></span>140 central Building near hdfc bank Washington sq.park New York</p>\n\n                    <p>\n\n                        <small>Office</small>\n\n                        <span class="icon-location bg-yellow"></span>Harison, central Building near hdfc bank east sq.park New York</p>\n\n                </div>\n\n            </div>\n\n            <div class="bg-white about info">\n\n                <p class="text-theme heading">Personal Info</p>\n\n                <ion-list no-lines class="form-list">\n\n                    <ion-item>\n\n                        <ion-label floating>Enail Address</ion-label>\n\n                        <ion-input type="text" value="david-johnson@gmail.com" readonly></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating>Profession</ion-label>\n\n                        <ion-input type="text" value="Senior Architech at Apx Designs" readonly></ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'reviews\'">\n\n            <div class="bg-white" padding style="margin-bottom: 4px;">\n\n                <div class="rating-box">\n\n                    <p>\n\n                        <span class="text-1">5<ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="rate-bar"><span class="bg-theme" style="width: 100%"></span></span>\n\n                        <span class="text-2">100</span>\n\n                    </p>\n\n                    <p>\n\n                        <span class="text-1">4<ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="rate-bar"><span class="bg-theme" style="width: 90%"></span></span>\n\n                        <span class="text-2">90</span></p>\n\n                    <p>\n\n                        <span class="text-1">3<ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="rate-bar"><span class="bg-theme" style="width: 70%"></span></span>\n\n                        <span class="text-2">60</span>\n\n                    </p>\n\n                    <p>\n\n                        <span class="text-1">2<ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="rate-bar"><span class="bg-theme" style="width: 50%"></span></span>\n\n                        <span class="text-2">40</span>\n\n                    </p>\n\n                    <p>\n\n                        <span class="text-1">1<ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="rate-bar"><span class="bg-theme" style="width: 20%"></span></span>\n\n                        <span class="text-2">20</span>\n\n                    </p>\n\n                </div>\n\n            </div>\n\n            <ion-card class="review">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <h2>Buzz Lightyear</h2>\n\n                    <p>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star"></ion-icon>\n\n                        <ion-icon name="ios-star"></ion-icon>\n\n                    </p>\n\n                    <ion-note item-end>15 April 2017</ion-note>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="detail">\n\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card class="review">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <h2>Buzz Lightyear</h2>\n\n                    <p>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star"></ion-icon>\n\n                        <ion-icon name="ios-star"></ion-icon>\n\n                    </p>\n\n                    <ion-note item-end>15 April 2017</ion-note>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="detail">\n\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-list>\n\n    </div>\n\n    <ion-row class="fix-btn">\n\n        <ion-col>\n\n            <button class="btn rounded text-theme bg-white full" (click)="chatting()">MESSAGE</button>\n\n        </ion-col>\n\n        <ion-col>\n\n            <button class="btn rounded text-white bg-theme full" (click)="confirmpopup()">REQUEST RIDE</button>\n\n        </ion-col>\n\n    </ion-row>\n\n    <div class="space">&nbsp;</div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\riderprofile\riderprofile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], RiderprofilePage);
    return RiderprofilePage;
}());

//# sourceMappingURL=riderprofile.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmpopup_confirmpopup__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmridePage = /** @class */ (function () {
    function ConfirmridePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    ConfirmridePage.prototype.confirmpopup = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__confirmpopup_confirmpopup__["a" /* ConfirmpopupPage */]);
        modal.present();
    };
    ConfirmridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmride',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\confirmride\confirmride.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>CONFIRM RIDE REQUEST</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bh-light">\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/face-1.jpg">\n\n            </ion-avatar>\n\n            <div class="name">\n\n                <h2>David Johnson\n\n                    <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                </h2>\n\n                <p>Honda Cvic | White</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                <h6 class="text-theme">Location</h6>\n\n                <p><small>Pickup Location<ion-icon name="md-create"></ion-icon></small>\n\n                    <span class="icon-location bg-theme"></span>Washington sq.park New York</p>\n\n                <p>\n\n                    <small>Drop Location<ion-icon name="md-create"></ion-icon></small>\n\n                    <span class="icon-location bg-yellow"></span>Harison, east sq.park New York</p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <div class="ride-detail no-before">\n\n                <h6 class="text-theme">Date & Time</h6>\n\n                <p><small>Date<ion-icon name="md-create"></ion-icon></small>\n\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n\n                    22<sup>nd</sup> Feb, 2018 </p>\n\n                <p>\n\n                    <small>Time</small>\n\n                    <ion-icon name="md-time" class="icon-location"></ion-icon>\n\n                    Between 12:10pm to 12:30pm</p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <div class="seats">\n\n                <h6 class="text-theme">Fare & Seat Conformation</h6>\n\n                <ion-row>\n\n                    <ion-col col-4 class="rate">\n\n                        <small>Est Fare</small> $ 120\n\n                    </ion-col>\n\n                    <ion-col col-8>\n\n                        <div class="seats-tag">\n\n                            <ion-icon name="remove-circle"></ion-icon>\n\n                            <strong>2 Seats</strong>\n\n                            <ion-icon name="add-circle"></ion-icon>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <button class="btn bg-theme text-white rounded" (click)="confirmpopup()" style="width: 100%;margin-top: 16px;">CONFIRM REQUEST</button>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\confirmride\confirmride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ConfirmridePage);
    return ConfirmridePage;
}());

//# sourceMappingURL=confirmride.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadPage = /** @class */ (function () {
    function UploadPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    UploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\upload\upload.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>VERIFIY MY ID\n\n            <!--           <ion-icon name="md-search" class="text-white" style="margin-left: auto;float: right;"></ion-icon>-->\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding-right padding-left>\n\n    <p text-center padding-top margin-top>Upload good quality photo of your</p>\n\n    <h2 text-center>Licence</h2>\n\n\n\n    <ion-row>\n\n        <ion-col col-4 text-center>\n\n            <img src="assets/imgs/v2.png">\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n            <img src="assets/imgs/v3.png">\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n            <img src="assets/imgs/v4.png">\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <div text-center class="verifiy">\n\n        <img src="assets/imgs/v1.png">\n\n    </div>\n\n    <p padding-top class="btn-box"><button class="btn text-white bg-theme rounded" style="width: 80%;">UPLOAD NOW</button></p>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\upload\upload.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], UploadPage);
    return UploadPage;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnTripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatting_chatting__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_signup_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_driverauthentication_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__ = __webpack_require__(171);
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
    function OnTripPage(navCtrl, alertCtrl, toastCtrl, callNumber, navParams, SignUpService, authenticationService, geolocation, zone, sendCoordsService, AngularFireAuth) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
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
        console.log(this.user);
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
        });
        this.bounds = new google.maps.LatLngBounds();
        this.geocoder = new google.maps.Geocoder();
    }
    OnTripPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
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
                fullscreenControl: false
            };
            _this.myLatLng = { lat: position.coords.latitude, lng: position.coords.longitude };
            //creates the map and give options
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.geocodeLatLng(latLng);
            var marker = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: latLng,
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
    OnTripPage.prototype.geocodeAddress = function (originDriver) {
        var _this = this;
        this.geocoder.geocode({ 'address': JSON.stringify(originDriver) }, function (results, status) {
            if (status == 'OK') {
                var marker = new google.maps.Marker({
                    map: _this.map,
                    position: results[0].geometry.location
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
    OnTripPage.prototype.chatting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatting_chatting__["a" /* ChattingPage */]);
    };
    OnTripPage.prototype.notifyDriver = function () {
        this.presentToast('Se le ha notificado a tu compañero que ya llegaste', 3000, 'top');
    };
    OnTripPage.prototype.endTrip = function () {
        this.sendCoordsService.endTrip(this.useruid);
    };
    OnTripPage.prototype.callUser = function () {
        var _this = this;
        this.callNumber.isCallSupported()
            .then(function (response) {
            if (response == true) {
                _this.callNumber.callNumber(_this.user.phone, true)
                    .then(function (res) { return console.log('Launched dialer!', res); })
                    .catch(function (err) { return console.log('Error launching dialer', err); });
            }
            else {
                _this.presentAlert('Error', 'No se pudo generar la llamada', 'ok');
            }
        });
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], OnTripPage.prototype, "mapElement", void 0);
    OnTripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ontrip',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\onTrip\onTrip.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>Escoger Compañero\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n        <ion-card class="cardOnTrip">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>{{user.name}} {{user.lastname}}\n\n                        </h2>\n\n                       \n\n                    </div>\n\n                    <div class="more">\n\n                        <h2 class="text-theme">\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h2>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="ride-detail">\n\n                        <p>\n\n                            <span class="icon-location bg-theme"></span>{{addressOrigin}}</p>\n\n                        <p>\n\n                            <span class="icon-location bg-yellow"></span>{{user.origin}}</p>\n\n                    </div>\n\n                    <ion-row>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <button class="btn bg-theme rounded full text-white" (click)="notifyDriver()">Ya Llegué</button>\n\n                                \n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col class="detail-text">\n\n                            \n\n                                <button class="btn bg-yellow rounded full text-white"><ion-icon name="chatboxes" class="text-white"></ion-icon></button>\n\n                            \n\n                        </ion-col>\n\n                        <ion-col col-5>\n\n                            <button navPop class="btn bg-theme rounded full text-white" (click)="endTrip()">Recoger</button>\n\n                            <button (click)="callUser()" class="btn bg-yellow rounded full text-white"><ion-icon name="ios-call" class="text-white"></ion-icon></button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card-content>\n\n               \n\n            </ion-card>\n\n    <div #map id="map"></div>  \n\n   \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\onTrip\onTrip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_6__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"]])
    ], OnTripPage);
    return OnTripPage;
}());

//# sourceMappingURL=onTrip.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChattingPage = /** @class */ (function () {
    function ChattingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChattingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatting',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\chatting\chatting.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/face-1.jpg">\n\n            </ion-avatar>\n\n            <h2><span class="text-white">David Johnson</span>\n\n                <ion-icon name="md-more" end-item item-end class="text-white"></ion-icon>\n\n            </h2>\n\n        </ion-item>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="chat-bg">\n\n    <div class="cb">\n\n        <div class=" chat chat-right bg-white text-dark" text-right padding float-right>\n\n            <p>Hey David !!</p>\n\n            <p>Good time to talk?</p>\n\n            <p><small>12:33 pm</small></p>\n\n        </div>\n\n    </div>\n\n    <div class="cb">\n\n        <div class="chat chat-left bg-theme text-white" text-left padding float-left>\n\n            <p>Hey mate !!</p>\n\n            <p>Yes, tell me your query bro!</p>\n\n            <p><small>12:33 pm</small></p>\n\n        </div>\n\n    </div>\n\n    <div class="fixed-bottom">\n\n        <ion-list inset>\n\n            <ion-item>\n\n                <ion-icon name="md-add" class="circle-icon" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Type your Message"></ion-input>\n\n                <ion-icon name="md-send" class="text-theme" item-end></ion-icon>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\chatting\chatting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ChattingPage);
    return ChattingPage;
}());

//# sourceMappingURL=chatting.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmpopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConfirmpopupPage = /** @class */ (function () {
    function ConfirmpopupPage(navCtrl, afDB, sendUsersService, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth, viewCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.sendUsersService = sendUsersService;
        this.SignUpService = SignUpService;
        this.sendCoordsService = sendCoordsService;
        this.modalCtrl = modalCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.locationOrigin = [];
        this.locationDestination = [];
        this.userDriverUid = this.AngularFireAuth.auth.currentUser.uid;
        //we get the info of the users with navParams
        this.user = this.navParams.get('user');
        //get origin from driver
        this.sendCoordsService.getOrigin(this.userDriverUid)
            .subscribe(function (origin) {
            _this.locationOrigin = origin;
        });
        //get destination from driver
        this.sendCoordsService.getDestination(this.userDriverUid)
            .subscribe(function (destination) {
            _this.locationDestination = destination;
        });
        //get the info of the driver 
        this.SignUpService.getMyInfo(this.userDriverUid)
            .subscribe(function (userDriver) {
            _this.userDriver = userDriver;
            console.log(_this.userDriver);
        });
    }
    //IDEA:aqui puede ir texto del user que le envia al driver.
    ConfirmpopupPage.prototype.acceptUser = function () {
        this.sendUsersService.pushUsersOnTripOnDrivers(this.userDriverUid, this.user.userId, this.user.trips.origin, this.user.trips.destination, this.user.name, this.user.lastname, this.user.phone);
        this.sendUsersService.pushDriverOnUsers(this.userDriverUid, this.user.userId, this.locationOrigin, this.locationDestination, this.userDriver.name, this.userDriver.lastname, this.userDriver.phone, this.userDriver.carModel, this.userDriver.plateNumber);
        // this.navCtrl.setRoot(TabsPage,{user});      
        // this.navCtrl.parent.select();
    };
    ConfirmpopupPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ConfirmpopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmpopup',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\confirmpopup\confirmpopup.html"*/'<ion-content>\n\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n\n    <ion-card>\n\n        <h6 class="text-theme">Detalles del Viaje</h6>\n\n        <ion-item >\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/face-1.jpg">\n\n            </ion-avatar>\n\n            <div  class="name">\n\n                <h2 >{{user.name}} {{user.lastname}}</h2>\n\n                \n\n            </div>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                <p><small>Origen</small>\n\n                    <span  class="icon-location bg-theme"></span>{{user.trips.origin}}</p>\n\n                <p>\n\n                    <small>Destino</small>\n\n                    <span  class="icon-location bg-yellow"></span>{{user.trips.destination}}</p>\n\n            </div>\n\n        </ion-card-content>\n\n\n\n        <ion-card-content>\n\n            <div class="ride-detail no-before">\n\n                <p><small>Date</small>\n\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n\n                    22<sup>nd</sup> Feb, 2018 </p>\n\n                <p>\n\n                    <small>Vuelto</small>\n\n                    <ion-icon name="md-time" class="icon-location"></ion-icon>\n\n                    No necesita vuelto</p>\n\n            </div>\n\n        </ion-card-content>\n\n\n\n        <ion-card-content>\n\n            <div class="seats">\n\n                <ion-row>\n\n                    <ion-col col-4 class="rate">\n\n                        <small>Precio</small> $ 2500\n\n                    </ion-col>\n\n                    <ion-col col-5 class="rate">\n\n                        <small>Seat Request</small> 2 Seats\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row style="margin-top: 14px;">\n\n                    <ion-col col-4>\n\n                        <button class="btn bg-white text-theme rounded" style="width: 100%;"><ion-icon name="md-calendar" class="icon-location"></ion-icon></button>\n\n                    </ion-col>\n\n                    <ion-col col-8>\n\n                        <button class="btn bg-theme text-white rounded" style="width: 100%;font-size: .95rem;"(click)="acceptUser()">Aceptar Viaje</button>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_final_driver\src\pages\confirmpopup\confirmpopup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ConfirmpopupPage);
    return ConfirmpopupPage;
}());

//# sourceMappingURL=confirmpopup.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendUsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var sendUsersService = /** @class */ (function () {
    function sendUsersService(afDB, afAuth) {
        this.afDB = afDB;
        this.afAuth = afAuth;
    }
    sendUsersService.prototype.getUsersOnTrip = function (userUid) {
        // Get all the students the driver acepts in myListRidePage to be send to the students
        return this.afDB.list('/drivers/' + userUid + '/trips/usersOnTrip').valueChanges();
    };
    sendUsersService.prototype.pushUsersOnTripOnDrivers = function (userUid, userId, origin, destination, name, lastname, phone) {
        //send the information of every student the driver acepts in myRide
        this.afDB.database.ref('/drivers/' + userUid + '/trips/usersOnTrip/' + userId).update({
            origin: origin,
            destination: destination,
            name: name,
            lastname: lastname,
            phone: phone,
            userId: userId
        });
    };
    sendUsersService.prototype.pushDriverOnUsers = function (userUid, userId, origin, destination, name, lastname, phone, carModel, plateNumber) {
        //send the driver information to the students
        this.afDB.database.ref('/users/' + userId + '/trips/usersOnTrip/Driver/' + userUid).update({
            origin: origin,
            destination: destination,
            name: name,
            lastname: lastname,
            phone: phone,
            userId: userUid,
            carModel: carModel,
            plateNumber: plateNumber
        });
    };
    sendUsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], sendUsersService);
    return sendUsersService;
}());

//# sourceMappingURL=sendUsers.service.js.map

/***/ })

},[328]);
//# sourceMappingURL=main.js.map