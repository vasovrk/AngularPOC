import {IUserService} from "./IUserService";
import {User} from "../models/User";
import IHttpService = angular.IHttpService;
import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;


export class UserService implements IUserService{



    constructor(private $http:ng.IHttpService,
                private $q:ng.IQService){

    }


    getUser():ng.IPromise<Array<User>>{
        var defer = this.$q.defer();
        this.$http.get("https://randomuser.me/api/?results=10")
            .then((result:any) => {
                // console.log(result.data.results[0]);
                // defer.resolve({"name" : result.data.results[0].name,
                //     "picture" : result.data.results[0].picture.medium});

                defer.resolve(result.data.results);
            });

            return defer.promise;

    }


}