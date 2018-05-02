webpackJsonp([1],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersPageModule", function() { return MembersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__members__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MembersPageModule = (function () {
    function MembersPageModule() {
    }
    MembersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__members__["a" /* MembersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__members__["a" /* MembersPage */]),
            ],
        })
    ], MembersPageModule);
    return MembersPageModule;
}());

//# sourceMappingURL=members.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
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
 * Generated class for the MembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MembersPage = (function () {
    function MembersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MembersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MembersPage');
    };
    MembersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-members',template:/*ion-inline-start:"/Users/mikey/testdev/illuminati/src/pages/members/members.html"*/'<!--\n  Generated template for the MembersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Members\n    </ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="goToWelcome()">\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-card>\n  <img src="assets/imgs/kanye.png"/>\n  <ion-card-content>\n    <ion-card-title>\n      Kanye\n    </ion-card-title>\n    <p>\n      <b>Member Since</b>: 2006\n      <br>\n      <B>Mind Control Status</B>: Regaining mind control\n      <br>\n      <b>Last malfunction</b>: November 2016\n    </p>\n\n    <p></p>\n\n    <ion-card-title>\n        Stuff\n    </ion-card-title>\n\n    <ion-list>\n        <ion-item-sliding>\n          <ion-item>\n            <h2>Dead Inside</h2>\n          </ion-item>\n          <ion-item-options side="right">\n            <button ion-button color="primary">\n              <ion-icon><span class="lnr lnr-pencil"></span></ion-icon>\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n\n      <ion-list>\n          <ion-item-sliding>\n            <ion-item>\n              <h2>Phat</h2>\n            </ion-item>\n            <ion-item-options side="right">\n              <button ion-button color="primary">\n                <ion-icon><span class="lnr lnr-laptop"></span></ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n\n        <ion-list>\n            <ion-item-sliding>\n              <ion-item>\n                <h2>Mind Control</h2>\n              </ion-item>\n              <ion-item-options side="right">\n                <button ion-button color="primary">\n                  <ion-icon><span class="lnr lnr-eye"></span></ion-icon>\n                </button>\n              </ion-item-options>\n            </ion-item-sliding>\n          </ion-list>\n\n  </ion-card-content>\n</ion-card>\n</ion-content>'/*ion-inline-end:"/Users/mikey/testdev/illuminati/src/pages/members/members.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MembersPage);
    return MembersPage;
}());

//# sourceMappingURL=members.js.map

/***/ })

});
//# sourceMappingURL=1.js.map