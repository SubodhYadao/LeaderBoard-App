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
exports.id = "app/api/claim-points/route";
exports.ids = ["app/api/claim-points/route"];
exports.modules = {

/***/ "(rsc)/./app/api/claim-points/route.ts":
/*!***************************************!*\
  !*** ./app/api/claim-points/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MONGODB_URI = process.env.MONGODB_URI || \"mongodb://localhost:27017\";\nconst DB_NAME = \"leaderboard\";\nlet client = null;\nasync function getMongoClient() {\n    if (!client) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient(MONGODB_URI);\n        await client.connect();\n    }\n    return client;\n}\n// POST - Claim random points for a user\nasync function POST(request) {\n    try {\n        const { userId } = await request.json();\n        if (!userId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"User ID is required\"\n            }, {\n                status: 400\n            });\n        }\n        const mongoClient = await getMongoClient();\n        const db = mongoClient.db(DB_NAME);\n        // Find the user\n        const user = await db.collection(\"users\").findOne({\n            _id: new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(userId)\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"User not found\"\n            }, {\n                status: 404\n            });\n        }\n        // Generate random points (1-10)\n        const pointsAwarded = Math.floor(Math.random() * 10) + 1;\n        // Update user's total points\n        await db.collection(\"users\").updateOne({\n            _id: new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(userId)\n        }, {\n            $inc: {\n                totalPoints: pointsAwarded\n            }\n        });\n        // Create claim history record\n        const claimRecord = {\n            userId: userId,\n            userName: user.name,\n            pointsAwarded: pointsAwarded,\n            timestamp: new Date()\n        };\n        await db.collection(\"claimHistory\").insertOne(claimRecord);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            pointsAwarded,\n            newTotal: user.totalPoints + pointsAwarded\n        });\n    } catch (error) {\n        console.error(\"Error claiming points:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to claim points\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NsYWltLXBvaW50cy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTREO0FBQ2I7QUFFL0MsTUFBTUcsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXLElBQUk7QUFDL0MsTUFBTUcsVUFBVTtBQUVoQixJQUFJQyxTQUE2QjtBQUVqQyxlQUFlQztJQUNiLElBQUksQ0FBQ0QsUUFBUTtRQUNYQSxTQUFTLElBQUlOLGdEQUFXQSxDQUFDRTtRQUN6QixNQUFNSSxPQUFPRSxPQUFPO0lBQ3RCO0lBQ0EsT0FBT0Y7QUFDVDtBQUVBLHdDQUF3QztBQUNqQyxlQUFlRyxLQUFLQyxPQUFvQjtJQUM3QyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBRyxNQUFNRCxRQUFRRSxJQUFJO1FBRXJDLElBQUksQ0FBQ0QsUUFBUTtZQUNYLE9BQU9aLHFEQUFZQSxDQUFDYSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBc0IsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQzNFO1FBRUEsTUFBTUMsY0FBYyxNQUFNUjtRQUMxQixNQUFNUyxLQUFLRCxZQUFZQyxFQUFFLENBQUNYO1FBRTFCLGdCQUFnQjtRQUNoQixNQUFNWSxPQUFPLE1BQU1ELEdBQUdFLFVBQVUsQ0FBQyxTQUFTQyxPQUFPLENBQUM7WUFBRUMsS0FBSyxJQUFJbkIsNkNBQVFBLENBQUNVO1FBQVE7UUFDOUUsSUFBSSxDQUFDTSxNQUFNO1lBQ1QsT0FBT2xCLHFEQUFZQSxDQUFDYSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBaUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3RFO1FBRUEsZ0NBQWdDO1FBQ2hDLE1BQU1PLGdCQUFnQkMsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUssTUFBTTtRQUV2RCw2QkFBNkI7UUFDN0IsTUFBTVIsR0FBR0UsVUFBVSxDQUFDLFNBQVNPLFNBQVMsQ0FBQztZQUFFTCxLQUFLLElBQUluQiw2Q0FBUUEsQ0FBQ1U7UUFBUSxHQUFHO1lBQUVlLE1BQU07Z0JBQUVDLGFBQWFOO1lBQWM7UUFBRTtRQUU3Ryw4QkFBOEI7UUFDOUIsTUFBTU8sY0FBYztZQUNsQmpCLFFBQVFBO1lBQ1JrQixVQUFVWixLQUFLYSxJQUFJO1lBQ25CVCxlQUFlQTtZQUNmVSxXQUFXLElBQUlDO1FBQ2pCO1FBRUEsTUFBTWhCLEdBQUdFLFVBQVUsQ0FBQyxnQkFBZ0JlLFNBQVMsQ0FBQ0w7UUFFOUMsT0FBTzdCLHFEQUFZQSxDQUFDYSxJQUFJLENBQUM7WUFDdkJzQixTQUFTO1lBQ1RiO1lBQ0FjLFVBQVVsQixLQUFLVSxXQUFXLEdBQUdOO1FBQy9CO0lBQ0YsRUFBRSxPQUFPUixPQUFPO1FBQ2R1QixRQUFRdkIsS0FBSyxDQUFDLDBCQUEwQkE7UUFDeEMsT0FBT2QscURBQVlBLENBQUNhLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXlCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzlFO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xca2ltbXlcXERvd25sb2Fkc1xcbGVhZGVyYm9hcmQtYXBwXFxhcHBcXGFwaVxcY2xhaW0tcG9pbnRzXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxuaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIlxuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIHx8IFwibW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxN1wiXG5jb25zdCBEQl9OQU1FID0gXCJsZWFkZXJib2FyZFwiXG5cbmxldCBjbGllbnQ6IE1vbmdvQ2xpZW50IHwgbnVsbCA9IG51bGxcblxuYXN5bmMgZnVuY3Rpb24gZ2V0TW9uZ29DbGllbnQoKSB7XG4gIGlmICghY2xpZW50KSB7XG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KE1PTkdPREJfVVJJKVxuICAgIGF3YWl0IGNsaWVudC5jb25uZWN0KClcbiAgfVxuICByZXR1cm4gY2xpZW50XG59XG5cbi8vIFBPU1QgLSBDbGFpbSByYW5kb20gcG9pbnRzIGZvciBhIHVzZXJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpXG5cbiAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVXNlciBJRCBpcyByZXF1aXJlZFwiIH0sIHsgc3RhdHVzOiA0MDAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBtb25nb0NsaWVudCA9IGF3YWl0IGdldE1vbmdvQ2xpZW50KClcbiAgICBjb25zdCBkYiA9IG1vbmdvQ2xpZW50LmRiKERCX05BTUUpXG5cbiAgICAvLyBGaW5kIHRoZSB1c2VyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5maW5kT25lKHsgX2lkOiBuZXcgT2JqZWN0SWQodXNlcklkKSB9KVxuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVXNlciBub3QgZm91bmRcIiB9LCB7IHN0YXR1czogNDA0IH0pXG4gICAgfVxuXG4gICAgLy8gR2VuZXJhdGUgcmFuZG9tIHBvaW50cyAoMS0xMClcbiAgICBjb25zdCBwb2ludHNBd2FyZGVkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMVxuXG4gICAgLy8gVXBkYXRlIHVzZXIncyB0b3RhbCBwb2ludHNcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikudXBkYXRlT25lKHsgX2lkOiBuZXcgT2JqZWN0SWQodXNlcklkKSB9LCB7ICRpbmM6IHsgdG90YWxQb2ludHM6IHBvaW50c0F3YXJkZWQgfSB9KVxuXG4gICAgLy8gQ3JlYXRlIGNsYWltIGhpc3RvcnkgcmVjb3JkXG4gICAgY29uc3QgY2xhaW1SZWNvcmQgPSB7XG4gICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgIHVzZXJOYW1lOiB1c2VyLm5hbWUsXG4gICAgICBwb2ludHNBd2FyZGVkOiBwb2ludHNBd2FyZGVkLFxuICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxuICAgIH1cblxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJjbGFpbUhpc3RvcnlcIikuaW5zZXJ0T25lKGNsYWltUmVjb3JkKVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBwb2ludHNBd2FyZGVkLFxuICAgICAgbmV3VG90YWw6IHVzZXIudG90YWxQb2ludHMgKyBwb2ludHNBd2FyZGVkLFxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNsYWltaW5nIHBvaW50czpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNsYWltIHBvaW50c1wiIH0sIHsgc3RhdHVzOiA1MDAgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIk1vbmdvQ2xpZW50IiwiT2JqZWN0SWQiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJEQl9OQU1FIiwiY2xpZW50IiwiZ2V0TW9uZ29DbGllbnQiLCJjb25uZWN0IiwiUE9TVCIsInJlcXVlc3QiLCJ1c2VySWQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJtb25nb0NsaWVudCIsImRiIiwidXNlciIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiX2lkIiwicG9pbnRzQXdhcmRlZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInVwZGF0ZU9uZSIsIiRpbmMiLCJ0b3RhbFBvaW50cyIsImNsYWltUmVjb3JkIiwidXNlck5hbWUiLCJuYW1lIiwidGltZXN0YW1wIiwiRGF0ZSIsImluc2VydE9uZSIsInN1Y2Nlc3MiLCJuZXdUb3RhbCIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/claim-points/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fclaim-points%2Froute&page=%2Fapi%2Fclaim-points%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclaim-points%2Froute.ts&appDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fclaim-points%2Froute&page=%2Fapi%2Fclaim-points%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclaim-points%2Froute.ts&appDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_kimmy_Downloads_leaderboard_app_app_api_claim_points_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/claim-points/route.ts */ \"(rsc)/./app/api/claim-points/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/claim-points/route\",\n        pathname: \"/api/claim-points\",\n        filename: \"route\",\n        bundlePath: \"app/api/claim-points/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\kimmy\\\\Downloads\\\\leaderboard-app\\\\app\\\\api\\\\claim-points\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_kimmy_Downloads_leaderboard_app_app_api_claim_points_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjbGFpbS1wb2ludHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNsYWltLXBvaW50cyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNsYWltLXBvaW50cyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNraW1teSU1Q0Rvd25sb2FkcyU1Q2xlYWRlcmJvYXJkLWFwcCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDa2ltbXklNUNEb3dubG9hZHMlNUNsZWFkZXJib2FyZC1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzhCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxraW1teVxcXFxEb3dubG9hZHNcXFxcbGVhZGVyYm9hcmQtYXBwXFxcXGFwcFxcXFxhcGlcXFxcY2xhaW0tcG9pbnRzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jbGFpbS1wb2ludHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jbGFpbS1wb2ludHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NsYWltLXBvaW50cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXGtpbW15XFxcXERvd25sb2Fkc1xcXFxsZWFkZXJib2FyZC1hcHBcXFxcYXBwXFxcXGFwaVxcXFxjbGFpbS1wb2ludHNcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fclaim-points%2Froute&page=%2Fapi%2Fclaim-points%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclaim-points%2Froute.ts&appDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fclaim-points%2Froute&page=%2Fapi%2Fclaim-points%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclaim-points%2Froute.ts&appDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();