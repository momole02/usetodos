/*
	addTaskController.js
	Ajoute une tache
*/
'use strict';

mainModule.controller('addTaskController' , function($rootScope , $scope,todoProvider){

	$scope.error = "";
	$scope.addTask = function (){
		
		if( $scope.taskName==undefined || $scope.taskDurationTime==undefined){
			$scope.error = "Remplissez correctement le formulaire";
		}else{
			$scope.error = "";
			console.log('Hello' , $scope.taskName , $scope.taskDurationTime);
			let hours =  $scope.taskDurationTime.getHours()
			let minutes = $scope.taskDurationTime.getMinutes();
			todoProvider.addTask($rootScope, $scope.taskName , String(hours*60+minutes) );
		}
	}

});