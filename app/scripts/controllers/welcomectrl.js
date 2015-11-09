jobSearch.controller('welcomeCtrl', ['$scope', 'apiFactory', function($scope, apiFactory){
	$scope.entry = {}
	
	$scope.submit = function() {
	  	console.log("Success")
	  	apiFactory.submission($scope.entry).then(function(d) {
	    $scope.entries = d;
	    console.log(d)
  		});
	}

}])