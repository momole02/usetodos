 'use strict'
 mainModule.controller( 'listTodoController' , function($scope , $http){

 	$http({
		url:'server/list_todo.php',
		method:'GET'
	}).then(function(response){
		
		$scope.todos = response.data;
		console.log('[listTodoController.js] Todos loaded !');

	}).catch(function(error){
		alert("AJAX error : "+error.statusText);
	});
	
 });