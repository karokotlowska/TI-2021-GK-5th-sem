<?php
function add($v1, $v2){
	return $v1 + $v2;
}

function subtract($v1, $v2){
	return $v1 - $v2;
}

function multiply($v1, $v2){
	return $v1 * $v2;
}

function divide($v1, $v2){
	return $v1 / $v2;
}

$server = new SoapServer(null, array(
	'uri' => "http://pascal.fis.agh.edu.pl/Demo",
	'soap_version' => SOAP_1_2));
$server->addFunction("add"); 
$server->addFunction("subtract"); 
$server->addFunction("multiply"); 
$server->addFunction("divide"); 
$server->handle();
?>