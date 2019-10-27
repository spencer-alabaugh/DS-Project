<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('SELECT DISTINCT stationNumber FROM Member');
//$stmt->execute([$_GET['memberId']]);

$stationNumber = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($stationNumber, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
