 <?php 
 /*
 	list_todo.php

 	Affiche la liste des todos
 */
 	
 header('Content-type:application/json');
 
 include('json_file_helper.php');


 $data = load();

 for ($i=0; $i <count($data) ; $i++) { 
 	$data[$i]['est_duration'] = format_time($data[$i]['est_duration']);
 	$buf=date('d/m/Y H:i',$data[$i]['start_time']);
 	$data[$i]['start_time'] = $buf!==FALSE ? $buf : '...';
 	$buf=date('d/m/Y H:i',$data[$i]['end_time']);
 	$data[$i]['end_time'] = $buf!==FALSE ? $buf : '...';
 	$data[$i]['gain'] = format_time($data[$i]['gain']);
 }
 print json_encode($data);

 //save($data);
