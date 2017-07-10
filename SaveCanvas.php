<?php
	ini_set('display_errors', 'On');
	error_reporting(E_ALL);
	include("Functies.php");
	define('UPLOAD_DIR', 'CanvasSaves/');
	$img = $_POST['imgBase64'];
	$img = str_replace('data:image/png;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	if (!file_exists(UPLOAD_DIR . "Groep_".$_POST['Groep'])) {
	  mkdir(UPLOAD_DIR . "Groep_".$_POST['Groep'] , 0777, true);
	}
	$file = UPLOAD_DIR ."Groep_". $_POST['Groep'] . "/" . $_POST['Uname']. "_Vraagstart_" . $_POST['Vraag'] .  '.png';
	$Fopen =  fopen($file, "w");
	chmod($file, 0777);
	fwrite($Fopen, $data);
	fclose($Fopen);
	//$success = file_put_contents($file, $data);
	//print $success ? $file : 'Unable to save the file.';
	$files = glob(UPLOAD_DIR ."Groep_". $_POST['Groep']. '/*.*');
   foreach ($files as $key =>$value) { 
      //if (preg_match("[^". $_POST['Uname'] ."]",$file)) 
        // $files[] = $l;
		if (preg_match("(". $_POST['Uname'] .")",$value)){
			unset($files[$key]);
		}
   }
   $ImgVraag = new stdClass();
    $file = array_rand($files);
	if(count($files) != 0){
		$ImgVraag->Img = base64_encode(file_get_contents($files[$file]));
		$ImgVraag->vraag = get_string_between($files[$file], "_Vraagstart_" , '.png');
	} else {
		$ImgVraag->Img = "Er is nog niets om te raden.";
	}
	echo json_encode($ImgVraag);
	
?>