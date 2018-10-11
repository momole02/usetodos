 <?php 
 /*
 	list_todo.php

 	Affiche la liste des todos
 */
 	
 header('Content-type:application/json');

 print json_encode([
 	[
 		'name' => 'Ranger la chambre',
 		'est_time' => '00:10:00',
 		'time' => '...',
 		'gain' => '...',
 		'id' => 'task-'.date('Ymdhis')
 	],
 	[
 		'name' => 'Ranger la chambre',
 		'est_time' => '00:10:00',
 		'time' => '...',
 		'gain' => '...',
 		'id' => 'task-'.date('Ymdhis')
 	],
 ]);
