angular.module('devMtIn')
	.controller('homeCtrl', function($scope, profileSvc, friendSvc) {
		
	
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
	];
	
	
	//set to ng-disabled which disables it's element
	$scope.disableEdit = true;
	
	
	//sets edit button text
	$scope.editStatus = "Click to edit!";
	
	$scope.toggleEdit = function() {
		if($scope.disableEdit== true) {
			$scope.disableEdit = false;
			$scope.editStatus = "Editing";
		} else {
			$scope.disableEdit = true;
			$scope.editStatus = "Click to edit!"
		}
	};
	
	
	
	
	
	//when save is clicked run this. Pass in myProfile from scope. This brings the profile from controller to service where the service function stores it locally
	$scope.saveProfile = function(profile) {
		profileSvc.saveProfile(profile);
		$scope.disableEdit = true;
	};
	
	
	//ng-model="myProfile" is data binding from controller to view
	//checks for profileId if it exists call svc function to get profile and puts it on scope
	$scope.getProfile = function() {
		var profileId = JSON.parse(localStorage.getItem('profileId'));
		//		console.log(profileId);

		if(profileId) {
			profileSvc.getProfile(profileId.profileId).then(function(profile) {
				$scope.myProfile = profile.data;
		      //console.log($scope.myProfile);
				friendSvc.findFriendsFriends(profile.data);
			})
				.catch(function(err) {
				console.log(err);
			})
		}
	};

	//Must be invoked to actually do anything.
	$scope.getProfile();
	
	
	//calls delete profile from service and clears the scope
	$scope.deleteProfile = function() {
		profileSvc.deleteProfile().then(function(deletedProfile) {
			localStorage.removeItem('profileId');
			$scope.myProfile = {};
		})
		.catch(function(err) {
			console.log(err);
		})
	};
	
	$scope.custom = true;
	
	$scope.findFriends = function(query) {
		
		if($scope.custom === true) {
			$scope.custom = false;
		} 
		
		friendSvc.findFriends($scope.myProfile._id, query).then(function(response) {
//			console.log(response);
			$scope.potentialFriends = response.data;
		})
	};
	
	
	
	$scope.addFriend = function(friendId) {
		friendSvc.addFriend($scope.myProfile._id, friendId).then(function(response) {
			$scope.getProfile();
		})
	};
	
	$scope.removeFriend = function(friendId) {
		friendSvc.removeFriend($scope.myProfile._id, friendId).then(function(response) {
//			console.log(response);
			$scope.getProfile();
		})
	}; 
	
	profileSvc.serviceTest();
	
})