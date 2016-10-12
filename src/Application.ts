import {my_module} from "./_index";
import {MyRoutes} from "./MyRoutes.ts";
export class Application {
    myModule:ng.IModule;

    constructor() {
        this.myModule = angular.module(my_module);

        MyRoutes.addRoutes(this.myModule);
    }
}

new Application();