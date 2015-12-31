webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	var _reactDom = __webpack_require__(158);

	var _reactRedux = __webpack_require__(159);

	var _reactRouter = __webpack_require__(177);

	var _reduxRouter = __webpack_require__(224);

	var _Root = __webpack_require__(237);

	var _auth = __webpack_require__(358);

	var _reactTapEventPlugin = __webpack_require__(417);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	__webpack_require__(421);

	var _Client = __webpack_require__(359);

	var _store = __webpack_require__(425);

	__webpack_require__(434);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	(0, _reactTapEventPlugin2.default)();

	window.client = _Client.client;

	var store = (0, _store.configureStore)({
		app: {
			auth: null,
			error: null
		}
	});

	(0, _reactDom.render)(React.createElement(_Root.Root, { store: store }), document.getElementById('app'));

	//bootstrap
	store.dispatch((0, _auth.checkAuth)());

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var react_redux_1 = __webpack_require__(159);
	var redux_router_1 = __webpack_require__(224);
	var routes_1 = __webpack_require__(238);

	var Root = (function (_React$Component) {
	    _inherits(Root, _React$Component);

	    function Root() {
	        _classCallCheck(this, Root);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Root).apply(this, arguments));
	    }

	    _createClass(Root, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(react_redux_1.Provider, { "store": this.props.store }, React.createElement(redux_router_1.ReduxRouter, null, routes_1.routes));
	        }
	    }]);

	    return Root;
	})(React.Component);

	exports.Root = Root;

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var react_router_1 = __webpack_require__(177);
	var App_1 = __webpack_require__(239);
	var Home_1 = __webpack_require__(324);
	var Feed_1 = __webpack_require__(365);
	var Login_1 = __webpack_require__(410);
	exports.routes = React.createElement(react_router_1.Route, { "path": "/", "component": App_1.App }, React.createElement(react_router_1.IndexRedirect, { "to": "/home/feed" }), React.createElement(react_router_1.Route, { "path": "home", "component": Home_1.Home }, React.createElement(react_router_1.Route, { "path": "feed", "component": Feed_1.Feed })), React.createElement(react_router_1.Route, { "path": "login", "component": Login_1.Login }));

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var ThemeWrapper = __webpack_require__(240);
	var ThemeManager = __webpack_require__(241);
	var react_redux_1 = __webpack_require__(159);
	var Dialog = __webpack_require__(268);
	var RaisedButton = __webpack_require__(316);
	var app_1 = __webpack_require__(317);
	var theme_1 = __webpack_require__(319);
	__webpack_require__(320);
	var styles = {
	    errorMessage: {
	        wordBreak: 'break-word'
	    },
	    loading: {
	        textAlign: 'center',
	        paddingTop: '200px'
	    }
	};
	var App = (function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App() {
	        var _Object$getPrototypeO;

	        _classCallCheck(this, App);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(App)).call.apply(_Object$getPrototypeO, [this].concat(args)));

	        _this.onDismiss = function () {
	            _this.props.dispatch(app_1.showGlobalError(null));
	        };
	        return _this;
	    }

	    _createClass(App, [{
	        key: "render",
	        value: function render() {
	            switch (this.props.loaded) {
	                case true:
	                    var errorDialogButton = React.createElement(RaisedButton, { "label": "OK", "onTouchTap": this.onDismiss });
	                    return React.createElement(ThemeWrapper, { "theme": ThemeManager.getMuiTheme(theme_1.theme) }, React.createElement("div", null, this.props.children, React.createElement(Dialog, { "open": !!this.props.error, "title": "Произошла ошибка!", "onRequestClose": this.onDismiss, "actions": [errorDialogButton] }, React.createElement("pre", { "style": styles.errorMessage }, this.props.error && JSON.stringify(this.props.error, null, 4)))));
	                case false:
	                    return React.createElement("div", { "style": styles.loading }, "Загрузка...");
	            }
	        }
	    }]);

	    return App;
	})(React.Component);
	App = __decorate([react_redux_1.connect(function (state) {
	    return {
	        error: state.app.error,
	        loaded: state.app.loaded
	    };
	})], App);
	exports.App = App;

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var actions_1 = __webpack_require__(318);
	function showGlobalError(error) {
	    return {
	        type: actions_1.ActionType.SHOW_GLOBAL_ERROR,
	        payload: {
	            error: error
	        }
	    };
	}
	exports.showGlobalError = showGlobalError;
	function appLoaded() {
	    return {
	        type: actions_1.ActionType.APP_LOADED,
	        payload: {}
	    };
	}
	exports.appLoaded = appLoaded;

/***/ },

/***/ 318:
/***/ function(module, exports) {

	"use strict";

	(function (ActionType) {
	    ActionType[ActionType["SIGNIN"] = 'SIGNIN'] = "SIGNIN";
	    ActionType[ActionType["SIGNIN_SUCCESS"] = 'SIGNIN_SUCCESS'] = "SIGNIN_SUCCESS";
	    ActionType[ActionType["SIGNIN_ERROR"] = 'SIGNIN_ERROR'] = "SIGNIN_ERROR";
	    ActionType[ActionType["SIGNOUT"] = 'SIGNOUT'] = "SIGNOUT";
	    ActionType[ActionType["SIGNOUT_SUCCESS"] = 'SIGNOUT_SUCCESS'] = "SIGNOUT_SUCCESS";
	    ActionType[ActionType["SHOW_GLOBAL_ERROR"] = 'SHOW_GLOBAL_ERROR'] = "SHOW_GLOBAL_ERROR";
	    ActionType[ActionType["APP_LOADED"] = 'APP_LOADED'] = "APP_LOADED";
	    ActionType[ActionType["TOGGLE_LEFT_NAV"] = 'TOGGLE_LEFT_NAV'] = "TOGGLE_LEFT_NAV";
	})(exports.ActionType || (exports.ActionType = {}));
	var ActionType = exports.ActionType;

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LightRawTheme = __webpack_require__(306);
	var Colors = __webpack_require__(263);
	exports.theme = LightRawTheme;
	exports.theme.palette.textColor = '#727277';
	exports.theme.palette.primary1Color = Colors.lightBlue900;

	var Mixins = function Mixins() {
	    _classCallCheck(this, Mixins);
	};

	Mixins.ellipsis = {
	    textOverflow: 'ellipsis',
	    overflow: 'hidden',
	    whiteSpace: 'nowrap'
	};
	exports.Mixins = Mixins;

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(321);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(323)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./App.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./App.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(322)();
	// imports


	// module
	exports.push([module.id, ".app {\n  height: 100%;\n  -webkit-overflow-scrolling: touch; }\n", ""]);

	// exports


/***/ },

/***/ 322:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var react_redux_1 = __webpack_require__(159);
	var redux_router_1 = __webpack_require__(224);
	var LeftNav = __webpack_require__(325);
	var MenuItem = __webpack_require__(341);
	var ui_1 = __webpack_require__(357);
	var auth_1 = __webpack_require__(358);
	var Home = (function (_React$Component) {
	    _inherits(Home, _React$Component);

	    function Home() {
	        var _Object$getPrototypeO;

	        _classCallCheck(this, Home);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Home)).call.apply(_Object$getPrototypeO, [this].concat(args)));

	        _this.onSignoutClick = function (e) {
	            _this.props.dispatch(ui_1.toggleLeftNav(false));
	            _this.props.dispatch(auth_1.signout());
	        };
	        _this.onLeftNavRequestChange = function (open) {
	            _this.props.dispatch(ui_1.toggleLeftNav(open));
	        };
	        return _this;
	    }

	    _createClass(Home, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            this.checkAuthorization(this.props);
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(newProps) {
	            this.checkAuthorization(newProps);
	        }
	    }, {
	        key: "checkAuthorization",
	        value: function checkAuthorization(props) {
	            if (!props.authorized && props.location.pathname !== '/login') {
	                props.dispatch(redux_router_1.pushState(null, '/login'));
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement("div", null, React.createElement(LeftNav, { "docked": false, "open": this.props.isLeftNavOpen, "onRequestChange": this.onLeftNavRequestChange }, React.createElement(MenuItem, null, "Лента"), React.createElement(MenuItem, null, "Темы"), React.createElement(MenuItem, null, "Профиль"), React.createElement(MenuItem, { "onTouchTap": this.onSignoutClick }, "Выход")), this.props.children);
	        }
	    }]);

	    return Home;
	})(React.Component);
	Home = __decorate([react_redux_1.connect(mapStateToProps)], Home);
	exports.Home = Home;
	function mapStateToProps(state) {
	    return {
	        authorized: state.app.auth.authorized,
	        location: state.router.location,
	        isLeftNavOpen: state.ui.isLeftNavOpen
	    };
	}

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var actions_1 = __webpack_require__(318);
	function toggleLeftNav(open) {
	    return {
	        type: actions_1.ActionType.TOGGLE_LEFT_NAV,
	        payload: open
	    };
	}
	exports.toggleLeftNav = toggleLeftNav;

/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var actions_1 = __webpack_require__(318);
	var Client_1 = __webpack_require__(359);
	var redux_router_1 = __webpack_require__(224);
	var app_1 = __webpack_require__(317);
	function signinSuccess(sid, login) {
	    return {
	        type: actions_1.ActionType.SIGNIN_SUCCESS,
	        payload: {
	            sid: sid,
	            login: login
	        }
	    };
	}
	exports.signinSuccess = signinSuccess;
	function signinError(error) {
	    return {
	        type: actions_1.ActionType.SIGNIN_ERROR,
	        payload: {
	            error: error
	        }
	    };
	}
	exports.signinError = signinError;
	function signingRequest() {
	    return {
	        type: actions_1.ActionType.SIGNIN,
	        payload: void 0
	    };
	}
	exports.signingRequest = signingRequest;
	function signin(login, password) {
	    var redirect = arguments.length <= 2 || arguments[2] === undefined ? '/' : arguments[2];

	    return function (dispatch) {
	        var request = {
	            phone: login,
	            password: password,
	            platform: 1
	        };
	        dispatch(signingRequest());
	        return Client_1.client.post('auth', request).then(function (response) {
	            dispatch(signinSuccess(response.data.sid, login));
	            dispatch(redux_router_1.pushState(null, redirect));
	        }).catch(function (error) {
	            dispatch(app_1.showGlobalError(error));
	        });
	    };
	}
	exports.signin = signin;
	function checkAuth() {
	    return function (dispatch) {
	        return Client_1.client.get('auth').then(function (response) {
	            if (response.data.sid && response.data.user_id) {
	                dispatch(signinSuccess(response.data.sid, ''));
	                dispatch(redux_router_1.pushState(null, '/'));
	            }
	        }).catch(function (error) {
	            dispatch(app_1.showGlobalError(error));
	        }).then(function () {
	            dispatch(app_1.appLoaded());
	        });
	    };
	}
	exports.checkAuth = checkAuth;
	function signoutSuccess() {
	    return {
	        type: actions_1.ActionType.SIGNOUT_SUCCESS,
	        payload: void 0
	    };
	}
	exports.signoutSuccess = signoutSuccess;
	function signoutRequest() {
	    return {
	        type: actions_1.ActionType.SIGNOUT,
	        payload: void 0
	    };
	}
	exports.signoutRequest = signoutRequest;
	function signout() {
	    return function (dispatch) {
	        return Client_1.client.del('auth').then(function () {
	            dispatch(signoutSuccess());
	            dispatch(redux_router_1.pushState(null, '/login'));
	        }).catch(function (error) {
	            dispatch(app_1.showGlobalError(error));
	        });
	    };
	}
	exports.signout = signout;

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var qs = __webpack_require__(360);
	__webpack_require__(364);
	//export const API_URL = 'https://strizhapi.herokuapp.com/api/v1/';
	exports.API_URL = 'https://strizhapp-api-nofirg.c9.io/api/v1/';
	(function (HTTPMethod) {
	    HTTPMethod[HTTPMethod["GET"] = 'GET'] = "GET";
	    HTTPMethod[HTTPMethod["POST"] = 'POST'] = "POST";
	    HTTPMethod[HTTPMethod["PUT"] = 'PUT'] = "PUT";
	    HTTPMethod[HTTPMethod["DELETE"] = 'DELETE'] = "DELETE";
	})(exports.HTTPMethod || (exports.HTTPMethod = {}));
	var HTTPMethod = exports.HTTPMethod;

	var Client = (function () {
	    function Client(baseUrl) {
	        _classCallCheck(this, Client);

	        this._baseUrl = baseUrl;
	        if (this._baseUrl[this._baseUrl.length - 1] === '/') {
	            this._baseUrl = this._baseUrl.substring(0, this._baseUrl.length - 1);
	        }
	    }

	    _createClass(Client, [{
	        key: 'request',
	        value: function request(options) {
	            var url = this._baseUrl + '/' + buildUrl(options.url, options.query);
	            var requestOptions = {
	                method: options.method,
	                credentials: 'include'
	            };
	            if (options.data) {
	                requestOptions.body = JSON.stringify(options.data);
	                requestOptions.headers = {
	                    'Accept': 'application/json',
	                    'Content-Type': 'application/json'
	                };
	            }
	            return fetch(url, requestOptions).then(function (response) {
	                if (response.status >= 200 && response.status < 300) {
	                    return response.json();
	                } else {
	                    return response.json().then(function (body) {
	                        var error = new Error(JSON.stringify(body));
	                        error['body'] = body;
	                        throw error;
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'get',
	        value: function get(path, query) {
	            return this.request({
	                method: HTTPMethod.GET,
	                url: path,
	                query: query
	            });
	        }
	    }, {
	        key: 'post',
	        value: function post(path, data) {
	            return this.request({
	                method: HTTPMethod.POST,
	                url: path,
	                data: data
	            });
	        }
	    }, {
	        key: 'put',
	        value: function put(path, data) {
	            return this.request({
	                method: HTTPMethod.PUT,
	                url: path,
	                data: data
	            });
	        }
	    }, {
	        key: 'del',
	        value: function del(path) {
	            return this.request({
	                method: HTTPMethod.DELETE,
	                url: path
	            });
	        }
	    }]);

	    return Client;
	})();

	exports.Client = Client;
	exports.client = new Client(exports.API_URL);
	function buildUrl(url, query) {
	    if (query) {
	        if (url.substr(-1) !== '?') {
	            url += '?';
	        }
	        url += qs.stringify(query);
	    }
	    return url;
	}

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load modules

	const Stringify = __webpack_require__(361);
	const Parse = __webpack_require__(363);


	// Declare internals

	const internals = {};


	exports.stringify = Stringify;
	exports.parse = Parse;


/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load modules

	const Utils = __webpack_require__(362);


	// Declare internals

	const internals = {
	    delimiter: '&',
	    arrayPrefixGenerators: {
	        brackets: function (prefix, key) {

	            return prefix + '[]';
	        },
	        indices: function (prefix, key) {

	            return prefix + '[' + key + ']';
	        },
	        repeat: function (prefix, key) {

	            return prefix;
	        }
	    },
	    strictNullHandling: false,
	    skipNulls: false,
	    encode: true
	};


	internals.stringify = function (obj, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encode, filter, sort) {

	    if (typeof filter === 'function') {
	        obj = filter(prefix, obj);
	    }
	    else if (Utils.isBuffer(obj)) {
	        obj = obj.toString();
	    }
	    else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    }
	    else if (obj === null) {
	        if (strictNullHandling) {
	            return encode ? Utils.encode(prefix) : prefix;
	        }

	        obj = '';
	    }

	    if (typeof obj === 'string' ||
	        typeof obj === 'number' ||
	        typeof obj === 'boolean') {

	        if (encode) {
	            return [Utils.encode(prefix) + '=' + Utils.encode(obj)];
	        }
	        return [prefix + '=' + obj];
	    }

	    let values = [];

	    if (typeof obj === 'undefined') {
	        return values;
	    }

	    let objKeys;
	    if (Array.isArray(filter)) {
	        objKeys = filter;
	    }
	    else {
	        const keys = Object.keys(obj);
	        objKeys = sort ? keys.sort(sort) : keys;
	    }

	    for (let i = 0; i < objKeys.length; ++i) {
	        const key = objKeys[i];

	        if (skipNulls &&
	            obj[key] === null) {

	            continue;
	        }

	        if (Array.isArray(obj)) {
	            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, skipNulls, encode, filter));
	        }
	        else {
	            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix, strictNullHandling, skipNulls, encode, filter));
	        }
	    }

	    return values;
	};


	module.exports = function (obj, options) {

	    options = options || {};
	    const delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;
	    const strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : internals.strictNullHandling;
	    const skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : internals.skipNulls;
	    const encode = typeof options.encode === 'boolean' ? options.encode : internals.encode;
	    const sort = typeof options.sort === 'function' ? options.sort : null;
	    let objKeys;
	    let filter;
	    if (typeof options.filter === 'function') {
	        filter = options.filter;
	        obj = filter('', obj);
	    }
	    else if (Array.isArray(options.filter)) {
	        objKeys = filter = options.filter;
	    }

	    let keys = [];

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return '';
	    }

	    let arrayFormat;
	    if (options.arrayFormat in internals.arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    }
	    else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    }
	    else {
	        arrayFormat = 'indices';
	    }

	    const generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];

	    if (!objKeys) {
	        objKeys = Object.keys(obj);
	    }

	    if (sort) {
	        objKeys.sort(sort);
	    }

	    for (let i = 0; i < objKeys.length; ++i) {
	        const key = objKeys[i];

	        if (skipNulls &&
	            obj[key] === null) {

	            continue;
	        }

	        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix, strictNullHandling, skipNulls, encode, filter, sort));
	    }

	    return keys.join(delimiter);
	};


/***/ },

/***/ 362:
/***/ function(module, exports) {

	'use strict';

	// Load modules


	// Declare internals

	const internals = {};


	internals.hexTable = function () {

	    const array = new Array(256);
	    for (let i = 0; i < 256; ++i) {
	        array[i] = '%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase();
	    }

	    return array;
	}();


	exports.arrayToObject = function (source, options) {

	    const obj = options.plainObjects ? Object.create(null) : {};
	    for (let i = 0; i < source.length; ++i) {
	        if (typeof source[i] !== 'undefined') {
	            obj[i] = source[i];
	        }
	    }

	    return obj;
	};


	exports.merge = function (target, source, options) {

	    if (!source) {
	        return target;
	    }

	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        }
	        else if (typeof target === 'object') {
	            target[source] = true;
	        }
	        else {
	            target = [target, source];
	        }

	        return target;
	    }

	    if (typeof target !== 'object') {
	        target = [target].concat(source);
	        return target;
	    }

	    if (Array.isArray(target) &&
	        !Array.isArray(source)) {

	        target = exports.arrayToObject(target, options);
	    }

	    const keys = Object.keys(source);
	    for (let i = 0; i < keys.length; ++i) {
	        const key = keys[i];
	        const value = source[key];

	        if (!Object.prototype.hasOwnProperty.call(target, key)) {
	            target[key] = value;
	        }
	        else {
	            target[key] = exports.merge(target[key], value, options);
	        }
	    }

	    return target;
	};


	exports.decode = function (str) {

	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    }
	    catch (e) {
	        return str;
	    }
	};

	exports.encode = function (str) {

	    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
	    // It has been adapted here for stricter adherence to RFC 3986
	    if (str.length === 0) {
	        return str;
	    }

	    if (typeof str !== 'string') {
	        str = '' + str;
	    }

	    let out = '';
	    for (let i = 0; i < str.length; ++i) {
	        let c = str.charCodeAt(i);

	        if (c === 0x2D || // -
	            c === 0x2E || // .
	            c === 0x5F || // _
	            c === 0x7E || // ~
	            (c >= 0x30 && c <= 0x39) || // 0-9
	            (c >= 0x41 && c <= 0x5A) || // a-z
	            (c >= 0x61 && c <= 0x7A)) { // A-Z

	            out = out + str[i];
	            continue;
	        }

	        if (c < 0x80) {
	            out = out + internals.hexTable[c];
	            continue;
	        }

	        if (c < 0x800) {
	            out = out + (internals.hexTable[0xC0 | (c >> 6)] + internals.hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }

	        if (c < 0xD800 || c >= 0xE000) {
	            out = out + (internals.hexTable[0xE0 | (c >> 12)] + internals.hexTable[0x80 | ((c >> 6) & 0x3F)] + internals.hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }

	        ++i;
	        c = 0x10000 + (((c & 0x3FF) << 10) | (str.charCodeAt(i) & 0x3FF));
	        out = out + (internals.hexTable[0xF0 | (c >> 18)] + internals.hexTable[0x80 | ((c >> 12) & 0x3F)] + internals.hexTable[0x80 | ((c >> 6) & 0x3F)] + internals.hexTable[0x80 | (c & 0x3F)]);
	    }

	    return out;
	};

	exports.compact = function (obj, refs) {

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return obj;
	    }

	    refs = refs || [];
	    const lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }

	    refs.push(obj);

	    if (Array.isArray(obj)) {
	        const compacted = [];

	        for (let i = 0; i < obj.length; ++i) {
	            if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }

	        return compacted;
	    }

	    const keys = Object.keys(obj);
	    for (let i = 0; i < keys.length; ++i) {
	        const key = keys[i];
	        obj[key] = exports.compact(obj[key], refs);
	    }

	    return obj;
	};


	exports.isRegExp = function (obj) {

	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};


	exports.isBuffer = function (obj) {

	    if (obj === null ||
	        typeof obj === 'undefined') {

	        return false;
	    }

	    return !!(obj.constructor &&
	              obj.constructor.isBuffer &&
	              obj.constructor.isBuffer(obj));
	};


/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load modules

	const Utils = __webpack_require__(362);


	// Declare internals

	const internals = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000,
	    strictNullHandling: false,
	    plainObjects: false,
	    allowPrototypes: false,
	    allowDots: false
	};


	internals.parseValues = function (str, options) {

	    const obj = {};
	    const parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

	    for (let i = 0; i < parts.length; ++i) {
	        const part = parts[i];
	        const pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

	        if (pos === -1) {
	            obj[Utils.decode(part)] = '';

	            if (options.strictNullHandling) {
	                obj[Utils.decode(part)] = null;
	            }
	        }
	        else {
	            const key = Utils.decode(part.slice(0, pos));
	            const val = Utils.decode(part.slice(pos + 1));

	            if (!Object.prototype.hasOwnProperty.call(obj, key)) {
	                obj[key] = val;
	            }
	            else {
	                obj[key] = [].concat(obj[key]).concat(val);
	            }
	        }
	    }

	    return obj;
	};


	internals.parseObject = function (chain, val, options) {

	    if (!chain.length) {
	        return val;
	    }

	    const root = chain.shift();

	    let obj;
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(internals.parseObject(chain, val, options));
	    }
	    else {
	        obj = options.plainObjects ? Object.create(null) : {};
	        const cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        const index = parseInt(cleanRoot, 10);
	        const indexString = '' + index;
	        if (!isNaN(index) &&
	            root !== cleanRoot &&
	            indexString === cleanRoot &&
	            index >= 0 &&
	            (options.parseArrays &&
	             index <= options.arrayLimit)) {

	            obj = [];
	            obj[index] = internals.parseObject(chain, val, options);
	        }
	        else {
	            obj[cleanRoot] = internals.parseObject(chain, val, options);
	        }
	    }

	    return obj;
	};


	internals.parseKeys = function (key, val, options) {

	    if (!key) {
	        return;
	    }

	    // Transform dot notation to bracket notation

	    if (options.allowDots) {
	        key = key.replace(/\.([^\.\[]+)/g, '[$1]');
	    }

	    // The regex chunks

	    const parent = /^([^\[\]]*)/;
	    const child = /(\[[^\[\]]*\])/g;

	    // Get the parent

	    let segment = parent.exec(key);

	    // Stash the parent if it exists

	    const keys = [];
	    if (segment[1]) {
	        // If we aren't using plain objects, optionally prefix keys
	        // that would overwrite object prototype properties
	        if (!options.plainObjects &&
	            Object.prototype.hasOwnProperty(segment[1])) {

	            if (!options.allowPrototypes) {
	                return;
	            }
	        }

	        keys.push(segment[1]);
	    }

	    // Loop through children appending to the array until we hit depth

	    let i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {

	        ++i;
	        if (!options.plainObjects &&
	            Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {

	            if (!options.allowPrototypes) {
	                continue;
	            }
	        }
	        keys.push(segment[1]);
	    }

	    // If there's a remainder, just add whatever is left

	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }

	    return internals.parseObject(keys, val, options);
	};


	module.exports = function (str, options) {

	    options = options || {};
	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
	    options.parseArrays = options.parseArrays !== false;
	    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : internals.allowDots;
	    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : internals.plainObjects;
	    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : internals.allowPrototypes;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;
	    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : internals.strictNullHandling;

	    if (str === '' ||
	        str === null ||
	        typeof str === 'undefined') {

	        return options.plainObjects ? Object.create(null) : {};
	    }

	    const tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
	    let obj = options.plainObjects ? Object.create(null) : {};

	    // Iterate over the keys and setup the new object

	    const keys = Object.keys(tempObj);
	    for (let i = 0; i < keys.length; ++i) {
	        const key = keys[i];
	        const newObj = internals.parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj, options);
	    }

	    return Utils.compact(obj);
	};


/***/ },

/***/ 364:
/***/ function(module, exports) {

	(function() {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }

	  function Headers(headers) {
	    this.map = {}

	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)

	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }

	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }

	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }

	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }

	  Headers.prototype.forEach = function(callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      this.map[name].forEach(function(value) {
	        callback.call(thisArg, value, name, this)
	      }, this)
	    }, this)
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }

	  var support = {
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob();
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }

	  function Body() {
	    this.bodyUsed = false


	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (!body) {
	        this._bodyText = ''
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	    }

	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }

	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }

	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }

	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = input
	    }

	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }

	  Request.prototype.clone = function() {
	    return new Request(this)
	  }

	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }

	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = xhr.getAllResponseHeaders().trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }

	  Body.call(Request.prototype)

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }

	    this._initBody(bodyInit)
	    this.type = 'default'
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	  }

	  Body.call(Response.prototype)

	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }

	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }

	  var redirectStatuses = [301, 302, 303, 307, 308]

	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }

	    return new Response(null, {status: status, headers: {location: url}})
	  }

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input
	      } else {
	        request = new Request(input, init)
	      }

	      var xhr = new XMLHttpRequest()

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }

	        return;
	      }

	      xhr.onload = function() {
	        var status = (xhr.status === 1223) ? 204 : xhr.status
	        if (status < 100 || status > 599) {
	          reject(new TypeError('Network request failed'))
	          return
	        }
	        var options = {
	          status: status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options))
	      }

	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.open(request.method, request.url, true)

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }

	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})();


/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var react_redux_1 = __webpack_require__(159);
	var AppBar = __webpack_require__(366);
	var IconButton = __webpack_require__(349);
	var ActionSearch = __webpack_require__(368);
	var FeedItem_1 = __webpack_require__(369);
	var theme_1 = __webpack_require__(319);
	var ui_1 = __webpack_require__(357);
	//const devBg = require('./dev-bg.jpg');
	var styles = {
	    base: {
	        //background: `url('${devBg}') no-repeat`,
	        //backgroundSize: 'cover',
	        //backgroundPositionY: '-8px',
	        //maxWidth: '320px',
	        WebkitOverflowScrolling: 'touch'
	    },
	    appBar: {
	        position: 'fixed'
	    },
	    list: {
	        paddingTop: theme_1.theme.spacing.desktopKeylineIncrement
	    }
	};
	var Feed = (function (_React$Component) {
	    _inherits(Feed, _React$Component);

	    function Feed() {
	        var _Object$getPrototypeO;

	        _classCallCheck(this, Feed);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Feed)).call.apply(_Object$getPrototypeO, [this].concat(args)));

	        _this.state = {
	            navOpen: false
	        };
	        _this.onLeftIconButtonTouchTap = function () {
	            _this.props.dispatch(ui_1.toggleLeftNav());
	        };
	        return _this;
	    }

	    _createClass(Feed, [{
	        key: "render",
	        value: function render() {
	            var items = ['A', 'B', 'C', 'A', 'B', 'C'];
	            var searchButton = React.createElement(IconButton, null, React.createElement(ActionSearch, null));
	            return React.createElement("div", { "style": styles.base }, React.createElement(AppBar, { "title": "Лента", "style": styles.appBar, "iconElementRight": searchButton, "onLeftIconButtonTouchTap": this.onLeftIconButtonTouchTap }), React.createElement("div", { "style": styles.list }, items.map(function (item, i) {
	                return React.createElement(FeedItem_1.FeedItem, { "key": i, "highlight": !!(i % 2) });
	            })));
	        }
	    }]);

	    return Feed;
	})(React.Component);
	Feed = __decorate([react_redux_1.connect(function (state) {
	    return state;
	})], Feed);
	exports.Feed = Feed;

/***/ },

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsPureRenderMixin = __webpack_require__(297);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _svgIcon = __webpack_require__(347);

	var _svgIcon2 = _interopRequireDefault(_svgIcon);

	var ActionSearch = _react2['default'].createClass({
	  displayName: 'ActionSearch',

	  mixins: [_reactAddonsPureRenderMixin2['default']],

	  render: function render() {
	    return _react2['default'].createElement(
	      _svgIcon2['default'],
	      this.props,
	      _react2['default'].createElement('path', { d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' })
	    );
	  }

	});

	exports['default'] = ActionSearch;
	module.exports = exports['default'];

/***/ },

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var DeviceAccessTime = __webpack_require__(370);
	var CommunicationLocationOn = __webpack_require__(371);
	var EditorAttachMoney = __webpack_require__(372);
	var FeedItemHeader_1 = __webpack_require__(373);
	var FeedPreview_1 = __webpack_require__(409);
	var theme_1 = __webpack_require__(319);
	/*tslint:disable max-line-length*/
	var image = 'http://2.bp.blogspot.com/_UdH8rcs3s1Q/TGdcZB6sO3I/AAAAAAAAAKU/KrPuD_wmBC4/s320/iPadBackgroundTexture-grey.png';
	var styles = {
	    info: {
	        padding: '14px 7px',
	        backgroundColor: '#F1F5F7',
	        color: theme_1.theme.palette.textColor
	    },
	    description: {
	        margin: 0,
	        fontSize: '12px',
	        padding: '0 7px',
	        marginBottom: '14px'
	    },
	    fields: {
	        listStyle: 'none',
	        padding: '7px',
	        backgroundColor: '#FFFFFF',
	        margin: 0,
	        fontSize: '12px',
	        marginBottom: '20px',
	        borderRadius: '2px'
	    },
	    field: Object.assign({}, {
	        padding: '3px 0'
	    }, theme_1.Mixins.ellipsis),
	    icon: {
	        height: '12px',
	        width: '12px',
	        marginRight: '5px',
	        verticalAlign: 'top'
	    }
	};

	var FeedItem = (function (_React$Component) {
	    _inherits(FeedItem, _React$Component);

	    function FeedItem() {
	        _classCallCheck(this, FeedItem);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(FeedItem).apply(this, arguments));
	    }

	    _createClass(FeedItem, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement("div", { "style": styles.base }, React.createElement(FeedItemHeader_1.FeedItemHeader, { "firstName": "Надежда", "lastName": "Смирнова", "date": new Date() }), React.createElement(FeedPreview_1.FeedPreview, { "title": "Квартира в Сокольниках", "image": image }), React.createElement("div", { "style": styles.info }, React.createElement("p", { "style": styles.description }, "Продается квартира. Новый дом. 4 комнаты. Туалет, Душ. Вид на Неву. Метро рядом." + ' ' + "Продается квартира. Новый дом. 4 комнаты. Туалет, Душ. Вид на Неву. Метро рядом."), React.createElement("ul", { "style": styles.fields }, React.createElement("li", { "style": styles.field }, React.createElement(DeviceAccessTime, { "style": styles.icon }), "25.09-2015 - 25.10.2015"), React.createElement("li", { "style": styles.field }, React.createElement(CommunicationLocationOn, { "style": styles.icon }), "Санкт-Петербург"), React.createElement("li", { "style": styles.field }, React.createElement(EditorAttachMoney, { "style": styles.icon }), "2 400 000 руб."))));
	        }
	    }]);

	    return FeedItem;
	})(React.Component);

	exports.FeedItem = FeedItem;

/***/ },

/***/ 370:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsPureRenderMixin = __webpack_require__(297);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _svgIcon = __webpack_require__(347);

	var _svgIcon2 = _interopRequireDefault(_svgIcon);

	var DeviceAccessTime = _react2['default'].createClass({
	  displayName: 'DeviceAccessTime',

	  mixins: [_reactAddonsPureRenderMixin2['default']],

	  render: function render() {
	    return _react2['default'].createElement(
	      _svgIcon2['default'],
	      this.props,
	      _react2['default'].createElement('path', { d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z' })
	    );
	  }

	});

	exports['default'] = DeviceAccessTime;
	module.exports = exports['default'];

/***/ },

/***/ 371:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsPureRenderMixin = __webpack_require__(297);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _svgIcon = __webpack_require__(347);

	var _svgIcon2 = _interopRequireDefault(_svgIcon);

	var CommunicationLocationOn = _react2['default'].createClass({
	  displayName: 'CommunicationLocationOn',

	  mixins: [_reactAddonsPureRenderMixin2['default']],

	  render: function render() {
	    return _react2['default'].createElement(
	      _svgIcon2['default'],
	      this.props,
	      _react2['default'].createElement('path', { d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' })
	    );
	  }

	});

	exports['default'] = CommunicationLocationOn;
	module.exports = exports['default'];

/***/ },

/***/ 372:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsPureRenderMixin = __webpack_require__(297);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _svgIcon = __webpack_require__(347);

	var _svgIcon2 = _interopRequireDefault(_svgIcon);

	var EditorAttachMoney = _react2['default'].createClass({
	  displayName: 'EditorAttachMoney',

	  mixins: [_reactAddonsPureRenderMixin2['default']],

	  render: function render() {
	    return _react2['default'].createElement(
	      _svgIcon2['default'],
	      this.props,
	      _react2['default'].createElement('path', { d: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z' })
	    );
	  }

	});

	exports['default'] = EditorAttachMoney;
	module.exports = exports['default'];

/***/ },

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var Avatar = __webpack_require__(374);
	var Radium = __webpack_require__(375);
	var theme_1 = __webpack_require__(319);
	var styles = {
	    base: {
	        display: 'flex',
	        alignItems: 'center',
	        padding: "9px 11px",
	        color: theme_1.theme.palette.textColor
	    },
	    avatar: {
	        height: '30px',
	        width: '30px',
	        lineHeight: '30px',
	        fontSize: '14px',
	        flexShrink: 0,
	        backgroundColor: theme_1.theme.palette.accent1Color
	    },
	    author: {
	        marginLeft: '12px',
	        marginRight: '12px',
	        fontSize: '12px',
	        overflow: 'hidden',
	        textOverflow: 'ellipsis',
	        whiteSpace: 'nowrap'
	    },
	    date: {
	        marginLeft: 'auto',
	        flexShrink: 0,
	        fontSize: '11px',
	        marginRight: '4px'
	    }
	};
	var FeedItemHeader = (function (_React$Component) {
	    _inherits(FeedItemHeader, _React$Component);

	    function FeedItemHeader() {
	        _classCallCheck(this, FeedItemHeader);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(FeedItemHeader).apply(this, arguments));
	    }

	    _createClass(FeedItemHeader, [{
	        key: "render",
	        value: function render() {
	            return React.createElement("div", { "style": styles.base }, React.createElement(Avatar, { "style": styles.avatar }, this.avatar), React.createElement("div", { "style": styles.author }, this.author), React.createElement("div", { "style": styles.date }, this.date));
	        }
	    }, {
	        key: "author",
	        get: function get() {
	            return this.props.firstName + " " + this.props.lastName;
	        }
	    }, {
	        key: "date",
	        get: function get() {
	            return this.props.date.toDateString();
	        }
	    }, {
	        key: "avatar",
	        get: function get() {
	            return "" + this.props.firstName.charAt(0) + this.props.lastName.charAt(0);
	        }
	    }]);

	    return FeedItemHeader;
	})(React.Component);
	FeedItemHeader = __decorate([Radium], FeedItemHeader);
	exports.FeedItemHeader = FeedItemHeader;

/***/ },

/***/ 375:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _enhancer = __webpack_require__(376);

	var _enhancer2 = _interopRequireDefault(_enhancer);

	var _plugins = __webpack_require__(383);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _componentsPrintStyleSheet = __webpack_require__(404);

	var _componentsPrintStyleSheet2 = _interopRequireDefault(_componentsPrintStyleSheet);

	var _componentsStyle = __webpack_require__(405);

	var _componentsStyle2 = _interopRequireDefault(_componentsStyle);

	var _getState = __webpack_require__(378);

	var _getState2 = _interopRequireDefault(_getState);

	var _keyframes = __webpack_require__(408);

	var _keyframes2 = _interopRequireDefault(_keyframes);

	var _resolveStyles = __webpack_require__(377);

	function Radium(ComposedComponent /*: constructor*/) {
	  return _enhancer2['default'](ComposedComponent);
	}

	Radium.Plugins = _plugins2['default'];
	Radium.PrintStyleSheet = _componentsPrintStyleSheet2['default'];
	Radium.Style = _componentsStyle2['default'];
	Radium.getState = _getState2['default'];
	Radium.keyframes = _keyframes2['default'];
	Radium.__clearStateForTests = _resolveStyles.__clearStateForTests;

	exports['default'] = Radium;
	module.exports = exports['default'];

/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/* @flow */

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = enhanceWithRadium;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _resolveStylesJs = __webpack_require__(377);

	var _resolveStylesJs2 = _interopRequireDefault(_resolveStylesJs);

	var _printStylesJs = __webpack_require__(403);

	var _printStylesJs2 = _interopRequireDefault(_printStylesJs);

	var KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES = ['arguments', 'callee', 'caller', 'length', 'name', 'prototype', 'type'];

	var copyProperties = function copyProperties(source, target) {
	  Object.getOwnPropertyNames(source).forEach(function (key) {
	    if (KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES.indexOf(key) < 0 && !target.hasOwnProperty(key)) {
	      var descriptor = Object.getOwnPropertyDescriptor(source, key);
	      Object.defineProperty(target, key, descriptor);
	    }
	  });
	};

	function enhanceWithRadium(configOrComposedComponent /*: constructor | Function | Object*/) /*: constructor*/ {
	  var config /*:: ?: Object*/ = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  if (typeof configOrComposedComponent !== 'function') {
	    var _ret = (function () {
	      var newConfig = _extends({}, config, configOrComposedComponent);
	      return {
	        v: function (configOrComponent) {
	          return enhanceWithRadium(configOrComponent, newConfig);
	        }
	      };
	    })();

	    if (typeof _ret === 'object') return _ret.v;
	  }

	  var component /*: Function*/ = configOrComposedComponent;
	  var ComposedComponent /*: constructor*/ = component;

	  // Handle stateless components
	  if (!ComposedComponent.render && !ComposedComponent.prototype.render) {
	    ComposedComponent = (function (_Component) {
	      _inherits(_class, _Component);

	      function _class() {
	        _classCallCheck(this, _class);

	        _Component.apply(this, arguments);
	      }

	      _class.prototype.render = function render() {
	        return component(this.props, this.context);
	      };

	      return _class;
	    })(_react.Component);
	    ComposedComponent.displayName = component.displayName || component.name;
	  }

	  var RadiumEnhancer = (function (_ComposedComponent) {
	    _inherits(RadiumEnhancer, _ComposedComponent);

	    function RadiumEnhancer() {
	      _classCallCheck(this, RadiumEnhancer);

	      _ComposedComponent.apply(this, arguments);

	      this.state = this.state || {};
	      this.state._radiumStyleState = {};
	      this._radiumIsMounted = true;

	      if (RadiumEnhancer.printStyleClass) {
	        this.printStyleClass = RadiumEnhancer.printStyleClass;
	      }
	    }

	    // Class inheritance uses Object.create and because of __proto__ issues
	    // with IE <10 any static properties of the superclass aren't inherited and
	    // so need to be manually populated.
	    // See http://babeljs.io/docs/advanced/caveats/#classes-10-and-below-

	    RadiumEnhancer.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (_ComposedComponent.prototype.componentWillUnmount) {
	        _ComposedComponent.prototype.componentWillUnmount.call(this);
	      }

	      this._radiumIsMounted = false;

	      if (this._radiumMouseUpListener) {
	        this._radiumMouseUpListener.remove();
	      }

	      if (this._radiumMediaQueryListenersByQuery) {
	        Object.keys(this._radiumMediaQueryListenersByQuery).forEach(function (query) {
	          this._radiumMediaQueryListenersByQuery[query].remove();
	        }, this);
	      }
	    };

	    RadiumEnhancer.prototype.getChildContext = function getChildContext() {
	      var superChildContext = _ComposedComponent.prototype.getChildContext ? _ComposedComponent.prototype.getChildContext.call(this) : {};

	      if (!this.props.radiumConfig) {
	        return superChildContext;
	      }

	      return _extends({}, superChildContext, {
	        radiumConfig: this.props.radiumConfig
	      });
	    };

	    RadiumEnhancer.prototype.render = function render() {
	      var renderedElement = _ComposedComponent.prototype.render.call(this);
	      var currentConfig = this.props.radiumConfig || this.context.radiumConfig || config;

	      if (config && currentConfig !== config) {
	        currentConfig = _extends({}, config, currentConfig);
	      }

	      return _resolveStylesJs2['default'](this, renderedElement, currentConfig);
	    };

	    return RadiumEnhancer;
	  })(ComposedComponent);

	  copyProperties(component, RadiumEnhancer);

	  if (process.env.NODE_ENV !== 'production') {
	    // This also fixes React Hot Loader by exposing the original components top
	    // level prototype methods on the Radium enhanced prototype as discussed in
	    // https://github.com/FormidableLabs/radium/issues/219.
	    copyProperties(ComposedComponent.prototype, RadiumEnhancer.prototype);
	  }

	  if (RadiumEnhancer.propTypes && RadiumEnhancer.propTypes.style) {
	    RadiumEnhancer.propTypes = _extends({}, RadiumEnhancer.propTypes, {
	      style: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object])
	    });
	  }

	  RadiumEnhancer.displayName = component.displayName || component.name || 'Component';

	  RadiumEnhancer.printStyleClass = _printStylesJs2['default'].addPrintStyles(RadiumEnhancer);

	  RadiumEnhancer.contextTypes = _extends({}, RadiumEnhancer.contextTypes, {
	    radiumConfig: _react2['default'].PropTypes.object
	  });

	  RadiumEnhancer.childContextTypes = _extends({}, RadiumEnhancer.childContextTypes, {
	    radiumConfig: _react2['default'].PropTypes.object
	  });

	  return RadiumEnhancer;
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

	/* @flow */

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _getState2 = __webpack_require__(378);

	var _getState3 = _interopRequireDefault(_getState2);

	var _getStateKey = __webpack_require__(379);

	var _getStateKey2 = _interopRequireDefault(_getStateKey);

	var _mergeStyles = __webpack_require__(380);

	var _mergeStyles2 = _interopRequireDefault(_mergeStyles);

	var _plugins = __webpack_require__(383);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _exenv = __webpack_require__(402);

	var _exenv2 = _interopRequireDefault(_exenv);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	/*:: import type {Config} from './config';*/

	var DEFAULT_CONFIG = {
	  plugins: [_plugins2['default'].mergeStyleArray, _plugins2['default'].checkProps, _plugins2['default'].resolveMediaQueries, _plugins2['default'].resolveInteractionStyles, _plugins2['default'].prefix, _plugins2['default'].checkProps]
	};

	// Gross
	var globalState = {};

	// Declare early for recursive helpers.
	var resolveStyles = ((null /*: any*/) /*: (
	                                        component: any, // ReactComponent, flow+eslint complaining
	                                        renderedElement: any,
	                                        config: Config,
	                                        existingKeyMap?: {[key: string]: bool}
	                                      ) => any*/);

	var _resolveChildren = function _resolveChildren(_ref) {
	  var children = _ref.children;
	  var component = _ref.component;
	  var config = _ref.config;
	  var existingKeyMap = _ref.existingKeyMap;

	  if (!children) {
	    return children;
	  }

	  var childrenType = typeof children;

	  if (childrenType === 'string' || childrenType === 'number') {
	    // Don't do anything with a single primitive child
	    return children;
	  }

	  if (childrenType === 'function') {
	    // Wrap the function, resolving styles on the result
	    return function () {
	      var result = children.apply(this, arguments);
	      if (_react2['default'].isValidElement(result)) {
	        return resolveStyles(component, result, config, existingKeyMap);
	      }
	      return result;
	    };
	  }

	  if (_react2['default'].Children.count(children) === 1 && children.type) {
	    // If a React Element is an only child, don't wrap it in an array for
	    // React.Children.map() for React.Children.only() compatibility.
	    var onlyChild = _react2['default'].Children.only(children);
	    return resolveStyles(component, onlyChild, config, existingKeyMap);
	  }

	  return _react2['default'].Children.map(children, function (child) {
	    if (_react2['default'].isValidElement(child)) {
	      return resolveStyles(component, child, config, existingKeyMap);
	    }

	    return child;
	  });
	};

	// Recurse over props, just like children
	var _resolveProps = function _resolveProps(_ref2) {
	  var component = _ref2.component;
	  var config = _ref2.config;
	  var existingKeyMap = _ref2.existingKeyMap;
	  var props = _ref2.props;

	  var newProps = props;

	  Object.keys(props).forEach(function (prop) {
	    // We already recurse over children above
	    if (prop === 'children') {
	      return;
	    }

	    var propValue = props[prop];
	    if (_react2['default'].isValidElement(propValue)) {
	      newProps = _extends({}, newProps);
	      newProps[prop] = resolveStyles(component, propValue, config, existingKeyMap);
	    }
	  });

	  return newProps;
	};

	var _buildGetKey = function _buildGetKey(renderedElement, existingKeyMap) {
	  // We need a unique key to correlate state changes due to user interaction
	  // with the rendered element, so we know to apply the proper interactive
	  // styles.
	  var originalKey = typeof renderedElement.ref === 'string' ? renderedElement.ref : renderedElement.key;
	  var key = _getStateKey2['default'](originalKey);

	  var alreadyGotKey = false;
	  var getKey = function getKey() {
	    if (alreadyGotKey) {
	      return key;
	    }

	    alreadyGotKey = true;

	    if (existingKeyMap[key]) {
	      throw new Error('Radium requires each element with interactive styles to have a unique ' + 'key, set using either the ref or key prop. ' + (originalKey ? 'Key "' + originalKey + '" is a duplicate.' : 'Multiple elements have no key specified.'));
	    }

	    existingKeyMap[key] = true;

	    return key;
	  };

	  return getKey;
	};

	var _setStyleState = function _setStyleState(component, key, stateKey, value) {
	  if (!component._radiumIsMounted) {
	    return;
	  }

	  var existing = component._lastRadiumState || component.state && component.state._radiumStyleState || {};

	  var state = { _radiumStyleState: _extends({}, existing) };
	  state._radiumStyleState[key] = _extends({}, state._radiumStyleState[key]);
	  state._radiumStyleState[key][stateKey] = value;

	  component._lastRadiumState = state._radiumStyleState;
	  component.setState(state);
	};

	var _runPlugins = function _runPlugins(_ref3) {
	  var component = _ref3.component;
	  var config = _ref3.config;
	  var existingKeyMap = _ref3.existingKeyMap;
	  var props = _ref3.props;
	  var renderedElement = _ref3.renderedElement;

	  // Don't run plugins if renderedElement is not a simple ReactDOMElement or has
	  // no style.
	  if (!_react2['default'].isValidElement(renderedElement) || typeof renderedElement.type !== 'string' || !props.style) {
	    return props;
	  }

	  var newProps = props;

	  var plugins = config.plugins || DEFAULT_CONFIG.plugins;

	  var getKey = _buildGetKey(renderedElement, existingKeyMap);

	  var newStyle = props.style;
	  plugins.forEach(function (plugin) {
	    var result = plugin({
	      ExecutionEnvironment: _exenv2['default'],
	      componentName: component.constructor.displayName || component.constructor.name,
	      config: config,
	      getComponentField: function getComponentField(key) {
	        return component[key];
	      },
	      getGlobalState: function getGlobalState(key) {
	        return globalState[key];
	      },
	      getState: function getState(stateKey, elementKey) {
	        return _getState3['default'](component.state, elementKey || getKey(), stateKey);
	      },
	      mergeStyles: _mergeStyles2['default'],
	      props: newProps,
	      setState: function setState(stateKey, value, elementKey) {
	        return _setStyleState(component, elementKey || getKey(), stateKey, value);
	      },
	      style: newStyle
	    }) || {};

	    newStyle = result.style || newStyle;

	    newProps = result.props && Object.keys(result.props).length ? _extends({}, newProps, result.props) : newProps;

	    var newComponentFields = result.componentFields || {};
	    Object.keys(newComponentFields).forEach(function (fieldName) {
	      component[fieldName] = newComponentFields[fieldName];
	    });

	    var newGlobalState = result.globalState || {};
	    Object.keys(newGlobalState).forEach(function (key) {
	      globalState[key] = newGlobalState[key];
	    });
	  });

	  if (newStyle !== props.style) {
	    newProps = _extends({}, newProps, { style: newStyle });
	  }

	  return newProps;
	};

	// Wrapper around React.cloneElement. To avoid processing the same element
	// twice, whenever we clone an element add a special prop to make sure we don't
	// process this element again.
	var _cloneElement = function _cloneElement(renderedElement, newProps, newChildren) {
	  // Only add flag if this is a normal DOM element
	  if (typeof renderedElement.type === 'string') {
	    newProps = _extends({}, newProps, { _radiumDidResolveStyles: true });
	  }

	  return _react2['default'].cloneElement(renderedElement, newProps, newChildren);
	};

	//
	// The nucleus of Radium. resolveStyles is called on the rendered elements
	// before they are returned in render. It iterates over the elements and
	// children, rewriting props to add event handlers required to capture user
	// interactions (e.g. mouse over). It also replaces the style prop because it
	// adds in the various interaction styles (e.g. :hover).
	//
	resolveStyles = function (component /*: any*/, // ReactComponent, flow+eslint complaining
	renderedElement /*: any*/, // ReactElement
	config /*: Config*/, existingKeyMap /*:: ?: {[key: string]: boolean}*/) /*: any*/ {
	  if (config === undefined) config = DEFAULT_CONFIG;
	  // ReactElement
	  existingKeyMap = existingKeyMap || {};

	  if (!renderedElement ||
	  // Bail if we've already processed this element. This ensures that only the
	  // owner of an element processes that element, since the owner's render
	  // function will be called first (which will always be the case, since you
	  // can't know what else to render until you render the parent component).
	  renderedElement.props && renderedElement.props._radiumDidResolveStyles) {
	    return renderedElement;
	  }

	  var newChildren = _resolveChildren({
	    children: renderedElement.props.children,
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap
	  });

	  var newProps = _resolveProps({
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap,
	    props: renderedElement.props
	  });

	  newProps = _runPlugins({
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap,
	    props: newProps,
	    renderedElement: renderedElement
	  });

	  // If nothing changed, don't bother cloning the element. Might be a bit
	  // wasteful, as we add the sentinal to stop double-processing when we clone.
	  // Assume benign double-processing is better than unneeded cloning.
	  if (newChildren === renderedElement.props.children && newProps === renderedElement.props) {
	    return renderedElement;
	  }

	  return _cloneElement(renderedElement, newProps !== renderedElement.props ? newProps : {}, newChildren);
	};

	// Only for use by tests
	resolveStyles.__clearStateForTests = function () {
	  globalState = {};
	};

	exports['default'] = resolveStyles;
	module.exports = exports['default'];
	// ReactComponent, flow+eslint complaining

/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

	/* @flow */

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _getStateKey = __webpack_require__(379);

	var _getStateKey2 = _interopRequireDefault(_getStateKey);

	var getState = function getState(state /*: {_radiumStyleState: {[key: string]: {[value: string]: boolean}}}*/, elementKey /*: string*/, value /*: string*/) /*: any*/ {
	  var key = _getStateKey2['default'](elementKey);

	  return !!state && !!state._radiumStyleState && !!state._radiumStyleState[key] && state._radiumStyleState[key][value];
	};

	exports['default'] = getState;
	module.exports = exports['default'];

/***/ },

/***/ 379:
/***/ function(module, exports) {

	/* @flow */

	'use strict';

	exports.__esModule = true;
	var getStateKey = function getStateKey(elementKey /*: ?string*/) /*: string*/ {
	  return elementKey === null || elementKey === undefined ? 'main' : elementKey.toString();
	};

	exports['default'] = getStateKey;
	module.exports = exports['default'];

/***/ },

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _isPlainObject = __webpack_require__(381);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var shouldMerge = function shouldMerge(value) {
	  // Don't merge objects overriding toString, since they should be converted
	  // to string values.
	  return _isPlainObject2['default'](value) && value.toString === Object.prototype.toString;
	};

	// Merge style objects. Deep merge plain object values.
	var mergeStyles = function mergeStyles(styles) {
	  var result = {};

	  styles.forEach(function (style) {
	    if (!style || typeof style !== 'object') {
	      return;
	    }

	    if (Array.isArray(style)) {
	      style = mergeStyles(style);
	    }

	    Object.keys(style).forEach(function (key) {
	      if (shouldMerge(style[key]) && shouldMerge(result[key])) {
	        result[key] = mergeStyles([result[key], style[key]]);
	      } else {
	        result[key] = style[key];
	      }
	    });
	  });

	  return result;
	};

	exports['default'] = mergeStyles;
	module.exports = exports['default'];

/***/ },

/***/ 381:
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */

	'use strict';

	var isObject = __webpack_require__(382);

	function isObjectObject(o) {
	  return isObject(o) === true
	    && Object.prototype.toString.call(o) === '[object Object]';
	}

	module.exports = function isPlainObject(o) {
	  var ctor,prot;
	  
	  if (isObjectObject(o) === false) return false;
	  
	  // If has modified constructor
	  ctor = o.constructor;
	  if (typeof ctor !== 'function') return false;
	  
	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObjectObject(prot) === false) return false;
	  
	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }
	  
	  // Most likely a plain Object
	  return true;
	};


/***/ },

/***/ 382:
/***/ function(module, exports) {

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */

	'use strict';

	module.exports = function isObject(val) {
	  return val != null && typeof val === 'object'
	    && !Array.isArray(val);
	};


/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	/** @flow */
	/* eslint-disable block-scoped-const */

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _checkPropsPlugin = __webpack_require__(384);

	var _checkPropsPlugin2 = _interopRequireDefault(_checkPropsPlugin);

	var _mergeStyleArrayPlugin = __webpack_require__(385);

	var _mergeStyleArrayPlugin2 = _interopRequireDefault(_mergeStyleArrayPlugin);

	var _prefixPlugin = __webpack_require__(386);

	var _prefixPlugin2 = _interopRequireDefault(_prefixPlugin);

	var _resolveInteractionStylesPlugin = __webpack_require__(399);

	var _resolveInteractionStylesPlugin2 = _interopRequireDefault(_resolveInteractionStylesPlugin);

	var _resolveMediaQueriesPlugin = __webpack_require__(401);

	var _resolveMediaQueriesPlugin2 = _interopRequireDefault(_resolveMediaQueriesPlugin);

	/*:: import type {Config} from '../config';*/
	/*:: export type PluginConfig = {
	  // May not be readable if code has been minified
	  componentName: string,

	  // The Radium configuration
	  config: Config,

	  // Retrieve the value of a field on the component
	  getComponentField: (key: string) => any,

	  // Retrieve the value of a field global to the Radium module
	  // Used so that tests can easily clear global state.
	  getGlobalState: (key: string) => any,

	  // Retrieve the value of some state specific to the rendered element.
	  // Requires the element to have a unique key or ref or for an element key
	  // to be passed in.
	  getState: (stateKey: string, elementKey?: string) => any,

	  // Access to the mergeStyles utility
	  mergeStyles: (styles: Array<Object>) => Object,

	  // The props of the rendered element. This can be changed by each plugin,
	  // and successive plugins will see the result of previous plugins.
	  props: Object,

	  // Calls setState on the component with the given key and value.
	  // By default this is specific to the rendered element, but you can override
	  // by passing in the `elementKey` parameter.
	  setState: (stateKey: string, value: any, elementKey?: string) => void,

	  // The style prop of the rendered element. This can be changed by each plugin,
	  // and successive plugins will see the result of previous plugins. Kept
	  // separate from `props` for ease of use.
	  style: Object,

	  // uses the exenv npm module
	  ExecutionEnvironment: {
	    canUseEventListeners: bool,
	    canUseDOM: bool,
	  }
	};*/
	/*:: export type PluginResult = ?{
	  // Merged into the component directly. Useful for storing things for which you
	  // don't need to re-render, event subscriptions, for instance.
	  componentFields?: Object,

	  // Merged into a Radium controlled global state object. Use this instead of
	  // module level state for ease of clearing state between tests.
	  globalState?: Object,

	  // Merged into the rendered element's props.
	  props?: Object,

	  // Replaces (not merged into) the rendered element's style property.
	  style?: Object,
	};*/exports['default'] = {
	  checkProps: _checkPropsPlugin2['default'],
	  mergeStyleArray: _mergeStyleArrayPlugin2['default'],
	  prefix: _prefixPlugin2['default'],
	  resolveInteractionStyles: _resolveInteractionStylesPlugin2['default'],
	  resolveMediaQueries: _resolveMediaQueriesPlugin2['default']
	};
	module.exports = exports['default'];

	// May not be readable if code has been minified

	// The Radium configuration

	// Retrieve the value of a field on the component

	// Retrieve the value of a field global to the Radium module
	// Used so that tests can easily clear global state.

	// Retrieve the value of some state specific to the rendered element.
	// Requires the element to have a unique key or ref or for an element key
	// to be passed in.

	// Access to the mergeStyles utility

	// The props of the rendered element. This can be changed by each plugin,
	// and successive plugins will see the result of previous plugins.

	// Calls setState on the component with the given key and value.
	// By default this is specific to the rendered element, but you can override
	// by passing in the `elementKey` parameter.

	// The style prop of the rendered element. This can be changed by each plugin,
	// and successive plugins will see the result of previous plugins. Kept
	// separate from `props` for ease of use.

	// uses the exenv npm module

	// Merged into the component directly. Useful for storing things for which you
	// don't need to re-render, event subscriptions, for instance.

	// Merged into a Radium controlled global state object. Use this instead of
	// module level state for ease of clearing state between tests.

	// Merged into the rendered element's props.

	// Replaces (not merged into) the rendered element's style property.

/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/* @flow */

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	/*:: import type {PluginConfig, PluginResult} from '.';*/

	var checkProps = (function () {} /*: any*/);

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    // Warn if you use longhand and shorthand properties in the same style
	    // object.
	    // https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties

	    var shorthandPropertyExpansions = {
	      'background': ['backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundPositionX', 'backgroundPositionY', 'backgroundRepeat', 'backgroundRepeatX', 'backgroundRepeatY', 'backgroundSize'],
	      'border': ['borderBottom', 'borderBottomColor', 'borderBottomStyle', 'borderBottomWidth', 'borderColor', 'borderLeft', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth', 'borderRight', 'borderRightColor', 'borderRightStyle', 'borderRightWidth', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopStyle', 'borderTopWidth', 'borderWidth'],
	      'borderImage': ['borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth'],
	      'borderRadius': ['borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopLeftRadius', 'borderTopRightRadius'],
	      'font': ['fontFamily', 'fontKerning', 'fontSize', 'fontStretch', 'fontStyle', 'fontVariant', 'fontVariantLigatures', 'fontWeight', 'lineHeight'],
	      'listStyle': ['listStyleImage', 'listStylePosition', 'listStyleType'],
	      'margin': ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
	      'padding': ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
	      'transition': ['transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction']
	    };

	    checkProps = function (config /*: PluginConfig*/) /*: PluginResult*/ {
	      var componentName = config.componentName;
	      var style = config.style;

	      if (typeof style !== 'object' || !style) {
	        return;
	      }

	      var styleKeys = Object.keys(style);
	      styleKeys.forEach(function (styleKey) {
	        if (Array.isArray(shorthandPropertyExpansions[styleKey]) && shorthandPropertyExpansions[styleKey].some(function (sp) {
	          return styleKeys.indexOf(sp) !== -1;
	        })) {
	          if (process.env.NODE_ENV !== 'production') {
	            /* eslint-disable no-console */
	            console.warn('Radium: property "' + styleKey + '" in style object', style, ': do not mix longhand and ' + 'shorthand properties in the same style object. Check the render ' + 'method of ' + componentName + '.', 'See https://github.com/FormidableLabs/radium/issues/95 for more ' + 'information.');
	            /* eslint-enable no-console */
	          }
	        }
	      });

	      styleKeys.forEach(function (k) {
	        return checkProps(_extends({}, config, { style: style[k] }));
	      });
	      return;
	    };
	  })();
	}

	exports['default'] = checkProps;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },

/***/ 385:
/***/ function(module, exports) {

	/* @flow */

	'use strict';

	exports.__esModule = true;

	// Convenient syntax for multiple styles: `style={[style1, style2, etc]}`
	// Ignores non-objects, so you can do `this.state.isCool && styles.cool`.
	/*:: import type {PluginConfig, PluginResult} from '.';*/var mergeStyleArrayPlugin = function mergeStyleArrayPlugin(_ref /*: PluginConfig*/) /*: PluginResult*/ {
	  var style = _ref.style;
	  var mergeStyles = _ref.mergeStyles;

	  var newStyle = Array.isArray(style) ? mergeStyles(style) : style;
	  return { style: newStyle };
	};

	exports['default'] = mergeStyleArrayPlugin;
	module.exports = exports['default'];

/***/ },

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

	/* @flow */

	'use strict';

	exports.__esModule = true;
	exports['default'] = prefixPlugin;

	var _prefixer = __webpack_require__(387);

	/*:: import type {PluginConfig, PluginResult} from '.';*/
	function prefixPlugin(_ref /*: PluginConfig*/) /*: PluginResult*/ {
	  var componentName = _ref.componentName;
	  var config = _ref.config;
	  var style = _ref.style;

	  var newStyle = _prefixer.getPrefixedStyle(style, componentName, config.userAgent);
	  return { style: newStyle };
	}

	module.exports = exports['default'];

/***/ },

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Based on https://github.com/jsstyles/css-vendor, but without having to
	 * convert between different cases all the time.
	 *
	 * @flow
	 */

	'use strict';

	exports.__esModule = true;
	exports.getPrefixedStyle = getPrefixedStyle;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _inlineStylePrefixer = __webpack_require__(388);

	var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

	function transformValues(style) {
	  return Object.keys(style).reduce(function (newStyle, key) {
	    var value = style[key];
	    if (Array.isArray(value)) {
	      value = value.join(';' + key + ':');
	    }
	    newStyle[key] = value;
	    return newStyle;
	  }, {});
	}

	var hasWarnedAboutUserAgent = false;
	var lastUserAgent = undefined;
	var prefixer = undefined;

	// Returns a new style object with vendor prefixes added to property names
	// and values.

	function getPrefixedStyle(style /*: Object*/, componentName /*: ?string*/, userAgent /*:: ?: ?string*/) /*: Object*/ {
	  var actualUserAgent = userAgent || global && global.navigator && global.navigator.userAgent;

	  if (process.env.NODE_ENV !== 'production') {
	    if (!actualUserAgent && !hasWarnedAboutUserAgent) {
	      /* eslint-disable no-console */
	      console.warn('Radium: userAgent should be supplied for server-side rendering. See ' + 'https://github.com/FormidableLabs/radium/tree/master/docs/api#radium ' + 'for more information.');
	      /* eslint-enable no-console */
	      hasWarnedAboutUserAgent = true;
	    }
	  }

	  if (!prefixer || actualUserAgent !== lastUserAgent) {
	    prefixer = new _inlineStylePrefixer2['default'](actualUserAgent);
	    lastUserAgent = actualUserAgent;
	  }

	  var prefixedStyle = prefixer.prefix(style);
	  var prefixedStyleWithFallbacks = transformValues(prefixedStyle);
	  return prefixedStyleWithFallbacks;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(4)))

/***/ },

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _getBrowserInformation = __webpack_require__(389);

	var _getBrowserInformation2 = _interopRequireDefault(_getBrowserInformation);

	var _getPrefixedKeyframes = __webpack_require__(390);

	var _getPrefixedKeyframes2 = _interopRequireDefault(_getPrefixedKeyframes);

	var _caniuseData = __webpack_require__(391);

	var _caniuseData2 = _interopRequireDefault(_caniuseData);

	var _Plugins = __webpack_require__(392);

	var _Plugins2 = _interopRequireDefault(_Plugins);

	var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

	// only throw warnings if devmode is enabled
	var warn = function warn() {
	  if (process.env.NODE_ENV !== 'production') {
	    console.warn.apply(console, arguments);
	  }
	};
	// helper to capitalize strings
	var caplitalizeString = function caplitalizeString(str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};

	// leight polyfill for Object.assign
	var assign = function assign(base, extend) {
	  if (extend) {
	    Object.keys(extend).forEach(function (key) {
	      return base[key] = extend[key];
	    });
	  }
	  return extend;
	};

	var Prefixer = (function () {
	  /**
	   * Instantiante a new prefixer. Pass an asterisk as userAgent to combine all prefixes
	   * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
	   */

	  function Prefixer() {
	    var _this = this;

	    var userAgent = arguments.length <= 0 || arguments[0] === undefined ? defaultUserAgent : arguments[0];

	    _classCallCheck(this, Prefixer);

	    this._userAgent = userAgent;
	    this._browserInfo = (0, _getBrowserInformation2['default'])(userAgent);

	    // Checks if the userAgent was resolved correctly
	    if (this._browserInfo && this._browserInfo.prefix) {
	      this.cssPrefix = this._browserInfo.prefix.CSS;
	      this.jsPrefix = this._browserInfo.prefix.inline;
	      this.prefixedKeyframes = (0, _getPrefixedKeyframes2['default'])(this._browserInfo);
	    } else {
	      this._hasPropsRequiringPrefix = false;
	      warn('Either the global navigator was undefined or an invalid userAgent was provided.', 'Using a valid userAgent? Please let us know and create an issue at https://github.com/rofrischmann/inline-style-prefixer/issues');
	      return false;
	    }
	    var data = this._browserInfo.browser && _caniuseData2['default'][this._browserInfo.browser];
	    if (data) {
	      this._requiresPrefix = Object.keys(data).filter(function (key) {
	        return data[key] >= _this._browserInfo.version;
	      }).reduce(function (result, name) {
	        result[name] = true;
	        return result;
	      }, {});
	      this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
	    } else {
	      this._hasPropsRequiringPrefix = false;
	      warn('Your userAgent seems to be not supported by inline-style-prefixer. Feel free to open an issue.');
	      return false;
	    }
	  }

	  /**
	   * Returns a prefixed version of the style object
	   * @param {Object} styles - Style object that gets prefixed properties added
	   * @returns {Object} - Style object with prefixed properties and values
	   */

	  _createClass(Prefixer, [{
	    key: 'prefix',
	    value: function prefix(styles) {
	      var _this2 = this;

	      // only add prefixes if needed
	      if (!this._hasPropsRequiringPrefix) {
	        return styles;
	      }

	      styles = assign({}, styles);

	      Object.keys(styles).forEach(function (property) {
	        var value = styles[property];
	        if (value instanceof Object) {
	          // recurse through nested style objects
	          styles[property] = _this2.prefix(value);
	        } else {
	          // add prefixes if needed
	          if (_this2._requiresPrefix[property]) {
	            styles[_this2.jsPrefix + caplitalizeString(property)] = value;
	            delete styles[property];
	          }

	          // resolve plugins
	          _Plugins2['default'].forEach(function (plugin) {
	            assign(styles, plugin(property, value, _this2._browserInfo, styles, false));
	          });
	        }
	      });

	      return styles;
	    }

	    /**
	     * Returns a prefixed version of the style object using all vendor prefixes
	     * @param {Object} styles - Style object that gets prefixed properties added
	     * @returns {Object} - Style object with prefixed properties and values
	     */
	  }], [{
	    key: 'prefixAll',
	    value: function prefixAll(styles) {
	      var prefixes = {};
	      var browserInfo = (0, _getBrowserInformation2['default'])('*');

	      browserInfo.browsers.forEach(function (browser) {
	        var data = _caniuseData2['default'][browser];
	        if (data) {
	          assign(prefixes, data);
	        }
	      });

	      // there should always be at least one prefixed style, but just incase
	      if (!Object.keys(prefixes).length > 0) {
	        return styles;
	      }

	      styles = assign({}, styles);

	      Object.keys(styles).forEach(function (property) {
	        var value = styles[property];
	        if (value instanceof Object) {
	          // recurse through nested style objects
	          styles[property] = Prefixer.prefixAll(value);
	        } else {
	          var browsers = Object.keys(browserInfo.prefixes);
	          browsers.forEach(function (browser) {
	            var style = browserInfo.prefixes[browser];
	            // add prefixes if needed
	            if (prefixes[property]) {
	              styles[style.inline + caplitalizeString(property)] = value;
	            }

	            // resolve plugins for each browser
	            _Plugins2['default'].forEach(function (plugin) {
	              var browserInfo = {
	                name: browser,
	                prefix: style,
	                version: 0 // assume lowest
	              };
	              assign(styles, plugin(property, value, browserInfo, styles, true));
	            });
	          });
	        }
	      });

	      return styles;
	    }
	  }]);

	  return Prefixer;
	})();

	exports['default'] = Prefixer;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _bowser = __webpack_require__(279);

	var _bowser2 = _interopRequireDefault(_bowser);

	var vendorPrefixes = {
	  Webkit: ['chrome', 'safari', 'ios', 'android', 'phantom', 'opera', 'webos', 'blackberry', 'bada', 'tizen'],
	  Moz: ['firefox', 'seamonkey', 'sailfish'],
	  ms: ['msie', 'msedge']
	};

	var browsers = {
	  chrome: [['chrome'], ['phantom'], ['webos'], ['blackberry'], ['bada'], ['tizenn']],
	  safari: [['safari']],
	  firefox: [['firefox'], ['seamonkey'], ['sailfish']],
	  ie: [['msie'], ['msedge']],
	  opera: [['opera']],
	  ios_saf: [['ios', 'mobile'], ['ios', 'tablet']],
	  ie_mob: [['windowsphone', 'mobile', 'msie'], ['windowsphone', 'tablet', 'msie'], ['windowsphone', 'mobile', 'msedge'], ['windowsphone', 'tablet', 'msedge']],
	  op_mini: [['opera', 'mobile'], ['opera', 'tablet']],
	  and_chr: [['android', 'chrome', 'mobile'], ['android', 'chrome', 'tablet']],
	  and_uc: [['android', 'mobile'], ['android', 'mobile']],
	  android: [['android', 'mobile'], ['android', 'mobile']]
	};

	/**
	 * Returns an object containing prefix data associated with a browser
	 * @param {string} browser - browser to find a prefix for
	 */
	var getPrefixes = function getPrefixes(browser) {
	  var prefixKeys = undefined;
	  var prefix = undefined;
	  var vendors = undefined;
	  var conditions = undefined;
	  var prefixVendor = undefined;
	  var browserVendors = undefined;

	  // Find the prefix for this browser (if any)
	  prefixKeys = Object.keys(vendorPrefixes);
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = prefixKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      prefix = _step.value;

	      // Find a matching vendor
	      vendors = vendorPrefixes[prefix];
	      conditions = browsers[browser];
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = vendors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          prefixVendor = _step2.value;
	          var _iteratorNormalCompletion3 = true;
	          var _didIteratorError3 = false;
	          var _iteratorError3 = undefined;

	          try {
	            for (var _iterator3 = conditions[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	              browserVendors = _step3.value;

	              if (browserVendors.indexOf(prefixVendor) !== -1) {
	                return {
	                  inline: prefix,
	                  CSS: '-' + prefix.toLowerCase() + '-'
	                };
	              }
	            }
	          } catch (err) {
	            _didIteratorError3 = true;
	            _iteratorError3 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion3 && _iterator3['return']) {
	                _iterator3['return']();
	              }
	            } finally {
	              if (_didIteratorError3) {
	                throw _iteratorError3;
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	            _iterator2['return']();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }

	    // No prefix found for this browser
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator['return']) {
	        _iterator['return']();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  return { inline: '', CSS: '' };
	};

	/**
	 * Uses bowser to get default browser information such as version and name
	 * Evaluates bowser info and adds vendorPrefix information
	 * @param {string} userAgent - userAgent that gets evaluated
	 */

	exports['default'] = function (userAgent) {
	  if (!userAgent) {
	    return false;
	  }

	  var info = {};

	  // Special user agent, return all supported prefixes
	  // instead of returning a string browser name and a prefix object
	  // we return an array of browser names and map of prefixes for each browser
	  if (userAgent === '*') {
	    // Return an array of supported browsers
	    info.browsers = Object.keys(browsers);

	    // Return prefixes associated by browser
	    info.prefixes = {};

	    // Iterate browser list, assign prefix to each
	    info.browsers.forEach(function (browser) {
	      info.prefixes[browser] = getPrefixes(browser);
	    });

	    return info;
	  }

	  // Normal user agent, detect browser
	  info = _bowser2['default']._detect(userAgent);

	  Object.keys(vendorPrefixes).forEach(function (prefix) {
	    vendorPrefixes[prefix].forEach(function (browser) {
	      if (info[browser]) {
	        info.prefix = {
	          inline: prefix,
	          CSS: '-' + prefix.toLowerCase() + '-'
	        };
	      }
	    });
	  });

	  var name = '';
	  Object.keys(browsers).forEach(function (browser) {
	    browsers[browser].forEach(function (condition) {
	      var match = 0;
	      condition.forEach(function (single) {
	        if (info[single]) {
	          match += 1;
	        }
	      });
	      if (condition.length === match) {
	        name = browser;
	      }
	    });
	  });

	  info.browser = name;
	  return info;
	};

	module.exports = exports['default'];

/***/ },

/***/ 390:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (_ref) {
	  var browser = _ref.browser;
	  var version = _ref.version;
	  var prefix = _ref.prefix;

	  var prefixedKeyframes = 'keyframes';
	  if (browser === 'chrome' && version < 43 || (browser === 'safari' || browser === 'ios_saf') && version < 9 || browser === 'opera' && version < 30 || browser === 'android' && version <= 4.4 || browser === 'and_uc') {
	    prefixedKeyframes = prefix.CSS + prefixedKeyframes;
	  }
	  return prefixedKeyframes;
	};

	module.exports = exports['default'];

/***/ },

/***/ 391:
/***/ function(module, exports) {

	var caniuseData = {"chrome":{"backfaceVisibility":35,"perspective":35,"perspectiveOrigin":35,"transform":35,"transformOrigin":35,"transformStyle":35,"transformOriginX":35,"transformOriginY":35,"animation":42,"animationDelay":42,"animationDirection":42,"animationFillMode":42,"animationDuration":42,"anmationIterationCount":42,"animationName":42,"animationPlayState":42,"animationTimingFunction":42,"appearance":49,"userSelect":49,"fontKerning":32,"textEmphasisPosition":49,"textEmphasis":49,"textEmphasisStyle":49,"textEmphasisColor":49,"boxDecorationBreak":49,"clipPath":49,"maskImage":49,"maskMode":49,"maskRepeat":49,"maskPosition":49,"maskClip":49,"maskOrigin":49,"maskSize":49,"maskComposite":49,"mask":49,"maskBorderSource":49,"maskBorderMode":49,"maskBorderSlice":49,"maskBorderWidth":49,"maskBorderOutset":49,"maskBorderRepeat":49,"maskBorder":49,"maskType":49,"textDecorationStyle":49,"textDecorationSkip":49,"textDecorationLine":49,"textDecorationColor":49,"filter":49,"fontFeatureSettings":49,"breakAfter":49,"breakBefore":49,"breakInside":49,"columnCount":49,"columnFill":49,"columnGap":49,"columnRule":49,"columnRuleColor":49,"columnRuleStyle":49,"columnRuleWidth":49,"columns":49,"columnSpan":49,"columnWidth":49},"safari":{"flex":8,"flexBasis":8,"flexDirection":8,"flexGrow":8,"flexFlow":8,"flexShrink":8,"alignContent":8,"alignItems":8,"alignSelf":8,"justifyContent":8,"order":8,"transition":6,"transitionDelay":6,"transitionDuration":6,"transitionProperty":6,"transitionTimingFunction":6,"backfaceVisibility":8,"perspective":8,"perspectiveOrigin":8,"transform":8,"transformOrigin":8,"transformStyle":8,"transformOriginX":8,"transformOriginY":8,"animation":8,"animationDelay":8,"animationDirection":8,"animationFillMode":8,"animationDuration":8,"anmationIterationCount":8,"animationName":8,"animationPlayState":8,"animationTimingFunction":8,"appearance":9,"userSelect":9,"backdropFilter":9,"fontKerning":9,"scrollSnapType":9,"scrollSnapPointsX":9,"scrollSnapPointsY":9,"scrollSnapDestination":9,"scrollSnapCoordinate":9,"textEmphasisPosition":7,"textEmphasis":7,"textEmphasisStyle":7,"textEmphasisColor":7,"boxDecorationBreak":9,"clipPath":9,"maskImage":9,"maskMode":9,"maskRepeat":9,"maskPosition":9,"maskClip":9,"maskOrigin":9,"maskSize":9,"maskComposite":9,"mask":9,"maskBorderSource":9,"maskBorderMode":9,"maskBorderSlice":9,"maskBorderWidth":9,"maskBorderOutset":9,"maskBorderRepeat":9,"maskBorder":9,"maskType":9,"textDecorationStyle":9,"textDecorationSkip":9,"textDecorationLine":9,"textDecorationColor":9,"shapeImageThreshold":9,"shapeImageMargin":9,"shapeImageOutside":9,"filter":9,"hyphens":9,"flowInto":9,"flowFrom":9,"breakBefore":8,"breakAfter":8,"breakInside":8,"regionFragment":9,"columnCount":8,"columnFill":8,"columnGap":8,"columnRule":8,"columnRuleColor":8,"columnRuleStyle":8,"columnRuleWidth":8,"columns":8,"columnSpan":8,"columnWidth":8},"firefox":{"appearance":45,"userSelect":45,"boxSizing":28,"textAlignLast":45,"textDecorationStyle":35,"textDecorationSkip":35,"textDecorationLine":35,"textDecorationColor":35,"tabSize":45,"hyphens":42,"fontFeatureSettings":33,"breakAfter":45,"breakBefore":45,"breakInside":45,"columnCount":45,"columnFill":45,"columnGap":45,"columnRule":45,"columnRuleColor":45,"columnRuleStyle":45,"columnRuleWidth":45,"columns":45,"columnSpan":45,"columnWidth":45},"opera":{"flex":16,"flexBasis":16,"flexDirection":16,"flexGrow":16,"flexFlow":16,"flexShrink":16,"alignContent":16,"alignItems":16,"alignSelf":16,"justifyContent":16,"order":16,"backfaceVisibility":22,"perspective":22,"perspectiveOrigin":22,"transform":22,"transformOrigin":22,"transformStyle":22,"transformOriginX":22,"transformOriginY":22,"animation":29,"animationDelay":29,"animationDirection":29,"animationFillMode":29,"animationDuration":29,"anmationIterationCount":29,"animationName":29,"animationPlayState":29,"animationTimingFunction":29,"appearance":35,"userSelect":35,"fontKerning":19,"textEmphasisPosition":35,"textEmphasis":35,"textEmphasisStyle":35,"textEmphasisColor":35,"boxDecorationBreak":35,"clipPath":35,"maskImage":35,"maskMode":35,"maskRepeat":35,"maskPosition":35,"maskClip":35,"maskOrigin":35,"maskSize":35,"maskComposite":35,"mask":35,"maskBorderSource":35,"maskBorderMode":35,"maskBorderSlice":35,"maskBorderWidth":35,"maskBorderOutset":35,"maskBorderRepeat":35,"maskBorder":35,"maskType":35,"filter":35,"fontFeatureSettings":35,"breakAfter":35,"breakBefore":35,"breakInside":35,"columnCount":35,"columnFill":35,"columnGap":35,"columnRule":35,"columnRuleColor":35,"columnRuleStyle":35,"columnRuleWidth":35,"columns":35,"columnSpan":35,"columnWidth":35},"ie":{"wrapMargin":11,"gridColumnStart":11,"regionFragment":11,"gridTemplateAreas":11,"gridRow":11,"wrapFlow":11,"scrollSnapDestination":11,"scrollSnapPointsY":11,"breakBefore":11,"flex":10,"gridAutoRows":11,"gridRowStart":11,"gridAutoFlow":11,"rowGap":11,"hyphens":11,"scrollSnapType":11,"gridTemplate":11,"scrollSnapPointsX":11,"wrapThrough":11,"flowFrom":11,"breakInside":11,"flexFlow":10,"columnGap":11,"gridArea":11,"gridColumn":11,"breakAfter":11,"gridAutoColumns":11,"scrollSnapCoordinate":11,"userSelect":11,"touchAction":10,"gridGap":11,"gridTemplateColumns":11,"gridTemplateRows":11,"grid":11,"gridRowEnd":11,"flexDirection":10,"flowInto":11,"textSizeAdjust":11},"ios_saf":{"flex":8.1,"flexBasis":8.1,"flexDirection":8.1,"flexGrow":8.1,"flexFlow":8.1,"flexShrink":8.1,"alignContent":8.1,"alignItems":8.1,"alignSelf":8.1,"justifyContent":8.1,"order":8.1,"transition":6,"transitionDelay":6,"transitionDuration":6,"transitionProperty":6,"transitionTimingFunction":6,"backfaceVisibility":8.1,"perspective":8.1,"perspectiveOrigin":8.1,"transform":8.1,"transformOrigin":8.1,"transformStyle":8.1,"transformOriginX":8.1,"transformOriginY":8.1,"animation":8.1,"animationDelay":8.1,"animationDirection":8.1,"animationFillMode":8.1,"animationDuration":8.1,"anmationIterationCount":8.1,"animationName":8.1,"animationPlayState":8.1,"animationTimingFunction":8.1,"appearance":9,"userSelect":9,"backdropFilter":9,"fontKerning":9,"scrollSnapType":9,"scrollSnapPointsX":9,"scrollSnapPointsY":9,"scrollSnapDestination":9,"scrollSnapCoordinate":9,"boxDecorationBreak":9,"clipPath":9,"maskImage":9,"maskMode":9,"maskRepeat":9,"maskPosition":9,"maskClip":9,"maskOrigin":9,"maskSize":9,"maskComposite":9,"mask":9,"maskBorderSource":9,"maskBorderMode":9,"maskBorderSlice":9,"maskBorderWidth":9,"maskBorderOutset":9,"maskBorderRepeat":9,"maskBorder":9,"maskType":9,"textSizeAdjust":9,"textDecorationStyle":9,"textDecorationSkip":9,"textDecorationLine":9,"textDecorationColor":9,"shapeImageThreshold":9,"shapeImageMargin":9,"shapeImageOutside":9,"filter":9,"hyphens":9,"flowInto":9,"flowFrom":9,"breakBefore":8.1,"breakAfter":8.1,"breakInside":8.1,"regionFragment":9,"columnCount":8.1,"columnFill":8.1,"columnGap":8.1,"columnRule":8.1,"columnRuleColor":8.1,"columnRuleStyle":8.1,"columnRuleWidth":8.1,"columns":8.1,"columnSpan":8.1,"columnWidth":8.1},"android":{"borderImage":4.2,"borderImageOutset":4.2,"borderImageRepeat":4.2,"borderImageSlice":4.2,"borderImageSource":4.2,"borderImageWidth":4.2,"flex":4.2,"flexBasis":4.2,"flexDirection":4.2,"flexGrow":4.2,"flexFlow":4.2,"flexShrink":4.2,"alignContent":4.2,"alignItems":4.2,"alignSelf":4.2,"justifyContent":4.2,"order":4.2,"transition":4.2,"transitionDelay":4.2,"transitionDuration":4.2,"transitionProperty":4.2,"transitionTimingFunction":4.2,"backfaceVisibility":4.4,"perspective":4.4,"perspectiveOrigin":4.4,"transform":4.4,"transformOrigin":4.4,"transformStyle":4.4,"transformOriginX":4.4,"transformOriginY":4.4,"animation":4.4,"animationDelay":4.4,"animationDirection":4.4,"animationFillMode":4.4,"animationDuration":4.4,"anmationIterationCount":4.4,"animationName":4.4,"animationPlayState":4.4,"animationTimingFunction":4.4,"appearance":44,"userSelect":44,"fontKerning":4.4,"textEmphasisPosition":44,"textEmphasis":44,"textEmphasisStyle":44,"textEmphasisColor":44,"boxDecorationBreak":44,"clipPath":44,"maskImage":44,"maskMode":44,"maskRepeat":44,"maskPosition":44,"maskClip":44,"maskOrigin":44,"maskSize":44,"maskComposite":44,"mask":44,"maskBorderSource":44,"maskBorderMode":44,"maskBorderSlice":44,"maskBorderWidth":44,"maskBorderOutset":44,"maskBorderRepeat":44,"maskBorder":44,"maskType":44,"filter":44,"fontFeatureSettings":44,"breakAfter":44,"breakBefore":44,"breakInside":44,"columnCount":44,"columnFill":44,"columnGap":44,"columnRule":44,"columnRuleColor":44,"columnRuleStyle":44,"columnRuleWidth":44,"columns":44,"columnSpan":44,"columnWidth":44},"and_chr":{},"and_uc":{"flex":9.9,"flexBasis":9.9,"flexDirection":9.9,"flexGrow":9.9,"flexFlow":9.9,"flexShrink":9.9,"alignContent":9.9,"alignItems":9.9,"alignSelf":9.9,"justifyContent":9.9,"order":9.9,"transition":9.9,"transitionDelay":9.9,"transitionDuration":9.9,"transitionProperty":9.9,"transitionTimingFunction":9.9,"backfaceVisibility":9.9,"perspective":9.9,"perspectiveOrigin":9.9,"transform":9.9,"transformOrigin":9.9,"transformStyle":9.9,"transformOriginX":9.9,"transformOriginY":9.9,"animation":9.9,"animationDelay":9.9,"animationDirection":9.9,"animationFillMode":9.9,"animationDuration":9.9,"anmationIterationCount":9.9,"animationName":9.9,"animationPlayState":9.9,"animationTimingFunction":9.9,"appearance":9.9,"userSelect":9.9,"fontKerning":9.9,"textEmphasisPosition":9.9,"textEmphasis":9.9,"textEmphasisStyle":9.9,"textEmphasisColor":9.9,"maskImage":9.9,"maskMode":9.9,"maskRepeat":9.9,"maskPosition":9.9,"maskClip":9.9,"maskOrigin":9.9,"maskSize":9.9,"maskComposite":9.9,"mask":9.9,"maskBorderSource":9.9,"maskBorderMode":9.9,"maskBorderSlice":9.9,"maskBorderWidth":9.9,"maskBorderOutset":9.9,"maskBorderRepeat":9.9,"maskBorder":9.9,"maskType":9.9,"textSizeAdjust":9.9,"filter":9.9,"hyphens":9.9,"flowInto":9.9,"flowFrom":9.9,"breakBefore":9.9,"breakAfter":9.9,"breakInside":9.9,"regionFragment":9.9,"fontFeatureSettings":9.9,"columnCount":9.9,"columnFill":9.9,"columnGap":9.9,"columnRule":9.9,"columnRuleColor":9.9,"columnRuleStyle":9.9,"columnRuleWidth":9.9,"columns":9.9,"columnSpan":9.9,"columnWidth":9.9},"op_mini":{"borderImage":5,"borderImageOutset":5,"borderImageRepeat":5,"borderImageSlice":5,"borderImageSource":5,"borderImageWidth":5,"tabSize":5,"objectFit":5,"objectPosition":5}}; module.exports = caniuseData

/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _pluginsCursor = __webpack_require__(393);

	var _pluginsCursor2 = _interopRequireDefault(_pluginsCursor);

	var _pluginsFlex = __webpack_require__(394);

	var _pluginsFlex2 = _interopRequireDefault(_pluginsFlex);

	var _pluginsSizing = __webpack_require__(395);

	var _pluginsSizing2 = _interopRequireDefault(_pluginsSizing);

	var _pluginsGradient = __webpack_require__(396);

	var _pluginsGradient2 = _interopRequireDefault(_pluginsGradient);

	// special flexbox specifications

	var _pluginsFlexboxIE = __webpack_require__(397);

	var _pluginsFlexboxIE2 = _interopRequireDefault(_pluginsFlexboxIE);

	var _pluginsFlexboxOld = __webpack_require__(398);

	var _pluginsFlexboxOld2 = _interopRequireDefault(_pluginsFlexboxOld);

	exports['default'] = [_pluginsCursor2['default'], _pluginsFlex2['default'], _pluginsSizing2['default'], _pluginsGradient2['default'], _pluginsFlexboxIE2['default'], _pluginsFlexboxOld2['default']];
	module.exports = exports['default'];

/***/ },

/***/ 393:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var values = ['zoom-in', 'zoom-out', 'grab', 'grabbing'];

	exports['default'] = function (property, value, _ref2) {
	  var browser = _ref2.browser;
	  var version = _ref2.version;
	  var prefix = _ref2.prefix;

	  if (property === 'cursor' && values.indexOf(value) > -1 && (browser === 'firefox' && version < 24 || browser === 'chrome' && version < 37 || browser === 'safari' && version < 9 || browser === 'opera' && version < 24)) {
	    return _defineProperty({}, property, prefix.CSS + value);
	  }
	};

	module.exports = exports['default'];

/***/ },

/***/ 394:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var values = ['flex', 'inline-flex'];

	exports['default'] = function (property, value, _ref2) {
	  var browser = _ref2.browser;
	  var version = _ref2.version;
	  var prefix = _ref2.prefix;

	  if (property === 'display' && values.indexOf(value) > -1 && (browser === 'chrome' && (version < 29 || version > 20) || (browser === 'safari' || browser === 'ios_saf') && (version < 9 || version > 6) || browser === 'opera' && (version == 15 || version == 16))) {
	    return _defineProperty({}, property, prefix.CSS + value);
	  }
	};

	module.exports = exports['default'];

/***/ },

/***/ 395:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var properties = ['maxHeight', 'maxWidth', 'width', 'height', 'columnWidth', 'minWidth', 'minHeight'];
	var values = ['min-content', 'max-content', 'fill-available', 'fit-content', 'contain-floats'];

	exports['default'] = function (property, value, _ref2) {
	  var prefix = _ref2.prefix;

	  /**
	   * This actually is only available with prefixes
	   * NOTE: This might change in the feature
	   */
	  if (properties.indexOf(property) > -1 && values.indexOf(value) > -1) {
	    return _defineProperty({}, property, prefix.CSS + value);
	  }
	};

	module.exports = exports['default'];

/***/ },

/***/ 396:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var properties = ['background', 'backgroundImage'];
	var values = ['linear-gradient', 'radial-gradient', 'repeating-linear-gradient', 'repeating-radial-gradient'];

	exports['default'] = function (property, value, _ref2) {
	  var browser = _ref2.browser;
	  var version = _ref2.version;
	  var prefix = _ref2.prefix;

	  if (properties.indexOf(property) > -1 && values.indexOf(value) > -1 && (browser === 'firefox' && version < 16 || browser === 'chrome' && version < 26 || (browser === 'safari' || browser === 'ios_saf') && version < 7 || (browser === 'opera' || browser === 'op_mini') && version < 12.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    return _defineProperty({}, property, prefix.CSS + value);
	  }
	};

	module.exports = exports['default'];

/***/ },

/***/ 397:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  flex: '-ms-flexbox',
	  'inline-flex': '-ms-inline-flexbox'
	};

	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};

	var properties = Object.keys(alternativeProps).concat('display');

	exports['default'] = function (property, value, _ref2, styles) {
	  var browser = _ref2.browser;
	  var version = _ref2.version;

	  if (properties.indexOf(property) > -1 && (browser === 'ie_mob' || browser === 'ie') && version == 10) {
	    delete styles[property];
	    return _defineProperty({}, alternativeProps[property] || property, alternativeValues[value] || value);
	  }
	};

	module.exports = exports['default'];

/***/ },

/***/ 398:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple',
	  flex: 'box',
	  'inline-flex': 'inline-box'
	};

	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};

	var properties = Object.keys(alternativeProps).concat(['alignContent', 'alignSelf', 'display', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection']);

	exports['default'] = function (property, value, _ref2) {
	  var browser = _ref2.browser;
	  var version = _ref2.version;
	  var prefix = _ref2.prefix;

	  if (properties.indexOf(property) > -1 && (browser === 'firefox' && version < 22 || browser === 'chrome' && version < 21 || (browser === 'safari' || browser === 'ios_saf') && version <= 6.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    if (property === 'flexDirection') {
	      return {
	        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	      };
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return { display: prefix.CSS + alternativeValues[value] };
	    }
	    return _defineProperty({}, alternativeProps[property] || property, alternativeValues[value] || value);
	  }
	};

	module.exports = exports['default'];

/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	/** @flow */

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mouseUpListener = __webpack_require__(400);

	var _mouseUpListener2 = _interopRequireDefault(_mouseUpListener);

	/*:: import type {PluginConfig, PluginResult} from '.';*/

	var _isInteractiveStyleField = function _isInteractiveStyleField(styleFieldName) {
	  return styleFieldName === ':hover' || styleFieldName === ':active' || styleFieldName === ':focus';
	};

	var resolveInteractionStyles = function resolveInteractionStyles(config /*: PluginConfig*/) /*: PluginResult*/ {
	  var ExecutionEnvironment = config.ExecutionEnvironment;
	  var getComponentField = config.getComponentField;
	  var getState = config.getState;
	  var mergeStyles = config.mergeStyles;
	  var props = config.props;
	  var setState = config.setState;
	  var style = config.style;

	  var newComponentFields = {};
	  var newProps = {};

	  // Only add handlers if necessary
	  if (style[':hover']) {
	    (function () {
	      // Always call the existing handler if one is already defined.
	      // This code, and the very similar ones below, could be abstracted a bit
	      // more, but it hurts readability IMO.
	      var existingOnMouseEnter = props.onMouseEnter;
	      newProps.onMouseEnter = function (e) {
	        existingOnMouseEnter && existingOnMouseEnter(e);
	        setState(':hover', true);
	      };

	      var existingOnMouseLeave = props.onMouseLeave;
	      newProps.onMouseLeave = function (e) {
	        existingOnMouseLeave && existingOnMouseLeave(e);
	        setState(':hover', false);
	      };
	    })();
	  }

	  if (style[':active']) {
	    (function () {
	      var existingOnMouseDown = props.onMouseDown;
	      newProps.onMouseDown = function (e) {
	        existingOnMouseDown && existingOnMouseDown(e);
	        newComponentFields._lastMouseDown = Date.now();
	        setState(':active', 'viamousedown');
	      };

	      var existingOnKeyDown = props.onKeyDown;
	      newProps.onKeyDown = function (e) {
	        existingOnKeyDown && existingOnKeyDown(e);
	        if (e.key === ' ' || e.key === 'Enter') {
	          setState(':active', 'viakeydown');
	        }
	      };

	      var existingOnKeyUp = props.onKeyUp;
	      newProps.onKeyUp = function (e) {
	        existingOnKeyUp && existingOnKeyUp(e);
	        if (e.key === ' ' || e.key === 'Enter') {
	          setState(':active', false);
	        }
	      };
	    })();
	  }

	  if (style[':focus']) {
	    (function () {
	      var existingOnFocus = props.onFocus;
	      newProps.onFocus = function (e) {
	        existingOnFocus && existingOnFocus(e);
	        setState(':focus', true);
	      };

	      var existingOnBlur = props.onBlur;
	      newProps.onBlur = function (e) {
	        existingOnBlur && existingOnBlur(e);
	        setState(':focus', false);
	      };
	    })();
	  }

	  if (style[':active'] && !getComponentField('_radiumMouseUpListener') && ExecutionEnvironment.canUseEventListeners) {
	    newComponentFields._radiumMouseUpListener = _mouseUpListener2['default'].subscribe(function () {
	      Object.keys(getComponentField('state')._radiumStyleState).forEach(function (key) {
	        if (getState(':active', key) === 'viamousedown') {
	          setState(':active', false, key);
	        }
	      });
	    });
	  }

	  // Merge the styles in the order they were defined
	  var interactionStyles = Object.keys(style).filter(function (name) {
	    return _isInteractiveStyleField(name) && getState(name);
	  }).map(function (name) {
	    return style[name];
	  });

	  var newStyle = mergeStyles([style].concat(interactionStyles));

	  // Remove interactive styles
	  newStyle = Object.keys(newStyle).reduce(function (styleWithoutInteractions, name) {
	    if (!_isInteractiveStyleField(name)) {
	      styleWithoutInteractions[name] = newStyle[name];
	    }
	    return styleWithoutInteractions;
	  }, {});

	  return {
	    componentFields: newComponentFields,
	    props: newProps,
	    style: newStyle
	  };
	};

	exports['default'] = resolveInteractionStyles;
	module.exports = exports['default'];

/***/ },

/***/ 400:
/***/ function(module, exports) {

	/* @flow */

	'use strict';

	exports.__esModule = true;
	var _callbacks = [];
	var _mouseUpListenerIsActive = false;

	function _handleMouseUp() {
	  _callbacks.forEach(function (callback) {
	    callback();
	  });
	}

	var subscribe = function subscribe(callback /*: () => void*/) /*: {remove: () => void}*/ {
	  if (_callbacks.indexOf(callback) === -1) {
	    _callbacks.push(callback);
	  }

	  if (!_mouseUpListenerIsActive) {
	    window.addEventListener('mouseup', _handleMouseUp);
	    _mouseUpListenerIsActive = true;
	  }

	  return {
	    remove: function remove() {
	      var index = _callbacks.indexOf(callback);
	      _callbacks.splice(index, 1);

	      if (_callbacks.length === 0 && _mouseUpListenerIsActive) {
	        window.removeEventListener('mouseup', _handleMouseUp);
	        _mouseUpListenerIsActive = false;
	      }
	    }
	  };
	};

	exports['default'] = {
	  subscribe: subscribe,
	  __triggerForTests: _handleMouseUp
	};
	module.exports = exports['default'];

/***/ },

/***/ 401:
/***/ function(module, exports) {

	/** @flow */

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = resolveMediaQueries;

	/*:: import type {MatchMediaType} from '../config';*/
	/*:: import type {PluginConfig, PluginResult} from '.';*/

	var _windowMatchMedia = undefined;
	var _getWindowMatchMedia = function _getWindowMatchMedia(ExecutionEnvironment) {
	  if (_windowMatchMedia === undefined) {
	    _windowMatchMedia = !!ExecutionEnvironment.canUseDOM && !!window && !!window.matchMedia && function (mediaQueryString) {
	      return window.matchMedia(mediaQueryString);
	    } || null;
	  }
	  return _windowMatchMedia;
	};

	function resolveMediaQueries(_ref /*: PluginConfig*/) /*: PluginResult*/ {
	  var ExecutionEnvironment = _ref.ExecutionEnvironment;
	  var getComponentField = _ref.getComponentField;
	  var getGlobalState = _ref.getGlobalState;
	  var config = _ref.config;
	  var mergeStyles = _ref.mergeStyles;
	  var setState = _ref.setState;
	  var style = _ref.style;

	  var newComponentFields = {};
	  var newStyle = style;
	  var matchMedia /*: ?MatchMediaType*/ = config.matchMedia || _getWindowMatchMedia(ExecutionEnvironment);
	  if (!matchMedia) {
	    return newStyle;
	  }

	  var mediaQueryListByQueryString = getGlobalState('mediaQueryListByQueryString') || {};

	  Object.keys(style).filter(function (name) {
	    return name.indexOf('@media') === 0;
	  }).map(function (query) {
	    var mediaQueryStyles = style[query];
	    query = query.replace('@media ', '');

	    // Create a global MediaQueryList if one doesn't already exist
	    var mql = mediaQueryListByQueryString[query];
	    if (!mql && matchMedia) {
	      mediaQueryListByQueryString[query] = mql = matchMedia(query);
	    }

	    var listenersByQuery = getComponentField('_radiumMediaQueryListenersByQuery');

	    if (!listenersByQuery || !listenersByQuery[query]) {
	      (function () {
	        var listener = function listener() {
	          return setState(query, mql.matches, '_all');
	        };
	        mql.addListener(listener);
	        newComponentFields._radiumMediaQueryListenersByQuery = _extends({}, listenersByQuery);
	        newComponentFields._radiumMediaQueryListenersByQuery[query] = {
	          remove: function remove() {
	            mql.removeListener(listener);
	          }
	        };
	      })();
	    }

	    // Apply media query states
	    if (mql.matches) {
	      newStyle = mergeStyles([newStyle, mediaQueryStyles]);
	    }
	  });

	  // Remove media queries
	  newStyle = Object.keys(newStyle).reduce(function (styleWithoutMedia, key) {
	    if (key.indexOf('@media') !== 0) {
	      styleWithoutMedia[key] = newStyle[key];
	    }
	    return styleWithoutMedia;
	  }, {});

	  return {
	    componentFields: newComponentFields,
	    globalState: { mediaQueryListByQueryString: mediaQueryListByQueryString },
	    style: newStyle
	  };
	}

	module.exports = exports['default'];

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/

	(function () {
		'use strict';

		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);

		var ExecutionEnvironment = {

			canUseDOM: canUseDOM,

			canUseWorkers: typeof Worker !== 'undefined',

			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),

			canUseViewport: canUseDOM && !!window.screen

		};

		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}

	}());


/***/ },

/***/ 403:
/***/ function(module, exports) {

	/* @flow */

	"use strict";

	exports.__esModule = true;
	var allPrintStyles = {};
	var listeners = [];

	function subscribe(listener /*: () => void*/) /*: {remove: () => void}*/ {
	  if (listeners.indexOf(listener) === -1) {
	    listeners.push(listener);
	  }

	  return {
	    remove: function remove() {
	      var listenerIndex = listeners.indexOf(listener);

	      if (listenerIndex > -1) {
	        listeners.splice(listenerIndex, 1);
	      }
	    }
	  };
	}

	function _emitChange() {
	  listeners.forEach(function (listener) {
	    return listener();
	  });
	}

	function _appendImportantToEachValue(styleObj) {
	  var importantStyleObj = {};

	  Object.keys(styleObj).forEach(function (key) {
	    var value = styleObj[key];

	    // This breaks unitless values but they'll be deprecated soon anyway
	    // https://github.com/facebook/react/issues/1873
	    value = value + " !important";
	    importantStyleObj[key] = value;
	  });

	  return importantStyleObj;
	}

	function addPrintStyles(Component /*: constructor*/) {
	  if (!Component.printStyles) {
	    return;
	  }

	  var printStyleClass = {};

	  Object.keys(Component.printStyles).forEach(function (key) {
	    var styles = Component.printStyles[key];
	    var className = "Radium-" + Component.displayName + "-" + key;
	    allPrintStyles["." + className] = _appendImportantToEachValue(styles);
	    printStyleClass[key] = className;
	  });

	  // Allows for lazy loading of JS that then calls Radium to update the
	  // print styles
	  _emitChange();
	  return printStyleClass;
	}

	function getPrintStyles() /*: Object*/ {
	  return allPrintStyles;
	}

	exports["default"] = {
	  addPrintStyles: addPrintStyles,
	  getPrintStyles: getPrintStyles,
	  subscribe: subscribe
	};
	module.exports = exports["default"];

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styleJs = __webpack_require__(405);

	var _styleJs2 = _interopRequireDefault(_styleJs);

	var _printStylesJs = __webpack_require__(403);

	var _printStylesJs2 = _interopRequireDefault(_printStylesJs);

	var PrintStyle = _react2['default'].createClass({
	  displayName: 'PrintStyle',

	  getInitialState: function getInitialState() {
	    return this._getStylesState();
	  },

	  componentDidMount: function componentDidMount() {
	    this.subscription = _printStylesJs2['default'].subscribe(this._onChange);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this.subscription.remove();
	  },

	  _onChange: function _onChange() {
	    this.setState(this._getStylesState());
	  },

	  _getStylesState: function _getStylesState() {
	    return {
	      styles: _printStylesJs2['default'].getPrintStyles()
	    };
	  },

	  render: function render() {
	    return _react2['default'].createElement(_styleJs2['default'], { rules: {
	        mediaQueries: {
	          print: this.state.styles
	        }
	      } });
	  }
	});

	exports['default'] = PrintStyle;
	module.exports = exports['default'];

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	/* @flow */

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _camelCasePropsToDashCase = __webpack_require__(406);

	var _camelCasePropsToDashCase2 = _interopRequireDefault(_camelCasePropsToDashCase);

	var _createMarkupForStyles = __webpack_require__(407);

	var _createMarkupForStyles2 = _interopRequireDefault(_createMarkupForStyles);

	var _prefixer = __webpack_require__(387);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var buildCssString = function buildCssString(selector /*: string*/, rules /*: Object*/, userAgent /*: ?string*/) /*: string*/ {
	  if (!selector || !rules) {
	    return '';
	  }

	  var prefixedRules = _prefixer.getPrefixedStyle(rules, 'Style', userAgent);
	  var cssPrefixedRules = _camelCasePropsToDashCase2['default'](prefixedRules);
	  var serializedRules = _createMarkupForStyles2['default'](cssPrefixedRules);

	  return selector + '{' + serializedRules + '}';
	};

	var Style = _react2['default'].createClass({
	  displayName: 'Style',

	  propTypes: {
	    rules: _react2['default'].PropTypes.object,
	    scopeSelector: _react2['default'].PropTypes.string
	  },

	  contextTypes: {
	    radiumConfig: _react2['default'].PropTypes.object
	  },

	  getDefaultProps: function getDefaultProps() /*: {scopeSelector: string}*/ {
	    return {
	      prefix: _prefixer.getPrefixedStyle,
	      scopeSelector: ''
	    };
	  },

	  _buildStyles: function _buildStyles(styles /*: Object*/) /*: string*/ {
	    var _this = this;

	    return Object.keys(styles).reduce(function (accumulator, selector) {
	      var rules = styles[selector];

	      if (selector === 'mediaQueries') {
	        accumulator += _this._buildMediaQueryString(rules);
	      } else {
	        var completeSelector = (_this.props.scopeSelector ? _this.props.scopeSelector + ' ' : '') + selector;
	        accumulator += buildCssString(completeSelector, rules, _this.context && _this.context.radiumConfig && _this.context.radiumConfig.userAgent);
	      }

	      return accumulator;
	    }, '');
	  },

	  _buildMediaQueryString: function _buildMediaQueryString(stylesByMediaQuery /*: {[mediaQuery: string]: Object}*/) /*: string*/ {
	    var _this2 = this;

	    var contextMediaQueries = this._getContextMediaQueries();
	    var mediaQueryString = '';

	    Object.keys(stylesByMediaQuery).forEach(function (query) {
	      var completeQuery = contextMediaQueries[query] ? contextMediaQueries[query] : query;
	      mediaQueryString += '@media ' + completeQuery + '{' + _this2._buildStyles(stylesByMediaQuery[query]) + '}';
	    });

	    return mediaQueryString;
	  },

	  _getContextMediaQueries: function _getContextMediaQueries() /*: {[mediaQuery: string]: Object}*/ {
	    var _this3 = this;

	    var contextMediaQueries = {};
	    if (this.context && this.context.mediaQueries) {
	      Object.keys(this.context.mediaQueries).forEach(function (query) {
	        contextMediaQueries[query] = _this3.context.mediaQueries[query].media;
	      });
	    }

	    return contextMediaQueries;
	  },

	  render: function render() /*: ?ReactElement*/ {
	    if (!this.props.rules) {
	      return null;
	    }

	    var styles = this._buildStyles(this.props.rules);

	    return _react2['default'].createElement('style', { dangerouslySetInnerHTML: { __html: styles } });
	  }
	});

	exports['default'] = Style;
	module.exports = exports['default'];

/***/ },

/***/ 406:
/***/ function(module, exports) {

	/* @flow */

	'use strict';

	exports.__esModule = true;
	var _camelCaseRegex = /([a-z])?([A-Z])/g;

	var _camelCaseReplacer = function _camelCaseReplacer(match, p1, p2) {
	  return (p1 || '') + '-' + p2.toLowerCase();
	};

	var _camelCaseToDashCase = function _camelCaseToDashCase(s) {
	  return s.replace(_camelCaseRegex, _camelCaseReplacer);
	};

	var camelCasePropsToDashCase = function camelCasePropsToDashCase(prefixedStyle /*: Object*/) /*: Object*/ {
	  // Since prefix is expected to work on inline style objects, we must
	  // translate the keys to dash case for rendering to CSS.
	  return Object.keys(prefixedStyle).reduce(function (result, key) {
	    var dashCaseKey = _camelCaseToDashCase(key);

	    // Fix IE vendor prefix
	    if (/^ms-/.test(dashCaseKey)) {
	      dashCaseKey = '-' + dashCaseKey;
	    }

	    result[dashCaseKey] = prefixedStyle[key];
	    return result;
	  }, {});
	};

	exports['default'] = camelCasePropsToDashCase;
	module.exports = exports['default'];

/***/ },

/***/ 407:
/***/ function(module, exports) {

	/* @flow */

	'use strict';

	exports.__esModule = true;
	var createMarkupForStyles = function createMarkupForStyles(style /*: Object*/) /*: string*/ {
	  var spaces /*: string*/ = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

	  return Object.keys(style).map(function (property) {
	    return spaces + property + ': ' + style[property] + ';';
	  }).join('\n');
	};

	exports['default'] = createMarkupForStyles;
	module.exports = exports['default'];

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

	/* @flow */

	'use strict';

	exports.__esModule = true;
	exports['default'] = keyframes;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _camelCasePropsToDashCase = __webpack_require__(406);

	var _camelCasePropsToDashCase2 = _interopRequireDefault(_camelCasePropsToDashCase);

	var _createMarkupForStyles = __webpack_require__(407);

	var _createMarkupForStyles2 = _interopRequireDefault(_createMarkupForStyles);

	var _prefixer = __webpack_require__(387);

	var _exenv = __webpack_require__(402);

	var _exenv2 = _interopRequireDefault(_exenv);

	var isAnimationSupported = false;
	var keyframesPrefixed = 'keyframes';

	if (_exenv2['default'].canUseDOM) {
	  (function () {
	    // Animation feature detection and keyframes prefixing from MDN:
	    // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Detecting_CSS_animation_support
	    var domPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
	    var element = (document.createElement('div') /*: any*/);

	    if (element.style.animationName !== undefined) {
	      isAnimationSupported = true;
	    } else {
	      domPrefixes.some(function (prefix) {
	        if (element.style[prefix + 'AnimationName'] !== undefined) {
	          keyframesPrefixed = '-' + prefix.toLowerCase() + '-keyframes';
	          isAnimationSupported = true;
	          return true;
	        }
	        return false;
	      });
	    }
	  })();
	}

	var animationIndex = 1;
	var animationStyleSheet = null;

	if (isAnimationSupported) {
	  animationStyleSheet = (document.createElement('style') /*: any*/);
	  document.head.appendChild(animationStyleSheet);
	}

	// Simple animation helper that injects CSS into a style object containing the
	// keyframes, and returns a string with the generated animation name.

	function keyframes(keyframeRules /*: {[percentage: string]: {[key: string]: string|number}}*/, componentName /*:: ?: string*/) /*: string*/ {
	  var prefix /*: (style: Object, componentName: ?string) => Object*/ = arguments.length <= 2 || arguments[2] === undefined ? _prefixer.getPrefixedStyle : arguments[2];

	  var name = 'Animation' + animationIndex;
	  animationIndex += 1;

	  if (!isAnimationSupported) {
	    return name;
	  }

	  var rule = '@' + keyframesPrefixed + ' ' + name + ' {\n' + Object.keys(keyframeRules).map(function (percentage) {
	    var props = keyframeRules[percentage];
	    var prefixedProps = prefix(props, componentName);
	    var cssPrefixedProps = _camelCasePropsToDashCase2['default'](prefixedProps);
	    var serializedProps = _createMarkupForStyles2['default'](cssPrefixedProps, '  ');
	    return '  ' + percentage + ' {\n  ' + serializedProps + '\n  }';
	  }).join('\n') + '\n}\n';

	  // for flow
	  /* istanbul ignore next */
	  if (!animationStyleSheet) {
	    throw new Error('keyframes not initialized properly');
	  }

	  animationStyleSheet.sheet.insertRule(rule, animationStyleSheet.sheet.cssRules.length);
	  return name;
	}

	module.exports = exports['default'];

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var theme_1 = __webpack_require__(319);

	var FeedPreview = (function (_React$Component) {
	    _inherits(FeedPreview, _React$Component);

	    function FeedPreview() {
	        _classCallCheck(this, FeedPreview);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(FeedPreview).apply(this, arguments));
	    }

	    _createClass(FeedPreview, [{
	        key: 'render',
	        value: function render() {
	            var styles = this.styles;
	            return React.createElement("div", { "style": styles.base }, React.createElement("h2", { "style": styles.title }, this.props.title));
	        }
	    }, {
	        key: 'styles',
	        get: function get() {
	            var image = this.props.image;
	            return {
	                base: {
	                    height: '73px',
	                    display: 'flex',
	                    alignItems: 'center',
	                    padding: '14px',
	                    background: image ? 'url(\'' + image + '\') no-repeat' : theme_1.theme.palette.accent1Color,
	                    backgroundSize: 'cover'
	                },
	                title: Object.assign({}, {
	                    fontWeight: 'bold',
	                    margin: 0,
	                    fontSize: '16px',
	                    color: theme_1.theme.palette.accent2Color
	                }, theme_1.Mixins.ellipsis)
	            };
	        }
	    }]);

	    return FeedPreview;
	})(React.Component);

	exports.FeedPreview = FeedPreview;

/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var react_redux_1 = __webpack_require__(159);
	var TextField = __webpack_require__(411);
	var FlatButton = __webpack_require__(289);
	var auth_1 = __webpack_require__(358);
	var theme_1 = __webpack_require__(319);
	var styles = {
	    base: {
	        textAlign: 'center',
	        display: 'flex',
	        flexDirection: 'column'
	    },
	    title: {
	        color: theme_1.theme.palette.primary1Color,
	        fontWeight: 500
	    }
	};
	var Login = (function (_React$Component) {
	    _inherits(Login, _React$Component);

	    function Login() {
	        var _Object$getPrototypeO;

	        _classCallCheck(this, Login);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Login)).call.apply(_Object$getPrototypeO, [this].concat(args)));

	        _this.state = {
	            login: '',
	            password: ''
	        };
	        _this.onSubmit = function (e) {
	            e.preventDefault();
	            var _this$state = _this.state;
	            var login = _this$state.login;
	            var password = _this$state.password;

	            if (login && password) {
	                _this.props.dispatch(auth_1.signin(login, password));
	            }
	        };
	        _this.onLoginChange = function (e) {
	            var target = e.target;
	            _this.setState({
	                login: target.value
	            });
	        };
	        _this.onPasswordChange = function (e) {
	            var target = e.target;
	            _this.setState({
	                password: target.value
	            });
	        };
	        return _this;
	    }

	    _createClass(Login, [{
	        key: "render",
	        value: function render() {
	            var processing = this.props.app.auth.processing;
	            return React.createElement("div", { "style": styles.base }, React.createElement("h1", { "style": styles.title }, "Авторизация"), processing && this.renderProcessing(), !processing && this.renderForm());
	        }
	    }, {
	        key: "renderProcessing",
	        value: function renderProcessing() {
	            return React.createElement("div", null, "Авторизация...");
	        }
	    }, {
	        key: "renderForm",
	        value: function renderForm() {
	            return React.createElement("form", { "onSubmit": this.onSubmit }, React.createElement("div", null, React.createElement(TextField, { "floatingLabelText": "№ телефона", "type": "tel", "onChange": this.onLoginChange })), React.createElement("div", null, React.createElement(TextField, { "floatingLabelText": "Пароль", "type": "password", "onChange": this.onPasswordChange })), React.createElement(FlatButton, { "label": "Вход", "secondary": true, "type": "submit" }));
	        }
	    }]);

	    return Login;
	})(React.Component);
	Login = __decorate([react_redux_1.connect(function (state) {
	    return state;
	})], Login);
	exports.Login = Login;

/***/ },

/***/ 421:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var JSData = __webpack_require__(422);
	var Adapter_1 = __webpack_require__(423);
	exports.DS = new JSData.DS({
	    //basePath: API_URL,
	    debug: false
	});
	exports.DS.registerAdapter('http', Adapter_1.adapter, {
	    'default': true
	});
	//const lsAdapter = new DSLocalStorageAdapter();
	//DS.registerAdapter('localstorage', lsAdapter, {
	//	'default': true
	//});

/***/ },

/***/ 422:
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * js-data
	 * @version 2.8.2 - Homepage <http://www.js-data.io/>
	 * @author Jason Dobry <jason.dobry@gmail.com>
	 * @copyright (c) 2014-2015 Jason Dobry 
	 * @license MIT <https://github.com/js-data/js-data/blob/master/LICENSE>
	 * 
	 * @overview Robust framework-agnostic data store.
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["JSData"] = factory();
		else
			root["JSData"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		var _datastoreIndex = __webpack_require__(1);

		var _utils = __webpack_require__(2);

		var _errors = __webpack_require__(3);

		/**
		 * The library export.
		 *   - window.JSData
		 *   - require('js-data')
		 *   - define(['js-data', function (JSData) { ... }]);
		 *   - import JSData from 'js-data'
		 */
		module.exports = {
		  DS: _datastoreIndex['default'],
		  DSUtils: _utils['default'],
		  DSErrors: _errors['default'],
		  createStore: function createStore(options) {
		    return new _datastoreIndex['default'](options);
		  },
		  version: {
		    full: '2.8.2',
		    major: parseInt('2', 10),
		    minor: parseInt('8', 10),
		    patch: parseInt('2', 10),
		    alpha:  true ? 'false' : false,
		    beta:  true ? 'false' : false
		  }
		};

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

		/* jshint eqeqeq:false */

		var _utils = __webpack_require__(2);

		var _errors = __webpack_require__(3);

		var _sync_methodsIndex = __webpack_require__(30);

		var _async_methodsIndex = __webpack_require__(36);

		function lifecycleNoopCb(resource, attrs, cb) {
		  cb(null, attrs);
		}

		function lifecycleNoop(resource, attrs) {
		  return attrs;
		}

		function compare(_x, _x2, _x3, _x4) {
		  var _again = true;

		  _function: while (_again) {
		    var orderBy = _x,
		        index = _x2,
		        a = _x3,
		        b = _x4;
		    def = cA = cB = undefined;
		    _again = false;

		    var def = orderBy[index];
		    var cA = _utils['default'].get(a, def[0]);
		    var cB = _utils['default'].get(b, def[0]);
		    if (_utils['default']._s(cA)) {
		      cA = _utils['default'].upperCase(cA);
		    }
		    if (_utils['default']._s(cB)) {
		      cB = _utils['default'].upperCase(cB);
		    }
		    if (def[1] === 'DESC') {
		      if (cB < cA) {
		        return -1;
		      } else if (cB > cA) {
		        return 1;
		      } else {
		        if (index < orderBy.length - 1) {
		          _x = orderBy;
		          _x2 = index + 1;
		          _x3 = a;
		          _x4 = b;
		          _again = true;
		          continue _function;
		        } else {
		          return 0;
		        }
		      }
		    } else {
		      if (cA < cB) {
		        return -1;
		      } else if (cA > cB) {
		        return 1;
		      } else {
		        if (index < orderBy.length - 1) {
		          _x = orderBy;
		          _x2 = index + 1;
		          _x3 = a;
		          _x4 = b;
		          _again = true;
		          continue _function;
		        } else {
		          return 0;
		        }
		      }
		    }
		  }
		}

		var Defaults = (function () {
		  function Defaults() {
		    _classCallCheck(this, Defaults);
		  }

		  _createClass(Defaults, [{
		    key: 'errorFn',
		    value: function errorFn(a, b) {
		      if (this.error && typeof this.error === 'function') {
		        try {
		          if (typeof a === 'string') {
		            throw new Error(a);
		          } else {
		            throw a;
		          }
		        } catch (err) {
		          a = err;
		        }
		        this.error(this.name || null, a || null, b || null);
		      }
		    }
		  }]);

		  return Defaults;
		})();

		var defaultsPrototype = Defaults.prototype;

		defaultsPrototype.actions = {};
		defaultsPrototype.afterCreate = lifecycleNoopCb;
		defaultsPrototype.afterCreateCollection = lifecycleNoop;
		defaultsPrototype.afterCreateInstance = lifecycleNoop;
		defaultsPrototype.afterDestroy = lifecycleNoopCb;
		defaultsPrototype.afterEject = lifecycleNoop;
		defaultsPrototype.afterFind = lifecycleNoopCb;
		defaultsPrototype.afterFindAll = lifecycleNoopCb;
		defaultsPrototype.afterInject = lifecycleNoop;
		defaultsPrototype.afterLoadRelations = lifecycleNoopCb;
		defaultsPrototype.afterReap = lifecycleNoop;
		defaultsPrototype.afterUpdate = lifecycleNoopCb;
		defaultsPrototype.afterValidate = lifecycleNoopCb;
		defaultsPrototype.allowSimpleWhere = true;
		defaultsPrototype.basePath = '';
		defaultsPrototype.beforeCreate = lifecycleNoopCb;
		defaultsPrototype.beforeCreateCollection = lifecycleNoop;
		defaultsPrototype.beforeCreateInstance = lifecycleNoop;
		defaultsPrototype.beforeDestroy = lifecycleNoopCb;
		defaultsPrototype.beforeEject = lifecycleNoop;
		defaultsPrototype.beforeInject = lifecycleNoop;
		defaultsPrototype.beforeReap = lifecycleNoop;
		defaultsPrototype.beforeUpdate = lifecycleNoopCb;
		defaultsPrototype.beforeValidate = lifecycleNoopCb;
		defaultsPrototype.bypassCache = false;
		defaultsPrototype.cacheResponse = !!_utils['default'].w;
		defaultsPrototype.csp = false;
		defaultsPrototype.clearEmptyQueries = true;
		defaultsPrototype.computed = {};
		defaultsPrototype.defaultAdapter = 'http';
		defaultsPrototype.debug = false;
		defaultsPrototype.defaultValues = {};
		defaultsPrototype.eagerEject = false;
		// TODO: Implement eagerInject in DS#create
		defaultsPrototype.eagerInject = false;
		defaultsPrototype.endpoint = '';
		defaultsPrototype.error = console ? function (a, b, c) {
		  return console[typeof console.error === 'function' ? 'error' : 'log'](a, b, c);
		} : false;
		defaultsPrototype.errorHandler = function () {
		  return _utils['default'].Promise.reject(arguments[0]);
		};
		defaultsPrototype.fallbackAdapters = ['http'];
		defaultsPrototype.findStrictCache = false;
		defaultsPrototype.idAttribute = 'id';
		defaultsPrototype.ignoredChanges = [/\$/];
		defaultsPrototype.instanceEvents = !!_utils['default'].w;
		defaultsPrototype.keepChangeHistory = false;
		defaultsPrototype.linkRelations = !!_utils['default'].w;
		defaultsPrototype.log = console ? function (a, b, c, d, e) {
		  return console[typeof console.info === 'function' ? 'info' : 'log'](a, b, c, d, e);
		} : false;

		defaultsPrototype.logFn = function (a, b, c, d) {
		  var _this = this;
		  if (_this.debug && _this.log && typeof _this.log === 'function') {
		    _this.log(_this.name || null, a || null, b || null, c || null, d || null);
		  }
		};

		defaultsPrototype.maxAge = false;
		defaultsPrototype.methods = {};
		defaultsPrototype.notify = !!_utils['default'].w;
		defaultsPrototype.omit = [];
		defaultsPrototype.onConflict = 'merge';
		defaultsPrototype.reapAction = _utils['default'].w ? 'inject' : 'none';
		defaultsPrototype.reapInterval = _utils['default'].w ? 30000 : false;
		defaultsPrototype.relationsEnumerable = false;
		defaultsPrototype.resetHistoryOnInject = true;
		defaultsPrototype.returnMeta = false;
		defaultsPrototype.scopes = {};
		defaultsPrototype.strategy = 'single';
		defaultsPrototype.upsert = !!_utils['default'].w;
		defaultsPrototype.useClass = true;
		defaultsPrototype.useFilter = false;
		defaultsPrototype.validate = lifecycleNoopCb;
		defaultsPrototype.watchChanges = !!_utils['default'].w;

		var escapeRegExp = /([.*+?^=!:${}()|[\]\/\\])/g;
		var percentRegExp = /%/g;
		var underscoreRegExp = /_/g;

		function escape(pattern) {
		  return pattern.replace(escapeRegExp, '\\$1');
		}

		function like(pattern, flags) {
		  return new RegExp('^' + escape(pattern).replace(percentRegExp, '.*').replace(underscoreRegExp, '.') + '$', flags);
		}

		defaultsPrototype.defaultFilter = function (collection, resourceName, params, options) {
		  var filtered = collection;
		  var where = null;
		  var reserved = {
		    skip: '',
		    offset: '',
		    where: '',
		    limit: '',
		    orderBy: '',
		    sort: ''
		  };

		  params = params || {};
		  options = options || {};

		  if (_utils['default']._o(params.where)) {
		    where = params.where;
		  } else {
		    where = {};
		  }

		  if (options.allowSimpleWhere) {
		    _utils['default'].forOwn(params, function (value, key) {
		      if (!(key in reserved) && !(key in where)) {
		        where[key] = {
		          '==': value
		        };
		      }
		    });
		  }

		  if (_utils['default'].isEmpty(where)) {
		    where = null;
		  }

		  if (where) {
		    filtered = _utils['default'].filter(filtered, function (attrs) {
		      var first = true;
		      var keep = true;
		      _utils['default'].forOwn(where, function (clause, field) {
		        if (!_utils['default']._o(clause)) {
		          clause = {
		            '==': clause
		          };
		        }
		        _utils['default'].forOwn(clause, function (term, op) {
		          var expr = undefined;
		          var isOr = op[0] === '|';
		          var val = _utils['default'].get(attrs, field);
		          op = isOr ? op.substr(1) : op;
		          if (op === '==') {
		            expr = val == term; // eslint-disable-line
		          } else if (op === '===') {
		              expr = val === term;
		            } else if (op === '!=') {
		              expr = val != term; // eslint-disable-line
		            } else if (op === '!==') {
		                expr = val !== term;
		              } else if (op === '>') {
		                expr = val > term;
		              } else if (op === '>=') {
		                expr = val >= term;
		              } else if (op === '<') {
		                expr = val < term;
		              } else if (op === '<=') {
		                expr = val <= term;
		              } else if (op === 'isectEmpty') {
		                expr = !_utils['default'].intersection(val || [], term || []).length;
		              } else if (op === 'isectNotEmpty') {
		                expr = _utils['default'].intersection(val || [], term || []).length;
		              } else if (op === 'in') {
		                if (_utils['default']._s(term)) {
		                  expr = term.indexOf(val) !== -1;
		                } else {
		                  expr = _utils['default'].contains(term, val);
		                }
		              } else if (op === 'notIn') {
		                if (_utils['default']._s(term)) {
		                  expr = term.indexOf(val) === -1;
		                } else {
		                  expr = !_utils['default'].contains(term, val);
		                }
		              } else if (op.indexOf('like') === 0) {
		                expr = like(term, op.substr(4)).exec(val) !== null;
		              } else if (op.indexOf('notLike') === 0) {
		                expr = like(term, op.substr(7)).exec(val) === null;
		              } else if (op === 'contains') {
		                if (_utils['default']._s(val)) {
		                  expr = val.indexOf(term) !== -1;
		                } else {
		                  expr = _utils['default'].contains(val, term);
		                }
		              } else if (op === 'notContains') {
		                if (_utils['default']._s(val)) {
		                  expr = val.indexOf(term) === -1;
		                } else {
		                  expr = !_utils['default'].contains(val, term);
		                }
		              }
		          if (expr !== undefined) {
		            keep = first ? expr : isOr ? keep || expr : keep && expr;
		          }
		          first = false;
		        });
		      });
		      return keep;
		    });
		  }

		  var orderBy = null;

		  if (_utils['default']._s(params.orderBy)) {
		    orderBy = [[params.orderBy, 'ASC']];
		  } else if (_utils['default']._a(params.orderBy)) {
		    orderBy = params.orderBy;
		  }

		  if (!orderBy && _utils['default']._s(params.sort)) {
		    orderBy = [[params.sort, 'ASC']];
		  } else if (!orderBy && _utils['default']._a(params.sort)) {
		    orderBy = params.sort;
		  }

		  // Apply 'orderBy'
		  if (orderBy) {
		    (function () {
		      var index = 0;
		      _utils['default'].forEach(orderBy, function (def, i) {
		        if (_utils['default']._s(def)) {
		          orderBy[i] = [def, 'ASC'];
		        } else if (!_utils['default']._a(def)) {
		          throw new _errors['default'].IA('DS.filter("' + resourceName + '"[, params][, options]): ' + _utils['default'].toJson(def) + ': Must be a string or an array!', {
		            params: {
		              'orderBy[i]': {
		                actual: typeof def,
		                expected: 'string|array'
		              }
		            }
		          });
		        }
		      });
		      filtered = _utils['default'].sort(filtered, function (a, b) {
		        return compare(orderBy, index, a, b);
		      });
		    })();
		  }

		  var limit = _utils['default']._n(params.limit) ? params.limit : null;
		  var skip = null;

		  if (_utils['default']._n(params.skip)) {
		    skip = params.skip;
		  } else if (_utils['default']._n(params.offset)) {
		    skip = params.offset;
		  }

		  // Apply 'limit' and 'skip'
		  if (limit && skip) {
		    filtered = _utils['default'].slice(filtered, skip, Math.min(filtered.length, skip + limit));
		  } else if (_utils['default']._n(limit)) {
		    filtered = _utils['default'].slice(filtered, 0, Math.min(filtered.length, limit));
		  } else if (_utils['default']._n(skip)) {
		    if (skip < filtered.length) {
		      filtered = _utils['default'].slice(filtered, skip);
		    } else {
		      filtered = [];
		    }
		  }

		  return filtered === collection ? filtered.slice() : filtered;
		};

		var DS = (function () {
		  function DS(options) {
		    _classCallCheck(this, DS);

		    var _this = this;
		    options = options || {};

		    _this.store = {};
		    _this.definitions = {};
		    _this.adapters = {};
		    _this.defaults = new Defaults();
		    _this.observe = _utils['default'].observe;
		    _utils['default'].forOwn(options, function (v, k) {
		      if (k === 'omit') {
		        _this.defaults.omit = v.concat(Defaults.prototype.omit);
		      } else {
		        _this.defaults[k] = v;
		      }
		    });
		    _this.defaults.logFn('new data store created', _this.defaults);

		    var P = _utils['default'].Promise;

		    if (P && !P.prototype.spread) {
		      P.prototype.spread = function (cb) {
		        return this.then(function (arr) {
		          return cb.apply(this, arr);
		        });
		      };
		    }

		    _utils['default'].Events(_this);
		  }

		  _createClass(DS, [{
		    key: 'getAdapterName',
		    value: function getAdapterName(options) {
		      var errorIfNotExist = false;
		      options = options || {};
		      this.defaults.logFn('getAdapterName', options);
		      if (_utils['default']._s(options)) {
		        errorIfNotExist = true;
		        options = {
		          adapter: options
		        };
		      }
		      if (this.adapters[options.adapter]) {
		        return options.adapter;
		      } else if (errorIfNotExist) {
		        throw new Error(options.adapter + ' is not a registered adapter!');
		      } else {
		        return options.defaultAdapter;
		      }
		    }
		  }, {
		    key: 'getAdapter',
		    value: function getAdapter(options) {
		      options = options || {};
		      this.defaults.logFn('getAdapter', options);
		      return this.adapters[this.getAdapterName(options)];
		    }
		  }, {
		    key: 'registerAdapter',
		    value: function registerAdapter(name, Adapter, options) {
		      var _this = this;
		      options = options || {};
		      _this.defaults.logFn('registerAdapter', name, Adapter, options);
		      if (_utils['default'].isFunction(Adapter)) {
		        _this.adapters[name] = new Adapter(options);
		      } else {
		        _this.adapters[name] = Adapter;
		      }
		      if (options['default']) {
		        _this.defaults.defaultAdapter = name;
		      }
		      _this.defaults.logFn('default adapter is ' + _this.defaults.defaultAdapter);
		    }
		  }, {
		    key: 'is',
		    value: function is(resourceName, instance) {
		      var definition = this.definitions[resourceName];
		      if (!definition) {
		        throw new _errors['default'].NER(resourceName);
		      }
		      return instance instanceof definition[definition['class']];
		    }
		  }, {
		    key: 'clear',
		    value: function clear() {
		      var _this2 = this;

		      var ejected = {};
		      _utils['default'].forOwn(this.definitions, function (definition) {
		        var name = definition.name;
		        ejected[name] = definition.ejectAll();
		        _this2.store[name].completedQueries = {};
		        _this2.store[name].queryData = {};
		      });
		      return ejected;
		    }
		  }, {
		    key: 'errorFn',
		    value: function errorFn() {
		      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		        args[_key] = arguments[_key];
		      }

		      var options = args[args.length - 1];
		      var defaultHandler = this.defaults.errorHandler;
		      var errorHandler = options ? options.errorHandler : defaultHandler;
		      errorHandler = errorHandler || defaultHandler;
		      return function (err) {
		        return errorHandler.apply(undefined, [err].concat(args));
		      };
		    }
		  }]);

		  return DS;
		})();

		var dsPrototype = DS.prototype;

		dsPrototype.getAdapterName.shorthand = false;
		dsPrototype.getAdapter.shorthand = false;
		dsPrototype.registerAdapter.shorthand = false;
		dsPrototype.errors = _errors['default'];
		dsPrototype.utils = _utils['default'];

		function addMethods(target, obj) {
		  _utils['default'].forOwn(obj, function (v, k) {
		    target[k] = v;
		    target[k].before = function (fn) {
		      var orig = target[k];
		      target[k] = function () {
		        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		          args[_key2] = arguments[_key2];
		        }

		        return orig.apply(this, fn.apply(this, args) || args);
		      };
		    };
		  });
		}

		addMethods(dsPrototype, _sync_methodsIndex['default']);
		addMethods(dsPrototype, _async_methodsIndex['default']);

		exports['default'] = DS;

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		/* jshint eqeqeq:false */

		/**
		 * Mix of ES6 and CommonJS module imports because the interop of Babel + Webpack + ES6 modules + CommonJS isn't very good.
		 */

		var _errors = __webpack_require__(3);

		var BinaryHeap = __webpack_require__(4);
		var forEach = __webpack_require__(5);
		var slice = __webpack_require__(6);
		var forOwn = __webpack_require__(7);
		var contains = __webpack_require__(10);
		var deepMixIn = __webpack_require__(12);
		var pascalCase = __webpack_require__(14);
		var remove = __webpack_require__(21);
		var pick = __webpack_require__(22);
		var _keys = __webpack_require__(23);
		var sort = __webpack_require__(24);
		var upperCase = __webpack_require__(19);
		var get = __webpack_require__(25);
		var set = __webpack_require__(27);
		var observe = __webpack_require__(29);
		var w = undefined,
		    P = undefined,
		    File = undefined;
		var objectProto = Object.prototype;
		var toString = objectProto.toString;

		/**
		 * Attempt to detect the global Promise constructor.
		 * JSData will still work without one, as long you do something like this:
		 *
		 * var JSData = require('js-data');
		 * JSData.DSUtils.Promise = MyPromiseLib;
		 */
		try {
		  P = Promise;
		} catch (e) {
		  console.error('js-data requires a global Promise constructor!');
		}

		try {
		  File = window.File;
		} catch (e) {
		  File = function () {};
		}

		function _isArray(value) {
		  return toString.call(value) === '[object Array]' || false;
		}

		var isArray = Array.isArray || _isArray;

		function isRegExp(value) {
		  return toString.call(value) === '[object RegExp]' || false;
		}

		// adapted from lodash.isString
		function isString(value) {
		  return typeof value === 'string' || value && typeof value === 'object' && toString.call(value) === '[object String]' || false;
		}

		function isObject(value) {
		  return toString.call(value) === '[object Object]' || false;
		}

		// adapted from lodash.isDate
		function isDate(value) {
		  return value && typeof value === 'object' && toString.call(value) === '[object Date]' || false;
		}

		// adapted from lodash.isNumber
		function isNumber(value) {
		  var type = typeof value;
		  return type === 'number' || value && type === 'object' && toString.call(value) === '[object Number]' || false;
		}

		// adapted from lodash.isFunction
		function isFunction(value) {
		  return typeof value === 'function' || value && toString.call(value) === '[object Function]' || false;
		}

		// shorthand argument checking functions, using these shaves 1.18 kb off of the minified build
		function isStringOrNumber(value) {
		  return isString(value) || isNumber(value);
		}

		function isStringOrNumberErr(field) {
		  return new _errors['default'].IA('"' + field + '" must be a string or a number!');
		}

		function isObjectErr(field) {
		  return new _errors['default'].IA('"' + field + '" must be an object!');
		}

		function isArrayErr(field) {
		  return new _errors['default'].IA('"' + field + '" must be an array!');
		}

		// adapted from mout.isEmpty
		function isEmpty(val) {
		  if (val == null) {
		    // jshint ignore:line
		    // typeof null == 'object' so we check it first
		    return true;
		  } else if (typeof val === 'string' || isArray(val)) {
		    return !val.length;
		  } else if (typeof val === 'object') {
		    var result = true;
		    forOwn(val, function () {
		      result = false;
		      return false; // break loop
		    });
		    return result;
		  } else {
		    return true;
		  }
		}

		// Find the intersection between two arrays
		function intersection(array1, array2) {
		  if (!array1 || !array2) {
		    return [];
		  }
		  var result = [];
		  var item = undefined;
		  for (var i = 0, _length = array1.length; i < _length; i++) {
		    item = array1[i];
		    if (contains(result, item)) {
		      continue;
		    }
		    if (contains(array2, item)) {
		      result.push(item);
		    }
		  }
		  return result;
		}

		function filter(array, cb, thisObj) {
		  var results = [];
		  forEach(array, function (value, key, arr) {
		    if (cb(value, key, arr)) {
		      results.push(value);
		    }
		  }, thisObj);
		  return results;
		}

		/**
		 * Attempt to detect whether we are in the browser.
		 */
		try {
		  w = window;
		  w = {};
		} catch (e) {
		  w = null;
		}

		/**
		 * Event mixin. Usage:
		 *
		 * function handler() { ... }
		 * Events(myObject);
		 * myObject.on('foo', handler);
		 * myObject.emit('foo', 'some', 'data');
		 * myObject.off('foo', handler);
		 */
		function Events(target) {
		  var events = {};
		  target = target || this;
		  Object.defineProperties(target, {
		    on: {
		      value: function value(type, func, ctx) {
		        events[type] = events[type] || [];
		        events[type].push({
		          f: func,
		          c: ctx
		        });
		      }
		    },
		    off: {
		      value: function value(type, func) {
		        var listeners = events[type];
		        if (!listeners) {
		          events = {};
		        } else if (func) {
		          for (var i = 0; i < listeners.length; i++) {
		            if (listeners[i].f === func) {
		              listeners.splice(i, 1);
		              break;
		            }
		          }
		        } else {
		          listeners.splice(0, listeners.length);
		        }
		      }
		    },
		    emit: {
		      value: function value() {
		        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		          args[_key] = arguments[_key];
		        }

		        var listeners = events[args.shift()] || [];
		        if (listeners) {
		          for (var i = 0; i < listeners.length; i++) {
		            listeners[i].f.apply(listeners[i].c, args);
		          }
		        }
		      }
		    }
		  });
		}

		/**
		 * Lifecycle hooks that should support promises.
		 */
		var toPromisify = ['beforeValidate', 'validate', 'afterValidate', 'beforeCreate', 'afterCreate', 'beforeUpdate', 'afterUpdate', 'beforeDestroy', 'afterDestroy'];

		/**
		 * Return whether "prop" is in the blacklist.
		 */
		var isBlacklisted = observe.isBlacklisted;

		// adapted from angular.copy
		function copy(source, destination, stackSource, stackDest, blacklist) {
		  if (!destination) {
		    destination = source;
		    if (source) {
		      if (isArray(source)) {
		        destination = copy(source, [], stackSource, stackDest, blacklist);
		      } else if (isDate(source)) {
		        destination = new Date(source.getTime());
		      } else if (isRegExp(source)) {
		        destination = new RegExp(source.source, source.toString().match(/[^\/]*$/)[0]);
		        destination.lastIndex = source.lastIndex;
		      } else if (isObject(source)) {
		        destination = copy(source, Object.create(Object.getPrototypeOf(source)), stackSource, stackDest, blacklist);
		      }
		    }
		  } else {
		    if (source === destination) {
		      throw new Error('Cannot copy! Source and destination are identical.');
		    }

		    stackSource = stackSource || [];
		    stackDest = stackDest || [];

		    if (isObject(source)) {
		      var index = stackSource.indexOf(source);
		      if (index !== -1) {
		        return stackDest[index];
		      }

		      stackSource.push(source);
		      stackDest.push(destination);
		    }

		    var result = undefined;
		    if (isArray(source)) {
		      var i = undefined;
		      destination.length = 0;
		      for (i = 0; i < source.length; i++) {
		        result = copy(source[i], null, stackSource, stackDest, blacklist);
		        if (isObject(source[i])) {
		          stackSource.push(source[i]);
		          stackDest.push(result);
		        }
		        destination.push(result);
		      }
		    } else {
		      if (isArray(destination)) {
		        destination.length = 0;
		      } else {
		        forEach(destination, function (value, key) {
		          delete destination[key];
		        });
		      }
		      for (var key in source) {
		        if (source.hasOwnProperty(key)) {
		          if (isBlacklisted(key, blacklist)) {
		            continue;
		          }
		          result = copy(source[key], null, stackSource, stackDest, blacklist);
		          if (isObject(source[key])) {
		            stackSource.push(source[key]);
		            stackDest.push(result);
		          }
		          destination[key] = result;
		        }
		      }
		    }
		  }
		  return destination;
		}

		// adapted from angular.equals
		function equals(_x, _x2) {
		  var _again = true;

		  _function: while (_again) {
		    var o1 = _x,
		        o2 = _x2;
		    t1 = t2 = length = key = keySet = undefined;
		    _again = false;

		    if (o1 === o2) {
		      return true;
		    }
		    if (o1 === null || o2 === null) {
		      return false;
		    }
		    if (o1 !== o1 && o2 !== o2) {
		      // eslint-disable-line
		      return true;
		    } // NaN === NaN
		    var t1 = typeof o1;
		    var t2 = typeof o2;
		    var length, key, keySet;
		    if (t1 == t2) {
		      // eslint-disable-line
		      if (t1 == 'object') {
		        // eslint-disable-line
		        if (isArray(o1)) {
		          if (!isArray(o2)) {
		            return false;
		          }
		          if ((length = o1.length) === o2.length) {
		            // jshint ignore:line
		            for (key = 0; key < length; key++) {
		              if (!equals(o1[key], o2[key])) {
		                return false;
		              }
		            }
		            return true;
		          }
		        } else if (isDate(o1)) {
		          if (!isDate(o2)) {
		            return false;
		          }
		          _x = o1.getTime();
		          _x2 = o2.getTime();
		          _again = true;
		          continue _function;
		        } else if (isRegExp(o1) && isRegExp(o2)) {
		          return o1.toString() == o2.toString(); // eslint-disable-line
		        } else {
		            if (isArray(o2)) {
		              return false;
		            }
		            keySet = {};
		            for (key in o1) {
		              if (key.charAt(0) === '$' || isFunction(o1[key])) {
		                continue;
		              }
		              if (!equals(o1[key], o2[key])) {
		                return false;
		              }
		              keySet[key] = true;
		            }
		            for (key in o2) {
		              if (!keySet.hasOwnProperty(key) && key.charAt(0) !== '$' && o2[key] !== undefined && !isFunction(o2[key])) {
		                return false;
		              }
		            }
		            return true;
		          }
		      }
		    }
		    return false;
		  }
		}

		/**
		 * Given either an instance or the primary key of an instance, return the primary key.
		 */
		function resolveId(definition, idOrInstance) {
		  if (isString(idOrInstance) || isNumber(idOrInstance)) {
		    return idOrInstance;
		  } else if (idOrInstance && definition) {
		    return idOrInstance[definition.idAttribute] || idOrInstance;
		  } else {
		    return idOrInstance;
		  }
		}

		/**
		 * Given either an instance or the primary key of an instance, return the instance.
		 */
		function resolveItem(resource, idOrInstance) {
		  if (resource && (isString(idOrInstance) || isNumber(idOrInstance))) {
		    return resource.index[idOrInstance] || idOrInstance;
		  } else {
		    return idOrInstance;
		  }
		}

		function isValidString(val) {
		  return val != null && val !== ''; // jshint ignore:line
		}

		function join(items, separator) {
		  separator = separator || '';
		  return filter(items, isValidString).join(separator);
		}

		function makePath() {
		  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		    args[_key2] = arguments[_key2];
		  }

		  var result = join(args, '/');
		  return result.replace(/([^:\/]|^)\/{2,}/g, '$1/');
		}

		exports['default'] = {
		  Promise: P,
		  /**
		   * Method to wrap an "options" object so that it will inherit from
		   * some parent object, such as a resource definition.
		   */
		  _: function _(parent, options) {
		    var _this = this;
		    parent = parent || {};
		    options = options || {};
		    if (options && options.constructor === parent.constructor) {
		      return options;
		    } else if (!isObject(options)) {
		      throw new _errors['default'].IA('"options" must be an object!');
		    }
		    forEach(toPromisify, function (name) {
		      if (typeof options[name] === 'function' && options[name].toString().indexOf('for (var _len = arg') === -1) {
		        options[name] = _this.promisify(options[name]);
		      }
		    });
		    // Dynamic constructor function
		    var O = function Options(attrs) {
		      var self = this;
		      forOwn(attrs, function (value, key) {
		        self[key] = value;
		      });
		    };
		    // Inherit from some parent object
		    O.prototype = parent;
		    // Give us a way to get the original options back.
		    O.prototype.orig = function () {
		      var orig = {};
		      forOwn(this, function (value, key) {
		        orig[key] = value;
		      });
		      return orig;
		    };
		    return new O(options);
		  },
		  _n: isNumber,
		  _s: isString,
		  _sn: isStringOrNumber,
		  _snErr: isStringOrNumberErr,
		  _o: isObject,
		  _oErr: isObjectErr,
		  _a: isArray,
		  _aErr: isArrayErr,
		  applyScope: function applyScope(definition, params, options) {
		    var scope = options.scope;
		    var _params = copy(params);
		    if (scope) {
		      if (isString(scope)) {
		        scope = [scope];
		      }
		    } else {
		      scope = [];
		    }
		    scope.unshift('defaultScope');
		    forEach(scope, function (_scope) {
		      var scopeDef = options.scopes[_scope];
		      if (typeof scopeDef === 'function') {
		        deepMixIn(params, scopeDef(definition));
		      } else if (scopeDef) {
		        deepMixIn(params, scopeDef);
		      }
		    });
		    deepMixIn(params, _params);
		  },
		  compute: function compute(fn, field) {
		    var _this = this;
		    var args = [];
		    if (!isObject(fn)) {
		      forEach(fn.deps, function (dep) {
		        args.push(get(_this, dep));
		      });
		      // compute property
		      set(_this, field, fn[fn.length - 1].apply(_this, args));
		    }
		  },
		  contains: contains,
		  copy: copy,
		  deepMixIn: deepMixIn,
		  diffObjectFromOldObject: observe.diffObjectFromOldObject,
		  BinaryHeap: BinaryHeap,
		  equals: equals,
		  Events: Events,
		  filter: filter,
		  fillIn: function fillIn(target, obj) {
		    forOwn(obj, function (v, k) {
		      if (!(k in target)) {
		        target[k] = v;
		      }
		    });
		    return target;
		  },
		  forEach: forEach,
		  forOwn: forOwn,
		  fromJson: function fromJson(json) {
		    return isString(json) ? JSON.parse(json) : json;
		  },
		  get: get,
		  intersection: intersection,
		  isArray: isArray,
		  isBlacklisted: isBlacklisted,
		  isEmpty: isEmpty,
		  isFunction: isFunction,
		  isObject: isObject,
		  isNumber: isNumber,
		  isString: isString,
		  keys: _keys,
		  makePath: makePath,
		  observe: observe,
		  omit: function omit(obj, bl) {
		    var toRemove = [];
		    forOwn(obj, function (v, k) {
		      if (isBlacklisted(k, bl)) {
		        toRemove.push(k);
		      }
		    });
		    forEach(toRemove, function (k) {
		      delete obj[k];
		    });
		    return obj;
		  },
		  pascalCase: pascalCase,
		  pick: pick,
		  // Turn the given node-style callback function into one that can return a promise.
		  promisify: function promisify(fn, target) {
		    var _this = this;
		    if (!fn) {
		      return;
		    } else if (typeof fn !== 'function') {
		      throw new Error('Can only promisify functions!');
		    }
		    return function () {
		      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
		        args[_key3] = arguments[_key3];
		      }

		      return new _this.Promise(function (resolve, reject) {
		        args.push(function (err, result) {
		          if (err) {
		            reject(err);
		          } else {
		            resolve(result);
		          }
		        });

		        try {
		          var promise = fn.apply(target || this, args);
		          if (promise && promise.then) {
		            promise.then(resolve, reject);
		          }
		        } catch (err) {
		          reject(err);
		        }
		      });
		    };
		  },
		  remove: remove,
		  set: set,
		  slice: slice,
		  sort: sort,
		  toJson: JSON.stringify,
		  updateTimestamp: function updateTimestamp(timestamp) {
		    var newTimestamp = typeof Date.now === 'function' ? Date.now() : new Date().getTime();
		    if (timestamp && newTimestamp <= timestamp) {
		      return timestamp + 1;
		    } else {
		      return newTimestamp;
		    }
		  },
		  upperCase: upperCase,
		  // Return a copy of "object" with cycles removed.
		  removeCircular: function removeCircular(object) {
		    return (function rmCirc(value, ctx) {
		      var i = undefined;
		      var nu = undefined;

		      if (typeof value === 'object' && value !== null && !(value instanceof Boolean) && !(value instanceof Date) && !(value instanceof Number) && !(value instanceof RegExp) && !(value instanceof String) && (!File || !(value instanceof File))) {
		        // check if current object points back to itself
		        var cur = ctx.cur;
		        var parent = ctx.ctx;
		        while (parent) {
		          if (parent.cur === cur) {
		            return undefined;
		          }
		          parent = parent.ctx;
		        }

		        if (isArray(value)) {
		          nu = [];
		          for (i = 0; i < value.length; i += 1) {
		            nu[i] = rmCirc(value[i], { ctx: ctx, cur: value[i] });
		          }
		        } else {
		          nu = {};
		          forOwn(value, function (v, k) {
		            nu[k] = rmCirc(value[k], { ctx: ctx, cur: value[k] });
		          });
		        }
		        return nu;
		      }
		      return value;
		    })(object, { ctx: null, cur: object });
		  },
		  resolveItem: resolveItem,
		  resolveId: resolveId,
		  respond: function respond(response, meta, options) {
		    if (options.returnMeta === 'array') {
		      return [response, meta];
		    } else if (options.returnMeta === 'object') {
		      return { response: response, meta: meta };
		    } else {
		      return response;
		    }
		  },
		  w: w,
		  // This is where the magic of relations happens.
		  applyRelationGettersToTarget: function applyRelationGettersToTarget(store, definition, target) {
		    this.forEach(definition.relationList, function (def) {
		      var relationName = def.relation;
		      var localField = def.localField;
		      var localKey = def.localKey;
		      var foreignKey = def.foreignKey;
		      var localKeys = def.localKeys;
		      var foreignKeys = def.foreignKeys;
		      var enumerable = typeof def.enumerable === 'boolean' ? def.enumerable : !!definition.relationsEnumerable;
		      if (typeof def.link === 'boolean' ? def.link : !!definition.linkRelations) {
		        delete target[localField];
		        var prop = {
		          enumerable: enumerable
		        };
		        if (def.type === 'belongsTo') {
		          prop.get = function () {
		            var key = get(this, localKey);
		            var hasKey = !!(key || key === 0);
		            return hasKey ? definition.getResource(relationName).get(key) : undefined;
		          };
		          prop.set = function (parent) {
		            if (parent) {
		              set(this, localKey, get(parent, definition.getResource(relationName).idAttribute));
		            }
		            return get(this, localField);
		          };
		        } else if (def.type === 'hasMany') {
		          prop.get = function () {
		            var params = {};
		            if (foreignKey) {
		              params[foreignKey] = this[definition.idAttribute];
		              return definition.getResource(relationName).defaultFilter.call(store, store.store[relationName].collection, relationName, params, { allowSimpleWhere: true });
		            } else if (localKeys) {
		              var keys = get(this, localKeys) || [];
		              return definition.getResource(relationName).getAll(isArray(keys) ? keys : _keys(keys));
		            } else if (foreignKeys) {
		              set(params, 'where.' + foreignKeys + '.contains', this[definition.idAttribute]);
		              return definition.getResource(relationName).defaultFilter.call(store, store.store[relationName].collection, relationName, params);
		            }
		            return undefined;
		          };
		          prop.set = function (children) {
		            var _this2 = this;

		            if (children && children.length) {
		              (function () {
		                var id = get(_this2, definition.idAttribute);
		                if (foreignKey) {
		                  forEach(children, function (child) {
		                    set(child, foreignKey, id);
		                  });
		                } else if (localKeys) {
		                  (function () {
		                    var keys = [];
		                    forEach(children, function (child) {
		                      keys.push(get(child, definition.getResource(relationName).idAttribute));
		                    });
		                    set(_this2, localKeys, keys);
		                  })();
		                } else if (foreignKeys) {
		                  forEach(children, function (child) {
		                    var keys = get(child, foreignKeys);
		                    if (keys) {
		                      if (!contains(keys, id)) {
		                        keys.push(id);
		                      }
		                    } else {
		                      set(child, foreignKeys, [id]);
		                    }
		                  });
		                }
		              })();
		            }
		            return get(this, localField);
		          };
		        } else if (def.type === 'hasOne') {
		          if (localKey) {
		            prop.get = function () {
		              var key = get(this, localKey);
		              var hasKey = !!(key || key === 0);
		              return hasKey ? definition.getResource(relationName).get(key) : undefined;
		            };
		            prop.set = function (sibling) {
		              if (sibling) {
		                set(this, localKey, get(sibling, definition.getResource(relationName).idAttribute));
		              }
		              return get(this, localField);
		            };
		          } else {
		            prop.get = function () {
		              var params = {};
		              params[foreignKey] = this[definition.idAttribute];
		              var items = params[foreignKey] ? definition.getResource(relationName).defaultFilter.call(store, store.store[relationName].collection, relationName, params, { allowSimpleWhere: true }) : [];
		              if (items.length) {
		                return items[0];
		              }
		              return undefined;
		            };
		            prop.set = function (sibling) {
		              if (sibling) {
		                set(sibling, foreignKey, get(this, definition.idAttribute));
		              }
		              return get(this, localField);
		            };
		          }
		        }
		        if (def.get) {
		          (function () {
		            var orig = prop.get;
		            prop.get = function () {
		              var _this3 = this;

		              return def.get(definition, def, this, function () {
		                for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
		                  args[_key4] = arguments[_key4];
		                }

		                return orig.apply(_this3, args);
		              });
		            };
		          })();
		        }
		        Object.defineProperty(target, localField, prop);
		      }
		    });
		  }
		};

	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

		function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		/**
		 * Thrown during a method call when an argument passed into the method is invalid.
		 */

		var IllegalArgumentError = (function (_Error) {
		  _inherits(IllegalArgumentError, _Error);

		  function IllegalArgumentError(message) {
		    _classCallCheck(this, IllegalArgumentError);

		    _get(Object.getPrototypeOf(IllegalArgumentError.prototype), 'constructor', this).call(this);
		    if (typeof Error.captureStackTrace === 'function') {
		      Error.captureStackTrace(this, this.constructor);
		    }
		    this.type = this.constructor.name;
		    this.message = message;
		  }

		  /**
		   * Thrown when an invariant is violated or unrecoverable error is encountered during execution.
		   */
		  return IllegalArgumentError;
		})(Error);

		var RuntimeError = (function (_Error2) {
		  _inherits(RuntimeError, _Error2);

		  function RuntimeError(message) {
		    _classCallCheck(this, RuntimeError);

		    _get(Object.getPrototypeOf(RuntimeError.prototype), 'constructor', this).call(this);
		    if (typeof Error.captureStackTrace === 'function') {
		      Error.captureStackTrace(this, this.constructor);
		    }
		    this.type = this.constructor.name;
		    this.message = message;
		  }

		  /**
		   * Thrown when attempting to access or work with a non-existent resource.
		   */
		  return RuntimeError;
		})(Error);

		var NonexistentResourceError = (function (_Error3) {
		  _inherits(NonexistentResourceError, _Error3);

		  function NonexistentResourceError(resourceName) {
		    _classCallCheck(this, NonexistentResourceError);

		    _get(Object.getPrototypeOf(NonexistentResourceError.prototype), 'constructor', this).call(this);
		    if (typeof Error.captureStackTrace === 'function') {
		      Error.captureStackTrace(this, this.constructor);
		    }
		    this.type = this.constructor.name;
		    this.message = resourceName + ' is not a registered resource!';
		  }

		  return NonexistentResourceError;
		})(Error);

		exports['default'] = {
		  IllegalArgumentError: IllegalArgumentError,
		  IA: IllegalArgumentError,
		  RuntimeError: RuntimeError,
		  R: RuntimeError,
		  NonexistentResourceError: NonexistentResourceError,
		  NER: NonexistentResourceError
		};

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		/*!
		 * yabh
		 * @version 1.1.0 - Homepage <http://jmdobry.github.io/yabh/>
		 * @author Jason Dobry <jason.dobry@gmail.com>
		 * @copyright (c) 2015 Jason Dobry 
		 * @license MIT <https://github.com/jmdobry/yabh/blob/master/LICENSE>
		 * 
		 * @overview Yet another Binary Heap.
		 */
		(function webpackUniversalModuleDefinition(root, factory) {
			if(true)
				module.exports = factory();
			else if(typeof define === 'function' && define.amd)
				define("yabh", factory);
			else if(typeof exports === 'object')
				exports["BinaryHeap"] = factory();
			else
				root["BinaryHeap"] = factory();
		})(this, function() {
		return /******/ (function(modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/ 	var installedModules = {};

		/******/ 	// The require function
		/******/ 	function __webpack_require__(moduleId) {

		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId])
		/******/ 			return installedModules[moduleId].exports;

		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
		/******/ 			exports: {},
		/******/ 			id: moduleId,
		/******/ 			loaded: false
		/******/ 		};

		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ 		// Flag the module as loaded
		/******/ 		module.loaded = true;

		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}


		/******/ 	// expose the modules object (__webpack_modules__)
		/******/ 	__webpack_require__.m = modules;

		/******/ 	// expose the module cache
		/******/ 	__webpack_require__.c = installedModules;

		/******/ 	// __webpack_public_path__
		/******/ 	__webpack_require__.p = "";

		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(0);
		/******/ })
		/************************************************************************/
		/******/ ([
		/* 0 */
		/***/ function(module, exports, __webpack_require__) {

			/**
			 * @method bubbleUp
			 * @param {array} heap The heap.
			 * @param {function} weightFunc The weight function.
			 * @param {number} n The index of the element to bubble up.
			 */
			function bubbleUp(heap, weightFunc, n) {
			  var element = heap[n];
			  var weight = weightFunc(element);
			  // When at 0, an element can not go up any further.
			  while (n > 0) {
			    // Compute the parent element's index, and fetch it.
			    var parentN = Math.floor((n + 1) / 2) - 1;
			    var _parent = heap[parentN];
			    // If the parent has a lesser weight, things are in order and we
			    // are done.
			    if (weight >= weightFunc(_parent)) {
			      break;
			    } else {
			      heap[parentN] = element;
			      heap[n] = _parent;
			      n = parentN;
			    }
			  }
			}

			/**
			 * @method bubbleDown
			 * @param {array} heap The heap.
			 * @param {function} weightFunc The weight function.
			 * @param {number} n The index of the element to sink down.
			 */
			var bubbleDown = function bubbleDown(heap, weightFunc, n) {
			  var length = heap.length;
			  var node = heap[n];
			  var nodeWeight = weightFunc(node);

			  while (true) {
			    var child2N = (n + 1) * 2,
			        child1N = child2N - 1;
			    var swap = null;
			    if (child1N < length) {
			      var child1 = heap[child1N],
			          child1Weight = weightFunc(child1);
			      // If the score is less than our node's, we need to swap.
			      if (child1Weight < nodeWeight) {
			        swap = child1N;
			      }
			    }
			    // Do the same checks for the other child.
			    if (child2N < length) {
			      var child2 = heap[child2N],
			          child2Weight = weightFunc(child2);
			      if (child2Weight < (swap === null ? nodeWeight : weightFunc(heap[child1N]))) {
			        swap = child2N;
			      }
			    }

			    if (swap === null) {
			      break;
			    } else {
			      heap[n] = heap[swap];
			      heap[swap] = node;
			      n = swap;
			    }
			  }
			};

			function BinaryHeap(weightFunc, compareFunc) {
			  if (!weightFunc) {
			    weightFunc = function (x) {
			      return x;
			    };
			  }
			  if (!compareFunc) {
			    compareFunc = function (x, y) {
			      return x === y;
			    };
			  }
			  if (typeof weightFunc !== 'function') {
			    throw new Error('BinaryHeap([weightFunc][, compareFunc]): "weightFunc" must be a function!');
			  }
			  if (typeof compareFunc !== 'function') {
			    throw new Error('BinaryHeap([weightFunc][, compareFunc]): "compareFunc" must be a function!');
			  }
			  this.weightFunc = weightFunc;
			  this.compareFunc = compareFunc;
			  this.heap = [];
			}

			var BHProto = BinaryHeap.prototype;

			BHProto.push = function (node) {
			  this.heap.push(node);
			  bubbleUp(this.heap, this.weightFunc, this.heap.length - 1);
			};

			BHProto.peek = function () {
			  return this.heap[0];
			};

			BHProto.pop = function () {
			  var front = this.heap[0];
			  var end = this.heap.pop();
			  if (this.heap.length > 0) {
			    this.heap[0] = end;
			    bubbleDown(this.heap, this.weightFunc, 0);
			  }
			  return front;
			};

			BHProto.remove = function (node) {
			  var length = this.heap.length;
			  for (var i = 0; i < length; i++) {
			    if (this.compareFunc(this.heap[i], node)) {
			      var removed = this.heap[i];
			      var end = this.heap.pop();
			      if (i !== length - 1) {
			        this.heap[i] = end;
			        bubbleUp(this.heap, this.weightFunc, i);
			        bubbleDown(this.heap, this.weightFunc, i);
			      }
			      return removed;
			    }
			  }
			  return null;
			};

			BHProto.removeAll = function () {
			  this.heap = [];
			};

			BHProto.size = function () {
			  return this.heap.length;
			};

			module.exports = BinaryHeap;

		/***/ }
		/******/ ])
		});
		;

	/***/ },
	/* 5 */
	/***/ function(module, exports) {

		

		    /**
		     * Array forEach
		     */
		    function forEach(arr, callback, thisObj) {
		        if (arr == null) {
		            return;
		        }
		        var i = -1,
		            len = arr.length;
		        while (++i < len) {
		            // we iterate over sparse items since there is no way to make it
		            // work properly on IE 7-8. see #64
		            if ( callback.call(thisObj, arr[i], i, arr) === false ) {
		                break;
		            }
		        }
		    }

		    module.exports = forEach;




	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		

		    /**
		     * Create slice of source array or array-like object
		     */
		    function slice(arr, start, end){
		        var len = arr.length;

		        if (start == null) {
		            start = 0;
		        } else if (start < 0) {
		            start = Math.max(len + start, 0);
		        } else {
		            start = Math.min(start, len);
		        }

		        if (end == null) {
		            end = len;
		        } else if (end < 0) {
		            end = Math.max(len + end, 0);
		        } else {
		            end = Math.min(end, len);
		        }

		        var result = [];
		        while (start < end) {
		            result.push(arr[start++]);
		        }

		        return result;
		    }

		    module.exports = slice;




	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		var hasOwn = __webpack_require__(8);
		var forIn = __webpack_require__(9);

		    /**
		     * Similar to Array/forEach but works over object properties and fixes Don't
		     * Enum bug on IE.
		     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
		     */
		    function forOwn(obj, fn, thisObj){
		        forIn(obj, function(val, key){
		            if (hasOwn(obj, key)) {
		                return fn.call(thisObj, obj[key], key, obj);
		            }
		        });
		    }

		    module.exports = forOwn;




	/***/ },
	/* 8 */
	/***/ function(module, exports) {

		

		    /**
		     * Safer Object.hasOwnProperty
		     */
		     function hasOwn(obj, prop){
		         return Object.prototype.hasOwnProperty.call(obj, prop);
		     }

		     module.exports = hasOwn;




	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		var hasOwn = __webpack_require__(8);

		    var _hasDontEnumBug,
		        _dontEnums;

		    function checkDontEnum(){
		        _dontEnums = [
		                'toString',
		                'toLocaleString',
		                'valueOf',
		                'hasOwnProperty',
		                'isPrototypeOf',
		                'propertyIsEnumerable',
		                'constructor'
		            ];

		        _hasDontEnumBug = true;

		        for (var key in {'toString': null}) {
		            _hasDontEnumBug = false;
		        }
		    }

		    /**
		     * Similar to Array/forEach but works over object properties and fixes Don't
		     * Enum bug on IE.
		     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
		     */
		    function forIn(obj, fn, thisObj){
		        var key, i = 0;
		        // no need to check if argument is a real object that way we can use
		        // it for arrays, functions, date, etc.

		        //post-pone check till needed
		        if (_hasDontEnumBug == null) checkDontEnum();

		        for (key in obj) {
		            if (exec(fn, obj, key, thisObj) === false) {
		                break;
		            }
		        }


		        if (_hasDontEnumBug) {
		            var ctor = obj.constructor,
		                isProto = !!ctor && obj === ctor.prototype;

		            while (key = _dontEnums[i++]) {
		                // For constructor, if it is a prototype object the constructor
		                // is always non-enumerable unless defined otherwise (and
		                // enumerated above).  For non-prototype objects, it will have
		                // to be defined on this object, since it cannot be defined on
		                // any prototype objects.
		                //
		                // For other [[DontEnum]] properties, check if the value is
		                // different than Object prototype value.
		                if (
		                    (key !== 'constructor' ||
		                        (!isProto && hasOwn(obj, key))) &&
		                    obj[key] !== Object.prototype[key]
		                ) {
		                    if (exec(fn, obj, key, thisObj) === false) {
		                        break;
		                    }
		                }
		            }
		        }
		    }

		    function exec(fn, obj, key, thisObj){
		        return fn.call(thisObj, obj[key], key, obj);
		    }

		    module.exports = forIn;




	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		var indexOf = __webpack_require__(11);

		    /**
		     * If array contains values.
		     */
		    function contains(arr, val) {
		        return indexOf(arr, val) !== -1;
		    }
		    module.exports = contains;



	/***/ },
	/* 11 */
	/***/ function(module, exports) {

		

		    /**
		     * Array.indexOf
		     */
		    function indexOf(arr, item, fromIndex) {
		        fromIndex = fromIndex || 0;
		        if (arr == null) {
		            return -1;
		        }

		        var len = arr.length,
		            i = fromIndex < 0 ? len + fromIndex : fromIndex;
		        while (i < len) {
		            // we iterate over sparse items since there is no way to make it
		            // work properly on IE 7-8. see #64
		            if (arr[i] === item) {
		                return i;
		            }

		            i++;
		        }

		        return -1;
		    }

		    module.exports = indexOf;



	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		var forOwn = __webpack_require__(7);
		var isPlainObject = __webpack_require__(13);

		    /**
		     * Mixes objects into the target object, recursively mixing existing child
		     * objects.
		     */
		    function deepMixIn(target, objects) {
		        var i = 0,
		            n = arguments.length,
		            obj;

		        while(++i < n){
		            obj = arguments[i];
		            if (obj) {
		                forOwn(obj, copyProp, target);
		            }
		        }

		        return target;
		    }

		    function copyProp(val, key) {
		        var existing = this[key];
		        if (isPlainObject(val) && isPlainObject(existing)) {
		            deepMixIn(existing, val);
		        } else {
		            this[key] = val;
		        }
		    }

		    module.exports = deepMixIn;




	/***/ },
	/* 13 */
	/***/ function(module, exports) {

		

		    /**
		     * Checks if the value is created by the `Object` constructor.
		     */
		    function isPlainObject(value) {
		        return (!!value && typeof value === 'object' &&
		            value.constructor === Object);
		    }

		    module.exports = isPlainObject;




	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		var toString = __webpack_require__(15);
		var camelCase = __webpack_require__(16);
		var upperCase = __webpack_require__(19);
		    /**
		     * camelCase + UPPERCASE first char
		     */
		    function pascalCase(str){
		        str = toString(str);
		        return camelCase(str).replace(/^[a-z]/, upperCase);
		    }

		    module.exports = pascalCase;



	/***/ },
	/* 15 */
	/***/ function(module, exports) {

		

		    /**
		     * Typecast a value to a String, using an empty string value for null or
		     * undefined.
		     */
		    function toString(val){
		        return val == null ? '' : val.toString();
		    }

		    module.exports = toString;




	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		var toString = __webpack_require__(15);
		var replaceAccents = __webpack_require__(17);
		var removeNonWord = __webpack_require__(18);
		var upperCase = __webpack_require__(19);
		var lowerCase = __webpack_require__(20);
		    /**
		    * Convert string to camelCase text.
		    */
		    function camelCase(str){
		        str = toString(str);
		        str = replaceAccents(str);
		        str = removeNonWord(str)
		            .replace(/[\-_]/g, ' ') //convert all hyphens and underscores to spaces
		            .replace(/\s[a-z]/g, upperCase) //convert first char of each word to UPPERCASE
		            .replace(/\s+/g, '') //remove spaces
		            .replace(/^[A-Z]/g, lowerCase); //convert first char to lowercase
		        return str;
		    }
		    module.exports = camelCase;



	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		var toString = __webpack_require__(15);
		    /**
		    * Replaces all accented chars with regular ones
		    */
		    function replaceAccents(str){
		        str = toString(str);

		        // verifies if the String has accents and replace them
		        if (str.search(/[\xC0-\xFF]/g) > -1) {
		            str = str
		                    .replace(/[\xC0-\xC5]/g, "A")
		                    .replace(/[\xC6]/g, "AE")
		                    .replace(/[\xC7]/g, "C")
		                    .replace(/[\xC8-\xCB]/g, "E")
		                    .replace(/[\xCC-\xCF]/g, "I")
		                    .replace(/[\xD0]/g, "D")
		                    .replace(/[\xD1]/g, "N")
		                    .replace(/[\xD2-\xD6\xD8]/g, "O")
		                    .replace(/[\xD9-\xDC]/g, "U")
		                    .replace(/[\xDD]/g, "Y")
		                    .replace(/[\xDE]/g, "P")
		                    .replace(/[\xE0-\xE5]/g, "a")
		                    .replace(/[\xE6]/g, "ae")
		                    .replace(/[\xE7]/g, "c")
		                    .replace(/[\xE8-\xEB]/g, "e")
		                    .replace(/[\xEC-\xEF]/g, "i")
		                    .replace(/[\xF1]/g, "n")
		                    .replace(/[\xF2-\xF6\xF8]/g, "o")
		                    .replace(/[\xF9-\xFC]/g, "u")
		                    .replace(/[\xFE]/g, "p")
		                    .replace(/[\xFD\xFF]/g, "y");
		        }
		        return str;
		    }
		    module.exports = replaceAccents;



	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		var toString = __webpack_require__(15);
		    // This pattern is generated by the _build/pattern-removeNonWord.js script
		    var PATTERN = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;

		    /**
		     * Remove non-word chars.
		     */
		    function removeNonWord(str){
		        str = toString(str);
		        return str.replace(PATTERN, '');
		    }

		    module.exports = removeNonWord;



	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		var toString = __webpack_require__(15);
		    /**
		     * "Safer" String.toUpperCase()
		     */
		    function upperCase(str){
		        str = toString(str);
		        return str.toUpperCase();
		    }
		    module.exports = upperCase;



	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		var toString = __webpack_require__(15);
		    /**
		     * "Safer" String.toLowerCase()
		     */
		    function lowerCase(str){
		        str = toString(str);
		        return str.toLowerCase();
		    }

		    module.exports = lowerCase;



	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		var indexOf = __webpack_require__(11);

		    /**
		     * Remove a single item from the array.
		     * (it won't remove duplicates, just a single item)
		     */
		    function remove(arr, item){
		        var idx = indexOf(arr, item);
		        if (idx !== -1) arr.splice(idx, 1);
		    }

		    module.exports = remove;



	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		var slice = __webpack_require__(6);

		    /**
		     * Return a copy of the object, filtered to only have values for the whitelisted keys.
		     */
		    function pick(obj, var_keys){
		        var keys = typeof arguments[1] !== 'string'? arguments[1] : slice(arguments, 1),
		            out = {},
		            i = 0, key;
		        while (key = keys[i++]) {
		            out[key] = obj[key];
		        }
		        return out;
		    }

		    module.exports = pick;




	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		var forOwn = __webpack_require__(7);

		    /**
		     * Get object keys
		     */
		     var keys = Object.keys || function (obj) {
		            var keys = [];
		            forOwn(obj, function(val, key){
		                keys.push(key);
		            });
		            return keys;
		        };

		    module.exports = keys;




	/***/ },
	/* 24 */
	/***/ function(module, exports) {

		

		    /**
		     * Merge sort (http://en.wikipedia.org/wiki/Merge_sort)
		     */
		    function mergeSort(arr, compareFn) {
		        if (arr == null) {
		            return [];
		        } else if (arr.length < 2) {
		            return arr;
		        }

		        if (compareFn == null) {
		            compareFn = defaultCompare;
		        }

		        var mid, left, right;

		        mid   = ~~(arr.length / 2);
		        left  = mergeSort( arr.slice(0, mid), compareFn );
		        right = mergeSort( arr.slice(mid, arr.length), compareFn );

		        return merge(left, right, compareFn);
		    }

		    function defaultCompare(a, b) {
		        return a < b ? -1 : (a > b? 1 : 0);
		    }

		    function merge(left, right, compareFn) {
		        var result = [];

		        while (left.length && right.length) {
		            if (compareFn(left[0], right[0]) <= 0) {
		                // if 0 it should preserve same order (stable)
		                result.push(left.shift());
		            } else {
		                result.push(right.shift());
		            }
		        }

		        if (left.length) {
		            result.push.apply(result, left);
		        }

		        if (right.length) {
		            result.push.apply(result, right);
		        }

		        return result;
		    }

		    module.exports = mergeSort;




	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		var isPrimitive = __webpack_require__(26);

		    /**
		     * get "nested" object property
		     */
		    function get(obj, prop){
		        var parts = prop.split('.'),
		            last = parts.pop();

		        while (prop = parts.shift()) {
		            obj = obj[prop];
		            if (obj == null) return;
		        }

		        return obj[last];
		    }

		    module.exports = get;




	/***/ },
	/* 26 */
	/***/ function(module, exports) {

		

		    /**
		     * Checks if the object is a primitive
		     */
		    function isPrimitive(value) {
		        // Using switch fallthrough because it's simple to read and is
		        // generally fast: http://jsperf.com/testing-value-is-primitive/5
		        switch (typeof value) {
		            case "string":
		            case "number":
		            case "boolean":
		                return true;
		        }

		        return value == null;
		    }

		    module.exports = isPrimitive;




	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		var namespace = __webpack_require__(28);

		    /**
		     * set "nested" object property
		     */
		    function set(obj, prop, val){
		        var parts = (/^(.+)\.(.+)$/).exec(prop);
		        if (parts){
		            namespace(obj, parts[1])[parts[2]] = val;
		        } else {
		            obj[prop] = val;
		        }
		    }

		    module.exports = set;




	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {

		var forEach = __webpack_require__(5);

		    /**
		     * Create nested object if non-existent
		     */
		    function namespace(obj, path){
		        if (!path) return obj;
		        forEach(path.split('.'), function(key){
		            if (!obj[key]) {
		                obj[key] = {};
		            }
		            obj = obj[key];
		        });
		        return obj;
		    }

		    module.exports = namespace;




	/***/ },
	/* 29 */
	/***/ function(module, exports) {

		/*
		 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
		 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
		 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
		 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
		 * Code distributed by Google as part of the polymer project is also
		 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
		 */

		// Modifications
		// Copyright 2014-2015 Jason Dobry
		//
		// Summary of modifications:
		// Fixed use of "delete" keyword for IE8 compatibility
		// Exposed diffObjectFromOldObject on the exported object
		// Added the "equals" argument to diffObjectFromOldObject to be used to check equality
		// Added a way in diffObjectFromOldObject to ignore changes to certain properties
		// Removed all code related to:
		// - ArrayObserver
		// - ArraySplice
		// - PathObserver
		// - CompoundObserver
		// - Path
		// - ObserverTransform

		(function(global) {
		  var testingExposeCycleCount = global.testingExposeCycleCount;

		  // Detect and do basic sanity checking on Object/Array.observe.
		  function detectObjectObserve() {
		    if (typeof Object.observe !== 'function' ||
		        typeof Array.observe !== 'function') {
		      return false;
		    }

		    var records = [];

		    function callback(recs) {
		      records = recs;
		    }

		    var test = {};
		    var arr = [];
		    Object.observe(test, callback);
		    Array.observe(arr, callback);
		    test.id = 1;
		    test.id = 2;
		    delete test.id;
		    arr.push(1, 2);
		    arr.length = 0;

		    Object.deliverChangeRecords(callback);
		    if (records.length !== 5)
		      return false;

		    if (records[0].type != 'add' ||
		        records[1].type != 'update' ||
		        records[2].type != 'delete' ||
		        records[3].type != 'splice' ||
		        records[4].type != 'splice') {
		      return false;
		    }

		    Object.unobserve(test, callback);
		    Array.unobserve(arr, callback);

		    return true;
		  }

		  var hasObserve = detectObjectObserve();

		  var createObject = ('__proto__' in {}) ?
		    function(obj) { return obj; } :
		    function(obj) {
		      var proto = obj.__proto__;
		      if (!proto)
		        return obj;
		      var newObject = Object.create(proto);
		      Object.getOwnPropertyNames(obj).forEach(function(name) {
		        Object.defineProperty(newObject, name,
		                             Object.getOwnPropertyDescriptor(obj, name));
		      });
		      return newObject;
		    };

		  var MAX_DIRTY_CHECK_CYCLES = 1000;

		  function dirtyCheck(observer) {
		    var cycles = 0;
		    while (cycles < MAX_DIRTY_CHECK_CYCLES && observer.check_()) {
		      cycles++;
		    }
		    if (testingExposeCycleCount)
		      global.dirtyCheckCycleCount = cycles;

		    return cycles > 0;
		  }

		  function objectIsEmpty(object) {
		    for (var prop in object)
		      return false;
		    return true;
		  }

		  function diffIsEmpty(diff) {
		    return objectIsEmpty(diff.added) &&
		           objectIsEmpty(diff.removed) &&
		           objectIsEmpty(diff.changed);
		  }

		  function isBlacklisted(prop, bl) {
		    if (!bl || !bl.length) {
		      return false;
		    }
		    var matches;
		    for (var i = 0; i < bl.length; i++) {
		      if ((Object.prototype.toString.call(bl[i]) === '[object RegExp]' && bl[i].test(prop)) || bl[i] === prop) {
		        return matches = prop;
		      }
		    }
		    return !!matches;
		  }

		  function diffObjectFromOldObject(object, oldObject, equals, bl) {
		    var added = {};
		    var removed = {};
		    var changed = {};

		    for (var prop in oldObject) {
		      var newValue = object[prop];

		      if (isBlacklisted(prop, bl))
		        continue;

		      if (newValue !== undefined && (equals ? equals(newValue, oldObject[prop]) : newValue === oldObject[prop]))
		        continue;

		      if (!(prop in object)) {
		        removed[prop] = undefined;
		        continue;
		      }

		      if (equals ? !equals(newValue, oldObject[prop]) : newValue !== oldObject[prop])
		        changed[prop] = newValue;
		    }

		    for (var prop in object) {
		      if (prop in oldObject)
		        continue;

		      if (isBlacklisted(prop, bl))
		        continue;

		      added[prop] = object[prop];
		    }

		    if (Array.isArray(object) && object.length !== oldObject.length)
		      changed.length = object.length;

		    return {
		      added: added,
		      removed: removed,
		      changed: changed
		    };
		  }

		  var eomTasks = [];
		  function runEOMTasks() {
		    if (!eomTasks.length)
		      return false;

		    for (var i = 0; i < eomTasks.length; i++) {
		      eomTasks[i]();
		    }
		    eomTasks.length = 0;
		    return true;
		  }

		  var runEOM = hasObserve ? (function(){
		    return function(fn) {
		      return Promise.resolve().then(fn);
		    }
		  })() :
		  (function() {
		    return function(fn) {
		      eomTasks.push(fn);
		    };
		  })();

		  var observedObjectCache = [];

		  function newObservedObject() {
		    var observer;
		    var object;
		    var discardRecords = false;
		    var first = true;

		    function callback(records) {
		      if (observer && observer.state_ === OPENED && !discardRecords)
		        observer.check_(records);
		    }

		    return {
		      open: function(obs) {
		        if (observer)
		          throw Error('ObservedObject in use');

		        if (!first)
		          Object.deliverChangeRecords(callback);

		        observer = obs;
		        first = false;
		      },
		      observe: function(obj, arrayObserve) {
		        object = obj;
		        if (arrayObserve)
		          Array.observe(object, callback);
		        else
		          Object.observe(object, callback);
		      },
		      deliver: function(discard) {
		        discardRecords = discard;
		        Object.deliverChangeRecords(callback);
		        discardRecords = false;
		      },
		      close: function() {
		        observer = undefined;
		        Object.unobserve(object, callback);
		        observedObjectCache.push(this);
		      }
		    };
		  }

		  function getObservedObject(observer, object, arrayObserve) {
		    var dir = observedObjectCache.pop() || newObservedObject();
		    dir.open(observer);
		    dir.observe(object, arrayObserve);
		    return dir;
		  }

		  var UNOPENED = 0;
		  var OPENED = 1;
		  var CLOSED = 2;

		  var nextObserverId = 1;

		  function Observer() {
		    this.state_ = UNOPENED;
		    this.callback_ = undefined;
		    this.target_ = undefined; // TODO(rafaelw): Should be WeakRef
		    this.directObserver_ = undefined;
		    this.value_ = undefined;
		    this.id_ = nextObserverId++;
		  }

		  Observer.prototype = {
		    open: function(callback, target) {
		      if (this.state_ != UNOPENED)
		        throw Error('Observer has already been opened.');

		      addToAll(this);
		      this.callback_ = callback;
		      this.target_ = target;
		      this.connect_();
		      this.state_ = OPENED;
		      return this.value_;
		    },

		    close: function() {
		      if (this.state_ != OPENED)
		        return;

		      removeFromAll(this);
		      this.disconnect_();
		      this.value_ = undefined;
		      this.callback_ = undefined;
		      this.target_ = undefined;
		      this.state_ = CLOSED;
		    },

		    deliver: function() {
		      if (this.state_ != OPENED)
		        return;

		      dirtyCheck(this);
		    },

		    report_: function(changes) {
		      try {
		        this.callback_.apply(this.target_, changes);
		      } catch (ex) {
		        Observer._errorThrownDuringCallback = true;
		        console.error('Exception caught during observer callback: ' +
		                       (ex.stack || ex));
		      }
		    },

		    discardChanges: function() {
		      this.check_(undefined, true);
		      return this.value_;
		    }
		  }

		  var collectObservers = !hasObserve;
		  var allObservers;
		  Observer._allObserversCount = 0;

		  if (collectObservers) {
		    allObservers = [];
		  }

		  function addToAll(observer) {
		    Observer._allObserversCount++;
		    if (!collectObservers)
		      return;

		    allObservers.push(observer);
		  }

		  function removeFromAll(observer) {
		    Observer._allObserversCount--;
		  }

		  var runningMicrotaskCheckpoint = false;

		  global.Platform = global.Platform || {};

		  global.Platform.performMicrotaskCheckpoint = function() {
		    if (runningMicrotaskCheckpoint)
		      return;

		    if (!collectObservers)
		      return;

		    runningMicrotaskCheckpoint = true;

		    var cycles = 0;
		    var anyChanged, toCheck;

		    do {
		      cycles++;
		      toCheck = allObservers;
		      allObservers = [];
		      anyChanged = false;

		      for (var i = 0; i < toCheck.length; i++) {
		        var observer = toCheck[i];
		        if (observer.state_ != OPENED)
		          continue;

		        if (observer.check_())
		          anyChanged = true;

		        allObservers.push(observer);
		      }
		      if (runEOMTasks())
		        anyChanged = true;
		    } while (cycles < MAX_DIRTY_CHECK_CYCLES && anyChanged);

		    if (testingExposeCycleCount)
		      global.dirtyCheckCycleCount = cycles;

		    runningMicrotaskCheckpoint = false;
		  };

		  if (collectObservers) {
		    global.Platform.clearObservers = function() {
		      allObservers = [];
		    };
		  }

		  function ObjectObserver(object) {
		    Observer.call(this);
		    this.value_ = object;
		    this.oldObject_ = undefined;
		  }

		  ObjectObserver.prototype = createObject({
		    __proto__: Observer.prototype,

		    arrayObserve: false,

		    connect_: function(callback, target) {
		      if (hasObserve) {
		        this.directObserver_ = getObservedObject(this, this.value_,
		                                                 this.arrayObserve);
		      } else {
		        this.oldObject_ = this.copyObject(this.value_);
		      }

		    },

		    copyObject: function(object) {
		      var copy = Array.isArray(object) ? [] : {};
		      for (var prop in object) {
		        copy[prop] = object[prop];
		      };
		      if (Array.isArray(object))
		        copy.length = object.length;
		      return copy;
		    },

		    check_: function(changeRecords, skipChanges) {
		      var diff;
		      var oldValues;
		      if (hasObserve) {
		        if (!changeRecords)
		          return false;

		        oldValues = {};
		        diff = diffObjectFromChangeRecords(this.value_, changeRecords,
		                                           oldValues);
		      } else {
		        oldValues = this.oldObject_;
		        diff = diffObjectFromOldObject(this.value_, this.oldObject_);
		      }

		      if (diffIsEmpty(diff))
		        return false;

		      if (!hasObserve)
		        this.oldObject_ = this.copyObject(this.value_);

		      this.report_([
		        diff.added || {},
		        diff.removed || {},
		        diff.changed || {},
		        function(property) {
		          return oldValues[property];
		        }
		      ]);

		      return true;
		    },

		    disconnect_: function() {
		      if (hasObserve) {
		        this.directObserver_.close();
		        this.directObserver_ = undefined;
		      } else {
		        this.oldObject_ = undefined;
		      }
		    },

		    deliver: function() {
		      if (this.state_ != OPENED)
		        return;

		      if (hasObserve)
		        this.directObserver_.deliver(false);
		      else
		        dirtyCheck(this);
		    },

		    discardChanges: function() {
		      if (this.directObserver_)
		        this.directObserver_.deliver(true);
		      else
		        this.oldObject_ = this.copyObject(this.value_);

		      return this.value_;
		    }
		  });

		  var observerSentinel = {};

		  var expectedRecordTypes = {
		    add: true,
		    update: true,
		    'delete': true
		  };

		  function diffObjectFromChangeRecords(object, changeRecords, oldValues) {
		    var added = {};
		    var removed = {};

		    for (var i = 0; i < changeRecords.length; i++) {
		      var record = changeRecords[i];
		      if (!expectedRecordTypes[record.type]) {
		        console.error('Unknown changeRecord type: ' + record.type);
		        console.error(record);
		        continue;
		      }

		      if (!(record.name in oldValues))
		        oldValues[record.name] = record.oldValue;

		      if (record.type == 'update')
		        continue;

		      if (record.type == 'add') {
		        if (record.name in removed)
		          delete removed[record.name];
		        else
		          added[record.name] = true;

		        continue;
		      }

		      // type = 'delete'
		      if (record.name in added) {
		        delete added[record.name];
		        delete oldValues[record.name];
		      } else {
		        removed[record.name] = true;
		      }
		    }

		    for (var prop in added)
		      added[prop] = object[prop];

		    for (var prop in removed)
		      removed[prop] = undefined;

		    var changed = {};
		    for (var prop in oldValues) {
		      if (prop in added || prop in removed)
		        continue;

		      var newValue = object[prop];
		      if (oldValues[prop] !== newValue)
		        changed[prop] = newValue;
		    }

		    return {
		      added: added,
		      removed: removed,
		      changed: changed
		    };
		  }

		  // Export the observe-js object for **Node.js**, with backwards-compatibility
		  // for the old `require()` API. Also ensure `exports` is not a DOM Element.
		  // If we're in the browser, export as a global object.

		  global.Observer = Observer;
		  global.isBlacklisted = isBlacklisted;
		  global.Observer.runEOM_ = runEOM;
		  global.Observer.observerSentinel_ = observerSentinel; // for testing.
		  global.Observer.hasObjectObserve = hasObserve;
		  global.diffObjectFromOldObject = diffObjectFromOldObject;
		  global.ObjectObserver = ObjectObserver;

		})(exports);


	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {

		var _utils = __webpack_require__(2);

		var _errors = __webpack_require__(3);

		var NER = _errors['default'].NER;
		var IA = _errors['default'].IA;
		var R = _errors['default'].R;

		var fakeId = 'DS_' + new Date().getTime();

		function diffIsEmpty(diff) {
		  return !(_utils['default'].isEmpty(diff.added) && _utils['default'].isEmpty(diff.removed) && _utils['default'].isEmpty(diff.changed));
		}

		function check(fnName, resourceName, id, options) {
		  var _this = this;
		  var definition = _this.definitions[resourceName];
		  options = options || {};

		  id = _utils['default'].resolveId(definition, id);
		  if (!definition) {
		    throw new NER(resourceName);
		  } else if (!_utils['default']._sn(id)) {
		    throw _utils['default']._snErr('id');
		  }
		  id = id === fakeId ? undefined : id;

		  options = _utils['default']._(definition, options);

		  options.logFn(fnName, id, options);

		  return { _this: _this, definition: definition, _resourceName: resourceName, _id: id, _options: options };
		}

		exports['default'] = {
		  // Return the changes for the given item, if any.
		  //
		  // @param resourceName The name of the type of resource of the item whose changes are to be returned.
		  // @param id The primary key of the item whose changes are to be returned.
		  // @param options Optional configuration.
		  // @param options.ignoredChanges Array of strings or regular expressions of fields, the changes of which are to be ignored.
		  // @returns The changes of the given item, if any.
		  changes: function changes(resourceName, id, options) {
		    var _check$call = check.call(this, 'changes', resourceName, id, options);

		    var _this = _check$call._this;
		    var definition = _check$call.definition;
		    var _resourceName = _check$call._resourceName;
		    var _id = _check$call._id;
		    var _options = _check$call._options;

		    var item = definition.get(_id);
		    if (item) {
		      var _ret = (function () {
		        var observer = _this.store[_resourceName].observers[_id];
		        if (observer && typeof observer === 'function') {
		          // force observation handler to be fired for item if there are changes and `Object.observe` is not available
		          observer.deliver();
		        }

		        var ignoredChanges = _options.ignoredChanges || [];
		        // add linked relations to list of ignored changes
		        _utils['default'].forEach(definition.relationFields, function (field) {
		          if (!_utils['default'].contains(ignoredChanges, field)) {
		            ignoredChanges.push(field);
		          }
		        });
		        // calculate changes
		        var diff = _utils['default'].diffObjectFromOldObject(item, _this.store[_resourceName].previousAttributes[_id], _utils['default'].equals, ignoredChanges);
		        // remove functions from diff
		        _utils['default'].forOwn(diff, function (changeset, name) {
		          var toKeep = [];
		          _utils['default'].forOwn(changeset, function (value, field) {
		            if (!_utils['default'].isFunction(value)) {
		              toKeep.push(field);
		            }
		          });
		          diff[name] = _utils['default'].pick(diff[name], toKeep);
		        });
		        // definitely ignore changes to linked relations
		        _utils['default'].forEach(definition.relationFields, function (field) {
		          delete diff.added[field];
		          delete diff.removed[field];
		          delete diff.changed[field];
		        });
		        return {
		          v: diff
		        };
		      })();

		      if (typeof _ret === 'object') return _ret.v;
		    }
		  },

		  // Return the change history of the given item, if any.
		  //
		  // @param resourceName The name of the type of resource of the item whose change history is to be returned.
		  // @param id The primary key of the item whose change history is to be returned.
		  // @returns The change history of the given item, if any.
		  changeHistory: function changeHistory(resourceName, id) {
		    var _check$call2 = check.call(this, 'changeHistory', resourceName, id || fakeId);

		    var _this = _check$call2._this;
		    var definition = _check$call2.definition;
		    var _resourceName = _check$call2._resourceName;
		    var _id = _check$call2._id;

		    var resource = _this.store[_resourceName];

		    if (!definition.keepChangeHistory) {
		      definition.errorFn('changeHistory is disabled for this resource!');
		    } else {
		      if (_resourceName) {
		        var item = definition.get(_id);
		        if (item) {
		          return resource.changeHistories[_id];
		        }
		      } else {
		        return resource.changeHistory;
		      }
		    }
		  },

		  commit: function commit(resourceName, id) {
		    var _check$call3 = check.call(this, 'commit', resourceName, id);

		    var _this = _check$call3._this;
		    var definition = _check$call3.definition;
		    var _resourceName = _check$call3._resourceName;
		    var _id = _check$call3._id;

		    var resource = _this.store[_resourceName];
		    var item = _this.store[_resourceName].index[_id];
		    if (item) {
		      resource.previousAttributes[_id] = _utils['default'].copy(item, null, null, null, definition.relationFields);
		    }

		    if (resource.changeHistories[_id].length) {
		      _utils['default'].forEach(resource.changeHistories[_id], function (changeRecord) {
		        _utils['default'].remove(resource.changeHistory, changeRecord);
		      });
		      resource.changeHistories[_id].splice(0, resource.changeHistories[_id].length);
		    }
		    return item;
		  },

		  // Re-compute the computed properties of the given item.
		  //
		  // @param resourceName The name of the type of resource of the item whose computed properties are to be re-computed.
		  // @param instance The instance whose computed properties are to be re-computed.
		  // @returns The item whose computed properties were re-computed.
		  compute: function compute(resourceName, instance) {
		    var _this = this;
		    var definition = _this.definitions[resourceName];

		    instance = _utils['default'].resolveItem(_this.store[resourceName], instance);
		    if (!definition) {
		      throw new NER(resourceName);
		    } else if (!instance) {
		      throw new R('Item not in the store!');
		    } else if (!_utils['default']._o(instance) && !_utils['default']._sn(instance)) {
		      throw new IA('"instance" must be an object, string or number!');
		    }

		    definition.logFn('compute', instance);

		    // re-compute all computed properties
		    _utils['default'].forOwn(definition.computed, function (fn, field) {
		      _utils['default'].compute.call(instance, fn, field);
		    });
		    return instance;
		  },

		  // Factory function to create an instance of the specified Resource.
		  //
		  // @param resourceName The name of the type of resource of which to create an instance.
		  // @param attrs Hash of properties with which to initialize the instance.
		  // @param options Optional configuration.
		  // @param options.defaults Default values with which to initialize the instance.
		  // @returns The new instance.
		  createInstance: function createInstance(resourceName, attrs, options) {
		    var definition = this.definitions[resourceName];
		    var item = undefined;

		    attrs = attrs || {};

		    if (!definition) {
		      throw new NER(resourceName);
		    } else if (attrs && !_utils['default'].isObject(attrs)) {
		      throw new IA('"attrs" must be an object!');
		    }

		    options = _utils['default']._(definition, options);
		    options.logFn('createInstance', attrs, options);

		    // lifecycle
		    options.beforeCreateInstance(options, attrs);

		    // grab instance constructor function from Resource definition
		    var Constructor = definition[definition['class']];

		    // create instance
		    item = new Constructor();

		    if (definition.instanceEvents) {
		      _utils['default'].Events(item);
		    }

		    // add default values
		    if (options.defaultValues) {
		      _utils['default'].deepMixIn(item, options.defaultValues);
		    }
		    _utils['default'].deepMixIn(item, attrs);

		    // compute computed properties
		    if (definition.computed) {
		      definition.compute(item);
		    }
		    // lifecycle
		    options.afterCreateInstance(options, item);
		    return item;
		  },

		  // Create a new collection of the specified Resource.
		  //
		  // @param resourceName The name of the type of resource of which to create a collection
		  // @param arr Possibly empty array of data from which to create the collection.
		  // @param params The criteria by which to filter items. Will be passed to `DS#findAll` if `fetch` is called. See http://www.js-data.io/docs/query-syntax
		  // @param options Optional configuration.
		  // @param options.notify Whether to call the beforeCreateCollection and afterCreateCollection lifecycle hooks..
		  // @returns The new collection.
		  createCollection: function createCollection(resourceName, arr, params, options) {
		    var _this = this;
		    var definition = _this.definitions[resourceName];

		    arr = arr || [];
		    params = params || {};

		    if (!definition) {
		      throw new NER(resourceName);
		    } else if (arr && !_utils['default'].isArray(arr)) {
		      throw new IA('"arr" must be an array!');
		    }

		    options = _utils['default']._(definition, options);

		    options.logFn('createCollection', arr, options);

		    // lifecycle
		    options.beforeCreateCollection(options, arr);

		    // define the API for this collection
		    Object.defineProperties(arr, {
		      //  Call DS#findAll with the params of this collection, filling the collection with the results.
		      fetch: {
		        value: function value(params, options) {
		          var __this = this;
		          __this.params = params || __this.params;
		          return definition.findAll(__this.params, options).then(function (data) {
		            if (data === __this) {
		              return __this;
		            }
		            data.unshift(__this.length);
		            data.unshift(0);
		            __this.splice.apply(__this, data);
		            data.shift();
		            data.shift();
		            if (data.$$injected) {
		              _this.store[resourceName].queryData[_utils['default'].toJson(__this.params)] = __this;
		              __this.$$injected = true;
		            }
		            return __this;
		          });
		        }
		      },
		      // params for this collection. See http://www.js-data.io/docs/query-syntax
		      params: {
		        value: params,
		        writable: true
		      },
		      // name of the resource type of this collection
		      resourceName: {
		        value: resourceName
		      }
		    });

		    // lifecycle
		    options.afterCreateCollection(options, arr);
		    return arr;
		  },
		  defineResource: __webpack_require__(31),
		  digest: function digest() {
		    this.observe.Platform.performMicrotaskCheckpoint();
		  },
		  eject: __webpack_require__(32),
		  ejectAll: __webpack_require__(33),
		  filter: __webpack_require__(34),

		  // Return the item with the given primary key if its in the store.
		  //
		  // @param resourceName The name of the type of resource of the item to retrieve.
		  // @param id The primary key of the item to retrieve.
		  // @returns The item with the given primary key if it's in the store.
		  // /
		  get: function get(resourceName, id) {
		    var _check$call4 = check.call(this, 'get', resourceName, id);

		    var _this = _check$call4._this;
		    var _resourceName = _check$call4._resourceName;
		    var _id = _check$call4._id;

		    // return the item if it exists
		    return _this.store[_resourceName].index[_id];
		  },

		  // Return the items in the store that have the given primary keys.
		  //
		  // @param resourceName The name of the type of resource of the items to retrieve.
		  // @param ids The primary keys of the items to retrieve.
		  // @returns The items with the given primary keys if they're in the store.
		  getAll: function getAll(resourceName, ids) {
		    var _this = this;
		    var definition = _this.definitions[resourceName];
		    var resource = _this.store[resourceName];
		    var collection = [];

		    if (!definition) {
		      throw new NER(resourceName);
		    } else if (ids && !_utils['default']._a(ids)) {
		      throw _utils['default']._aErr('ids');
		    }

		    definition.logFn('getAll', ids);

		    if (_utils['default']._a(ids)) {
		      // return just the items with the given primary keys
		      var _length = ids.length;
		      for (var i = 0; i < _length; i++) {
		        if (resource.index[ids[i]]) {
		          collection.push(resource.index[ids[i]]);
		        }
		      }
		    } else {
		      // most efficient of retrieving ALL items from the store
		      collection = resource.collection.slice();
		    }

		    return collection;
		  },

		  // Return the whether the item with the given primary key has any changes.
		  //
		  // @param resourceName The name of the type of resource of the item.
		  // @param id The primary key of the item.
		  // @returns Whether the item with the given primary key has any changes.
		  hasChanges: function hasChanges(resourceName, id) {
		    var _check$call5 = check.call(this, 'hasChanges', resourceName, id);

		    var definition = _check$call5.definition;
		    var _id = _check$call5._id;

		    return definition.get(_id) ? diffIsEmpty(definition.changes(_id)) : false;
		  },
		  inject: __webpack_require__(35),

		  // Return the timestamp from the last time the item with the given primary key was changed.
		  //
		  // @param resourceName The name of the type of resource of the item.
		  // @param id The primary key of the item.
		  // @returns Timestamp from the last time the item was changed.
		  lastModified: function lastModified(resourceName, id) {
		    var _check$call6 = check.call(this, 'lastModified', resourceName, id || fakeId);

		    var _this = _check$call6._this;
		    var _resourceName = _check$call6._resourceName;
		    var _id = _check$call6._id;

		    var resource = _this.store[_resourceName];

		    if (_id) {
		      if (!(_id in resource.modified)) {
		        resource.modified[_id] = 0;
		      }
		      return resource.modified[_id];
		    }
		    return resource.collectionModified;
		  },

		  // Return the timestamp from the last time the item with the given primary key was saved via an adapter.
		  //
		  // @param resourceName The name of the type of resource of the item.
		  // @param id The primary key of the item.
		  // @returns Timestamp from the last time the item was saved.
		  lastSaved: function lastSaved(resourceName, id) {
		    var _check$call7 = check.call(this, 'lastSaved', resourceName, id || fakeId);

		    var _this = _check$call7._this;
		    var _resourceName = _check$call7._resourceName;
		    var _id = _check$call7._id;

		    var resource = _this.store[_resourceName];

		    if (!(_id in resource.saved)) {
		      resource.saved[_id] = 0;
		    }
		    return resource.saved[_id];
		  },

		  // Return the previous attributes of the item with the given primary key before it was changed.
		  //
		  // @param resourceName The name of the type of resource of the item.
		  // @param id The primary key of the item.
		  // @returns The previous attributes of the item
		  previous: function previous(resourceName, id) {
		    var _check$call8 = check.call(this, 'previous', resourceName, id);

		    var _this = _check$call8._this;
		    var _resourceName = _check$call8._resourceName;
		    var _id = _check$call8._id;

		    var resource = _this.store[_resourceName];

		    // return resource from cache
		    return resource.previousAttributes[_id] ? _utils['default'].copy(resource.previousAttributes[_id]) : undefined;
		  },

		  // Revert all attributes of the item with the given primary key to their previous values.
		  //
		  // @param resourceName The name of the type of resource of the item.
		  // @param id The primary key of the item.
		  // @param options Optional configuration.
		  // @returns The reverted item
		  revert: function revert(resourceName, id, options) {
		    var _check$call9 = check.call(this, 'revert', resourceName, id, options);

		    var _this = _check$call9._this;
		    var definition = _check$call9.definition;
		    var _resourceName = _check$call9._resourceName;
		    var _id = _check$call9._id;
		    var _options = _check$call9._options;

		    var preserve = _options.preserve || [];
		    var injectObj = {};

		    if (preserve.length === 0) {
		      injectObj = _this.previous(_resourceName, _id);
		    } else {
		      var _ret2 = (function () {
		        var instance = definition.get(id);
		        var previousInstance = _this.previous(_resourceName, _id);

		        if (!instance) {
		          return {
		            v: undefined
		          };
		        }

		        _utils['default'].forOwn(instance, function (value, key) {
		          if (_utils['default'].contains(preserve, key)) {
		            injectObj[key] = instance[key];
		          } else {
		            injectObj[key] = previousInstance[key];
		          }
		        });
		      })();

		      if (typeof _ret2 === 'object') return _ret2.v;
		    }

		    return definition.inject(injectObj, {
		      onConflict: 'replace'
		    });
		  }
		};

	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

		/* jshint evil:true, loopfunc:true */

		var _utils = __webpack_require__(2);

		var _errors = __webpack_require__(3);

		/**
		 * These are DS methods that will be proxied by instances. e.g.
		 *
		 * var store = new JSData.DS()
		 * var User = store.defineResource('user')
		 * var user = User.createInstance({ id: 1 })
		 *
		 * store.update(resourceName, id, attrs[, options]) // DS method
		 * User.update(id, attrs[, options]) // DS method proxied on a Resource
		 * user.DSUpdate(attrs[, options]) // DS method proxied on an Instance
		 */
		var instanceMethods = ['compute', 'eject', 'refresh', 'save', 'update', 'destroy', 'loadRelations', 'changeHistory', 'changes', 'commit', 'hasChanges', 'lastModified', 'lastSaved', 'previous', 'revert'];

		module.exports = function defineResource(definition) {
		  var _this = this;
		  var definitions = _this.definitions;

		  /**
		   * This allows the name-only definition shorthand.
		   * store.defineResource('user') is the same as store.defineResource({ name: 'user'})
		   */
		  if (_utils['default']._s(definition)) {
		    definition = {
		      name: definition.replace(/\s/gi, '')
		    };
		  }
		  if (!_utils['default']._o(definition)) {
		    throw _utils['default']._oErr('definition');
		  } else if (!_utils['default']._s(definition.name)) {
		    throw new _errors['default'].IA('"name" must be a string!');
		  } else if (definitions[definition.name]) {
		    throw new _errors['default'].R(definition.name + ' is already registered!');
		  }

		  /**
		   * Dynamic Resource constructor function.
		   *
		   * A Resource inherits from the defaults of the data store that created it.
		   */
		  function Resource(options) {
		    this.defaultValues = {};
		    this.methods = {};
		    this.computed = {};
		    this.scopes = {};
		    this.actions = {};
		    _utils['default'].deepMixIn(this, options);
		    var parent = _this.defaults;
		    if (definition['extends'] && definitions[definition['extends']]) {
		      parent = definitions[definition['extends']];
		    }
		    _utils['default'].fillIn(this.defaultValues, parent.defaultValues);
		    _utils['default'].fillIn(this.methods, parent.methods);
		    _utils['default'].fillIn(this.computed, parent.computed);
		    _utils['default'].fillIn(this.scopes, parent.scopes);
		    _utils['default'].fillIn(this.actions, parent.actions);
		    this.endpoint = 'endpoint' in options ? options.endpoint : this.name;
		  }

		  try {
		    var def;

		    var _class;

		    var _ret = (function () {
		      // Resources can inherit from another resource instead of inheriting directly from the data store defaults.
		      if (definition['extends'] && definitions[definition['extends']]) {
		        // Inherit from another resource
		        Resource.prototype = definitions[definition['extends']];
		      } else {
		        // Inherit from global defaults
		        Resource.prototype = _this.defaults;
		      }
		      definitions[definition.name] = new Resource(definition);

		      def = definitions[definition.name];

		      def.getResource = function (resourceName) {
		        return _this.definitions[resourceName];
		      };

		      def.logFn('Preparing resource.');

		      if (!_utils['default']._s(def.idAttribute)) {
		        throw new _errors['default'].IA('"idAttribute" must be a string!');
		      }

		      // Setup nested parent configuration
		      if (def.relations) {
		        def.relationList = [];
		        def.relationFields = [];
		        _utils['default'].forOwn(def.relations, function (relatedModels, type) {
		          _utils['default'].forOwn(relatedModels, function (defs, relationName) {
		            if (!_utils['default']._a(defs)) {
		              relatedModels[relationName] = [defs];
		            }
		            _utils['default'].forEach(relatedModels[relationName], function (d) {
		              d.type = type;
		              d.relation = relationName;
		              d.name = def.name;
		              def.relationList.push(d);
		              if (d.localField) {
		                def.relationFields.push(d.localField);
		              }
		            });
		          });
		        });
		        if (def.relations.belongsTo) {
		          _utils['default'].forOwn(def.relations.belongsTo, function (relatedModel, modelName) {
		            _utils['default'].forEach(relatedModel, function (relation) {
		              if (relation.parent) {
		                def.parent = modelName;
		                def.parentKey = relation.localKey;
		                def.parentField = relation.localField;
		              }
		            });
		          });
		        }
		        if (typeof Object.freeze === 'function') {
		          Object.freeze(def.relations);
		          Object.freeze(def.relationList);
		        }
		      }

		      // Create the wrapper class for the new resource
		      _class = def['class'] = _utils['default'].pascalCase(def.name);

		      try {
		        if (typeof def.useClass === 'function') {
		          if (def.csp) {
		            def[_class] = function () {
		              def.useClass.call(this);
		            };
		          } else {
		            def[_class] = new Function('def', 'return function ' + _class + '() { def.useClass.call(this); }')(def); // eslint-disable-line
		          }
		          def[_class].prototype = (function (proto) {
		            function Ctor() {}

		            Ctor.prototype = proto;
		            return new Ctor();
		          })(def.useClass.prototype);
		        } else if (def.csp) {
		          def[_class] = function () {};
		        } else {
		          def[_class] = new Function('return function ' + _class + '() {}')(); // eslint-disable-line
		        }
		      } catch (e) {
		        def[_class] = function () {};
		      }

		      // Apply developer-defined instance methods
		      _utils['default'].forOwn(def.methods, function (fn, m) {
		        def[_class].prototype[m] = fn;
		      });

		      /**
		       * var user = User.createInstance({ id: 1 })
		       * user.set('foo', 'bar')
		       */
		      def[_class].prototype.set = function (key, value) {
		        var _this2 = this;

		        _utils['default'].set(this, key, value);
		        def.compute(this);
		        if (def.instanceEvents) {
		          setTimeout(function () {
		            _this2.emit('DS.change', def, _this2);
		          }, 0);
		        }
		        def.handleChange(this);
		        return this;
		      };

		      /**
		       * var user = User.createInstance({ id: 1 })
		       * user.get('id') // 1
		       */
		      def[_class].prototype.get = function (key) {
		        return _utils['default'].get(this, key);
		      };

		      // Setup the relation links
		      _utils['default'].applyRelationGettersToTarget(_this, def, def[_class].prototype);

		      var parentOmit = null;
		      if (!def.hasOwnProperty('omit')) {
		        parentOmit = def.omit;
		        def.omit = [];
		      } else {
		        parentOmit = _this.defaults.omit;
		      }
		      def.omit = def.omit.concat(parentOmit || []);

		      // Prepare for computed properties
		      _utils['default'].forOwn(def.computed, function (fn, field) {
		        if (_utils['default'].isFunction(fn)) {
		          def.computed[field] = [fn];
		          fn = def.computed[field];
		        }
		        if (def.methods && field in def.methods) {
		          def.errorFn('Computed property "' + field + '" conflicts with previously defined prototype method!');
		        }
		        def.omit.push(field);
		        if (_utils['default'].isArray(fn)) {
		          var deps;
		          if (fn.length === 1) {
		            var match = fn[0].toString().match(/function.*?\(([\s\S]*?)\)/);
		            deps = match[1].split(',');
		            deps = _utils['default'].filter(deps, function (x) {
		              return x;
		            });
		            def.computed[field] = deps.concat(fn);
		            fn = def.computed[field];
		            if (deps.length) {
		              def.errorFn('Use the computed property array syntax for compatibility with minified code!');
		            }
		          }
		          deps = fn.slice(0, fn.length - 1);
		          _utils['default'].forEach(deps, function (val, index) {
		            deps[index] = val.trim();
		          });
		          fn.deps = _utils['default'].filter(deps, function (dep) {
		            return !!dep;
		          });
		        } else if (_utils['default'].isObject(fn)) {
		          Object.defineProperty(def[_class].prototype, field, fn);
		        }
		      });

		      // add instance proxies of DS methods
		      _utils['default'].forEach(instanceMethods, function (name) {
		        def[_class].prototype['DS' + _utils['default'].pascalCase(name)] = function () {
		          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		            args[_key] = arguments[_key];
		          }

		          args.unshift(this[def.idAttribute] || this);
		          args.unshift(def.name);
		          return _this[name].apply(_this, args);
		        };
		      });

		      // manually add instance proxy for DS#create
		      def[_class].prototype.DSCreate = function () {
		        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		          args[_key2] = arguments[_key2];
		        }

		        args.unshift(this);
		        args.unshift(def.name);
		        return _this.create.apply(_this, args);
		      };

		      // Initialize store data for the new resource
		      _this.store[def.name] = {
		        collection: [],
		        expiresHeap: new _utils['default'].BinaryHeap(function (x) {
		          return x.expires;
		        }, function (x, y) {
		          return x.item === y;
		        }),
		        completedQueries: {},
		        queryData: {},
		        pendingQueries: {},
		        index: {},
		        modified: {},
		        saved: {},
		        previousAttributes: {},
		        observers: {},
		        changeHistories: {},
		        changeHistory: [],
		        collectionModified: 0
		      };

		      var resource = _this.store[def.name];

		      // start the reaping
		      if (def.reapInterval) {
		        setInterval(function () {
		          return def.reap();
		        }, def.reapInterval);
		      }

		      // proxy DS methods with shorthand ones
		      var fns = ['registerAdapter', 'getAdapterName', 'getAdapter', 'is', '!clear'];
		      for (var key in _this) {
		        if (typeof _this[key] === 'function') {
		          fns.push(key);
		        }
		      }

		      /**
		       * Create the Resource shorthands that proxy DS methods. e.g.
		       *
		       * var store = new JSData.DS()
		       * var User = store.defineResource('user')
		       *
		       * store.update(resourceName, id, attrs[, options]) // DS method
		       * User.update(id, attrs[, options]) // DS method proxied on a Resource
		       */
		      _utils['default'].forEach(fns, function (key) {
		        var k = key;
		        if (k[0] === '!') {
		          return;
		        }
		        if (_this[k].shorthand !== false) {
		          def[k] = function () {
		            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
		              args[_key3] = arguments[_key3];
		            }

		            args.unshift(def.name);
		            return _this[k].apply(_this, args);
		          };
		          def[k].before = function (fn) {
		            var orig = def[k];
		            def[k] = function () {
		              for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
		                args[_key4] = arguments[_key4];
		              }

		              return orig.apply(def, fn.apply(def, args) || args);
		            };
		          };
		        } else {
		          def[k] = function () {
		            for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
		              args[_key5] = arguments[_key5];
		            }

		            return _this[k].apply(_this, args);
		          };
		        }
		      });

		      def.beforeValidate = _utils['default'].promisify(def.beforeValidate);
		      def.validate = _utils['default'].promisify(def.validate);
		      def.afterValidate = _utils['default'].promisify(def.afterValidate);
		      def.beforeCreate = _utils['default'].promisify(def.beforeCreate);
		      def.afterCreate = _utils['default'].promisify(def.afterCreate);
		      def.afterFind = _utils['default'].promisify(def.afterFind);
		      def.afterFindAll = _utils['default'].promisify(def.afterFindAll);
		      def.afterLoadRelations = _utils['default'].promisify(def.afterLoadRelations);
		      def.beforeUpdate = _utils['default'].promisify(def.beforeUpdate);
		      def.afterUpdate = _utils['default'].promisify(def.afterUpdate);
		      def.beforeDestroy = _utils['default'].promisify(def.beforeDestroy);
		      def.afterDestroy = _utils['default'].promisify(def.afterDestroy);

		      var defaultAdapter = undefined;
		      if (def.hasOwnProperty('defaultAdapter')) {
		        defaultAdapter = def.defaultAdapter;
		      }

		      // setup "actions"
		      _utils['default'].forOwn(def.actions, function (action, name) {
		        if (def[name] && !def.actions[name]) {
		          throw new Error('Cannot override existing method "' + name + '"!');
		        }
		        action.request = action.request || function (config) {
		          return config;
		        };
		        action.response = action.response || function (response) {
		          return response;
		        };
		        action.responseError = action.responseError || function (err) {
		          return _utils['default'].Promise.reject(err);
		        };
		        def[name] = function (id, options) {
		          if (_utils['default']._o(id)) {
		            options = id;
		          }
		          options = options || {};
		          var adapter = def.getAdapter(action.adapter || defaultAdapter || 'http');
		          var config = _utils['default'].deepMixIn({}, action);
		          if (!options.hasOwnProperty('endpoint') && config.endpoint) {
		            options.endpoint = config.endpoint;
		          }
		          if (typeof options.getEndpoint === 'function') {
		            config.url = options.getEndpoint(def, options);
		          } else {
		            var args = [options.basePath || def.basePath || adapter.defaults.basePath, adapter.getEndpoint(def, _utils['default']._sn(id) ? id : null, options)];
		            if (_utils['default']._sn(id)) {
		              args.push(id);
		            }
		            args.push(action.pathname || name);
		            config.url = _utils['default'].makePath.apply(null, args);
		          }
		          config.method = config.method || 'GET';
		          config.resourceName = def.name;
		          _utils['default'].deepMixIn(config, options);
		          return new _utils['default'].Promise(function (resolve) {
		            return resolve(config);
		          }).then(options.request || action.request).then(function (config) {
		            return adapter.HTTP(config);
		          }).then(function (data) {
		            if (data && data.config) {
		              data.config.resourceName = def.name;
		            }
		            return data;
		          }).then(options.response || action.response, options.responseError || action.responseError);
		        };
		      });

		      // mix in events
		      _utils['default'].Events(def);

		      def.handleChange = function (data) {
		        resource.collectionModified = _utils['default'].updateTimestamp(resource.collectionModified);
		        if (def.notify) {
		          setTimeout(function () {
		            def.emit('DS.change', def, data);
		          }, 0);
		        }
		      };

		      def.logFn('Done preparing resource.');

		      return {
		        v: def
		      };
		    })();

		    if (typeof _ret === 'object') return _ret.v;
		  } catch (err) {
		    _this.defaults.errorFn(err);
		    delete definitions[definition.name];
		    delete _this.store[definition.name];
		    throw err;
		  }
		};

	/***/ },
	/* 32 */
	/***/ function(module, exports) {

		/* jshint eqeqeq:false */
		/**
		 * Eject an item from the store, if it is currently in the store.
		 *
		 * @param resourceName The name of the resource type of the item eject.
		 * @param id The primary key of the item to eject.
		 * @param options Optional configuration.
		 * @param options.notify Whether to emit the "DS.beforeEject" and "DS.afterEject" events
		 * @param options.clearEmptyQueries Whether to remove cached findAll queries that become empty as a result of this method call.
		 * @returns The ejected item if one was ejected.
		 */
		module.exports = function eject(resourceName, id, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.definitions[resourceName];
		  var resource = _this.store[resourceName];
		  var item = undefined;
		  var found = false;

		  id = DSUtils.resolveId(definition, id);

		  if (!definition) {
		    throw new _this.errors.NER(resourceName);
		  } else if (!DSUtils._sn(id)) {
		    throw DSUtils._snErr('id');
		  }

		  options = DSUtils._(definition, options);

		  options.logFn('eject', id, options);

		  // find the item to eject
		  for (var i = 0; i < resource.collection.length; i++) {
		    if (resource.collection[i][definition.idAttribute] == id) {
		      // eslint-disable-line
		      item = resource.collection[i];
		      // remove its expiration timestamp
		      resource.expiresHeap.remove(item);
		      found = true;
		      break;
		    }
		  }
		  if (found) {
		    var _ret = (function () {
		      // lifecycle
		      definition.beforeEject(options, item);
		      if (options.notify) {
		        definition.emit('DS.beforeEject', definition, item);
		      }

		      // find the item in any ($$injected) cached queries
		      var toRemove = [];
		      DSUtils.forOwn(resource.queryData, function (items, queryHash) {
		        if (items.$$injected) {
		          DSUtils.remove(items, item);
		        }
		        // optionally remove any empty queries
		        if (!items.length && options.clearEmptyQueries) {
		          toRemove.push(queryHash);
		        }
		      });

		      // clean up
		      DSUtils.forEach(resource.changeHistories[id], function (changeRecord) {
		        DSUtils.remove(resource.changeHistory, changeRecord);
		      });
		      DSUtils.forEach(toRemove, function (queryHash) {
		        delete resource.completedQueries[queryHash];
		        delete resource.queryData[queryHash];
		      });
		      if (resource.observers[id] && typeof resource.observers[id].close === 'function') {
		        // stop observation
		        resource.observers[id].close();
		      }
		      delete resource.observers[id];
		      delete resource.index[id];
		      delete resource.previousAttributes[id];
		      delete resource.completedQueries[id];
		      delete resource.pendingQueries[id];
		      delete resource.changeHistories[id];
		      delete resource.modified[id];
		      delete resource.saved[id];
		      if (definition.instanceEvents && item.off) {
		        item.off();
		      }

		      // remove it from the store
		      resource.collection.splice(i, 1);
		      // collection has been modified
		      definition.handleChange(item);

		      // lifecycle
		      definition.afterEject(options, item);
		      if (options.notify) {
		        definition.emit('DS.afterEject', definition, item);
		      }

		      return {
		        v: item
		      };
		    })();

		    if (typeof _ret === 'object') return _ret.v;
		  }
		};

	/***/ },
	/* 33 */
	/***/ function(module, exports) {

		/**
		 * Eject a collection of items from the store, if any items currently in the store match the given criteria.
		 *
		 * @param resourceName The name of the resource type of the items eject.
		 * @param params The criteria by which to match items to eject. See http://www.js-data.io/docs/query-syntax
		 * @param options Optional configuration.
		 * @returns The collection of items that were ejected, if any.
		 */
		module.exports = function ejectAll(resourceName, params, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.definitions[resourceName];
		  params = params || {};

		  if (!definition) {
		    throw new _this.errors.NER(resourceName);
		  } else if (!DSUtils._o(params)) {
		    throw DSUtils._oErr('params');
		  }

		  options = DSUtils._(definition, options);
		  definition.logFn('ejectAll', params, options);

		  DSUtils.applyScope(definition, params, options);

		  var resource = _this.store[resourceName];
		  var queryHash = DSUtils.toJson(params);

		  // get items that match the criteria
		  var items = definition.filter(params);

		  if (DSUtils.isEmpty(params)) {
		    // remove all completed queries if ejecting all items
		    resource.completedQueries = {};
		  } else {
		    // remove matching completed query, if any
		    delete resource.completedQueries[queryHash];
		  }
		  // prepare to remove matching items
		  DSUtils.forEach(items, function (item) {
		    if (item && item[definition.idAttribute]) {
		      definition.eject(item[definition.idAttribute], options);
		    }
		  });
		  // collection has been modified
		  definition.handleChange(items);
		  return items;
		};

	/***/ },
	/* 34 */
	/***/ function(module, exports) {

		/**
		 * Return the subset of items currently in the store that match the given criteria.
		 *
		 * The actual filtering is delegated to DS#defaults.defaultFilter, which can be overridden by developers.
		 *
		 * @param resourceName The name of the resource type of the items to filter.
		 * @param params The criteria by which to filter items. See http://www.js-data.io/docs/query-syntax
		 * @param options Optional configuration.
		 * @returns Matching items.
		 */
		module.exports = function filter(resourceName, params, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.definitions[resourceName];

		  if (!definition) {
		    throw new _this.errors.NER(resourceName);
		  } else if (params && !DSUtils._o(params)) {
		    throw DSUtils._oErr('params');
		  }

		  // Protect against null
		  params = params || {};
		  options = DSUtils._(definition, options);
		  options.logFn('filter', params, options);

		  DSUtils.applyScope(definition, params, options);

		  // delegate filtering to DS#defaults.defaultFilter, which can be overridden by developers.
		  return definition.defaultFilter.call(_this, _this.store[resourceName].collection, resourceName, params, options);
		};

	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {

		var _utils = __webpack_require__(2);

		var _errors = __webpack_require__(3);

		/**
		 * This is a beast of a file, but it's where a significant portion of the magic happens.
		 *
		 * DS#inject makes up the core of how data gets into the store.
		 */

		/**
		 * This factory function produces an observer handler function tailor-made for the current item being injected.
		 *
		 * The observer handler is what allows computed properties and change tracking to function.
		 *
		 * @param definition Resource definition produced by DS#defineResource
		 * @param resource Resource data as internally stored by the data store
		 * @returns {Function} Observer handler function
		 * @private
		 */
		function makeObserverHandler(definition, resource) {
		  var DS = this;

		  // using "var" avoids a JSHint error
		  var name = definition.name;

		  /**
		   * This will be called by observe-js when a new change record is available for the observed object
		   *
		   * @param added Change record for added properties
		   * @param removed Change record for removed properties
		   * @param changed Change record for changed properties
		   * @param oldValueFn Function that can be used to get the previous value of a changed property
		   * @param firstTime Whether this is the first time this function is being called for the given item. Will only be true once.
		   */
		  return function _react(added, removed, changed, oldValueFn, firstTime) {
		    var target = this;
		    var item = undefined;

		    // Get the previous primary key of the observed item, in-case some knucklehead changed it
		    var innerId = oldValueFn && oldValueFn(definition.idAttribute) ? oldValueFn(definition.idAttribute) : target[definition.idAttribute];

		    // Ignore changes to relation links
		    _utils['default'].forEach(definition.relationFields, function (field) {
		      delete added[field];
		      delete removed[field];
		      delete changed[field];
		    });

		    // Detect whether there are actually any changes
		    if (!_utils['default'].isEmpty(added) || !_utils['default'].isEmpty(removed) || !_utils['default'].isEmpty(changed) || firstTime) {
		      item = DS.get(name, innerId);

		      // update item and collection "modified" timestamps
		      resource.modified[innerId] = _utils['default'].updateTimestamp(resource.modified[innerId]);

		      if (item && definition.instanceEvents) {
		        setTimeout(function () {
		          item.emit('DS.change', definition, item);
		        }, 0);
		      }

		      definition.handleChange(item);

		      // Save a change record for the item
		      if (definition.keepChangeHistory) {
		        var changeRecord = {
		          resourceName: name,
		          target: item,
		          added: added,
		          removed: removed,
		          changed: changed,
		          timestamp: resource.modified[innerId]
		        };
		        resource.changeHistories[innerId].push(changeRecord);
		        resource.changeHistory.push(changeRecord);
		      }
		    }

		    // Recompute computed properties if any computed properties depend on changed properties
		    if (definition.computed) {
		      item = item || DS.get(name, innerId);
		      _utils['default'].forOwn(definition.computed, function (fn, field) {
		        if (_utils['default']._o(fn)) {
		          return;
		        }
		        var compute = false;
		        // check if required fields changed
		        _utils['default'].forEach(fn.deps, function (dep) {
		          if (dep in added || dep in removed || dep in changed || !(field in item)) {
		            compute = true;
		          }
		        });
		        compute = compute || !fn.deps.length;
		        if (compute) {
		          _utils['default'].compute.call(item, fn, field);
		        }
		      });
		    }

		    if (definition.idAttribute in changed) {
		      definition.errorFn('Doh! You just changed the primary key of an object! Your data for the "' + name + '" resource is now in an undefined (probably broken) state.');
		    }
		  };
		}

		/**
		 * A recursive function for injecting data into the store.
		 *
		 * @param definition Resource definition produced by DS#defineResource
		 * @param resource Resource data as internally stored by the data store
		 * @param attrs The data to be injected. Will be an object or an array of objects.
		 * @param options Optional configuration.
		 * @returns The injected data
		 * @private
		 */
		function _inject(definition, resource, attrs, options) {
		  var _this = this;
		  var injected = undefined;

		  if (_utils['default']._a(attrs)) {
		    // have an array of objects, go ahead and inject each one individually and return the resulting array
		    injected = [];
		    for (var i = 0; i < attrs.length; i++) {
		      injected.push(_inject.call(_this, definition, resource, attrs[i], options));
		    }
		  } else {
		    // check if "idAttribute" is a computed property
		    var c = definition.computed;
		    var idA = definition.idAttribute;
		    // compute the primary key if necessary
		    if (c && c[idA]) {
		      (function () {
		        var args = [];
		        _utils['default'].forEach(c[idA].deps, function (dep) {
		          args.push(attrs[dep]);
		        });
		        attrs[idA] = c[idA][c[idA].length - 1].apply(attrs, args);
		      })();
		    }

		    if (!(idA in attrs)) {
		      var error = new _errors['default'].R(definition.name + '.inject: "attrs" must contain the property specified by "idAttribute"!');
		      options.errorFn(error);
		      throw error;
		    } else {
		      try {
		        (function () {
		          // when injecting object that contain their nested relations, this code
		          // will recursively inject them into their proper places in the data store.
		          // Magic!
		          _utils['default'].forEach(definition.relationList, function (def) {
		            var relationName = def.relation;
		            var relationDef = _this.definitions[relationName];
		            var toInject = attrs[def.localField];
		            if (typeof def.inject === 'function') {
		              def.inject(definition, def, attrs);
		            } else if (toInject && def.inject !== false) {
		              if (!relationDef) {
		                throw new _errors['default'].R(definition.name + ' relation is defined but the resource is not!');
		              }
		              // handle injecting hasMany relations
		              if (_utils['default']._a(toInject)) {
		                (function () {
		                  var items = [];
		                  _utils['default'].forEach(toInject, function (toInjectItem) {
		                    if (toInjectItem !== _this.store[relationName].index[toInjectItem[relationDef.idAttribute]]) {
		                      try {
		                        var injectedItem = relationDef.inject(toInjectItem, options.orig());
		                        if (def.foreignKey) {
		                          _utils['default'].set(injectedItem, def.foreignKey, attrs[definition.idAttribute]);
		                        }
		                        items.push(injectedItem);
		                      } catch (err) {
		                        options.errorFn(err, 'Failed to inject ' + def.type + ' relation: "' + relationName + '"!');
		                      }
		                    }
		                  });
		                })();
		              } else {
		                // handle injecting belongsTo and hasOne relations
		                if (toInject !== _this.store[relationName].index[toInject[relationDef.idAttribute]]) {
		                  try {
		                    var _injected = relationDef.inject(attrs[def.localField], options.orig());
		                    if (def.foreignKey) {
		                      _utils['default'].set(_injected, def.foreignKey, attrs[definition.idAttribute]);
		                    }
		                  } catch (err) {
		                    options.errorFn(err, 'Failed to inject ' + def.type + ' relation: "' + relationName + '"!');
		                  }
		                }
		              }
		            }
		          });

		          // primary key of item being injected
		          var id = attrs[idA];
		          // item being injected
		          var item = definition.get(id);
		          // 0 if the item is new, otherwise the previous last modified timestamp of the item
		          var initialLastModified = item ? resource.modified[id] : 0;

		          // item is new
		          if (!item) {
		            if (attrs instanceof definition[definition['class']]) {
		              item = attrs;
		            } else {
		              item = new definition[definition['class']]();
		            }

		            if (definition.instanceEvents && typeof item.emit !== 'function') {
		              _utils['default'].Events(item);
		            }
		            // remove relation properties from the item, since those relations have been injected by now
		            _utils['default'].forEach(definition.relationList, function (def) {
		              if (typeof def.link === 'boolean' ? def.link : !!definition.linkRelations) {
		                delete attrs[def.localField];
		              }
		            });

		            // copy remaining properties to the injected item
		            _utils['default'].deepMixIn(item, attrs);

		            // add item to collection
		            resource.collection.push(item);
		            resource.changeHistories[id] = [];

		            // create the observer handler for the data to be injected
		            var _react = makeObserverHandler.call(_this, definition, resource);

		            // If we're in the browser, start observation
		            if (definition.watchChanges) {
		              resource.observers[id] = new _this.observe.ObjectObserver(item);
		              resource.observers[id].open(_react, item);
		            }

		            // index item
		            resource.index[id] = item;
		            // fire observation handler for the first time
		            _react.call(item, {}, {}, {}, null, true);
		            // save "previous" attributes of the injected item, for change diffs later
		            resource.previousAttributes[id] = _utils['default'].copy(item, null, null, null, definition.relationFields);
		          } else {
		            // item is being re-injected
		            // new properties take precedence
		            if (options.onConflict === 'merge') {
		              _utils['default'].deepMixIn(item, attrs);
		            } else if (options.onConflict === 'replace') {
		              _utils['default'].forOwn(item, function (v, k) {
		                if (k !== definition.idAttribute) {
		                  if (!attrs.hasOwnProperty(k)) {
		                    delete item[k];
		                  }
		                }
		              });
		              _utils['default'].forOwn(attrs, function (v, k) {
		                if (k !== definition.idAttribute) {
		                  item[k] = v;
		                }
		              });
		            }

		            if (definition.resetHistoryOnInject) {
		              // clear change history for item
		              _this.commit(definition.name, id);
		            }
		            if (resource.observers[id] && typeof resource.observers[id] === 'function') {
		              // force observation callback to be fired if there are any changes to the item and `Object.observe` is not available
		              resource.observers[id].deliver();
		            }
		          }
		          // update modified timestamp of item
		          resource.modified[id] = initialLastModified && resource.modified[id] === initialLastModified ? _utils['default'].updateTimestamp(resource.modified[id]) : resource.modified[id];

		          // reset expiry tracking for item
		          resource.expiresHeap.remove(item);
		          var timestamp = new Date().getTime();
		          resource.expiresHeap.push({
		            item: item,
		            timestamp: timestamp,
		            expires: definition.maxAge ? timestamp + definition.maxAge : Number.MAX_VALUE
		          });

		          // final injected item
		          injected = item;
		        })();
		      } catch (err) {
		        options.errorFn(err, attrs);
		      }
		    }
		  }
		  return injected;
		}

		/**
		 * Inject the given object or array of objects into the data store.
		 *
		 * @param resourceName The name of the type of resource of the data to be injected.
		 * @param attrs Object or array of objects. Objects must contain a primary key.
		 * @param options Optional configuration.
		 * @param options.notify Whether to emit the "DS.beforeInject" and "DS.afterInject" events.
		 * @returns The injected data.
		 */
		module.exports = function inject(resourceName, attrs, options) {
		  var _this = this;
		  var definition = _this.definitions[resourceName];
		  var resource = _this.store[resourceName];
		  var injected = undefined;

		  if (!definition) {
		    throw new _errors['default'].NER(resourceName);
		  } else if (!_utils['default']._o(attrs) && !_utils['default']._a(attrs)) {
		    throw new _errors['default'].IA(resourceName + '.inject: "attrs" must be an object or an array!');
		  }

		  options = _utils['default']._(definition, options);
		  options.logFn('inject', attrs, options);

		  // lifecycle
		  options.beforeInject(options, attrs);
		  if (options.notify) {
		    definition.emit('DS.beforeInject', definition, attrs);
		  }

		  // start the recursive injection of data
		  injected = _inject.call(_this, definition, resource, attrs, options);

		  // collection was modified
		  definition.handleChange(injected);

		  // lifecycle
		  options.afterInject(options, injected);
		  if (options.notify) {
		    definition.emit('DS.afterInject', definition, injected);
		  }

		  return injected;
		};

	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {

		exports['default'] = {
		  create: __webpack_require__(37),
		  destroy: __webpack_require__(38),
		  destroyAll: __webpack_require__(39),
		  find: __webpack_require__(40),
		  findAll: __webpack_require__(41),
		  loadRelations: __webpack_require__(42),
		  reap: __webpack_require__(43),
		  refresh: function refresh(resourceName, id, options) {
		    var _this = this;
		    var DSUtils = _this.utils;

		    return new DSUtils.Promise(function (resolve, reject) {
		      var definition = _this.definitions[resourceName];
		      id = DSUtils.resolveId(_this.definitions[resourceName], id);
		      if (!definition) {
		        reject(new _this.errors.NER(resourceName));
		      } else if (!DSUtils._sn(id)) {
		        reject(DSUtils._snErr('id'));
		      } else {
		        options = DSUtils._(definition, options);
		        options.bypassCache = true;
		        options.logFn('refresh', id, options);
		        resolve(_this.get(resourceName, id));
		      }
		    }).then(function (item) {
		      return item ? _this.find(resourceName, id, options) : item;
		    })['catch'](_this.errorFn('refresh', resourceName, id, options));
		  },
		  refreshAll: function refreshAll(resourceName, params, options) {
		    var _this = this;
		    var DSUtils = _this.utils;
		    var definition = _this.definitions[resourceName];
		    params = params || {};

		    return new DSUtils.Promise(function (resolve, reject) {
		      if (!definition) {
		        reject(new _this.errors.NER(resourceName));
		      } else if (!DSUtils._o(params)) {
		        reject(DSUtils._oErr('params'));
		      } else {
		        options = DSUtils._(definition, options);
		        options.bypassCache = true;
		        options.logFn('refreshAll', params, options);
		        resolve(_this.filter(resourceName, params, options));
		      }
		    }).then(function (existing) {
		      options.bypassCache = true;
		      return _this.findAll(resourceName, params, options).then(function (found) {
		        DSUtils.forEach(existing, function (item) {
		          if (found.indexOf(item) === -1) {
		            definition.eject(item);
		          }
		        });
		        return found;
		      });
		    })['catch'](_this.errorFn('refreshAll', resourceName, params, options));
		  },
		  save: __webpack_require__(44),
		  update: __webpack_require__(45),
		  updateAll: __webpack_require__(46)
		};

	/***/ },
	/* 37 */
	/***/ function(module, exports) {

		/**
		 * Using an adapter, create a new item.
		 *
		 * Generally a primary key will NOT be provided in the properties hash,
		 * because the adapter's persistence layer should be generating one.
		 *
		 * @param resourceName The name of the type of resource of the new item.
		 * @param attrs Hash of properties with which to create the new item.
		 * @param options Optional configuration.
		 * @param options.cacheResponse Whether the newly created item as returned by the adapter should be injected into the data store.
		 * @param options.upsert If the properties hash contains a primary key, attempt to call DS#update instead.
		 * @param options.notify Whether to emit the "DS.beforeCreate" and "DS.afterCreate" events.
		 * @param options.beforeValidate Lifecycle hook.
		 * @param options.validate Lifecycle hook.
		 * @param options.afterValidate Lifecycle hook.
		 * @param options.beforeCreate Lifecycle hook.
		 * @param options.afterCreate Lifecycle hook.
		 */
		module.exports = function create(resourceName, attrs, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.definitions[resourceName];
		  var adapter = undefined;

		  options = options || {};
		  attrs = attrs || {};

		  var rejectionError = undefined;
		  if (!definition) {
		    rejectionError = new _this.errors.NER(resourceName);
		  } else if (!DSUtils._o(attrs)) {
		    rejectionError = DSUtils._oErr('attrs');
		  } else {
		    options = DSUtils._(definition, options);
		    if (options.upsert && DSUtils._sn(attrs[definition.idAttribute])) {
		      return _this.update(resourceName, attrs[definition.idAttribute], attrs, options);
		    }
		    options.logFn('create', attrs, options);
		  }

		  return new DSUtils.Promise(function (resolve, reject) {
		    if (rejectionError) {
		      reject(rejectionError);
		    } else {
		      resolve(attrs);
		    }
		  })
		  // start lifecycle
		  .then(function (attrs) {
		    return options.beforeValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.validate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.afterValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.beforeCreate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.beforeCreate', definition, attrs);
		    }
		    adapter = _this.getAdapterName(options);
		    return _this.adapters[adapter].create(definition, DSUtils.omit(attrs, options.omit), options);
		  }).then(function (attrs) {
		    return options.afterCreate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.afterCreate', definition, attrs);
		    }
		    if (options.cacheResponse) {
		      // injected created intem into the store
		      var created = _this.inject(definition.name, attrs, options.orig());
		      var id = created[definition.idAttribute];
		      // mark item's `find` query as completed, so a subsequent `find` call for this item will resolve immediately
		      var resource = _this.store[resourceName];
		      resource.completedQueries[id] = new Date().getTime();
		      resource.saved[id] = DSUtils.updateTimestamp(resource.saved[id]);
		      return created;
		    } else {
		      // just return an un-injected instance
		      return _this.createInstance(resourceName, attrs, options);
		    }
		  }).then(function (item) {
		    return DSUtils.respond(item, { adapter: adapter }, options);
		  })['catch'](_this.errorFn('create', resourceName, attrs, options));
		};

	/***/ },
	/* 38 */
	/***/ function(module, exports) {

		/**
		 * Using an adapter, destroy an item.
		 *
		 * @param resourceName The name of the type of resource of the item to destroy.
		 * @param id The primary key of the item to destroy.
		 * @param options Optional configuration.
		 * @param options.eagerEject Whether to eject the item from the store before the adapter operation completes, re-injecting if the adapter operation fails.
		 * @param options.notify Whether to emit the "DS.beforeDestroy" and "DS.afterDestroy" events.
		 * @param options.beforeDestroy Lifecycle hook.
		 * @param options.afterDestroy Lifecycle hook.
		 * @returns The primary key of the destroyed item.
		 */
		module.exports = function destroy(resourceName, id, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.definitions[resourceName];
		  var item = undefined,
		      adapter = undefined;

		  return new DSUtils.Promise(function (resolve, reject) {
		    id = DSUtils.resolveId(definition, id);
		    if (!definition) {
		      reject(new _this.errors.NER(resourceName));
		    } else if (!DSUtils._sn(id)) {
		      reject(DSUtils._snErr('id'));
		    } else {
		      // check if the item is in the store
		      item = definition.get(id) || { id: id };
		      options = DSUtils._(definition, options);
		      options.logFn('destroy', id, options);
		      resolve(item);
		    }
		  })
		  // start lifecycle
		  .then(function (attrs) {
		    return options.beforeDestroy.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.beforeDestroy', definition, attrs);
		    }
		    // don't wait for the adapter, remove the item from the store
		    if (options.eagerEject) {
		      definition.eject(id);
		    }
		    adapter = definition.getAdapter(options);
		    return adapter.destroy(definition, id, options);
		  }).then(function () {
		    return options.afterDestroy.call(item, options, item);
		  }).then(function (item) {
		    if (options.notify) {
		      definition.emit('DS.afterDestroy', definition, item);
		    }
		    // make sure the item is removed from the store
		    definition.eject(id);
		    return DSUtils.respond(id, { adapter: adapter }, options);
		  })['catch'](function (err) {
		    // rollback by re-injecting the item into the store
		    if (options && options.eagerEject && item) {
		      definition.inject(item, { notify: false });
		    }
		    return _this.errorFn('destroy', resourceName, id, options)(err);
		  });
		};

	/***/ },
	/* 39 */
	/***/ function(module, exports) {

		/**
		 * Using an adapter, destroy an item.
		 *
		 * @param resourceName The name of the type of resource of the item to destroy.
		 * @param params The criteria by which to filter items to destroy. See http://www.js-data.io/docs/query-syntax
		 * @param options Optional configuration.
		 * @param options.eagerEject Whether to eject the items from the store before the adapter operation completes, re-injecting if the adapter operation fails.
		 * @param options.notify Whether to emit the "DS.beforeDestroy" and "DS.afterDestroy" events.
		 * @param options.beforeDestroy Lifecycle hook.
		 * @param options.afterDestroy Lifecycle hook.
		 * @returns The ejected items, if any.
		 */
		module.exports = function destroyAll(resourceName, params, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.definitions[resourceName];
		  var ejected = undefined,
		      toEject = undefined,
		      adapter = undefined;

		  params = params || {};

		  return new DSUtils.Promise(function (resolve, reject) {
		    if (!definition) {
		      reject(new _this.errors.NER(resourceName));
		    } else if (!DSUtils._o(params)) {
		      reject(DSUtils._oErr('attrs'));
		    } else {
		      options = DSUtils._(definition, options);
		      options.logFn('destroyAll', params, options);
		      DSUtils.applyScope(definition, params, options);
		      resolve();
		    }
		  }).then(function () {
		    // find items that are to be ejected from the store
		    toEject = definition.defaultFilter.call(_this, resourceName, params);
		    return options.beforeDestroy(options, toEject);
		  }).then(function () {
		    if (options.notify) {
		      definition.emit('DS.beforeDestroy', definition, toEject);
		    }
		    // don't wait for the adapter, remove the items from the store
		    if (options.eagerEject) {
		      ejected = definition.ejectAll(params);
		    }
		    adapter = definition.getAdapterName(options);
		    return _this.adapters[adapter].destroyAll(definition, params, options);
		  }).then(function () {
		    return options.afterDestroy(options, toEject);
		  }).then(function () {
		    if (options.notify) {
		      definition.emit('DS.afterDestroy', definition, toEject);
		    }
		    // make sure items are removed from the store
		    return ejected || definition.ejectAll(params);
		  }).then(function (items) {
		    return DSUtils.respond(items, { adapter: adapter }, options);
		  })['catch'](function (err) {
		    // rollback by re-injecting the items into the store
		    if (options && options.eagerEject && ejected) {
		      definition.inject(ejected, { notify: false });
		    }
		    return _this.errorFn('destroyAll', resourceName, params, options)(err);
		  });
		};

	/***/ },
	/* 40 */
	/***/ function(module, exports) {

		/* jshint -W082 */

		/**
		 * Using an adapter, retrieve a single item.
		 *
		 * @param resourceName The of the type of resource of the item to retrieve.
		 * @param id The primary key of the item to retrieve.
		 * @param options Optional configuration.
		 * @param options.bypassCache Whether to ignore any cached item and force the retrieval through the adapter.
		 * @param options.cacheResponse Whether to inject the found item into the data store.
		 * @param options.strictCache Whether to only consider items to be "cached" if they were injected into the store as the result of `find` or `findAll`.
		 * @param options.strategy The retrieval strategy to use.
		 * @param options.findStrategy The retrieval strategy to use. Overrides "strategy".
		 * @param options.fallbackAdapters Array of names of adapters to use if using "fallback" strategy.
		 * @param options.findFallbackAdapters Array of names of adapters to use if using "fallback" strategy. Overrides "fallbackAdapters".
		 * @returns The item.
		 */
		module.exports = function find(resourceName, id, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.definitions[resourceName];
		  var resource = _this.store[resourceName];
		  var adapter = undefined;

		  return new DSUtils.Promise(function (resolve, reject) {
		    if (!definition) {
		      reject(new _this.errors.NER(resourceName));
		    } else if (!DSUtils._sn(id)) {
		      reject(DSUtils._snErr('id'));
		    } else {
		      options = DSUtils._(definition, options);
		      options.logFn('find', id, options);

		      if (options.params) {
		        options.params = DSUtils.copy(options.params);
		      }

		      if (options.bypassCache || !options.cacheResponse) {
		        delete resource.completedQueries[id];
		      }

		      var expired = options.maxAge && id in resource.completedQueries && resource.completedQueries[id] + options.maxAge < new Date().getTime();

		      if ((!options.findStrictCache || id in resource.completedQueries) && definition.get(id) && !options.bypassCache && !expired) {
		        // resolve immediately with the cached item
		        resolve(definition.get(id));
		      } else {
		        // we're going to delegate to the adapter next
		        delete resource.completedQueries[id];
		        resolve();
		      }
		    }
		  }).then(function (item) {
		    if (!item) {
		      if (!(id in resource.pendingQueries)) {
		        var promise = undefined;
		        var strategy = options.findStrategy || options.strategy;

		        // try subsequent adapters if the preceeding one fails
		        if (strategy === 'fallback') {
		          var makeFallbackCall = function makeFallbackCall(index) {
		            adapter = definition.getAdapterName((options.findFallbackAdapters || options.fallbackAdapters)[index]);
		            return _this.adapters[adapter].find(definition, id, options)['catch'](function (err) {
		              index++;
		              if (index < options.fallbackAdapters.length) {
		                return makeFallbackCall(index);
		              } else {
		                return DSUtils.Promise.reject(err);
		              }
		            });
		          };

		          promise = makeFallbackCall(0);
		        } else {
		          adapter = definition.getAdapterName(options);
		          // just make a single attempt
		          promise = _this.adapters[adapter].find(definition, id, options);
		        }

		        resource.pendingQueries[id] = promise.then(function (data) {
		          return options.afterFind.call(data, options, data);
		        }).then(function (data) {
		          // Query is no longer pending
		          delete resource.pendingQueries[id];
		          if (options.cacheResponse) {
		            // inject the item into the data store
		            var injected = definition.inject(data, options.orig());
		            // mark the item as "cached"
		            resource.completedQueries[id] = new Date().getTime();
		            resource.saved[id] = DSUtils.updateTimestamp(resource.saved[id]);
		            return injected;
		          } else {
		            // just return an un-injected instance
		            return definition.createInstance(data, options.orig());
		          }
		        });
		      }
		      return resource.pendingQueries[id];
		    } else {
		      // resolve immediately with the item
		      return item;
		    }
		  }).then(function (item) {
		    return DSUtils.respond(item, { adapter: adapter }, options);
		  })['catch'](function (err) {
		    if (resource) {
		      delete resource.pendingQueries[id];
		    }
		    return _this.errorFn('find', resourceName, id, options)(err);
		  });
		};

	/***/ },
	/* 41 */
	/***/ function(module, exports) {

		/* jshint -W082 */
		function processResults(data, resourceName, queryHash, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.definitions[resourceName];
		  var resource = _this.store[resourceName];
		  var idAttribute = _this.definitions[resourceName].idAttribute;
		  var date = new Date().getTime();

		  data = data || [];

		  // Query is no longer pending
		  delete resource.pendingQueries[queryHash];
		  resource.completedQueries[queryHash] = date;

		  // Merge the new values into the cache
		  var injected = definition.inject(data, options.orig());

		  // Make sure each object is added to completedQueries
		  if (DSUtils._a(injected)) {
		    DSUtils.forEach(injected, function (item) {
		      if (item) {
		        var id = item[idAttribute];
		        if (id) {
		          resource.completedQueries[id] = date;
		          resource.saved[id] = DSUtils.updateTimestamp(resource.saved[id]);
		        }
		      }
		    });
		  } else {
		    options.errorFn('response is expected to be an array!');
		    resource.completedQueries[injected[idAttribute]] = date;
		  }

		  return injected;
		}

		/**
		 * Using an adapter, retrieve a collection of items.
		 *
		 * @param resourceName The name of the type of resource of the items to retrieve.
		 * @param params The criteria by which to filter items to retrieve. See http://www.js-data.io/docs/query-syntax
		 * @param options Optional configuration.
		 * @param options.bypassCache Whether to ignore any cached query for these items and force the retrieval through the adapter.
		 * @param options.cacheResponse Whether to inject the found items into the data store.
		 * @returns The items.
		 */
		module.exports = function findAll(resourceName, params, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.definitions[resourceName];
		  var resource = _this.store[resourceName];
		  var queryHash = undefined,
		      adapter = undefined;

		  return new DSUtils.Promise(function (resolve, reject) {
		    params = params || {};

		    if (!_this.definitions[resourceName]) {
		      reject(new _this.errors.NER(resourceName));
		    } else if (!DSUtils._o(params)) {
		      reject(DSUtils._oErr('params'));
		    } else {
		      options = DSUtils._(definition, options);
		      queryHash = DSUtils.toJson(params);
		      options.logFn('findAll', params, options);

		      if (options.params) {
		        options.params = DSUtils.copy(options.params);
		      }

		      DSUtils.applyScope(definition, params, options);

		      // force a new request
		      if (options.bypassCache || !options.cacheResponse) {
		        delete resource.completedQueries[queryHash];
		        delete resource.queryData[queryHash];
		      }

		      var expired = options.maxAge && queryHash in resource.completedQueries && resource.completedQueries[queryHash] + options.maxAge < new Date().getTime();

		      if (queryHash in resource.completedQueries && !expired) {
		        if (options.useFilter) {
		          if (options.localKeys) {
		            resolve(definition.getAll(options.localKeys, options.orig()));
		          } else {
		            // resolve immediately by filtering data from the data store
		            resolve(definition.filter(params, options.orig()));
		          }
		        } else {
		          // resolve immediately by returning the cached array from the previously made query
		          resolve(resource.queryData[queryHash]);
		        }
		      } else {
		        resolve();
		      }
		    }
		  }).then(function (items) {
		    if (!items) {
		      if (!(queryHash in resource.pendingQueries)) {
		        var promise = undefined;
		        var strategy = options.findAllStrategy || options.strategy;

		        // try subsequent adapters if the preceeding one fails
		        if (strategy === 'fallback') {
		          var makeFallbackCall = function makeFallbackCall(index) {
		            adapter = definition.getAdapterName((options.findAllFallbackAdapters || options.fallbackAdapters)[index]);
		            return _this.adapters[adapter].findAll(definition, params, options)['catch'](function (err) {
		              index++;
		              if (index < options.fallbackAdapters.length) {
		                return makeFallbackCall(index);
		              } else {
		                return DSUtils.Promise.reject(err);
		              }
		            });
		          };

		          promise = makeFallbackCall(0);
		        } else {
		          adapter = definition.getAdapterName(options);
		          // just make a single attempt
		          promise = _this.adapters[adapter].findAll(definition, params, options);
		        }

		        resource.pendingQueries[queryHash] = promise.then(function (data) {
		          return options.afterFindAll.call(data, options, data);
		        }).then(function (data) {
		          // Query is no longer pending
		          delete resource.pendingQueries[queryHash];
		          if (options.cacheResponse) {
		            // inject the items into the data store
		            resource.queryData[queryHash] = processResults.call(_this, data, resourceName, queryHash, options);
		            resource.queryData[queryHash].$$injected = true;
		            return resource.queryData[queryHash];
		          } else {
		            DSUtils.forEach(data, function (item, i) {
		              data[i] = definition.createInstance(item, options.orig());
		            });
		            return data;
		          }
		        });
		      }

		      return resource.pendingQueries[queryHash];
		    } else {
		      // resolve immediately with the items
		      return items;
		    }
		  }).then(function (items) {
		    return DSUtils.respond(items, { adapter: adapter }, options);
		  })['catch'](function (err) {
		    if (resource) {
		      delete resource.pendingQueries[queryHash];
		    }
		    return _this.errorFn('findAll', resourceName, params, options)(err);
		  });
		};

	/***/ },
	/* 42 */
	/***/ function(module, exports) {

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		/**
		 * Load the specified relations for the given instance.
		 *
		 * @param resourceName The name of the type of resource of the instance for which to load relations.
		 * @param instance The instance or the primary key of the instance.
		 * @param relations An array of the relations to load.
		 * @param options Optional configuration.
		 * @returns The instance, now with its relations loaded.
		 */
		module.exports = function loadRelations(resourceName, instance, relations, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var DSErrors = _this.errors;

		  var definition = _this.definitions[resourceName];
		  var _options = undefined;

		  return new DSUtils.Promise(function (resolve, reject) {
		    if (DSUtils._sn(instance)) {
		      instance = definition.get(instance);
		    }

		    if (DSUtils._s(relations)) {
		      relations = [relations];
		    }

		    relations = relations || [];

		    if (!definition) {
		      reject(new DSErrors.NER(resourceName));
		    } else if (!DSUtils._o(instance)) {
		      reject(new DSErrors.IA('"instance(id)" must be a string, number or object!'));
		    } else if (!DSUtils._a(relations)) {
		      reject(new DSErrors.IA('"relations" must be a string or an array!'));
		    } else {
		      (function () {
		        _options = DSUtils._(definition, options);
		        _options.logFn('loadRelations', instance, relations, _options);

		        var tasks = [];

		        DSUtils.forEach(definition.relationList, function (def) {
		          var relationName = def.relation;
		          var relationDef = definition.getResource(relationName);
		          var __options = DSUtils._(relationDef, options);

		          // relations can be loaded based on resource name or field name
		          if (!relations.length || DSUtils.contains(relations, relationName) || DSUtils.contains(relations, def.localField)) {
		            var task = undefined;
		            var params = {};
		            if (__options.allowSimpleWhere) {
		              params[def.foreignKey] = instance[definition.idAttribute];
		            } else {
		              params.where = {};
		              params.where[def.foreignKey] = {
		                '==': instance[definition.idAttribute]
		              };
		            }

		            var orig = __options.orig();
		            var defKey = def.localKey ? DSUtils.get(instance, def.localKey) : null;
		            var hasDefKey = !!(defKey || defKey === 0);

		            if (typeof def.load === 'function') {
		              task = def.load(definition, def, instance, orig);
		            } else {
		              if (def.type === 'hasMany') {
		                if (def.localKeys) {
		                  delete params[def.foreignKey];
		                  var keys = DSUtils.get(instance, def.localKeys) || [];
		                  keys = DSUtils._a(keys) ? keys : DSUtils.keys(keys);
		                  params.where = _defineProperty({}, relationDef.idAttribute, {
		                    'in': keys
		                  });
		                  orig.localKeys = keys;
		                } else if (def.foreignKeys) {
		                  delete params[def.foreignKey];
		                  params.where = _defineProperty({}, def.foreignKeys, {
		                    contains: instance[definition.idAttribute]
		                  });
		                }
		                task = relationDef.findAll(params, orig);
		              } else if (def.type === 'hasOne') {
		                if (def.localKey && hasDefKey) {
		                  task = relationDef.find(defKey, orig);
		                } else if (def.foreignKey) {
		                  task = relationDef.findAll(params, orig).then(function (hasOnes) {
		                    return hasOnes.length ? hasOnes[0] : null;
		                  });
		                }
		              } else if (hasDefKey) {
		                task = relationDef.find(defKey, orig);
		              }
		            }

		            if (task) {
		              if (!_options.linkRelations) {
		                task = task.then(function (data) {
		                  instance[def.localField] = data;
		                });
		              }
		              tasks.push(task);
		            }
		          }
		        });

		        resolve(tasks);
		      })();
		    }
		  }).then(function (tasks) {
		    return DSUtils.Promise.all(tasks);
		  }).then(function () {
		    return _options.afterLoadRelations.call(instance, _options, instance);
		  })['catch'](_this.errorFn('loadRelations', resourceName, instance, relations, options));
		};

	/***/ },
	/* 43 */
	/***/ function(module, exports) {

		/**
		 * Find expired items of the specified resource type and perform the configured action.
		 *
		 * @param resourceName The name of the type of resource of the items to reap.
		 * @param options Optional configuration.
		 * @returns The reaped items.
		 */
		module.exports = function reap(resourceName, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var definition = _this.definitions[resourceName];
		  var resource = _this.store[resourceName];

		  return new DSUtils.Promise(function (resolve, reject) {
		    if (!definition) {
		      reject(new _this.errors.NER(resourceName));
		    } else {
		      options = DSUtils._(definition, options);
		      if (!options.hasOwnProperty('notify')) {
		        options.notify = false;
		      }
		      options.logFn('reap', options);
		      var items = [];
		      var now = new Date().getTime();
		      var expiredItem = undefined;

		      // find the expired items
		      while ((expiredItem = resource.expiresHeap.peek()) && expiredItem.expires < now) {
		        items.push(expiredItem.item);
		        delete expiredItem.item;
		        resource.expiresHeap.pop();
		      }
		      resolve(items);
		    }
		  }).then(function (items) {
		    // only hit lifecycle if there are items
		    if (items.length) {
		      definition.beforeReap(options, items);
		      if (options.notify) {
		        definition.emit('DS.beforeReap', definition, items);
		      }
		    }

		    if (options.reapAction === 'inject') {
		      (function () {
		        var timestamp = new Date().getTime();
		        DSUtils.forEach(items, function (item) {
		          resource.expiresHeap.push({
		            item: item,
		            timestamp: timestamp,
		            expires: definition.maxAge ? timestamp + definition.maxAge : Number.MAX_VALUE
		          });
		        });
		      })();
		    } else if (options.reapAction === 'eject') {
		      DSUtils.forEach(items, function (item) {
		        definition.eject(item[definition.idAttribute]);
		      });
		    } else if (options.reapAction === 'refresh') {
		      var _ret2 = (function () {
		        var tasks = [];
		        DSUtils.forEach(items, function (item) {
		          tasks.push(definition.refresh(item[definition.idAttribute]));
		        });
		        return {
		          v: DSUtils.Promise.all(tasks)
		        };
		      })();

		      if (typeof _ret2 === 'object') return _ret2.v;
		    }
		    return items;
		  }).then(function (items) {
		    // only hit lifecycle if there are items
		    if (items.length) {
		      definition.afterReap(options, items);
		      if (options.notify) {
		        definition.emit('DS.afterReap', definition, items);
		      }
		    }
		    return items;
		  })['catch'](_this.errorFn('reap', resourceName, options));
		};

	/***/ },
	/* 44 */
	/***/ function(module, exports) {

		/**
		 * Save a single item in its present state.
		 *
		 * @param resourceName The name of the type of resource of the item.
		 * @param id The primary key of the item.
		 * @param options Optional congifuration.
		 * @returns The item, now saved.
		 */
		module.exports = function save(resourceName, id, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var DSErrors = _this.errors;

		  var definition = _this.definitions[resourceName];
		  var resource = _this.store[resourceName];
		  var item = undefined,
		      noChanges = undefined,
		      adapter = undefined;

		  return new DSUtils.Promise(function (resolve, reject) {
		    id = DSUtils.resolveId(definition, id);
		    if (!definition) {
		      reject(new DSErrors.NER(resourceName));
		    } else if (!DSUtils._sn(id)) {
		      reject(DSUtils._snErr('id'));
		    } else if (!definition.get(id)) {
		      reject(new DSErrors.R('id "' + id + '" not found in cache!'));
		    } else {
		      item = definition.get(id);
		      options = DSUtils._(definition, options);
		      options.logFn('save', id, options);
		      resolve(item);
		    }
		  })
		  // start lifecycle
		  .then(function (attrs) {
		    return options.beforeValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.validate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.afterValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.beforeUpdate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.beforeUpdate', definition, attrs);
		    }
		    // only send changed properties to the adapter
		    if (options.changesOnly) {
		      if (resource.observers[id] && typeof resource.observers[id] === 'function') {
		        resource.observers[id].deliver();
		      }
		      var toKeep = [];
		      var changes = definition.changes(id);

		      for (var key in changes.added) {
		        toKeep.push(key);
		      }
		      for (key in changes.changed) {
		        toKeep.push(key);
		      }
		      changes = DSUtils.pick(attrs, toKeep);
		      // no changes? no save
		      if (DSUtils.isEmpty(changes)) {
		        // no changes, return
		        options.logFn('save - no changes', id, options);
		        noChanges = true;
		        return attrs;
		      } else {
		        attrs = changes;
		      }
		    }
		    adapter = definition.getAdapterName(options);
		    return _this.adapters[adapter].update(definition, id, DSUtils.omit(attrs, options.omit), options);
		  }).then(function (data) {
		    return options.afterUpdate.call(data, options, data);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.afterUpdate', definition, attrs);
		    }
		    if (noChanges) {
		      // no changes, just return
		      return attrs;
		    } else if (options.cacheResponse) {
		      // inject the reponse into the store, updating the item
		      var injected = definition.inject(attrs, options.orig());
		      var _id = injected[definition.idAttribute];
		      // mark the item as "saved"
		      resource.saved[_id] = DSUtils.updateTimestamp(resource.saved[_id]);
		      if (!definition.resetHistoryOnInject) {
		        resource.previousAttributes[_id] = DSUtils.copy(injected, null, null, null, definition.relationFields);
		      }
		      return injected;
		    } else {
		      // just return an instance
		      return definition.createInstance(attrs, options.orig());
		    }
		  }).then(function (item) {
		    return DSUtils.respond(item, { adapter: adapter }, options);
		  })['catch'](_this.errorFn('save', resourceName, id, options));
		};

	/***/ },
	/* 45 */
	/***/ function(module, exports) {

		/**
		 * Update a single item using the supplied properties hash.
		 *
		 * @param resourceName The name of the type of resource of the item to update.
		 * @param id The primary key of the item to update.
		 * @param attrs The attributes with which to update the item.
		 * @param options Optional configuration.
		 * @returns The item, now updated.
		 */
		module.exports = function update(resourceName, id, attrs, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var DSErrors = _this.errors;

		  var definition = _this.definitions[resourceName];
		  var adapter = undefined;

		  return new DSUtils.Promise(function (resolve, reject) {
		    id = DSUtils.resolveId(definition, id);
		    if (!definition) {
		      reject(new DSErrors.NER(resourceName));
		    } else if (!DSUtils._sn(id)) {
		      reject(DSUtils._snErr('id'));
		    } else {
		      options = DSUtils._(definition, options);
		      options.logFn('update', id, attrs, options);
		      resolve(attrs);
		    }
		  })
		  // start lifecycle
		  .then(function (attrs) {
		    return options.beforeValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.validate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.afterValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.beforeUpdate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.beforeUpdate', definition, attrs);
		    }
		    adapter = definition.getAdapterName(options);
		    return _this.adapters[adapter].update(definition, id, DSUtils.omit(attrs, options.omit), options);
		  }).then(function (data) {
		    return options.afterUpdate.call(data, options, data);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.afterUpdate', definition, attrs);
		    }
		    if (options.cacheResponse) {
		      // inject the updated item into the store
		      var injected = definition.inject(attrs, options.orig());
		      var resource = _this.store[resourceName];
		      var _id = injected[definition.idAttribute];
		      // mark the item as "saved"
		      resource.saved[_id] = DSUtils.updateTimestamp(resource.saved[_id]);
		      if (!definition.resetHistoryOnInject) {
		        resource.previousAttributes[_id] = DSUtils.copy(injected, null, null, null, definition.relationFields);
		      }
		      return injected;
		    } else {
		      // just return an instance
		      return definition.createInstance(attrs, options.orig());
		    }
		  }).then(function (item) {
		    return DSUtils.respond(item, { adapter: adapter }, options);
		  })['catch'](_this.errorFn('update', resourceName, id, attrs, options));
		};

	/***/ },
	/* 46 */
	/***/ function(module, exports) {

		/**
		 * Update a collection of items using the supplied properties hash.
		 *
		 * @param resourceName The name of the type of resource of the items to update.
		 * @param attrs  The attributes with which to update the item.
		 * @param params The criteria by which to select items to update. See http://www.js-data.io/docs/query-syntax
		 * @param options Optional configuration.
		 * @returns The updated items.
		 */
		module.exports = function updateAll(resourceName, attrs, params, options) {
		  var _this = this;
		  var DSUtils = _this.utils;
		  var DSErrors = _this.errors;

		  var definition = _this.definitions[resourceName];
		  var adapter = undefined;

		  return new DSUtils.Promise(function (resolve, reject) {
		    if (!definition) {
		      reject(new DSErrors.NER(resourceName));
		    } else {
		      options = DSUtils._(definition, options);
		      options.logFn('updateAll', attrs, params, options);
		      DSUtils.applyScope(definition, params, options);
		      resolve(attrs);
		    }
		  })
		  // start lifecycle
		  .then(function (attrs) {
		    return options.beforeValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.validate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.afterValidate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    return options.beforeUpdate.call(attrs, options, attrs);
		  }).then(function (attrs) {
		    if (options.notify) {
		      definition.emit('DS.beforeUpdate', definition, attrs);
		    }
		    adapter = definition.getAdapterName(options);
		    return _this.adapters[adapter].updateAll(definition, DSUtils.omit(attrs, options.omit), params, options);
		  }).then(function (data) {
		    return options.afterUpdate.call(data, options, data);
		  }).then(function (data) {
		    if (options.notify) {
		      definition.emit('DS.afterUpdate', definition, attrs);
		    }
		    var origOptions = options.orig();
		    if (options.cacheResponse) {
		      var _ret = (function () {
		        // inject the updated items into the store
		        var injected = definition.inject(data, origOptions);
		        var resource = _this.store[resourceName];
		        // mark the items as "saved"
		        DSUtils.forEach(injected, function (i) {
		          var id = i[definition.idAttribute];
		          resource.saved[id] = DSUtils.updateTimestamp(resource.saved[id]);
		          if (!definition.resetHistoryOnInject) {
		            resource.previousAttributes[id] = DSUtils.copy(i, null, null, null, definition.relationFields);
		          }
		        });
		        return {
		          v: injected
		        };
		      })();

		      if (typeof _ret === 'object') return _ret.v;
		    } else {
		      var _ret2 = (function () {
		        // just return instances
		        var instances = [];
		        DSUtils.forEach(data, function (item) {
		          instances.push(definition.createInstance(item, origOptions));
		        });
		        return {
		          v: instances
		        };
		      })();

		      if (typeof _ret2 === 'object') return _ret2.v;
		    }
		  }).then(function (items) {
		    return DSUtils.respond(items, { adapter: adapter }, options);
		  })['catch'](_this.errorFn('updateAll', resourceName, attrs, params, options));
		};

	/***/ }
	/******/ ])
	});
	;

/***/ },

/***/ 423:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var JSDataHttp = __webpack_require__(424);
	var Client_1 = __webpack_require__(359);
	exports.API_URL = 'https://strizhapi.herokuapp.com/api/v1/';

	var Adapter = (function (_JSDataHttp) {
	    _inherits(Adapter, _JSDataHttp);

	    function Adapter(options) {
	        _classCallCheck(this, Adapter);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Adapter).call(this, options));
	    }

	    _createClass(Adapter, [{
	        key: 'HTTP',
	        value: function HTTP(options) {
	            return Client_1.client.request({
	                url: options.url,
	                method: options.method
	            });
	        }
	    }]);

	    return Adapter;
	})(JSDataHttp);

	exports.Adapter = Adapter;
	exports.adapter = new Adapter({
	    deserialize: function deserialize(resourceConfig, data) {
	        if (data.data.items) {
	            return data.data.items[resourceConfig.name];
	        } else {
	            return data.data;
	        }
	    }
	});
	function deserialize(data) {
	    return data.data.data;
	}

/***/ },

/***/ 424:
/***/ function(module, exports, __webpack_require__) {

	/*!
	* js-data-http
	* @version 2.1.2 - Homepage <http://www.js-data.io/docs/dshttpadapter>
	* @author Jason Dobry <jason.dobry@gmail.com>
	* @copyright (c) 2014-2015 Jason Dobry
	* @license MIT <https://github.com/js-data/js-data-http/blob/master/LICENSE>
	*
	* @overview HTTP adapter for js-data.
	*/
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(422));
		else if(typeof define === 'function' && define.amd)
			define(["js-data"], factory);
		else if(typeof exports === 'object')
			exports["DSHttpAdapter"] = factory(require("js-data"));
		else
			root["DSHttpAdapter"] = factory(root["JSData"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

		var JSData = __webpack_require__(1);
		var axios = null;

		try {
		  axios = __webpack_require__(2);
		} catch (e) {}

		var DSUtils = JSData.DSUtils;
		var deepMixIn = DSUtils.deepMixIn;
		var removeCircular = DSUtils.removeCircular;
		var copy = DSUtils.copy;
		var makePath = DSUtils.makePath;
		var isString = DSUtils.isString;
		var isNumber = DSUtils.isNumber;

		var Defaults = (function () {
		  function Defaults() {
		    _classCallCheck(this, Defaults);
		  }

		  _createClass(Defaults, [{
		    key: 'queryTransform',
		    value: function queryTransform(resourceConfig, params) {
		      return params;
		    }
		  }, {
		    key: 'deserialize',
		    value: function deserialize(resourceConfig, data) {
		      return data ? 'data' in data ? data.data : data : data;
		    }
		  }, {
		    key: 'serialize',
		    value: function serialize(resourceConfig, data) {
		      return data;
		    }
		  }, {
		    key: 'log',
		    value: function log() {}
		  }, {
		    key: 'error',
		    value: function error() {}
		  }]);

		  return Defaults;
		})();

		var defaultsPrototype = Defaults.prototype;

		defaultsPrototype.basePath = '';

		defaultsPrototype.forceTrailingSlash = '';

		defaultsPrototype.httpConfig = {};

		defaultsPrototype.verbsUseBasePath = false;

		var DSHttpAdapter = (function () {
		  function DSHttpAdapter(options) {
		    _classCallCheck(this, DSHttpAdapter);

		    options = options || {};
		    this.defaults = new Defaults();
		    if (console) {
		      this.defaults.log = function (a, b) {
		        return console[typeof console.info === 'function' ? 'info' : 'log'](a, b);
		      };
		    }
		    if (console) {
		      this.defaults.error = function (a, b) {
		        return console[typeof console.error === 'function' ? 'error' : 'log'](a, b);
		      };
		    }
		    deepMixIn(this.defaults, options);
		    this.http = options.http || axios;
		  }

		  _createClass(DSHttpAdapter, [{
		    key: 'getEndpoint',
		    value: function getEndpoint(resourceConfig, id, options) {
		      var _this2 = this;

		      options = options || {};
		      options.params = options.params || {};

		      var item = undefined;
		      var parentKey = resourceConfig.parentKey;
		      var endpoint = options.hasOwnProperty('endpoint') ? options.endpoint : resourceConfig.endpoint;
		      var parentField = resourceConfig.parentField;
		      var parentDef = resourceConfig.getResource(resourceConfig.parent);
		      var parentId = options.params[parentKey];

		      if (parentId === false || !parentKey || !parentDef) {
		        if (parentId === false) {
		          delete options.params[parentKey];
		        }
		        return endpoint;
		      } else {
		        delete options.params[parentKey];

		        if (DSUtils._sn(id)) {
		          item = resourceConfig.get(id);
		        } else if (DSUtils._o(id)) {
		          item = id;
		        }

		        if (item) {
		          parentId = parentId || item[parentKey] || (item[parentField] ? item[parentField][parentDef.idAttribute] : null);
		        }

		        if (parentId) {
		          var _ret = (function () {
		            delete options.endpoint;
		            var _options = {};
		            DSUtils.forOwn(options, function (value, key) {
		              _options[key] = value;
		            });
		            return {
		              v: DSUtils.makePath(_this2.getEndpoint(parentDef, parentId, DSUtils._(parentDef, _options)), parentId, endpoint)
		            };
		          })();

		          if (typeof _ret === 'object') return _ret.v;
		        } else {
		          return endpoint;
		        }
		      }
		    }
		  }, {
		    key: 'getPath',
		    value: function getPath(method, resourceConfig, id, options) {
		      var _this = this;
		      options = options || {};
		      if (isString(options.urlPath)) {
		        return makePath.apply(DSUtils, [options.basePath || _this.defaults.basePath || resourceConfig.basePath, options.urlPath]);
		      } else {
		        var args = [options.basePath || _this.defaults.basePath || resourceConfig.basePath, this.getEndpoint(resourceConfig, isString(id) || isNumber(id) || method === 'create' ? id : null, options)];
		        if (method === 'find' || method === 'update' || method === 'destroy') {
		          args.push(id);
		        }
		        return makePath.apply(DSUtils, args);
		      }
		    }
		  }, {
		    key: 'HTTP',
		    value: function HTTP(config) {
		      var _this = this;
		      var start = new Date();
		      config = copy(config);
		      config = deepMixIn(config, _this.defaults.httpConfig);
		      if (!('verbsUseBasePath' in config)) {
		        config.verbsUseBasePath = _this.defaults.verbsUseBasePath;
		      }
		      if (!config.urlOverride && config.verbsUseBasePath) {
		        config.url = makePath(config.basePath || _this.defaults.basePath, config.url);
		      }
		      if (_this.defaults.forceTrailingSlash && config.url[config.url.length - 1] !== '/' && !config.urlOverride) {
		        config.url += '/';
		      }
		      if (typeof config.data === 'object') {
		        config.data = removeCircular(config.data);
		      }
		      config.method = config.method.toUpperCase();
		      var suffix = config.suffix || _this.defaults.suffix;
		      if (suffix && config.url.substr(config.url.length - suffix.length) !== suffix && !config.urlOverride) {
		        config.url += suffix;
		      }

		      // logs the HTTP response
		      function logResponse(data, isRejection) {
		        data = data || {};
		        // examine the data object
		        if (data instanceof Error) {
		          // log the Error object
		          _this.defaults.error('FAILED: ' + (data.message || 'Unknown Error'), data);
		          return DSUtils.Promise.reject(data);
		        } else if (typeof data === 'object') {
		          var str = start.toUTCString() + ' - ' + config.method + ' ' + config.url + ' - ' + data.status + ' ' + (new Date().getTime() - start.getTime()) + 'ms';

		          if (data.status >= 200 && data.status < 300 && !isRejection) {
		            if (_this.defaults.log) {
		              _this.defaults.log(str, data);
		            }
		            return data;
		          } else {
		            if (_this.defaults.error) {
		              _this.defaults.error('FAILED: ' + str, data);
		            }
		            return DSUtils.Promise.reject(data);
		          }
		        } else {
		          // unknown type for 'data' that is not an Object or Error
		          _this.defaults.error('FAILED', data);
		          return DSUtils.Promise.reject(data);
		        }
		      }

		      if (!this.http) {
		        throw new Error('You have not configured this adapter with an http library!');
		      }

		      return this.http(config).then(logResponse, function (data) {
		        return logResponse(data, true);
		      });
		    }
		  }, {
		    key: 'GET',
		    value: function GET(url, config) {
		      config = config || {};
		      config.method = config.method || 'get';
		      config.urlOverride = !!config.url;
		      config.url = config.url || url;
		      return this.HTTP(config);
		    }
		  }, {
		    key: 'POST',
		    value: function POST(url, attrs, config) {
		      config = config || {};
		      config.method = config.method || 'post';
		      config.urlOverride = !!config.url;
		      config.url = config.url || url;
		      config.data = config.data || attrs;
		      return this.HTTP(config);
		    }
		  }, {
		    key: 'PUT',
		    value: function PUT(url, attrs, config) {
		      config = config || {};
		      config.method = config.method || 'put';
		      config.urlOverride = !!config.url;
		      config.url = config.url || url;
		      config.data = config.data || attrs;
		      return this.HTTP(config);
		    }
		  }, {
		    key: 'DEL',
		    value: function DEL(url, config) {
		      config = config || {};
		      config.method = config.method || 'delete';
		      config.urlOverride = !!config.url;
		      config.url = config.url || url;
		      return this.HTTP(config);
		    }
		  }, {
		    key: 'find',
		    value: function find(resourceConfig, id, options) {
		      var _this = this;
		      options = options ? copy(options) : {};
		      options.suffix = options.suffix || resourceConfig.suffix;
		      options.params = options.params || {};
		      options.params = _this.defaults.queryTransform(resourceConfig, options.params);
		      return _this.GET(_this.getPath('find', resourceConfig, id, options), options).then(function (data) {
		        var item = (options.deserialize ? options.deserialize : _this.defaults.deserialize)(resourceConfig, data);
		        return !item ? DSUtils.Promise.reject(new Error('Not Found!')) : item;
		      });
		    }
		  }, {
		    key: 'findAll',
		    value: function findAll(resourceConfig, params, options) {
		      var _this = this;
		      options = options ? copy(options) : {};
		      options.suffix = options.suffix || resourceConfig.suffix;
		      options.params = options.params || {};
		      if (params) {
		        params = _this.defaults.queryTransform(resourceConfig, params);
		        deepMixIn(options.params, params);
		      }
		      return _this.GET(_this.getPath('findAll', resourceConfig, params, options), options).then(function (data) {
		        return (options.deserialize ? options.deserialize : _this.defaults.deserialize)(resourceConfig, data);
		      });
		    }
		  }, {
		    key: 'create',
		    value: function create(resourceConfig, attrs, options) {
		      var _this = this;
		      options = options ? copy(options) : {};
		      options.suffix = options.suffix || resourceConfig.suffix;
		      options.params = options.params || {};
		      options.params = _this.defaults.queryTransform(resourceConfig, options.params);
		      return _this.POST(_this.getPath('create', resourceConfig, attrs, options), options.serialize ? options.serialize(resourceConfig, attrs) : _this.defaults.serialize(resourceConfig, attrs), options).then(function (data) {
		        return (options.deserialize ? options.deserialize : _this.defaults.deserialize)(resourceConfig, data);
		      });
		    }
		  }, {
		    key: 'update',
		    value: function update(resourceConfig, id, attrs, options) {
		      var _this = this;
		      options = options ? copy(options) : {};
		      options.suffix = options.suffix || resourceConfig.suffix;
		      options.params = options.params || {};
		      options.params = _this.defaults.queryTransform(resourceConfig, options.params);
		      return _this.PUT(_this.getPath('update', resourceConfig, id, options), options.serialize ? options.serialize(resourceConfig, attrs) : _this.defaults.serialize(resourceConfig, attrs), options).then(function (data) {
		        return (options.deserialize ? options.deserialize : _this.defaults.deserialize)(resourceConfig, data);
		      });
		    }
		  }, {
		    key: 'updateAll',
		    value: function updateAll(resourceConfig, attrs, params, options) {
		      var _this = this;
		      options = options ? copy(options) : {};
		      options.suffix = options.suffix || resourceConfig.suffix;
		      options.params = options.params || {};
		      if (params) {
		        params = _this.defaults.queryTransform(resourceConfig, params);
		        deepMixIn(options.params, params);
		      }
		      return this.PUT(_this.getPath('updateAll', resourceConfig, attrs, options), options.serialize ? options.serialize(resourceConfig, attrs) : _this.defaults.serialize(resourceConfig, attrs), options).then(function (data) {
		        return (options.deserialize ? options.deserialize : _this.defaults.deserialize)(resourceConfig, data);
		      });
		    }
		  }, {
		    key: 'destroy',
		    value: function destroy(resourceConfig, id, options) {
		      var _this = this;
		      options = options ? copy(options) : {};
		      options.suffix = options.suffix || resourceConfig.suffix;
		      options.params = options.params || {};
		      options.params = _this.defaults.queryTransform(resourceConfig, options.params);
		      return _this.DEL(_this.getPath('destroy', resourceConfig, id, options), options).then(function (data) {
		        return (options.deserialize ? options.deserialize : _this.defaults.deserialize)(resourceConfig, data);
		      });
		    }
		  }, {
		    key: 'destroyAll',
		    value: function destroyAll(resourceConfig, params, options) {
		      var _this = this;
		      options = options ? copy(options) : {};
		      options.suffix = options.suffix || resourceConfig.suffix;
		      options.params = options.params || {};
		      if (params) {
		        params = _this.defaults.queryTransform(resourceConfig, params);
		        deepMixIn(options.params, params);
		      }
		      return this.DEL(_this.getPath('destroyAll', resourceConfig, params, options), options).then(function (data) {
		        return (options.deserialize ? options.deserialize : _this.defaults.deserialize)(resourceConfig, data);
		      });
		    }
		  }]);

		  return DSHttpAdapter;
		})();

		DSHttpAdapter.version = {
		  full: '2.1.2',
		  major: parseInt('2', 10),
		  minor: parseInt('1', 10),
		  patch: parseInt('2', 10),
		  alpha:  true ? 'false' : false,
		  beta:  true ? 'false' : false
		};

		module.exports = DSHttpAdapter;

	/***/ },
	/* 1 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(3);

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var defaults = __webpack_require__(4);
		var utils = __webpack_require__(5);
		var deprecatedMethod = __webpack_require__(6);
		var dispatchRequest = __webpack_require__(7);
		var InterceptorManager = __webpack_require__(15);

		// Polyfill ES6 Promise if needed
		(function () {
		  // webpack is being used to set es6-promise to the native Promise
		  // for the standalone build. It's necessary to make sure polyfill exists.
		  var P = __webpack_require__(16);
		  if (P && typeof P.polyfill === 'function') {
		    P.polyfill();
		  }
		})();

		var axios = module.exports = function axios(config) {
		  config = utils.merge({
		    method: 'get',
		    headers: {},
		    transformRequest: defaults.transformRequest,
		    transformResponse: defaults.transformResponse
		  }, config);

		  // Don't allow overriding defaults.withCredentials
		  config.withCredentials = config.withCredentials || defaults.withCredentials;

		  // Hook up interceptors middleware
		  var chain = [dispatchRequest, undefined];
		  var promise = Promise.resolve(config);

		  axios.interceptors.request.forEach(function (interceptor) {
		    chain.unshift(interceptor.fulfilled, interceptor.rejected);
		  });

		  axios.interceptors.response.forEach(function (interceptor) {
		    chain.push(interceptor.fulfilled, interceptor.rejected);
		  });

		  while (chain.length) {
		    promise = promise.then(chain.shift(), chain.shift());
		  }

		  // Provide alias for success
		  promise.success = function success(fn) {
		    deprecatedMethod('success', 'then', 'https://github.com/mzabriskie/axios/blob/master/README.md#response-api');

		    promise.then(function(response) {
		      fn(response.data, response.status, response.headers, response.config);
		    });
		    return promise;
		  };

		  // Provide alias for error
		  promise.error = function error(fn) {
		    deprecatedMethod('error', 'catch', 'https://github.com/mzabriskie/axios/blob/master/README.md#response-api');

		    promise.then(null, function(response) {
		      fn(response.data, response.status, response.headers, response.config);
		    });
		    return promise;
		  };

		  return promise;
		};

		// Expose defaults
		axios.defaults = defaults;

		// Expose all/spread
		axios.all = function (promises) {
		  return Promise.all(promises);
		};
		axios.spread = __webpack_require__(21);

		// Expose interceptors
		axios.interceptors = {
		  request: new InterceptorManager(),
		  response: new InterceptorManager()
		};

		// Provide aliases for supported request methods
		(function () {
		  function createShortMethods() {
		    utils.forEach(arguments, function (method) {
		      axios[method] = function (url, config) {
		        return axios(utils.merge(config || {}, {
		          method: method,
		          url: url
		        }));
		      };
		    });
		  }

		  function createShortMethodsWithData() {
		    utils.forEach(arguments, function (method) {
		      axios[method] = function (url, data, config) {
		        return axios(utils.merge(config || {}, {
		          method: method,
		          url: url,
		          data: data
		        }));
		      };
		    });
		  }

		  createShortMethods('delete', 'get', 'head');
		  createShortMethodsWithData('post', 'put', 'patch');
		})();


	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var utils = __webpack_require__(5);

		var PROTECTION_PREFIX = /^\)\]\}',?\n/;
		var DEFAULT_CONTENT_TYPE = {
		  'Content-Type': 'application/x-www-form-urlencoded'
		};

		module.exports = {
		  transformRequest: [function (data, headers) {
		    if(utils.isFormData(data)) {
		      return data;
		    }
		    if (utils.isArrayBuffer(data)) {
		      return data;
		    }
		    if (utils.isArrayBufferView(data)) {
		      return data.buffer;
		    }
		    if (utils.isObject(data) && !utils.isFile(data) && !utils.isBlob(data)) {
		      // Set application/json if no Content-Type has been specified
		      if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
		        headers['Content-Type'] = 'application/json;charset=utf-8';
		      }
		      return JSON.stringify(data);
		    }
		    return data;
		  }],

		  transformResponse: [function (data) {
		    if (typeof data === 'string') {
		      data = data.replace(PROTECTION_PREFIX, '');
		      try {
		        data = JSON.parse(data);
		      } catch (e) {}
		    }
		    return data;
		  }],

		  headers: {
		    common: {
		      'Accept': 'application/json, text/plain, */*'
		    },
		    patch: utils.merge(DEFAULT_CONTENT_TYPE),
		    post: utils.merge(DEFAULT_CONTENT_TYPE),
		    put: utils.merge(DEFAULT_CONTENT_TYPE)
		  },

		  xsrfCookieName: 'XSRF-TOKEN',
		  xsrfHeaderName: 'X-XSRF-TOKEN'
		};


	/***/ },
	/* 5 */
	/***/ function(module, exports) {

		'use strict';

		/*global toString:true*/

		// utils is a library of generic helper functions non-specific to axios

		var toString = Object.prototype.toString;

		/**
		 * Determine if a value is an Array
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is an Array, otherwise false
		 */
		function isArray(val) {
		  return toString.call(val) === '[object Array]';
		}

		/**
		 * Determine if a value is an ArrayBuffer
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
		 */
		function isArrayBuffer(val) {
		  return toString.call(val) === '[object ArrayBuffer]';
		}

		/**
		 * Determine if a value is a FormData
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is an FormData, otherwise false
		 */
		function isFormData(val) {
		  return toString.call(val) === '[object FormData]';
		}

		/**
		 * Determine if a value is a view on an ArrayBuffer
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
		 */
		function isArrayBufferView(val) {
		  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
		    return ArrayBuffer.isView(val);
		  } else {
		    return (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
		  }
		}

		/**
		 * Determine if a value is a String
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is a String, otherwise false
		 */
		function isString(val) {
		  return typeof val === 'string';
		}

		/**
		 * Determine if a value is a Number
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is a Number, otherwise false
		 */
		function isNumber(val) {
		  return typeof val === 'number';
		}

		/**
		 * Determine if a value is undefined
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if the value is undefined, otherwise false
		 */
		function isUndefined(val) {
		  return typeof val === 'undefined';
		}

		/**
		 * Determine if a value is an Object
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is an Object, otherwise false
		 */
		function isObject(val) {
		  return val !== null && typeof val === 'object';
		}

		/**
		 * Determine if a value is a Date
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is a Date, otherwise false
		 */
		function isDate(val) {
		  return toString.call(val) === '[object Date]';
		}

		/**
		 * Determine if a value is a File
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is a File, otherwise false
		 */
		function isFile(val) {
		  return toString.call(val) === '[object File]';
		}

		/**
		 * Determine if a value is a Blob
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is a Blob, otherwise false
		 */
		function isBlob(val) {
		  return toString.call(val) === '[object Blob]';
		}

		/**
		 * Trim excess whitespace off the beginning and end of a string
		 *
		 * @param {String} str The String to trim
		 * @returns {String} The String freed of excess whitespace
		 */
		function trim(str) {
		  return str.replace(/^\s*/, '').replace(/\s*$/, '');
		}

		/**
		 * Iterate over an Array or an Object invoking a function for each item.
		 *
		 * If `obj` is an Array or arguments callback will be called passing
		 * the value, index, and complete array for each item.
		 *
		 * If 'obj' is an Object callback will be called passing
		 * the value, key, and complete object for each property.
		 *
		 * @param {Object|Array} obj The object to iterate
		 * @param {Function} fn The callback to invoke for each item
		 */
		function forEach(obj, fn) {
		  // Don't bother if no value provided
		  if (obj === null || typeof obj === 'undefined') {
		    return;
		  }

		  // Check if obj is array-like
		  var isArrayLike = isArray(obj) || (typeof obj === 'object' && !isNaN(obj.length));

		  // Force an array if not already something iterable
		  if (typeof obj !== 'object' && !isArrayLike) {
		    obj = [obj];
		  }

		  // Iterate over array values
		  if (isArrayLike) {
		    for (var i = 0, l = obj.length; i < l; i++) {
		      fn.call(null, obj[i], i, obj);
		    }
		  }
		  // Iterate over object keys
		  else {
		    for (var key in obj) {
		      if (obj.hasOwnProperty(key)) {
		        fn.call(null, obj[key], key, obj);
		      }
		    }
		  }
		}

		/**
		 * Accepts varargs expecting each argument to be an object, then
		 * immutably merges the properties of each object and returns result.
		 *
		 * When multiple objects contain the same key the later object in
		 * the arguments list will take precedence.
		 *
		 * Example:
		 *
		 * ```js
		 * var result = merge({foo: 123}, {foo: 456});
		 * console.log(result.foo); // outputs 456
		 * ```
		 *
		 * @param {Object} obj1 Object to merge
		 * @returns {Object} Result of all merge properties
		 */
		function merge(/*obj1, obj2, obj3, ...*/) {
		  var result = {};
		  forEach(arguments, function (obj) {
		    forEach(obj, function (val, key) {
		      result[key] = val;
		    });
		  });
		  return result;
		}

		module.exports = {
		  isArray: isArray,
		  isArrayBuffer: isArrayBuffer,
		  isFormData: isFormData,
		  isArrayBufferView: isArrayBufferView,
		  isString: isString,
		  isNumber: isNumber,
		  isObject: isObject,
		  isUndefined: isUndefined,
		  isDate: isDate,
		  isFile: isFile,
		  isBlob: isBlob,
		  forEach: forEach,
		  merge: merge,
		  trim: trim
		};


	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		'use strict';

		/**
		 * Supply a warning to the developer that a method they are using
		 * has been deprecated.
		 *
		 * @param {string} method The name of the deprecated method
		 * @param {string} [instead] The alternate method to use if applicable
		 * @param {string} [docs] The documentation URL to get further details
		 */
		module.exports = function deprecatedMethod(method, instead, docs) {
		  try {
		    console.warn(
		      'DEPRECATED method `' + method + '`.' +
		      (instead ? ' Use `' + instead + '` instead.' : '') +
		      ' This method will be removed in a future release.');

		    if (docs) {
		      console.warn('For more information about usage see ' + docs);
		    }
		  } catch (e) {}
		};


	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		/**
		 * Dispatch a request to the server using whichever adapter
		 * is supported by the current environment.
		 *
		 * @param {object} config The config that is to be used for the request
		 * @returns {Promise} The Promise to be fulfilled
		 */
		module.exports = function dispatchRequest(config) {
		  return new Promise(function (resolve, reject) {
		    try {
		      // For browsers use XHR adapter
		      if (typeof window !== 'undefined') {
		        __webpack_require__(9)(resolve, reject, config);
		      }
		      // For node use HTTP adapter
		      else if (typeof process !== 'undefined') {
		        __webpack_require__(9)(resolve, reject, config);
		      }
		    } catch (e) {
		      reject(e);
		    }
		  });
		};


		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

	/***/ },
	/* 8 */
	/***/ function(module, exports) {

		// shim for using process in browser

		var process = module.exports = {};
		var queue = [];
		var draining = false;
		var currentQueue;
		var queueIndex = -1;

		function cleanUpNextTick() {
		    draining = false;
		    if (currentQueue.length) {
		        queue = currentQueue.concat(queue);
		    } else {
		        queueIndex = -1;
		    }
		    if (queue.length) {
		        drainQueue();
		    }
		}

		function drainQueue() {
		    if (draining) {
		        return;
		    }
		    var timeout = setTimeout(cleanUpNextTick);
		    draining = true;

		    var len = queue.length;
		    while(len) {
		        currentQueue = queue;
		        queue = [];
		        while (++queueIndex < len) {
		            if (currentQueue) {
		                currentQueue[queueIndex].run();
		            }
		        }
		        queueIndex = -1;
		        len = queue.length;
		    }
		    currentQueue = null;
		    draining = false;
		    clearTimeout(timeout);
		}

		process.nextTick = function (fun) {
		    var args = new Array(arguments.length - 1);
		    if (arguments.length > 1) {
		        for (var i = 1; i < arguments.length; i++) {
		            args[i - 1] = arguments[i];
		        }
		    }
		    queue.push(new Item(fun, args));
		    if (queue.length === 1 && !draining) {
		        setTimeout(drainQueue, 0);
		    }
		};

		// v8 likes predictible objects
		function Item(fun, array) {
		    this.fun = fun;
		    this.array = array;
		}
		Item.prototype.run = function () {
		    this.fun.apply(null, this.array);
		};
		process.title = 'browser';
		process.browser = true;
		process.env = {};
		process.argv = [];
		process.version = ''; // empty string to avoid regexp issues
		process.versions = {};

		function noop() {}

		process.on = noop;
		process.addListener = noop;
		process.once = noop;
		process.off = noop;
		process.removeListener = noop;
		process.removeAllListeners = noop;
		process.emit = noop;

		process.binding = function (name) {
		    throw new Error('process.binding is not supported');
		};

		process.cwd = function () { return '/' };
		process.chdir = function (dir) {
		    throw new Error('process.chdir is not supported');
		};
		process.umask = function() { return 0; };


	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		/*global ActiveXObject:true*/

		var defaults = __webpack_require__(4);
		var utils = __webpack_require__(5);
		var buildUrl = __webpack_require__(10);
		var cookies = __webpack_require__(11);
		var parseHeaders = __webpack_require__(12);
		var transformData = __webpack_require__(13);
		var urlIsSameOrigin = __webpack_require__(14);

		module.exports = function xhrAdapter(resolve, reject, config) {
		  // Transform request data
		  var data = transformData(
		    config.data,
		    config.headers,
		    config.transformRequest
		  );

		  // Merge headers
		  var requestHeaders = utils.merge(
		    defaults.headers.common,
		    defaults.headers[config.method] || {},
		    config.headers || {}
		  );

		  if (utils.isFormData(data)) {
		    delete requestHeaders['Content-Type']; // Let the browser set it
		  }

		  // Create the request
		  var request = new (XMLHttpRequest || ActiveXObject)('Microsoft.XMLHTTP');
		  request.open(config.method.toUpperCase(), buildUrl(config.url, config.params), true);

		  // Listen for ready state
		  request.onreadystatechange = function () {
		    if (request && request.readyState === 4) {
		      // Prepare the response
		      var responseHeaders = parseHeaders(request.getAllResponseHeaders());
		      var responseData = ['text', ''].indexOf(config.responseType || '') !== -1 ? request.responseText : request.response;
		      var response = {
		        data: transformData(
		          responseData,
		          responseHeaders,
		          config.transformResponse
		        ),
		        status: request.status,
		        statusText: request.statusText,
		        headers: responseHeaders,
		        config: config
		      };

		      // Resolve or reject the Promise based on the status
		      (request.status >= 200 && request.status < 300 ?
		        resolve :
		        reject)(response);

		      // Clean up request
		      request = null;
		    }
		  };

		  // Add xsrf header
		  var xsrfValue = urlIsSameOrigin(config.url) ?
		      cookies.read(config.xsrfCookieName || defaults.xsrfCookieName) :
		      undefined;
		  if (xsrfValue) {
		    requestHeaders[config.xsrfHeaderName || defaults.xsrfHeaderName] = xsrfValue;
		  }

		  // Add headers to the request
		  utils.forEach(requestHeaders, function (val, key) {
		    // Remove Content-Type if data is undefined
		    if (!data && key.toLowerCase() === 'content-type') {
		      delete requestHeaders[key];
		    }
		    // Otherwise add header to the request
		    else {
		      request.setRequestHeader(key, val);
		    }
		  });

		  // Add withCredentials to request if needed
		  if (config.withCredentials) {
		    request.withCredentials = true;
		  }

		  // Add responseType to request if needed
		  if (config.responseType) {
		    try {
		      request.responseType = config.responseType;
		    } catch (e) {
		      if (request.responseType !== 'json') {
		        throw e;
		      }
		    }
		  }

		  if (utils.isArrayBuffer(data)) {
		    data = new DataView(data);
		  }

		  // Send the request
		  request.send(data);
		};


	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var utils = __webpack_require__(5);

		function encode(val) {
		  return encodeURIComponent(val).
		    replace(/%40/gi, '@').
		    replace(/%3A/gi, ':').
		    replace(/%24/g, '$').
		    replace(/%2C/gi, ',').
		    replace(/%20/g, '+');
		}

		/**
		 * Build a URL by appending params to the end
		 *
		 * @param {string} url The base of the url (e.g., http://www.google.com)
		 * @param {object} [params] The params to be appended
		 * @returns {string} The formatted url
		 */
		module.exports = function buildUrl(url, params) {
		  if (!params) {
		    return url;
		  }

		  var parts = [];

		  utils.forEach(params, function (val, key) {
		    if (val === null || typeof val === 'undefined') {
		      return;
		    }
		    if (!utils.isArray(val)) {
		      val = [val];
		    }

		    utils.forEach(val, function (v) {
		      if (utils.isDate(v)) {
		        v = v.toISOString();
		      }
		      else if (utils.isObject(v)) {
		        v = JSON.stringify(v);
		      }
		      parts.push(encode(key) + '=' + encode(v));
		    });
		  });

		  if (parts.length > 0) {
		    url += (url.indexOf('?') === -1 ? '?' : '&') + parts.join('&');
		  }

		  return url;
		};


	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var utils = __webpack_require__(5);

		module.exports = {
		  write: function write(name, value, expires, path, domain, secure) {
		    var cookie = [];
		    cookie.push(name + '=' + encodeURIComponent(value));

		    if (utils.isNumber(expires)) {
		      cookie.push('expires=' + new Date(expires).toGMTString());
		    }

		    if (utils.isString(path)) {
		      cookie.push('path=' + path);
		    }

		    if (utils.isString(domain)) {
		      cookie.push('domain=' + domain);
		    }

		    if (secure === true) {
		      cookie.push('secure');
		    }

		    document.cookie = cookie.join('; ');
		  },

		  read: function read(name) {
		    var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
		    return (match ? decodeURIComponent(match[3]) : null);
		  },

		  remove: function remove(name) {
		    this.write(name, '', Date.now() - 86400000);
		  }
		};


	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var utils = __webpack_require__(5);

		/**
		 * Parse headers into an object
		 *
		 * ```
		 * Date: Wed, 27 Aug 2014 08:58:49 GMT
		 * Content-Type: application/json
		 * Connection: keep-alive
		 * Transfer-Encoding: chunked
		 * ```
		 *
		 * @param {String} headers Headers needing to be parsed
		 * @returns {Object} Headers parsed into an object
		 */
		module.exports = function parseHeaders(headers) {
		  var parsed = {}, key, val, i;

		  if (!headers) { return parsed; }

		  utils.forEach(headers.split('\n'), function(line) {
		    i = line.indexOf(':');
		    key = utils.trim(line.substr(0, i)).toLowerCase();
		    val = utils.trim(line.substr(i + 1));

		    if (key) {
		      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
		    }
		  });

		  return parsed;
		};


	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var utils = __webpack_require__(5);

		/**
		 * Transform the data for a request or a response
		 *
		 * @param {Object|String} data The data to be transformed
		 * @param {Array} headers The headers for the request or response
		 * @param {Array|Function} fns A single function or Array of functions
		 * @returns {*} The resulting transformed data
		 */
		module.exports = function transformData(data, headers, fns) {
		  utils.forEach(fns, function (fn) {
		    data = fn(data, headers);
		  });

		  return data;
		};


	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var utils = __webpack_require__(5);
		var msie = /(msie|trident)/i.test(navigator.userAgent);
		var urlParsingNode = document.createElement('a');
		var originUrl;

		/**
		 * Parse a URL to discover it's components
		 *
		 * @param {String} url The URL to be parsed
		 * @returns {Object}
		 */
		function urlResolve(url) {
		  var href = url;

		  if (msie) {
		    // IE needs attribute set twice to normalize properties
		    urlParsingNode.setAttribute('href', href);
		    href = urlParsingNode.href;
		  }

		  urlParsingNode.setAttribute('href', href);

		  // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
		  return {
		    href: urlParsingNode.href,
		    protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
		    host: urlParsingNode.host,
		    search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
		    hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
		    hostname: urlParsingNode.hostname,
		    port: urlParsingNode.port,
		    pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
		              urlParsingNode.pathname :
		              '/' + urlParsingNode.pathname
		  };
		}

		originUrl = urlResolve(window.location.href);

		/**
		 * Determine if a URL shares the same origin as the current location
		 *
		 * @param {String} requestUrl The URL to test
		 * @returns {boolean} True if URL shares the same origin, otherwise false
		 */
		module.exports = function urlIsSameOrigin(requestUrl) {
		  var parsed = (utils.isString(requestUrl)) ? urlResolve(requestUrl) : requestUrl;
		  return (parsed.protocol === originUrl.protocol &&
		        parsed.host === originUrl.host);
		};


	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var utils = __webpack_require__(5);

		function InterceptorManager() {
		  this.handlers = [];
		}

		/**
		 * Add a new interceptor to the stack
		 *
		 * @param {Function} fulfilled The function to handle `then` for a `Promise`
		 * @param {Function} rejected The function to handle `reject` for a `Promise`
		 *
		 * @return {Number} An ID used to remove interceptor later
		 */
		InterceptorManager.prototype.use = function (fulfilled, rejected) {
		  this.handlers.push({
		    fulfilled: fulfilled,
		    rejected: rejected
		  });
		  return this.handlers.length - 1;
		};

		/**
		 * Remove an interceptor from the stack
		 *
		 * @param {Number} id The ID that was returned by `use`
		 */
		InterceptorManager.prototype.eject = function (id) {
		  if (this.handlers[id]) {
		    this.handlers[id] = null;
		  }
		};

		/**
		 * Iterate over all the registered interceptors
		 *
		 * This method is particularly useful for skipping over any
		 * interceptors that may have become `null` calling `remove`.
		 *
		 * @param {Function} fn The function to call for each interceptor
		 */
		InterceptorManager.prototype.forEach = function (fn) {
		  utils.forEach(this.handlers, function (h) {
		    if (h !== null) {
		      fn(h);
		    }
		  });
		};

		module.exports = InterceptorManager;


	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, setImmediate, global, module) {/*!
		 * @overview es6-promise - a tiny implementation of Promises/A+.
		 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
		 * @license   Licensed under MIT license
		 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
		 * @version   2.3.0
		 */

		(function() {
		    "use strict";
		    function lib$es6$promise$utils$$objectOrFunction(x) {
		      return typeof x === 'function' || (typeof x === 'object' && x !== null);
		    }

		    function lib$es6$promise$utils$$isFunction(x) {
		      return typeof x === 'function';
		    }

		    function lib$es6$promise$utils$$isMaybeThenable(x) {
		      return typeof x === 'object' && x !== null;
		    }

		    var lib$es6$promise$utils$$_isArray;
		    if (!Array.isArray) {
		      lib$es6$promise$utils$$_isArray = function (x) {
		        return Object.prototype.toString.call(x) === '[object Array]';
		      };
		    } else {
		      lib$es6$promise$utils$$_isArray = Array.isArray;
		    }

		    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
		    var lib$es6$promise$asap$$len = 0;
		    var lib$es6$promise$asap$$toString = {}.toString;
		    var lib$es6$promise$asap$$vertxNext;
		    var lib$es6$promise$asap$$customSchedulerFn;

		    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
		      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
		      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
		      lib$es6$promise$asap$$len += 2;
		      if (lib$es6$promise$asap$$len === 2) {
		        // If len is 2, that means that we need to schedule an async flush.
		        // If additional callbacks are queued before the queue is flushed, they
		        // will be processed by this flush that we are scheduling.
		        if (lib$es6$promise$asap$$customSchedulerFn) {
		          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
		        } else {
		          lib$es6$promise$asap$$scheduleFlush();
		        }
		      }
		    }

		    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
		      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
		    }

		    function lib$es6$promise$asap$$setAsap(asapFn) {
		      lib$es6$promise$asap$$asap = asapFn;
		    }

		    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
		    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
		    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
		    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

		    // test for web worker but not in IE10
		    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
		      typeof importScripts !== 'undefined' &&
		      typeof MessageChannel !== 'undefined';

		    // node
		    function lib$es6$promise$asap$$useNextTick() {
		      var nextTick = process.nextTick;
		      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
		      // setImmediate should be used instead instead
		      var version = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
		      if (Array.isArray(version) && version[1] === '0' && version[2] === '10') {
		        nextTick = setImmediate;
		      }
		      return function() {
		        nextTick(lib$es6$promise$asap$$flush);
		      };
		    }

		    // vertx
		    function lib$es6$promise$asap$$useVertxTimer() {
		      return function() {
		        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
		      };
		    }

		    function lib$es6$promise$asap$$useMutationObserver() {
		      var iterations = 0;
		      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
		      var node = document.createTextNode('');
		      observer.observe(node, { characterData: true });

		      return function() {
		        node.data = (iterations = ++iterations % 2);
		      };
		    }

		    // web worker
		    function lib$es6$promise$asap$$useMessageChannel() {
		      var channel = new MessageChannel();
		      channel.port1.onmessage = lib$es6$promise$asap$$flush;
		      return function () {
		        channel.port2.postMessage(0);
		      };
		    }

		    function lib$es6$promise$asap$$useSetTimeout() {
		      return function() {
		        setTimeout(lib$es6$promise$asap$$flush, 1);
		      };
		    }

		    var lib$es6$promise$asap$$queue = new Array(1000);
		    function lib$es6$promise$asap$$flush() {
		      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
		        var callback = lib$es6$promise$asap$$queue[i];
		        var arg = lib$es6$promise$asap$$queue[i+1];

		        callback(arg);

		        lib$es6$promise$asap$$queue[i] = undefined;
		        lib$es6$promise$asap$$queue[i+1] = undefined;
		      }

		      lib$es6$promise$asap$$len = 0;
		    }

		    function lib$es6$promise$asap$$attemptVertex() {
		      try {
		        var r = require;
		        var vertx = __webpack_require__(19);
		        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
		        return lib$es6$promise$asap$$useVertxTimer();
		      } catch(e) {
		        return lib$es6$promise$asap$$useSetTimeout();
		      }
		    }

		    var lib$es6$promise$asap$$scheduleFlush;
		    // Decide what async method to use to triggering processing of queued callbacks:
		    if (lib$es6$promise$asap$$isNode) {
		      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
		    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
		      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
		    } else if (lib$es6$promise$asap$$isWorker) {
		      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
		    } else if (lib$es6$promise$asap$$browserWindow === undefined && "function" === 'function') {
		      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertex();
		    } else {
		      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
		    }

		    function lib$es6$promise$$internal$$noop() {}

		    var lib$es6$promise$$internal$$PENDING   = void 0;
		    var lib$es6$promise$$internal$$FULFILLED = 1;
		    var lib$es6$promise$$internal$$REJECTED  = 2;

		    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

		    function lib$es6$promise$$internal$$selfFullfillment() {
		      return new TypeError("You cannot resolve a promise with itself");
		    }

		    function lib$es6$promise$$internal$$cannotReturnOwn() {
		      return new TypeError('A promises callback cannot return that same promise.');
		    }

		    function lib$es6$promise$$internal$$getThen(promise) {
		      try {
		        return promise.then;
		      } catch(error) {
		        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
		        return lib$es6$promise$$internal$$GET_THEN_ERROR;
		      }
		    }

		    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
		      try {
		        then.call(value, fulfillmentHandler, rejectionHandler);
		      } catch(e) {
		        return e;
		      }
		    }

		    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
		       lib$es6$promise$asap$$asap(function(promise) {
		        var sealed = false;
		        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
		          if (sealed) { return; }
		          sealed = true;
		          if (thenable !== value) {
		            lib$es6$promise$$internal$$resolve(promise, value);
		          } else {
		            lib$es6$promise$$internal$$fulfill(promise, value);
		          }
		        }, function(reason) {
		          if (sealed) { return; }
		          sealed = true;

		          lib$es6$promise$$internal$$reject(promise, reason);
		        }, 'Settle: ' + (promise._label || ' unknown promise'));

		        if (!sealed && error) {
		          sealed = true;
		          lib$es6$promise$$internal$$reject(promise, error);
		        }
		      }, promise);
		    }

		    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
		      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
		        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
		      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
		        lib$es6$promise$$internal$$reject(promise, thenable._result);
		      } else {
		        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
		          lib$es6$promise$$internal$$resolve(promise, value);
		        }, function(reason) {
		          lib$es6$promise$$internal$$reject(promise, reason);
		        });
		      }
		    }

		    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
		      if (maybeThenable.constructor === promise.constructor) {
		        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
		      } else {
		        var then = lib$es6$promise$$internal$$getThen(maybeThenable);

		        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
		          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
		        } else if (then === undefined) {
		          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
		        } else if (lib$es6$promise$utils$$isFunction(then)) {
		          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
		        } else {
		          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
		        }
		      }
		    }

		    function lib$es6$promise$$internal$$resolve(promise, value) {
		      if (promise === value) {
		        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFullfillment());
		      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
		        lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
		      } else {
		        lib$es6$promise$$internal$$fulfill(promise, value);
		      }
		    }

		    function lib$es6$promise$$internal$$publishRejection(promise) {
		      if (promise._onerror) {
		        promise._onerror(promise._result);
		      }

		      lib$es6$promise$$internal$$publish(promise);
		    }

		    function lib$es6$promise$$internal$$fulfill(promise, value) {
		      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }

		      promise._result = value;
		      promise._state = lib$es6$promise$$internal$$FULFILLED;

		      if (promise._subscribers.length !== 0) {
		        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
		      }
		    }

		    function lib$es6$promise$$internal$$reject(promise, reason) {
		      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
		      promise._state = lib$es6$promise$$internal$$REJECTED;
		      promise._result = reason;

		      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
		    }

		    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
		      var subscribers = parent._subscribers;
		      var length = subscribers.length;

		      parent._onerror = null;

		      subscribers[length] = child;
		      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
		      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;

		      if (length === 0 && parent._state) {
		        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
		      }
		    }

		    function lib$es6$promise$$internal$$publish(promise) {
		      var subscribers = promise._subscribers;
		      var settled = promise._state;

		      if (subscribers.length === 0) { return; }

		      var child, callback, detail = promise._result;

		      for (var i = 0; i < subscribers.length; i += 3) {
		        child = subscribers[i];
		        callback = subscribers[i + settled];

		        if (child) {
		          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
		        } else {
		          callback(detail);
		        }
		      }

		      promise._subscribers.length = 0;
		    }

		    function lib$es6$promise$$internal$$ErrorObject() {
		      this.error = null;
		    }

		    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

		    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
		      try {
		        return callback(detail);
		      } catch(e) {
		        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
		        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
		      }
		    }

		    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
		      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
		          value, error, succeeded, failed;

		      if (hasCallback) {
		        value = lib$es6$promise$$internal$$tryCatch(callback, detail);

		        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
		          failed = true;
		          error = value.error;
		          value = null;
		        } else {
		          succeeded = true;
		        }

		        if (promise === value) {
		          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
		          return;
		        }

		      } else {
		        value = detail;
		        succeeded = true;
		      }

		      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
		        // noop
		      } else if (hasCallback && succeeded) {
		        lib$es6$promise$$internal$$resolve(promise, value);
		      } else if (failed) {
		        lib$es6$promise$$internal$$reject(promise, error);
		      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
		        lib$es6$promise$$internal$$fulfill(promise, value);
		      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
		        lib$es6$promise$$internal$$reject(promise, value);
		      }
		    }

		    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
		      try {
		        resolver(function resolvePromise(value){
		          lib$es6$promise$$internal$$resolve(promise, value);
		        }, function rejectPromise(reason) {
		          lib$es6$promise$$internal$$reject(promise, reason);
		        });
		      } catch(e) {
		        lib$es6$promise$$internal$$reject(promise, e);
		      }
		    }

		    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
		      var enumerator = this;

		      enumerator._instanceConstructor = Constructor;
		      enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);

		      if (enumerator._validateInput(input)) {
		        enumerator._input     = input;
		        enumerator.length     = input.length;
		        enumerator._remaining = input.length;

		        enumerator._init();

		        if (enumerator.length === 0) {
		          lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
		        } else {
		          enumerator.length = enumerator.length || 0;
		          enumerator._enumerate();
		          if (enumerator._remaining === 0) {
		            lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
		          }
		        }
		      } else {
		        lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
		      }
		    }

		    lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function(input) {
		      return lib$es6$promise$utils$$isArray(input);
		    };

		    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
		      return new Error('Array Methods must be provided an Array');
		    };

		    lib$es6$promise$enumerator$$Enumerator.prototype._init = function() {
		      this._result = new Array(this.length);
		    };

		    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;

		    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
		      var enumerator = this;

		      var length  = enumerator.length;
		      var promise = enumerator.promise;
		      var input   = enumerator._input;

		      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
		        enumerator._eachEntry(input[i], i);
		      }
		    };

		    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
		      var enumerator = this;
		      var c = enumerator._instanceConstructor;

		      if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
		        if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
		          entry._onerror = null;
		          enumerator._settledAt(entry._state, i, entry._result);
		        } else {
		          enumerator._willSettleAt(c.resolve(entry), i);
		        }
		      } else {
		        enumerator._remaining--;
		        enumerator._result[i] = entry;
		      }
		    };

		    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
		      var enumerator = this;
		      var promise = enumerator.promise;

		      if (promise._state === lib$es6$promise$$internal$$PENDING) {
		        enumerator._remaining--;

		        if (state === lib$es6$promise$$internal$$REJECTED) {
		          lib$es6$promise$$internal$$reject(promise, value);
		        } else {
		          enumerator._result[i] = value;
		        }
		      }

		      if (enumerator._remaining === 0) {
		        lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
		      }
		    };

		    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
		      var enumerator = this;

		      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
		        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
		      }, function(reason) {
		        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
		      });
		    };
		    function lib$es6$promise$promise$all$$all(entries) {
		      return new lib$es6$promise$enumerator$$default(this, entries).promise;
		    }
		    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
		    function lib$es6$promise$promise$race$$race(entries) {
		      /*jshint validthis:true */
		      var Constructor = this;

		      var promise = new Constructor(lib$es6$promise$$internal$$noop);

		      if (!lib$es6$promise$utils$$isArray(entries)) {
		        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
		        return promise;
		      }

		      var length = entries.length;

		      function onFulfillment(value) {
		        lib$es6$promise$$internal$$resolve(promise, value);
		      }

		      function onRejection(reason) {
		        lib$es6$promise$$internal$$reject(promise, reason);
		      }

		      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
		        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
		      }

		      return promise;
		    }
		    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
		    function lib$es6$promise$promise$resolve$$resolve(object) {
		      /*jshint validthis:true */
		      var Constructor = this;

		      if (object && typeof object === 'object' && object.constructor === Constructor) {
		        return object;
		      }

		      var promise = new Constructor(lib$es6$promise$$internal$$noop);
		      lib$es6$promise$$internal$$resolve(promise, object);
		      return promise;
		    }
		    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
		    function lib$es6$promise$promise$reject$$reject(reason) {
		      /*jshint validthis:true */
		      var Constructor = this;
		      var promise = new Constructor(lib$es6$promise$$internal$$noop);
		      lib$es6$promise$$internal$$reject(promise, reason);
		      return promise;
		    }
		    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;

		    var lib$es6$promise$promise$$counter = 0;

		    function lib$es6$promise$promise$$needsResolver() {
		      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
		    }

		    function lib$es6$promise$promise$$needsNew() {
		      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
		    }

		    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
		    /**
		      Promise objects represent the eventual result of an asynchronous operation. The
		      primary way of interacting with a promise is through its `then` method, which
		      registers callbacks to receive either a promise's eventual value or the reason
		      why the promise cannot be fulfilled.

		      Terminology
		      -----------

		      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
		      - `thenable` is an object or function that defines a `then` method.
		      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
		      - `exception` is a value that is thrown using the throw statement.
		      - `reason` is a value that indicates why a promise was rejected.
		      - `settled` the final resting state of a promise, fulfilled or rejected.

		      A promise can be in one of three states: pending, fulfilled, or rejected.

		      Promises that are fulfilled have a fulfillment value and are in the fulfilled
		      state.  Promises that are rejected have a rejection reason and are in the
		      rejected state.  A fulfillment value is never a thenable.

		      Promises can also be said to *resolve* a value.  If this value is also a
		      promise, then the original promise's settled state will match the value's
		      settled state.  So a promise that *resolves* a promise that rejects will
		      itself reject, and a promise that *resolves* a promise that fulfills will
		      itself fulfill.


		      Basic Usage:
		      ------------

		      ```js
		      var promise = new Promise(function(resolve, reject) {
		        // on success
		        resolve(value);

		        // on failure
		        reject(reason);
		      });

		      promise.then(function(value) {
		        // on fulfillment
		      }, function(reason) {
		        // on rejection
		      });
		      ```

		      Advanced Usage:
		      ---------------

		      Promises shine when abstracting away asynchronous interactions such as
		      `XMLHttpRequest`s.

		      ```js
		      function getJSON(url) {
		        return new Promise(function(resolve, reject){
		          var xhr = new XMLHttpRequest();

		          xhr.open('GET', url);
		          xhr.onreadystatechange = handler;
		          xhr.responseType = 'json';
		          xhr.setRequestHeader('Accept', 'application/json');
		          xhr.send();

		          function handler() {
		            if (this.readyState === this.DONE) {
		              if (this.status === 200) {
		                resolve(this.response);
		              } else {
		                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
		              }
		            }
		          };
		        });
		      }

		      getJSON('/posts.json').then(function(json) {
		        // on fulfillment
		      }, function(reason) {
		        // on rejection
		      });
		      ```

		      Unlike callbacks, promises are great composable primitives.

		      ```js
		      Promise.all([
		        getJSON('/posts'),
		        getJSON('/comments')
		      ]).then(function(values){
		        values[0] // => postsJSON
		        values[1] // => commentsJSON

		        return values;
		      });
		      ```

		      @class Promise
		      @param {function} resolver
		      Useful for tooling.
		      @constructor
		    */
		    function lib$es6$promise$promise$$Promise(resolver) {
		      this._id = lib$es6$promise$promise$$counter++;
		      this._state = undefined;
		      this._result = undefined;
		      this._subscribers = [];

		      if (lib$es6$promise$$internal$$noop !== resolver) {
		        if (!lib$es6$promise$utils$$isFunction(resolver)) {
		          lib$es6$promise$promise$$needsResolver();
		        }

		        if (!(this instanceof lib$es6$promise$promise$$Promise)) {
		          lib$es6$promise$promise$$needsNew();
		        }

		        lib$es6$promise$$internal$$initializePromise(this, resolver);
		      }
		    }

		    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
		    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
		    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
		    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
		    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
		    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
		    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;

		    lib$es6$promise$promise$$Promise.prototype = {
		      constructor: lib$es6$promise$promise$$Promise,

		    /**
		      The primary way of interacting with a promise is through its `then` method,
		      which registers callbacks to receive either a promise's eventual value or the
		      reason why the promise cannot be fulfilled.

		      ```js
		      findUser().then(function(user){
		        // user is available
		      }, function(reason){
		        // user is unavailable, and you are given the reason why
		      });
		      ```

		      Chaining
		      --------

		      The return value of `then` is itself a promise.  This second, 'downstream'
		      promise is resolved with the return value of the first promise's fulfillment
		      or rejection handler, or rejected if the handler throws an exception.

		      ```js
		      findUser().then(function (user) {
		        return user.name;
		      }, function (reason) {
		        return 'default name';
		      }).then(function (userName) {
		        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
		        // will be `'default name'`
		      });

		      findUser().then(function (user) {
		        throw new Error('Found user, but still unhappy');
		      }, function (reason) {
		        throw new Error('`findUser` rejected and we're unhappy');
		      }).then(function (value) {
		        // never reached
		      }, function (reason) {
		        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
		        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
		      });
		      ```
		      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

		      ```js
		      findUser().then(function (user) {
		        throw new PedagogicalException('Upstream error');
		      }).then(function (value) {
		        // never reached
		      }).then(function (value) {
		        // never reached
		      }, function (reason) {
		        // The `PedgagocialException` is propagated all the way down to here
		      });
		      ```

		      Assimilation
		      ------------

		      Sometimes the value you want to propagate to a downstream promise can only be
		      retrieved asynchronously. This can be achieved by returning a promise in the
		      fulfillment or rejection handler. The downstream promise will then be pending
		      until the returned promise is settled. This is called *assimilation*.

		      ```js
		      findUser().then(function (user) {
		        return findCommentsByAuthor(user);
		      }).then(function (comments) {
		        // The user's comments are now available
		      });
		      ```

		      If the assimliated promise rejects, then the downstream promise will also reject.

		      ```js
		      findUser().then(function (user) {
		        return findCommentsByAuthor(user);
		      }).then(function (comments) {
		        // If `findCommentsByAuthor` fulfills, we'll have the value here
		      }, function (reason) {
		        // If `findCommentsByAuthor` rejects, we'll have the reason here
		      });
		      ```

		      Simple Example
		      --------------

		      Synchronous Example

		      ```javascript
		      var result;

		      try {
		        result = findResult();
		        // success
		      } catch(reason) {
		        // failure
		      }
		      ```

		      Errback Example

		      ```js
		      findResult(function(result, err){
		        if (err) {
		          // failure
		        } else {
		          // success
		        }
		      });
		      ```

		      Promise Example;

		      ```javascript
		      findResult().then(function(result){
		        // success
		      }, function(reason){
		        // failure
		      });
		      ```

		      Advanced Example
		      --------------

		      Synchronous Example

		      ```javascript
		      var author, books;

		      try {
		        author = findAuthor();
		        books  = findBooksByAuthor(author);
		        // success
		      } catch(reason) {
		        // failure
		      }
		      ```

		      Errback Example

		      ```js

		      function foundBooks(books) {

		      }

		      function failure(reason) {

		      }

		      findAuthor(function(author, err){
		        if (err) {
		          failure(err);
		          // failure
		        } else {
		          try {
		            findBoooksByAuthor(author, function(books, err) {
		              if (err) {
		                failure(err);
		              } else {
		                try {
		                  foundBooks(books);
		                } catch(reason) {
		                  failure(reason);
		                }
		              }
		            });
		          } catch(error) {
		            failure(err);
		          }
		          // success
		        }
		      });
		      ```

		      Promise Example;

		      ```javascript
		      findAuthor().
		        then(findBooksByAuthor).
		        then(function(books){
		          // found books
		      }).catch(function(reason){
		        // something went wrong
		      });
		      ```

		      @method then
		      @param {Function} onFulfilled
		      @param {Function} onRejected
		      Useful for tooling.
		      @return {Promise}
		    */
		      then: function(onFulfillment, onRejection) {
		        var parent = this;
		        var state = parent._state;

		        if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
		          return this;
		        }

		        var child = new this.constructor(lib$es6$promise$$internal$$noop);
		        var result = parent._result;

		        if (state) {
		          var callback = arguments[state - 1];
		          lib$es6$promise$asap$$asap(function(){
		            lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
		          });
		        } else {
		          lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
		        }

		        return child;
		      },

		    /**
		      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
		      as the catch block of a try/catch statement.

		      ```js
		      function findAuthor(){
		        throw new Error('couldn't find that author');
		      }

		      // synchronous
		      try {
		        findAuthor();
		      } catch(reason) {
		        // something went wrong
		      }

		      // async with promises
		      findAuthor().catch(function(reason){
		        // something went wrong
		      });
		      ```

		      @method catch
		      @param {Function} onRejection
		      Useful for tooling.
		      @return {Promise}
		    */
		      'catch': function(onRejection) {
		        return this.then(null, onRejection);
		      }
		    };
		    function lib$es6$promise$polyfill$$polyfill() {
		      var local;

		      if (typeof global !== 'undefined') {
		          local = global;
		      } else if (typeof self !== 'undefined') {
		          local = self;
		      } else {
		          try {
		              local = Function('return this')();
		          } catch (e) {
		              throw new Error('polyfill failed because global object is unavailable in this environment');
		          }
		      }

		      var P = local.Promise;

		      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
		        return;
		      }

		      local.Promise = lib$es6$promise$promise$$default;
		    }
		    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

		    var lib$es6$promise$umd$$ES6Promise = {
		      'Promise': lib$es6$promise$promise$$default,
		      'polyfill': lib$es6$promise$polyfill$$default
		    };

		    /* global define:true module:true window: true */
		    if ("function" === 'function' && __webpack_require__(20)['amd']) {
		      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return lib$es6$promise$umd$$ES6Promise; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		    } else if (typeof module !== 'undefined' && module['exports']) {
		      module['exports'] = lib$es6$promise$umd$$ES6Promise;
		    } else if (typeof this !== 'undefined') {
		      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
		    }

		    lib$es6$promise$polyfill$$default();
		}).call(this);


		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(17).setImmediate, (function() { return this; }()), __webpack_require__(18)(module)))

	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(8).nextTick;
		var apply = Function.prototype.apply;
		var slice = Array.prototype.slice;
		var immediateIds = {};
		var nextImmediateId = 0;

		// DOM APIs, for completeness

		exports.setTimeout = function() {
		  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
		};
		exports.setInterval = function() {
		  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
		};
		exports.clearTimeout =
		exports.clearInterval = function(timeout) { timeout.close(); };

		function Timeout(id, clearFn) {
		  this._id = id;
		  this._clearFn = clearFn;
		}
		Timeout.prototype.unref = Timeout.prototype.ref = function() {};
		Timeout.prototype.close = function() {
		  this._clearFn.call(window, this._id);
		};

		// Does not start the time, just sets up the members needed.
		exports.enroll = function(item, msecs) {
		  clearTimeout(item._idleTimeoutId);
		  item._idleTimeout = msecs;
		};

		exports.unenroll = function(item) {
		  clearTimeout(item._idleTimeoutId);
		  item._idleTimeout = -1;
		};

		exports._unrefActive = exports.active = function(item) {
		  clearTimeout(item._idleTimeoutId);

		  var msecs = item._idleTimeout;
		  if (msecs >= 0) {
		    item._idleTimeoutId = setTimeout(function onTimeout() {
		      if (item._onTimeout)
		        item._onTimeout();
		    }, msecs);
		  }
		};

		// That's not how node.js implements it but the exposed api is the same.
		exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
		  var id = nextImmediateId++;
		  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

		  immediateIds[id] = true;

		  nextTick(function onNextTick() {
		    if (immediateIds[id]) {
		      // fn.call() is faster so we optimize for the common use-case
		      // @see http://jsperf.com/call-apply-segu
		      if (args) {
		        fn.apply(null, args);
		      } else {
		        fn.call(null);
		      }
		      // Prevent ids from leaking
		      exports.clearImmediate(id);
		    }
		  });

		  return id;
		};

		exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
		  delete immediateIds[id];
		};
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17).setImmediate, __webpack_require__(17).clearImmediate))

	/***/ },
	/* 18 */
	/***/ function(module, exports) {

		module.exports = function(module) {
			if(!module.webpackPolyfill) {
				module.deprecate = function() {};
				module.paths = [];
				// module.parent = undefined by default
				module.children = [];
				module.webpackPolyfill = 1;
			}
			return module;
		}


	/***/ },
	/* 19 */
	/***/ function(module, exports) {

		/* (ignored) */

	/***/ },
	/* 20 */
	/***/ function(module, exports) {

		module.exports = function() { throw new Error("define cannot be used indirect"); };


	/***/ },
	/* 21 */
	/***/ function(module, exports) {

		'use strict';

		/**
		 * Syntactic sugar for invoking a function and expanding an array for arguments.
		 *
		 * Common use case would be to use `Function.prototype.apply`.
		 *
		 *  ```js
		 *  function f(x, y, z) {}
		 *  var args = [1, 2, 3];
		 *  f.apply(null, args);
		 *  ```
		 *
		 * With `spread` this example can be re-written.
		 *
		 *  ```js
		 *  spread(function(x, y, z) {})([1, 2, 3]);
		 *  ```
		 *
		 * @param {Function} callback
		 * @returns {Function}
		 */
		module.exports = function spread(callback) {
		  return function (arr) {
		    callback.apply(null, arr);
		  };
		};


	/***/ }
	/******/ ])
	});
	;

/***/ },

/***/ 425:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.configureStore = configureStore;

	var _redux = __webpack_require__(166);

	var _reduxThunk = __webpack_require__(426);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxLogger = __webpack_require__(427);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reduxRouter = __webpack_require__(224);

	var _history = __webpack_require__(428);

	var _reducers = __webpack_require__(433);

	var _routes = __webpack_require__(238);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)());

	var finalCreateStore = (0, _redux.compose)(middleware, (0, _reduxRouter.reduxReactRouter)({
		routes: _routes.routes,
		createHistory: _history.createHashHistory
	}))(_redux.createStore);

	function configureStore(initialState) {
		return finalCreateStore(_reducers.root, initialState);
	}

/***/ },

/***/ 426:
/***/ function(module, exports) {

	'use strict';

	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;

	  return function (next) {
	    return function (action) {
	      return typeof action === 'function' ? action(dispatch, getState) : next(action);
	    };
	  };
	}

	module.exports = thunkMiddleware;

/***/ },

/***/ 427:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};
	var pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};
	var formatTime = function formatTime(time) {
	  return " @ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};

	// Use the new performance api to get better precision if available
	var timer = typeof performance !== "undefined" && typeof performance.now === "function" ? performance : Date;

	/**
	 * Creates logger with followed options
	 *
	 * @namespace
	 * @property {object} options - options for logger
	 * @property {string} options.level - console[level]
	 * @property {boolean} options.duration - print duration of each action?
	 * @property {boolean} options.timestamp - print timestamp with each action?
	 * @property {object} options.colors - custom colors
	 * @property {object} options.logger - implementation of the `console` API
	 * @property {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @property {boolean} options.collapsed - is group collapsed?
	 * @property {boolean} options.predicate - condition which resolves logger behavior
	 * @property {function} options.stateTransformer - transform state before print
	 * @property {function} options.actionTransformer - transform action before print
	 * @property {function} options.errorTransformer - transform error before print
	 */

	function createLogger() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        var _options$level = options.level;
	        var level = _options$level === undefined ? "log" : _options$level;
	        var _options$logger = options.logger;
	        var logger = _options$logger === undefined ? window.console : _options$logger;
	        var _options$logErrors = options.logErrors;
	        var logErrors = _options$logErrors === undefined ? true : _options$logErrors;
	        var collapsed = options.collapsed;
	        var predicate = options.predicate;
	        var _options$duration = options.duration;
	        var duration = _options$duration === undefined ? false : _options$duration;
	        var _options$timestamp = options.timestamp;
	        var timestamp = _options$timestamp === undefined ? true : _options$timestamp;
	        var transformer = options.transformer;
	        var _options$stateTransfo = options.stateTransformer;
	        var // deprecated
	        stateTransformer = _options$stateTransfo === undefined ? function (state) {
	          return state;
	        } : _options$stateTransfo;
	        var _options$actionTransf = options.actionTransformer;
	        var actionTransformer = _options$actionTransf === undefined ? function (actn) {
	          return actn;
	        } : _options$actionTransf;
	        var _options$errorTransfo = options.errorTransformer;
	        var errorTransformer = _options$errorTransfo === undefined ? function (error) {
	          return error;
	        } : _options$errorTransfo;
	        var _options$colors = options.colors;
	        var colors = _options$colors === undefined ? {
	          title: function title() {
	            return "#000000";
	          },
	          prevState: function prevState() {
	            return "#9E9E9E";
	          },
	          action: function action() {
	            return "#03A9F4";
	          },
	          nextState: function nextState() {
	            return "#4CAF50";
	          },
	          error: function error() {
	            return "#F20404";
	          }
	        } : _options$colors;

	        // exit if console undefined

	        if (typeof logger === "undefined") {
	          return next(action);
	        }

	        // exit early if predicate function returns false
	        if (typeof predicate === "function" && !predicate(getState, action)) {
	          return next(action);
	        }

	        if (transformer) {
	          console.error("Option 'transformer' is deprecated, use stateTransformer instead");
	        }

	        var started = timer.now();
	        var prevState = stateTransformer(getState());

	        var formattedAction = actionTransformer(action);
	        var returnedValue = undefined;
	        var error = undefined;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }

	        var took = timer.now() - started;
	        var nextState = stateTransformer(getState());

	        // message
	        var time = new Date();
	        var isCollapsed = typeof collapsed === "function" ? collapsed(getState, action) : collapsed;

	        var formattedTime = formatTime(time);
	        var titleCSS = colors.title ? "color: " + colors.title(formattedAction) + ";" : null;
	        var title = "action " + formattedAction.type + (timestamp ? formattedTime : "") + (duration ? " in " + took.toFixed(2) + " ms" : "");

	        // render
	        try {
	          if (isCollapsed) {
	            if (colors.title) logger.groupCollapsed("%c " + title, titleCSS);else logger.groupCollapsed(title);
	          } else {
	            if (colors.title) logger.group("%c " + title, titleCSS);else logger.group(title);
	          }
	        } catch (e) {
	          logger.log(title);
	        }

	        if (colors.prevState) logger[level]("%c prev state", "color: " + colors.prevState(prevState) + "; font-weight: bold", prevState);else logger[level]("prev state", prevState);

	        if (colors.action) logger[level]("%c action", "color: " + colors.action(formattedAction) + "; font-weight: bold", formattedAction);else logger[level]("action", formattedAction);

	        if (error) {
	          if (colors.error) logger[level]("%c error", "color: " + colors.error(error, prevState) + "; font-weight: bold", error);else logger[level]("error", error);
	        } else {
	          if (colors.nextState) logger[level]("%c next state", "color: " + colors.nextState(nextState) + "; font-weight: bold", nextState);else logger[level]("next state", nextState);
	        }

	        try {
	          logger.groupEnd();
	        } catch (e) {
	          logger.log("—— log end ——");
	        }

	        if (error) throw error;
	        return returnedValue;
	      };
	    };
	  };
	}

	exports.default = createLogger;
	module.exports = exports['default'];

/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var redux_router_1 = __webpack_require__(224);
	var redux_1 = __webpack_require__(166);
	var actions_1 = __webpack_require__(318);
	function auth(state, action) {
	    switch (action.type) {
	        case actions_1.ActionType.SIGNIN:
	        case actions_1.ActionType.SIGNOUT:
	            return {
	                processing: true
	            };
	        case actions_1.ActionType.SIGNIN_SUCCESS:
	            return {
	                authorized: true
	            };
	        case actions_1.ActionType.SIGNOUT_SUCCESS:
	            return {
	                authorized: false
	            };
	        case actions_1.ActionType.SHOW_GLOBAL_ERROR:
	            return {};
	        default:
	            return state || {};
	    }
	}
	function error(state, action) {
	    switch (action.type) {
	        case actions_1.ActionType.SHOW_GLOBAL_ERROR:
	            return action.payload.error;
	        default:
	            return state || null;
	    }
	}
	function loaded(loaded, action) {
	    switch (action.type) {
	        case actions_1.ActionType.APP_LOADED:
	            return true;
	        default:
	            return loaded || false;
	    }
	}
	function isLeftNavOpen(open, action) {
	    switch (action.type) {
	        case actions_1.ActionType.TOGGLE_LEFT_NAV:
	            return typeof action.payload === 'undefined' ? !open : action.payload;
	        default:
	            return open || false;
	    }
	}
	exports.root = redux_1.combineReducers({
	    app: redux_1.combineReducers({
	        auth: auth,
	        loaded: loaded,
	        error: error
	    }),
	    router: redux_router_1.routerStateReducer,
	    ui: redux_1.combineReducers({
	        isLeftNavOpen: isLeftNavOpen
	    })
	});

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(435);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(323)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./common.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./common.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(322)();
	// imports
	exports.i(__webpack_require__(436), "");

	// module
	exports.push([module.id, "body,\nhtml,\n#app {\n  height: 100%; }\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(0, 0, 0, 0.87); }\n\n* {\n  box-sizing: border-box;\n  text-rendering: optimizeLegibility; }\n\na, button, img {\n  -webkit-tap-highlight-color: transparent; }\n\ninput:-webkit-autofill,\ntextarea:-webkit-autofill,\nselect:-webkit-autofill {\n  background-color: transparent !important; }\n", ""]);

	// exports


/***/ },

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(322)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  box-sizing: content-box; /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n", ""]);

	// exports


/***/ }

});