function calculadora(){
	var sumabaja=0;
	var sumaMedio=0;
	var sumaAlto=0;
			
	while(actividades!=0){
		var actividades = prompt ("Introduce el numero de la actividad: 1 - Baja intensidad ; 2 - Intensidad media; 3 -Intensidad alta 0_ resultado");
		var actividades;
	
			if (actividades == 1){
		    while(actividadbaja!=0){
			var actividadbaja = prompt("1- Pasear: 2- Sentarse:");
			if (actividadbaja!=0){
			var tiempobaja = prompt("introduce el tiempo"); }
			while(isNaN(tiempobaja) || (tiempobaja)<0){
				alert("corrige el tiempo")
				tiempobaja=prompt("vuelve a introducir el tiempo");
			}

		var sumabaja =(parseInt)(sumabaja)+(parseInt)(tiempobaja);
		break;



		}
}

		else if (actividades == 2){
			while(actividadmedia!=0){
			var actividadmedia = prompt ("1- Correr: 2- Nadar:");
			if (actividadmedia!=0)
			var tiempomedio = prompt("introduzca el tiempo"); 
		while(isNaN(tiempomedio) || (tiempomedio)<0){
				alert("corrige el tiempo")
				tiempomedio=prompt("vuelve a introducir el tiempo");
			}

		var sumaMedio =(parseInt)(sumaMedio)+(parseInt)(tiempomedio);
		break;

		}
}
	else if (actividades ==3){
			while(actividadalta!=0){
			var actividadalta = prompt("1- Hacer Ejercicios: 2- Sauna:");
			if (actividadalta!=0)
			var tiempoalta = prompt("introduce el tiempo"); 
		while(isNaN(tiempoalta) || (tiempoalta)<0){
				alert("corrige el tiempo")
				tiempoalta=prompt("vuelve a introducir el tiempo");
			}

		var sumaAlto =(parseInt)(sumaAlto)+(parseInt)(tiempoalta);
		break;
		}
}
		var	sumaTotal =((parseInt)(sumabaja/60)*40) + ((parseInt)(sumaMedio/60)*80)+ ((parseInt)(sumaAlto/60)*120);

}

document.getElementById("colbody").innerHTML= "El total de las calorias es :" + sumaTotal ;
}	