<?php

if (!empty($_GET['nombre']))
{
	require("conexion.php");

	$stmt=$pdo->prepare("select nombre from usuarios where nombre like :busqueda");
	$stmt->bindValue(':busqueda',$_GET['nombre'].'%');
	$stmt->execute();

	while ($fila = $stmt->fetch())
		echo "<li>" . $fila['nombre'] . "</li>\n";
}
?>