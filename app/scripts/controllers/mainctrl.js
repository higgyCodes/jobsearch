jobSearch.controller('MainCtrl', ['$scope', 'apiFactory',	function($scope, apiFactory){

$scope.test = "test"

  apiFactory.async().then(function(d) {
    $scope.entries = d;
    console.log(d)
  });

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