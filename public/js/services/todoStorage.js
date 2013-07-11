/*global todomvc */
'use strict';

/**
 * Services that persists and retrieves TODOs from localStorage
*/
todomvc.factory('todoStorage', ['$http', function($http) {
	var STORAGE_ID = 'todos-angularjs-perf';

	return {
		get: function(){return nodetodos},
		put: function (todos) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
		}
	};
}]);
