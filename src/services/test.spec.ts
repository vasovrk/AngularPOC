import {IUserService} from "./IUserService";

import {User} from "../models/User";
import {my_module} from "../MyRoutes";
describe('lalakos', ()=> {

    var promiseService: ng.IQService;
    var rootScope: ng.IRootScopeService;
    var userService: IUserService;
    var serverMock: ng.IHttpBackendService;
    var httpService: ng.IHttpService;

    beforeEach(()=> {
        angular.module("spec", [my_module]);
        angular.mock.module("spec");

        inject(($q: ng.IQService,
                $rootScope: ng.IRootScopeService,
                $httpBackend : ng.IHttpBackendService,
                $http: ng.IHttpService,
                _userService: IUserService) => {
            promiseService = $q;
            rootScope = $rootScope;
            userService = _userService;
            serverMock = $httpBackend;
            httpService = $http;
        });
    });

    afterEach(() => {
        serverMock.verifyNoOutstandingExpectation();
        serverMock.verifyNoOutstandingRequest();
    });


    it('should just test', function() {
        serverMock.expectGET("http://localhost:3000/persons?results=2").respond(
           [{name : {first : "vaso", last : "vrk"}, email:"lalakos@mail.com"},
               {name : {first : "vaso2", last : "vrk2"}, email:"lalakos2@mail.com"}]
        );

        var userResult:Array<User> = null;
        userService.getUser("2").then((result) => {
            console.log(result);
            userResult = result;
        });

        serverMock.flush();
        rootScope.$digest();

        expect(userResult).not.toBe(null);
        expect(userResult).not.toBe(undefined);

    });

});