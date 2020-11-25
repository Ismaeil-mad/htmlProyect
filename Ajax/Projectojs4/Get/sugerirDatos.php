<?php

if (!empty($_GET['nombreProducto']))
{
	require("conexion.php");

	$stmt=$pdo->prepare("select nombreProducto from productos where nombreProducto like :busqueda");
	$stmt->bindValue(':busqueda',$_GET['nombreProducto'].'%');
	$stmt->execute();

	while ($fila = $stmt->fetch())
		echo "<li>" . $fila['nombreProducto'] . "</li>\n";
}
?>