jobSearch.factory('apiFactory', ['$http', function($http){


	var service = {};

$http.get('http://107.170.244.148:5000/jobs/search.json?query=nursing+jobs').then(function successCallback(response) {
    console.log(response)
    }, function errorCallback(response) {
    console.log(response)
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    });


return service
}])