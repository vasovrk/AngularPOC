

import {UserController} from "./UserController";
import {UserService} from "./services/UserService";
angular.module('myModule',[])
    .service('_userService', UserService)
    .controller('UserController', UserController);
