(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./resources/js/_nav.js":
/*!******************************!*\
  !*** ./resources/js/_nav.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// export default {
//   items: [
//     {
//       name: 'Dashboard',
//       url: '/dashboard',
//       icon: 'icon-speedometer',
//       badge: {
//         variant: 'info',
//         text: 'NEW',
//       },
//     },
//     // {
//     //   title: true,
//     //   name: 'Theme',
//     //   wrapper: {            // optional wrapper object
//     //     element: '',        // required valid HTML5 element tag
//     //     attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
//     //   },
//     //   class: ''             // optional class names space delimited list for title item ex: "text-center"
//     // },
//     {
//       name: 'Categories',
//       url: '/theme/colors',
//       icon: 'icon-drop',
//     },
//     {
//       name: 'Products',
//       url: '/theme/typography',
//       icon: 'icon-pencil',
//     },
//     {
//       title: true,
//       name: 'Components',
//       wrapper: {
//         element: '',
//         attributes: {},
//       },
//     },
//     {
//       name: 'Base',
//       url: '/base',
//       icon: 'icon-puzzle',
//       children: [
//         {
//           name: 'Breadcrumbs',
//           url: '/base/breadcrumbs',
//           icon: 'icon-puzzle',
//         },
//         {
//           name: 'Cards',
//           url: '/base/cards',
//           icon: 'icon-puzzle',
//         },
//         {
//           name: 'Carousels',
//           url: '/base/carousels',
//           icon: 'icon-puzzle',
//         },
//         {
//           name: 'Collapses',
//           url: '/base/collapses',
//           icon: 'icon-puzzle',
//         },
//         {
//           name: 'Dropdowns',
//           url: '/base/dropdowns',
//           icon: 'icon-puzzle',
//         },
//         {
//           name: 'Forms',
//           url: '/base/forms',
//           icon: 'icon-puzzle',
//         },
//         {
//           name: 'Jumbotrons',
//           url: '/base/jumbotrons',
//           icon: 'icon-puzzle',
//         },
//         {
//           name: 'List groups',
//           url: '/base/list-groups',
//           icon: 'icon-puzzle',
//         },
//         {
//           name: 'Navs',
//           url: '/base/navs',
//           icon: 'icon-puzzle',
//         },
//         {
//           name: 'Paginations',
//           url: '/base/paginations',
//           icon: 'icon-puzzle',
//         },
//         {
//           name: 'Popovers',
//           url: '/base/popovers',
//           icon: 'icon-puzzle',
//         },
//         {
//           name: 'Progress Bar',
//           url: '/base/progress-bar',
//           icon: 'icon-puzzle',
//         },
//         {
//           name: 'Switches',
//           url: '/base/switches',
//           icon: 'icon-puzzle',
//         },
//         {
//           name: 'Tables',
//           url: '/base/tables',
//           icon: 'icon-puzzle',
//         },
//         {
//           name: 'Tabs',
//           url: '/base/tabs',
//           icon: 'icon-puzzle',
//         },
//         {
//           name: 'Tooltips',
//           url: '/base/tooltips',
//           icon: 'icon-puzzle',
//         },
//       ],
//     },
//     {
//       name: 'Buttons',
//       url: '/buttons',
//       icon: 'icon-cursor',
//       children: [
//         {
//           name: 'Buttons',
//           url: '/buttons/buttons',
//           icon: 'icon-cursor',
//         },
//         {
//           name: 'Button dropdowns',
//           url: '/buttons/button-dropdowns',
//           icon: 'icon-cursor',
//         },
//         {
//           name: 'Button groups',
//           url: '/buttons/button-groups',
//           icon: 'icon-cursor',
//         },
//         {
//           name: 'Brand Buttons',
//           url: '/buttons/brand-buttons',
//           icon: 'icon-cursor',
//         },
//       ],
//     },
//     {
//       name: 'Charts',
//       url: '/charts',
//       icon: 'icon-pie-chart',
//     },
//     {
//       name: 'Icons',
//       url: '/icons',
//       icon: 'icon-star',
//       children: [
//         {
//           name: 'CoreUI Icons',
//           url: '/icons/coreui-icons',
//           icon: 'icon-star',
//           badge: {
//             variant: 'info',
//             text: 'NEW',
//           },
//         },
//         {
//           name: 'Flags',
//           url: '/icons/flags',
//           icon: 'icon-star',
//         },
//         {
//           name: 'Font Awesome',
//           url: '/icons/font-awesome',
//           icon: 'icon-star',
//           badge: {
//             variant: 'secondary',
//             text: '4.7',
//           },
//         },
//         {
//           name: 'Simple Line Icons',
//           url: '/icons/simple-line-icons',
//           icon: 'icon-star',
//         },
//       ],
//     },
//     {
//       name: 'Notifications',
//       url: '/notifications',
//       icon: 'icon-bell',
//       children: [
//         {
//           name: 'Alerts',
//           url: '/notifications/alerts',
//           icon: 'icon-bell',
//         },
//         {
//           name: 'Badges',
//           url: '/notifications/badges',
//           icon: 'icon-bell',
//         },
//         {
//           name: 'Modals',
//           url: '/notifications/modals',
//           icon: 'icon-bell',
//         },
//       ],
//     },
//     {
//       name: 'Widgets',
//       url: '/widgets',
//       icon: 'icon-calculator',
//       badge: {
//         variant: 'info',
//         text: 'NEW',
//       },
//     },
//     {
//       divider: true,
//     },
//     {
//       title: true,
//       name: 'Extras',
//     },
//     {
//       name: 'Pages',
//       url: '/pages',
//       icon: 'icon-star',
//       children: [
//         {
//           name: 'Login',
//           url: '/login',
//           icon: 'icon-star',
//         },
//         {
//           name: 'Register',
//           url: '/register',
//           icon: 'icon-star',
//         },
//         {
//           name: 'Error 404',
//           url: '/404',
//           icon: 'icon-star',
//         },
//         {
//           name: 'Error 500',
//           url: '/500',
//           icon: 'icon-star',
//         },
//       ],
//     }
//   ],
// };
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  items: [{
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  }, {
    name: 'Categories',
    url: '/categories',
    icon: 'icon-drop'
  }, {
    name: 'Products',
    url: '/products',
    icon: 'icon-pencil'
  }, {
    name: 'User Dashboard',
    url: '/userdashboard',
    icon: 'icon-pencil'
  }]
});

/***/ }),

/***/ "./resources/js/containers/DefaultLayout/DefaultLayout.js":
/*!****************************************************************!*\
  !*** ./resources/js/containers/DefaultLayout/DefaultLayout.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_nav */ "./resources/js/_nav.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routes */ "./resources/js/routes.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/AuthContext */ "./resources/js/context/AuthContext.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // sidebar nav config

 // routes config



const DefaultAside = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./DefaultAside */ "./resources/js/containers/DefaultLayout/DefaultAside.js")));
const DefaultFooter = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ./DefaultFooter */ "./resources/js/containers/DefaultLayout/DefaultFooter.js")));
const DefaultHeader = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ./DefaultHeader */ "./resources/js/containers/DefaultLayout/DefaultHeader.js")));

class DefaultLayout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "loading", () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "animated fadeIn pt-1 text-center"
    }, "Loading..."));
  }

  signOut(e) {
    e.preventDefault();
    this.props.history.push('/login');
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppHeader"], {
      fixed: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
      fallback: this.loading()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultHeader, {
      onLogout: e => this.signOut(e)
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app-body"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebar"], {
      fixed: true,
      display: "lg"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarHeader"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarForm"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarNav2"], _extends({
      navConfig: _nav__WEBPACK_IMPORTED_MODULE_4__["default"]
    }, this.props, {
      router: react_router_dom__WEBPACK_IMPORTED_MODULE_1__
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarFooter"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarMinimizer"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      className: "main"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumb2"], {
      appRoutes: _routes__WEBPACK_IMPORTED_MODULE_5__["default"],
      router: react_router_dom__WEBPACK_IMPORTED_MODULE_1__
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      fluid: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
      fallback: this.loading()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__["AuthProvider"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, _routes__WEBPACK_IMPORTED_MODULE_5__["default"].map((route, idx) => {
      return route.component ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        key: idx,
        path: route.path,
        exact: route.exact,
        name: route.name,
        render: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(route.component, props)
      }) : null;
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      from: "/",
      to: "/dashboard"
    })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppAside"], {
      fixed: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
      fallback: this.loading()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultAside, null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
      fallback: this.loading()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultFooter, null))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Breadcrumbs = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./views/Base/Breadcrumbs */ "./resources/js/views/Base/Breadcrumbs/Breadcrumbs.js")));
const Cards = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ./views/Base/Cards */ "./resources/js/views/Base/Cards/Cards.js")));
const Carousels = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./views/Base/Carousels */ "./resources/js/views/Base/Carousels/Carousels.js")));
const Collapses = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./views/Base/Collapses */ "./resources/js/views/Base/Collapses/Collapses.js")));
const Dropdowns = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./views/Base/Dropdowns */ "./resources/js/views/Base/Dropdowns/Dropdowns.js")));
const Forms = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! ./views/Base/Forms */ "./resources/js/views/Base/Forms/Forms.js")));
const Jumbotrons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ./views/Base/Jumbotrons */ "./resources/js/views/Base/Jumbotrons/Jumbotrons.js")));
const ListGroups = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ./views/Base/ListGroups */ "./resources/js/views/Base/ListGroups/ListGroups.js")));
const Navbars = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! ./views/Base/Navbars */ "./resources/js/views/Base/Navbars/Navbars.js")));
const Navs = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! ./views/Base/Navs */ "./resources/js/views/Base/Navs/Navs.js")));
const Paginations = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 24).then(__webpack_require__.bind(null, /*! ./views/Base/Paginations */ "./resources/js/views/Base/Paginations/Pagnations.js")));
const Popovers = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.bind(null, /*! ./views/Base/Popovers */ "./resources/js/views/Base/Popovers/Popovers.js")));
const ProgressBar = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 26).then(__webpack_require__.bind(null, /*! ./views/Base/ProgressBar */ "./resources/js/views/Base/ProgressBar/ProgressBar.js")));
const Switches = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 27).then(__webpack_require__.bind(null, /*! ./views/Base/Switches */ "./resources/js/views/Base/Switches/Switches.js")));
const Tables = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 28).then(__webpack_require__.bind(null, /*! ./views/Base/Tables */ "./resources/js/views/Base/Tables/Tables.js")));
const Tabs = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 29).then(__webpack_require__.bind(null, /*! ./views/Base/Tabs */ "./resources/js/views/Base/Tabs/Tabs.js")));
const Tooltips = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 30).then(__webpack_require__.bind(null, /*! ./views/Base/Tooltips */ "./resources/js/views/Base/Tooltips/Tooltips.js")));
const BrandButtons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 31).then(__webpack_require__.bind(null, /*! ./views/Buttons/BrandButtons */ "./resources/js/views/Buttons/BrandButtons/BrandButtons.js")));
const ButtonDropdowns = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ./views/Buttons/ButtonDropdowns */ "./resources/js/views/Buttons/ButtonDropdowns/ButtonDropdowns.js")));
const ButtonGroups = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 33).then(__webpack_require__.bind(null, /*! ./views/Buttons/ButtonGroups */ "./resources/js/views/Buttons/ButtonGroups/ButtonGroups.js")));
const Buttons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(null, /*! ./views/Buttons/Buttons */ "./resources/js/views/Buttons/Buttons/Buttons.js")));
const Charts = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ./views/Charts */ "./resources/js/views/Charts/Charts.js")));
const Dashboard = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./views/Dashboard */ "./resources/js/views/Dashboard/Dashboard.js")));
const CoreUIIcons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 35).then(__webpack_require__.bind(null, /*! ./views/Icons/CoreUIIcons */ "./resources/js/views/Icons/CoreUIIcons/CoreUIIcons.js")));
const Flags = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 36).then(__webpack_require__.bind(null, /*! ./views/Icons/Flags */ "./resources/js/views/Icons/Flags/Flags.js")));
const FontAwesome = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 37).then(__webpack_require__.bind(null, /*! ./views/Icons/FontAwesome */ "./resources/js/views/Icons/FontAwesome/FontAwesome.js")));
const SimpleLineIcons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 38).then(__webpack_require__.bind(null, /*! ./views/Icons/SimpleLineIcons */ "./resources/js/views/Icons/SimpleLineIcons/SimpleLineIcons.js")));
const Alerts = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 39).then(__webpack_require__.bind(null, /*! ./views/Notifications/Alerts */ "./resources/js/views/Notifications/Alerts/Alerts.js")));
const Badges = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 40).then(__webpack_require__.bind(null, /*! ./views/Notifications/Badges */ "./resources/js/views/Notifications/Badges/Badges.js")));
const Modals = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 41).then(__webpack_require__.bind(null, /*! ./views/Notifications/Modals */ "./resources/js/views/Notifications/Modals/Modals.js")));
const Colors = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(46)]).then(__webpack_require__.bind(null, /*! ./views/Theme/Colors */ "./resources/js/views/Theme/Colors/Colors.js")));
const Typography = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 47).then(__webpack_require__.bind(null, /*! ./views/Theme/Typography */ "./resources/js/views/Theme/Typography/Typography.js")));
const Widgets = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ./views/Widgets/Widgets */ "./resources/js/views/Widgets/Widgets.js")));
const Users = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./views/Users/Users */ "./resources/js/views/Users/Users.js")));
const User = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./views/Users/User */ "./resources/js/views/Users/User.js")));
const UserDashboard = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./UserDashboard */ "./resources/js/UserDashboard.js"))); // https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [{
  path: '/',
  exact: true,
  name: 'Home'
}, {
  path: '/dashboard',
  name: 'Dashboard',
  component: Dashboard
}, {
  path: '/userdashboard',
  name: 'Dashboard',
  component: UserDashboard
}, {
  path: '/theme',
  exact: true,
  name: 'Theme',
  component: Colors
}, {
  path: '/theme/colors',
  name: 'Colors',
  component: Colors
}, {
  path: '/theme/typography',
  name: 'Typography',
  component: Typography
}, {
  path: '/base',
  exact: true,
  name: 'Base',
  component: Cards
}, {
  path: '/base/cards',
  name: 'Cards',
  component: Cards
}, {
  path: '/base/forms',
  name: 'Forms',
  component: Forms
}, {
  path: '/base/switches',
  name: 'Switches',
  component: Switches
}, {
  path: '/base/tables',
  name: 'Tables',
  component: Tables
}, {
  path: '/base/tabs',
  name: 'Tabs',
  component: Tabs
}, {
  path: '/base/breadcrumbs',
  name: 'Breadcrumbs',
  component: Breadcrumbs
}, {
  path: '/base/carousels',
  name: 'Carousel',
  component: Carousels
}, {
  path: '/base/collapses',
  name: 'Collapse',
  component: Collapses
}, {
  path: '/base/dropdowns',
  name: 'Dropdowns',
  component: Dropdowns
}, {
  path: '/base/jumbotrons',
  name: 'Jumbotrons',
  component: Jumbotrons
}, {
  path: '/base/list-groups',
  name: 'List Groups',
  component: ListGroups
}, {
  path: '/base/navbars',
  name: 'Navbars',
  component: Navbars
}, {
  path: '/base/navs',
  name: 'Navs',
  component: Navs
}, {
  path: '/base/paginations',
  name: 'Paginations',
  component: Paginations
}, {
  path: '/base/popovers',
  name: 'Popovers',
  component: Popovers
}, {
  path: '/base/progress-bar',
  name: 'Progress Bar',
  component: ProgressBar
}, {
  path: '/base/tooltips',
  name: 'Tooltips',
  component: Tooltips
}, {
  path: '/buttons',
  exact: true,
  name: 'Buttons',
  component: Buttons
}, {
  path: '/buttons/buttons',
  name: 'Buttons',
  component: Buttons
}, {
  path: '/buttons/button-dropdowns',
  name: 'Button Dropdowns',
  component: ButtonDropdowns
}, {
  path: '/buttons/button-groups',
  name: 'Button Groups',
  component: ButtonGroups
}, {
  path: '/buttons/brand-buttons',
  name: 'Brand Buttons',
  component: BrandButtons
}, {
  path: '/icons',
  exact: true,
  name: 'Icons',
  component: CoreUIIcons
}, {
  path: '/icons/coreui-icons',
  name: 'CoreUI Icons',
  component: CoreUIIcons
}, {
  path: '/icons/flags',
  name: 'Flags',
  component: Flags
}, {
  path: '/icons/font-awesome',
  name: 'Font Awesome',
  component: FontAwesome
}, {
  path: '/icons/simple-line-icons',
  name: 'Simple Line Icons',
  component: SimpleLineIcons
}, {
  path: '/notifications',
  exact: true,
  name: 'Notifications',
  component: Alerts
}, {
  path: '/notifications/alerts',
  name: 'Alerts',
  component: Alerts
}, {
  path: '/notifications/badges',
  name: 'Badges',
  component: Badges
}, {
  path: '/notifications/modals',
  name: 'Modals',
  component: Modals
}, {
  path: '/widgets',
  name: 'Widgets',
  component: Widgets
}, {
  path: '/charts',
  name: 'Charts',
  component: Charts
}, {
  path: '/users',
  exact: true,
  name: 'Users',
  component: Users
}, {
  path: '/users/:id',
  exact: true,
  name: 'User Details',
  component: User
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ })

}]);