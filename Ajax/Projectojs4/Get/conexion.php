<?php
# Conectamos a la base de datos
$host='localhost';
$dbname='clientes';
$user='root';
$pass='';

try {
	$pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
}
catch(PDOException $e) {
	echo $e->getMessage();
}
