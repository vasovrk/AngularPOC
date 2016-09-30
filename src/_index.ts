import {UserController} from "./user/UserController";
import {DetailsController} from "./details/DetailsController";
import {UserService} from "./services/UserService";

angular.module('myModule',['ui.router', 'ui.bootstrap'])
    .service('_userService', UserService)
    .controller('UserController', UserController)
    .controller('DetailsController', DetailsController)
    .config(['$stateProvider','$urlRouterProvider',($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) => {
        $stateProvider
            .state("search", {
                url: '/search',
                views: {
                    "main": {
                        controller: UserController,
                        controllerAs: 'userController',
                        templateUrl: './user/user.html'
                    }
                }
            })
            .state("details", {
                url: '/details/:username',
                views: {
                    "main": {
                        controller: DetailsController,
                        controllerAs: 'detailsController',
                        templateUrl: './details/index-details.html',
                        resolve: {
                            requestedUserId: ['$stateParams', ($stateParams)=>{
                                return $stateParams.username
                            }]
                        }
                    }

                }
            });

        $urlRouterProvider.otherwise('/search');

    }]);

