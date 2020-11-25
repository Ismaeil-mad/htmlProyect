<?php
require_once 'conexion.php';

if (!empty($_POST['nom']))
{
	try{	
		$stmt = $pdo->prepare("insert into usuarios(nombre) values(:nombre)");
# Ejecutamos la consulta con ->execute() método del objeto PDOStatement
		$stmt->bindParam(':nombre', $_POST['nom']);
		
# Este método devuelve true o false.
		$stmt->execute();

		echo "ok";
	}
	catch(PDOException $e) {
		echo $e->getMessage();
	}
}
?>