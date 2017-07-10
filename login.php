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
	HaalDBData($query, "GroepN", $conn, $LoginI->Uname, $LoginI, false, "s", true);
	$query = "SELECT Username FROM `Login` WHERE Groep = ? ";
	HaalDBData($query, "GroepUs", $conn, $LoginI->GroepN, $LoginI, true, "i", true);
	$query = "SELECT StartWeekN FROM `StartWeek`";
	HaalDBData($query, "SWeekN", $conn, 1 , $LoginI, false, "i", false);
	$query = "SELECT LengtePer FROM `StartWeek`";
	HaalDBData($query, "LengtePer", $conn, 1 , $LoginI, false, "i", false);
	$LoginI->WeekNumber = date('W') - $LoginI->SWeekN;
	//begin paginas opvragen
	HaalPagInh("Groepvorming.html", $LoginI, false);    //pag 0
	HaalPagInh("Groepjeinvullen.html", $LoginI, false);	//pag 1
	HaalPagInh("Weken.html", $LoginI, false);			//pag 2
	HaalPagInh("Opdrachten.html", $LoginI, false);		//pag 3
	HaalPagInh("Groepjes.html", $LoginI, false);		//pag 4
	HaalPagInh("Vordering.html", $LoginI, false);		//pag 5
	HaalPagInh("Meerkeuze.html", $LoginI, false);		//pag 6
	HaalPagInh("Citaat.html", $LoginI, false);			//pag 7
	HaalPagInh("Galgje.html", $LoginI, false);			//pag 8
	HaalPagInh("Tekenen.html", $LoginI, false);			//pag 9
	HaalPagInh("Foto.html", $LoginI, false);			//pag 10
	HaalPagInh("TekenenRaden.html", $LoginI, false);			//pag 11


	if($LoginI->Uname === "admin"){
		HaalPagInh("Controle.php", $LoginI, true);
	}
	echo json_encode($LoginI);
	
} else {
    //echo "Wachtwoord of gebruikersnaam klopt niet";
	http_response_code(404);
	$stmt->close();
}



?>