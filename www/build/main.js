webpackJsonp([1],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(134);
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
    function FindridePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.ride = "oneway";
    }
    FindridePage.prototype.tabs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    FindridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-findride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/findride/findride.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title><span class="text-white">EDIT RIDE INFO</span></ion-title>\n    </ion-navbar>\n    <div padding-left padding-right>\n        <ion-segment [(ngModel)]="ride">\n            <ion-segment-button value="oneway">\n\n                Selecciona tu origen y destino\n            </ion-segment-button>\n            <!-- <ion-segment-button value="Return">\n                Return\n            </ion-segment-button> -->\n\n        </ion-segment>\n    </div>\n</ion-header>\n\n<ion-content class="bg-background-img" padding>\n    <div [ngSwitch]="ride">\n        <ion-list *ngSwitchCase="\'oneway\'">\n            <ion-card class="search search-1">\n                <span class="dot bg-theme"></span>\n                <ion-card-content>\n                    <ion-searchbar (ionInput)="getItems($event)" placeholder="Set Starting Location (Home)"></ion-searchbar>\n                    <ion-searchbar class="nobdr" (ionInput)="getItems($event)" placeholder="Starting time"></ion-searchbar>\n                </ion-card-content>\n            </ion-card>\n            <ion-card class="search search-2">\n                <span class="dot bg-yellow"></span>\n                <ion-card-content>\n                    <ion-searchbar (ionInput)="getItems($event)" placeholder="Set End Location (Office)"></ion-searchbar>\n                    <ion-searchbar class="nobdr" (ionInput)="getItems($event)" placeholder="Reaching time"></ion-searchbar>\n                </ion-card-content>\n            </ion-card>\n     \n            <!-- <p class="text-theme">Select usually travel days</p>\n            <br> -->\n            <!-- <div class="days text-white">\n\n                <ion-row>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label>Monday</ion-label>\n                            <ion-checkbox checked="true"></ion-checkbox>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label>Tuesday</ion-label>\n                            <ion-checkbox checked="true"></ion-checkbox>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label>Wednesday</ion-label>\n                            <ion-checkbox checked="true"></ion-checkbox>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label>Thursday</ion-label>\n                            <ion-checkbox checked="true"></ion-checkbox>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label>Friday</ion-label>\n                            <ion-checkbox checked="true"></ion-checkbox>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label>Saturday</ion-label>\n                            <ion-checkbox checked="true"></ion-checkbox>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label>Sunday</ion-label>\n                            <ion-checkbox checked="true"></ion-checkbox>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n            </div> -->\n            <br>\n            <div class="rate">\n                <ion-row>\n                <p class="text-theme">recuerda que el precio que debes cobrar es:</p>\n                    <ion-col col-6>\n                        <div class="seats-tag">\n                            <!-- <ion-icon name="remove-circle"></ion-icon> -->\n                            <strong>COP 2.500</strong>\n                            <!-- <ion-icon name="add-circle"></ion-icon> -->\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-6>\n                        <button (click)="tabs()" small class="btn rounded bg-theme text-white" style="width: 100%">CONÉCTATE</button>\n\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-list>\n\n        <!-- <ion-list *ngSwitchCase="\'Return\'">\n\n\n            <ion-card class="search search-1">\n                <span class="dot bg-yellow"></span>\n                <ion-card-content>\n                    <ion-searchbar (ionInput)="getItems($event)" placeholder="Set Starting Location (Office)"></ion-searchbar>\n                    <ion-searchbar class="nobdr" (ionInput)="getItems($event)" placeholder="Starting time"></ion-searchbar>\n                </ion-card-content>\n            </ion-card>\n            <ion-card class="search search-2">\n                <span class="dot bg-theme"></span>\n                <ion-card-content>\n                    <ion-searchbar (ionInput)="getItems($event)" placeholder="Set End Location (Home)"></ion-searchbar>\n                    <ion-searchbar class="nobdr" (ionInput)="getItems($event)" placeholder="Reaching time"></ion-searchbar>\n                </ion-card-content>\n            </ion-card>\n            <p class="text-theme">Select usually travel days</p>\n            <br>\n            <div class="days text-white">\n                <ion-row>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label>Monday</ion-label>\n                            <ion-checkbox checked="true"></ion-checkbox>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label>Tuesday</ion-label>\n                            <ion-checkbox checked="true"></ion-checkbox>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label>Wednesday</ion-label>\n                            <ion-checkbox checked="true"></ion-checkbox>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label>Thursday</ion-label>\n                            <ion-checkbox checked="true"></ion-checkbox>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label>Friday</ion-label>\n                            <ion-checkbox checked="true"></ion-checkbox>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label>Saturday</ion-label>\n                            <ion-checkbox checked="true"></ion-checkbox>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label>Sunday</ion-label>\n                            <ion-checkbox checked="true"></ion-checkbox>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <br>\n            <p class="text-theme">Set Min. Fare ($)</p>\n            <div class="rate">\n                <ion-row>\n                    <ion-col col-6>\n                        <div class="seats-tag">\n                            <ion-icon name="remove-circle"></ion-icon>\n                            <strong>60 $</strong>\n                            <ion-icon name="add-circle"></ion-icon>\n                        </div>\n                    </ion-col>\n                    <ion-col col-6>\n                        <button (click)="tabs()" class="btn rounded bg-theme text-white" style="width: 100%" small>Update Info</button>\n                    </ion-col>\n                </ion-row>\n            </div>\n\n\n        </ion-list> -->\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/findride/findride.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object])
    ], FindridePage);
    return FindridePage;
    var _a;
}());

//# sourceMappingURL=findride.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__myride_myride__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chats_chats__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listride_listride__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wallet_wallet__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__more_more__ = __webpack_require__(255);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__myride_myride__["a" /* MyridePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__chats_chats__["a" /* ChatsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__listride_listride__["a" /* ListridePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__wallet_wallet__["a" /* WalletPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__more_more__["a" /* MorePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="My Ride" tabIcon="md-car" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Chats" tabIcon="md-chatboxes" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Requests" tabIcon="md-person-add" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Wallet" tabIcon="md-card" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab5Root" tabTitle="More" tabIcon="md-person" tabsHideOnSubPages="true"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmpopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    function ConfirmpopupPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    ConfirmpopupPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ConfirmpopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmpopup',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/confirmpopup/confirmpopup.html"*/'<ion-content>\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n    <ion-card>\n        <h6 class="text-theme">Accept Ride Request?</h6>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n            <div class="name">\n                <h2>David Johnson</h2>\n                <p>Honda Cvic | White</p>\n            </div>\n        </ion-item>\n        <ion-card-content>\n            <div class="ride-detail">\n                <p><small>Pickup Location</small>\n                    <span class="icon-location bg-theme"></span>Washington sq.park New York</p>\n                <p>\n                    <small>Drop Location</small>\n                    <span class="icon-location bg-yellow"></span>Harison, east sq.park New York</p>\n            </div>\n        </ion-card-content>\n\n        <ion-card-content>\n            <div class="ride-detail no-before">\n                <p><small>Date</small>\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n                    22<sup>nd</sup> Feb, 2018 </p>\n                <p>\n                    <small>Time</small>\n                    <ion-icon name="md-time" class="icon-location"></ion-icon>\n                    Between 12:10pm to 12:30pm</p>\n            </div>\n        </ion-card-content>\n\n        <ion-card-content>\n            <div class="seats">\n                <ion-row>\n                    <ion-col col-4 class="rate">\n                        <small>Est Fare</small> $ 120\n                    </ion-col>\n                    <ion-col col-5 class="rate">\n                        <small>Seat Request</small> 2 Seats\n                    </ion-col>\n                </ion-row>\n                <ion-row style="margin-top: 14px;">\n                    <ion-col col-4>\n                        <button class="btn bg-white text-theme rounded" style="width: 100%;"><ion-icon name="md-calendar" class="icon-location"></ion-icon></button>\n                    </ion-col>\n                    <ion-col col-8>\n                        <button class="btn bg-theme text-white rounded" style="width: 100%;font-size: .95rem;">ACCEPT REQUEST</button>\n                    </ion-col>\n                </ion-row>\n\n\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/confirmpopup/confirmpopup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ConfirmpopupPage);
    return ConfirmpopupPage;
}());

//# sourceMappingURL=confirmpopup.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpService = /** @class */ (function () {
    function SignUpService(afDB) {
        this.afDB = afDB;
    }
    SignUpService.prototype.saveUser = function (user) {
        this.afDB.database.ref('drivers/' + user.userId).update(user);
    };
    SignUpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], SignUpService);
    return SignUpService;
}());

//# sourceMappingURL=signup.service.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarRegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__findride_findride__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(142);
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
            selector: 'page-car-registration',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/car-registration/car-registration.html"*/'<!--\n  Generated template for the CarRegistrationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>VERIFIY MY ID\n            <!--           <ion-icon name="md-search" class="text-white" style="margin-left: auto;float: right;"></ion-icon>-->\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding-right padding-left>\n    <p text-center padding-top margin-top>{{description}}</p>\n    <h2 text-center>{{namePicture}}</h2>\n\n    <ion-row>\n        <ion-col col-4 text-center>\n            <img  src="assets/imgs/v2.png" (click)="changeNamePicture1()">\n        </ion-col>\n        <ion-col col-4 text-center>\n            <img  src="assets/imgs/v3.png" (click)="changeNamePicture2()">\n        </ion-col>\n        <ion-col col-4 text-center>\n            <img  src="assets/imgs/v4.png" (click)="changeNamePicture3()">\n        </ion-col>\n        <ion-col col-4 text-center>\n            <img  src="assets/imgs/v4.png" (click)="changeNamePicture4()">\n        </ion-col>\n        <ion-col col-4 text-center>\n            <img  src="assets/imgs/credit-card (1).png" (click)="changeNamePicture5()">\n        </ion-col>\n        <ion-col col-4 text-center>\n            <img  src="../../assets/imgs/credit-card (1).png" (click)="changeNamePicture6()">\n        </ion-col>\n    </ion-row>\n\n    <div text-center class="verifiy">\n        <img src="assets/imgs/v1.png">\n    </div>\n    <ion-row>\n        <ion-col>\n            <p padding-top class="btn-box"><button class="btn text-white bg-theme rounded" style="width: 80%;" (click)="usageCamera()">Subir Foto</button></p>\n        </ion-col>\n        <ion-col>\n            <p padding-top class="btn-box"><button class="btn text-white rounded buttonLight" style="width: 80%;" (click)= "findRide()">Hacer después</button></p>\n        </ion-col>\n    </ion-row>\n</ion-content>\n\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/car-registration/car-registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["Camera"]])
    ], CarRegistrationPage);
    return CarRegistrationPage;
}());

//# sourceMappingURL=car-registration.js.map

/***/ }),

/***/ 206:
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
webpackEmptyAsyncContext.id = 206;

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/car-registration/car-registration.module": [
		531,
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
webpackAsyncContext.id = 247;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raterider_raterider__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatting_chatting__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ridetoday_ridetoday__ = __webpack_require__(250);
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
    function MyridePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.ride = "today";
    }
    MyridePage.prototype.raterider = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__raterider_raterider__["a" /* RateriderPage */]);
    };
    MyridePage.prototype.chatting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chatting_chatting__["a" /* ChattingPage */]);
    };
    MyridePage.prototype.ridetoday = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ridetoday_ridetoday__["a" /* RidetodayPage */]);
    };
    MyridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/myride/myride.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title class="text-center">MY RIDE\n            <ion-icon name="md-locate" class="text-white" style="margin-left: auto;float: right;"></ion-icon>\n        </ion-title>\n\n    </ion-navbar>\n    <div padding-left padding-right>\n        <ion-segment [(ngModel)]="ride">\n            <ion-segment-button value="past">\n                Past\n            </ion-segment-button>\n            <ion-segment-button value="today">\n                Today\n            </ion-segment-button>\n            <ion-segment-button value="coming">\n                Upcoming\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n</ion-header>\n\n<ion-content class="bg-light">\n    <div [ngSwitch]="ride">\n        <ion-list *ngSwitchCase="\'past\'">\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>David Johnson\n                        </h2>\n                        <p>Honda Cvic | White</p>\n                    </div>\n                    <div class="more">\n                        <h2 class="text-theme">$ 120\n                            <ion-icon name="md-more"></ion-icon>\n                        </h2>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span>Harison, east sq.park New York</p>\n                    </div>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                <h2>Today: 12:15</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                <h2>2 Seats</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col col-4 text-right style="max-width: 100px;">\n                            <button class="btn bg-yellow rounded full text-white" (click)="raterider()" style="width: 100%;">Rate Now</button>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n\n            <!-- repilica -->\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>David Johnson\n                        </h2>\n                        <p>Honda Cvic | White</p>\n                    </div>\n                    <div class="more">\n                        <h2 class="text-theme">$ 120\n                            <ion-icon name="md-more"></ion-icon>\n                        </h2>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n                    </div>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                <h2>Today: 12:15</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                <h2>2 Seats</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col col-4 class="detail-text" text-right style="max-width: 100px;">\n                            <div text-left>Rated\n                                <div style="margin-top: 5px;">\n                                    <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                                    <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                                    <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                                    <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                                    <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>David Johnson\n                        </h2>\n                        <p>Honda Cvic | White</p>\n                    </div>\n                    <div class="more">\n                        <h2 class="text-theme">$ 120\n                            <ion-icon name="md-more"></ion-icon>\n                        </h2>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n                    </div>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                <h2>Today: 12:15</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                <h2>2 Seats</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col col-4 class="detail-text" text-right style="max-width: 100px;">\n                            <div text-left>Cancled Ride\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'today\'">\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>David Johnson\n                        </h2>\n                        <p>Honda Cvic | White</p>\n                    </div>\n                    <div class="more">\n                        <h2 class="text-theme">$ 120\n                            <ion-icon name="md-more"></ion-icon>\n                        </h2>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span>Harison, east sq.park New York</p>\n                    </div>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                <h2>Today: 12:15</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                <h2>2 Seats</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col col-5>\n                            <button class="btn bg-theme rounded full text-white" (click)="ridetoday()">Pick up</button>\n                            <button class="btn bg-yellow rounded full text-white"><ion-icon name="ios-call" class="text-white"></ion-icon></button>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n\n            <!-- repilica -->\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>David Johnson\n                        </h2>\n                        <p>Honda Cvic | White</p>\n                    </div>\n                    <div class="more">\n                        <h2 class="text-theme">$ 120\n                            <ion-icon name="md-more"></ion-icon>\n                        </h2>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n                    </div>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                <h2>Today: 12:15</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                <h2>2 Seats</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col col-5>\n                            <button class="btn bg-theme rounded full text-white" (click)="ridetoday()">Pick up</button>\n                            <button class="btn bg-yellow rounded full text-white"><ion-icon name="ios-call" class="text-white"></ion-icon></button>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>David Johnson\n                        </h2>\n                        <p>Honda Cvic | White</p>\n                    </div>\n                    <div class="more">\n                        <h2 class="text-theme">$ 120\n                            <ion-icon name="md-more"></ion-icon>\n                        </h2>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n                    </div>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                <h2>Today: 12:15</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                <h2>2 Seats</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col col-5>\n                            <button class="btn bg-theme rounded full text-white" (click)="ridetoday()">Pick up</button>\n                            <button class="btn bg-yellow rounded full text-white"><ion-icon name="ios-call" class="text-white"></ion-icon></button>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>David Johnson\n\n                        </h2>\n                        <p>Honda Cvic | White</p>\n                    </div>\n                    <div class="more">\n                        <h2 class="text-theme">$ 120\n                            <ion-icon name="md-more"></ion-icon>\n                        </h2>\n                        <p>2 Seats</p>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n                    </div>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                <h2>Today: 12:15</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                <h2>2 Seats</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col col-5>\n                            <button class="btn bg-theme rounded full text-white" (click)="chatting()">Pick up</button>\n                            <button class="btn bg-yellow rounded full text-white"><ion-icon name="ios-call" class="text-white"></ion-icon></button>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'coming\'">\n            <p class="text-light">25<sup>th</sup> Feb 2017 | Sunday<span float-right>2 Passangers</span></p>\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>David Johnson\n                        </h2>\n                        <p>Honda Cvic | White</p>\n                    </div>\n                    <div class="more">\n                        <h2 class="text-theme">$ 120\n                            <ion-icon name="md-more"></ion-icon>\n                        </h2>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span>Harison, east sq.park New York</p>\n                    </div>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                <h2>Today: 12:15</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                <h2>2 Seats</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col col-5>\n                            <button class="btn bg-white rounded full text-theme" (click)="chatting()">Message</button>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n\n            <!-- repilica -->\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>David Johnson\n                        </h2>\n                        <p>Honda Cvic | White</p>\n                    </div>\n                    <div class="more">\n                        <h2 class="text-theme">$ 120\n                            <ion-icon name="md-more"></ion-icon>\n                        </h2>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n                    </div>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                <h2>Today: 12:15</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                <h2>2 Seats</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col col-5>\n                            <button class="btn bg-white rounded full text-theme" (click)="chatting()">Message</button>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n            <p class="text-light">25<sup>th</sup> Feb 2017 | Sunday<span float-right>2 Passangers</span></p>\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>David Johnson\n                        </h2>\n                        <p>Honda Cvic | White</p>\n                    </div>\n                    <div class="more">\n                        <h2 class="text-theme">$ 120\n                            <ion-icon name="md-more"></ion-icon>\n                        </h2>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n                    </div>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                <h2>Today: 12:15</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                <h2>2 Seats</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col col-5>\n                            <button class="btn bg-white rounded full text-theme" (click)="chatting()">Message</button>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/myride/myride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], MyridePage);
    return MyridePage;
}());

//# sourceMappingURL=myride.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateriderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-raterider',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/raterider/raterider.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>RATE DRIVER</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-card class="slip">\n        <div text-center>\n            <h4 class="text-dark">We hope you had a grate ride!</h4>\n            <p class="text-light">22nd Feb 2018, 12:20 pm</p>\n            <h1 class="text-theme">$ 120</h1>\n            <h4 class="text-dark">Payment has been donevia<br>your Vroom Wallet</h4>\n        </div>\n    </ion-card>\n    <ion-card class="rate">\n        <div text-center>\n            <p>So how was your experience with...</p>\n            <div class="driver">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <h2>David Johnson\n                        <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                    </h2>\n                    <p>Honda Civic | White</p>\n                </ion-item>\n                <p class="icons">\n                    <ion-icon name="ios-star"></ion-icon>\n                    <ion-icon name="ios-star"></ion-icon>\n                    <ion-icon name="ios-star"></ion-icon>\n                    <ion-icon name="ios-star"></ion-icon>\n                    <ion-icon name="ios-star"></ion-icon>\n                </p>\n                <div class="form">\n                    <ion-list no-lines>\n                        <ion-item>\n                            <ion-textarea type="text" value="Leave a feedback"></ion-textarea>\n                        </ion-item>\n                    </ion-list>\n                </div>\n                <p padding-top><button class="btn text-white bg-theme rounded" style="width: 100%;">SUBMIT RATING</button></p>\n            </div>\n        </div>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/raterider/raterider.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], RateriderPage);
    return RateriderPage;
}());

//# sourceMappingURL=raterider.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RidetodayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatting_chatting__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RidetodayPage = /** @class */ (function () {
    function RidetodayPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RidetodayPage.prototype.chatting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatting_chatting__["a" /* ChattingPage */]);
    };
    RidetodayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ridetoday',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/ridetoday/ridetoday.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>RIDE TODAY\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <img src="assets/imgs/mapbg.jpg" class="map">\n    <img src="assets/imgs/man1.png" class="user u1">\n    <img src="assets/imgs/man2.png" class="user u2">\n    <img src="assets/imgs/man3.png" class="user u3">\n    <span class="dot bg-theme pickup"></span>\n    <span class="dot bg-yellow drop"></span>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/ridetoday/ridetoday.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], RidetodayPage);
    return RidetodayPage;
}());

//# sourceMappingURL=ridetoday.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatting_chatting__ = __webpack_require__(68);
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
            selector: 'page-chats',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/chats/chats.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title class="text-center">CHATS\n            <ion-icon name="md-search" class="text-white" style="margin-left: auto;float: right;"></ion-icon>\n        </ion-title>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-item (click)="chatting()">\n        <ion-avatar item-start>\n            <img src="assets/imgs/face-1.jpg">\n            <ion-badge color="danger">9+</ion-badge>\n        </ion-avatar>\n        <h2 class="text-theme">Buzz Lightyear\n        </h2>\n        <p>Washington sq Park?</p>\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n    </ion-item>\n    <!-- repeat -->\n    <ion-item (click)="chatting()">\n        <ion-avatar item-start>\n            <img src="assets/imgs/man1.png">\n        </ion-avatar>\n        <h2>Buzz Lightyear\n        </h2>\n        <p>Washington sq Park?</p>\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man2.png">\n        </ion-avatar>\n        <h2>Buzz Lightyear</h2>\n        <p>Washington sq Park?</p>\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n    </ion-item>\n    <ion-item (click)="chatting()">\n        <ion-avatar item-start>\n            <img src="assets/imgs/man3.png">\n        </ion-avatar>\n        <h2>Buzz Lightyear\n        </h2>\n        <p>Washington sq Park?</p>\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man4.png">\n        </ion-avatar>\n        <h2>Buzz Lightyear</h2>\n        <p>Washington sq Park?</p>\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n    </ion-item>\n    <p text-center class="text-light"><small>Chat will be dessapear after completed the ride or<br>in case of cancelation of ride.</small></p>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/chats/chats.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__riderprofile_riderprofile__ = __webpack_require__(253);
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
    function ListridePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ListridePage.prototype.riderprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__riderprofile_riderprofile__["a" /* RiderprofilePage */]);
    };
    ListridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/listride/listride.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>FIND A RIDE\n            <span style="margin-left: auto;float: right;"><ion-icon name="md-car" class="text-white"></ion-icon>&nbsp;&nbsp;Edit Ride</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n            <div class="name">\n                <h2>David Johnson\n                </h2>\n                <p>Honda Cvic | White</p>\n            </div>\n            <div class="more">\n                <h2 class="text-light">\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star"></ion-icon>\n                </h2>\n                <p class="text-light">(34 Reviews)</p>\n            </div>\n        </ion-item>\n        <ion-card-content>\n            <div class="ride-detail">\n                <p>\n                    <span class="icon-location bg-theme"></span>Washington sq.park New York</p>\n                <p>\n                    <span class="icon-location bg-yellow"></span>Harison, east sq.park New York</p>\n            </div>\n            <ion-row class="center-align">\n                <ion-col col-3 class="detail-text text-theme">\n                    25<sup>th</sup> Feb, 12:12pm\n                </ion-col>\n                <ion-col col-3 class="detail-text text-theme" text-center>\n                    2 Seats\n                </ion-col>\n                <ion-col col-2 class="detail-text" style="color: #f00;" text-center>\n                    Reject\n                </ion-col>\n                <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                    <button class="btn bg-theme rounded full text-white" (click)="riderprofile()">Accept</button>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/man2.png">\n            </ion-avatar>\n            <div class="name">\n                <h2>David Johnson\n                </h2>\n                <p>Honda Cvic | White</p>\n            </div>\n            <div class="more">\n                <h2 class="text-light">\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star"></ion-icon>\n                </h2>\n                <p class="text-light">(34 Reviews)</p>\n            </div>\n        </ion-item>\n        <ion-card-content>\n            <div class="ride-detail">\n                <p>\n                    <span class="icon-location bg-theme"></span>Washington sq.park New York</p>\n                <p>\n                    <span class="icon-location bg-yellow"></span>Harison, east sq.park New York</p>\n            </div>\n            <ion-row class="center-align">\n                <ion-col col-3 class="detail-text text-theme">\n                    25<sup>th</sup> Feb, 12:12pm\n                </ion-col>\n                <ion-col col-3 class="detail-text text-theme" text-center>\n                    2 Seats\n                </ion-col>\n                <ion-col col-2 class="detail-text" style="color: #f00;" text-center>\n                    Reject\n                </ion-col>\n                <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                    <button class="btn bg-theme rounded full text-white" (click)="riderprofile()">Accept</button>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/man1.png">\n            </ion-avatar>\n            <div class="name">\n                <h2>David Johnson\n                </h2>\n                <p>Honda Cvic | White</p>\n            </div>\n            <div class="more">\n                <h2 class="text-light">\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star"></ion-icon>\n                </h2>\n                <p class="text-light">(34 Reviews)</p>\n            </div>\n        </ion-item>\n        <ion-card-content>\n            <div class="ride-detail">\n                <p>\n                    <span class="icon-location bg-theme"></span>Washington sq.park New York</p>\n                <p>\n                    <span class="icon-location bg-yellow"></span>Harison, east sq.park New York</p>\n            </div>\n            <ion-row class="center-align">\n                <ion-col col-3 class="detail-text text-theme">\n                    25<sup>th</sup> Feb, 12:12pm\n                </ion-col>\n                <ion-col col-3 class="detail-text text-theme" text-center>\n                    2 Seats\n                </ion-col>\n                <ion-col col-2 class="detail-text" style="color: #f00;" text-center>\n                    Reject\n                </ion-col>\n                <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                    <button class="btn bg-theme rounded full text-white" (click)="riderprofile()">Accept</button>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/listride/listride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ListridePage);
    return ListridePage;
}());

//# sourceMappingURL=listride.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmpopup_confirmpopup__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatting_chatting__ = __webpack_require__(68);
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
            selector: 'page-riderprofile',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/riderprofile/riderprofile.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>PASSANGER PROFILE</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-item style="position: relative;z-index: 2;">\n        <ion-avatar item-start>\n            <img src="assets/imgs/man3.png">\n        </ion-avatar>\n        <div class="name">\n            <h2>David Johnson\n            </h2>\n            <p>Honda Civic | White</p>\n        </div>\n        <div class="more">\n            <h2>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n            </h2>\n            <p>(53 Reviews)</p>\n        </div>\n    </ion-item>\n    <div class="tabs bg-white">\n        <ion-segment [(ngModel)]="rideprofile">\n            <ion-segment-button value="about">\n                About\n            </ion-segment-button>\n            <ion-segment-button value="reviews">\n                Reviews\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n    <div [ngSwitch]="rideprofile">\n        <ion-list *ngSwitchCase="\'about\'">\n            <div class="bg-white about address">\n                <p class="text-theme heading">Address<span float-right>Edit</span></p>\n                <div class="ride-detail">\n                    <p><small>Home</small>\n                        <span class="icon-location bg-theme"></span>140 central Building near hdfc bank Washington sq.park New York</p>\n                    <p>\n                        <small>Office</small>\n                        <span class="icon-location bg-yellow"></span>Harison, central Building near hdfc bank east sq.park New York</p>\n                </div>\n            </div>\n            <div class="bg-white about info">\n                <p class="text-theme heading">Personal Info</p>\n                <ion-list no-lines class="form-list">\n                    <ion-item>\n                        <ion-label floating>Enail Address</ion-label>\n                        <ion-input type="text" value="david-johnson@gmail.com" readonly></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Profession</ion-label>\n                        <ion-input type="text" value="Senior Architech at Apx Designs" readonly></ion-input>\n                    </ion-item>\n                </ion-list>\n            </div>\n\n        </ion-list>\n        <ion-list *ngSwitchCase="\'reviews\'">\n            <div class="bg-white" padding style="margin-bottom: 4px;">\n                <div class="rating-box">\n                    <p>\n                        <span class="text-1">5<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 100%"></span></span>\n                        <span class="text-2">100</span>\n                    </p>\n                    <p>\n                        <span class="text-1">4<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 90%"></span></span>\n                        <span class="text-2">90</span></p>\n                    <p>\n                        <span class="text-1">3<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 70%"></span></span>\n                        <span class="text-2">60</span>\n                    </p>\n                    <p>\n                        <span class="text-1">2<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 50%"></span></span>\n                        <span class="text-2">40</span>\n                    </p>\n                    <p>\n                        <span class="text-1">1<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 20%"></span></span>\n                        <span class="text-2">20</span>\n                    </p>\n                </div>\n            </div>\n            <ion-card class="review">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <h2>Buzz Lightyear</h2>\n                    <p>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                    </p>\n                    <ion-note item-end>15 April 2017</ion-note>\n                </ion-item>\n                <ion-card-content>\n                    <div class="detail">\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n            <ion-card class="review">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <h2>Buzz Lightyear</h2>\n                    <p>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                    </p>\n                    <ion-note item-end>15 April 2017</ion-note>\n                </ion-item>\n                <ion-card-content>\n                    <div class="detail">\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </ion-list>\n    </div>\n    <ion-row class="fix-btn">\n        <ion-col>\n            <button class="btn rounded text-theme bg-white full" (click)="chatting()">MESSAGE</button>\n        </ion-col>\n        <ion-col>\n            <button class="btn rounded text-white bg-theme full" (click)="confirmpopup()">REQUEST RIDE</button>\n        </ion-col>\n    </ion-row>\n    <div class="space">&nbsp;</div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/riderprofile/riderprofile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], RiderprofilePage);
    return RiderprofilePage;
}());

//# sourceMappingURL=riderprofile.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-wallet',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/wallet/wallet.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title class="text-center">MY WALLET</ion-title>\n    </ion-navbar>\n    <div text-center padding>\n        <p><small class="text-white">Total Balance</small></p>\n        <h1 class="text-white">$ 120</h1>\n        <ion-row>\n            <ion-col>\n                <button class="btn text-white bg-yellow rounded">ADD MONEY</button>\n            </ion-col>\n            <ion-col>\n                <button class="btn text-theme bg-white rounded">SEND TO BANK</button>\n            </ion-col>\n        </ion-row>\n    </div>\n\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n            <div class="name">\n                <h2>Paid for Ride\n                    <small>19 Feb, 05:15 pm</small>\n                </h2>\n                <p>Washing sq. Park to East Network</p>\n            </div>\n            <div class="more" text-right>\n                <h2 class="text-theme">+$120\n                </h2>\n                <p class="text-dark">To Johnson</p>\n            </div>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/man3.png">\n            </ion-avatar>\n            <div class="name">\n                <h2>Paid for Ride\n                    <small>19 Feb, 05:15 pm</small>\n                </h2>\n                <p>Washing sq. Park to East Network</p>\n            </div>\n            <div class="more" text-right>\n                <h2 class="text-theme">+$120\n                </h2>\n                <p class="text-dark">To Johnson</p>\n            </div>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/man1.png">\n            </ion-avatar>\n            <div class="name">\n                <h2>Paid for Ride\n                    <small>19 Feb, 05:15 pm</small>\n                </h2>\n                <p>Washing sq. Park to East Network</p>\n            </div>\n            <div class="more" text-right>\n                <h2 class="text-theme">+$120\n                </h2>\n                <p class="text-dark">To Johnson</p>\n            </div>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/man2.png">\n            </ion-avatar>\n            <div class="name">\n                <h2>Paid for Ride\n                    <small>19 Feb, 05:15 pm</small>\n                </h2>\n                <p>Washing sq. Park to East Network</p>\n            </div>\n            <div class="more" text-right>\n                <h2 class="text-theme">+$120\n                </h2>\n                <p class="text-dark">To Johnson</p>\n            </div>\n        </ion-item>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/wallet/wallet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reviews_reviews__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_notification__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__terms_terms__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__earn_earn__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ratevroom_ratevroom__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__help_help__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__upload_upload__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_driverauthentication_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_firebase__);
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
    MorePage.prototype.login = function () {
        this.AuthenticationService.logOut();
        console.log(__WEBPACK_IMPORTED_MODULE_12_firebase__["auth"]().currentUser);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
    };
    MorePage.prototype.upload = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__upload_upload__["a" /* UploadPage */]);
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/more/more.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title class="text-center">MORE</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/face-1.jpg">\n        </ion-avatar>\n        <div class="name">\n            <h2>David Johnson\n            </h2>\n            <p (click)="profile()">View Profile</p>\n        </div>\n        <div class="more">\n            <h2>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n            </h2>\n            <p>(53 Reviews)</p>\n        </div>\n    </ion-item>\n\n    <ion-list no-lines>\n        <button ion-item (click)="reviews()">\n            <ion-avatar item-start>\n                <ion-icon name="ios-star"></ion-icon>\n            </ion-avatar>\n            My Reviews\n        </button>\n        <button ion-item (click)="notification()">\n            <ion-avatar item-start>\n                <ion-icon name="md-notifications"></ion-icon>\n            </ion-avatar>\n            Notification\n        </button>\n        <button ion-item (click)="terms()">\n            <ion-avatar item-start>\n                <ion-icon name="md-paper"></ion-icon>\n            </ion-avatar>\n            Term and Condition\n        </button>\n        <button ion-item (click)="earn()">\n            <ion-avatar item-start>\n                <ion-icon name="md-share"></ion-icon>\n            </ion-avatar>\n            Refer and Earn\n        </button>\n        <button ion-item (click)="ratevroom()">\n            <ion-avatar item-start>\n                <ion-icon name="md-thumbs-up"></ion-icon>\n            </ion-avatar>\n            Rate Vroom\n        </button>\n        <button ion-item (click)="help()">\n            <ion-avatar item-start>\n                <ion-icon name="md-alert"></ion-icon>\n            </ion-avatar>\n            Help\n        </button>\n        <button ion-item (click)="upload()">\n            <ion-avatar item-start>\n                <ion-icon name="md-paper"></ion-icon>   \n            </ion-avatar>\n            Verifiy My Id\n        </button>\n    </ion-list>\n    <ion-list no-lines>\n        <button ion-item (click)="logout()" text-center><h2 class="text-theme"><strong>Log out</strong></h2></button>\n\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/more/more.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_11__services_driverauthentication_service__["a" /* authenticationService */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-profile',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/profile/profile.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>MY PROFILE</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-item style="position: relative;z-index: 2;">\n        <ion-avatar item-start>\n            <img src="assets/imgs/man3.png">\n        </ion-avatar>\n        <div class="name">\n            <h2>David Johnson\n            </h2>\n            <p>Edit Profile</p>\n        </div>\n        <div class="more">\n            <h2>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n            </h2>\n            <p>(53 Reviews)</p>\n        </div>\n    </ion-item>\n    <div class="tabs bg-white">\n        <ion-segment [(ngModel)]="myprofile">\n            <ion-segment-button value="about">\n                About\n            </ion-segment-button>\n            <ion-segment-button value="reviews">\n                Reviews\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n    <div [ngSwitch]="myprofile">\n        <ion-list *ngSwitchCase="\'about\'">\n            <div class="bg-white about address">\n                <p class="text-theme heading">Address<span float-right>Edit</span></p>\n                <div class="ride-detail">\n                    <p><small>Home</small>\n                        <span class="icon-location bg-theme"></span>140 central Building near hdfc bank Washington sq.park New York</p>\n                    <p>\n                        <small>Office</small>\n                        <span class="icon-location bg-yellow"></span>Harison, central Building near hdfc bank east sq.park New York</p>\n                </div>\n            </div>\n            <div class="bg-white about info">\n                <p class="text-theme heading">Personal Info<span float-right>Edit</span></p>\n                <ion-list no-lines class="form-list">\n                    <ion-item>\n                        <ion-label floating>User Name</ion-label>\n                        <ion-input type="text" value="Johan Bitoda" readonly></ion-input>\n                    </ion-item>\n                </ion-list>\n            </div>\n            <div class="bg-white about info">\n                <p class="text-theme heading">Verification<span float-right>Save</span></p>\n                <ion-list no-lines class="form-list">\n                    <ion-item>\n\n                        <ion-label floating>Phone Verification</ion-label>\n                        <ion-input type="text" value="+91 964 148 6000" readonly></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-icon name="ios-checkmark-circle" class="text-theme check"></ion-icon>\n                        <ion-label floating>Email Verification</ion-label>\n                        <ion-input type="text" value="johanbittoda@email.com" readonly></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-icon name="ios-checkmark-circle" class="text-theme check"></ion-icon>\n                        <ion-label floating>Goverment ID Verification</ion-label>\n                        <ion-input type="text" value="Senior Architechat Alex Designs." readonly></ion-input>\n\n                    </ion-item>\n                </ion-list>\n            </div>\n            <div class="bg-white about info">\n                <p class="text-theme heading">Car Info<span float-right>Save</span></p>\n                <ion-list no-lines class="form-list">\n                    <ion-row>\n                        <ion-col col-6>\n                            <ion-item>\n                                <ion-label floating>Car Brand</ion-label>\n                                <ion-select [(ngModel)]="notifications" interface="action-sheet">\n                                    <ion-option selected value="Honda">Honda</ion-option>\n                                    <ion-option value="Audi">Audi</ion-option>\n                                    <ion-option value="BMW">BMW</ion-option>\n                                </ion-select>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-6>\n                            <ion-item>\n                                <ion-label floating>Car Model</ion-label>\n                                <ion-select [(ngModel)]="notifications" interface="action-sheet">\n                                    <ion-option selected value="Civik">Civik</ion-option>\n                                    <ion-option value="Luxary">Luxary</ion-option>\n                                </ion-select>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-6>\n                            <ion-item>\n                                <ion-label floating>Seat for Passanger</ion-label>\n                                <ion-select [(ngModel)]="notifications" interface="action-sheet">\n                                    <ion-option value="1">1 Seat</ion-option>\n                                    <ion-option value="2">2 Seats</ion-option>\n                                    <ion-option selected value="2">3 Seat</ion-option>\n                                </ion-select>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-6>\n                            <ion-item>\n                                <ion-label floating>Air Conditioner availibility</ion-label>\n                                <ion-select [(ngModel)]="notifications" interface="action-sheet">\n                                    <ion-option selected value="yes">AC Availible</ion-option>\n                                    <ion-option value="no">Not Availible</ion-option>\n                                </ion-select>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-6>\n                            <ion-item>\n                                <ion-label floating>Car Number</ion-label>\n                                <ion-input type="text" value="D3 34 45D" readonly></ion-input>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-6>\n                            <ion-item>\n                                <ion-label floating>Car Color</ion-label>\n                                <ion-input type="text" value="White" readonly></ion-input>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-list>\n            </div>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'reviews\'">\n            <div class="bg-white" padding style="margin-bottom: 4px;">\n                <div class="rating-box">\n                    <p>\n                        <span class="text-1">5<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 100%"></span></span>\n                        <span class="text-2">100</span>\n                    </p>\n                    <p>\n                        <span class="text-1">4<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 90%"></span></span>\n                        <span class="text-2">90</span></p>\n                    <p>\n                        <span class="text-1">3<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 70%"></span></span>\n                        <span class="text-2">60</span>\n                    </p>\n                    <p>\n                        <span class="text-1">2<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 50%"></span></span>\n                        <span class="text-2">40</span>\n                    </p>\n                    <p>\n                        <span class="text-1">1<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 20%"></span></span>\n                        <span class="text-2">20</span>\n                    </p>\n                </div>\n            </div>\n            <ion-card class="review">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <h2>Buzz Lightyear</h2>\n                    <p>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                    </p>\n                    <ion-note item-end>15 April 2017</ion-note>\n                </ion-item>\n                <ion-card-content>\n                    <div class="detail">\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n            <ion-card class="review">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <h2>Buzz Lightyear</h2>\n                    <p>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                    </p>\n                    <ion-note item-end>15 April 2017</ion-note>\n                </ion-item>\n                <ion-card-content>\n                    <div class="detail">\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-reviews',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/reviews/reviews.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>MY REVIEWS</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n            <h2>Buzz Lightyear</h2>\n            <p>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n            </p>\n            <ion-note item-end>15 April 2017</ion-note>\n        </ion-item>\n        <ion-card-content>\n            <div class="detail">\n                <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/man1.png">\n            </ion-avatar>\n            <h2>Buzz Lightyear</h2>\n            <p>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n            </p>\n            <ion-note item-end>15 April 2017</ion-note>\n        </ion-item>\n        <ion-card-content>\n            <div class="detail">\n                <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/man2.png">\n            </ion-avatar>\n            <h2>Buzz Lightyear</h2>\n            <p>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n            </p>\n            <ion-note item-end>15 April 2017</ion-note>\n        </ion-item>\n        <ion-card-content>\n            <div class="detail">\n                <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/reviews/reviews.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ReviewsPage);
    return ReviewsPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-notification',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/notification/notification.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>NOTIFICATION</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man1.png">\n        </ion-avatar>\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n        </h2>\n        <ion-note item-end>22 Feb 2018</ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man2.png">\n        </ion-avatar>\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n        </h2>\n        <ion-note item-end>22 Feb 2018</ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man3.png">\n        </ion-avatar>\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n        </h2>\n        <ion-note item-end>22 Feb 2018</ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man4.png">\n        </ion-avatar>\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n        </h2>\n        <ion-note item-end>22 Feb 2018</ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man5.png">\n        </ion-avatar>\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n        </h2>\n        <ion-note item-end>22 Feb 2018</ion-note>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/notification/notification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-terms',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/terms/terms.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-white">TEARMS & CONDITIONS</span></ion-title>\n    </ion-navbar>\n    <div class="logo">\n        <img src="assets/imgs/logo.png" alt="logo">\n    </div>\n</ion-header>\n\n<ion-content class="bg-background-img">\n    <div class="bg-white">\n        <h4 class="text-theme">Terms Of Vroom</h4>\n        <p class="text-dark">Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed.</p>\n        <p class="text-dark">Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed.</p>\n        <p class="text-dark">Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed.</p>\n\n    </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/terms/terms.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EarnPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-earn',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/earn/earn.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-white"></span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <img src="assets/imgs/menu-bg2.jpg">\n    <div padding-left padding-right>\n        <ion-card class="bg-theme">\n            <ion-card-content text-center>\n                <p class="text-white">Your Referral Code</p>\n                <h6 class="text-white">532461</h6>\n            </ion-card-content>\n        </ion-card>\n        <div padding-left padding-right padding-top padding>\n            <br>\n            <h4 class="text-theme">Refer and earn</h4>\n            <p class="text-drack">Share the referral code with your friends and family members and get 30% off on cab fare</p>\n        </div>\n        <ion-row>\n            <ion-col col-3 text-center padding>\n                <img src="assets/imgs/fb.png">\n            </ion-col>\n            <ion-col col-3 text-center padding padding>\n                <img src="assets/imgs/wpp.png">\n            </ion-col>\n            <ion-col col-3 text-center padding>\n                <img src="assets/imgs/tw.png">\n            </ion-col>\n            <ion-col col-3 text-center padding>\n                <img src="assets/imgs/more.png">\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/earn/earn.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], EarnPage);
    return EarnPage;
}());

//# sourceMappingURL=earn.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatevroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-ratevroom',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/ratevroom/ratevroom.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>RATE VROOM</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-card class="slip">\n        <div text-center>\n            <h4 class="text-dark">We hope you had a grate ride!</h4>\n            <p class="text-light">22nd Feb 2018, 12:20 pm</p>\n            <h1 class="text-theme">$ 120</h1>\n            <h4 class="text-dark">Payment has been donevia<br>your Vroom Wallet</h4>\n        </div>\n    </ion-card>\n    <ion-card class="rate">\n        <div text-center>\n            <p>So how was your experience with...</p>\n            <div class="driver">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <h2>David Johnson\n                        <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                    </h2>\n                    <p>Honda Civic | White</p>\n                </ion-item>\n                <p class="icons">\n                    <ion-icon name="ios-star"></ion-icon>\n                    <ion-icon name="ios-star"></ion-icon>\n                    <ion-icon name="ios-star"></ion-icon>\n                    <ion-icon name="ios-star"></ion-icon>\n                    <ion-icon name="ios-star"></ion-icon>\n                </p>\n                <div class="form">\n                    <ion-list no-lines>\n                        <ion-item>\n                            <ion-textarea type="text" value="Leave a feedback"></ion-textarea>\n                        </ion-item>\n                    </ion-list>\n                </div>\n                <p padding-top><button class="btn text-white bg-theme rounded" style="width: 100%;">SUBMIT RATING</button></p>\n            </div>\n        </div>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/ratevroom/ratevroom.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], RatevroomPage);
    return RatevroomPage;
}());

//# sourceMappingURL=ratevroom.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-help',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/help/help.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>HELP</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <p class="text-light" padding>choose your issue</p>\n    <ion-card>\n        <ion-card-header>\n            <h1><strong>Trips and fare</strong>\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n            </h1>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            <small>Any issue regarding your trip and fare</small>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <h1><strong>Payment</strong>\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n            </h1>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            <small>problim while paying fare or related issue</small>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <h1><strong>App Usability</strong>\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n            </h1>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            <small>Any issue while using our App</small>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <h1><strong>Account</strong>\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n            </h1>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            <small>your account info can\'t change details or change Password .</small>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/help/help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_driverauthentication_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_signup_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(141);
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
    function SignupPage(navCtrl, afDB, formBuilder, authenticationService, SignUpService, alertCtrl, AngularFireAuth) {
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.SignUpService = SignUpService;
        this.alertCtrl = alertCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.user = {};
        this.userId = null;
        this.isReadonly = true;
        this.userFirebase = this.AngularFireAuth.auth.currentUser;
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
            // if(!this.user.userId){
            //     this.user.userId = this.userFirebase.uid; //verify this because sometimes it fails
            //     debugger;
            //     console.log(this.user.userId); //remember to delete this console.log for safety reasons
            //     this.SignUpService.saveUser(this.user);
            // };
            //sending email verification and verifying weather email is verified or not
            // if(this.userFirebase.emailVerified == false){
            //     this.userFirebase.sendEmailVerification();
            //     console.log("verification email has been sent");
            // }else{ 
            //     console.log("verification email has not been sent or the email is already verifyied");
            // }
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'las contraseñas no coinciden, intenta de nuevo',
                buttons: ['OK']
            });
            alert_1.present();
        }
        // this.navCtrl.push(VerificationPage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], SignupPage.prototype, "content", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/signup/signup.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-white">SIGN UP</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n\n\n    <ion-content class="bg-background-img">\n        <div class="logo">\n            <img src="../../assets/imgs/logo waypool-01.png" alt="logo">\n        </div>\n        <form [formGroup]="signupGroup" (ngSubmit)="verification()">\n        <div class="bg-white login">\n            <div class="">\n                <ion-row>\n                    <ion-col class="click-img">\n                        <div class="form">\n                            <ion-icon name="camera"></ion-icon>\n                        </div>\n                    </ion-col>\n                    <ion-col class="name-fild">\n                        <ion-list class="form" style="margin-bottom: 0">\n                            <ion-item>\n                                <ion-label></ion-label>\n                                <ion-input  type="text"  text-right formControlName="name" placeholder= "Tú nombre"></ion-input>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label></ion-label>\n                                <ion-input type="text"  text-right  formControlName="lastname" placeholder= "Tú apellido"></ion-input>\n                            </ion-item>\n                        </ion-list>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col class="name-fild-2">\n                        <ion-list class="form">\n                            <ion-item class="editable-email">\n                                    <ion-label></ion-label>\n                                        <ion-input type="text" text-right formControlName="email" placeholder= "email"></ion-input>\n                                    </ion-item>\n                            </ion-list>\n                    </ion-col>\n                    <ion-col class="name-fild-2">\n                        <ion-list class="form">\n                            <ion-item class="nonEditable-email">\n                                    <!-- <ion-input type="email" value="@uninorte.edu.co"  text-right formControlName="fixedemail" [readonly]="isReadonly"></ion-input> -->\n                                    <ion-select formControlName="fixedemail" type="email">\n                                            <ion-option value="@uninorte.edu.co">@uninorte.edu.co</ion-option>\n                                            <ion-option value="@uniautonoma.edu.co">@uniautonoma.edu.co</ion-option>\n                                            <ion-option value="@gmail.com">@gmail.com</ion-option>\n                                        </ion-select>\n                            </ion-item>\n                        </ion-list>\n                    </ion-col>\n                </ion-row>\n                <ion-list class="form" style="margin-bottom: 0">\n                    <ion-item>\n                        <ion-label floating>contraseña nueva <span style="font-weight: bold; color: red;">(minimo 6 caracteres)</span></ion-label>\n                        <ion-input type="password"  text-right formControlName="password"  minlength="6"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label></ion-label>\n                        <ion-input type="password"  text-right formControlName="passwordconf" placeholder= "confirma tu contraseña" minlength="6"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label></ion-label>\n                        <ion-input type="text" text-right formControlName="phone" placeholder= "Tú némero de celular"></ion-input>\n                    </ion-item>\n                    <ion-row>\n                        <ion-col class="name-fild-2">\n                            <ion-list class="form">\n                                <ion-item class="carModel">\n                                        <ion-label></ion-label>\n                                            <ion-input type="text" text-right formControlName="carModel" placeholder= "marca de carro"></ion-input>\n                                        </ion-item>\n                                </ion-list>\n                        </ion-col>\n                        <ion-col class="name-fild-2">\n                            <ion-list class="form">\n                                <ion-item class="plateNumber">\n                                        <ion-input type="text"  text-right formControlName="plateNumber" placeholder= "placa de carro" ></ion-input>\n                                </ion-item>\n                            </ion-list>\n                        </ion-col>\n                    </ion-row>\n                </ion-list>\n                        <button ion-button full class="bg-theme text-white btn rounded" type="submit" [disabled]="!signupGroup.valid">¡Únete ya!</button>\n                        <p text-center>¿ya estas registrado? <strong class="text-theme" (click)="login()">Sign in</strong></p>\n            </div>\n        </div>\n    </form>\n    </ion-content>\n    \n\n\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_6__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuth"]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-upload',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/upload/upload.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>VERIFIY MY ID\n            <!--           <ion-icon name="md-search" class="text-white" style="margin-left: auto;float: right;"></ion-icon>-->\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding-right padding-left>\n    <p text-center padding-top margin-top>Upload good quality photo of your</p>\n    <h2 text-center>Licence</h2>\n\n    <ion-row>\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/v2.png">\n        </ion-col>\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/v3.png">\n        </ion-col>\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/v4.png">\n        </ion-col>\n    </ion-row>\n\n    <div text-center class="verifiy">\n        <img src="assets/imgs/v1.png">\n    </div>\n    <p padding-top class="btn-box"><button class="btn text-white bg-theme rounded" style="width: 80%;">UPLOAD NOW</button></p>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/upload/upload.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], UploadPage);
    return UploadPage;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(134);
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
            selector: 'page-code',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/code/code.html"*/'<ion-content padding>\n    <h1 text-right>\n        <ion-icon class="text-white" name="md-close" (click)="dismiss()"></ion-icon>\n    </h1>\n    <ion-card>\n        <img src="assets/imgs/menu-bg.png" />\n        <ion-card-content>\n            <div padding-top padding-right padding-left>\n                <ion-card-title class="text-theme">\n                    Do you have any referral code?\n                </ion-card-title>\n                <h5 padding-top>\n                    Add referral code and get <br> 100% cashback on first ride.\n                </h5>\n                <ion-list class="form">\n                    <ion-item class="bg-light">\n                        <ion-input type="text" placeholder="Add 6 digit referral code" class="text-light"></ion-input>\n                    </ion-item>\n                </ion-list>\n                <p><strong class="text-dark">I Dont\'have </strong><strong class="text-theme" style="float: right;" (click)="rootpage()">Continue</strong></p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/code/code.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], CodePage);
    return CodePage;
}());

//# sourceMappingURL=code.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(454);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_myride_myride__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chats_chats__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_findride_findride__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_wallet_wallet__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_more_more__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_password_password__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_verification_verification__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_code_code__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_listride_listride__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_riderprofile_riderprofile__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_confirmride_confirmride__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_confirmpopup_confirmpopup__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_raterider_raterider__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_chatting_chatting__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_reviews_reviews__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_terms_terms__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_earn_earn__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_ratevroom_ratevroom__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_help_help__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_ridetoday_ridetoday__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_upload_upload__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_car_registration_car_registration__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_status_bar__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_splash_screen__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_fire__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_fire_database__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_fire_auth__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_signup_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_driverauthentication_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_camera__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_camera___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39__ionic_native_camera__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_geofence__ = __webpack_require__(532);
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
                __WEBPACK_IMPORTED_MODULE_29__pages_ridetoday_ridetoday__["a" /* RidetodayPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_car_registration_car_registration__["a" /* CarRegistrationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/car-registration/car-registration.module#CarRegistrationPageModule', name: 'CarRegistrationPage', segment: 'car-registration', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_34__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_35__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_36__angular_fire_auth__["a" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
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
                __WEBPACK_IMPORTED_MODULE_29__pages_ridetoday_ridetoday__["a" /* RidetodayPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_car_registration_car_registration__["a" /* CarRegistrationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_37__services_signup_service__["a" /* SignUpService */],
                __WEBPACK_IMPORTED_MODULE_38__services_driverauthentication_service__["a" /* authenticationService */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_camera__["Camera"],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_geofence__["a" /* Geofence */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(85);
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
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-password',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/password/password.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>password</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <p (click)="signup()">signup</p>\n    <p (click)="password()">forgot password</p>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/password/password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_code__ = __webpack_require__(320);
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
            selector: 'page-verification',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/verification/verification.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-white">verification</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-background-img">\n    <div class="logo">\n        <img src="assets/imgs/logo.png" alt="logo">\n    </div>\n    <div class="bg-white login">\n        <div class="">\n            <p padding text-center>Enter confirmation code<br>sent to you on your SMS!</p>\n            <br>\n            <ion-list class="form" text-center>\n                <ion-item>\n                    <ion-input type="text" value="33456" text-right></ion-input>\n                </ion-item>\n            </ion-list>\n            <button ion-button full class="bg-theme text-white btn rounded" (click)="code()">Next</button>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/verification/verification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], VerificationPage);
    return VerificationPage;
}());

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-filter',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/filter/filter.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>FILTER</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <p class="text-light" padding>Shorting By</p>\n    <ion-card>\n        <ion-card-header>\n            <ion-list radio-group>\n                <ion-item>\n                    <ion-label>Rating</ion-label>\n                    <ion-radio checked="true" value="Rating"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Price</ion-label>\n                    <ion-radio value="Price"></ion-radio>\n                </ion-item>\n            </ion-list>\n        </ion-card-header>\n    </ion-card>\n    <p class="text-light" padding>Price Range</p>\n    <ion-card>\n        <ion-card-header>\n            <ion-item>\n                <ion-range dualKnobs="true" [(ngModel)]="structure" color="success">\n                    <span range-left class="left-text">$ 40</span>\n                    <span range-right class="right-text">$ 70</span>\n                </ion-range>\n            </ion-item>\n        </ion-card-header>\n    </ion-card>\n    <p class="text-light" padding>Availiblity</p>\n    <ion-card>\n        <ion-card-header>\n            <ion-list>\n                <ion-item>\n                    <ion-label>Seat Available</ion-label>\n                    <ion-select [(ngModel)]="notifications" interface="action-sheet">\n                        <ion-option selected value="1">1 Seat</ion-option>\n                        <ion-option value="2">2 Seats</ion-option>\n                        <ion-option value="3">3 Seats</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item class="check-item">\n                    <ion-checkbox></ion-checkbox>\n                    <ion-label>Air Conditioner</ion-label>\n                </ion-item>\n            </ion-list>\n        </ion-card-header>\n    </ion-card>\n    <ion-row class="fix-btn">\n        <ion-col>\n            <button class="btn rounded text-theme bg-white full">RESET</button>\n        </ion-col>\n        <ion-col>\n            <button class="btn rounded text-white bg-theme full">APPLY</button>\n        </ion-col>\n    </ion-row>\n    <div class="space">&nbsp;</div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/filter/filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmpopup_confirmpopup__ = __webpack_require__(135);
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
            selector: 'page-confirmride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/confirmride/confirmride.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>CONFIRM RIDE REQUEST</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bh-light">\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n            <div class="name">\n                <h2>David Johnson\n                    <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                </h2>\n                <p>Honda Cvic | White</p>\n            </div>\n        </ion-item>\n        <ion-card-content>\n            <div class="ride-detail">\n                <h6 class="text-theme">Location</h6>\n                <p><small>Pickup Location<ion-icon name="md-create"></ion-icon></small>\n                    <span class="icon-location bg-theme"></span>Washington sq.park New York</p>\n                <p>\n                    <small>Drop Location<ion-icon name="md-create"></ion-icon></small>\n                    <span class="icon-location bg-yellow"></span>Harison, east sq.park New York</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <div class="ride-detail no-before">\n                <h6 class="text-theme">Date & Time</h6>\n                <p><small>Date<ion-icon name="md-create"></ion-icon></small>\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n                    22<sup>nd</sup> Feb, 2018 </p>\n                <p>\n                    <small>Time</small>\n                    <ion-icon name="md-time" class="icon-location"></ion-icon>\n                    Between 12:10pm to 12:30pm</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <div class="seats">\n                <h6 class="text-theme">Fare & Seat Conformation</h6>\n                <ion-row>\n                    <ion-col col-4 class="rate">\n                        <small>Est Fare</small> $ 120\n                    </ion-col>\n                    <ion-col col-8>\n                        <div class="seats-tag">\n                            <ion-icon name="remove-circle"></ion-icon>\n                            <strong>2 Seats</strong>\n                            <ion-icon name="add-circle"></ion-icon>\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <button class="btn bg-theme text-white rounded" (click)="confirmpopup()" style="width: 100%;margin-top: 16px;">CONFIRM REQUEST</button>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/confirmride/confirmride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], ConfirmridePage);
    return ConfirmridePage;
}());

//# sourceMappingURL=confirmride.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-chatting',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/chatting/chatting.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n            <h2><span class="text-white">David Johnson</span>\n                <ion-icon name="md-more" end-item item-end class="text-white"></ion-icon>\n            </h2>\n        </ion-item>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="chat-bg">\n    <div class="cb">\n        <div class=" chat chat-right bg-white text-dark" text-right padding float-right>\n            <p>Hey David !!</p>\n            <p>Good time to talk?</p>\n            <p><small>12:33 pm</small></p>\n        </div>\n    </div>\n    <div class="cb">\n        <div class="chat chat-left bg-theme text-white" text-left padding float-left>\n            <p>Hey mate !!</p>\n            <p>Yes, tell me your query bro!</p>\n            <p><small>12:33 pm</small></p>\n        </div>\n    </div>\n    <div class="fixed-bottom">\n        <ion-list inset>\n            <ion-item>\n                <ion-icon name="md-add" class="circle-icon" item-start></ion-icon>\n                <ion-input type="text" placeholder="Type your Message"></ion-input>\n                <ion-icon name="md-send" class="text-theme" item-end></ion-icon>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/chatting/chatting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ChattingPage);
    return ChattingPage;
}());

//# sourceMappingURL=chatting.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__findride_findride__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__car_registration_car_registration__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_driverauthentication_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_signup_service__ = __webpack_require__(143);
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
        debugger;
        if (!this.receivedUser.userId) {
            this.receivedUser.userId = this.AngularFireAuth.auth.currentUser.uid; //verify this because sometimes it fails
            console.log(this.receivedUser.userId); //remember to delete this console.log for safety reasons
            this.SignUpService.saveUser(this.receivedUser);
        }
        ;
        //sending email verification and verifying weather email is verified or not
        if (this.AngularFireAuth.auth.currentUser.emailVerified == false) {
            this.AngularFireAuth.auth.currentUser.sendEmailVerification();
            console.log("verification email has been sent");
        }
        else {
            console.log("verification email has not been sent or the email is already verifyied");
        }
        ;
        this.authenticationService.loginWithEmail(this.email, this.password).then(function (data) {
            // alert("loggeado correctamente");
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
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__car_registration_car_registration__["a" /* CarRegistrationPage */]);
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__findride_findride__["a" /* FindridePage */]);
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/login/login.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-white">SIGN IN</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-background-img">\n    <div class="logo">\n        <img src="assets/imgs/logo.png" alt="logo">\n    </div>\n\n    <div class="bg-white login">\n        <div class="">\n            <ion-list class="form">\n                <ion-item>\n\n                    <ion-label></ion-label>\n                    <ion-input type="email"  text-right [(ngModel)]="email" placeholder= "email universitario"  text-right></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label></ion-label>\n                    <ion-input type="password" text-right  [(ngModel)]="password" placeholder= "Tú contraseña"  text-right></ion-input>\n                </ion-item>\n            </ion-list>\n            <button ion-button full class="bg-theme text-white btn rounded" (click)="logIn(user)">LOGIN</button>\n            <ion-row style="padding-top: 8px;">\n                <ion-col (click)="signup()"><small>New user <strong class="text-theme">Sign up</strong></small></ion-col>\n                <ion-col text-right (click)="resetPassword(email)"><small>Forgot <strong class="text-theme">Password?</strong></small></ion-col>\n            </ion-row>\n            <!-- <p text-center class="option-login"><span>OR CONTINUE WITH</span></p> -->\n            <!-- <ion-row>\n\n                <ion-col col-6><button ion-button full class="bg-blue text-white btn rounded small"><img src="assets/imgs/fb_white.png">\n                    <span>Facebook</span></button></ion-col>\n                <ion-col col-6><button ion-button full class="bg-white text-dark btn rounded small"><img src="assets/imgs/google.png">\n                    <span>Google&nbsp;&nbsp;</span></button></ion-col>\n\n            </ion-row> -->\n\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_driver_src/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__services_signup_service__["a" /* SignUpService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(142);
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

/***/ })

},[321]);
//# sourceMappingURL=main.js.map