/*
	listTodoController.js
	Controlleur d'affichage des todoList
*/
 'use strict'
 mainModule.controller( 'listTodoController' , function($rootScope , $scope , todoProvider){

 	todoProvider.getAllTodos( $rootScope )
	
 });