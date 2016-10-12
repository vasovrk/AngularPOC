
import {User} from "../models/User";
import {IUserService} from "../services/IUserService";


export class UserController{

    public user:User;
    public users:Array<User>;
    public name:string = "lalakos";

    /*ngInject*/
    constructor(private $scope:any,
                private $q:ng.IQService,
                private $http:ng.IHttpService,
                private $state:ng.ui.IStateService,
                private _userService:IUserService){

    }

    public getUser():void {
        this._userService.getUser("10").then((result) => {
            this.users = [];
            this.users = result;
        });
}

    public removeUser(user:User):void{

        var index = _.findIndex(this.users, user);

        _.pull(this.users, user);

    }

    public goToUserPage(user:User) {
        this.$state.go("details",{"username":user.id});
    }
}