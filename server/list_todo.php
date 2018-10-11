 <?php 
 /*
 	list_todo.php

 	Affiche la liste des todos
 */
 	
 header('Content-type:application/json');
 
 include('json_file_helper.php');

 $data = load();
 print json_encode($data);

 //save($data);
