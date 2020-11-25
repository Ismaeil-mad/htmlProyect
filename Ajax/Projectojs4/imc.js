function imc(){
	var peso = prompt("Introduzca su peso en kg(minimo 40kg y maximo 120kg)");
	while (isNaN(peso) || peso<40 || peso >120){
	var peso;
	alert ("Error, introduce un peso correcto");
	peso = prompt("Introduzca su peso en kg");
		}

		
	var altura = prompt("Introduzca su altura en centimetros(minimo 140 cm y maximo 220cm)");
	while (isNaN(altura)|| altura<140 || altura>220){
	var altura;
	alert ("Error, introduce tu altura de nuevo");
	altura = prompt("Introduzca su altura en centimetros");
		}

	var imc = (peso/((altura/100*altura/100)));
	if(imc<18.5)
	 document.getElementById("colbody").innerHTML = "Su indice de masa corporal es "+imc +"<br></br>"+'<b>Peso insuficiente</b>'+"<br>"+
							"Normopeso" + "<br>" + "Sobrepeso grado I" + "<br>" + "Sobrepeso grado II(preobesidad)" + "<br>" + "Obesidad tipo I"
							+ "<br>" + "Obesidad tipo II" + "<br>"+ "Obesidad tipo III(morbida)"+"<br>"+
							"Obesidad tipo IV(extrema)" ; 
			else if(imc>=18.5 && imc<=24.9)
				document.getElementById("colbody").innerHTML = "Su indice de masa corporal es "+imc +"<br></br>"+"Peso insuficiente"+"<br>"+
							"<b>Normopeso</b>" + "<br>" + "Sobrepeso grado I" + "<br>" + "Sobrepeso grado II(preobesidad)" + "<br>" + "Obesidad tipo I"
							+ "<br>" + "Obesidad tipo II" + "<br>"+ "Obesidad tipo III(morbida)"+"<br>"+
							"Obesidad tipo IV(extrema)"; 
			else if(imc>=25 && imc<=26.9)
				document.getElementById("colbody").innerHTML ="Su indice de masa corporal es "+imc +"<br></br>"+"Peso insuficiente"+"<br>"+
							"Normopeso" + "<br>" + "<b>Sobrepeso grado I</b>" + "<br>" + "Sobrepeso grado II(preobesidad)" + "<br>" + "Obesidad tipo I"
							+ "<br>" + "Obesidad tipo II" + "<br>"+ "Obesidad tipo III(morbida)"+"<br>"+
							"Obesidad tipo IV(extrema)"; 
			else if(imc>=27 && imc<=29.9)
				document.getElementById("colbody").innerHTML ="Su indice de masa corporal es "+imc +"<br></br>"+"Peso insuficiente"+"<br>"+
							"Normopeso" + "<br>" + "Sobrepeso grado I" + "<br>" + "<b>Sobrepeso grado II(preobesidad)</b>" + "<br>" + "Obesidad tipo I"
							+ "<br>" + "Obesidad tipo II" + "<br>"+ "Obesidad tipo III(morbida)"+"<br>"+
							"Obesidad tipo IV(extrema)"; 
			else if (imc>=30 && imc<=34.9)
				document.getElementById("colbody").innerHTML ="Su indice de masa corporal es "+imc +"<br></br>"+"Peso insuficiente"+"<br>"+
							"Normopeso" + "<br>" + "Sobrepeso grado I" + "<br>" + "Sobrepeso grado II(preobesidad)" + "<br>" + "<b>Obesidad tipo I</b>"
							+ "<br>" + "Obesidad tipo II" + "<br>"+ "Obesidad tipo III(morbida)"+"<br>"+
							"Obesidad tipo IV(extrema)"; 
			else if (imc>=35 &&imc<=39.9)
				document.getElementById("colbody").innerHTML ="Su indice de masa corporal es "+imc +"<br></br>"+"Peso insuficiente"+"<br>"+
							"Normopeso" + "<br>" + "Sobrepeso grado I" + "<br>" + "Sobrepeso grado II(preobesidad)" + "<br>" + "Obesidad tipo I"
							+ "<br>" + "<b>Obesidad tipo II</b>" + "<br>"+ "Obesidad tipo III(morbida)"+"<br>"+
							"Obesidad tipo IV(extrema)"; 
			else if (imc>=40 && imc <=49.9)
				document.getElementById("colbody").innerHTML ="Su indice de masa corporal es "+imc +"<br></br>"+"Peso insuficiente"+"<br>"+
							"Normopeso" + "<br>" + "Sobrepeso grado I" + "<br>" + "Sobrepeso grado II(preobesidad)" + "<br>" + "Obesidad tipo I"
							+ "<br>" + "Obesidad tipo II" + "<br>"+ "<b>Obesidad tipo III(morbida)</b>"+"<br>"+
							"Obesidad tipo IV(extrema)"; 
			else if (imc>=50)
			document.getElementById("colbody").innerHTML ="Su indice de masa corporal es "+imc +"<br></br>"+"Peso insuficiente"+"<br>"+
							"Normopeso" + "<br>" + "Sobrepeso grado I" + "<br>" + "Sobrepeso grado II(preobesidad)" + "<br>" + "Obesidad tipo I"
							+ "<br>" + "Obesidad tipo II" + "<br>"+ "Obesidad tipo III(morbida)"+"<br>"+
							"<b>Obesidad tipo IV(extrema)</b>"; 	 
	
}


