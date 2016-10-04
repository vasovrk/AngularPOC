import {UserController} from "./user/UserController";
import {DetailsController} from "./details/DetailsController";
import {UserService} from "./services/UserService";

export const my_module = "myModule";

angular.module(my_module,['ui.router'])
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

