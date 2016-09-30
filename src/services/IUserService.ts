import {User} from "../models/User";
export interface IUserService{

    getUser():ng.IPromise<Array<User>>;

    getUserDetails(userId:string):ng.IPromise<User>;
}