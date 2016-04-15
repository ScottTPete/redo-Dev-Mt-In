angular.module('devMtIn')
	.controller('homeCtrl', function($scope, profileSvc) {
		
	
	//ng-model="myProfile" is data binding from controller to view
	//checks for profileId if it exists call svc function to get profile and puts it on scope
	$scope.getProfile = function() {
		var profileId = JSON.parse(localStorage.getItem('profileId'));
		console.log(profileId);
		
		if(profileId) {
			profileSvc.getProfile(profileId.profileId).then(function(profile) {
				$scope.myProfile = profile.data;
				console.log($scope.myProfile);
			})
			.catch(function(err) {
				console.log(err);
			})
		}
	}
	
	//Must be invoked to actually do anything.
	$scope.getProfile();
	
	
	
	//sets sort options for friends list, used by ng-options
	$scope.sortOptions = [
		{
			display: 'Ascending',
			value: false
		},
		{
			display: 'Descending',
			value: true
		}
	]
	
	
	//set to ng-disabled which disables it's element
	$scope.disableEdit = true;
	
	
	//sets edit button text
	$scope.editStatus = "Click to edit!"
	
	$scope.toggleEdit = function() {
		if($scope.disableEdit== true) {
			$scope.disableEdit = false;
			$scope.editStatus = "Editing";
		} else {
			$scope.disableEdit = true;
			$scope.editStatus = "Click to edit!"
		}
	}
	
	
	//when save is clicked run this. Pass in myProfile from scope. This brings the profile from controller to service where the service function stores it locally
	$scope.saveProfile = function(profile) {
		profileSvc.saveProfile(profile);
		$scope.disableEdit = true;
	}
	
	
	//calls delete profile from service and clears the scope
	$scope.deleteProfile = function() {
		profileSvc.deleteProfile().then(function(deletedProfile) {
			localStorage.removeItem('profileId');
			$scope.myProfile = {};
		})
		.catch(function(err) {
			console.log(err);
		})
	}
	
	profileSvc.serviceTest();
	
})