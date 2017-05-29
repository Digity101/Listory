<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
include "config.php";


$stmt = $conn->prepare("SELECT Username, Password FROM `Login` WHERE Username = ? AND Password = ?");
$stmt->bind_param("ss", $username, $password);

$username = $_POST["uname"];
$password = $_POST["psw"];
$stmt->execute();

//bind_result stopt resultateten in variable per kolom? fetch zorgt ervoor dat ze eruit gaan
$stmt->bind_result($us,$pass);

//herhaal fetch met while loop als je door elke rij wilt gaan
if($stmt->fetch()){;
    echo "account bestaat";
} else{
    echo "Wachtwoord of gebruikersnaam klopt niet";
}

$stmt->close();
?>