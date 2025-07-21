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
exports.id = "app/api/claim-history/route";
exports.ids = ["app/api/claim-history/route"];
exports.modules = {

/***/ "(rsc)/./app/api/claim-history/route.ts":
/*!****************************************!*\
  !*** ./app/api/claim-history/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MONGODB_URI = process.env.MONGODB_URI || \"mongodb://localhost:27017\";\nconst DB_NAME = \"leaderboard\";\nlet client = null;\nasync function getMongoClient() {\n    if (!client) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient(MONGODB_URI);\n        await client.connect();\n    }\n    return client;\n}\n// GET - Fetch claim history\nasync function GET() {\n    try {\n        const mongoClient = await getMongoClient();\n        const db = mongoClient.db(DB_NAME);\n        const history = await db.collection(\"claimHistory\").find({}).sort({\n            timestamp: -1\n        }).limit(50).toArray();\n        const historyWithStringIds = history.map((record)=>({\n                ...record,\n                _id: record._id.toString()\n            }));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(historyWithStringIds);\n    } catch (error) {\n        console.error(\"Error fetching claim history:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch claim history\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NsYWltLWhpc3Rvcnkvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUNMO0FBRXJDLE1BQU1FLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVyxJQUFJO0FBQy9DLE1BQU1HLFVBQVU7QUFFaEIsSUFBSUMsU0FBNkI7QUFFakMsZUFBZUM7SUFDYixJQUFJLENBQUNELFFBQVE7UUFDWEEsU0FBUyxJQUFJTCxnREFBV0EsQ0FBQ0M7UUFDekIsTUFBTUksT0FBT0UsT0FBTztJQUN0QjtJQUNBLE9BQU9GO0FBQ1Q7QUFFQSw0QkFBNEI7QUFDckIsZUFBZUc7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLGNBQWMsTUFBTUg7UUFDMUIsTUFBTUksS0FBS0QsWUFBWUMsRUFBRSxDQUFDTjtRQUUxQixNQUFNTyxVQUFVLE1BQU1ELEdBQUdFLFVBQVUsQ0FBQyxnQkFBZ0JDLElBQUksQ0FBQyxDQUFDLEdBQUdDLElBQUksQ0FBQztZQUFFQyxXQUFXLENBQUM7UUFBRSxHQUFHQyxLQUFLLENBQUMsSUFBSUMsT0FBTztRQUV0RyxNQUFNQyx1QkFBdUJQLFFBQVFRLEdBQUcsQ0FBQyxDQUFDQyxTQUFZO2dCQUNwRCxHQUFHQSxNQUFNO2dCQUNUQyxLQUFLRCxPQUFPQyxHQUFHLENBQUNDLFFBQVE7WUFDMUI7UUFFQSxPQUFPdkIscURBQVlBLENBQUN3QixJQUFJLENBQUNMO0lBQzNCLEVBQUUsT0FBT00sT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsaUNBQWlDQTtRQUMvQyxPQUFPekIscURBQVlBLENBQUN3QixJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFnQyxHQUFHO1lBQUVFLFFBQVE7UUFBSTtJQUNyRjtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGtpbW15XFxEb3dubG9hZHNcXGxlYWRlcmJvYXJkLWFwcFxcYXBwXFxhcGlcXGNsYWltLWhpc3RvcnlcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCJcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSB8fCBcIm1vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTdcIlxuY29uc3QgREJfTkFNRSA9IFwibGVhZGVyYm9hcmRcIlxuXG5sZXQgY2xpZW50OiBNb25nb0NsaWVudCB8IG51bGwgPSBudWxsXG5cbmFzeW5jIGZ1bmN0aW9uIGdldE1vbmdvQ2xpZW50KCkge1xuICBpZiAoIWNsaWVudCkge1xuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChNT05HT0RCX1VSSSlcbiAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpXG4gIH1cbiAgcmV0dXJuIGNsaWVudFxufVxuXG4vLyBHRVQgLSBGZXRjaCBjbGFpbSBoaXN0b3J5XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICB0cnkge1xuICAgIGNvbnN0IG1vbmdvQ2xpZW50ID0gYXdhaXQgZ2V0TW9uZ29DbGllbnQoKVxuICAgIGNvbnN0IGRiID0gbW9uZ29DbGllbnQuZGIoREJfTkFNRSlcblxuICAgIGNvbnN0IGhpc3RvcnkgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiY2xhaW1IaXN0b3J5XCIpLmZpbmQoe30pLnNvcnQoeyB0aW1lc3RhbXA6IC0xIH0pLmxpbWl0KDUwKS50b0FycmF5KClcblxuICAgIGNvbnN0IGhpc3RvcnlXaXRoU3RyaW5nSWRzID0gaGlzdG9yeS5tYXAoKHJlY29yZCkgPT4gKHtcbiAgICAgIC4uLnJlY29yZCxcbiAgICAgIF9pZDogcmVjb3JkLl9pZC50b1N0cmluZygpLFxuICAgIH0pKVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGhpc3RvcnlXaXRoU3RyaW5nSWRzKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjbGFpbSBoaXN0b3J5OlwiLCBlcnJvcilcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggY2xhaW0gaGlzdG9yeVwiIH0sIHsgc3RhdHVzOiA1MDAgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIk1vbmdvQ2xpZW50IiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiREJfTkFNRSIsImNsaWVudCIsImdldE1vbmdvQ2xpZW50IiwiY29ubmVjdCIsIkdFVCIsIm1vbmdvQ2xpZW50IiwiZGIiLCJoaXN0b3J5IiwiY29sbGVjdGlvbiIsImZpbmQiLCJzb3J0IiwidGltZXN0YW1wIiwibGltaXQiLCJ0b0FycmF5IiwiaGlzdG9yeVdpdGhTdHJpbmdJZHMiLCJtYXAiLCJyZWNvcmQiLCJfaWQiLCJ0b1N0cmluZyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJzdGF0dXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/claim-history/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fclaim-history%2Froute&page=%2Fapi%2Fclaim-history%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclaim-history%2Froute.ts&appDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fclaim-history%2Froute&page=%2Fapi%2Fclaim-history%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclaim-history%2Froute.ts&appDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_kimmy_Downloads_leaderboard_app_app_api_claim_history_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/claim-history/route.ts */ \"(rsc)/./app/api/claim-history/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/claim-history/route\",\n        pathname: \"/api/claim-history\",\n        filename: \"route\",\n        bundlePath: \"app/api/claim-history/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\kimmy\\\\Downloads\\\\leaderboard-app\\\\app\\\\api\\\\claim-history\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_kimmy_Downloads_leaderboard_app_app_api_claim_history_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjbGFpbS1oaXN0b3J5JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjbGFpbS1oaXN0b3J5JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2xhaW0taGlzdG9yeSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNraW1teSU1Q0Rvd25sb2FkcyU1Q2xlYWRlcmJvYXJkLWFwcCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDa2ltbXklNUNEb3dubG9hZHMlNUNsZWFkZXJib2FyZC1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQytCO0FBQzVHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxraW1teVxcXFxEb3dubG9hZHNcXFxcbGVhZGVyYm9hcmQtYXBwXFxcXGFwcFxcXFxhcGlcXFxcY2xhaW0taGlzdG9yeVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY2xhaW0taGlzdG9yeS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NsYWltLWhpc3RvcnlcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NsYWltLWhpc3Rvcnkvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxraW1teVxcXFxEb3dubG9hZHNcXFxcbGVhZGVyYm9hcmQtYXBwXFxcXGFwcFxcXFxhcGlcXFxcY2xhaW0taGlzdG9yeVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fclaim-history%2Froute&page=%2Fapi%2Fclaim-history%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclaim-history%2Froute.ts&appDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fclaim-history%2Froute&page=%2Fapi%2Fclaim-history%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclaim-history%2Froute.ts&appDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();