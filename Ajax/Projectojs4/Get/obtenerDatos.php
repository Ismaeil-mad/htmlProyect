<?php
header('Content-type: application/json');

if (!empty($_GET['nombreProducto']))
{
	require("conexion.php");
	$stmt=$pdo->prepare("select * from productos where nombreProducto=:elnombre");
	$stmt->bindParam(':elnombre',$_GET['nombreProducto']);

	$stmt->execute();

	if ($stmt->rowCount()!=0)
	{
		echo json_encode($stmt->fetch());
		/*
		echo "<br/>Informacion obtenida de la base de datos: ";
		echo "<br/>Nombre: ".$fila['nombreProducto'];
		 */
	}
	else
		echo '{"status":"error"}';
}
?>