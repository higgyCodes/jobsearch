jobSearch.factory('apiFactory', ['$http', function($http){
  var service = {}
  	//Dynamically creates url String
  	stringmake = function(entries) {
  		var search = {};
  		console.log(entries)
  		search.jobtitle = entries.jobtitle.replace(" ", "+");

  		if (entries.location) {
  			search.location = "+in+" + entries.location.replace(" ", "+");
  		} else {
  			search.location = "";
  		};

  		if (entries.department) {
  			search.department = "+at+" + entries.department.replace(" ", "+");
  		} else {
  			search.department = ""
  		}

  		if (entries.time) {
  			search.time = "+" + entries.time.replace(" ", "+")
  		} else {
  			search.time = ""
  		}

  		if (!entries.level) {
  			entries.level = ""
  		}

  		return search.jobtitle + search.location + search.department + search.time + entries.level;
  	}

  	//attaches dunamic url component to base url
  	var urlfunc = function(entry) {
  		var baseurl = 'http://107.170.244.148:5000/jobs/search.json?query='
  	return baseurl + stringmake(entry)
  	}

  	// Makes API call.
    service.submission = function(entry) {
      console.log(urlfunc(entry))
      var promise = $http.get(urlfunc(entry))
      .then(function (response) {
        console.log(response);
        return response.data;
      });
      // Return the promise to the controller
      return promise;
     }
  
  return service;
}])
