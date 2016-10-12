import {User} from "../models/User";
export class PersonListDirectiveController {
    public currentPersons: Array<User>;
    public name: string = "vasooooo";
    public person:User;
    public onPersonSelection:User;
    public onSelection:Function;

    constructor(private $state: ng.ui.IStateService,
                private $scope: any,
                private $interval: any) {
    }

    getCurrentUri(person:User): void {
     this.onPersonSelection = person;
    }

    public onItemSelection = (selected:User) => {
        this.onSelection({selection : selected});
        console.log("lalakos");
    }
}