"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./db.js":
/*!***************!*\
  !*** ./db.js ***!
  \***************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// db.js\n\nconst { Pool  } = __webpack_require__(/*! pg */ \"pg\");\nconst pool = new Pool({\n    user: \"postgres\",\n    host: \"localhost\",\n    database: \"Retail\",\n    password: \"1234\",\n    port: 5432\n});\nasync function getProducts() {\n    const client = await pool.connect();\n    try {\n        const result = await client.query(\"SELECT * FROM products\");\n        return result.rows;\n    } finally{\n        client.release();\n    }\n}\nmodule.exports = {\n    getProducts\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxRQUFRO0FBRVI7QUFBQSxNQUFNLEVBQUVBLElBQUksR0FBRSxHQUFHQyxtQkFBTyxDQUFDLGNBQUksQ0FBQztBQUU5QixNQUFNQyxJQUFJLEdBQUcsSUFBSUYsSUFBSSxDQUFDO0lBQ3BCRyxJQUFJLEVBQUUsVUFBVTtJQUNoQkMsSUFBSSxFQUFFLFdBQVc7SUFDakJDLFFBQVEsRUFBRSxRQUFRO0lBQ2xCQyxRQUFRLEVBQUUsTUFBTTtJQUNoQkMsSUFBSSxFQUFFLElBQUk7Q0FDWCxDQUFDO0FBRUYsZUFBZUMsV0FBVyxHQUFHO0lBQzNCLE1BQU1DLE1BQU0sR0FBRyxNQUFNUCxJQUFJLENBQUNRLE9BQU8sRUFBRTtJQUNuQyxJQUFJO1FBQ0YsTUFBTUMsTUFBTSxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0csS0FBSyxDQUFDLHdCQUF3QixDQUFDO1FBQzNELE9BQU9ELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDO0lBQ3JCLFNBQVU7UUFDUkosTUFBTSxDQUFDSyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0FBQ0gsQ0FBQztBQUVEQyxNQUFNLENBQUNDLE9BQU8sR0FBRztJQUFFUixXQUFXO0NBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BwaW5nLWNhcnQvLi9kYi5qcz81NjY1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGRiLmpzXHJcblxyXG5jb25zdCB7IFBvb2wgfSA9IHJlcXVpcmUoJ3BnJyk7XHJcblxyXG5jb25zdCBwb29sID0gbmV3IFBvb2woe1xyXG4gIHVzZXI6ICdwb3N0Z3JlcycsXHJcbiAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgZGF0YWJhc2U6ICdSZXRhaWwnLFxyXG4gIHBhc3N3b3JkOiAnMTIzNCcsXHJcbiAgcG9ydDogNTQzMiwgLy8gRGVmYXVsdCBQb3N0Z3JlU1FMIHBvcnRcclxufSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0cygpIHtcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBwb29sLmNvbm5lY3QoKTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIHByb2R1Y3RzJyk7XHJcbiAgICByZXR1cm4gcmVzdWx0LnJvd3M7XHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIGNsaWVudC5yZWxlYXNlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgZ2V0UHJvZHVjdHMgfTtcclxuIl0sIm5hbWVzIjpbIlBvb2wiLCJyZXF1aXJlIiwicG9vbCIsInVzZXIiLCJob3N0IiwiZGF0YWJhc2UiLCJwYXNzd29yZCIsInBvcnQiLCJnZXRQcm9kdWN0cyIsImNsaWVudCIsImNvbm5lY3QiLCJyZXN1bHQiLCJxdWVyeSIsInJvd3MiLCJyZWxlYXNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./db.js\n");

/***/ }),

/***/ "(api)/./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_db__WEBPACK_IMPORTED_MODULE_0__);\n// pages/api/products.js\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const products = await (0,_db__WEBPACK_IMPORTED_MODULE_0__.getProducts)();\n            res.status(200).json(products);\n        } catch (error) {\n            console.error(\"Error fetching products:\", error);\n            res.status(500).json({\n                message: \"Internal server error\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0JBQXdCO0FBRWU7QUFFeEIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsSUFBSTtZQUNGLE1BQU1DLFFBQVEsR0FBRyxNQUFNTCxnREFBVyxFQUFFO1lBQ3BDRyxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRixRQUFRLENBQUMsQ0FBQztRQUNqQyxFQUFFLE9BQU9HLEtBQUssRUFBRTtZQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQywwQkFBMEIsRUFBRUEsS0FBSyxDQUFDLENBQUM7WUFDakRMLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVHLE9BQU8sRUFBRSx1QkFBdUI7YUFBRSxDQUFDLENBQUM7UUFDN0QsQ0FBQztJQUNILE9BQU87UUFDTFAsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRyxPQUFPLEVBQUUsb0JBQW9CO1NBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC8uL3BhZ2VzL2FwaS9wcm9kdWN0cy5qcz80OWNiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9wcm9kdWN0cy5qc1xuXG5pbXBvcnQgeyBnZXRQcm9kdWN0cyB9IGZyb20gJy4uLy4uL2RiJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBnZXRQcm9kdWN0cygpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocHJvZHVjdHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0czonLCBlcnJvcik7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0UHJvZHVjdHMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicHJvZHVjdHMiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/products.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products.js"));
module.exports = __webpack_exports__;

})();