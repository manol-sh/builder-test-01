exports.id = 883;
exports.ids = [883];
exports.modules = {

/***/ 448:
/***/ ((module) => {

// using module.exports here so gatsby-config can read it
module.exports={// TODO: Replace next line with your own public API key
builderAPIKey:"d4173130c72d466386720bb5a107ae34"};

/***/ }),

/***/ 429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   NotFound: () => (/* binding */ NotFound),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1359);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8202);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(448);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);
const pageStyles={color:'#232129',padding:'96px',fontFamily:'-apple-system, Roboto, sans-serif, serif'};const headingStyles={marginTop:0,marginBottom:64,maxWidth:320};const paragraphStyles={marginBottom:48};const codeStyles={color:'#8A6534',padding:4,backgroundColor:'#FFF4DB',fontSize:'1.25rem',borderRadius:4};_builder_io_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.init((_config__WEBPACK_IMPORTED_MODULE_3___default().builderAPIKey));const NotFoundPage=()=>{const[notFound,setNotFound]=react__WEBPACK_IMPORTED_MODULE_0__.useState(false);// modelName is page by default
return notFound?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NotFound,null)// Your 404 content
:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_builder_io_react__WEBPACK_IMPORTED_MODULE_2__/* .BuilderComponent */ .VD,{model:"page",contentLoaded:content=>{if(!content){setNotFound(true);}}});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);const NotFound=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{style:pageStyles},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{style:headingStyles},"Page not found"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{style:paragraphStyles},"Sorry \uD83D\uDE14, we couldn\u2019t find what you were looking for.",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null), false?/*#__PURE__*/0:null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:"/"},"Go home"),"."));};// export default NotFoundPage;
const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,"Not found");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map