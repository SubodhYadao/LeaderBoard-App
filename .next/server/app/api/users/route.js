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
exports.id = "app/api/users/route";
exports.ids = ["app/api/users/route"];
exports.modules = {

/***/ "(rsc)/./app/api/users/route.ts":
/*!********************************!*\
  !*** ./app/api/users/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MONGODB_URI = process.env.MONGODB_URI || \"mongodb://localhost:27017\";\nconst DB_NAME = \"leaderboard\";\nlet client = null;\nasync function getMongoClient() {\n    if (!client) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient(MONGODB_URI);\n        await client.connect();\n    }\n    return client;\n}\n// GET - Fetch all users with rankings\nasync function GET() {\n    try {\n        const mongoClient = await getMongoClient();\n        const db = mongoClient.db(DB_NAME);\n        const users = await db.collection(\"users\").find({}).sort({\n            totalPoints: -1\n        }).toArray();\n        // Add rankings\n        const usersWithRanks = users.map((user, index)=>({\n                ...user,\n                _id: user._id.toString(),\n                rank: index + 1\n            }));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(usersWithRanks);\n    } catch (error) {\n        console.error(\"Error fetching users:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch users\"\n        }, {\n            status: 500\n        });\n    }\n}\n// POST - Add new user\nasync function POST(request) {\n    try {\n        const { name } = await request.json();\n        if (!name || typeof name !== \"string\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Name is required\"\n            }, {\n                status: 400\n            });\n        }\n        const mongoClient = await getMongoClient();\n        const db = mongoClient.db(DB_NAME);\n        // Check if user already exists\n        const existingUser = await db.collection(\"users\").findOne({\n            name: name.trim()\n        });\n        if (existingUser) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"User already exists\"\n            }, {\n                status: 400\n            });\n        }\n        const newUser = {\n            name: name.trim(),\n            totalPoints: 0,\n            createdAt: new Date()\n        };\n        const result = await db.collection(\"users\").insertOne(newUser);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            _id: result.insertedId.toString(),\n            ...newUser\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"Error adding user:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to add user\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VzZXJzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTREO0FBQ3ZCO0FBRXJDLE1BQU1FLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVyxJQUFJO0FBQy9DLE1BQU1HLFVBQVU7QUFFaEIsSUFBSUMsU0FBNkI7QUFFakMsZUFBZUM7SUFDYixJQUFJLENBQUNELFFBQVE7UUFDWEEsU0FBUyxJQUFJTCxnREFBV0EsQ0FBQ0M7UUFDekIsTUFBTUksT0FBT0UsT0FBTztJQUN0QjtJQUNBLE9BQU9GO0FBQ1Q7QUFFQSxzQ0FBc0M7QUFDL0IsZUFBZUc7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLGNBQWMsTUFBTUg7UUFDMUIsTUFBTUksS0FBS0QsWUFBWUMsRUFBRSxDQUFDTjtRQUMxQixNQUFNTyxRQUFRLE1BQU1ELEdBQUdFLFVBQVUsQ0FBQyxTQUFTQyxJQUFJLENBQUMsQ0FBQyxHQUFHQyxJQUFJLENBQUM7WUFBRUMsYUFBYSxDQUFDO1FBQUUsR0FBR0MsT0FBTztRQUVyRixlQUFlO1FBQ2YsTUFBTUMsaUJBQWlCTixNQUFNTyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsUUFBVztnQkFDakQsR0FBR0QsSUFBSTtnQkFDUEUsS0FBS0YsS0FBS0UsR0FBRyxDQUFDQyxRQUFRO2dCQUN0QkMsTUFBTUgsUUFBUTtZQUNoQjtRQUVBLE9BQU9yQixxREFBWUEsQ0FBQ3lCLElBQUksQ0FBQ1A7SUFDM0IsRUFBRSxPQUFPUSxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3ZDLE9BQU8xQixxREFBWUEsQ0FBQ3lCLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXdCLEdBQUc7WUFBRUUsUUFBUTtRQUFJO0lBQzdFO0FBQ0Y7QUFFQSxzQkFBc0I7QUFDZixlQUFlQyxLQUFLQyxPQUFvQjtJQUM3QyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNRCxRQUFRTCxJQUFJO1FBRW5DLElBQUksQ0FBQ00sUUFBUSxPQUFPQSxTQUFTLFVBQVU7WUFDckMsT0FBTy9CLHFEQUFZQSxDQUFDeUIsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQW1CLEdBQUc7Z0JBQUVFLFFBQVE7WUFBSTtRQUN4RTtRQUVBLE1BQU1sQixjQUFjLE1BQU1IO1FBQzFCLE1BQU1JLEtBQUtELFlBQVlDLEVBQUUsQ0FBQ047UUFFMUIsK0JBQStCO1FBQy9CLE1BQU0yQixlQUFlLE1BQU1yQixHQUFHRSxVQUFVLENBQUMsU0FBU29CLE9BQU8sQ0FBQztZQUFFRixNQUFNQSxLQUFLRyxJQUFJO1FBQUc7UUFDOUUsSUFBSUYsY0FBYztZQUNoQixPQUFPaEMscURBQVlBLENBQUN5QixJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBc0IsR0FBRztnQkFBRUUsUUFBUTtZQUFJO1FBQzNFO1FBRUEsTUFBTU8sVUFBVTtZQUNkSixNQUFNQSxLQUFLRyxJQUFJO1lBQ2ZsQixhQUFhO1lBQ2JvQixXQUFXLElBQUlDO1FBQ2pCO1FBRUEsTUFBTUMsU0FBUyxNQUFNM0IsR0FBR0UsVUFBVSxDQUFDLFNBQVMwQixTQUFTLENBQUNKO1FBRXRELE9BQU9uQyxxREFBWUEsQ0FBQ3lCLElBQUksQ0FDdEI7WUFDRUgsS0FBS2dCLE9BQU9FLFVBQVUsQ0FBQ2pCLFFBQVE7WUFDL0IsR0FBR1ksT0FBTztRQUNaLEdBQ0E7WUFBRVAsUUFBUTtRQUFJO0lBRWxCLEVBQUUsT0FBT0YsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsc0JBQXNCQTtRQUNwQyxPQUFPMUIscURBQVlBLENBQUN5QixJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFxQixHQUFHO1lBQUVFLFFBQVE7UUFBSTtJQUMxRTtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGtpbW15XFxEb3dubG9hZHNcXGxlYWRlcmJvYXJkLWFwcFxcYXBwXFxhcGlcXHVzZXJzXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiXG5cbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgfHwgXCJtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3XCJcbmNvbnN0IERCX05BTUUgPSBcImxlYWRlcmJvYXJkXCJcblxubGV0IGNsaWVudDogTW9uZ29DbGllbnQgfCBudWxsID0gbnVsbFxuXG5hc3luYyBmdW5jdGlvbiBnZXRNb25nb0NsaWVudCgpIHtcbiAgaWYgKCFjbGllbnQpIHtcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQoTU9OR09EQl9VUkkpXG4gICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKVxuICB9XG4gIHJldHVybiBjbGllbnRcbn1cblxuLy8gR0VUIC0gRmV0Y2ggYWxsIHVzZXJzIHdpdGggcmFua2luZ3NcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbW9uZ29DbGllbnQgPSBhd2FpdCBnZXRNb25nb0NsaWVudCgpXG4gICAgY29uc3QgZGIgPSBtb25nb0NsaWVudC5kYihEQl9OQU1FKVxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmZpbmQoe30pLnNvcnQoeyB0b3RhbFBvaW50czogLTEgfSkudG9BcnJheSgpXG5cbiAgICAvLyBBZGQgcmFua2luZ3NcbiAgICBjb25zdCB1c2Vyc1dpdGhSYW5rcyA9IHVzZXJzLm1hcCgodXNlciwgaW5kZXgpID0+ICh7XG4gICAgICAuLi51c2VyLFxuICAgICAgX2lkOiB1c2VyLl9pZC50b1N0cmluZygpLFxuICAgICAgcmFuazogaW5kZXggKyAxLFxuICAgIH0pKVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHVzZXJzV2l0aFJhbmtzKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1c2VyczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHVzZXJzXCIgfSwgeyBzdGF0dXM6IDUwMCB9KVxuICB9XG59XG5cbi8vIFBPU1QgLSBBZGQgbmV3IHVzZXJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxuXG4gICAgaWYgKCFuYW1lIHx8IHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfSwgeyBzdGF0dXM6IDQwMCB9KVxuICAgIH1cblxuICAgIGNvbnN0IG1vbmdvQ2xpZW50ID0gYXdhaXQgZ2V0TW9uZ29DbGllbnQoKVxuICAgIGNvbnN0IGRiID0gbW9uZ29DbGllbnQuZGIoREJfTkFNRSlcblxuICAgIC8vIENoZWNrIGlmIHVzZXIgYWxyZWFkeSBleGlzdHNcbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZmluZE9uZSh7IG5hbWU6IG5hbWUudHJpbSgpIH0pXG4gICAgaWYgKGV4aXN0aW5nVXNlcikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVXNlciBhbHJlYWR5IGV4aXN0c1wiIH0sIHsgc3RhdHVzOiA0MDAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBuZXdVc2VyID0ge1xuICAgICAgbmFtZTogbmFtZS50cmltKCksXG4gICAgICB0b3RhbFBvaW50czogMCxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuaW5zZXJ0T25lKG5ld1VzZXIpXG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7XG4gICAgICAgIF9pZDogcmVzdWx0Lmluc2VydGVkSWQudG9TdHJpbmcoKSxcbiAgICAgICAgLi4ubmV3VXNlcixcbiAgICAgIH0sXG4gICAgICB7IHN0YXR1czogMjAxIH0sXG4gICAgKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgdXNlcjpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRmFpbGVkIHRvIGFkZCB1c2VyXCIgfSwgeyBzdGF0dXM6IDUwMCB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiTW9uZ29DbGllbnQiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJEQl9OQU1FIiwiY2xpZW50IiwiZ2V0TW9uZ29DbGllbnQiLCJjb25uZWN0IiwiR0VUIiwibW9uZ29DbGllbnQiLCJkYiIsInVzZXJzIiwiY29sbGVjdGlvbiIsImZpbmQiLCJzb3J0IiwidG90YWxQb2ludHMiLCJ0b0FycmF5IiwidXNlcnNXaXRoUmFua3MiLCJtYXAiLCJ1c2VyIiwiaW5kZXgiLCJfaWQiLCJ0b1N0cmluZyIsInJhbmsiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzIiwiUE9TVCIsInJlcXVlc3QiLCJuYW1lIiwiZXhpc3RpbmdVc2VyIiwiZmluZE9uZSIsInRyaW0iLCJuZXdVc2VyIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInJlc3VsdCIsImluc2VydE9uZSIsImluc2VydGVkSWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/users/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_kimmy_Downloads_leaderboard_app_app_api_users_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/users/route.ts */ \"(rsc)/./app/api/users/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/route\",\n        pathname: \"/api/users\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\kimmy\\\\Downloads\\\\leaderboard-app\\\\app\\\\api\\\\users\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_kimmy_Downloads_leaderboard_app_app_api_users_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlcnMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VycyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNraW1teSU1Q0Rvd25sb2FkcyU1Q2xlYWRlcmJvYXJkLWFwcCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDa2ltbXklNUNEb3dubG9hZHMlNUNsZWFkZXJib2FyZC1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3VCO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxraW1teVxcXFxEb3dubG9hZHNcXFxcbGVhZGVyYm9hcmQtYXBwXFxcXGFwcFxcXFxhcGlcXFxcdXNlcnNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3VzZXJzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXNlcnNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3VzZXJzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxca2ltbXlcXFxcRG93bmxvYWRzXFxcXGxlYWRlcmJvYXJkLWFwcFxcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckimmy%5CDownloads%5Cleaderboard-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();