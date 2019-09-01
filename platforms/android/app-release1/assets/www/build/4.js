webpackJsonp([4],{

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmNotePageModule", function() { return ConfirmNotePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmnote__ = __webpack_require__(603);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmNotePageModule = /** @class */ (function () {
    function ConfirmNotePageModule() {
    }
    ConfirmNotePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirmnote__["a" /* ConfirmNotePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmnote__["a" /* ConfirmNotePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__confirmnote__["a" /* ConfirmNotePage */]
            ]
        })
    ], ConfirmNotePageModule);
    return ConfirmNotePageModule;
}());

//# sourceMappingURL=confirmnote.module.js.map

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(35));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi93cmFwcGVyL3NyYy9kYXRhYmFzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRDQUF1QyJ9

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_services__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_note_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_geoFire_service__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ConfirmNotePage = /** @class */ (function () {
    function ConfirmNotePage(navCtrl, noteService, appCtrl, alertCtrl, afDB, sendUsersService, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth, viewCtrl, navParams, geofireService) {
        this.navCtrl = navCtrl;
        this.noteService = noteService;
        this.appCtrl = appCtrl;
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
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.buttonColor = '#3fb1df';
        this.buttonColor2 = '#3fb1df';
        this.buttonColor3 = '#3fb1df';
        this.buttonColor4 = '#3fb1df';
        this.clicked1 = false;
        this.clicked2 = false;
        this.clicked3 = false;
        this.clicked4 = false;
        this.geoinfo1 = this.navParams.get('geoFire1');
        console.log(this.geoinfo1);
        this.geoinfo2 = this.navParams.get('geoFire2');
        console.log(this.geoinfo2);
    }
    ConfirmNotePage.prototype.setNoteDriver = function () {
        if (this.note == null || this.note == '') {
            this.note = 'No hay nota';
            this.noteService.setNote(this.userUid, this.note);
            this.accepted = true;
            this.dismiss();
        }
        else {
            this.noteService.setNote(this.userUid, this.note);
            this.accepted = true;
            this.dismiss();
        }
    };
    ;
    ConfirmNotePage.prototype.setGeoFireDestination = function () {
        this.geofireService.setLocationGeofireDest(this.userUid, this.geoinfo2.lat, this.geoinfo2.lng, this.userUid);
        this.buttonColor = '#0fc874';
        this.buttonColor2 = '#3fb1df';
        this.buttonColor3 = '#3fb1df';
        this.buttonColor4 = '#3fb1df';
        this.clicked1 = true;
        if (this.clicked2 == true || this.clicked3 == true || this.clicked4 == true) {
            this.geofireService.deleteUserGeofireOr(this.userUid);
            this.clicked2 = false;
            this.clicked3 = false;
            this.clicked4 = false;
        }
    };
    ConfirmNotePage.prototype.setGeoFireOrigin = function () {
        this.geofireService.setLocationGeofireOr(this.userUid, this.geoinfo1.lat, this.geoinfo1.lng, this.userUid);
        this.buttonColor2 = '#0fc874';
        this.buttonColor = '#3fb1df';
        this.buttonColor3 = '#3fb1df';
        this.buttonColor4 = '#3fb1df';
        this.clicked2 = true;
        if (this.clicked1 == true) {
            this.geofireService.deleteUserGeofireDest(this.userUid);
            this.clicked1 = false;
        }
    };
    ConfirmNotePage.prototype.setGeoFireOrigin2 = function () {
        this.geofireService.setLocationGeofireOr(this.userUid, this.geoinfo1.lat, this.geoinfo1.lng, this.userUid);
        this.buttonColor2 = '#3fb1df';
        this.buttonColor = '#3fb1df';
        this.buttonColor3 = '#0fc874';
        this.buttonColor4 = '#3fb1df';
        this.clicked3 = true;
        if (this.clicked1 == true) {
            this.geofireService.deleteUserGeofireDest(this.userUid);
            this.clicked1 = false;
        }
    };
    ConfirmNotePage.prototype.setGeoFireOrigin3 = function () {
        this.geofireService.setLocationGeofireOr(this.userUid, this.geoinfo1.lat, this.geoinfo1.lng, this.userUid);
        this.buttonColor2 = '#3fb1df';
        this.buttonColor = '#3fb1df';
        this.buttonColor3 = '#3fb1df';
        this.buttonColor4 = '#0fc874';
        this.clicked4 = true;
        if (this.clicked1 == true) {
            this.geofireService.deleteUserGeofireDest(this.userUid);
            this.clicked1 = false;
        }
    };
    ConfirmNotePage.prototype.dismissOnClick = function () {
        this.viewCtrl.dismiss(this.accepted);
        if (this.clicked1 == true || this.clicked2 == true) {
            this.geofireService.deleteUserGeofireDest(this.userUid);
            this.geofireService.deleteUserGeofireOr(this.userUid);
        }
    };
    ConfirmNotePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
    };
    ConfirmNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmnote',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_customer/src/pages/confirmnote/confirmnote.html"*/'<ion-content>\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismissOnClick()"></ion-icon>\n    <ion-card>\n        <h6 class="text-theme">Detalles del Viaje</h6>\n        \n\n        <ion-card-content>\n            <div class="ride-detail">\n                <ion-item >\n                    <ion-label>Nota (Opcional):</ion-label>\n                \n                  </ion-item>\n                <ion-item>\n                    <div class="form">\n                        <ion-list no-lines>\n                            <ion-item>\n                                    <ion-textarea [(ngModel)]="note" rows="10"type="text"  ></ion-textarea>\n\n                            </ion-item>\n                        </ion-list>\n                    </div>\n                  </ion-item>\n            </div>\n        </ion-card-content>\n\n        <ion-card-content>\n            <div class="ride-detail">\n                    <h6 class="text-theme">¿Cuál es tu Destino? (IMPORTANTE)</h6>\n\n              <button class="btn bg-theme text-white rounded"  (click)="setGeoFireDestination()" [ngStyle]="{\'background-color\': buttonColor}">\n                  Casa\n                <ion-icon name="home"></ion-icon>\n              </button>\n              <button class="btn bg-theme text-white rounded"  (click)="setGeoFireOrigin()" [ngStyle]="{\'background-color\': buttonColor2}">\n                    Universidad\n                  <ion-icon name="book"></ion-icon>\n                </button>\n                <button class="btn bg-theme text-white rounded"  (click)="setGeoFireOrigin2()" [ngStyle]="{\'background-color\': buttonColor3}">\n                    C. Juridico Uninorte\n                  <ion-icon name="book"></ion-icon>\n                </button>\n                <button class="btn bg-theme text-white rounded"  (click)="setGeoFireOrigin3()" [ngStyle]="{\'background-color\': buttonColor4}">\n                    Hospital Uninorte\n                  <ion-icon name="book"></ion-icon>\n                </button>\n            </div>\n        </ion-card-content>\n\n        <ion-card-content>\n            <div class="seats">\n                \n                <ion-row style="margin-top: 14px;justify-content: center">\n                    \n                    <ion-col col-8>\n                        <button class="btn bg-theme text-white rounded" style="width: 100%;font-size: 1.5rem;" (click)="setNoteDriver()">Aceptar Viaje</button>\n                    </ion-col>\n                </ion-row>\n\n\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_customer/src/pages/confirmnote/confirmnote.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__services_note_service__["a" /* noteService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_4__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__services_geoFire_service__["a" /* geofireService */]])
    ], ConfirmNotePage);
    return ConfirmNotePage;
}());

//# sourceMappingURL=confirmnote.js.map

/***/ })

});
//# sourceMappingURL=4.js.map