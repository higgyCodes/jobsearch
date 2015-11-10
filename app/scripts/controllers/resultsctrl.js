jobSearch.controller('ResultsCtrl', ['$scope', 'apiFactory',	function($scope, apiFactory){

	$scope.object = apiFactory.data;


}])