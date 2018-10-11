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

