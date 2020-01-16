module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/components/AboutPage.js":
/*!*******************************************!*\
  !*** ./src/forum/components/AboutPage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AboutPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);





var AboutPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AboutPage, _Page);

  function AboutPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = AboutPage.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);
  };

  _proto.view = function view() {
    app.history.push('about', 'About');
    app.setTitle('About');
    $('meta[name=description]').attr('content', '');
    return m("div", {
      className: "Pages"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.hero(), m("div", {
      className: "Pages-container container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "AboutPage-nav IndexPage-nav sideNav",
      config: flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.affixSidebar
    }, m("ul", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.sidebarItems().toArray()))), m("article", {
      className: "Pages-content IndexPage-results sideNavOffset"
    }, m("h1", null, "About"), m("p", null, "RPGfix was born because of a need to sort through and categorize the multitudes of RPG sites that blink into existence every day \u2014 from the massive multi-server games to the smaller niche games."), m("h2", null, "What's Allowed?"), m("p", null, "RPGfix allows any game that implements role-playing elements to become listed in the directory. Generally if the site contains a role-playing medium of some sort (chat, forum, software client, avatars, etc.), it will be accepted."), m("p", null, "This includes, but is not limited to: Play-by-Post forum games, PBeMs, MMORPGs, PBBGs, simulations, and virtual pet sites."), m("h2", null, "Directory Rules"), m("ol", null, m("li", null, "You must write ", m("b", null, "at least ten"), " forum posts in order to obtain permission to submit your site(s)."), m("li", null, "Your site ", m("b", null, "must"), " be a role-playing game."), m("li", null, "If you decide to list a site in the directory, we kindly request that you place a link back to RPGfix on your site.")), m("h2", null, "Benefits of Using RPGfix"), m("ol", null, m("li", null, "RPGfix is a niche directory that caters toward online and offline role-playing games. While it allows RPGs of all types to be listed, RPGfix\u2019s primary audience appears to be with Play-by-Post/forum-based RPGs. As a result, Play-by-Post games that are listed tend to be received better."), m("li", null, "We have our directory on our domain root and are very SEO friendly."), m("li", null, "We use plain HTML links (no script redirects, rel=\"nofollow\" or other schemas) to ensure you get the most out of your backlink in regards to page rank."), m("li", null, "We do not disallow directory pages with robots.txt or a meta robots directive."), m("li", null, "We do not discriminate based on site platform. JCINK, MyBB, they're all welcome!"), m("li", null, "The ability to give your games tags so that potential players may find them easier."), m("li", null, "We do not bury listings 40 pages deep for a single category."), m("li", null, "All site owners have the ability to define their game's ", m("a", {
      href: "http://rpgrating.com/"
    }, "Universal RPG Rating"), "."), m("li", null, "If your site dies or becomes inactive, it will be moved into RPGfix\u2019s cemetery for Defunct sites. Old players then have a place to reminisce about their past favourite games."))))));
  };

  return AboutPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/PrivacyPage.js":
/*!*********************************************!*\
  !*** ./src/forum/components/PrivacyPage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivacyPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);





var PrivacyPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PrivacyPage, _Page);

  function PrivacyPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = PrivacyPage.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);
  };

  _proto.view = function view() {
    app.history.push('privacy', 'Privacy Policy');
    app.setTitle('Privacy Policy');
    $('meta[name=description]').attr('content', 'Be mindful of the information you share online.');
    return m("div", {
      className: "Pages"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.hero(), m("div", {
      className: "Pages-container container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "PrivacyPage-nav IndexPage-nav sideNav",
      config: flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.affixSidebar
    }, m("ul", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.sidebarItems().toArray()))), m("article", {
      className: "Pages-content IndexPage-results sideNavOffset"
    }, m("h1", null, "Privacy Policy"), m("p", null, m("b", null, "RPGfix respects your privacy."), " We will never sell your email addresses.  Spammers can go suck it."), m("p", null, "This Privacy Policy describes how your personal information is collected, used, and shared when you visit RPGfix."), m("h2", null, "PERSONAL INFORMATION WE COLLECT"), m("p", null, "When using services provided by RPGfix, we may require some or all of the following information:"), m("ul", null, m("li", null, "Username"), m("li", null, "Email address"), m("li", null, "Birth date")), m("p", null, "When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device."), m("ul", null, m("li", null, "Internet Protocol (IP) address"), m("li", null, "Geographical location"), m("li", null, "Browser type and version"), m("li", null, "Operating system"), m("li", null, "Referral source"), m("li", null, "Length of visit, page views, website navigation and any other related browsing activity")), m("p", null, "We collect Device Information using the following technologies:"), m("ul", null, m("li", null, m("b", null, "Cookies"), " are data files that are placed on your device or computer and often include an anonymous unique identifier. See our ", m("a", {
      href: "/help/cookies"
    }, "Cookie Usage"), " page for more detailed cookie usage information on RPGfix."), m("li", null, m("b", null, "Log files"), " track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps."), m("li", null, m("b", null, "Web beacons"), ", \u201Ctags,\u201D and \u201Cpixels\u201D are electronic files used to record information about how you browse the Site.")), m("h2", null, "WHAT WE DO WITH THE INFORMATION WE COLLECT"), m("p", null, "RPGfix uses the information we collect for the following reasons:"), m("ul", null, m("li", null, "To honour our contractual commitments to you"), m("li", null, "To log you into RPGfix"), m("li", null, "Providing a safe and enjoyable user experience"), m("li", null, "Confirmation of email address for account validity, security alerts, and relevant user-specified communications"), m("li", null, "Customer service"), m("li", null, "Improving and optimizing RPGfix's design, user experience, and placement of features"), m("li", null, "Legal compliance")), m("blockquote", null, m("h3", null, "DATA PROCESSING"), m("p", null, "We are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.")), m("h2", null, "FACEBOOK CONNECT"), m("p", null, "RPGfix will not store any personal information that may be accessible via your Facebook account (status updates, photo albums, etc.). Nor will RPGfix ever post to your Facebook account without your explicit permission."), m("h2", null, "MINORS"), m("p", null, "RPGfix is intended for users age 13 and over. We do not knowingly collect personal information from children under the age of 13. We are compliant with the ", m("a", {
      href: "http://www.coppa.org/comply.htm",
      rel: "nofollow"
    }, "Children's Online Privacy Protection Act"), " and the ", m("a", {
      href: "http://www.the-cma.org/?WCE=C=47|K=225849#11",
      rel: "nofollow"
    }, "Canadian Marketing Agency"), ". If we learn that we are engaged in that processing with such users, we will halt such processing and will take reasonable measures to promptly remove applicable information from our records."), m("h2", null, "LINKS TO OTHER SITES"), m("p", null, "RPGfix is not responsible for the content of external internet sites and privacy of any information which you provide whilst visiting such sites. You are advised to read the privacy policy of external sites before disclosing any personal information."), m("h2", null, "YOUR DATA RIGHTS AND CHOICES"), m("p", null, "When using the RPGfix forum, you may choose to limit public viewing of applicable personal information through the settings located in the Privacy section of your account."), m("p", null, "RPGfix will not sell, distribute or lease your personal information to third parties unless we have your explicit permission or are required by law to do so."), m("p", null, "You have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below."), m("h2", null, "DATA RETENTION AND YOUR RIGHT TO BE FORGOTTEN"), m("p", null, "We generally retain personal data for so long as it may be relevant to the purposes identified herein, or until you ask us to delete this information. To dispose of personal data, we may anonymize it, delete it or take other appropriate steps. Data may persist in copies made for backup and business continuity purposes for additional time."), m("h2", null, "SECURITY"), m("p", null, "While we do our best and take reasonable steps to protect your personal information, we cannot guarantee the security of any information that you transmit to RPGfix and you are solely responsible for maintaining the secrecy of any passwords or other account information."), m("h2", null, "CHANGES TO THIS PRIVACY POLICY"), m("p", null, "We reserve the right to update or modify this Privacy Policy at any time and from time to time without prior notice. Please review this policy periodically, and especially before you provide any information."), m("h2", null, "CONTACT US"), m("p", null, "For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by ", m("a", {
      href: "/misc/contact"
    }, "email"), ".")))));
  };

  return PrivacyPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/components/HeaderPrimary */ "flarum/components/HeaderPrimary");
/* harmony import */ var flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AboutPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/AboutPage */ "./src/forum/components/AboutPage.js");
/* harmony import */ var _components_PrivacyPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PrivacyPage */ "./src/forum/components/PrivacyPage.js");






/**
 * Extend top primary navigation
 */

Object(flarum_extend__WEBPACK_IMPORTED_MODULE_3__["extend"])(flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_0___default.a.prototype, 'items', function (items) {
  items.add('about', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
    children: 'About',
    href: app.route('about')
  }));
  items.add('browse', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
    children: 'Browse Games',
    href: app.route('about')
  }));
});
/**
 * Extend sidebar navigation
 */

Object(flarum_extend__WEBPACK_IMPORTED_MODULE_3__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'navItems', function (items) {
  items.add('about', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
    icon: 'fas fa-info',
    children: 'About',
    href: app.route('about')
  }));
});
/**
 * Initialize custom pages with their routes
 */

app.initializers.add('shriker/rpgfix-directory', function () {
  app.routes.about = {
    path: '/about',
    component: _components_AboutPage__WEBPACK_IMPORTED_MODULE_4__["default"].component()
  };
  app.routes.privacy = {
    path: '/privacy',
    component: _components_PrivacyPage__WEBPACK_IMPORTED_MODULE_5__["default"].component()
  };
});

/***/ }),

/***/ "flarum/components/HeaderPrimary":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/HeaderPrimary']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/HeaderPrimary'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/LinkButton":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LinkButton']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LinkButton'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/listItems":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/listItems']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/listItems'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map