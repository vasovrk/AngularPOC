import {PersonListDirectiveController} from "./PersonListDirectiveController";

export function PersonListDirective(): ng.IDirective {
    return {
        restrict : "E",
        templateUrl : "./directives/person-list.html",
        controller : PersonListDirectiveController,
        controllerAs : "personDirectiveController",
        bindToController : true,
        scope : {
            currentPersons : "=",
            onSelection : "&"
        }
    };
}