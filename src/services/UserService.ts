import {IUserService} from "./IUserService";
import {User} from "../models/User";

export class UserService implements IUserService{

    public randomUsers:Array<User>;
    /*ngInject*/
    constructor(private $http:ng.IHttpService,
                private $q:ng.IQService,
                private $interval:ng.IIntervalService,
                private $rootScope: ng.IRootScopeService ){
        this.init();
        console.log("sdhfsdhbcsjdhbcjsbdcjdhcjdsbc");
    }

    private init() {
        this.$interval(() => {
            this.getRandomUsers();
        }, 1000 * 10);
    }

    private getRandomUsers() {
        this.$http.get("http://localhost:3000/persons?results=3")
            .then((result: any) => {
                this.$rootScope.$broadcast('myBroadcast', result);
            });
    }


    getUser(personNumber:string):ng.IPromise<Array<User>>{
        var defer = this.$q.defer();
        this.$http.get("http://localhost:3000/persons?results=" + personNumber)
            .then((result:any) => {
                defer.resolve(result.data);
            });

            return defer.promise;

    }


    getUserDetails(userId: string): angular.IPromise<User> {

        var defer = this.$q.defer();
        this.$http.get("http://localhost:3000/persons/" + userId).then((result:any) => {
            defer.resolve(result.data);
        });
        return defer.promise;
    }

}