angular.module('F1FeederApp.controllers', [])
.controller('driversController', function($scope, ergastAPIservice) {
	$scope.nameFilter = "";
	$scope.driversList = [];
	$scope.searchFilter = function (driver) {
		var re = new RegExp($scope.nameFilter, 'i');
		return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
	}

	ergastAPIservice.getDrivers().success(function (response) {
		$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
	});
})
.controller('driverController', function($scope, $routeParams, ergastAPIservice) {
	$scope.id = $routeParams.id;
	$scope.races = [];
	$scope.driver = null;

	ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
		$scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
	});

	ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
		$scope.races = response.MRData.RaceTable.Races; 
	}); 
})
.controller('teamsController', function($scope, ergastAPIservice){
	$scope.teams = [];

	ergastAPIservice.getTeams().success(function(response){
		$scope.teams = response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
		console.log($scope.teams);
	});
})
.controller('racesController', function($scope, ergastAPIservice){
	$scope.races = [];

	ergastAPIservice.getRaces().success(function(response){
		$scope.races = response.MRData.RaceTable.Races;
		console.log($scope.races);
	});
});