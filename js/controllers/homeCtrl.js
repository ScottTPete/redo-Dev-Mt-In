angular.module('devMtIn')
	.controller('homeCtrl', function($scope) {
		
	
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
	
})