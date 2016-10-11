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
        // var time = 5000;
        // $scope.Time = $interval(()=>{
        //     $scope.emit()
        // },time);
        // console.log(time);
    }

    getCurrentUri(person:User): void {
     this.onPersonSelection = person;
    }

    public onItemSelection = (selected:User) => {
        this.onSelection({selection : selected});
        console.log("lalakos");
    }
}