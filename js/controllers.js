angular.module('F1FeederApp.controllers', [])
.controller('driversController', function($scope, ergastAPIservice) {
	$scope.nameFilter = "";
	$scope.driversList = [];
	$scope.searchFilter = function (driver) {
		var re = new RegExp($scope.nameFilter, 'i');
		return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName) || re.test(driver.Constructors[0].name);
	}

	ergastAPIservice.getDrivers(2016).success(function (response) {
		$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
		console.log($scope.driversList);
	});
})
.controller('driverController', function($scope, $routeParams, ergastAPIservice) {
	$scope.id = $routeParams.id;
	$scope.races = [];
	$scope.driver = null;

	ergastAPIservice.getDriverDetails($scope.id, 2016).success(function (response) {
		$scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
		console.log($scope.driver);
	});

	ergastAPIservice.getDriverRaces($scope.id, 2016).success(function (response) {
		$scope.races = response.MRData.RaceTable.Races;
		console.log($scope.races);
	}); 
})
.controller('teamsController', function($scope, ergastAPIservice){
	$scope.teams = [];

	ergastAPIservice.getTeams(2016).success(function(response){
		$scope.teams = response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
		console.log($scope.teams);
	});
})
.controller('teamController', function($scope, $routeParams, ergastAPIservice){
	$scope.id = $routeParams.id;
	$scope.races = [];
	$scope.team = null;

	ergastAPIservice.getTeamRaces($scope.id, 2016).success(function(response){
		$scope.races = response.MRData.RaceTable.Races;
		console.log($scope.races);
	});

	ergastAPIservice.getTeamDetails($scope.id, 2016).success(function(response){
		$scope.team = response.MRData;
		console.log($scope.team);
	});
})
.controller('racesController', function($scope, ergastAPIservice){
	$scope.races = [];

	ergastAPIservice.getRaces(2016).success(function(response){
		$scope.races = response.MRData.RaceTable.Races;
		console.log($scope.races);
	});
})
.controller('raceController', function($scope, $routeParams, ergastAPIservice){
	$scope.id = $routeParams.id;
	$scope.drivers = [];
	$scope.race = null;

	ergastAPIservice.getRaces(2016).success(function(response){
		$scope.drivers;
		console.log($scope.drivers);
	});
});
