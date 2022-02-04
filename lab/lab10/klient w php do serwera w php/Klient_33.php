<?php
$client = new SoapClient(null, array(
  'location' => "http://pascal.fis.agh.edu.pl/~9kotlowska/soap/Serwer_33.php",
  'uri'      => "http://pascal.fis.agh.edu.pl/Demo",
  'soap_version' => SOAP_1_2,
  'trace'    => $debug ));

$return1 = $client->__soapCall("add", array(16, 8));
echo("Returning value of add() call: ".$return1."<br>");
$return2 = $client->__soapCall("subtract", array(10, 2));
echo("Returning value of subtract() call: ".$return2."<br>");
$return3 = $client->__soapCall("multiply", array(10, 5));
echo("Returning value of multiply() call: ".$return3."<br>");
$return4 = $client->__soapCall("divide", array(1024, 2));
echo("Returning value of divide() call: ".$return4."<br>");