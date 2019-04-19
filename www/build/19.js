webpackJsonp([19],{

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChattingPageModule", function() { return ChattingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatting__ = __webpack_require__(746);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChattingPageModule = /** @class */ (function () {
    function ChattingPageModule() {
    }
    ChattingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chatting__["a" /* ChattingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chatting__["a" /* ChattingPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__chatting__["a" /* ChattingPage */]
            ]
        })
    ], ChattingPageModule);
    return ChattingPageModule;
}());

//# sourceMappingURL=chatting.module.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chat_service__ = __webpack_require__(341);
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
    function ChattingPage(navCtrl, ChatsService, navParams, AngularFireAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.ChatsService = ChatsService;
        this.navParams = navParams;
        this.AngularFireAuth = AngularFireAuth;
        this.driverUid = this.AngularFireAuth.auth.currentUser.uid;
        this.chats = [];
        this.user = this.navParams.get('user');
        console.log(this.user.userId);
        this.ChatsService.getChats(this.driverUid, this.user.userId)
            .subscribe(function (chat) {
            _this.chats = chat;
            console.log(_this.chats);
        });
    }
    ChattingPage.prototype.sendMessage = function () {
        this.ChatsService.pushMessage(this.driverUid, this.user.userId, this.message);
    };
    ChattingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatting',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/chatting/chatting.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n            <h2><span class="text-white">{{user.name |titlecase}} {{user.lastname | slice:0:1 | titlecase}}</span>\n                <ion-icon name="md-more" end-item item-end class="text-white"></ion-icon>\n            </h2>\n        </ion-item>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="chat-bg">\n    <div *ngFor="let chat of chats">\n            <div  class="cb" >        \n                    <div>                        \n                         <div *ngIf="driverUid === chat.uid" class="chat chat-left bg-theme text-white" text-left padding float-right>\n                         <!-- its driver message -->\n                             <p>{{chat.message}}</p>   \n                       </div>                       \n                   </div>                    \n                </div>\n                <div class="cb">            \n                    <div>   \n                        <div *ngIf="chat.uid === user.userId" class="chat chat-right bg-white text-dark" text-right padding float-left>  \n                            <!-- its user message -->\n                             <p>{{chat.message}}</p>  \n                           \n                         </div>\n                    </div>                  \n                </div>\n    </div>\n    \n    <div class="fixed-bottom">\n        <ion-list inset>\n            <ion-item>\n                <ion-icon name="md-add" class="circle-icon" item-start></ion-icon>\n                <ion-input type="text" placeholder="Escribe tu mensaje" [(ngModel)]="message"></ion-input>\n                <ion-icon name="md-send" class="text-theme" item-end (click)="sendMessage()"></ion-icon>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/chatting/chatting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_chat_service__["a" /* ChatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], ChattingPage);
    return ChattingPage;
}());

//# sourceMappingURL=chatting.js.map

/***/ })

});
//# sourceMappingURL=19.js.map