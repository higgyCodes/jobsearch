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
	$scope.greaterThan = function(prop, val){
    console.log(prop, val)
	    return function(item){
	      if (item[prop] > val) return true;
	    }
  	}
	
	// Runs API search after parsing input

	// Creates selected section in the third column
	$scope.select = function(selection) {
	  	$scope.selected = selection
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