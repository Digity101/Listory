<?php
	include("config.php");
	print_r($_POST);
	$query = "UPDATE Login SET Groep = \"" . $_POST["NgroepN"] . "\"WHERE Username = \"" . $_POST["Uname"] . "\"";
	echo $query;
	$stmt = $conn->prepare($query);
	$stmt->execute();
	$stmt->close();
?>