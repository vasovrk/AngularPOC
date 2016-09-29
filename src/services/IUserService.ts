
import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;
import {User} from "../models/User";
export interface IUserService{

    getUser():ng.IPromise<Array<User>>;
}