jobSearch.factory('apiFactory', ['$http', function($http){
  var service = {}
    
    service.async = function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get('http://107.170.244.148:5000/jobs/search.json?query=policy').then(function (response) {
        // The then function here is an opportunity to modify the response
        console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller
      return promise;
    }
  
  return service;
}])
