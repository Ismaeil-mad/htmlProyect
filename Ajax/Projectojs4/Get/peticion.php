<?php
    $aDatos = array();
    $aDatos[] = array( 'nombre' => 'Ismaeil', 'apellido' => 'Maddallah' );
    $aDatos[] = array( 'nombre' => 'Ana', 'apellido' => 'Gomez');
    $aDatos[] = array( 'nombre' => 'José', 'apellido' => 'Rodrigeuz');
    $aDatos[] = array( 'nombre' => 'Carmen', 'apellido' => 'Alonso');
    $aDatos[] = array( 'nombre' => 'Carol', 'apellido' => 'Menendez');
    $aDatos[] = array( 'nombre' => 'Dana', 'apellido' => 'Vidal');
    $aDatos[] = array( 'nombre' => 'Eduardo', 'apellido' => 'kim');
    $aDatos[] = array( 'nombre' => 'Fernandez', 'apellido' => 'Ignacio');

     echo json_encode($aDatos);
?>