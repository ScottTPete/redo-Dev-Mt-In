angular.module('devMtIn')
	.service('profileSvc', function() {
	
	
	
	this.serviceTest = function() {
		console.log('profile service is working yo')
	}
	
	
	//gets profile from the controller and saves it locally. Stingify does what you think
	this.saveProfile = function(profile) {
		localStorage.setItem('profile', JSON.stringify(profile));
		console.log(localStorage.profile);

	};
	
	this.getProfile = function() {
		if(localStorage.getItem('profile')) {
			return JSON.parse(localStorage.getItem('profile'));
		} return {
			friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
		}
	};
	
	this.deleteProfile = function() {
		if(localStorage.getItem('profile')) {
			localStorage.removeItem('profile');
		} else {
			console.log('No profile to delete');
		}
	}
	
	
	
	
	
})