import {IUserService} from "./IUserService";
import {User} from "../models/User";

export class UserService implements IUserService{
    constructor(private $http:ng.IHttpService,
                private $q:ng.IQService){

    }


    getUser():ng.IPromise<Array<User>>{
        var defer = this.$q.defer();
        this.$http.get("http://localhost:3000/persons?results=10")
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