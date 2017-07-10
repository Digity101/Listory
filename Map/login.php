<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
include "config.php";
include "Functies.php";


$stmt = $conn->prepare("SELECT Username, Password FROM `Login` WHERE Username = ? AND Password = ?");
$stmt->bind_param("ss", $username, $password);

$username = $_POST["uname"];
$password = $_POST["psw"];
$stmt->execute();

//bind_result stopt resultateten in variable per kolom? fetch zorgt ervoor dat ze eruit gaan
$stmt->bind_result($us,$pass);

//herhaal fetch met while loop als je door elke rij wilt gaan
if($stmt->fetch()){;
	$LoginI = new stdClass();
	$LoginI->Uname = $_POST["uname"];
	$stmt->close();
	if(isset($_POST["RememberMe"])){
	    $LoginI->RememberMe = $_POST["RememberMe"];
	}
	//Begin Querys
	$query = "SELECT Groep FROM `Login` WHERE Username = ? ";
	HaalDBData($query, "GroepN", $conn, $LoginI->Uname, $LoginI, false);
	$query = "SELECT Username FROM `Login` WHERE Groep = ? ";
	HaalDBData($query, "GroepUs", $conn, $LoginI->GroepN, $LoginI, true);
	//begin paginas opvragen
	HaalPagInh("Groepvorming.html", $LoginI);
	HaalPagInh("Groepjeinvullen.html", $LoginI);
	echo json_encode($LoginI);
	
} else {
    //echo "Wachtwoord of gebruikersnaam klopt niet";
	http_response_code(404);
	$stmt->close();
}



?>