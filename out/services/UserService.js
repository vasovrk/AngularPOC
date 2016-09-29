"use strict";
var UserService = (function () {
    function UserService($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }
    UserService.prototype.getUser = function () {
        var defer = this.$q.defer();
        this.$http.get("https://randomuser.me/api/?results=10")
            .then(function (result) {
            defer.resolve(result.data.results);
        });
        return defer.promise;
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map