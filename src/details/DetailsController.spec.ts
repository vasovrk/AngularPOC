import {IUserService} from "../services/IUserService";
import {DetailsController} from "./DetailsController";
import {my_module} from "../MyRoutes";
describe("User controller tests", () => {

    var promiseServiceMock: angular.IQService;
    var rootScope: ng.IRootScopeService;
    var controller: any;
    var userService: IUserService;

    beforeEach(() => {
        angular.module("myModuleMock", [my_module]);
        angular.mock.module("myModuleMock");
        angular.module('myModuleMock').value('requestedUserId', "1");
        inject(($q: ng.IQService,
                $rootScope: any,
                $controller: any,
                _userService: IUserService
                ) => {
            promiseServiceMock = $q;
            rootScope = $rootScope;
            controller = $controller;
            userService = _userService;
        });

    });

    it ('should test the detailsController init method', () => {
        spyOn(userService,'getUserDetails').and.returnValue(promiseServiceMock.resolve( [
            {name : {first : "vaso", last : "vrk"}, email:"lalakos@mail.com", id: "1"}
            ]));

        spyOn(rootScope, '$on');


        var userDetailsController:DetailsController = controller('DetailsController', {
            $scope:rootScope
        });

        rootScope.$apply(() => userDetailsController.init());

        expect(userService.getUserDetails).toHaveBeenCalledWith('1');
    });

});