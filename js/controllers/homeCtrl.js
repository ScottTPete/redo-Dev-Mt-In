angular.module('devMtIn')
	.controller('homeCtrl', function($scope, profileSvc) {
		
	
	//ng-model="myProfile" is data binding from controller to view
	$scope.myProfile = {
		name: '', 
	    friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
	}
	
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
	
	$scope.disableEdit = true;
	
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
	
	profileSvc.serviceTest();
	
})