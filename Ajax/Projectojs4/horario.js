function createTable(){
   var colum = new Array ("Lunes", "Martes","Miercoles", "Jueves" ,"Viernes");
    var filas = new Array ("9:00-11:00", "11:00-13:00", "13:00-15:00");
    
    var tabla="<table border=\"1\">";
   
    tabla+="<tr><td></td>";
    for(j=0;j<colum.length;j++){
        tabla+="<td bgcolor='blue'>"+(colum[j])+ "</td>";
       
    }
     
    tabla+="</tr>";

    for(i=0;i<filas.length;i++){
        tabla+="<tr>";
        tabla+="<td bgcolor='red'>"+(filas[i])+ "</td>";
       tabla+= "<td>"+"</td>";
        tabla+= "<td>" + "</td>";
         tabla+= "<td>"+ "</td>";
          tabla+= "<td>"+ "</td>";
           tabla+= "<td>"+ "</td>";



        tabla+="</tr>";
    }
    tabla+="</table>";


    //creamos la tabla de la tarde.
     var columna = new Array ("Lunes", "Martes","Miercoles", "Jueves" ,"Viernes","Sabado", "Domingo");
    var fila = new Array ("16:00-17:00", "17:00-18:00", "18:00-19:00","19:00-20:00", "20:00-21:00");
    var tablaTarde="<table border=\"1\">";
   
    tablaTarde+="<tr><td></td>";
    for(j=0;j<columna.length;j++){
        tablaTarde+="<td bgcolor='blue'>"+(columna[j])+ "</td>";
    }
    tablaTarde+="</tr>";
   
    for(i=0;i<fila.length;i++){
        tablaTarde+="<tr>";
        tablaTarde+="<td bgcolor='red'>"+(fila[i])+"</td>";
        tablaTarde+="<td>"+"</td>";
        tablaTarde+="<td>"+"</td>";
        tablaTarde+="<td>"+"</td>";
        tablaTarde+="<td>"+"</td>";
        tablaTarde+="<td>"+"</td>";
        tablaTarde+="<td>"+"</td>";
        tablaTarde+="<td>"+"</td>";

   

        tablaTarde+="</tr>";
    }
    tablaTarde+="</table>";

        document.getElementById("colbody").innerHTML="Horario de mañana" + "<br></br>"+ tabla + "<br></br>" + "Horario de tarde" +tablaTarde;
   

}