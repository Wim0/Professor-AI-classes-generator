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
exports.id = "pages/api/generate-gifts";
exports.ids = ["pages/api/generate-gifts"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate-gifts.js":
/*!*************************************!*\
  !*** ./pages/api/generate-gifts.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"OpenAI API key not configured, please follow instructions in README.md\"\n            }\n        });\n        return;\n    }\n    try {\n        const { priceMin , priceMax , gender , age , hobbies  } = req.body;\n        const completion = await openai.createCompletion({\n            model: \"text-davinci-003\",\n            prompt: generatePrompt(priceMin, priceMax, gender, age, hobbies),\n            temperature: 0.6,\n            max_tokens: 2048\n        });\n        res.status(200).json({\n            result: completion.data.choices[0].text\n        });\n    } catch (error) {\n        // Consider adjusting the error handling logic for your use case\n        if (error.response) {\n            console.error(error.response.status, error.response.data);\n            res.status(error.response.status).json(error.response.data);\n        } else {\n            console.error(`Error with OpenAI API request: ${error.message}`);\n            res.status(500).json({\n                error: {\n                    message: \"An error occurred during your request.\"\n                }\n            });\n        }\n    }\n}\n//Function that generates the prompt\nfunction generatePrompt(priceMin, priceMax, gender, age, hobbies) {\n    return `suggest 3 Christmas gift ideas between ${priceMin}$ and ${priceMax}$ for a ${age} years old ${gender} that is into ${hobbies}.`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUtZ2lmdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUNwQ0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3RDO0FBQ0EsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFN0IsNkJBQWUsMENBQWdCTSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNyQyxJQUFJLENBQUNQLGNBQWNDLE1BQU0sRUFBRTtRQUN2Qk0sSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNqQkMsT0FBTztnQkFDSEMsU0FBUztZQUNiO1FBQ0o7UUFDQTtJQUNKLENBQUM7SUFFRCxJQUFJO1FBQ0EsTUFBTSxFQUFFQyxTQUFRLEVBQUVDLFNBQVEsRUFBRUMsT0FBTSxFQUFFQyxJQUFHLEVBQUVDLFFBQU8sRUFBRSxHQUFHVixJQUFJVyxJQUFJO1FBQzdELE1BQU1DLGFBQWEsTUFBTWIsT0FBT2MsZ0JBQWdCLENBQUM7WUFDN0NDLE9BQU87WUFDUEMsUUFBUUMsZUFBZVYsVUFBVUMsVUFBVUMsUUFBUUMsS0FBS0M7WUFDeERPLGFBQWE7WUFDYkMsWUFBWTtRQUNoQjtRQUNBakIsSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFZ0IsUUFBUVAsV0FBV1EsSUFBSSxDQUFDQyxPQUFPLENBQUMsRUFBRSxDQUFDQyxJQUFJO1FBQUM7SUFFbkUsRUFBRSxPQUFPbEIsT0FBTztRQUNaLGdFQUFnRTtRQUNoRSxJQUFJQSxNQUFNbUIsUUFBUSxFQUFFO1lBQ2hCQyxRQUFRcEIsS0FBSyxDQUFDQSxNQUFNbUIsUUFBUSxDQUFDckIsTUFBTSxFQUFFRSxNQUFNbUIsUUFBUSxDQUFDSCxJQUFJO1lBQ3hEbkIsSUFBSUMsTUFBTSxDQUFDRSxNQUFNbUIsUUFBUSxDQUFDckIsTUFBTSxFQUFFQyxJQUFJLENBQUNDLE1BQU1tQixRQUFRLENBQUNILElBQUk7UUFDOUQsT0FBTztZQUNISSxRQUFRcEIsS0FBSyxDQUFDLENBQUMsK0JBQStCLEVBQUVBLE1BQU1DLE9BQU8sQ0FBQyxDQUFDO1lBQy9ESixJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUNqQkMsT0FBTztvQkFDSEMsU0FBUztnQkFDYjtZQUNKO1FBQ0osQ0FBQztJQUNMO0FBQ0osQ0FBQztBQUVELG9DQUFvQztBQUNwQyxTQUFTVyxlQUFlVixRQUFRLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxHQUFHLEVBQUVDLE9BQU8sRUFBRTtJQUM5RCxPQUFPLENBQUMsdUNBQXVDLEVBQUVKLFNBQVMsTUFBTSxFQUFFQyxTQUFTLFFBQVEsRUFBRUUsSUFBSSxXQUFXLEVBQUVELE9BQU8sY0FBYyxFQUFFRSxRQUFRLENBQUMsQ0FBQztBQUMzSSIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9hcGkvZ2VuZXJhdGUtZ2lmdHMuanM/ZmIxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XHJcblxyXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xyXG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcclxufSk7XHJcbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICAgIGlmICghY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIk9wZW5BSSBBUEkga2V5IG5vdCBjb25maWd1cmVkLCBwbGVhc2UgZm9sbG93IGluc3RydWN0aW9ucyBpbiBSRUFETUUubWRcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgcHJpY2VNaW4sIHByaWNlTWF4LCBnZW5kZXIsIGFnZSwgaG9iYmllcyB9ID0gcmVxLmJvZHk7XHJcbiAgICAgICAgY29uc3QgY29tcGxldGlvbiA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHtcclxuICAgICAgICAgICAgbW9kZWw6ICd0ZXh0LWRhdmluY2ktMDAzJyxcclxuICAgICAgICAgICAgcHJvbXB0OiBnZW5lcmF0ZVByb21wdChwcmljZU1pbiwgcHJpY2VNYXgsIGdlbmRlciwgYWdlLCBob2JiaWVzKSxcclxuICAgICAgICAgICAgdGVtcGVyYXR1cmU6IDAuNixcclxuICAgICAgICAgICAgbWF4X3Rva2VuczogMjA0OCxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHJlc3VsdDogY29tcGxldGlvbi5kYXRhLmNob2ljZXNbMF0udGV4dCB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIENvbnNpZGVyIGFkanVzdGluZyB0aGUgZXJyb3IgaGFuZGxpbmcgbG9naWMgZm9yIHlvdXIgdXNlIGNhc2VcclxuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5yZXNwb25zZS5zdGF0dXMsIGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKGVycm9yLnJlc3BvbnNlLnN0YXR1cykuanNvbihlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aXRoIE9wZW5BSSBBUEkgcmVxdWVzdDogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgeW91ciByZXF1ZXN0LicsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy9GdW5jdGlvbiB0aGF0IGdlbmVyYXRlcyB0aGUgcHJvbXB0XHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJvbXB0KHByaWNlTWluLCBwcmljZU1heCwgZ2VuZGVyLCBhZ2UsIGhvYmJpZXMpIHtcclxuICAgIHJldHVybiBgc3VnZ2VzdCAzIENocmlzdG1hcyBnaWZ0IGlkZWFzIGJldHdlZW4gJHtwcmljZU1pbn0kIGFuZCAke3ByaWNlTWF4fSQgZm9yIGEgJHthZ2V9IHllYXJzIG9sZCAke2dlbmRlcn0gdGhhdCBpcyBpbnRvICR7aG9iYmllc30uYDtcclxufVxyXG4iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIiwicHJpY2VNaW4iLCJwcmljZU1heCIsImdlbmRlciIsImFnZSIsImhvYmJpZXMiLCJib2R5IiwiY29tcGxldGlvbiIsImNyZWF0ZUNvbXBsZXRpb24iLCJtb2RlbCIsInByb21wdCIsImdlbmVyYXRlUHJvbXB0IiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwicmVzdWx0IiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0IiwicmVzcG9uc2UiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate-gifts.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate-gifts.js"));
module.exports = __webpack_exports__;

})();