webpackJsonp([33],{

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(48);
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
    SignUpService.prototype.getMyInfo = function (place, userId) {
        return this.afDB.object(place + '/drivers/' + userId).valueChanges();
    };
    // public getInfoAboutMyPlace( userId){
    //     return this.afDB.object('/allUsers/' + userId).valueChanges();
    //     }
    SignUpService.prototype.getInfoPlace = function (place) {
        return this.afDB.object('/allPlaces/' + place).valueChanges();
    };
    SignUpService.prototype.getAllPlaces = function () {
        return this.afDB.list('allPlaces/').valueChanges();
    };
    SignUpService.prototype.getAllCities = function () {
        return this.afDB.list('allCities/').valueChanges();
    };
    SignUpService.prototype.getEmails = function (enterprise) {
        return this.afDB.list('allPlaces/' + enterprise + '/emails').valueChanges();
    };
    SignUpService.prototype.pushEmails = function (enterprise, email) {
        this.afDB.database.ref('allPlaces/' + enterprise + '/emails').push({
            email: email
        });
    };
    SignUpService.prototype.pushDocsL = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId + '/documents').update({
            license: false
        });
    };
    SignUpService.prototype.pushDocsCarne = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId + '/documents').update({
            carne: false
        });
        this.afDB.database.ref(place + '/users/' + userId + '/documents').update({
            carne: false
        });
    };
    SignUpService.prototype.pushDocsId = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId + '/documents').update({
            id: false
        });
        this.afDB.database.ref(place + '/users/' + userId + '/documents').update({
            id: false
        });
    };
    SignUpService.prototype.emailVerificationMessage = function (place, user) {
        this.afDB.database.ref(place + '/drivers/' + user).update({
            emailVerificationMessage: true
        });
    };
    SignUpService.prototype.getMyInfoDriver = function (place, userId) {
        return this.afDB.object(place + '/drivers/' + userId).valueChanges();
    };
    SignUpService.prototype.getInfoUser = function (place, userId) {
        return this.afDB.object(place + '/users/' + userId).valueChanges();
    };
    SignUpService.prototype.saveUser = function (place, user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.afDB.database.ref(place + '/drivers/' + user.userId).update(user);
                this.afDB.database.ref(place + '/users/' + user.userId).update(user);
                return [2 /*return*/];
            });
        });
    };
    SignUpService.prototype.saveUserInAllUsers = function (place, user, city) {
        this.afDB.database.ref('/allUsers/' + user).update({
            place: place,
            city: city
        });
    };
    SignUpService.prototype.setFixedLocationCoordinates = function (place, user, lat, lng) {
        this.afDB.database.ref(place + '/drivers/' + user + '/fixedLocation/coordinates').update({
            lat: lat,
            lng: lng,
        });
        this.afDB.database.ref(place + '/users/' + user + '/fixedLocation/coordinates').update({
            lat: lat,
            lng: lng,
        });
    };
    SignUpService.prototype.setFixedLocationName = function (place, user, name) {
        this.afDB.database.ref(place + '/drivers/' + user + '/fixedLocation').update({
            name: name
        });
        this.afDB.database.ref(place + '/users/' + user + '/fixedLocation').update({
            name: name
        });
    };
    SignUpService.prototype.getMyInfoForProfile = function (place, userId) {
        return this.afDB.object(place + '/drivers/' + userId).valueChanges();
    };
    SignUpService.prototype.saveInfoProfilePhone = function (place, userUid, phone) {
        //permite configurar la información del perfil
        this.afDB.database.ref(place + '/drivers/' + userUid).update({
            phone: phone
        });
    };
    SignUpService.prototype.saveInfoProfileAbout = function (place, userUid, about) {
        //permite configurar la información del perfil
        this.afDB.database.ref(place + '/drivers/' + userUid).update({
            about: about
        });
    };
    SignUpService.prototype.saveInfoProfileUrl = function (place, userUid, url) {
        //permite configurar la información del perfil
        this.afDB.database.ref(place + '/drivers/' + userUid).update({
            url: url
        });
    };
    SignUpService.prototype.deleteAccount = function (place, userUid) {
        this.afDB.database.ref(place + '/drivers/' + userUid).remove();
        this.afDB.database.ref(place + '/users/' + userUid).remove();
    };
    SignUpService.prototype.addCar = function (place, DriverUid, carModel, plateNumber, color) {
        var _this = this;
        this.afDB.database.ref(place + '/drivers/' + DriverUid + '/cars/').push({
            carModel: carModel,
            plateNumber: plateNumber,
            color: color
        }).then(function (snap) {
            var key = snap.key;
            _this.afDB.database.ref(place + '/drivers/' + DriverUid + '/cars/' + key).update({
                keyCar: key
            });
        });
    };
    SignUpService.prototype.deleteCar = function (place, driverUid, carKey) {
        this.afDB.database.ref(place + '/drivers/' + driverUid + '/cars/' + carKey).remove();
    };
    SignUpService.prototype.addCarProfile = function (place, userUid, car) {
        this.afDB.database.ref(place + '/drivers/' + userUid + '/cars/').push(car);
    };
    SignUpService.prototype.addPlaceZone = function (place, userUid) {
        this.afDB.database.ref(place + '/drivers/' + userUid).update({ place: place });
        this.afDB.database.ref(place + '/users/' + userUid).update({ place: place });
    };
    SignUpService.prototype.getCar = function (place, userId) {
        return this.afDB.list(place + '/drivers/' + userId + '/cars').valueChanges();
    };
    SignUpService.prototype.pushSchedule = function (place, userId, hour, type, description, image) {
        var _this = this;
        this.schedulePush = this.afDB.database.ref(place + '/drivers/' + userId + '/schedule/').push({
            hour: hour,
            type: type,
            description: description,
            image: image
        }).then(function (snap) {
            _this.schedulePush = _this.schedulePush = _this.afDB.database.ref(place + '/drivers/' + userId + '/schedule/' + snap.key).update({
                key: snap.key
            });
        });
    };
    SignUpService.prototype.getSchedule = function (place, userId) {
        return this.afDB.list(place + '/drivers/' + userId + '/schedule/').valueChanges();
    };
    SignUpService.prototype.removeSchedule = function (place, userId, key) {
        this.afDB.database.ref(place + '/drivers/' + userId + '/schedule/' + key).remove();
    };
    SignUpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], SignUpService);
    return SignUpService;
}());

//# sourceMappingURL=signup.service.js.map

/***/ }),

/***/ 237:
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
webpackEmptyAsyncContext.id = 237;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-schedule/add-schedule.module": [
		636,
		32
	],
	"../pages/canceltrip/canceltrip.module": [
		637,
		31
	],
	"../pages/car-registration-login/car-registration-login.module": [
		659,
		30
	],
	"../pages/car-registration/car-registration.module": [
		660,
		29
	],
	"../pages/chats/chats.module": [
		638,
		28
	],
	"../pages/chatting/chatting.module": [
		639,
		27
	],
	"../pages/confirmprice/confirmprice.module": [
		661,
		26
	],
	"../pages/confirmreserve/confirmreserve.module": [
		640,
		25
	],
	"../pages/confirmtrip/confirmtrip.module": [
		641,
		24
	],
	"../pages/detailsreserve/detailsreserve.module": [
		642,
		23
	],
	"../pages/findride/findride.module": [
		668,
		22
	],
	"../pages/help/help.module": [
		643,
		21
	],
	"../pages/login/login.module": [
		644,
		20
	],
	"../pages/more/more.module": [
		645,
		19
	],
	"../pages/myride/myride.module": [
		662,
		2
	],
	"../pages/payments-info/payments-info.module": [
		646,
		18
	],
	"../pages/pickup/pickup.module": [
		667,
		1
	],
	"../pages/profile/profile.module": [
		647,
		17
	],
	"../pages/public-profile/public-profile.module": [
		648,
		16
	],
	"../pages/ratetrip/ratetrip.module": [
		650,
		15
	],
	"../pages/remove-schedule/remove-schedule.module": [
		649,
		14
	],
	"../pages/reservetrip/reservetrip.module": [
		663,
		0
	],
	"../pages/schedule/schedule.module": [
		664,
		13
	],
	"../pages/showinfocar/showinfocar.module": [
		651,
		12
	],
	"../pages/signup/signup.module": [
		666,
		11
	],
	"../pages/specifyorigin/specifyorigin.module": [
		665,
		10
	],
	"../pages/successnotification/successnotification.module": [
		652,
		3
	],
	"../pages/support/support.module": [
		653,
		9
	],
	"../pages/terms/terms.module": [
		654,
		8
	],
	"../pages/verification-images/verification-images.module": [
		656,
		7
	],
	"../pages/verification-number/verification-number.module": [
		655,
		6
	],
	"../pages/walkthrough/walkthrough.module": [
		657,
		5
	],
	"../pages/wallet/wallet.module": [
		658,
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
webpackAsyncContext.id = 279;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendCoordsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(25);
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
    sendCoordsService.prototype.getPendingUsers = function (place, userUid, pushKey) {
        return this.afDB.list(place + '/reserves/' + userUid + '/' + pushKey + '/pendingUsers').valueChanges();
    };
    sendCoordsService.prototype.confirmIfUsersIsStillInLMU = function (place, driverId, keyTrip, userId) {
        return this.afDB.object(place + '/trips/' + driverId + '/' + keyTrip + '/lastMinuteUsers/' + userId).valueChanges();
    };
    sendCoordsService.prototype.getSpecificReserves = function (userUid, pushKey) {
        return this.afDB.object('/reserves/' + userUid + '/' + pushKey).valueChanges();
    };
    sendCoordsService.prototype.eraseUser = function (place, userId, DriverUid, pushKey) {
        this.afDB.database.ref(place + '/reserves/' + DriverUid + '/' + pushKey + '/pendingUsers/' + userId).remove();
    };
    sendCoordsService.prototype.saveTripOnRecords = function (place, userUid, trip) {
        //save trip in recordTrips
        this.afDB.database.ref(place + '/users/' + userUid + '/recordTrips/' + trip.keyTrip).update(trip);
    };
    sendCoordsService.prototype.getDestination = function (place, user) {
        return this.afDB.list(place + '/drivers/' + user + '/trips/destination').valueChanges();
    };
    sendCoordsService.prototype.getOrigin = function (place, user) {
        return this.afDB.list(place + '/drivers/' + user + '/trips/origin').valueChanges();
    };
    sendCoordsService.prototype.pushcoordinatesReserves = function (user, dest, or) {
        this.afDB.database.ref('drivers/' + user + '/Reserves').push({
            orReserve: or,
            destReserve: dest,
        });
    };
    sendCoordsService.prototype.pushcoordinatesDrivers = function (place, user, dest, or) {
        this.afDB.database.ref(place + '/drivers/' + user + '/trips').update({
            origin: or,
            destination: dest,
        });
    };
    sendCoordsService.prototype.recordTripOnDriver = function (place, userUid, trip) {
        this.afDB.database.ref(place + '/drivers/' + userUid + '/recordTrips/').push(trip);
    };
    sendCoordsService.prototype.recordTripOnUser = function (place, userDriverUid, trip) {
        this.afDB.database.ref(place + '/users/' + userDriverUid + '/recordTrips/').push(trip);
    };
    sendCoordsService.prototype.recordTripOnWaypool = function (place, trip) {
        this.afDB.database.ref(place + '/allTrips/').push(trip);
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
    sendCoordsService.prototype.endTripDriverPickingUsers = function (place, DriverUid) {
        this.afDB.database.ref(place + '/drivers/' + DriverUid + '/trips/pickingUsers').remove();
    };
    sendCoordsService.prototype.eraseChatsUsers = function (place, userId, DriverUid) {
        this.afDB.database.ref(place + 'drivers/' + DriverUid + '/trips/pickingUsers/' + userId + '/chat').remove();
    };
    sendCoordsService.prototype.endTripDriverPickedUpUsers = function (place, DriverUid) {
        this.afDB.database.ref(place + '/drivers/' + DriverUid + '/trips/pickedUpUsers').remove();
    };
    sendCoordsService.prototype.endTripUserPickingUsers = function (userUid) {
        this.afDB.database.ref('users/' + userUid + '/trips/pickingUsers').remove();
    };
    sendCoordsService.prototype.endTripUserPickedUpUsers = function (place, userUid) {
        this.afDB.database.ref(place + '/users/' + userUid + '/trips/pickedUpUsers').remove();
    };
    sendCoordsService.prototype.endTripUserOnTripInstance = function (place, userUid) {
        this.afDB.database.ref(place + '/users/' + userUid + '/trips/onTrip').remove();
    };
    sendCoordsService.prototype.endTripUserPickupInstance = function (place, userUid) {
        this.afDB.database.ref(place + '/users/' + userUid + '/trips/pickedUp').remove();
    };
    sendCoordsService.prototype.endTripUserDriverListRide = function (place, userUid) {
        this.afDB.database.ref(place + '/users/' + userUid + '/trips/driverListRide').remove();
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
    sendCoordsService.prototype.pushOnTripFinalUser = function (place, userId) {
        this.afDB.database.ref(place + '/users/' + userId).update({
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]) === "function" && _a || Object])
    ], sendCoordsService);
    return sendCoordsService;
    var _a;
}());

//# sourceMappingURL=sendCoords.service.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(200);
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
    authenticationService.prototype.sendVerificationCodeToFirebase = function (place, userId, code) {
        this.afDB.database.ref(place + '/drivers/' + userId).update({
            verificationCode: code
        });
    };
    authenticationService.prototype.deleteVerificationCode = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId + '/verificationCode/').remove();
    };
    authenticationService.prototype.resendVerificationCode = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId).update({
            resendVerificationCode: true
        });
    };
    authenticationService.prototype.deleteverificationCodeApproval = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId + '/verificationCodeApproval/').remove();
    };
    authenticationService.prototype.deleteResendCode = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId + '/resendVerificationCode/').remove();
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

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return instancesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(25);
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
    instancesService.prototype.turnOntripUsers = function (place, user) {
        this.afDB.database.ref(place + 'users/' + user + '/trips/').update({
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
    instancesService.prototype.turnOntripUsersFalse = function (place, user) {
        this.afDB.database.ref(place + 'users/' + user + '/trips/').update({
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
    instancesService.prototype.scheduleTypeManual = function (place, user) {
        this.afDB.database.ref(place + '/drivers/' + user).update({
            scheduleType: 'manual'
        }, function (error) {
            console.log(error);
        });
    };
    instancesService.prototype.scheduleTypePicture = function (place, user) {
        this.afDB.database.ref(place + '/drivers/' + user).update({
            scheduleType: 'picture'
        }, function (error) {
            console.log(error);
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
    instancesService.prototype.isVerifiedPerson = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId).update({
            verifiedPerson: true
        });
    };
    instancesService.prototype.ToggleStatusOnline = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId).update({
            toggleStatus: 'online'
        });
        this.afDB.database.ref('allUsers/' + userId).update({
            toggleOnline: place
        });
    };
    instancesService.prototype.ToggleStatusOffline = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId).update({
            toggleStatus: 'offline'
        });
        this.afDB.database.ref('allUsers/' + userId + '/toggleOnline/').remove();
    };
    instancesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]])
    ], instancesService);
    return instancesService;
}());

//# sourceMappingURL=instances.service.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendUsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(25);
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
    sendUsersService.prototype.getTripsOfReserves = function (place, userUid) {
        // Get all the trips the driver have reserve
        return this.afDB.list(place + '/reserves/' + userUid).valueChanges();
    };
    sendUsersService.prototype.getUsersOnTrip = function (place, userUid) {
        // Get all the students the driver acepts in myListRidePage to be send to the students
        return this.afDB.list(place + '/drivers/' + userUid + '/trips/pickingUsers').valueChanges();
    };
    sendUsersService.prototype.getPickUpUsers = function (place, userUid) {
        //get all the users from the pickUpUsers []
        return this.afDB.list(place + '/drivers/' + userUid + '/trips/pickedUpUsers').valueChanges();
    };
    sendUsersService.prototype.removeReserve = function (driverId, keyReserve) {
        //remove the reserve done
        this.afDB.database.ref('/reserves/' + driverId + '/' + keyReserve).remove();
    };
    sendUsersService.prototype.removeUsersOnListRideTotal = function (place, userUid) {
        //send the information of every student the driver acepts in myRide
        this.afDB.database.ref(place + '/drivers/' + userUid + '/trips/usersListRide/').remove();
    };
    sendUsersService.prototype.removeUsersOnPickingUsers = function (place, userUid, userId) {
        //send the information of every student the driver acepts in myRide
        this.afDB.database.ref(place + '/drivers/' + userUid + '/trips/pickingUsers/' + userId).remove();
        this.afDB.database.ref(place + '/users/' + userId + '/trips/pickingUsers/driver/' + userUid).remove();
    };
    sendUsersService.prototype.pushPickingUpUsersOnDrivers = function (place, userUid, userId, origin, destination, name, lastname, phone, about) {
        //send the information of every student the driver acepts in myRide
        this.afDB.database.ref(place + '/drivers/' + userUid + '/trips/pickingUsers/' + userId).update({
            origin: origin,
            destination: destination,
            name: name,
            lastname: lastname,
            phone: phone,
            userId: userId,
            about: about
        });
    };
    sendUsersService.prototype.pushDriverOnUsers = function (place, userUid, userId, origin, destination, name, lastname, phone, price, car, about) {
        //send the driver information to the students
        this.afDB.database.ref(place + '/users/' + userId + '/trips/pickingUsers/driver/' + userUid).update({
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
    sendUsersService.prototype.getRecordTrips = function (place, userUid) {
        return this.afDB.list(place + '/drivers/' + userUid + '/recordTrips/').valueChanges();
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

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return geofireService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_geofire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(48);
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
        // this.driverUid = this.AngularFireAuth.auth.currentUser.uid;
        this.afDB = afDB;
        this.AngularFireAuth = AngularFireAuth;
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
    geofireService.prototype.setGeofireOrNEWTEST = function (Place, key, lat, lng) {
        this.dbRef = this.afDB.database.ref(Place + '/geofireOr/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    geofireService.prototype.setGeofireDestNEWTEST = function (Place, key, lat, lng) {
        this.dbRef = this.afDB.database.ref(Place + '/geofireDest/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    geofireService.prototype.setGeofireOrOnTrip = function (Place, key, lat, lng) {
        this.dbRef = this.afDB.database.ref(Place + '/geofireOrTrip/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    geofireService.prototype.setGeofireDestOnTrip = function (Place, key, lat, lng) {
        this.dbRef = this.afDB.database.ref(Place + '/geofireDestTrip/');
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
    geofireService.prototype.deleteUserListRide = function (Place, driverId, userId) {
        this.afDB.database.ref(Place + '/drivers/' + driverId + '/trips/usersListRide/' + userId).remove();
    };
    geofireService.prototype.deleteUserListRideTotal = function (driverId) {
        this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/').remove();
    };
    geofireService.prototype.onTripUserListRide = function (driverId, userId) {
        this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + userId).update({
            onTrip: true
        });
    };
    geofireService.prototype.deleteUserGeofireDest = function (Place, keyTrip) {
        this.afDB.database.ref(Place + '/geofireDest/' + keyTrip).remove().then(function () {
            console.log("GeofireDest succesfully removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    geofireService.prototype.deleteUserGeofireOr = function (Place, keyTrip) {
        this.afDB.database.ref(Place + '/geofireOr/' + keyTrip).remove().then(function () {
            console.log("GeofireOr succesfully removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    geofireService.prototype.deleteUserGeofireOrTrip = function (Place, keyTrip) {
        this.afDB.database.ref(Place + '/geofireOrTrip/' + keyTrip).remove().then(function () {
            console.log("geofireOrTrip succesfully removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    geofireService.prototype.deleteUserGeofireDestTrip = function (Place, keyTrip) {
        this.afDB.database.ref(Place + '/geofireDestTrip/' + keyTrip).remove().then(function () {
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
    // set a new node on firebase which is the location of the Place
    geofireService.prototype.setLocationPlace = function (place, key, lat, lng) {
        this.dbRef = this.afDB.database.ref(place + '/geofirePlace/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    // set geoquery that determines if the person is in place
    geofireService.prototype.setGeofirePlace = function (place, radius, lat, lng, driverId) {
        this.dbRef = this.afDB.database.ref(place + '/geofirePlace/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoqueryP = this.geoFire.query({
            center: [lat, lng],
            radius: radius
        });
        this.keyEnteredPlace(place, driverId);
        console.log('geoquery place added');
    };
    geofireService.prototype.keyEnteredPlace = function (place, driverId) {
        this.geoqueryP.on("key_entered", function (key) {
            this.afDB.database.ref(place + '/drivers/' + driverId).update({
                geofireOrigin: true
            }).then(function () {
                console.log('geofireOrigin = true');
            });
            console.log(key + ' detected');
        }.bind(this));
    };
    geofireService.prototype.cancelGeoqueryPlace = function () {
        if (this.geoqueryP) {
            this.geoqueryP.cancel();
            console.log('geoqueryU deleted');
        }
        else {
            console.log('dont uni query');
        }
    };
    geofireService.prototype.cancelGeofireOrigin = function (place, driverId) {
        this.afDB.database.ref(place + '/drivers/' + driverId).update({
            geofireOrigin: false
        }).then(function () {
            console.log('geofireOrigin = false');
        });
    };
    geofireService.prototype.setHouseAddress = function (place, driverId, lat, lng) {
        this.afDB.database.ref(place + '/drivers/' + driverId + '/houseAddress/coordinates').update({
            lat: lat,
            lng: lng
        });
    };
    geofireService.prototype.setHouseAddressName = function (place, driverId, name) {
        this.afDB.database.ref(place + '/drivers/' + driverId + '/houseAddress/').update({
            name: name
        });
    };
    geofireService.prototype.getLocationPlace = function (place) {
        return this.afDB.object('/allPlaces/' + place).valueChanges();
    };
    geofireService.prototype.deleteKeyUserLMU = function (place, userId) {
        this.afDB.database.ref(place + '/users/' + userId + '/keyTrip/').remove();
    };
    geofireService.prototype.setOntripFalseUserLMU = function (place, userId) {
        this.afDB.database.ref(place + '/users/' + userId).update({
            onTrip: false
        });
    };
    geofireService.prototype.deleteDriverFromLMUofUser = function (place, userId, keyTrip) {
        this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + keyTrip).remove();
    };
    geofireService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]])
    ], geofireService);
    return geofireService;
}());

//# sourceMappingURL=geofire.services.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(48);
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
    TripsService.prototype.getTrip = function (place, keyTrip, driverUid) {
        //get trip in Trip's node
        return this.afDB.object(place + '/trips/' + driverUid + '/' + keyTrip).valueChanges();
    };
    TripsService.prototype.getPendingUsers = function (place, keyTrip, driverUid) {
        //get trip in Trip's node
        return this.afDB.list(place + '/trips/' + driverUid + '/' + keyTrip + '/pendingUsers').valueChanges();
    };
    TripsService.prototype.getKeyTrip = function (place, driverUid) {
        //get key of driver's trip
        return this.afDB.object(place + '/drivers/' + driverUid + '/keyTrip').valueChanges();
    };
    TripsService.prototype.getOnTrip = function (place, userUid) {
        return this.afDB.object(place + '/drivers/' + userUid + '/onTrip').valueChanges();
    };
    TripsService.prototype.getSpecificUser = function (place, keyTrip, driverUid, userId) {
        //get trip in Trip's node
        return this.afDB.list(place + '/trips/' + driverUid + '/' + keyTrip + '/pendingUsers/' + userId).valueChanges();
    };
    TripsService.prototype.getReserveUsers = function (place, keyTrip, driverUid) {
        //get trip in Trip's node
        return this.afDB.list(place + '/reserves/' + driverUid + '/' + keyTrip + '/pendingUsers').valueChanges();
    };
    TripsService.prototype.getLastMinuteUsers = function (place, keyTrip, driverUid) {
        //get trip in Trip's node
        return this.afDB.list(place + '/trips/' + driverUid + '/' + keyTrip + '/lastMinuteUsers').valueChanges();
    };
    TripsService.prototype.getPickedUpUsers = function (place, keyTrip, driverUid) {
        //get trip in Trip's node
        return this.afDB.list(place + '/trips/' + driverUid + '/' + keyTrip + '/pickedUpUsers').valueChanges();
    };
    TripsService.prototype.startTripForUsers = function (place, keyTrip, userId, driverId) {
        //create a trip in Trip's node in database     
        this.afDB.database.ref(place + '/users/' + userId).update({
            onTrip: true
        });
        this.afDB.database.ref(place + '/users/' + userId + '/keyTrip').update({
            keyTrip: keyTrip,
            driverId: driverId
        });
    };
    TripsService.prototype.startTrip = function (place, keyTrip, driverUid, trip) {
        //create a trip in Trip's node in database
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + keyTrip).update(trip);
    };
    TripsService.prototype.acceptLastMinute = function (place, driverUid, keyTrip, user) {
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + keyTrip + '/pendingUsers/' + user.userId).update(user);
    };
    TripsService.prototype.noRepeatLMU = function (place, driverUid, keyTrip, userId) {
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + keyTrip + '/lastMinuteUsers/' + userId).update({
            noRepeat: true
        });
    };
    TripsService.prototype.eliminateLastMinuteUser = function (place, driverUid, keyTrip, userId) {
        //eliminate the user from pendingUsers
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + keyTrip + '/lastMinuteUsers/' + userId).remove();
    };
    TripsService.prototype.deleteReserve = function (place, keyTrip, driverUid) {
        this.afDB.database.ref(place + '/reserves/' + driverUid + '/' + keyTrip).remove();
    };
    TripsService.prototype.deleteAllReserves = function (place, driverUid) {
        this.afDB.database.ref(place + '/reserves/' + driverUid).remove();
    };
    TripsService.prototype.notifyLMUitsBeenRejected = function (place, userId) {
        this.afDB.database.ref(place + '/users/' + userId).update({
            cancelModalLMU: true
        }).then(function () {
            console.log('se notifico');
        });
    };
    TripsService.prototype.pushKeyInDriver = function (place, keyTrip, DriverUid) {
        //push a key of the trip to the driver, in this way the driver can acces the trip in Trip's node
        this.afDB.database.ref(place + '/drivers/' + DriverUid).update({
            keyTrip: keyTrip
        });
    };
    TripsService.prototype.pushOnTripInDriver = function (place, DriverUid) {
        //push a onTrip in Driver's node
        this.afDB.database.ref(place + '/drivers/' + DriverUid).update({
            onTrip: true
        });
    };
    TripsService.prototype.eliminatePendingUsers = function (place, keyTrip, driverUid, userId) {
        //eliminate the user from pendingUsers
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + keyTrip + '/pendingUsers/' + userId).remove();
    };
    TripsService.prototype.pickUp = function (place, keyTrip, driverUid, userId, user) {
        // add the driver to pickedUpUsers 
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + keyTrip + '/pickedUpUsers/' + userId).update(user);
    };
    TripsService.prototype.addSavedKMGlobal = function (place, savedKM) {
        this.afDB.database.ref('/data/allTrips' + place).update({
            savedKM: savedKM
        });
    };
    TripsService.prototype.addSavedKMGlobalPassengers = function (place, savedKM) {
        this.afDB.database.ref('/data/kmsSavedByPassengers/' + place).update({
            savedKM: savedKM
        });
    };
    TripsService.prototype.createTripState = function (place, keyTrip, driverUid) {
        this.afDB.database.ref(place + '/tripsState/' + driverUid + '/' + keyTrip).update({
            saveTrip: false,
            canceledTrip: false
        });
    };
    TripsService.prototype.eliminateTripState = function (place, keyTrip, driverUid) {
        this.afDB.database.ref(place + '/tripsState/' + driverUid + '/' + keyTrip).remove();
    };
    TripsService.prototype.timeFinishedTrip = function (place, keyTrip, driverUid, date) {
        //set time when driver go to destination 
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + keyTrip).update({
            DestinationTime: date
        });
    };
    TripsService.prototype.endTrip = function (place, keyTrip, driverUid) {
        //erase trip in trip's node
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + keyTrip).remove();
    };
    TripsService.prototype.setOnTripFalse = function (place, driverUid) {
        // set false to onTrip instance in driver's node
        this.afDB.database.ref(place + '/drivers/' + driverUid).update({
            onTrip: false
        });
    };
    TripsService.prototype.setOnTripFalseUser = function (place, userId) {
        // set false to onTrip instance in driver's node
        this.afDB.database.ref(place + '/users/' + userId).update({
            onTrip: false
        });
    };
    TripsService.prototype.saveTripOnRecordsUser = function (place, userUid, trip, keyTrip) {
        //save trip in recordTrips
        this.afDB.database.ref(place + '/users/' + userUid + '/recordTrips/' + keyTrip).update(trip);
    };
    TripsService.prototype.setOnTrip = function (place, driverUid) {
        // set false to onTrip instance in driver's node
        this.afDB.database.ref(place + '/drivers/' + driverUid).update({
            onTrip: true
        });
    };
    TripsService.prototype.endTripForUsers = function (place, userId) {
        this.afDB.database.ref(place + '/users/' + userId + '/saveTrip').update({
            saveTrip: true
        });
    };
    TripsService.prototype.sentTripUser = function (place, userId, trip) {
        this.afDB.database.ref(place + '/users/' + userId + '/trip').update(trip);
    };
    TripsService.prototype.saveTripUser = function (place, driverUid, keyTrip) {
        // this instance allows the user to save the trip in his records
        this.afDB.database.ref(place + '/tripsState/' + driverUid + '/' + keyTrip).update({
            saveTrip: true
        });
    };
    TripsService.prototype.allTrips = function (place, driverUid, keyTrip, trip) {
        // this instance allows the user to save the trip in his records
        this.afDB.database.ref('data/allTrips/' + place + '/' + driverUid + '/' + keyTrip).update(trip);
    };
    TripsService.prototype.getTripState = function (place, reserveId, driverId) {
        return this.afDB.object(place + '/tripsState/' + driverId + '/' + reserveId + '/').valueChanges();
    };
    TripsService.prototype.eraseKeyTrip = function (place, driverUid) {
        // erase keyTrip in driver's node
        this.afDB.database.ref(place + '/drivers/' + driverUid + '/keyTrip').remove();
    };
    TripsService.prototype.cancelUserFromTrip = function (place, driverUid, keyTrip, userId) {
        this.afDB.database.ref(place + '/users/' + userId + '/' + '/cancelTrip/').update({
            cancelTrip: true
        });
        //eliminate the user from pendingUsers
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + keyTrip + '/pendingUsers/' + userId).remove();
    };
    TripsService.prototype.saveTripOnRecords = function (place, driverUid, trip, keyTrip) {
        //save trip in recordTrips
        this.afDB.database.ref(place + '/drivers/' + driverUid + '/recordTrips/' + keyTrip).update(trip);
    };
    TripsService.prototype.sendPaymentInfoOfTrip = function (place, driverId, amount) {
        this.afDB.database.ref(place + '/drivers/' + driverId).update({
            pendingToReceive: amount
        });
    };
    TripsService.prototype.sendPaymentInfoOfTripForUser = function (place, userId, amount) {
        this.afDB.database.ref(place + '/users/' + userId).update({
            pendingToPay: amount
        });
    };
    TripsService.prototype.reduceNumberPersonalFreeRides = function (place, userId, remainingRides) {
        this.afDB.database.ref(place + '/users/' + userId).update({
            personalFreeRides: remainingRides
        });
    };
    TripsService.prototype.reduceNumberCompanyFreeRides = function (city, userCompany, remainingRides) {
        this.afDB.database.ref('allCities/' + city + '/allPlaces/' + userCompany).update({
            freeRidesNumber: remainingRides
        });
    };
    TripsService.prototype.cancelReserve = function (place, driverUid, keyTrip) {
        this.afDB.database.ref(place + '/reserves/' + driverUid + '/' + keyTrip).remove();
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

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendFeedbackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(89);
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
    function sendFeedbackService(afDB, alertCtrl) {
        this.afDB = afDB;
        this.alertCtrl = alertCtrl;
    }
    sendFeedbackService.prototype.sendFeedback = function (place, title, info, name, lastname, number, userId) {
        var _this = this;
        this.afDB.database.ref(place + '/feedback/' + title + '/drivers/' + userId).set({
            info: info,
            name: name,
            lastname: lastname,
            number: number
        }).then(function () {
            var alert = _this.alertCtrl.create({
                title: 'Hemos recibido tu mensaje',
                subTitle: 'Revisaremos tu inquietud y nos pondremos en contácto contigo lo antes posible',
                buttons: ['OK'],
            });
            alert.present();
        });
    };
    sendFeedbackService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], sendFeedbackService);
    return sendFeedbackService;
}());

//# sourceMappingURL=sendFeedback.service.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return priceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(89);
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
    function priceService(afDB, AngularFireAuth, alertCtrl) {
        this.afDB = afDB;
        this.AngularFireAuth = AngularFireAuth;
        this.alertCtrl = alertCtrl;
    }
    priceService.prototype.setPriceAndNote = function (place, user, price, note, car) {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(place + '/drivers/' + user + '/trips').update({
            //set important information with note
            price: price,
            note: note,
            car: car,
        });
    };
    priceService.prototype.setPrice = function (place, user, price, car) {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(place + '/drivers/' + user + '/trips').update({
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
    priceService.prototype.sendPaymentInfo = function (place, driverId, id, bankAccount, bankEntity) {
        var _this = this;
        this.afDB.database.ref(place + '/drivers/' + driverId).update({
            idNumber: id,
            bankAccount: bankAccount,
            bankEntity: bankEntity
        }).then(function () {
            var alert = _this.alertCtrl.create({
                title: 'Información recibida',
                subTitle: 'Si tienes un saldo pendiente por recibir mayor o igual a COP$10.000, en los próximos dias estará llegando a tu cuenta bancaria',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    priceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */]])
    ], priceService);
    return priceService;
}());

//# sourceMappingURL=price.service.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetricsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(48);
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



var MetricsService = /** @class */ (function () {
    function MetricsService(afDB, AngularFireAuth) {
        this.afDB = afDB;
        this.AngularFireAuth = AngularFireAuth;
    }
    MetricsService.prototype.createdReserves = function (place, driver, car, house, placeD, precio, startHour, typeOfReserve) {
        //send every reserve that were created
        this.afDB.database.ref('data/allReservesCreated/' + place).push({
            driver: driver,
            car: car,
            house: house,
            placeD: placeD,
            price: precio,
            startHour: startHour,
            type: typeOfReserve,
            place: place
        });
    };
    MetricsService.prototype.tripsInitiated = function (place, driverUid, keyTrip, trip) {
        //send every trip that were initiated
        this.afDB.database.ref('data/allTripsInitiated/' + place).push(trip);
    };
    MetricsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], MetricsService);
    return MetricsService;
}());

//# sourceMappingURL=metrics.service.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(48);
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
    ChatsService.prototype.getChatsFromReserve = function (place, reserveKey, driverUid) {
        //trae todos los chats del usuario
        return this.afDB.list(place + '/reserves/' + driverUid + '/' + reserveKey + '/chat/messages/').valueChanges();
    };
    ChatsService.prototype.getChatsFromTrip = function (place, reserveKey, driverUid) {
        //trae todos los chats del usuario
        return this.afDB.list(place + '/trips/' + driverUid + '/' + reserveKey + '/chat/messages/').valueChanges();
    };
    ChatsService.prototype.pushMessageUserInReserve = function (place, reserveKey, driverUid, userUid, message, name) {
        //envía todos los chats del usuario
        this.afDB.database.ref(place + '/reserves/' + driverUid + '/' + reserveKey + '/chat/messages/').push({
            message: message,
            uid: userUid,
            name: name
        });
    };
    ChatsService.prototype.pushMessageUserInTrip = function (place, reserveKey, driverUid, userUid, message, name) {
        //envía todos los chats del usuario
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + reserveKey + '/chat/messages/').push({
            message: message,
            uid: userUid,
            name: name
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

/***/ 358:
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

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(480);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_auth__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_signup_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_driverauthentication_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_sendCoords_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_sendUsers_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geofence__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_geofire_services__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_instances_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_call_number__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_price_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_email_composer_ngx__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_sendFeedback_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_chat_service__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_trips_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__mobiscroll_angular_lite__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_window_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_metrics_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_geolocation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_fcm__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_firebase__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_photo_library__ = __webpack_require__(635);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// import { ConfirmdirectionPage } from '../pages/confirmdirection/confirmdirection';













var firebaseConfig = {
    apiKey: "AIzaSyB7Py2pOZEUJD2Ar34a-8z-rReiDtsikxw",
    authDomain: "waypool-511be.firebaseapp.com",
    databaseURL: "https://waypool-511be.firebaseio.com",
    projectId: "waypool-511be",
    storageBucket: "waypool-511be.appspot.com",
    messagingSenderId: "904521954579"
    // apiKey: "AIzaSyCvN6NNgoWCbOOUxBP9H23rbb7QSnBCf60",
    // authDomain: "fixingdatabase.firebaseapp.com",
    // databaseURL: "https://fixingdatabase.firebaseio.com",
    // projectId: "fixingdatabase",
    // storageBucket: "fixingdatabase.appspot.com",
    // messagingSenderId: "1090675636677",
    // appId: "1:1090675636677:web:72c6dba455569079"
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { tabsHideOnSubPages: false,
                }, {
                    links: [
                        { loadChildren: '../pages/add-schedule/add-schedule.module#AddSchedulePageModule', name: 'AddSchedulePage', segment: 'add-schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/canceltrip/canceltrip.module#CanceltripPageModule', name: 'CanceltripPage', segment: 'canceltrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chats/chats.module#ChatsPageModule', name: 'ChatsPage', segment: 'chats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatting/chatting.module#ChattingPageModule', name: 'ChattingPage', segment: 'chatting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmreserve/confirmreserve.module#ConfirmreservationPageModule', name: 'ConfirmreservationPage', segment: 'confirmreserve', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmtrip/confirmtrip.module#ConfirmtripPageModule', name: 'ConfirmtripPage', segment: 'confirmtrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detailsreserve/detailsreserve.module#DetailsReservePagePageModule', name: 'DetailsReservePage', segment: 'detailsreserve', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payments-info/payments-info.module#PaymentsInfoPageModule', name: 'PaymentsInfoPage', segment: 'payments-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/public-profile/public-profile.module#PublicProfilePageModule', name: 'PublicProfilePage', segment: 'public-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/remove-schedule/remove-schedule.module#RemoveSchedulePageModule', name: 'RemoveSchedulePage', segment: 'remove-schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ratetrip/ratetrip.module#RatetripPageModule', name: 'RatetripPage', segment: 'ratetrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/showinfocar/showinfocar.module#ShowInfoCarPageModule', name: 'ShowInfoCarPage', segment: 'showinfocar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/successnotification/successnotification.module#SuccessNotificationPageModule', name: 'SuccessNotificationPage', segment: 'successnotification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'SupportPage', segment: 'support', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verification-number/verification-number.module#VerificationNumberPageModule', name: 'VerificationNumberPage', segment: 'verification-number', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verification-images/verification-images.module#VerificationImagesPageModule', name: 'VerificationImagesPage', segment: 'verification-images', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/walkthrough/walkthrough.module#WalkthroughPageModule', name: 'WalkthroughPage', segment: 'walkthrough', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car-registration-login/car-registration-login.module#CarRegistrationPageModule', name: 'CarRegistrationLoginPage', segment: 'car-registration-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car-registration/car-registration.module#CarRegistrationPageModule', name: 'CarRegistrationPage', segment: 'car-registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmprice/confirmprice.module#ConfirmpricePageModule', name: 'ConfirmpricePage', segment: 'confirmprice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myride/myride.module#MyridePageModule', name: 'MyridePage', segment: 'myride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservetrip/reservetrip.module#ReservetripPageModule', name: 'ReservetripPage', segment: 'reservetrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedule/schedule.module#SchedulePageModule', name: 'SchedulePage', segment: 'schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/specifyorigin/specifyorigin.module#SpecifyOriginPageModule', name: 'SpecifyOriginPage', segment: 'specifyorigin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pickup/pickup.module#PickupPageModule', name: 'PickupPage', segment: 'pickup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/findride/findride.module#FindridePageModule', name: 'FindridePage', segment: 'findride', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_fire_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_25__mobiscroll_angular_lite__["a" /* MbscModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__services_signup_service__["a" /* SignUpService */],
                __WEBPACK_IMPORTED_MODULE_10__services_driverauthentication_service__["a" /* authenticationService */],
                __WEBPACK_IMPORTED_MODULE_15__services_geofire_services__["a" /* geofireService */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_email_composer_ngx__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_11__services_sendCoords_service__["a" /* sendCoordsService */],
                __WEBPACK_IMPORTED_MODULE_12__services_sendUsers_service__["a" /* sendUsersService */],
                __WEBPACK_IMPORTED_MODULE_16__services_instances_service__["a" /* instancesService */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_geofence__["a" /* Geofence */],
                __WEBPACK_IMPORTED_MODULE_18__services_price_service__["a" /* priceService */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_geofence__["a" /* Geofence */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_email_composer_ngx__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_22__services_sendFeedback_service__["a" /* sendFeedbackService */],
                __WEBPACK_IMPORTED_MODULE_23__services_chat_service__["a" /* ChatsService */],
                __WEBPACK_IMPORTED_MODULE_24__services_trips_service__["a" /* TripsService */],
                __WEBPACK_IMPORTED_MODULE_26__services_window_service__["a" /* WindowService */],
                __WEBPACK_IMPORTED_MODULE_27__services_metrics_service__["a" /* MetricsService */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_photo_library__["a" /* PhotoLibrary */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_signup_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation___ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_firebase__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__);
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
    function MyApp(alertCtrl, statusBar, splashScreen, geolocation, platform, fcm, toastCtrl, firebase, toastController, afDB, angularFireAuth, signUpService) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.platform = platform;
        this.fcm = fcm;
        this.toastCtrl = toastCtrl;
        this.firebase = firebase;
        this.toastController = toastController;
        this.afDB = afDB;
        this.angularFireAuth = angularFireAuth;
        this.signUpService = signUpService;
        this.rootPage = 'LoginPage';
        this.pages = [];
        this.driverUninorte = [];
        this.stop = false;
        console.log('se cargo');
        this.pages = [
            { title: 'Mis viajes', component: 'ReservetripPage', icon: 'md-paper' },
            { title: 'Billetera', component: 'WalletPage', icon: 'card' },
            { title: 'Horario', component: 'SchedulePage', icon: 'time' },
            { title: 'Mi perfil', component: 'MorePage', icon: 'person' },
            { title: 'Instrucciones', component: 'WalkthroughPage', icon: 'alert' },
        ];
        statusBar.backgroundColorByHexString('#ffffff');
        splashScreen.hide();
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function () {
            console.log('location catched');
        }).catch(function (error) {
            console.log(error);
        });
        console.log('esta notificacion la queria ver');
        platform.ready().then(function () {
            // this.firebase.onNotificationOpen().subscribe((response)=>{
            //   if(response.tap){
            //     console.log('received in background');
            //   }else{
            //     const toast = this.toastController.create({
            //             message: response.body,
            //             duration: 3000
            //           })
            //           toast.present();
            //   }
            // });
            console.log('esta notificacion la queria ver');
            _this.fcm.onNotification().subscribe(function (data) {
                if (data.wasTapped) {
                    console.log('app in background');
                    console.log(JSON.stringify(data));
                }
                else {
                    console.log(JSON.stringify(data));
                }
            });
        });
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('.info/connected').on('value', function (snap) {
                if (snap.val() === false) {
                    _this.alertInternet = _this.alertCtrl.create({
                        title: '¡Oops!',
                        subTitle: 'Ocurrió un error conectándote a Waypool. Por favor verifica tu conexión a internet',
                    });
                    _this.alertInternet.present();
                }
                else if (snap.val() === true) {
                    if (_this.alertInternet) {
                        _this.alertInternet.dismiss();
                    }
                    else {
                    }
                }
            });
        }, 1500);
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                if (user.emailVerified == false) {
                    _this.rootPage = 'LoginPage';
                }
                else {
                    _this.rootPage = 'FindridePage';
                }
            }
            else {
                _this.rootPage = 'LoginPage';
            }
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page.component);
    };
    MyApp.prototype.goAsPassenger = function () {
        this.nav.setRoot('FindridePassPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/app/app.html"*/'<ion-menu [content]="content">\n        <ion-header>\n          <ion-toolbar>\n            <ion-title>Menu</ion-title>\n          </ion-toolbar>\n        </ion-header>\n        <ion-content>\n          <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n              <ion-icon style="margin-right: 10px; font-size: 26px;" name={{p.icon}}></ion-icon>      \n\n              {{p.title}}                \n            </button>\n          \n          </ion-list>\n\n        </ion-content>\n      </ion-menu>\n      \n      <ion-nav  #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation___["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_5__services_signup_service__["a" /* SignUpService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[359]);
//# sourceMappingURL=main.js.map