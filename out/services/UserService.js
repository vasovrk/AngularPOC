"use strict";
var UserService = (function () {
    function UserService($http, $q, $interval, $rootScope) {
        var _this = this;
        this.$http = $http;
        this.$q = $q;
        this.$interval = $interval;
        this.$rootScope = $rootScope;
        $interval(function () {
            _this.$http.get("http://localhost:3000/persons?results=3")
                .then(function (result) {
                $rootScope.$broadcast('myBroadcast', result);
            });
        }, 1000 * 10);
    }
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