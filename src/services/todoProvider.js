 /*
 	todoProvider.js
 	service permettant de gérer les TodoLists
 */

 'use strict'
 let todos = [];

 mainModule.service('todoProvider' , function($http){

 	this.getAllTodos = function( $scope ){
 		$http({
			url:'server/list_todo.php',
			method:'GET'
		}).then(function(response){		
			todos = response.data;
			$scope.todos = todos;
			console.log('[todoProvider.js] Todos loaded !');

		}).catch(function(error){
			alert("Erreur AJAX : "+error.statusText);
		});
 	};

 	this.addTask = (name,duration )=>{
 		console.log(name , duration);

 		let data = 'task_name='+encodeURIComponent(name)
 		+"&"+'task_duration='+encodeURIComponent(duration);

 		return $http.post('server/add_todo.php' ,data , {
 			'headers' : {'Content-type' : 'application/x-www-form-urlencoded'}
 		});
 	};

 	this.delTask = (id)=> $http.get('server/del_todo.php?id='+encodeURIComponent(id));
 	this.startTask =(id)=> $http.get('server/start_todo.php?id='+encodeURIComponent(id));
 	this.terminateTask=(id)=>$http.get('server/terminate_todo.php?id='+encodeURIComponent(id));
 });
