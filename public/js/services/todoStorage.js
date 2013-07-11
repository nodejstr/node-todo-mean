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
        put: function (todo) {
            $http({method: 'post', url: '/add', data: todo}).
                success(function (data, status, headers, config) {
                    console.log(data)
                }).
                error(function (data, status, headers, config) {
                    console.log(data)
                });
        } ,
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
