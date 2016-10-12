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
        this.init();
    }

    public init() {
        this._userService.getUserDetails(this.requestedUserId).then((user) => {
            this.user = user;
        });

        this.$scope.$on('myBroadcast', (event, data) => {
            this.randomUsers = data.data;
        });
    }


    public getRandomPeople():void {
        this._userService.getUser("3").then((result) => {
            this.randomUsers = result;
        });
    }

    public onSelectionChanged(selection:User):void {
        this.user = selection;
    }

}