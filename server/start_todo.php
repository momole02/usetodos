  <?php 

 include ('json_file_helper.php');



 if(isset($_GET['id'])){
	$id = $_GET['id'];
	$todos = load();

	for($i=0;$i<count($todos);++$i){
	 	if($todos[$i]['id']===$id){
	 		$todos[$i]['started'] = '1';
	 		$todos[$i]['start_time'] = time();
	 		break;
	 	}
	 }
	save($todos);
}
