import {IUserService} from "../services/IUserService";
import {my_module} from "../_index";
import {User} from "../models/User";
import {UserController} from "./UserController";
describe("User controller tests", () => {

    var promiseServiceMock:angular.IQService;
    var rootScope:ng.IRootScopeService;
    var controller : any;
    var userService: IUserService;

    beforeEach(() => {
        angular.module("spec", [my_module]);
        angular.mock.module("spec");

        inject(($q:ng.IQService,
                $rootScope:any,
                $controller:any,
                _userService:IUserService) => {
            promiseServiceMock = $q;
            rootScope = $rootScope;
            controller = $controller;
            userService = _userService;

        })
    });

    fit('test getUser successfully', () => {
        spyOn(userService,'getUser').and.returnValue(promiseServiceMock.resolve( [{name : {first : "vaso", last : "vrk"}, email:"lalakos@mail.com"},
            {name : {first : "vaso2", last : "vrk2"}, email:"lalakos2@mail.com"}]));

        var userController:UserController = controller('UserController', {
            $scope:rootScope
        });

        rootScope.$apply(() => userController.getUser());

        expect(userService.getUser).toHaveBeenCalledTimes(1);
        // expect(userController.users).tob
    });
});