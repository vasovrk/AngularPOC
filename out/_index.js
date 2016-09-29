"use strict";
var UserController_1 = require("./UserController");
var UserService_1 = require("./services/UserService");
angular.module('myModule', [])
    .service('_userService', UserService_1.UserService)
    .controller('UserController', UserController_1.UserController);
//# sourceMappingURL=_index.js.map