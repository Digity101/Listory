<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
$servername = "localhost";
$username = "v15groep3";
$password = "DTMZJCCV";
$db = "v15groep3_Dummy";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $db);
mysqli_query($conn, "SET NAMES utf8");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//echo "<!---Connected successfully--->";
?>