import {UserController} from "./user/UserController";
import {DetailsController} from "./details/DetailsController";
import {UserService} from "./services/UserService";
import {PersonListDirectiveController} from "./directives/PersonListDirectiveController";
import {PersonListDirective} from "./directives/PersonListDirective";
export const my_module = "myModule";

angular.module(my_module,['ui.router'])
    .service('_userService', UserService)
    .controller('UserController', UserController)
    .controller('DetailsController', DetailsController)
    .controller('PersonDirectiveController', PersonListDirectiveController)
    .directive('personList', PersonListDirective);



