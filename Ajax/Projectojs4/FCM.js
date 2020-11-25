function frecuencia(){

var edad = prompt ("Introduzca su edad");
while (isNaN(edad) || edad<0){
var edad;
alert ("Introduzca edad correcta");
edad = prompt ("Introduzca su edad");
}

var genero = prompt("Introduzca su genero: masculino o femenino");
while (genero != "masculino" && genero != "femenino"){
var genero;
alert ("genero incorrecto, introduzca un genero correcto");
genero = prompt("Introduzca su genero: masculino o femenino");
}

if (genero == "masculino")
var FCM = (220-edad);

else
var FCM = (226-edad);

document.getElementById("colbody").innerHTML="su frecuencia cardiaca es de : "+"<br>"
+"Zona de recuperacion (60%-70%)"+(parseInt)(FCM*0.6)+ "--" +(parseInt)(FCM*0.7)+"<br>"
+"Zona aerobica (70%-80%)" + (parseInt)(FCM*0.7)+ "--" +(parseInt)(FCM*0.8)  + "<br>"
+"Zona anaerobica (80%-90%)"+ (parseInt)(FCM*0.8)+ "--" +(parseInt)(FCM*0.9)  + "<br>"
+"Linea Roja (90%-100%)"+(parseInt)(FCM*0.9)+ "--" +(parseInt)(FCM*0.10);


}