import {User} from "../models/User";
import {IUserService} from "../services/IUserService";
export class DetailsController {
    /*ngInject*/
    public name:string = "vaso";

    public user:User;


    constructor(
                private _userService:IUserService,
                private requestedUserId:string) {
        console.log("lalakosssss" + requestedUserId);

        this._userService.getUserDetails(requestedUserId).then((user) =>{
            this.user = user;
        });

    }



}