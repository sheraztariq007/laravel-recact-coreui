(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./resources/js/views/Base/ProgressBar/ProgressBar.js":
/*!************************************************************!*\
  !*** ./resources/js/views/Base/ProgressBar/ProgressBar.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");



class ProgressBar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "animated fadeIn"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-align-justify"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Progress"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-header-actions"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://reactstrap.github.io/components/progress/",
      rel: "noreferrer noopener",
      target: "_blank",
      className: "card-header-action"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "docs")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center"
    }, "0%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center"
    }, "25%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      value: "25"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center"
    }, "50%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      value: 50
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center"
    }, "75%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      value: 75
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center"
    }, "100%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      value: "100"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center"
    }, "Multiple bars"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      multi: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      value: "15"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      color: "success",
      value: "30"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      color: "info",
      value: "25"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      color: "warning",
      value: "20"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      color: "danger",
      value: "5"
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-align-justify"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Progress"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, " color variants")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      value: 2 * 5,
      className: "mb-3"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      color: "success",
      value: "25",
      className: "mb-3"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      color: "info",
      value: 50,
      className: "mb-3"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      color: "warning",
      value: 75,
      className: "mb-3"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      color: "danger",
      value: "100",
      className: "mb-3"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-align-justify"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Progress"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, " labels")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      value: "25",
      className: "mb-3"
    }, "25%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      value: 50,
      className: "mb-3"
    }, "1/2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      value: 75,
      className: "mb-3"
    }, "You're almost there!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      color: "success",
      value: "100",
      className: "mb-3"
    }, "You did it!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      multi: true,
      className: "mb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      value: "15"
    }, "Meh"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      color: "success",
      value: "30"
    }, "Wow!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      color: "info",
      value: "25"
    }, "Cool"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      color: "warning",
      value: "20"
    }, "20%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      color: "danger",
      value: "5"
    }, "!!")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-align-justify"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Progress"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, " striped")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      striped: true,
      value: 2 * 5,
      className: "mb-3"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      striped: true,
      color: "success",
      value: "25",
      className: "mb-3"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      striped: true,
      color: "info",
      value: 50,
      className: "mb-3"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      striped: true,
      color: "warning",
      value: 75,
      className: "mb-3"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      striped: true,
      color: "danger",
      value: "100",
      className: "mb-3"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      multi: true,
      className: "mb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      striped: true,
      bar: true,
      value: "10"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      striped: true,
      bar: true,
      color: "success",
      value: "30"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      striped: true,
      bar: true,
      color: "warning",
      value: "20"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      striped: true,
      bar: true,
      color: "danger",
      value: "20"
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-align-justify"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Progress"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, " animated")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      animated: true,
      value: 2 * 5,
      className: "mb-3"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      animated: true,
      color: "success",
      value: "25",
      className: "mb-3"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      animated: true,
      color: "info",
      value: 50,
      className: "mb-3"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      animated: true,
      color: "warning",
      value: 75,
      className: "mb-3"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      animated: true,
      color: "danger",
      value: "100",
      className: "mb-3"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      multi: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      animated: true,
      bar: true,
      value: "10"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      animated: true,
      bar: true,
      color: "success",
      value: "30"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      animated: true,
      bar: true,
      color: "warning",
      value: "20"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      animated: true,
      bar: true,
      color: "danger",
      value: "20"
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-align-justify"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Progress"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, " multiple bars / stacked")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center"
    }, "Plain"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      multi: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      value: "15"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      color: "success",
      value: "20"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      color: "info",
      value: "25"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      color: "warning",
      value: "20"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      color: "danger",
      value: "15"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center"
    }, "With Labels"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      multi: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      value: "15"
    }, "Meh"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      color: "success",
      value: "35"
    }, "Wow!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      color: "warning",
      value: "25"
    }, "25%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      color: "danger",
      value: "25"
    }, "LOOK OUT!!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center"
    }, "Stripes and Animations"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      multi: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      striped: true,
      value: "15"
    }, "Stripes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      animated: true,
      color: "success",
      value: "30"
    }, "Animated Stripes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      color: "info",
      value: "25"
    }, "Plain")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-align-justify"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Progress"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, " max value")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center"
    }, "1 of 5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      value: "1",
      max: "5"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center"
    }, "50 of 135"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      value: 50,
      max: "135"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center"
    }, "75 of 111"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      value: 75,
      max: 111
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center"
    }, "463 of 500"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      value: "463",
      max: 500
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center"
    }, "Various (40) of 55"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      multi: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      value: "5",
      max: 55
    }, "5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      color: "success",
      value: "15",
      max: 55
    }, "15"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      color: "warning",
      value: "10",
      max: 55
    }, "10"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      bar: true,
      color: "danger",
      value: "10",
      max: 55
    }, "10")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ })

}]);