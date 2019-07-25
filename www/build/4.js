webpackJsonp([4],{

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmpricePageModule", function() { return ConfirmpricePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmprice__ = __webpack_require__(764);
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

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(31));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi93cmFwcGVyL3NyYy9kYXRhYmFzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRDQUF1QyJ9

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmpricePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_price_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_geofire_services__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__(16);
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
        this.SignUpService.getCar(this.userDriverUid)
            .subscribe(function (car) {
            //get cars registered
            _this.carModelList = car;
            console.log(_this.carModelList);
        });
        this.SignUpService.getMyInfo(this.userDriverUid).subscribe(function (driver) {
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
        this.SignUpService.getMyInfo(this.userDriverUid).subscribe(function (driver) {
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
            this.PriceService.setPrice(this.userDriverUid, this.precio, this.car, this.hour, this.hourToSend);
            this.accepted = true;
            this.dismiss();
            this.goefireKey = Date.now();
            if (this.driver.geofireOrigin === true) {
                this.typeOfReserve = 'origin';
                this.note = 'No hay nota.';
                // IMPORTANT: addService from sendCoordsService is no longer used because it was generating that the availableReserve in user had a deprecated keyTrip
                this.afDB.database.ref('/reserves/' + this.userDriverUid).push({
                    driver: this.driverInfo,
                    car: this.car,
                    destination: this.driverInfo.destination,
                    origin: this.driverInfo.origin,
                    note: this.note,
                    price: this.precio,
                    currentHour: this.hourToSend,
                    startHour: this.hour,
                    geofireKey: this.goefireKey,
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
                        // turn geofire On
                        _this.geofireService.setGeofireOr(2, _this.geocoordinatesOr.lat, _this.geocoordinatesOr.lng, _this.goefireKey, _this.driverInfo.userId, key);
                        console.log('executed geofire Or');
                    });
                    _this.afDB.database.ref('/reserves/' + _this.userDriverUid + '/' + key).update({
                        keyTrip: key
                    });
                });
            }
            else {
                this.typeOfReserve = 'destination';
                this.note = 'No hay nota.';
                this.afDB.database.ref('/reserves/' + this.userDriverUid).push({
                    driver: this.driverInfo,
                    car: this.car,
                    destination: this.driverInfo.destination,
                    origin: this.driverInfo.origin,
                    note: this.note,
                    price: this.precio,
                    currentHour: this.hourToSend,
                    startHour: this.hour,
                    geofireKey: this.goefireKey,
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
                        // turn geofire On
                        _this.geofireService.setGeofireDest(2, _this.geocoordinatesDest.lat, _this.geocoordinatesDest.lng, _this.goefireKey, _this.driverInfo.userId, key);
                        console.log('executed geofire Dest');
                    });
                    _this.afDB.database.ref('/reserves/' + _this.userDriverUid + '/' + key).update({
                        keyTrip: key
                    });
                });
            }
        }
        else {
            this.hourToSend = this.nowHour.getHours() + ":" + this.nowHour.getMinutes();
            this.PriceService.setPriceAndNote(this.userDriverUid, this.precio, this.note, this.car, this.hour, this.hourToSend);
            this.accepted = true;
            this.dismiss();
            this.goefireKey = Date.now();
            console.log(this.goefireKey);
            // add reserve and command to dismiss modal
            if (this.driver.geofireOrigin === true) {
                this.typeOfReserve = 'origin';
                this.afDB.database.ref('/reserves/' + this.userDriverUid).push({
                    driver: this.driverInfoNote,
                    car: this.car,
                    destination: this.driverInfoNote.destination,
                    origin: this.driverInfoNote.origin,
                    note: this.note,
                    price: this.precio,
                    currentHour: this.hourToSend,
                    startHour: this.hour,
                    geofireKey: this.goefireKey,
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
                        // turn geofire On
                        _this.geofireService.setGeofireOr(2, _this.geocoordinatesOr.lat, _this.geocoordinatesOr.lng, _this.goefireKey, _this.driverInfoNote.userId, key);
                        console.log('executed geofire Or');
                    });
                    _this.afDB.database.ref('/reserves/' + _this.userDriverUid + '/' + key).update({
                        keyTrip: key
                    });
                });
            }
            else {
                this.typeOfReserve = 'destination';
                this.afDB.database.ref('/reserves/' + this.userDriverUid).push({
                    driver: this.driverInfoNote,
                    car: this.car,
                    destination: this.driverInfoNote.destination,
                    origin: this.driverInfoNote.origin,
                    note: this.note,
                    price: this.precio,
                    currentHour: this.hourToSend,
                    startHour: this.hour,
                    geofireKey: this.goefireKey,
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
                        // turn geofire On
                        _this.geofireService.setGeofireDest(2, _this.geocoordinatesDest.lat, _this.geocoordinatesDest.lng, _this.goefireKey, _this.driverInfoNote.userId, key);
                        console.log('executed geofire Dest');
                    });
                    _this.afDB.database.ref('/reserves/' + _this.userDriverUid + '/' + key).update({
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
        this.geofireService.cancelGeofireOrigin(this.userDriverUid);
    };
    ConfirmpricePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmprice',template:/*ion-inline-start:"C:\Users\daniel altamar\Documents\waypoolApp\driver-test\waypool_driver\src\pages\confirmprice\confirmprice.html"*/'<ion-content>\n\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n\n    <ion-card>\n\n            <img src="assets/imgs/detallesviaje.png" width="100px" style="display:inline-block" height="150px"/>\n\n\n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                <ion-item class="form">\n\n                    <ion-label floating>Precio Por Persona</ion-label>\n\n                    <ion-input type="number" [(ngModel)]="precio"></ion-input>\n\n                  </ion-item>                \n\n            </div>\n\n        </ion-card-content>\n\n\n\n        <ion-card-content>\n\n            <!-- <div class="ride-detail no-before">\n\n                <p><small>Recuerda:</small>\n\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n\n                  - Precio Recomendado: 2500 </p>\n\n        \n\n                <p>- Tus compañeros te pagarán en efectivo, evita colocar precios que requieran mucho vuelto, lleva dinero suficiente para dar vueltas.</p>\n\n            </div> -->\n\n        </ion-card-content>\n\n        <ion-card-content>\n\n                <ion-row style="margin-top: 14px;    display: flex;\n\n                justify-content: center">\n\n                   <ion-list>\n\n                        <ion-item>\n\n                          <ion-label>Escoge el carro:</ion-label>\n\n                          <ion-select [(ngModel)]="car">\n\n                                <ion-option *ngFor="let car of carModelList" >{{car.carModel}} | {{car.plateNumber}} | {{car.color}}</ion-option>\n\n                       \n\n                          </ion-select>\n\n                        </ion-item>\n\n                      </ion-list>\n\n                </ion-row>\n\n                <ion-row style="margin-top: 14px;    display: flex;\n\n                justify-content: center">\n\n                    <ion-list>\n\n                        <ion-item>\n\n                                <ion-label>Hora de inicio de viaje:</ion-label>\n\n                        <ion-datetime displayFormat="hmm A" picker-format="hmm A" [(ngModel)]="hour"></ion-datetime>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                    \n\n                </ion-row>\n\n                <ion-item>\n\n                        <div class="form">\n\n                                <ion-list no-lines>\n\n                                    <ion-item>\n\n                                        <ion-textarea [(ngModel)]="note" type="text" placeholder="Deja una nota (opcional)" ></ion-textarea>\n\n                                    </ion-item>\n\n                                </ion-list>\n\n                            </div>\n\n                  </ion-item>\n\n            <div class="seats">\n\n                \n\n                <ion-row style="margin-top: 14px;    display: flex;\n\n                justify-content: center">\n\n                   \n\n                    <ion-col col-8>\n\n                        <button class="btn bg-theme text-white rounded" style="width: 100%;font-size: .95rem;" (click)="setPriceDriver()">Aceptar Viaje</button>\n\n                    </ion-col>\n\n                </ion-row>\n\n               \n\n\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\daniel altamar\Documents\waypoolApp\driver-test\waypool_driver\src\pages\confirmprice\confirmprice.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_7__services_price_service__["a" /* priceService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__services_geofire_services__["a" /* geofireService */]])
    ], ConfirmpricePage);
    return ConfirmpricePage;
}());

//# sourceMappingURL=confirmprice.js.map

/***/ })

});
//# sourceMappingURL=4.js.map