import {IUserService} from "../services/IUserService";

import {UserController} from "./UserController";
import {my_module} from "../MyRoutes";

describe("User controller tests", () => {

    var promiseServiceMock:angular.IQService;
    var rootScope:ng.IRootScopeService;
    var controller : any;
    var userService: IUserService;

    beforeEach(() => {
        angular.module("myModuleMock", [my_module]);
        angular.mock.module("myModuleMock");

        inject((
            $q:ng.IQService,
                $rootScope:any,
                $controller:any,
            _userService:IUserService) => {
            promiseServiceMock = $q;
            rootScope = $rootScope;
            controller = $controller;
            userService = _userService;
        })
    });

    it('test getUser successfully', () => {
        // spyOn(userService,'getUser').and.returnValue(promiseServiceMock.resolve( [{name : {first : "vaso", last : "vrk"}, email:"lalakos@mail.com"},
        //     {name : {first : "vaso2", last : "vrk2"}, email:"lalakos2@mail.com"}]));

        spyOn(userService, 'getUser').and.callFake(() => {
            var users = [{name : {first : "vaso", last : "vrk"}, email:"lalakos@mail.com"},
                {name : {first : "vaso2", last : "vrk2"}, email:"lalakos2@mail.com"}];
            var deferred = promiseServiceMock.defer();

            deferred.resolve(users);

            return deferred.promise;
        });

        var userController:UserController = controller('UserController', {
            $scope:rootScope
        });

        userController.getUser();
        rootScope.$digest();

        expect(userService.getUser).toHaveBeenCalledWith("10");
    });
});