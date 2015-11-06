jobSearch.controller('mainCtrl', ['$scope', 'apiFactory',	function($scope, apiFactory){

$scope.test = "Testrun"


$scope.submit = function() {
	console.log("This");
	console.log($scope.entry)

}

}])