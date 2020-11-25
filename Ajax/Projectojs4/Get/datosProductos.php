<?php
//Obtenemos los datos de los input
$nombreProducto = $_POST["nombreProducto"];
$descripcion = $_POST["descripcion"];
$precio = $_POST["precio"];


//Seteamos el header de "content-type" como "JSON" para que jQuery lo reconozca como tal
header('Content-Type: application/json');
//Guardamos los datos en un array
$datos = array(
'estado' => 'ok',
'nombreProducto' => $nombreProducto, 
'descripcion' => $descripcion, 
'precio' => $precio
);
//Devolvemos el array pasado a JSON como objeto
echo json_encode($datos, JSON_FORCE_OBJECT);
?>