"use strict";
var _index_1 = require("./_index");
var MyRoutes_ts_1 = require("./MyRoutes.ts");
var Application = (function () {
    function Application() {
        this.myModule = angular.module(_index_1.my_module);
        MyRoutes_ts_1.MyRoutes.addRoutes(this.myModule);
    }
    return Application;
}());
exports.Application = Application;
new Application();
//# sourceMappingURL=Application.js.map