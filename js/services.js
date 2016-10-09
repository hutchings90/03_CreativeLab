angular.module('F1FeederApp.services', [])
.factory('ergastAPIservice', function($http) {
	var ergastAPI = {};

	ergastAPI.getDrivers = function() {
		return $http({
			method: 'JSONP', 
			url: 'http://ergast.com/api/f1/2016/driverStandings.json?callback=JSON_CALLBACK'
		});
	}

	ergastAPI.getDriverDetails = function(id) {
		return $http({
			method: 'JSONP', 
			url: 'http://ergast.com/api/f1/2016/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
		});
	}

	ergastAPI.getDriverRaces = function(id) {
		return $http({
			method: 'JSONP', 
			url: 'http://ergast.com/api/f1/2016/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
		});
	}

	ergastAPI.getTeams = function(){
		return $http({
			method: 'JSONP',
			url: 'http://ergast.com/api/f1/2016/constructorStandings.json?callback=JSON_CALLBACK'
		});
	}

	ergastAPI.getRaces = function(){
		return $http({
			method: 'JSONP',
			url: 'http://ergast.com/api/f1/2016/results/1.json?callback=JSON_CALLBACK'
		});
	}

	return ergastAPI;
});