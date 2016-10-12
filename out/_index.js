"use strict";
var UserController_1 = require("./user/UserController");
var DetailsController_1 = require("./details/DetailsController");
var MyRoutes_1 = require("./MyRoutes");
exports.my_routes = "MyRoutes";
angular.module(exports.my_routes, [MyRoutes_1.my_module, 'ui.router']).
    config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
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