"use strict";
var UserService = (function () {
    function UserService($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }
    UserService.prototype.getUser = function () {
        var defer = this.$q.defer();
        this.$http.get("http://localhost:3000/persons?results=10")
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