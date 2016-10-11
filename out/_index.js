"use strict";
var UserController_1 = require("./user/UserController");
var DetailsController_1 = require("./details/DetailsController");
var UserService_1 = require("./services/UserService");
var PersonListDirective_1 = require("./directives/PersonListDirective");
var PersonListDirectiveController_1 = require("./directives/PersonListDirectiveController");
exports.my_module = "myModule";
angular.module(exports.my_module, ['ui.router'])
    .service('_userService', UserService_1.UserService)
    .controller('UserController', UserController_1.UserController)
    .controller('DetailsController', DetailsController_1.DetailsController)
    .controller('PersonDirectiveController', PersonListDirectiveController_1.PersonListDirectiveController)
    .directive('personList', PersonListDirective_1.PersonListDirective)
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("search", {
            url: '/search',
            views: {
                "main": {
                    controller: UserController_1.UserController,
                    controllerAs: 'userController',
                    templateUrl: './user/user.html'
                }
            }
        })
            .state("details", {
            url: '/details/:username',
            views: {
                "main": {
                    controller: DetailsController_1.DetailsController,
                    controllerAs: 'detailsController',
                    templateUrl: './details/index-details.html',
                    resolve: {
                        requestedUserId: ['$stateParams', function ($stateParams) {
                                return $stateParams.username;
                            }]
                    }
                }
            }
        });
        $urlRouterProvider.otherwise('/search');
    }]);
//# sourceMappingURL=_index.js.map