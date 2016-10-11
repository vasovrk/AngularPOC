import {User} from "../models/User";
import {IUserService} from "../services/IUserService";
export class DetailsController {
    /*ngInject*/
    public name:string = "vaso";

    public user:User;
    public randomUsers:Array<User>;

    constructor(
                private _userService:IUserService,
                private requestedUserId:string,
                private $scope:any
                ) {
        console.log("lalakosssss" + requestedUserId);
        this._userService.getUserDetails(requestedUserId).then((user) =>{
            this.user = user;
        });


        $scope.$on('myBroadcast',  (event, data) => {
            this.randomUsers = data.data;
        });
    }


    public getRandomPeople():void {
        this._userService.getUser(3).then((result) => {
            this.randomUsers = result;
        })
    }

    public onSelectionChanged(selection:User):void {
        console.log("yeyyyy");
        console.log(selection);
        this.user = selection;
    }

}