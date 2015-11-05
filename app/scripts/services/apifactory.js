jobSearch.factory('apiFactory', ['$http', function($http){


	var service = {};

	$http({
  	method: 'GET',
  	url: ' http://api.indeed.com/ads/apisearch?publisher=4162068568933163&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2'
	}).then(function successCallback(response) {
    console.log(response)

  	}, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  	});



return service
}])