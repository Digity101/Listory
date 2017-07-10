<?php
function HaalDBData ($Q, $Naam, $conn ,$GN, $LoginI, $MURE, $SoortV, $BINDP){
	$stmt = $conn->prepare($Q);
	if($BINDP){
		$stmt->bind_param($SoortV, $GN);
	}
	$stmt->execute();
	$stmt->bind_result($TmpV);
	if($MURE){
		$LoginI->{$Naam} = array();
		while($stmt->fetch()){
			array_push($LoginI->{$Naam} , $TmpV);
		}
	} else {
		$stmt->fetch();
		$LoginI->{$Naam} = $TmpV;
	}
	$stmt->close();
}
function HaalPagInh ($Pag, $LoginI,$Admin){
	if (!(property_exists($LoginI , "Htmlpag"))){
		$LoginI->Htmlpag = 0;
	}
	if(!(is_array($LoginI->Htmlpag))){
		$LoginI->Htmlpag = array();
	}
	$Regex = "/\<div id\=\"Wrapper\"\>([\s\S]*?)\<\/div\>\<\!\-\-EndContent\-\-\>/";
	$PagPre = file_get_contents($Pag);
	preg_match($Regex, $PagPre, $PagPro);
	if($Admin){
		$LoginI->AdminPag = $PagPro[0];
	}else{
		array_push($LoginI->Htmlpag, $PagPro[0]);
	}
}

function get_string_between($string, $start, $end){
    $string = ' ' . $string;
    $ini = strpos($string, $start);
    if ($ini == 0) return '';
    $ini += strlen($start);
    $len = strpos($string, $end, $ini) - $ini;
    return substr($string, $ini, $len);
}
?>