jobSearch.controller('SearchCtrl', ['$scope', 'apiFactory',	function($scope, apiFactory){

	$scope.predicate = ''
	$scope.reverse = true;
    
    //Orders the entries by a dynamic predicate
    $scope.order = function(predicate) {
	    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
	    console.log(predicate)
	    $scope.predicate = predicate;
	};

	// Filters out entries outside minimum payrate selected
	$scope.payrate = function(result) {
		if (result.minimum > $scope.search.minamount || $scope.search.minamount == undefined) {
			return true;
		} 
	}


	// Runs API search after parsing input
	$scope.submit = function() {
		console.log($scope.search.jobtitle)
	  	apiFactory.submission($scope.search).then(function(data) {
	    $scope.entries = data;
		});
	}

	// Creates selected section in the third column
	$scope.select = function(selection) {
	  	$scope.selected = selection
	}

}]);