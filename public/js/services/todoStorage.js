/*global todomvc */
'use strict';

/**
 * Services that persists and retrieves TODOs from localStorage
 */
todomvc.factory('todoStorage', ['$http', function ($http) {
    var STORAGE_ID = 'todos-angularjs-perf';

    return {
        get: function () {
            return nodetodos
        },
        add: function (todo) {
            $http({method: 'post', url: '/add', data: todo}).
                success(function (data, status, headers, config) {
                    if (data.success)
                        angular.copy(angular.fromJson(data.todo), todo);
                    console.log(data)
                }).
                error(function (data, status, headers, config) {
                    console.log(data)
                });
        },
        update: function (todo) {
            $http({method: 'post', url: '/update', data: todo}).
                success(function (data, status, headers, config) {
                    if (data.success)
                        angular.copy(angular.fromJson(data.todo), todo);
                    console.log(data)
                }).
                error(function (data, status, headers, config) {
                    console.log(data)
                });
        },
        del: function (todo) {
            $http({method: 'post', url: '/del', data: todo}).
                success(function (data, status, headers, config) {
                    console.log(data)
                }).
                error(function (data, status, headers, config) {
                    console.log(data)
                });
        }
    };
}]);
