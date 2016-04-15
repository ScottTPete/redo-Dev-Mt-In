angular.module('devMtIn')
	.service('profileSvc', function($http) {
	
	//$http allows to make requests for any CRUD operation (Create, Read, Update, Delete)  
	
	this.serviceTest = function() {
		console.log('profile service is working yo');
		
	}
	
	
	var baseUrl = 'http://connections.devmounta.in/';
	
	
	//gets profile from the controller and saves it to a database
	this.saveProfile = function(profile) {
		return $http ({
			method: 'POST', //Request method
			url: baseUrl + 'api/profiles/', //url we're making the request to.
			data: profile //The data we are requesting be posted
		}).then(function(response) {
			console.log(response);
			localStorage.setItem('profileId', JSON.stringify({profileId: response.data._id })) 
			//creates on object on localstorage with a key of profileId and sets the value as and {profileId: id}
		})
		.catch(function(err) {
			console.log(err);
		})

	};
	
	
	//gets profile from database
	this.getProfile = function(profileId) {
		return $http ({
			method: 'GET',
			url: baseUrl + 'api/profiles/' + profileId
		})
	};
	
	
	
	this.deleteProfile = function() {
		var profileId = JSON.parse(localStorage.getItem('profileId')).profileId; //gets the profile id from local storage 
		
		return $http({
			method: 'DELETE', 
			url: baseUrl + 'api/profile/' + profileId //hits 
		})
	}
	
	
	
	
	
})