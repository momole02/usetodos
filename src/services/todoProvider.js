 /*
 	todoProvider.js
 	service permettant de gérer les TodoLists
 */

 'use strict'
 mainModule.service('todoProvider' , function($http){

 	this.getAllTodos = function( $scope ){
 		$http({
			url:'server/list_todo.php',
			method:'GET'
		}).then(function(response){		
			
			$scope.todos = response.data;
			console.log('[todoProvider.js] Todos loaded !');

		}).catch(function(error){
			alert("Erreur AJAX : "+error.statusText);
		});
 	};

 	this.addTask = ($scope ,name,duration )=>{
 		console.log(name , duration);

 		let data = 'task_name='+encodeURIComponent(name)
 		+"&"+'task_duration='+encodeURIComponent(duration);
 		$http.post('server/add_todo.php' ,data , {
 			'headers' : {'Content-type' : 'application/x-www-form-urlencoded'}
 		}).then(()=>{
 			this.getAllTodos($scope);
 		}).catch((v)=>{
 			alert('AJAX Error : '+v.statusText);
 		});
 	}
 });