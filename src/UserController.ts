

import {User} from "./models/User";
import {IUserService} from "./services/IUserService";
import * as _ from "lodash";

export class UserController{

    public user:User;
    public users:Array<User>;
    public name:string = "lalakos";

    /*ngInject*/
    constructor(private $scope:any,
                private $q:ng.IQService,
                private $http:ng.IHttpService,
                private _userService:IUserService
               ){

    }

    public getUser():void {
        console.log("kourades");
        this._userService.getUser().then((result) => {
            this.users = [];
            this.users = result;
        });

}

    public removeUser(user:User):void{
        console.log("laalalalaalalal" + user.name);

        var index = _.findIndex(this.users, user);

        _.pull(this.users, user);

    }
}