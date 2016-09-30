

import {User} from "../../models/User";
export interface IUserService{

    getUser():ng.IPromise<Array<User>>;
}