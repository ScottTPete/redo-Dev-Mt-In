angular.module('devMtIn')
	.service('profileSvc', function() {
	
	
	
	this.serviceTest = function() {
		console.log('profile service is working yo')
	}
	
	
	//gets profile from the controller and saves it locally. Stingify does what you think
	this.saveProfile = function(profile) {
		localStorage.setItem('profile', JSON.stringify(profile));
		console.log(localStorage.profile);

	}
	
	
	
	
	
})