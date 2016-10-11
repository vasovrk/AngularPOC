import {User} from "../models/User";
export interface IUserService{

    getUser(personNumber:number):ng.IPromise<Array<User>>;

    getUserDetails(userId:string):ng.IPromise<User>;

}