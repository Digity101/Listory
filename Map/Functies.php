<?php
function HaalDBData ($Q, $Naam, $conn ,$GN, $LoginI, $MURE){
	$stmt = $conn->prepare($Q);
	$stmt->bind_param("i", $GN);
	$stmt->execute();
	$stmt->bind_result($TmpV);
	if($MURE){
		$LoginI->{$Naam} = array();
		while($stmt->fetch()){
			array_push($LoginI->{$Naam} , $TmpV);
		}
		//print_r($LoginI->{$Naam});
		$stmt->close();
	} else {
		$LoginI->{$Naam} = $TmpV;
	}
}
function HaalPagInh ($Pag, $LoginI){
	if (!(property_exists($LoginI , "Htmlpag"))){
		$LoginI->Htmlpag = 0;
	}
	if(!(is_array($LoginI->Htmlpag))){
		$LoginI->Htmlpag = array();
	}
	$Regex = "/\<div id\=\"Wrapper\"\>([\s\S]*?)\<\/div\>\<\!\-\-EndContent\-\-\>/";
	$PagPre = file_get_contents($Pag);
	preg_match($Regex, $PagPre, $PagPro);
	array_push($LoginI->Htmlpag, $PagPro[0]);
}
?>