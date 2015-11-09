jobSearch.controller('MainCtrl', ['$rootScope','$scope', 'apiFactory',	function($rootScope, $scope, apiFactory){
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
		if (result.minimum > $scope.entry.minamount || $scope.entry.minamount == undefined) {
			return true;
		} 
	}

	// Runs API search after parsing input
	$scope.submit = function() {
	  	apiFactory.submission($scope.entry).then(function(d) {
	    $scope.entries = d;
	    console.log(d)
	    $scope.$broadcast('dataReceived', [1,2,3]);
  	});
	}

	// Creates selected section in the third column
	$scope.select = function(selection) {
	  	$scope.selected = selection
	}

	if ($scope.entry === true) {
		$scope.submit();
	}

}]);



// function applyRemoteData( newFriends ) {
//                     $scope.friends = newFriends;
//                 }
//                 // I load the remote data from the server.
//                 function loadRemoteData() {
//                     // The friendService returns a promise.
//                     friendService.getFriends()
//                         .then(
//                             function( friends ) {
//                                 applyRemoteData( friends );
//                             }
//                         )
//                     ;
//                 }
//             }
//         );