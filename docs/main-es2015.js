(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<main class=\"content\">\n  <div class=\"menu-wrapper\">\n    <app-note-list-menu [notes]=\"(noteService.notes$ | async)\"></app-note-list-menu>\n  </div>\n  <div class=\"route-wrapper\">\n    <router-outlet></router-outlet>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"header\">\n  <h1 class=\"header-title\">Мои заметки</h1>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/note-card/note-card.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/note-card/note-card.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"note-card\"\n  *ngIf=\"(noteData | async); else notFoundNote\"\n>\n  <h2 class=\"note-title\">{{ (noteData | async).title }}</h2>\n\n  <p class=\"note-description\">\n    {{ (noteData | async).descriptions }}\n  </p>\n</div>\n\n<ng-template #notFoundNote>\n  <p class=\"not-found-title\">Заметка с id {{ noteId }} - не найдена :(</p>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/note-form/note-form.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/note-form/note-form.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n  [formGroup]=\"noteForm\"\n  (ngSubmit)=\"submit()\"\n  class=\"form\"\n>\n\n  <h2 class=\"form-header\">Создание заметки</h2>\n\n  <div class=\"form-control\">\n    <label\n      class=\"form-title\"\n      for=\"title\"\n    >Заголовок: </label>\n    <div>\n      <input\n        id=\"title\"\n        type=\"title\"\n        formControlName=\"title\"\n      >\n      <div\n        *ngIf=\"noteForm.get('title')?.touched && noteForm.get('title')?.invalid\"\n        class=\"validation\"\n      >\n        <small *ngIf=\"noteForm.get('title')?.errors?.required\">Введите заголовок</small>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-control\">\n    <label\n      class=\"form-title\"\n      for=\"descriptions\"\n    >Описание: </label>\n    <div>\n      <textarea\n        id=\"descriptions\"\n        type=\"descriptions\"\n        formControlName=\"descriptions\"\n      > </textarea>\n      <div\n        *ngIf=\"noteForm.get('descriptions')?.touched && noteForm.get('title')?.invalid\"\n        class=\"validation\"\n      >\n        <small *ngIf=\"noteForm.get('descriptions')?.errors?.required\">Введите описание</small>\n      </div>\n    </div>\n  </div>\n\n  <button\n    type=\"submit\"\n    class=\"submit-button\"\n    [disabled]=\"noteForm.invalid\"\n  >Создать</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/note-list-menu/note-list-menu.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/note-list-menu/note-list-menu.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"menu-wrapper\">\n\n  <div class=\"add-button-wrapper\">\n    <a\n      class=\"add-button\"\n      routerLink=\"create\"\n      routerLinkActive=\"note-item-link__active\"\n    >\n      + Добавить\n    </a>\n  </div>\n\n  <ul class=\"note-list\">\n    <li\n      *ngFor=\"let note of notes\"\n      class=\"note-item\"\n    >\n      <a\n        class=\"note-item-link\"\n        [routerLink]=\"['note', note.id]\"\n        routerLinkActive=\"note-item-link__active\"\n      >\n        {{ note.title }}\n      </a>\n    </li>\n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./note-card/note-card.component */ "./src/app/note-card/note-card.component.ts");
/* harmony import */ var _note_form_note_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note-form/note-form.component */ "./src/app/note-form/note-form.component.ts");





const routes = [
    {
        path: "",
        component: _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_3__["NoteCardComponent"],
    },
    {
        path: "note/:noteId",
        component: _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_3__["NoteCardComponent"],
    },
    {
        path: "create",
        component: _note_form_note_form_component__WEBPACK_IMPORTED_MODULE_4__["NoteFormComponent"],
    },
    {
        path: "**",
        component: _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_3__["NoteCardComponent"],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {})],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  display: flex;\n}\n\n.route-wrapper {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZHIvRGVza3RvcC/QotC10YHRgtC+0LLRi9C1INC/0YDQvtC10LrRgtGLL25vdGUtYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5yb3V0ZS13cmFwcGVyIHtcbiAgZmxleC1ncm93OiAxO1xufVxuIiwiLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucm91dGUtd3JhcHBlciB7XG4gIGZsZXgtZ3JvdzogMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/note.service */ "./src/app/services/note.service.ts");



let AppComponent = class AppComponent {
    constructor(noteService) {
        this.noteService = noteService;
    }
    ngOnInit() {
        this.noteService.initNote();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        providers: [_services_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./note-card/note-card.component */ "./src/app/note-card/note-card.component.ts");
/* harmony import */ var _note_list_menu_note_list_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./note-list-menu/note-list-menu.component */ "./src/app/note-list-menu/note-list-menu.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _note_form_note_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./note-form/note-form.component */ "./src/app/note-form/note-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_note_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/note.service */ "./src/app/services/note.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_5__["NoteCardComponent"],
            _note_list_menu_note_list_menu_component__WEBPACK_IMPORTED_MODULE_6__["NoteListMenuComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _note_form_note_form_component__WEBPACK_IMPORTED_MODULE_8__["NoteFormComponent"],
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]],
        providers: [_services_note_service__WEBPACK_IMPORTED_MODULE_10__["NoteService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["APP_BASE_HREF"], useValue: "note-app" }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  height: 8.5vh;\n  border: 2px solid black;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.header-title {\n  margin-left: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZHIvRGVza3RvcC/QotC10YHRgtC+0LLRi9C1INC/0YDQvtC10LrRgtGLL25vdGUtYXBwL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgaGVpZ2h0OiA4LjV2aDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICYtdGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICB9XG59XG4iLCIuaGVhZGVyIHtcbiAgaGVpZ2h0OiA4LjV2aDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlci10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/note-card/note-card.component.scss":
/*!****************************************************!*\
  !*** ./src/app/note-card/note-card.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".not-found-title {\n  display: flex;\n  justify-content: center;\n  margin-top: 40vh;\n}\n\n.note-card {\n  overflow: auto;\n  margin: 15px;\n}\n\n.note-card .note-title {\n  color: #b7acfa;\n}\n\n.note-card .note-description {\n  padding-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZHIvRGVza3RvcC/QotC10YHRgtC+0LLRi9C1INC/0YDQvtC10LrRgtGLL25vdGUtYXBwL3NyYy9hcHAvbm90ZS1jYXJkL25vdGUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbm90ZS1jYXJkL25vdGUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENFO0VBQ0UsY0FBQTtBQ0NKOztBREVFO0VBQ0UsaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL25vdGUtY2FyZC9ub3RlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90LWZvdW5kLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwdmg7XG59XG5cbi5ub3RlLWNhcmQge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWFyZ2luOiAxNXB4O1xuXG4gIC5ub3RlLXRpdGxlIHtcbiAgICBjb2xvcjogI2I3YWNmYTtcbiAgfVxuXG4gIC5ub3RlLWRlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgfVxufVxuIiwiLm5vdC1mb3VuZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHZoO1xufVxuXG4ubm90ZS1jYXJkIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1hcmdpbjogMTVweDtcbn1cbi5ub3RlLWNhcmQgLm5vdGUtdGl0bGUge1xuICBjb2xvcjogI2I3YWNmYTtcbn1cbi5ub3RlLWNhcmQgLm5vdGUtZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/note-card/note-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/note-card/note-card.component.ts ***!
  \**************************************************/
/*! exports provided: NoteCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteCardComponent", function() { return NoteCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_note_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/note.service */ "./src/app/services/note.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let NoteCardComponent = class NoteCardComponent {
    constructor(route, noteService) {
        this.route = route;
        this.noteService = noteService;
        this.unsubscriber$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    get noteId() {
        return this.route.snapshot.params["noteId"];
    }
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscriber$)).subscribe(() => {
            if (this.noteId) {
                this.noteData = this.noteService.getNoteById(this.noteId);
            }
        });
    }
    ngOnDestroy() {
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    }
};
NoteCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_note_service__WEBPACK_IMPORTED_MODULE_3__["NoteService"] }
];
NoteCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-note-card",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./note-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/note-card/note-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./note-card.component.scss */ "./src/app/note-card/note-card.component.scss")).default]
    })
], NoteCardComponent);



/***/ }),

/***/ "./src/app/note-form/note-form.component.scss":
/*!****************************************************!*\
  !*** ./src/app/note-form/note-form.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form {\n  padding: 12px;\n}\n.form-control {\n  display: flex;\n  flex-wrap: wrap;\n  color: #888;\n  margin-bottom: 0.8rem;\n}\n.form-control div {\n  width: 100%;\n}\n.form-header {\n  font-size: 28px;\n  text-align: center;\n  margin: 18px 0;\n}\n.form .form-title {\n  font-size: 1.2rem;\n  padding: 0.4em;\n}\n.form .validation {\n  color: #b10012;\n}\n.form input,\n.form textarea {\n  display: block;\n  width: 100%;\n  padding: 0.4rem;\n  font-size: 1.2rem;\n  border: 1px solid #ccc;\n}\n.form input[type=submit],\n.form button {\n  font: inherit;\n}\n.form .submit-button {\n  height: 2.5rem;\n  padding: 0.2rem 1.3rem;\n  font-size: 1rem;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  border-radius: 0.5rem;\n  display: block;\n  width: 100%;\n  background: #7765eb;\n  color: #fff;\n}\n.form .submit-button:disabled {\n  cursor: not-allowed;\n  background: #f4f4f4;\n  color: #111;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZHIvRGVza3RvcC/QotC10YHRgtC+0LLRi9C1INC/0YDQvtC10LrRgtGLL25vdGUtYXBwL3NyYy9hcHAvbm90ZS1mb3JtL25vdGUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbm90ZS1mb3JtL25vdGUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNDSjtBRENJO0VBQ0UsV0FBQTtBQ0NOO0FER0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDREo7QURJRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0ZKO0FES0U7RUFDRSxjQUFBO0FDSEo7QURNRTs7RUFFRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDSko7QURPRTs7RUFFRSxhQUFBO0FDTEo7QURRRTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDTko7QURRSTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDTk4iLCJmaWxlIjoic3JjL2FwcC9ub3RlLWZvcm0vbm90ZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xuICBwYWRkaW5nOiAxMnB4O1xuXG4gICYtY29udHJvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgY29sb3I6ICM4ODg7XG4gICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xuXG4gICAgZGl2IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gICYtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMThweCAwO1xuICB9XG5cbiAgLmZvcm0tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDAuNGVtO1xuICB9XG5cbiAgLnZhbGlkYXRpb24ge1xuICAgIGNvbG9yOiAjYjEwMDEyO1xuICB9XG5cbiAgaW5wdXQsXG4gIHRleHRhcmVhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjRyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgfVxuXG4gIGlucHV0W3R5cGU9J3N1Ym1pdCddLFxuICBidXR0b24ge1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gIH1cblxuICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgcGFkZGluZzogMC4ycmVtIDEuM3JlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICM3NzY1ZWI7XG4gICAgY29sb3I6ICNmZmY7XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICAgICAgY29sb3I6ICMxMTE7XG4gICAgfVxuICB9XG59XG4iLCIuZm9ybSB7XG4gIHBhZGRpbmc6IDEycHg7XG59XG4uZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBjb2xvcjogIzg4ODtcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xufVxuLmZvcm0tY29udHJvbCBkaXYge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb3JtLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDE4cHggMDtcbn1cbi5mb3JtIC5mb3JtLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHBhZGRpbmc6IDAuNGVtO1xufVxuLmZvcm0gLnZhbGlkYXRpb24ge1xuICBjb2xvcjogI2IxMDAxMjtcbn1cbi5mb3JtIGlucHV0LFxuLmZvcm0gdGV4dGFyZWEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG4uZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0sXG4uZm9ybSBidXR0b24ge1xuICBmb250OiBpbmhlcml0O1xufVxuLmZvcm0gLnN1Ym1pdC1idXR0b24ge1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgcGFkZGluZzogMC4ycmVtIDEuM3JlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICM3NzY1ZWI7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmZvcm0gLnN1Ym1pdC1idXR0b246ZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICBjb2xvcjogIzExMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/note-form/note-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/note-form/note-form.component.ts ***!
  \**************************************************/
/*! exports provided: NoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteFormComponent", function() { return NoteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_create_note_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/create-note.service */ "./src/app/services/create-note.service.ts");




let NoteFormComponent = class NoteFormComponent {
    constructor(noteService) {
        this.noteService = noteService;
        this.noteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            descriptions: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    submit() {
        this.noteService.createNote(this.noteForm.value);
        this.noteForm.reset();
    }
};
NoteFormComponent.ctorParameters = () => [
    { type: _services_create_note_service__WEBPACK_IMPORTED_MODULE_3__["CreateNoteService"] }
];
NoteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-note-form",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./note-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/note-form/note-form.component.html")).default,
        providers: [_services_create_note_service__WEBPACK_IMPORTED_MODULE_3__["CreateNoteService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./note-form.component.scss */ "./src/app/note-form/note-form.component.scss")).default]
    })
], NoteFormComponent);



/***/ }),

/***/ "./src/app/note-list-menu/note-list-menu.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/note-list-menu/note-list-menu.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-wrapper {\n  border-right: 2px solid black;\n  height: 91.5vh;\n  background-color: #edebeb;\n}\n\n.add-button-wrapper {\n  padding: 7px;\n}\n\n.add-button {\n  box-shadow: -2px 3px 8px 3px rgba(34, 60, 80, 0.2);\n  color: #fff;\n  background-color: #a699f7;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  padding: 7px 0;\n  padding-left: 8px;\n  height: 40px;\n  width: 100%;\n  font-weight: 600;\n  min-width: 200px;\n  border: none;\n  border-radius: 0.5rem;\n}\n\n.add-button a {\n  text-decoration: none;\n}\n\n.note-list {\n  height: 85vh;\n  overflow: auto;\n}\n\n.note-item {\n  padding: 0 8px 8px;\n}\n\n.note-item-link {\n  box-shadow: -2px 3px 8px -4px rgba(34, 60, 80, 0.2);\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  padding: 7px 0;\n  padding-left: 8px;\n  height: 40px;\n  width: 100%;\n  font-weight: 600;\n  min-width: 200px;\n  background-color: #fff;\n  text-decoration: none;\n  color: black;\n}\n\n.note-item:first-of-type {\n  padding-top: 8px;\n}\n\n.note-item-link__active {\n  background-color: #7765eb;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZHIvRGVza3RvcC/QotC10YHRgtC+0LLRi9C1INC/0YDQvtC10LrRgtGLL25vdGUtYXBwL3NyYy9hcHAvbm90ZS1saXN0LW1lbnUvbm90ZS1saXN0LW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25vdGUtbGlzdC1tZW51L25vdGUtbGlzdC1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtEQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURDRTtFQUNFLHFCQUFBO0FDQ0o7O0FER0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURFRTtFQUNFLG1EQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvbm90ZS1saXN0LW1lbnUvbm90ZS1saXN0LW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS13cmFwcGVyIHtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogOTEuNXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlYmViO1xufVxuXG4uYWRkLWJ1dHRvbi13cmFwcGVyIHtcbiAgcGFkZGluZzogN3B4O1xufVxuXG4uYWRkLWJ1dHRvbiB7XG4gIGJveC1zaGFkb3c6IC0ycHggM3B4IDhweCAzcHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2OTlmNztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA3cHggMDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuXG4ubm90ZS1saXN0IHtcbiAgaGVpZ2h0OiA4NXZoO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm5vdGUtaXRlbSB7XG4gIHBhZGRpbmc6IDAgOHB4IDhweDtcblxuICAmLWxpbmsge1xuICAgIGJveC1zaGFkb3c6IC0ycHggM3B4IDhweCAtNHB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDdweCAwO1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG59XG5cbi5ub3RlLWl0ZW06Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5ub3RlLWl0ZW0tbGlua19fYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NjVlYjtcbiAgY29sb3I6ICNmZmY7XG59XG4iLCIubWVudS13cmFwcGVyIHtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogOTEuNXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlYmViO1xufVxuXG4uYWRkLWJ1dHRvbi13cmFwcGVyIHtcbiAgcGFkZGluZzogN3B4O1xufVxuXG4uYWRkLWJ1dHRvbiB7XG4gIGJveC1zaGFkb3c6IC0ycHggM3B4IDhweCAzcHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2OTlmNztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA3cHggMDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuLmFkZC1idXR0b24gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm5vdGUtbGlzdCB7XG4gIGhlaWdodDogODV2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5ub3RlLWl0ZW0ge1xuICBwYWRkaW5nOiAwIDhweCA4cHg7XG59XG4ubm90ZS1pdGVtLWxpbmsge1xuICBib3gtc2hhZG93OiAtMnB4IDNweCA4cHggLTRweCByZ2JhKDM0LCA2MCwgODAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogN3B4IDA7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm5vdGUtaXRlbTpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLm5vdGUtaXRlbS1saW5rX19hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc2NWViO1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/note-list-menu/note-list-menu.component.ts":
/*!************************************************************!*\
  !*** ./src/app/note-list-menu/note-list-menu.component.ts ***!
  \************************************************************/
/*! exports provided: NoteListMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteListMenuComponent", function() { return NoteListMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NoteListMenuComponent = class NoteListMenuComponent {
    constructor() {
        this.notes = null;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NoteListMenuComponent.prototype, "notes", void 0);
NoteListMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-note-list-menu",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./note-list-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/note-list-menu/note-list-menu.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./note-list-menu.component.scss */ "./src/app/note-list-menu/note-list-menu.component.scss")).default]
    })
], NoteListMenuComponent);



/***/ }),

/***/ "./src/app/services/create-note.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/create-note.service.ts ***!
  \*************************************************/
/*! exports provided: CreateNoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNoteService", function() { return CreateNoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _note_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note.helper */ "./src/app/services/note.helper.ts");
/* harmony import */ var _note_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./note.service */ "./src/app/services/note.service.ts");




let CreateNoteService = class CreateNoteService {
    constructor(noteService) {
        this.noteService = noteService;
    }
    createNote(newNote) {
        this.saveNote(newNote);
    }
    saveNote(newNote) {
        const notes = Object(_note_helper__WEBPACK_IMPORTED_MODULE_2__["getNotes"])();
        if (notes) {
            this.updateNotes(notes, newNote);
            return;
        }
        this.saveNoteToLocalStorage([this.preparetNode(newNote)]);
    }
    updateNotes(notes, newNote) {
        const preparatedNote = this.preparetNode(newNote);
        notes.push(preparatedNote);
        this.saveNoteToLocalStorage(notes);
    }
    getUid() {
        const uid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
        return uid;
    }
    saveNoteToLocalStorage(notes) {
        localStorage.setItem("notes", JSON.stringify(notes));
        this.noteService.updateNotes();
    }
    preparetNode(note) {
        const preparatedNote = Object.assign({}, note, { id: this.getUid() });
        return preparatedNote;
    }
};
CreateNoteService.ctorParameters = () => [
    { type: _note_service__WEBPACK_IMPORTED_MODULE_3__["NoteService"] }
];
CreateNoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CreateNoteService);



/***/ }),

/***/ "./src/app/services/note.helper.ts":
/*!*****************************************!*\
  !*** ./src/app/services/note.helper.ts ***!
  \*****************************************/
/*! exports provided: getNotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotes", function() { return getNotes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const getNotes = () => {
    const notes = localStorage.getItem("notes");
    return JSON.parse(notes);
};


/***/ }),

/***/ "./src/app/services/note.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/note.service.ts ***!
  \******************************************/
/*! exports provided: NoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteService", function() { return NoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _note_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./note.helper */ "./src/app/services/note.helper.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let NoteService = class NoteService {
    constructor(ngZone, router) {
        this.ngZone = ngZone;
        this.router = router;
        this.noteSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](Object(_note_helper__WEBPACK_IMPORTED_MODULE_3__["getNotes"])());
    }
    get notes$() {
        return this.noteSubject$.asObservable();
    }
    updateNotes() {
        const notes = Object(_note_helper__WEBPACK_IMPORTED_MODULE_3__["getNotes"])();
        this.noteSubject$.next(notes);
    }
    getNoteById(id) {
        return this.notes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((notes) => {
            const note = notes.find((note) => note.id === id);
            return note;
        }));
    }
    initNote() {
        const notes = Object(_note_helper__WEBPACK_IMPORTED_MODULE_3__["getNotes"])();
        if (notes) {
            this.ngZone.run(() => this.router.navigate(["note", notes[0].id]));
            return;
        }
        this.ngZone.run(() => this.router.navigate(["create"]));
    }
};
NoteService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
NoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NoteService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aleksandr/Desktop/Тестовые проекты/note-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map