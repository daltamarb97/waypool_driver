webpackJsonp([16],{

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsInfoPageModule", function() { return PaymentsInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payments_info__ = __webpack_require__(808);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentsInfoPageModule = /** @class */ (function () {
    function PaymentsInfoPageModule() {
    }
    PaymentsInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payments_info__["a" /* PaymentsInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payments_info__["a" /* PaymentsInfoPage */]),
            ],
        })
    ], PaymentsInfoPageModule);
    return PaymentsInfoPageModule;
}());

//# sourceMappingURL=payments-info.module.js.map

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_price_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
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
 * Generated class for the PaymentsInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentsInfoPage = /** @class */ (function () {
    function PaymentsInfoPage(navCtrl, navParams, afDB, viewCtrl, alertCtrl, priceServices, signUpServices, angularFireAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDB = afDB;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.priceServices = priceServices;
        this.signUpServices = signUpServices;
        this.angularFireAuth = angularFireAuth;
        this.bankList = [];
        this.showOther = false;
        this.afDB.database.ref('/bankList/').once('value').then(function (snap) {
            console.log(snap.val());
            _this.bankList = snap.val();
        });
        this.driverId = this.angularFireAuth.auth.currentUser.uid;
    }
    PaymentsInfoPage.prototype.onChange = function () {
        if (this.bankEntity === 'Otro') {
            this.showOther = true;
        }
        else {
            this.showOther = false;
        }
    };
    PaymentsInfoPage.prototype.setPaymentInfo = function () {
        if (this.bankEntity === 'Otro') {
            if (this.id === null || this.id === undefined || this.bankEntityOther === null || this.bankEntityOther === undefined || this.bankAccount === null || this.bankAccount === undefined) {
                var alert_1 = this.alertCtrl.create({
                    title: 'Informacion Incompleta',
                    subTitle: 'Por favor revisa que pusiste toda la información correctamente',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                this.priceServices.sendPaymentInfo(this.signUpServices.userPlace, this.driverId, this.id, this.bankAccount, this.bankEntityOther);
                this.dismiss();
            }
        }
        else {
            if (this.id === null || this.id === undefined || this.bankEntity === null || this.bankEntity === undefined || this.bankAccount === null || this.bankAccount === undefined) {
                var alert_2 = this.alertCtrl.create({
                    title: 'Informacion Incompleta',
                    subTitle: 'Por favor revisa que pusiste toda la información correctamente',
                    buttons: ['OK']
                });
                alert_2.present();
            }
            else {
                this.priceServices.sendPaymentInfo(this.signUpServices.userPlace, this.driverId, this.id, this.bankAccount, this.bankEntity);
                this.dismiss();
            }
        }
    };
    PaymentsInfoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PaymentsInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payments-info',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/payments-info/payments-info.html"*/'<ion-content>\n  <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n  <ion-card>\n      <img src="assets/imgs/recibirdinero.png" width="100px" style="display:inline-block" height="150px"/>\n      <ion-card-content>\n          <div class="ride-detail">\n              <ion-item class="form">\n                  <ion-label floating>Tu cédula</ion-label>\n                  <ion-input type="number" [(ngModel)]="id"></ion-input>\n                </ion-item>                \n          </div>\n      </ion-card-content>\n      <ion-card-content>\n        <div class="ride-detail">\n          <ion-list>\n            <ion-item class="form">\n              <ion-label floating>Tu número de cuenta</ion-label>\n              <ion-input type="number" [(ngModel)]="bankAccount"></ion-input>\n            </ion-item>\n          </ion-list>               \n        </div>\n    </ion-card-content>\n\n    <ion-card-content>\n        <ion-row style="margin-top: 14px;    display: flex;\n              justify-content: center">\n                 <ion-list>\n                      <ion-item>\n                        <ion-label>Tu banco</ion-label>\n                        <ion-select [(ngModel)]="bankEntity" (ionChange)="onChange()">\n                          <ion-option *ngFor="let bank of bankList" >{{bank}}</ion-option>\n                        </ion-select>\n                      </ion-item>\n                      <ion-item *ngIf=\'showOther\'>\n                          <ion-label floating>Nombre de tu banco</ion-label>\n                          <ion-input  [(ngModel)]="bankEntityOther"></ion-input>\n                      </ion-item>\n                  </ion-list>\n              </ion-row>\n    </ion-card-content>\n    <br/>\n      <ion-card-content>\n          <div class="ride-detail no-before">\n              <p>Esta información es necesaria para que puedas recibir el dinero que ganaste por compartir tu carro.</p>      \n              <br/>\n              <p>Recuerda que esta información es tuya y por lo tanto nos tomamos enserio su protección. Tus datos estan protegidos bajo las normas de nuestra politica de  privacidad de datos. <a href="https://waypooltech.wordpress.com/" style="color: #0081ad">Más Información</a></p>\n          </div>\n              \n             \n     \n          <div class="seats">\n              \n              <ion-row style="margin-top: 14px;    display: flex;\n              justify-content: center">\n                 \n                  <ion-col col-8>\n                      <button class="btn bg-theme text-white rounded" style="width: 100%;font-size: 1.2rem;" (click)="setPaymentInfo()">Listo</button>\n                  </ion-col>\n              </ion-row>\n             \n\n          </div>\n      </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/payments-info/payments-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__services_price_service__["a" /* priceService */], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]])
    ], PaymentsInfoPage);
    return PaymentsInfoPage;
}());

//# sourceMappingURL=payments-info.js.map

/***/ })

});
//# sourceMappingURL=16.js.map