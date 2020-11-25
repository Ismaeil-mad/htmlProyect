<?php
header('Content-type: application/json');

if (!empty($_GET['nombre']))
{
	require("conexion.php");
	$stmt=$pdo->prepare("select * from usuarios where nombre=:elnombre");
	$stmt->bindParam(':elnombre',$_GET['nombre']);

	$stmt->execute();

	if ($stmt->rowCount()!=0)
	{
		echo json_encode($stmt->fetch());
		/*
		echo "<br/>Informacion obtenida de la base de datos: ";
		echo "<br/>Nombre: ".$fila['nombre'];
		
		 */
	}
	else
		echo '{"status":"error"}';
}
?>