/*eslint-env browser */
angular.module('myApp.services', [])

.factory('httpService', ['$http', function ($http) {

	return {

		endpoint : window.location.protocol + '//example.com/example.svc/rest/',

		/**
		 * @function method
		 * @description - Method description
		 * @param {Number} arg1 - arg1 description
		 * @param {Number} arg2 - arg2 description
		 * @return A promise
		 */
		method : function (arg1, arg2) {
			var datax = { arg1: arg1, arg2: arg2 };
			return $http.post(endpoint + 'test', datax);
		}

	};

}]);
