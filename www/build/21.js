webpackJsonp([21],{

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmpricePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_price_service__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_geofire_services__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__(24);
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
    function ConfirmpricePage(navCtrl, appCtrl, PriceService, alertCtrl, afDB, sendUsersService, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth, viewCtrl, navParams, geofireService) {
        var _this = this;
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
        this.geofireService = geofireService;
        this.userDriverUid = this.AngularFireAuth.auth.currentUser.uid;
        //variable for get data in function
        this.driver = {};
        //variable to transfer data from driver to this one
        this.driverInfo = {};
        this.driverInfoNote = {};
        this.buttonColor = '#0fc874';
        this.buttonColor2 = '#0fc874';
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_9_rxjs__["Subject"];
        this.carModelList = [];
        this.nowHour = new Date();
        this.geocoordinatesDest = {};
        this.geocoordinatesOr = {};
        //hay dos variables, driver y driver2 lo cual significa que debo llamar a la info del driver en dos ocasiones distintas, cuando hay nota y cuando no
        this.SignUpService.getCar(this.SignUpService.userUniversity, this.userDriverUid)
            .subscribe(function (car) {
            //get cars registered
            _this.carModelList = car;
            console.log(_this.carModelList);
        });
        this.SignUpService.getMyInfo(this.SignUpService.userUniversity, this.userDriverUid).subscribe(function (driver) {
            _this.driver = driver;
            _this.driverInfo.origin = _this.driver.trips.origin;
            _this.driverInfo.destination = _this.driver.trips.destination;
            _this.driverInfo.name = _this.driver.name;
            _this.driverInfo.lastname = _this.driver.lastname;
            _this.driverInfo.phone = _this.driver.phone;
            _this.driverInfo.userId = _this.driver.userId;
            _this.driverInfo.car = _this.driver.trips.car;
            _this.driverInfo.price = _this.driver.trips.price;
            _this.driverInfo.currentHour = _this.driver.trips.nowHour;
            _this.driverInfo.startHour = _this.driver.trips.hour;
            _this.driverInfo.note = 'No hay nota.';
            console.log('got info here');
        });
        this.SignUpService.getMyInfo(this.SignUpService.userUniversity, this.userDriverUid).subscribe(function (driver) {
            _this.driver2 = driver;
            _this.driverInfoNote.origin = _this.driver2.trips.origin;
            _this.driverInfoNote.destination = _this.driver2.trips.destination;
            _this.driverInfoNote.name = _this.driver2.name;
            _this.driverInfoNote.lastname = _this.driver2.lastname;
            _this.driverInfoNote.phone = _this.driver2.phone;
            _this.driverInfoNote.userId = _this.driver2.userId;
            _this.driverInfoNote.car = _this.driver2.trips.car;
            _this.driverInfoNote.price = _this.driver2.trips.price;
            _this.driverInfoNote.currentHour = _this.driver2.trips.nowHour;
            _this.driverInfoNote.startHour = _this.driver2.trips.hour;
            _this.driverInfoNote.note = _this.driver2.trips.note;
        });
        this.geocoder = new google.maps.Geocoder;
    }
    ConfirmpricePage.prototype.ionViewDidEnter = function () {
        this.geofireService.cancelGeoqueryUniversity();
    };
    ConfirmpricePage.prototype.setPriceDriver = function () {
        var _this = this;
        if (this.precio == null || this.precio == '' || this.car == null || this.car == '' || this.hour == null || this.hour == '') {
            var alert_1 = this.alertCtrl.create({
                title: 'Informacion Incompleta',
                subTitle: 'No haz colocado el precio por el que estas dispuesto a compatir tu viaje, no haz especificado en que carro te moverás o no haz puesto la hora del inicio del viaje',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.note == null || this.note == '') {
            this.hourToSend = this.nowHour.getHours() + ":" + this.nowHour.getMinutes();
            this.PriceService.setPrice(this.SignUpService.userUniversity, this.userDriverUid, this.precio, this.car, this.hour, this.hourToSend);
            this.accepted = true;
            this.dismiss();
            // this.goefireKey = Date.now();
            if (this.driver.geofireOrigin === true) {
                this.typeOfReserve = 'origin';
                this.note = 'No hay nota.';
                // IMPORTANT: addService from sendCoordsService is no longer used because it was generating that the availableReserve in user had a deprecated keyTrip
                this.afDB.database.ref(this.SignUpService.userUniversity + '/reserves/' + this.userDriverUid).push({
                    driver: this.driverInfo,
                    car: this.car,
                    destination: this.driverInfo.destination,
                    origin: this.driverInfo.origin,
                    note: this.note,
                    price: this.precio,
                    currentHour: this.hourToSend,
                    startHour: this.hour,
                    // geofireKey: this.goefireKey,
                    type: this.typeOfReserve
                }).then(function (snap) {
                    _this.destination = _this.driverInfo.destination[0][0];
                    _this.origin = _this.driverInfo.origin[0][0];
                    var key = snap.key;
                    // geocoding of addresses that came from findRide
                    _this.geocoder.geocode({ 'address': _this.origin }, function (results, status) {
                        if (status === 'OK') {
                            _this.geocoordinatesOr = {
                                lat: results[0].geometry.location.lat(),
                                lng: results[0].geometry.location.lng()
                            };
                        }
                        // set geofirekey 
                        // this.geofireService.setGeofireOr(2, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng, this.goefireKey, this.driverInfo.userId, key)
                        _this.geofireService.setGeofireOrNEWTEST(_this.SignUpService.userUniversity, key, _this.geocoordinatesOr.lat, _this.geocoordinatesOr.lng);
                        _this.afDB.database.ref(_this.SignUpService.userUniversity + '/geofireOr/' + key).update({
                            driverId: _this.driverInfo.userId
                        });
                        console.log('executed geofire Or');
                    });
                    _this.afDB.database.ref(_this.SignUpService.userUniversity + '/reserves/' + _this.userDriverUid + '/' + key).update({
                        keyTrip: key
                    });
                });
            }
            else {
                this.typeOfReserve = 'destination';
                this.note = 'No hay nota.';
                this.afDB.database.ref(this.SignUpService.userUniversity + '/reserves/' + this.userDriverUid).push({
                    driver: this.driverInfo,
                    car: this.car,
                    destination: this.driverInfo.destination,
                    origin: this.driverInfo.origin,
                    note: this.note,
                    price: this.precio,
                    currentHour: this.hourToSend,
                    startHour: this.hour,
                    // geofireKey: this.goefireKey,
                    type: this.typeOfReserve
                }).then(function (snap) {
                    _this.destination = _this.driverInfo.destination[0][0];
                    _this.origin = _this.driverInfo.origin[0][0];
                    var key = snap.key;
                    // geocoding of addresses that came from findRide
                    _this.geocoder.geocode({ 'address': _this.destination }, function (results, status) {
                        if (status === 'OK') {
                            _this.geocoordinatesDest = {
                                lat: results[0].geometry.location.lat(),
                                lng: results[0].geometry.location.lng()
                            };
                        }
                        // set geofire key
                        // this.geofireService.setGeofireDest(2, this.geocoordinatesDest.lat, this.geocoordinatesDest.lng, this.goefireKey, this.driverInfo.userId, key);
                        _this.geofireService.setGeofireDestNEWTEST(_this.SignUpService.userUniversity, key, _this.geocoordinatesDest.lat, _this.geocoordinatesDest.lng);
                        _this.afDB.database.ref(_this.SignUpService.userUniversity + '/geofireDest/' + key).update({
                            driverId: _this.driverInfo.userId
                        });
                        console.log('executed geofire Dest');
                    });
                    _this.afDB.database.ref(_this.SignUpService.userUniversity + '/reserves/' + _this.userDriverUid + '/' + key).update({
                        keyTrip: key
                    });
                });
            }
        }
        else {
            this.hourToSend = this.nowHour.getHours() + ":" + this.nowHour.getMinutes();
            this.PriceService.setPriceAndNote(this.SignUpService.userUniversity, this.userDriverUid, this.precio, this.note, this.car, this.hour, this.hourToSend);
            this.accepted = true;
            this.dismiss();
            // this.goefireKey = Date.now();
            // console.log(this.goefireKey);
            // add reserve and command to dismiss modal
            if (this.driver.geofireOrigin === true) {
                this.typeOfReserve = 'origin';
                this.afDB.database.ref(this.SignUpService.userUniversity + '/reserves/' + this.userDriverUid).push({
                    driver: this.driverInfoNote,
                    car: this.car,
                    destination: this.driverInfoNote.destination,
                    origin: this.driverInfoNote.origin,
                    note: this.note,
                    price: this.precio,
                    currentHour: this.hourToSend,
                    startHour: this.hour,
                    // geofireKey: this.goefireKey,
                    type: this.typeOfReserve
                }).then(function (snap) {
                    _this.destinationNote = _this.driverInfoNote.destination[0][0];
                    _this.originNote = _this.driverInfoNote.origin[0][0];
                    var key = snap.key;
                    // geocoding of addresses that came from findRide
                    _this.geocoder.geocode({ 'address': _this.originNote }, function (results, status) {
                        if (status === 'OK') {
                            _this.geocoordinatesOr = {
                                lat: results[0].geometry.location.lat(),
                                lng: results[0].geometry.location.lng()
                            };
                        }
                        // set geofire key 
                        // this.geofireService.setGeofireOr(2, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng, this.goefireKey,this.driverInfoNote.userId, key)
                        _this.geofireService.setGeofireOrNEWTEST(_this.SignUpService.userUniversity, key, _this.geocoordinatesOr.lat, _this.geocoordinatesOr.lng);
                        _this.afDB.database.ref(_this.SignUpService.userUniversity + '/geofireOr/' + key).update({
                            driverId: _this.driverInfoNote.userId
                        });
                        console.log('executed geofire Or');
                    });
                    _this.afDB.database.ref(_this.SignUpService.userUniversity + '/reserves/' + _this.userDriverUid + '/' + key).update({
                        keyTrip: key
                    });
                });
            }
            else {
                this.typeOfReserve = 'destination';
                this.afDB.database.ref(this.SignUpService.userUniversity + '/reserves/' + this.userDriverUid).push({
                    driver: this.driverInfoNote,
                    car: this.car,
                    destination: this.driverInfoNote.destination,
                    origin: this.driverInfoNote.origin,
                    note: this.note,
                    price: this.precio,
                    currentHour: this.hourToSend,
                    startHour: this.hour,
                    // geofireKey: this.goefireKey,
                    type: this.typeOfReserve
                }).then(function (snap) {
                    _this.destinationNote = _this.driverInfoNote.destination[0][0];
                    _this.originNote = _this.driverInfoNote.origin[0][0];
                    var key = snap.key;
                    // geocoding of addresses that came from findRide
                    _this.geocoder.geocode({ 'address': _this.destinationNote }, function (results, status) {
                        if (status === 'OK') {
                            _this.geocoordinatesDest = {
                                lat: results[0].geometry.location.lat(),
                                lng: results[0].geometry.location.lng()
                            };
                        }
                        // this.geofireService.setGeofireDest(2, this.geocoordinatesDest.lat, this.geocoordinatesDest.lng, this.goefireKey,this.driverInfoNote.userId, key)
                        // set geofire key 
                        _this.geofireService.setGeofireDestNEWTEST(_this.SignUpService.userUniversity, key, _this.geocoordinatesDest.lat, _this.geocoordinatesDest.lng);
                        _this.afDB.database.ref(_this.SignUpService.userUniversity + '/geofireDest/' + key).update({
                            driverId: _this.driverInfoNote.userId
                        });
                        console.log('executed geofire Dest');
                    });
                    _this.afDB.database.ref(_this.SignUpService.userUniversity + '/reserves/' + _this.userDriverUid + '/' + key).update({
                        keyTrip: key
                    });
                });
            }
        }
    };
    ;
    ConfirmpricePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
        // this.unsubscribe.next();
        // this.unsubscribe.unsubscribe();
    };
    ConfirmpricePage.prototype.ionViewDidLeave = function () {
        this.geofireService.cancelGeofireOrigin(this.SignUpService.userUniversity, this.userDriverUid);
    };
    ConfirmpricePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmprice',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_driver/src/pages/confirmprice/confirmprice.html"*/'<ion-content>\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n    <ion-card>\n        <h6 class="text-theme">Detalles del Viaje</h6>\n       \n        <ion-card-content>\n            <div class="ride-detail">\n                <ion-item class="form">\n                    <ion-label floating>Precio Por Persona</ion-label>\n                    <ion-input type="number" [(ngModel)]="precio"></ion-input>\n                  </ion-item>\n                  <ion-item>\n                    <div class="form">\n                        <ion-list no-lines>\n                            <ion-item>\n                                <ion-textarea [(ngModel)]="note" type="text" placeholder="Deja una nota para tus compañeros (Opcional)" ></ion-textarea>\n                            </ion-item>\n                        </ion-list>\n                    </div>\n                  </ion-item>\n            </div>\n        </ion-card-content>\n\n        <ion-card-content>\n            <!-- <div class="ride-detail no-before">\n                <p><small>Recuerda:</small>\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n                  - Precio Recomendado: 2500 </p>\n        \n                <p>- Tus compañeros te pagarán en efectivo, evita colocar precios que requieran mucho vuelto, lleva dinero suficiente para dar vueltas.</p>\n            </div> -->\n        </ion-card-content>\n        <ion-card-content>\n                <ion-row style="margin-top: 14px;    display: flex;\n                justify-content: center">\n                   <ion-list>\n                        <ion-item>\n                          <ion-label>Escoge el carro:</ion-label>\n                          <ion-select [(ngModel)]="car">\n                                <ion-option *ngFor="let car of carModelList" >{{car.carModel}} | {{car.plateNumber}} | {{car.color}}</ion-option>\n                       \n                          </ion-select>\n                        </ion-item>\n                      </ion-list>\n                </ion-row>\n                <ion-row style="margin-top: 14px;    display: flex;\n                justify-content: center">\n                    <ion-list>\n                        <ion-item>\n                                <ion-label>Hora de inicio de viaje:</ion-label>\n                        <ion-datetime displayFormat="hmm A" picker-format="hmm A" [(ngModel)]="hour"></ion-datetime>\n                        </ion-item>\n                    </ion-list>\n                </ion-row>\n            <div class="seats">\n                \n                <ion-row style="margin-top: 14px;    display: flex;\n                justify-content: center">\n                   \n                    <ion-col col-8>\n                        <button class="btn bg-theme text-white rounded" style="width: 100%;font-size: .95rem;" (click)="setPriceDriver()">Aceptar Viaje</button>\n                    </ion-col>\n                </ion-row>\n\n\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_driver/src/pages/confirmprice/confirmprice.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_7__services_price_service__["a" /* priceService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__services_geofire_services__["a" /* geofireService */]])
    ], ConfirmpricePage);
    return ConfirmpricePage;
}());

//# sourceMappingURL=confirmprice.js.map

/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmpricePageModule", function() { return ConfirmpricePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmprice__ = __webpack_require__(1024);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmpricePageModule = /** @class */ (function () {
    function ConfirmpricePageModule() {
    }
    ConfirmpricePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirmprice__["a" /* ConfirmpricePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmprice__["a" /* ConfirmpricePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__confirmprice__["a" /* ConfirmpricePage */]
            ]
        })
    ], ConfirmpricePageModule);
    return ConfirmpricePageModule;
}());

//# sourceMappingURL=confirmprice.module.js.map

/***/ })

});
//# sourceMappingURL=21.js.map