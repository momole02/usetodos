/*
	listTodoController.js
	Controlleur d'affichage des todoList
*/
 'use strict'
 mainModule.controller( 'todoController' , function($scope , todoProvider){

 	todoProvider.getAllTodos( $scope )

 	/* ajoute une tache  */
	$scope.addTask = function (){
		
		if( $scope.taskName==undefined || $scope.taskDurationTime==undefined){
			$scope.error = "Remplissez correctement le formulaire";
		}else{
			$scope.error = "";
			console.log('Hello' , $scope.taskName , $scope.taskDurationTime);
			let hours =  $scope.taskDurationTime.getHours()
			let minutes = $scope.taskDurationTime.getMinutes();
			/* retourne une promesse $http permettant de faire une requete poste
			on réalise la requete ici afin pouvoir mettre à jour facilement le scope */
			todoProvider.addTask( $scope.taskName , String(hours*60+minutes) )
			.then(function(){
				todoProvider.getAllTodos( $scope );				
			});
		}
	};


	/* supprime une tache par l'ID */
	$scope.delTask = function( id ){
		todoProvider.delTask(id).then(function(){
		 	todoProvider.getAllTodos( $scope );
		 }).catch(function(err){
		 	alert("Erreur AJAX:"+err.statusText);
		 });
	};

	$scope.startTask = function(id){
		todoProvider.startTask(id).then(function(){
			todoProvider.getAllTodos($scope);
		}).catch(function(err){
			alert("Erreur AJAX:"+err.statusText);
		});
	};

	$scope.terminateTask = function(id){
		console.log(id);
		todoProvider.terminateTask(id).then(function(){
			todoProvider.getAllTodos($scope);
		}).catch(function(err){
			alert("Erreur AJAX:"+err.statusText);
		});
	}

 });