webpackJsonp([27],{

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(57);
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
    SignUpService.prototype.getMyInfo = function (university, userId) {
        return this.afDB.object(university + '/drivers/' + userId).valueChanges();
    };
    SignUpService.prototype.getInfoUniversity = function (university) {
        return this.afDB.object('/universities/' + university).valueChanges();
    };
    SignUpService.prototype.getUniversities = function () {
        return this.afDB.list('universities/').valueChanges();
    };
    SignUpService.prototype.pushDocsL = function (university, userId) {
        this.afDB.database.ref(university + '/drivers/' + userId + '/documents').update({
            license: false
        });
    };
    SignUpService.prototype.pushDocsCarne = function (university, userId) {
        this.afDB.database.ref(university + '/drivers/' + userId + '/documents').update({
            carne: false
        });
        this.afDB.database.ref(university + '/users/' + userId + '/documents').update({
            carne: false
        });
    };
    SignUpService.prototype.pushDocsId = function (university, userId) {
        this.afDB.database.ref(university + '/drivers/' + userId + '/documents').update({
            id: false
        });
        this.afDB.database.ref(university + '/users/' + userId + '/documents').update({
            id: false
        });
    };
    SignUpService.prototype.emailVerificationMessage = function (university, user) {
        this.afDB.database.ref(university + '/drivers/' + user).update({
            emailVerificationMessage: true
        });
    };
    SignUpService.prototype.getMyInfoDriver = function (university, userId) {
        return this.afDB.object(university + '/drivers/' + userId).valueChanges();
    };
    SignUpService.prototype.getInfoUser = function (university, userId) {
        return this.afDB.object(university + '/users/' + userId).valueChanges();
    };
    SignUpService.prototype.saveUser = function (university, user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.afDB.database.ref(university + '/drivers/' + user.userId).update(user);
                this.afDB.database.ref(university + '/users/' + user.userId).update(user);
                return [2 /*return*/];
            });
        });
    };
    SignUpService.prototype.getMyInfoForProfile = function (university, userId) {
        return this.afDB.object(university + '/drivers/' + userId).valueChanges();
    };
    SignUpService.prototype.saveInfoProfilePhone = function (university, userUid, phone) {
        //permite configurar la información del perfil
        this.afDB.database.ref(university + '/drivers/' + userUid).update({
            phone: phone
        });
    };
    SignUpService.prototype.saveInfoProfileAbout = function (university, userUid, about) {
        //permite configurar la información del perfil
        this.afDB.database.ref(university + '/drivers/' + userUid).update({
            about: about
        });
    };
    SignUpService.prototype.saveInfoProfileUrl = function (university, userUid, url) {
        //permite configurar la información del perfil
        this.afDB.database.ref(university + '/drivers/' + userUid).update({
            url: url
        });
    };
    SignUpService.prototype.deleteAccount = function (university, userUid) {
        this.afDB.database.ref(university + '/drivers/' + userUid).remove();
        this.afDB.database.ref(university + '/users/' + userUid).remove();
    };
    SignUpService.prototype.addCar = function (university, DriverUid, carModel, plateNumber, color) {
        var _this = this;
        this.afDB.database.ref(university + '/drivers/' + DriverUid + '/cars/').push({
            carModel: carModel,
            plateNumber: plateNumber,
            color: color
        }).then(function (snap) {
            var key = snap.key;
            _this.afDB.database.ref(university + '/drivers/' + DriverUid + '/cars/' + key).update({
                keyCar: key
            });
        });
    };
    SignUpService.prototype.deleteCar = function (university, driverUid, carKey) {
        this.afDB.database.ref(university + '/drivers/' + driverUid + '/cars/' + carKey).remove();
    };
    SignUpService.prototype.addCarProfile = function (university, userUid, car) {
        this.afDB.database.ref(university + '/drivers/' + userUid + '/cars/').push(car);
    };
    SignUpService.prototype.getCar = function (university, userId) {
        return this.afDB.list(university + '/drivers/' + userId + '/cars').valueChanges();
    };
    SignUpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], SignUpService);
    return SignUpService;
}());

//# sourceMappingURL=signup.service.js.map

/***/ }),

/***/ 225:
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
webpackEmptyAsyncContext.id = 225;

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/canceltrip/canceltrip.module": [
		592,
		26
	],
	"../pages/car-registration-login/car-registration-login.module": [
		593,
		25
	],
	"../pages/car-registration/car-registration.module": [
		594,
		24
	],
	"../pages/chats/chats.module": [
		595,
		23
	],
	"../pages/chatting/chatting.module": [
		596,
		22
	],
	"../pages/confirm-university/confirm-university.module": [
		597,
		21
	],
	"../pages/confirmprice/confirmprice.module": [
		612,
		3
	],
	"../pages/confirmreserve/confirmreserve.module": [
		599,
		20
	],
	"../pages/confirmtrip/confirmtrip.module": [
		598,
		19
	],
	"../pages/findride/findride.module": [
		618,
		18
	],
	"../pages/help/help.module": [
		601,
		17
	],
	"../pages/login/login.module": [
		602,
		16
	],
	"../pages/more/more.module": [
		600,
		15
	],
	"../pages/myride/myride.module": [
		616,
		2
	],
	"../pages/pickup/pickup.module": [
		613,
		1
	],
	"../pages/profile/profile.module": [
		603,
		14
	],
	"../pages/public-profile/public-profile.module": [
		605,
		13
	],
	"../pages/ratetrip/ratetrip.module": [
		604,
		12
	],
	"../pages/reservetrip/reservetrip.module": [
		614,
		0
	],
	"../pages/showinfocar/showinfocar.module": [
		606,
		11
	],
	"../pages/signup/signup.module": [
		615,
		10
	],
	"../pages/support/support.module": [
		611,
		9
	],
	"../pages/tabs/tabs.module": [
		607,
		8
	],
	"../pages/terms/terms.module": [
		608,
		7
	],
	"../pages/verification-images/verification-images.module": [
		609,
		6
	],
	"../pages/verification-number/verification-number.module": [
		610,
		5
	],
	"../pages/wallet/wallet.module": [
		617,
		4
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
webpackAsyncContext.id = 267;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
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
    function authenticationService(angularFireAuth, afDB) {
        this.angularFireAuth = angularFireAuth;
        this.afDB = afDB;
    }
    authenticationService.prototype.loginWithEmail = function (email, password) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    };
    authenticationService.prototype.sendVerificationCodeToFirebase = function (university, userId, code) {
        this.afDB.database.ref(university + '/drivers/' + userId).update({
            verificationCode: code
        });
    };
    authenticationService.prototype.deleteVerificationCode = function (university, userId) {
        this.afDB.database.ref(university + '/drivers/' + userId + '/verificationCode/').remove();
    };
    authenticationService.prototype.resendVerificationCode = function (university, userId) {
        this.afDB.database.ref(university + '/drivers/' + userId).update({
            resendVerificationCode: true
        });
    };
    authenticationService.prototype.deleteverificationCodeApproval = function (university, userId) {
        this.afDB.database.ref(university + '/drivers/' + userId + '/verificationCodeApproval/').remove();
    };
    authenticationService.prototype.deleteResendCode = function (university, userId) {
        this.afDB.database.ref(university + '/drivers/' + userId + '/resendVerificationCode/').remove();
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]])
    ], authenticationService);
    return authenticationService;
}());

//# sourceMappingURL=driverauthentication.service.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendCoordsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(27);
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


// import { UrlSerializer } from "ionic-angular";
// import { useAnimation } from "@angular/core/src/animation/dsl";
// import * as firebase from 'firebase';
// import { AngularFireAuth } from "angularfire2/auth";
var sendCoordsService = /** @class */ (function () {
    function sendCoordsService(afDB) {
        this.afDB = afDB;
    }
    sendCoordsService.prototype.getPendingUsers = function (university, userUid, pushKey) {
        return this.afDB.list(university + '/reserves/' + userUid + '/' + pushKey + '/pendingUsers').valueChanges();
    };
    sendCoordsService.prototype.getSpecificReserves = function (userUid, pushKey) {
        return this.afDB.object('/reserves/' + userUid + '/' + pushKey).valueChanges();
    };
    sendCoordsService.prototype.eraseUser = function (university, userId, DriverUid, pushKey) {
        this.afDB.database.ref(university + '/reserves/' + DriverUid + '/' + pushKey + '/pendingUsers/' + userId).remove();
    };
    sendCoordsService.prototype.getDestination = function (university, user) {
        return this.afDB.list(university + '/drivers/' + user + '/trips/destination').valueChanges();
    };
    sendCoordsService.prototype.getOrigin = function (university, user) {
        return this.afDB.list(university + '/drivers/' + user + '/trips/origin').valueChanges();
    };
    sendCoordsService.prototype.pushcoordinatesReserves = function (user, dest, or) {
        this.afDB.database.ref('drivers/' + user + '/Reserves').push({
            orReserve: or,
            destReserve: dest,
        });
    };
    sendCoordsService.prototype.pushcoordinatesDrivers = function (university, user, dest, or) {
        this.afDB.database.ref(university + '/drivers/' + user + '/trips').update({
            origin: or,
            destination: dest,
        });
    };
    sendCoordsService.prototype.recordTripOnDriver = function (university, userUid, trip) {
        this.afDB.database.ref(university + '/drivers/' + userUid + '/recordTrips/').push(trip);
    };
    sendCoordsService.prototype.recordTripOnUser = function (university, userDriverUid, trip) {
        this.afDB.database.ref(university + '/users/' + userDriverUid + '/recordTrips/').push(trip);
    };
    sendCoordsService.prototype.recordTripOnWaypool = function (university, trip) {
        this.afDB.database.ref(university + '/allTrips/').push(trip);
    };
    sendCoordsService.prototype.timeOfPickedUpUser = function (userUid, date) {
        //set time when user is picked up in user's trips
        this.afDB.database.ref('/users/' + userUid + '/trips/').update({
            pickedUpTime: date
        });
    };
    sendCoordsService.prototype.timeOfPickedUpDriver = function (userDriverUid, date, userUid) {
        //set time when user is picked up in driver's trips
        this.afDB.database.ref('/drivers/' + userDriverUid + '/trips/pickedUpUsers/' + userUid).update({
            pickedUpTime: date
        });
    };
    sendCoordsService.prototype.timeOfDestinationUser = function (userUid, date) {
        this.afDB.database.ref('/users/' + userUid + '/trips/').update({
            DestinationTime: date
        });
    };
    sendCoordsService.prototype.pushPriceOnUser = function (userDriverUid, userUid, price) {
        this.afDB.database.ref('/drivers/' + userDriverUid + '/trips/pickedUpUsers/' + userUid).update({
            price: price
        });
    };
    sendCoordsService.prototype.updateGeolocationOrigin = function (user, origin) {
        this.afDB.database.ref('drivers/' + user + '/trips').update({
            origin: origin
        });
    };
    sendCoordsService.prototype.endTripDriverPickingUsers = function (university, DriverUid) {
        this.afDB.database.ref(university + '/drivers/' + DriverUid + '/trips/pickingUsers').remove();
    };
    sendCoordsService.prototype.eraseChatsUsers = function (university, userId, DriverUid) {
        this.afDB.database.ref(university + 'drivers/' + DriverUid + '/trips/pickingUsers/' + userId + '/chat').remove();
    };
    sendCoordsService.prototype.endTripDriverPickedUpUsers = function (university, DriverUid) {
        this.afDB.database.ref(university + '/drivers/' + DriverUid + '/trips/pickedUpUsers').remove();
    };
    sendCoordsService.prototype.endTripUserPickingUsers = function (userUid) {
        this.afDB.database.ref('users/' + userUid + '/trips/pickingUsers').remove();
    };
    sendCoordsService.prototype.endTripUserPickedUpUsers = function (university, userUid) {
        this.afDB.database.ref(university + '/users/' + userUid + '/trips/pickedUpUsers').remove();
    };
    sendCoordsService.prototype.endTripUserOnTripInstance = function (university, userUid) {
        this.afDB.database.ref(university + '/users/' + userUid + '/trips/onTrip').remove();
    };
    sendCoordsService.prototype.endTripUserPickupInstance = function (university, userUid) {
        this.afDB.database.ref(university + '/users/' + userUid + '/trips/pickedUp').remove();
    };
    sendCoordsService.prototype.endTripUserDriverListRide = function (university, userUid) {
        this.afDB.database.ref(university + '/users/' + userUid + '/trips/driverListRide').remove();
    };
    sendCoordsService.prototype.pickUp = function (DriverUid, userId, user) {
        // add the driver to pickedUpUsers 
        this.afDB.database.ref('/drivers/' + DriverUid + '/trips/pickedUpUsers/' + userId).update(user);
    };
    // TODO: DRIVER NO PUEDE ENTRAR TODO, SOLO DRIVERINFO (UNA PARTE DEL DRIVER, PREGUNTAR DANIEL QUE INFO)
    sendCoordsService.prototype.addReserve = function (driverId, name, lastname, car, dest, or, note, price, currentHour, startHour, geofireKey, type) {
        var _this = this;
        this.afDB.database.ref('/reserves/' + driverId).push({
            name: name,
            lastname: lastname,
            car: car,
            destination: dest,
            origin: or,
            note: note,
            price: price,
            currentHour: currentHour,
            startHour: startHour,
            geofireKey: geofireKey,
            type: type,
        }).then(function (snap) {
            var key = snap.key;
            _this.afDB.database.ref('/reserves/' + driverId + '/' + key).update({
                keyTrip: key
            });
            _this.afDB.database.ref('/drivers/' + driverId).update({
                keyLastReserve: key
            });
            console.log(' keylastreserve');
        });
    };
    sendCoordsService.prototype.pickUpInstance = function (userId) {
        // driver add pickup instance to the user when picked up
        this.afDB.database.ref('/users/' + userId + '/trips').update({
            pickedUp: true
        });
    };
    sendCoordsService.prototype.eliminateOnTrip = function (userId) {
        this.afDB.database.ref('/drivers/' + userId).update({
            onTrip: false
        });
    };
    sendCoordsService.prototype.eliminateOnTripUser = function (userId) {
        this.afDB.database.ref('/users/' + userId + '/trips').update({
            onTrip: false
        });
    };
    sendCoordsService.prototype.pushOnTripFinalUser = function (university, userId) {
        this.afDB.database.ref(university + '/users/' + userId).update({
            onTripFinal: true
        });
    };
    sendCoordsService.prototype.eliminatePickingUsers = function (DriverUid, userId) {
        //eliminate the user from pickingUsers
        this.afDB.database.ref('/drivers/' + DriverUid + '/trips/pickingUsers/' + userId).remove();
    };
    sendCoordsService.prototype.eliminatePickingUsersUser = function (userId) {
        this.afDB.database.ref('/users/' + userId + '/trips/pickingUsers').remove();
    };
    sendCoordsService.prototype.sumTotal = function (trip, total) {
        total = total + trip;
    };
    sendCoordsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]])
    ], sendCoordsService);
    return sendCoordsService;
}());

//# sourceMappingURL=sendCoords.service.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendUsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(27);
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


// import { UrlSerializer } from "ionic-angular";
// import { useAnimation } from "@angular/core/src/animation/dsl";
// import * as firebase from 'firebase';
// import { AngularFireAuth } from "angularfire2/auth";
var sendUsersService = /** @class */ (function () {
    function sendUsersService(afDB) {
        this.afDB = afDB;
    }
    sendUsersService.prototype.getUsersOnListRide = function (userUid) {
        // Get all the students from the usersListRide
        return this.afDB.list('/drivers/' + userUid + '/trips/usersListRide').valueChanges();
    };
    sendUsersService.prototype.getTripsOfReserves = function (university, userUid) {
        // Get all the trips the driver have reserve
        return this.afDB.list(university + '/reserves/' + userUid).valueChanges();
    };
    sendUsersService.prototype.getUsersOnTrip = function (university, userUid) {
        // Get all the students the driver acepts in myListRidePage to be send to the students
        return this.afDB.list(university + '/drivers/' + userUid + '/trips/pickingUsers').valueChanges();
    };
    sendUsersService.prototype.getPickUpUsers = function (university, userUid) {
        //get all the users from the pickUpUsers []
        return this.afDB.list(university + '/drivers/' + userUid + '/trips/pickedUpUsers').valueChanges();
    };
    sendUsersService.prototype.removeReserve = function (driverId, keyReserve) {
        //remove the reserve done
        this.afDB.database.ref('/reserves/' + driverId + '/' + keyReserve).remove();
    };
    sendUsersService.prototype.removeUsersOnListRideTotal = function (university, userUid) {
        //send the information of every student the driver acepts in myRide
        this.afDB.database.ref(university + '/drivers/' + userUid + '/trips/usersListRide/').remove();
    };
    sendUsersService.prototype.removeUsersOnPickingUsers = function (university, userUid, userId) {
        //send the information of every student the driver acepts in myRide
        this.afDB.database.ref(university + '/drivers/' + userUid + '/trips/pickingUsers/' + userId).remove();
        this.afDB.database.ref(university + '/users/' + userId + '/trips/pickingUsers/driver/' + userUid).remove();
    };
    sendUsersService.prototype.pushPickingUpUsersOnDrivers = function (university, userUid, userId, origin, destination, name, lastname, phone, about) {
        //send the information of every student the driver acepts in myRide
        this.afDB.database.ref(university + '/drivers/' + userUid + '/trips/pickingUsers/' + userId).update({
            origin: origin,
            destination: destination,
            name: name,
            lastname: lastname,
            phone: phone,
            userId: userId,
            about: about
        });
    };
    sendUsersService.prototype.pushDriverOnUsers = function (university, userUid, userId, origin, destination, name, lastname, phone, price, car, about) {
        //send the driver information to the students
        this.afDB.database.ref(university + '/users/' + userId + '/trips/pickingUsers/driver/' + userUid).update({
            origin: origin,
            destination: destination,
            name: name,
            lastname: lastname,
            phone: phone,
            userId: userUid,
            car: car,
            price: price,
            about: about
        });
    };
    sendUsersService.prototype.pushTripOnRecordDriver = function (userUid) {
        //historial
        this.afDB.database.ref('/drivers/' + userUid + '/trips').push();
    };
    sendUsersService.prototype.getRecordTrips = function (university, userUid) {
        return this.afDB.list(university + '/drivers/' + userUid + '/recordTrips/').valueChanges();
    };
    sendUsersService.prototype.badgeTrue = function (userUid) {
        this.afDB.database.ref('/drivers/' + userUid).update({
            badgePicking: true
        });
    };
    sendUsersService.prototype.badgeFalse = function (userUid) {
        this.afDB.database.ref('/drivers/' + userUid).update({
            badgePicking: false
        });
    };
    sendUsersService.prototype.badgeTrueOntrip = function (userUid) {
        this.afDB.database.ref('/drivers/' + userUid).update({
            badgeOntrip: true
        });
    };
    sendUsersService.prototype.badgeFalseOntrip = function (userUid) {
        this.afDB.database.ref('/drivers/' + userUid).update({
            badgeOntrip: false
        });
    };
    sendUsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]])
    ], sendUsersService);
    return sendUsersService;
}());

//# sourceMappingURL=sendUsers.service.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(57);
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



var TripsService = /** @class */ (function () {
    function TripsService(afDB, AngularFireAuth) {
        this.afDB = afDB;
        this.AngularFireAuth = AngularFireAuth;
    }
    TripsService.prototype.getTrip = function (university, keyTrip, driverUid) {
        //get trip in Trip's node
        return this.afDB.object(university + '/trips/' + driverUid + '/' + keyTrip).valueChanges();
    };
    TripsService.prototype.getPendingUsers = function (university, keyTrip, driverUid) {
        //get trip in Trip's node
        return this.afDB.list(university + '/trips/' + driverUid + '/' + keyTrip + '/pendingUsers').valueChanges();
    };
    TripsService.prototype.getKeyTrip = function (university, driverUid) {
        //get key of driver's trip
        return this.afDB.object(university + '/drivers/' + driverUid + '/keyTrip').valueChanges();
    };
    TripsService.prototype.getOnTrip = function (university, userUid) {
        return this.afDB.object(university + '/drivers/' + userUid + '/onTrip').valueChanges();
    };
    TripsService.prototype.getSpecificUser = function (university, keyTrip, driverUid, userId) {
        //get trip in Trip's node
        return this.afDB.list(university + '/trips/' + driverUid + '/' + keyTrip + '/pendingUsers/' + userId).valueChanges();
    };
    TripsService.prototype.getReserveUsers = function (university, keyTrip, driverUid) {
        //get trip in Trip's node
        return this.afDB.list(university + '/reserves/' + driverUid + '/' + keyTrip + '/pendingUsers').valueChanges();
    };
    TripsService.prototype.getLastMinuteUsers = function (university, keyTrip, driverUid) {
        //get trip in Trip's node
        return this.afDB.list(university + '/trips/' + driverUid + '/' + keyTrip + '/lastMinuteUsers').valueChanges();
    };
    TripsService.prototype.getPickedUpUsers = function (university, keyTrip, driverUid) {
        //get trip in Trip's node
        return this.afDB.list(university + '/trips/' + driverUid + '/' + keyTrip + '/pickedUpUsers').valueChanges();
    };
    TripsService.prototype.startTripForUsers = function (university, keyTrip, userId, driverId) {
        //create a trip in Trip's node in database     
        this.afDB.database.ref(university + '/users/' + userId).update({
            onTrip: true
        });
        this.afDB.database.ref(university + '/users/' + userId + '/keyTrip').update({
            keyTrip: keyTrip,
            driverId: driverId
        });
    };
    TripsService.prototype.startTrip = function (university, keyTrip, driverUid, trip) {
        //create a trip in Trip's node in database
        this.afDB.database.ref(university + '/trips/' + driverUid + '/' + keyTrip).update(trip);
    };
    TripsService.prototype.acceptLastMinute = function (university, driverUid, keyTrip, user) {
        this.afDB.database.ref(university + '/trips/' + driverUid + '/' + keyTrip + '/pendingUsers/' + user.userId).update(user);
    };
    TripsService.prototype.noRepeatLMU = function (university, driverUid, keyTrip, userId) {
        this.afDB.database.ref(university + '/trips/' + driverUid + '/' + keyTrip + '/lastMinuteUsers/' + userId).update({
            noRepeat: true
        });
    };
    TripsService.prototype.eliminateLastMinuteUser = function (university, driverUid, keyTrip, userId) {
        //eliminate the user from pendingUsers
        this.afDB.database.ref(university + '/trips/' + driverUid + '/' + keyTrip + '/lastMinuteUsers/' + userId).remove();
    };
    TripsService.prototype.deleteReserve = function (university, keyTrip, driverUid) {
        this.afDB.database.ref(university + '/reserves/' + driverUid + '/' + keyTrip).remove();
    };
    TripsService.prototype.pushKeyInDriver = function (university, keyTrip, DriverUid) {
        //push a key of the trip to the driver, in this way the driver can acces the trip in Trip's node
        this.afDB.database.ref(university + '/drivers/' + DriverUid).update({
            keyTrip: keyTrip
        });
    };
    TripsService.prototype.pushOnTripInDriver = function (university, DriverUid) {
        //push a onTrip in Driver's node
        this.afDB.database.ref(university + '/drivers/' + DriverUid).update({
            onTrip: true
        });
    };
    TripsService.prototype.eliminatePendingUsers = function (university, keyTrip, driverUid, userId) {
        //eliminate the user from pendingUsers
        this.afDB.database.ref(university + '/trips/' + driverUid + '/' + keyTrip + '/pendingUsers/' + userId).remove();
    };
    TripsService.prototype.pickUp = function (university, keyTrip, driverUid, userId, user) {
        // add the driver to pickedUpUsers 
        this.afDB.database.ref(university + '/trips/' + driverUid + '/' + keyTrip + '/pickedUpUsers/' + userId).update(user);
    };
    TripsService.prototype.createTripState = function (university, keyTrip, driverUid) {
        this.afDB.database.ref(university + '/tripsState/' + driverUid + '/' + keyTrip).update({
            saveTrip: false,
            canceledTrip: false
        });
    };
    TripsService.prototype.eliminateTripState = function (university, keyTrip, driverUid) {
        this.afDB.database.ref(university + '/tripsState/' + driverUid + '/' + keyTrip).remove();
    };
    TripsService.prototype.timeFinishedTrip = function (university, keyTrip, driverUid, date) {
        //set time when driver go to destination 
        this.afDB.database.ref(university + '/trips/' + driverUid + '/' + keyTrip).update({
            DestinationTime: date
        });
    };
    TripsService.prototype.endTrip = function (university, keyTrip, driverUid) {
        //erase trip in trip's node
        this.afDB.database.ref(university + '/trips/' + driverUid + '/' + keyTrip).remove();
    };
    TripsService.prototype.setOnTripFalse = function (university, driverUid) {
        // set false to onTrip instance in driver's node
        this.afDB.database.ref(university + '/drivers/' + driverUid).update({
            onTrip: false
        });
    };
    TripsService.prototype.setOnTrip = function (university, driverUid) {
        // set false to onTrip instance in driver's node
        this.afDB.database.ref(university + '/drivers/' + driverUid).update({
            onTrip: true
        });
    };
    TripsService.prototype.endTripForUsers = function (university, userId) {
        //erase trip in users's node
        this.afDB.database.ref(university + '/users/' + userId + '/keyTrip').remove();
        this.afDB.database.ref(university + '/users/' + userId + '/onTrip').remove();
    };
    TripsService.prototype.saveTripUser = function (university, driverUid, keyTrip) {
        // this instance allows the user to save the trip in his records
        this.afDB.database.ref(university + '/tripsState/' + driverUid + '/' + keyTrip).update({
            saveTrip: true
        });
    };
    TripsService.prototype.getTripState = function (university, reserveId, driverId) {
        return this.afDB.object(university + '/tripsState/' + driverId + '/' + reserveId + '/').valueChanges();
    };
    TripsService.prototype.eraseKeyTrip = function (university, driverUid) {
        // erase keyTrip in driver's node
        this.afDB.database.ref(university + '/drivers/' + driverUid + '/keyTrip').remove();
    };
    TripsService.prototype.cancelUserFromTrip = function (university, driverUid, keyTrip, userId) {
        //eliminate credentials from database
        // this.afDB.database.ref(university + '/users/' + userId +'/keyTrip').remove();
        // this.afDB.database.ref(university + '/users/' + userId +'/onTrip').remove();
        // save user in cancelUsers array
        this.afDB.database.ref(university + '/tripsState/' + driverUid + '/' + keyTrip + '/cancelUsers/' + userId).update({
            userId: userId
        });
        //eliminate the user from pendingUsers
        this.afDB.database.ref(university + '/trips/' + driverUid + '/' + keyTrip + '/pendingUsers/' + userId).remove();
    };
    TripsService.prototype.saveTripOnRecords = function (university, driverUid, trip) {
        //save trip in recordTrips
        this.afDB.database.ref(university + '/drivers/' + driverUid + '/recordTrips/').push(trip);
    };
    TripsService.prototype.cancelReserve = function (university, driverUid, keyTrip) {
        this.afDB.database.ref(university + '/reserves/' + driverUid + '/' + keyTrip).remove();
        console.log("hola");
    };
    TripsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]) === "function" && _b || Object])
    ], TripsService);
    return TripsService;
    var _a, _b;
}());

//# sourceMappingURL=trips.service.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return geofireService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_geofire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var geofireService = /** @class */ (function () {
    function geofireService(afDB, AngularFireAuth) {
        this.afDB = afDB;
        this.AngularFireAuth = AngularFireAuth;
        this.driverUid = this.AngularFireAuth.auth.currentUser.uid;
    }
    // setGeofireDest( radius:number, lat, lng, geofirename, driverId, keyReserve):void{ 
    //   this.proofToCancelDest = this.variableName(geofirename);
    //   this.dbRef = this.afDB.database.ref('geofireDest/' );
    //   this.geoFire = new GeoFire(this.dbRef); 
    //   this.geoquery1 = this.geoFire.query({
    //     center: [lat, lng],
    //     radius: radius
    //   })
    //   this.keyEnteredDest( driverId, keyReserve);
    //   this.keyExitedDest(keyReserve);
    // console.log('geoquery dest added');
    // }
    // variableName(variable){
    //   var variableName = variable;
    //   return variableName;
    // }
    // setGeofireOr( radius:number, lat, lng, geofirename, driverId, keyReserve):void{ 
    //   this.proofToCancelOr = this.variableName(geofirename);
    //   this.dbRef = this.afDB.database.ref('geofireOr/' );
    //   this.geoFire = new GeoFire(this.dbRef); 
    //   this.geoquery2 = this.geoFire.query({
    //     center: [lat, lng],
    //     radius: radius
    //   })
    //   this.keyEnteredOr( driverId, keyReserve);
    //   this.keyExitedOr(keyReserve);
    //   // if(this.geoquery1){
    //   //   this.geoquery1.cancel();
    //   // }
    //   console.log('geoquery or added');
    // }
    ///////////
    geofireService.prototype.setGeofireOrNEWTEST = function (university, key, lat, lng) {
        this.dbRef = this.afDB.database.ref(university + '/geofireOr/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    geofireService.prototype.setGeofireDestNEWTEST = function (university, key, lat, lng) {
        this.dbRef = this.afDB.database.ref(university + '/geofireDest/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    geofireService.prototype.setGeofireOrOnTrip = function (university, key, lat, lng) {
        this.dbRef = this.afDB.database.ref(university + '/geofireOrTrip/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    geofireService.prototype.setGeofireDestOnTrip = function (university, key, lat, lng) {
        this.dbRef = this.afDB.database.ref(university + '/geofireDestTrip/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    ////////////////////
    //JUAN DAVID: created a sub-node "availableRserves" inside users node, so they are able to read the reserves from their node
    geofireService.prototype.keyEnteredDest = function (driverId, keyReserve) {
        this.geoquery1.on("key_entered", function (key, location, distance) {
            var _this = this;
            console.log(key);
            setTimeout(function () {
                _this.afDB.database.ref('/users/' + key + '/availableReserves/' + keyReserve).update({
                    driverId: driverId,
                    keyReserve: keyReserve
                });
                console.log('keyentered here');
            }, 3000);
        }.bind(this));
    };
    geofireService.prototype.keyExitedDest = function (keyReserve) {
        this.geoquery1.on("key_exited", function (key) {
            this.afDB.database.ref('/users/' + key + '/availableReserves/' + keyReserve).remove();
        }.bind(this));
    };
    //JUAN DAVID: created a sub-node "availableRserves" inside users node, so they are able to read the reserves from their node
    geofireService.prototype.keyEnteredOr = function (driverId, keyReserve) {
        this.geoquery2.on("key_entered", function (key, location, distance) {
            console.log(key);
            this.afDB.database.ref('/users/' + key + '/availableReserves/' + keyReserve).update({
                driverId: driverId,
                keyReserve: keyReserve
            });
            this.afDB.database.ref('/reservesInfoInCaseOfCancelling/' + driverId + '/' + keyReserve).push({
                userId: key
            });
        }.bind(this));
    };
    geofireService.prototype.keyExitedOr = function (keyReserve) {
        this.geoquery2.on("key_exited", function (key) {
            this.afDB.database.ref('/users/' + key + '/availableReserves/' + keyReserve).remove();
        }.bind(this));
    };
    geofireService.prototype.getMyInfo = function (userId) {
        return this.afDB.object('drivers/' + userId).valueChanges();
    };
    geofireService.prototype.getMyReserves = function (driverId) {
        return this.afDB.list('/reserves/' + driverId).valueChanges();
    };
    geofireService.prototype.getUsersGeofire = function () {
        return this.afDB.list('/drivers/' + this.driverUid + '/trips/usersListRide/').valueChanges();
    };
    geofireService.prototype.deleteUserListRide = function (university, driverId, userId) {
        this.afDB.database.ref(university + '/drivers/' + driverId + '/trips/usersListRide/' + userId).remove();
    };
    geofireService.prototype.deleteUserListRideTotal = function (driverId) {
        this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/').remove();
    };
    geofireService.prototype.onTripUserListRide = function (driverId, userId) {
        this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + userId).update({
            onTrip: true
        });
    };
    geofireService.prototype.deleteUserGeofireDest = function (university, keyTrip) {
        this.afDB.database.ref(university + '/geofireDest/' + keyTrip).remove().then(function () {
            console.log("GeofireDest succesfully removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    geofireService.prototype.deleteUserGeofireOr = function (university, keyTrip) {
        this.afDB.database.ref(university + '/geofireOr/' + keyTrip).remove().then(function () {
            console.log("GeofireOr succesfully removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    geofireService.prototype.deleteUserGeofireOrTrip = function (university, keyTrip) {
        this.afDB.database.ref(university + '/geofireOrTrip/' + keyTrip).remove().then(function () {
            console.log("geofireOrTrip succesfully removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    geofireService.prototype.deleteUserGeofireDestTrip = function (university, keyTrip) {
        this.afDB.database.ref(university + '/geofireDestTrip/' + keyTrip).remove().then(function () {
            console.log("geofireDestTrip succesfully removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    geofireService.prototype.getInfoUser = function (userId) {
        return this.afDB.object('users/' + userId).valueChanges();
    };
    geofireService.prototype.cancelGeoqueryDest = function (geofirename) {
        if (this.proofToCancelDest === geofirename) {
            if (this.geoquery1) {
                this.geoquery1.cancel();
                console.log('geoqueryDest deleted');
            }
            else {
                console.log('dont dest query');
            }
        }
    };
    geofireService.prototype.cancelGeoqueryOr = function (geofirename) {
        if (this.proofToCancelOr === geofirename) {
            if (this.geoquery2) {
                this.geoquery2.cancel();
                console.log('geoqueryOr deleted');
            }
            else {
                console.log('dont or query');
            }
        }
    };
    // set a new node on firebase which is the location of the university
    geofireService.prototype.setLocationUniversity = function (university, key, lat, lng) {
        this.dbRef = this.afDB.database.ref(university + '/geofireUniversity/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    // set geoquery that determines if the person is in university
    geofireService.prototype.setGeofireUniversity = function (university, radius, lat, lng, driverId) {
        this.dbRef = this.afDB.database.ref(university + '/geofireUniversity/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoqueryU = this.geoFire.query({
            center: [lat, lng],
            radius: radius
        });
        this.keyEnteredUniversity(university, driverId);
        console.log('geoquery university added');
    };
    geofireService.prototype.keyEnteredUniversity = function (university, driverId) {
        this.geoqueryU.on("key_entered", function (key) {
            this.afDB.database.ref(university + '/drivers/' + driverId).update({
                geofireOrigin: true
            }).then(function () {
                console.log('geofireOrigin = true');
            });
            console.log(key + ' detected');
        }.bind(this));
    };
    geofireService.prototype.cancelGeoqueryUniversity = function () {
        if (this.geoqueryU) {
            this.geoqueryU.cancel();
            console.log('geoqueryU deleted');
        }
        else {
            console.log('dont uni query');
        }
    };
    geofireService.prototype.cancelGeofireOrigin = function (university, driverId) {
        this.afDB.database.ref(university + '/drivers/' + driverId).update({
            geofireOrigin: false
        }).then(function () {
            console.log('geofireOrigin = false');
        });
    };
    geofireService.prototype.getLocationUniversity = function (university) {
        return this.afDB.object('/universities/' + university).valueChanges();
    };
    geofireService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]])
    ], geofireService);
    return geofireService;
}());

//# sourceMappingURL=geofire.services.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return instancesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(27);
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


var instancesService = /** @class */ (function () {
    function instancesService(afDB) {
        this.afDB = afDB;
    }
    instancesService.prototype.turnOntripUsers = function (university, user) {
        this.afDB.database.ref(university + 'users/' + user + '/trips/').update({
            onTrip: true
        }, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("everything successful");
            }
        });
    };
    instancesService.prototype.turnOntripUsersFalse = function (university, user) {
        this.afDB.database.ref(university + 'users/' + user + '/trips/').update({
            onTrip: false
        }, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("everything successful");
            }
        });
    };
    instancesService.prototype.turnOntripUsersListRide = function (driverId, user) {
        this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + user).update({
            onTrip: true
        }, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("everything successful");
            }
        });
    };
    instancesService.prototype.stopShowingOnDriver = function (driverId, user) {
        this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + user).update({
            showDriver: false
        }, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("everything successful");
            }
        });
    };
    instancesService.prototype.noDriversAvailableInstance = function (userId) {
        this.afDB.database.ref('/drivers/' + userId).update({
            noUsersMessage: true
        });
    };
    instancesService.prototype.noDriversAvailableInstanceDelete = function (userId) {
        this.afDB.database.ref('/drivers/' + userId).update({
            noUsersMessage: false
        });
    };
    instancesService.prototype.clickedDirectionMessage = function (userId) {
        this.afDB.database.ref('/drivers/' + userId).update({
            clickedDirection: true
        });
    };
    instancesService.prototype.clickedDirectionMessageCancel = function (userId) {
        this.afDB.database.ref('/drivers/' + userId).update({
            clickedDirection: false
        });
    };
    instancesService.prototype.isVerifiedPerson = function (university, userId) {
        this.afDB.database.ref(university + '/drivers/' + userId).update({
            verifiedPerson: true
        });
    };
    instancesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]])
    ], instancesService);
    return instancesService;
}());

//# sourceMappingURL=instances.service.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendFeedbackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(27);
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


var sendFeedbackService = /** @class */ (function () {
    function sendFeedbackService(afDB) {
        this.afDB = afDB;
    }
    sendFeedbackService.prototype.sendFeedback = function (university, title, info, name, lastname, number, userId) {
        this.afDB.database.ref(university + '/feedback/' + title + '/driver/' + userId).set({
            info: info,
            name: name,
            lastname: lastname,
            number: number
        });
    };
    sendFeedbackService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]) === "function" && _a || Object])
    ], sendFeedbackService);
    return sendFeedbackService;
    var _a;
}());

//# sourceMappingURL=sendFeedback.service.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(57);
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



var ChatsService = /** @class */ (function () {
    function ChatsService(afDB, AngularFireAuth) {
        this.afDB = afDB;
        this.AngularFireAuth = AngularFireAuth;
    }
    ChatsService.prototype.getChats = function (university, driverUid, userUid) {
        //trae todos los chats del usuario
        return this.afDB.list(university + '/drivers/' + driverUid + '/trips/pickingUsers/' + userUid + '/chat/').valueChanges();
    };
    ChatsService.prototype.pushMessage = function (university, driverUid, userUid, message) {
        //envía todos los chats del usuario
        this.afDB.database.ref(university + '/drivers/' + driverUid + '/trips/pickingUsers/' + userUid + '/chat/').push({
            message: message,
            uid: driverUid
        });
    };
    ChatsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], ChatsService);
    return ChatsService;
}());

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return priceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(114);
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
    priceService.prototype.setPriceAndNote = function (university, user, price, note, car) {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(university + '/drivers/' + user + '/trips').update({
            //set important information with note
            price: price,
            note: note,
            car: car,
        });
    };
    priceService.prototype.setPrice = function (university, user, price, car) {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(university + '/drivers/' + user + '/trips').update({
            price: price,
            car: car,
        });
    };
    priceService.prototype.saveTripToReserves = function (driverUid, or, dest, timeLeaving, price, car, note, driver) {
        var arrayReserves = this.afDB.database.ref('reserves/' + driverUid + '/').push({
            orReserve: or,
            destReserve: dest,
            timeLeaving: timeLeaving,
            price: price,
            car: car,
            note: note,
            driver: driver
        });
        //get key of reserve pushed
        var KeyLastTripSaved = arrayReserves.key;
        //save key inside reserve
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('reserves/' + driverUid + '/' + arrayReserves.key + '/').update({
            keyTrip: arrayReserves.key
        });
        //save key inside driver momentarily to access reserve 
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('drivers/' + driverUid + '/' + arrayReserves.key).update({
            keyLastReserve: arrayReserves.key
        });
        console.log(KeyLastTripSaved);
    };
    priceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], priceService);
    return priceService;
}());

//# sourceMappingURL=price.service.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WindowService = /** @class */ (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "windowRef", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    WindowService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], WindowService);
    return WindowService;
}());

//# sourceMappingURL=window.service.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(467);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_auth__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_signup_service__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_driverauthentication_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_sendCoords_service__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_sendUsers_service__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geofence__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_geofire_services__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_instances_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_call_number__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_price_service__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_email_composer_ngx__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_sendFeedback_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_chat_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_trips_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__mobiscroll_angular_lite__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_window_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_fcm_ngx__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// import { ConfirmdirectionPage } from '../pages/confirmdirection/confirmdirection';









var firebaseConfig = {
    // apiKey: "AIzaSyDrNPJBT1eVEFvZDfIfwnuD3ivJo7hVw2M",
    // authDomain: "securityrules-93b35.firebaseapp.com",
    // databaseURL: "https://securityrules-93b35.firebaseio.com",
    // projectId: "securityrules-93b35",
    // storageBucket: "",
    // messagingSenderId: "181111098326",
    // appId: "1:181111098326:web:32275360c003125c"
    apiKey: "AIzaSyAPagXvglCXnK3neJwU50EiZnJPmdd__PM",
    authDomain: "waypoooldemo.firebaseapp.com",
    databaseURL: "https://waypoooldemo.firebaseio.com",
    projectId: "waypoooldemo",
    storageBucket: "waypoooldemo.appspot.com",
    messagingSenderId: "1009109452629",
    appId: "1:1009109452629:web:d9385099e749eefc"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { tabsHideOnSubPages: false,
                }, {
                    links: [
                        { loadChildren: '../pages/canceltrip/canceltrip.module#CanceltripPageModule', name: 'CanceltripPage', segment: 'canceltrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car-registration-login/car-registration-login.module#CarRegistrationPageModule', name: 'CarRegistrationLoginPage', segment: 'car-registration-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car-registration/car-registration.module#CarRegistrationPageModule', name: 'CarRegistrationPage', segment: 'car-registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chats/chats.module#ChatsPageModule', name: 'ChatsPage', segment: 'chats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatting/chatting.module#ChattingPageModule', name: 'ChattingPage', segment: 'chatting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm-university/confirm-university.module#ConfirmUniversityPageModule', name: 'ConfirmUniversityPage', segment: 'confirm-university', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmtrip/confirmtrip.module#ConfirmtripPageModule', name: 'ConfirmtripPage', segment: 'confirmtrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmreserve/confirmreserve.module#ConfirmreservationPageModule', name: 'ConfirmreservationPage', segment: 'confirmreserve', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ratetrip/ratetrip.module#RatetripPageModule', name: 'RatetripPage', segment: 'ratetrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/public-profile/public-profile.module#PublicProfilePageModule', name: 'PublicProfilePage', segment: 'public-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/showinfocar/showinfocar.module#ShowInfoCarPageModule', name: 'ShowInfoCarPage', segment: 'showinfocar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verification-images/verification-images.module#VerificationImagesPageModule', name: 'VerificationImagesPage', segment: 'verification-images', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verification-number/verification-number.module#VerificationNumberPageModule', name: 'VerificationNumberPage', segment: 'verification-number', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'SupportPage', segment: 'support', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmprice/confirmprice.module#ConfirmpricePageModule', name: 'ConfirmpricePage', segment: 'confirmprice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pickup/pickup.module#PickupPageModule', name: 'PickupPage', segment: 'pickup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservetrip/reservetrip.module#ReservetripPageModule', name: 'ReservetripPage', segment: 'reservetrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myride/myride.module#MyridePageModule', name: 'MyridePage', segment: 'myride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/findride/findride.module#FindridePageModule', name: 'FindridePage', segment: 'findride', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_fire_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_26__mobiscroll_angular_lite__["a" /* MbscModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__services_signup_service__["a" /* SignUpService */],
                __WEBPACK_IMPORTED_MODULE_10__services_driverauthentication_service__["a" /* authenticationService */],
                __WEBPACK_IMPORTED_MODULE_16__services_geofire_services__["a" /* geofireService */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_email_composer_ngx__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_12__services_sendCoords_service__["a" /* sendCoordsService */],
                __WEBPACK_IMPORTED_MODULE_13__services_sendUsers_service__["a" /* sendUsersService */],
                __WEBPACK_IMPORTED_MODULE_17__services_instances_service__["a" /* instancesService */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_geofence__["a" /* Geofence */],
                __WEBPACK_IMPORTED_MODULE_19__services_price_service__["a" /* priceService */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_geofence__["a" /* Geofence */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_email_composer_ngx__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_23__services_sendFeedback_service__["a" /* sendFeedbackService */],
                __WEBPACK_IMPORTED_MODULE_24__services_chat_service__["a" /* ChatsService */],
                __WEBPACK_IMPORTED_MODULE_25__services_trips_service__["a" /* TripsService */],
                __WEBPACK_IMPORTED_MODULE_27__services_window_service__["a" /* WindowService */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_fcm_ngx__["a" /* FCM */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_signup_service__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm_ngx__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, signUpService, fcm) {
        var _this = this;
        this.signUpService = signUpService;
        this.fcm = fcm;
        this.rootPage = 'LoginPage';
        this.oneSignalAppId = '58b65ff2-abec-43de-8596-ec82288d0255';
        this.firebaseSenderId = '1009109452629';
        this.userUniversity = this.signUpService.userUniversity;
        console.log(this.userUniversity);
        //  platform.ready().then(()=>{
        //   this.fcm.getToken().then(token => {
        //     console.log(token);
        //   });
        //   this.fcm.onTokenRefresh().subscribe(token => {
        //     console.log(token);
        //   });
        //   this.fcm.onNotification().subscribe(data => {
        //     console.log(data);
        //     if (data.wasTapped) {
        //       console.log('Received in background');
        //       this.rootPage = 'LoginPage';
        //     } else {
        //       console.log('Received in foreground');
        //       this.rootPage = 'LoginPage';
        //     }
        //   });
        statusBar.backgroundColorByHexString('#ffffff');
        splashScreen.hide();
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                if (user.emailVerified == false) {
                    _this.rootPage = 'LoginPage';
                }
                else {
                    _this.rootPage = 'TabsPage';
                }
            }
            else {
                _this.rootPage = 'LoginPage';
            }
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\merge\driver\waypool_driver\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\merge\driver\waypool_driver\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm_ngx__["a" /* FCM */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[346]);
//# sourceMappingURL=main.js.map