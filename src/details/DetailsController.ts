import {User} from "../models/User";
export class DetailsController {
    /*ngInject*/
    public name:string = "vaso";

    public user:User;

    constructor(requestedUserId:string) {
        console.log("lalakosssss" + requestedUserId);
    }



}