  <?php 

 include ('json_file_helper.php');



 if(isset($_GET['id'])){
	$id = $_GET['id'];
	$todos = load();

	for($i=0;$i<count($todos);++$i){
	 	if($todos[$i]['id']===$id){
	 		$todos[$i]['terminated'] = '1';
	 		$endTime = time();/* convertir en minutes */
	 		$endTimeMins = (int)floor((float)$endTime/60);
	 		$startTime = (int)floor((float)$todos[$i]['start_time']/60); /* convertir en minutes */
	 		$estDuration = (int)floor((float)$todos[$i]['est_duration']); /* il est déja en minutes ;) */
	 		$duration = ($endTimeMins-$startTime);
	 		$gain = $estDuration-$duration;
	 		$todos[$i]['end_time'] = $endTime;
	 		$todos[$i]['gain']=$gain;
	 		break;
	 	}
	 }
	save($todos);
}
