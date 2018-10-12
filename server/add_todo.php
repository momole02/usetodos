<?php 
/*
	todo_api.php
	API pour la gestion des todoList
*/

require_once('json_file_helper.php');

$data = load();

$createTime = time();
$name = 
	isset($_POST['task_name'])
	? $_POST['task_name']
	: 'Sans titre'; 

$estimatedDuration = 
	isset($_POST['task_duration']) 
	? $_POST['task_duration'] 
	: '30';

$id = 'task-'.date('dmYhis');
$endTime = '...';
$gain = '...';
$started = '0';
$terminated = '0';

array_push($data, [
	'id' =>$id,
	'create_time' => $createTime,
	'name' => $name,
	'start_time' => '...',
	'est_duration' => $estimatedDuration,
	'end_time' => $endTime,
	'gain' => $gain,
	'started' => $started,
	'terminated' => $terminated
]);

save( $data );