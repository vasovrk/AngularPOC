"use strict";
var UserService = (function () {
    function UserService($http, $q, $interval, $rootScope) {
        this.$http = $http;
        this.$q = $q;
        this.$interval = $interval;
        this.$rootScope = $rootScope;
        this.init();
        console.log("sdhfsdhbcsjdhbcjsbdcjdhcjdsbc");
    }
    UserService.prototype.init = function () {
        var _this = this;
        this.$interval(function () {
            _this.getRandomUsers();
        }, 1000 * 10);
    };
    UserService.prototype.getRandomUsers = function () {
        var _this = this;
        this.$http.get("http://localhost:3000/persons?results=3")
            .then(function (result) {
            _this.$rootScope.$broadcast('myBroadcast', result);
        });
    };
    UserService.prototype.getUser = function (personNumber) {
        var defer = this.$q.defer();
        this.$http.get("http://localhost:3000/persons?results=" + personNumber)
            .then(function (result) {
            defer.resolve(result.data);
        });
        return defer.promise;
    };
    UserService.prototype.getUserDetails = function (userId) {
        var defer = this.$q.defer();
        this.$http.get("http://localhost:3000/persons/" + userId).then(function (result) {
            defer.resolve(result.data);
        });
        return defer.promise;
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map