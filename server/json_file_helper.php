<?php 
/**
 * json_file_helper.php
 * 
 * Permet d'enregistrer et recharger un fichier JSON
*/

function load()
{
	if( file_exists('todo_file.json') ){
		return json_decode(
			file_get_contents('todo_file.json'),
			TRUE
		);
	}
}

function save( $data ){
	file_put_contents('todo_file.json', json_encode($data));
}

function format_time($tm){
	$time = (int)$tm;
	$hours = (int)floor($time/60);
	$minutes= $time%60;
	return (($hours>0)?"$hours hr(s) et ":"")."$minutes min(s)";
}
