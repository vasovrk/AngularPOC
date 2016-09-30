"use strict";
var _ = require("lodash");
var UserController = (function () {
    function UserController($scope, $q, $http, $state, _userService) {
        this.$scope = $scope;
        this.$q = $q;
        this.$http = $http;
        this.$state = $state;
        this._userService = _userService;
        this.name = "lalakos";
    }
    UserController.prototype.getUser = function () {
        var _this = this;
        console.log("kourades");
        this._userService.getUser().then(function (result) {
            _this.users = [];
            _this.users = result;
        });
    };
    UserController.prototype.removeUser = function (user) {
        console.log("laalalalaalalal" + user.name);
        var index = _.findIndex(this.users, user);
        _.pull(this.users, user);
    };
    UserController.prototype.goToUserPage = function (user) {
        this.$state.go("details", { "username": user.name.first });
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map