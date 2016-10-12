import {UserController} from "./user/UserController";
import {DetailsController} from "./details/DetailsController";
import {my_module} from "./MyRoutes";


export const my_routes = "MyRoutes";

angular.module(my_routes, [my_module,'ui.router']).
config(['$stateProvider', '$urlRouterProvider', ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
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
                        requestedUserId: ['$stateParams', ($stateParams)=> {
                            return $stateParams.username
                        }]
                    }
                }

            }
        });

    $urlRouterProvider.otherwise('/search');

}]);



