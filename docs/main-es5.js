function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_main_grid_main_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/main-grid/main-grid.component */
    "./src/app/components/main-grid/main-grid.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'portfolio-display';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-main-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_main_grid_main_grid_component__WEBPACK_IMPORTED_MODULE_2__["MainGridComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_main_grid_main_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/main-grid/main-grid.component */
    "./src/app/components/main-grid/main-grid.component.ts");
    /* harmony import */


    var _components_entry_entry_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/entry/entry.component */
    "./src/app/components/entry/entry.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_main_grid_main_grid_component__WEBPACK_IMPORTED_MODULE_4__["MainGridComponent"], _components_entry_entry_component__WEBPACK_IMPORTED_MODULE_5__["EntryComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_main_grid_main_grid_component__WEBPACK_IMPORTED_MODULE_4__["MainGridComponent"], _components_entry_entry_component__WEBPACK_IMPORTED_MODULE_5__["EntryComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/entry/entry.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/entry/entry.component.ts ***!
    \*****************************************************/

  /*! exports provided: EntryComponent */

  /***/
  function srcAppComponentsEntryEntryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntryComponent", function () {
      return EntryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var EntryComponent = /*#__PURE__*/function () {
      function EntryComponent() {
        _classCallCheck(this, EntryComponent);
      }

      _createClass(EntryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick() {
          window.open(this.entry.link);
        }
      }]);

      return EntryComponent;
    }();

    EntryComponent.ɵfac = function EntryComponent_Factory(t) {
      return new (t || EntryComponent)();
    };

    EntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EntryComponent,
      selectors: [["app-entry"]],
      inputs: {
        entry: "entry"
      },
      decls: 7,
      vars: 3,
      consts: [[1, "entry-wrapper", 3, "click"], [1, "image-wrapper"], [1, "image", 3, "src"]],
      template: function EntryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntryComponent_Template_mat_card_click_0_listener() {
            return ctx.onClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.entry.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.entry.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.entry.description);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"]],
      styles: [".image[_ngcontent-%COMP%]{\n    width: 10vw;\n    height: 10vw;\n    border-radius: 50%;\n }\n\n .image-wrapper[_ngcontent-%COMP%]{\n    -o-object-fit: cover;\n       object-fit: cover;\n }\n\n .entry-wrapper[_ngcontent-%COMP%]{\n     text-align: center;\n }\n\n .entry-wrapper[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 8px 8px 8px rgba(0,0,0,.2), 0 8px 8px 0 rgba(0,0,0,.14), 0 8px 8px 0 rgba(0,0,0,.12) !important;\n    transform: translate3d(0,0,0);\n    transition: background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbnRyeS9lbnRyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7Q0FDckI7O0NBRUE7SUFDRyxvQkFBaUI7T0FBakIsaUJBQWlCO0NBQ3BCOztDQUVBO0tBQ0ksa0JBQWtCO0NBQ3RCOztDQUVBO0lBQ0csNkdBQTZHO0lBQzdHLDZCQUE2QjtJQUM3Qiw4RkFBOEY7SUFDOUYsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50cnkvZW50cnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZXtcbiAgICB3aWR0aDogMTB2dztcbiAgICBoZWlnaHQ6IDEwdnc7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuIH1cblxuIC5pbWFnZS13cmFwcGVye1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuIH1cblxuIC5lbnRyeS13cmFwcGVye1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gfVxuXG4gLmVudHJ5LXdyYXBwZXI6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDhweCA4cHggcmdiYSgwLDAsMCwuMiksIDAgOHB4IDhweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCA4cHggOHB4IDAgcmdiYSgwLDAsMCwuMTIpICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-entry',
          templateUrl: './entry.component.html',
          styleUrls: ['./entry.component.css']
        }]
      }], function () {
        return [];
      }, {
        entry: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.headerText = "";
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 3,
      vars: 1,
      consts: [[1, "header"], [1, "text"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headerText);
        }
      },
      styles: [".header[_ngcontent-%COMP%] {\n    padding: 10px 14px;\n    background: #555;\n    color: #f1f1f1;\n    top: 0;\n    width: 100%;\n    position: fixed;\n  }\n\n.text[_ngcontent-%COMP%]{\n    padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxNQUFNO0lBQ04sV0FBVztJQUNYLGVBQWU7RUFDakI7O0FBRUY7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgYmFja2dyb3VuZDogIzU1NTtcbiAgICBjb2xvcjogI2YxZjFmMTtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG5cbi50ZXh0e1xuICAgIHBhZGRpbmc6IDEwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main-grid/main-grid.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/main-grid/main-grid.component.ts ***!
    \*************************************************************/

  /*! exports provided: MainGridComponent */

  /***/
  function srcAppComponentsMainGridMainGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainGridComponent", function () {
      return MainGridComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _services_entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/entry.service */
    "./src/app/services/entry.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _entry_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../entry/entry.component */
    "./src/app/components/entry/entry.component.ts");

    function MainGridComponent_app_entry_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-entry", 2);
      }

      if (rf & 2) {
        var entry_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entry", entry_r1);
      }
    }

    var MainGridComponent = /*#__PURE__*/function () {
      function MainGridComponent(entryService) {
        _classCallCheck(this, MainGridComponent);

        this.entryService = entryService;
      }

      _createClass(MainGridComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.entryList = this.entryService.getEntries();
        }
      }]);

      return MainGridComponent;
    }();

    MainGridComponent.ɵfac = function MainGridComponent_Factory(t) {
      return new (t || MainGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"]));
    };

    MainGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainGridComponent,
      selectors: [["app-main-grid"]],
      decls: 2,
      vars: 2,
      consts: [[1, "wrapper"], ["class", "item", 3, "entry", 4, "ngFor", "ngForOf"], [1, "item", 3, "entry"]],
      template: function MainGridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainGridComponent_app_entry_1_Template, 1, 1, "app-entry", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fade", ctx.entryList.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.entryList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _entry_entry_component__WEBPACK_IMPORTED_MODULE_4__["EntryComponent"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: column wrap;\n    align-content: space-between;\n    height: 2000px;\n    margin: 20px;\n    padding-top:  50px;\n  }\n  \n  .item[_ngcontent-%COMP%] {\n    width: 32%;\n    margin-bottom: 2%; \n  }\n  \n  \n  \n  .item[_ngcontent-%COMP%]:nth-child(3n+1) { order: 1; }\n  \n  .item[_ngcontent-%COMP%]:nth-child(3n+2) { order: 2; }\n  \n  .item[_ngcontent-%COMP%]:nth-child(3n)   { order: 3; }\n  \n  \n  \n  .wrapper[_ngcontent-%COMP%]::before, .wrapper[_ngcontent-%COMP%]::after {\n    content: \"\";\n    flex-basis: 100%;\n    width: 0;\n    order: 2;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWdyaWQvbWFpbi1ncmlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQixFQUFFLGlCQUFpQjtFQUN0Qzs7RUFFQSw2QkFBNkI7O0VBQzdCLHdCQUF3QixRQUFRLEVBQUU7O0VBQ2xDLHdCQUF3QixRQUFRLEVBQUU7O0VBQ2xDLHdCQUF3QixRQUFRLEVBQUU7O0VBRWxDLHNCQUFzQjs7RUFDdEI7O0lBRUUsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsUUFBUTtFQUNWIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluLWdyaWQvbWFpbi1ncmlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogMjAwMHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogIDUwcHg7XG4gIH1cbiAgXG4gIC5pdGVtIHtcbiAgICB3aWR0aDogMzIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlOyAvKiAoMTAwLTMyKjMpLzIgKi9cbiAgfVxuICBcbiAgLyogUmUtb3JkZXIgaXRlbXMgaW50byByb3dzICovXG4gIC5pdGVtOm50aC1jaGlsZCgzbisxKSB7IG9yZGVyOiAxOyB9XG4gIC5pdGVtOm50aC1jaGlsZCgzbisyKSB7IG9yZGVyOiAyOyB9XG4gIC5pdGVtOm50aC1jaGlsZCgzbikgICB7IG9yZGVyOiAzOyB9XG4gIFxuICAvKiBGb3JjZSBuZXcgY29sdW1ucyAqL1xuICAud3JhcHBlcjo6YmVmb3JlLFxuICAud3JhcHBlcjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgICB3aWR0aDogMDtcbiAgICBvcmRlcjogMjtcbiAgfSJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0
        })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(500, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1
        }))])], {
          optional: true
        })])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-grid',
          templateUrl: './main-grid.component.html',
          styleUrls: ['./main-grid.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(500, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1
          }))])], {
            optional: true
          })])])]
        }]
      }], function () {
        return [{
          type: _services_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/entry.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/entry.service.ts ***!
    \*******************************************/

  /*! exports provided: EntryService */

  /***/
  function srcAppServicesEntryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntryService", function () {
      return EntryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EntryService = /*#__PURE__*/function () {
      function EntryService() {
        _classCallCheck(this, EntryService);
      }

      _createClass(EntryService, [{
        key: "getEntries",
        value: function getEntries() {
          return [{
            title: "Andell.eu",
            image: "assets/images/andell.eu.png",
            link: "https://andell.eu/Oscar",
            description: "Personal website developed in React and Flask. I enjoy learning and experimenting with different technologies and solutions. One such project is my personal website made for displaying contact info, CV and portfolio. The site is a self-hosted web application with a React frontend and a flask backend site serving data from a MySQL database."
          }, {
            title: "Riksdagskollen",
            image: "https://lh3.googleusercontent.com/E5_pihuiIT0FkSSiK7HNa2l1oAgXEhoTE_d577a8nk9pW3cslC3rrqKIe8LkYt0DXF4=s360-rw",
            link: "https://play.google.com/store/apps/details?id=se.oandell.riksdagen&hl=en",
            description: "The creator and one of two of the developers of the Android application Riksdagskollen. Riksdagskollen is an application that provides an accessible way to follow the elected representatives and view the work that goes on in the Swedish parliament. Riksdagskollen parses the public API from the Swedish parliament and offers features such as viewing, reading and listening to debates, viewing decisions and voting history, customized push notifications and more. Riksdagskollen also integrates the Twitter API to show elected officials and parties tweet timelines. The app is available on Google Play and has since its launch received thousands of downloads and a lot of positive feedback from users. "
          }, {
            title: "LinkedIn",
            image: "assets/images/Linkedin.png",
            link: "https://www.linkedin.com/in/oscar-andell-156ba0138/",
            description: "Connect with me on LinkedIn"
          }, {
            title: "Windy Tree Animation",
            image: "https://raw.githubusercontent.com/OAndell/windy-tree-animation/master/screenshot.png",
            link: "https://oandell.github.io/windy-tree-animation/",
            description: "Some experimentation with grapical programming. Written in the Javascript library P5.js"
          }, {
            title: "Resume",
            image: "https://andell.eu/profileImages/oscar2.jpg",
            link: "https://drive.google.com/file/d/1mSyWhLg_nIY8-Y4mIKmlz15DazuTFeyR/view",
            description: "My CV"
          }, {
            title: "Github Profile",
            image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            link: "https://github.com/OAndell",
            description: "Collections of projects and idéas in varius states of completion"
          }, {
            title: "Instagram",
            image: "assets/images/instagram.png",
            link: "https://www.instagram.com/oscarandell/",
            description: "Some pictures"
          }];
        }
      }]);

      return EntryService;
    }();

    EntryService.ɵfac = function EntryService_Factory(t) {
      return new (t || EntryService)();
    };

    EntryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EntryService,
      factory: EntryService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/oscar/Documents/Github/portfolio-display/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map