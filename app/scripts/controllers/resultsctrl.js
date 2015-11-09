jobSearch.controller('ResultsCtrl', ['$scope', 'apiFactory',	function($scope, apiFactory){
	
	$scope.$on('someEvent', function(event, mass) { console.log(mass); });
	//apiFactory.$watch("data", function(newValue, oldValue){

	$scope.test = "Test";
	$scope.object = apiFactory.data;
    $scope.$on('dataReceived', function(event, mass) { console.log(mass); });


}])