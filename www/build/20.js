webpackJsonp([20],{

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmpricePageModule", function() { return ConfirmpricePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmprice__ = __webpack_require__(813);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmprice__["a" /* ConfirmpricePage */]),
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

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmpricePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_price_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_geofire_services__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_metrics_service__ = __webpack_require__(353);
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
    function ConfirmpricePage(navCtrl, appCtrl, MetricsService, PriceService, alertCtrl, afDB, sendUsersService, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth, viewCtrl, navParams, geofireService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.MetricsService = MetricsService;
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
        this.SignUpService.getCar(this.SignUpService.userUniversity, this.userDriverUid).takeUntil(this.unsubscribe)
            .subscribe(function (car) {
            //get cars registered
            _this.carModelList = car;
            console.log(_this.carModelList);
        });
        this.SignUpService.getMyInfo(this.SignUpService.userUniversity, this.userDriverUid).takeUntil(this.unsubscribe).subscribe(function (driver) {
            _this.driver = driver;
            _this.driverInfo.origin = _this.driver.trips.origin;
            _this.driverInfo.destination = _this.driver.trips.destination;
            _this.driverInfo.name = _this.driver.name;
            _this.driverInfo.lastname = _this.driver.lastname;
            _this.driverInfo.phone = _this.driver.phone;
            _this.driverInfo.userId = _this.driver.userId;
            _this.driverInfo.car = _this.driver.trips.car;
            _this.driverInfo.price = _this.driver.trips.price;
            _this.driverInfo.verifiedPerson = _this.driver.verifiedPerson;
            _this.driverInfo.company = _this.driver.company;
            console.log('got info here');
        });
        this.geocoder = new google.maps.Geocoder;
    }
    ConfirmpricePage.prototype.ionViewDidEnter = function () {
        this.geofireService.cancelGeoqueryUniversity();
    };
    ConfirmpricePage.prototype.setPriceDriver = function () {
        if (this.precio == null || this.precio == '' || this.car == null || this.car == '') {
            var alert_1 = this.alertCtrl.create({
                title: 'Informacion Incompleta',
                subTitle: 'No haz colocado el precio por el que estas dispuesto a compatir tu viaje o no haz especificado en que carro te moverás',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.PriceService.setPrice(this.SignUpService.userUniversity, this.userDriverUid, this.precio, this.car);
        }
        // ----------------------------------------------------------------------------------
        //     if(this.reservesAlreadyCreated.length >= 5){
        //       const alert = this.alertCtrl.create({
        //         title: 'Limite de reservas por un dia',
        //         subTitle: 'Ya llegaste al limite de reservas que se pueden hacer en un dia, cancela reservas que no vayas a hacer o termina los viajes de las que ya tienes en curso por hoy',
        //         buttons: ['OK']
        //       });
        //       alert.present();
        //     }else{
        //       let reserveDate = moment(JSON.stringify(this.startHour), 'HH:mm')
        //       console.log(reserveDate);      
        //       console.log(moment().isBefore(reserveDate));
        //       if(moment().isBefore(reserveDate) === true){
        //       if(this.precio == null || this.precio == '' || this.car == null || this.car=='' || this.startHour == null || this.startHour == ''){
        //         const alert = this.alertCtrl.create({
        //             title: 'Informacion Incompleta',
        //             subTitle: 'No haz colocado el precio por el que estas dispuesto a compatir tu viaje, no haz especificado en que carro te moverás o no haz puesto la hora del inicio del viaje',
        //             buttons: ['OK']
        //           });
        //           alert.present();
        //     }else if(this.note == null || this.note == '' ){
        //         this.hourToSend = this.nowHour.getHours()+":"+this.nowHour.getMinutes();
        //         this.accepted = true;
        //         this.dismiss();
        //         // this.goefireKey = Date.now();
        //       if(this.driver.geofireOrigin === true){
        //         this.typeOfReserve = 'origin';
        //         this.note = 'No hay nota.'
        //       // IMPORTANT: addService from sendCoordsService is no longer used because it was generating that the availableReserve in user had a deprecated keyTrip
        //       this.afDB.database.ref(this.SignUpService.userUniversity + '/reserves/'+ this.userDriverUid).push({
        //         driver: this.driverInfo,
        //         car:this.car,
        //         destination:this.driverInfo.destination,
        //         origin:this.driverInfo.origin,
        //         note:this.note,
        //         price:this.precio,
        //         startHour: this.startHour,
        //         type: this.typeOfReserve,
        //         company: this.driverInfo.company
        //     }).then((snap)=>{
        //       this.destination = this.driverInfo.destination[0][0];
        //       this.origin = this.driverInfo.origin[0][0];
        //       const key = snap.key;
        //       this.MetricsService.createdReserves(this.SignUpService.userUniversity,this.userDriverUid,key,this.driverInfo,this.car,this.driverInfo.destination,this.driverInfo.origin,this.note,this.precio, this.startHour,this.typeOfReserve);
        //       // geocoding of addresses that came from findRide
        //         this.geocoder.geocode({'address': this.origin}, (results, status)=>{
        //           if(status==='OK'){
        //             this.geocoordinatesOr={
        //               lat:results[0].geometry.location.lat(),
        //               lng: results[0].geometry.location.lng()
        //             }
        //           }
        //               // set geofirekey 
        //             // this.geofireService.setGeofireOr(2, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng, this.goefireKey, this.driverInfo.userId, key)
        //             this.geofireService.setGeofireOrNEWTEST(this.SignUpService.userUniversity, key, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng );
        //             this.afDB.database.ref(this.SignUpService.userUniversity + '/geofireOr/' + key).update({
        //               driverId: this.driverInfo.userId
        //             })
        //             console.log('executed geofire Or')
        //      })
        //         this.afDB.database.ref(this.SignUpService.userUniversity + '/reserves/'+ this.userDriverUid + '/' + key).update({
        //             keyTrip: key 
        //         }) 
        //     })
        //     }else{
        //         this.typeOfReserve = 'destination'
        //         this.note = 'No hay nota.'
        //         this.afDB.database.ref(this.SignUpService.userUniversity + '/reserves/'+ this.userDriverUid).push({
        //           driver: this.driverInfo,
        //         car:this.car,
        //         destination:this.driverInfo.destination,
        //         origin:this.driverInfo.origin,
        //         note:this.note,
        //         price:this.precio,
        //         startHour: this.startHour,
        //         // geofireKey: this.goefireKey,
        //         type: this.typeOfReserve,
        //         company: this.driverInfo.company
        //     }).then((snap)=>{
        //       this.destination = this.driverInfo.destination[0][0];
        //       this.origin = this.driverInfo.origin[0][0];
        //       const key = snap.key;
        //       this.MetricsService.createdReserves(this.SignUpService.userUniversity,this.userDriverUid,key,this.driverInfo,this.car,this.driverInfo.destination,this.driverInfo.origin,this.note,this.precio, this.startHour,this.typeOfReserve);
        //       // geocoding of addresses that came from findRide
        //       this.geocoder.geocode({'address': this.destination}, (results, status)=>{
        //         if(status==='OK'){
        //           this.geocoordinatesDest={
        //             lat:results[0].geometry.location.lat(),
        //             lng: results[0].geometry.location.lng()
        //           }
        //         }
        //         // set geofire key
        //           // this.geofireService.setGeofireDest(2, this.geocoordinatesDest.lat, this.geocoordinatesDest.lng, this.goefireKey, this.driverInfo.userId, key);
        //           this.geofireService.setGeofireDestNEWTEST(this.SignUpService.userUniversity, key, this.geocoordinatesDest.lat, this.geocoordinatesDest.lng);
        //           this.afDB.database.ref(this.SignUpService.userUniversity + '/geofireDest/' + key).update({
        //             driverId: this.driverInfo.userId
        //           })
        //           console.log('executed geofire Dest')  
        //     })
        //     this.afDB.database.ref(this.SignUpService.userUniversity + '/reserves/'+ this.userDriverUid + '/' + key).update({
        //       keyTrip: key 
        //   })
        //     })
        //     }
        //       } else {
        //         this.hourToSend = this.nowHour.getHours()+":"+this.nowHour.getMinutes();
        //         this.PriceService.setPriceAndNote(this.SignUpService.userUniversity, this.userDriverUid,this.precio,this.note,this.car);
        //         this.accepted = true;
        //         this.dismiss();
        //         // this.goefireKey = Date.now();
        //         // console.log(this.goefireKey);
        //      // add reserve and command to dismiss modal
        //      if(this.driver.geofireOrigin === true){
        //       this.typeOfReserve = 'origin';
        //       this.afDB.database.ref(this.SignUpService.userUniversity + '/reserves/'+ this.userDriverUid).push({
        //         driver: this.driverInfoNote,
        //         car:this.car,
        //         destination:this.driverInfoNote.destination,
        //         origin:this.driverInfoNote.origin,
        //         note: this.note,
        //         price:this.precio,
        //         startHour: this.startHour,
        //         // geofireKey: this.goefireKey,
        //         type: this.typeOfReserve,
        //         company: this.driverInfoNote.company
        //       }).then((snap)=>{
        //         this.destinationNote = this.driverInfoNote.destination[0][0];
        //         this.originNote = this.driverInfoNote.origin[0][0];
        //         const key = snap.key;
        //         this.MetricsService.createdReserves(this.SignUpService.userUniversity,this.userDriverUid,key,this.driverInfoNote,this.car,this.driverInfoNote.destination,this.driverInfoNote.origin,this.note,this.precio, this.startHour,this.typeOfReserve);
        //         // geocoding of addresses that came from findRide
        //         this.geocoder.geocode({'address': this.originNote}, (results, status)=>{
        //           if(status==='OK'){
        //             this.geocoordinatesOr={
        //               lat:results[0].geometry.location.lat(),
        //               lng: results[0].geometry.location.lng()
        //             }
        //           }
        //            // set geofire key 
        //               // this.geofireService.setGeofireOr(2, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng, this.goefireKey,this.driverInfoNote.userId, key)
        //               this.geofireService.setGeofireOrNEWTEST(this.SignUpService.userUniversity, key, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng );
        //               this.afDB.database.ref(this.SignUpService.userUniversity +'/geofireOr/' + key).update({
        //                 driverId: this.driverInfoNote.userId
        //               })
        //               console.log('executed geofire Or')
        //       })
        //       this.afDB.database.ref(this.SignUpService.userUniversity + '/reserves/'+ this.userDriverUid + '/' + key).update({
        //         keyTrip: key 
        //        })
        //       })
        //     }else{
        //       this.typeOfReserve = 'destination';
        //       this.afDB.database.ref(this.SignUpService.userUniversity + '/reserves/'+ this.userDriverUid).push({
        //         driver: this.driverInfoNote,
        //         car:this.car,
        //         destination:this.driverInfoNote.destination,
        //         origin:this.driverInfoNote.origin,
        //         note: this.note,
        //         price:this.precio,
        //         startHour: this.startHour,
        //         company: this.driverInfoNote.company,
        //         // geofireKey: this.goefireKey,
        //         type: this.typeOfReserve
        //       }).then((snap)=>{
        //         this.destinationNote = this.driverInfoNote.destination[0][0];
        //         this.originNote = this.driverInfoNote.origin[0][0];
        //         const key = snap.key;
        //         this.MetricsService.createdReserves(this.SignUpService.userUniversity,this.userDriverUid,key,this.driverInfoNote,this.car,this.driverInfoNote.destination,this.driverInfoNote.origin,this.note,this.precio, this.startHour,this.typeOfReserve);        // geocoding of addresses that came from findRide
        //         this.geocoder.geocode({'address': this.destinationNote}, (results, status)=>{
        //           if(status==='OK'){
        //             this.geocoordinatesDest={
        //               lat:results[0].geometry.location.lat(),
        //               lng: results[0].geometry.location.lng()
        //             }
        //           }
        //               // this.geofireService.setGeofireDest(2, this.geocoordinatesDest.lat, this.geocoordinatesDest.lng, this.goefireKey,this.driverInfoNote.userId, key)
        //         // set geofire key 
        //               this.geofireService.setGeofireDestNEWTEST(this.SignUpService.userUniversity, key, this.geocoordinatesDest.lat, this.geocoordinatesDest.lng);
        //               this.afDB.database.ref(this.SignUpService.userUniversity + '/geofireDest/' + key).update({
        //                 driverId: this.driverInfoNote.userId
        //               })
        //               console.log('executed geofire Dest')
        //       })
        //       this.afDB.database.ref(this.SignUpService.userUniversity + '/reserves/'+ this.userDriverUid + '/' + key).update({
        //         keyTrip: key 
        //        })
        //       })
        //     }
        // }
        //       }else{
        //            	let alert = this.alertCtrl.create({
        //             title: 'Información erronea',
        //             subTitle: 'no se puede colocar una reserva para unas horas que ya pasaron',
        //             buttons: ['OK']
        //           });
        //           alert.present();
        //           console.log('es una fecha pasada');
        //       }   
        // console.log(this.car);
        // }
    };
    ;
    ConfirmpricePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
        // this.unsubscribe.next();
        // this.unsubscribe.unsubscribe();
    };
    ConfirmpricePage.prototype.ionViewDidLeave = function () {
        this.geofireService.cancelGeofireOrigin(this.SignUpService.userUniversity, this.userDriverUid);
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ConfirmpricePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmprice',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_driver\src\pages\confirmprice\confirmprice.html"*/'<ion-content>\n\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n\n    <ion-card>\n\n            <img src="assets/imgs/detallesviaje.png" width="100px" style="display:inline-block" height="150px"/>\n\n\n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                <ion-item class="form">\n\n                    <ion-label floating>Precio Por Persona</ion-label>\n\n                    <ion-input type="number" [(ngModel)]="precio"></ion-input>\n\n                  </ion-item>                \n\n            </div>\n\n        </ion-card-content>\n\n\n\n        <ion-card-content>\n\n            <!-- <div class="ride-detail no-before">\n\n                <p><small>Recuerda:</small>\n\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n\n                  - Precio Recomendado: 2500 </p>\n\n        \n\n                <p>- Tus compañeros te pagarán en efectivo, evita colocar precios que requieran mucho vuelto, lleva dinero suficiente para dar vueltas.</p>\n\n            </div> -->\n\n        </ion-card-content>\n\n        <ion-card-content>\n\n                <ion-row style="margin-top: 14px;    display: flex;\n\n                justify-content: center">\n\n                   <ion-list>\n\n                        <ion-item>\n\n                          <ion-label>Escoge el carro:</ion-label>\n\n                          <ion-select [(ngModel)]="car">\n\n                                <ion-option *ngFor="let car of carModelList" >{{car.carModel}} | {{car.plateNumber}} | {{car.color}}</ion-option>\n\n                       \n\n                          </ion-select>\n\n                        </ion-item>\n\n                      </ion-list>\n\n                </ion-row>\n\n                \n\n               \n\n       \n\n            <div class="seats">\n\n                \n\n                <ion-row style="margin-top: 14px;    display: flex;\n\n                justify-content: center">\n\n                   \n\n                    <ion-col col-8>\n\n                        <button class="btn bg-theme text-white rounded" style="width: 100%;font-size: 1.2rem;" (click)="setPriceDriver()">Conectarme</button>\n\n                    </ion-col>\n\n                </ion-row>\n\n               \n\n\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_driver\src\pages\confirmprice\confirmprice.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_10__services_metrics_service__["a" /* MetricsService */], __WEBPACK_IMPORTED_MODULE_7__services_price_service__["a" /* priceService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__services_geofire_services__["a" /* geofireService */]])
    ], ConfirmpricePage);
    return ConfirmpricePage;
}());

//# sourceMappingURL=confirmprice.js.map

/***/ })

});
//# sourceMappingURL=20.js.map