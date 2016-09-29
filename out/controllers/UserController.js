"use strict";
var UserController = (function () {
    function UserController($scope, $q, $http, userService) {
        this.$scope = $scope;
        this.$q = $q;
        this.$http = $http;
        this.userService = userService;
        this.name = "lalakos";
    }
    UserController.prototype.getUser = function () {
        console.log("kourades");
        this.userService.getUser();
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map