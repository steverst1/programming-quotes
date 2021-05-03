<?php
//API: http://quotes.stormconsultancy.co.uk/quotes.json
$json = file_get_contents('./input.json');

$quotes = json_decode($json, 1);
/*echo "<pre>";
print_r($quotes);*/
$Quotes = [];
foreach ($quotes as $i => $quote){
	$Quotes[$i]['author'] = $quote["author"];
	$Quotes[$i]['quote'] = $quote["quote"];
}
/*print_r($Quotes);*/
file_put_contents("output.json",json_encode($Quotes,JSON_PRETTY_PRINT));
?>