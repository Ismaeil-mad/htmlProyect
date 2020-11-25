
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

    

function mostrarProductos(){
 var usuario = getCookie("use");
  var firstName = getCookie("firstName");
  
        if(firstName != null) {
            alert("Bienvenido de nuevo, " + firstName);
        } else {
            firstName = prompt("Por favor Introduzca su nombre");
            if(firstName != "" && firstName != null) {
                setCookie("firstName", firstName, 1);
            }
        }

     if (usuario==""){
      usuario= prompt("introduzca su edad");
       setCookie("use", usuario, 365);
     }
  
  else if (usuario <18) {
    alert("No se puede mostrar este contenido para menores de 18")
  } else if (usuario>=18){
     document.getElementById("colcen").innerHTML="los Productos del gimnasio son: MYRUN<br/><button onclick=mOut1()>descrpcion</button> <button onclick=AñadirAlaCesta1()>Añadir</button><br/> SKILLBIKE<br/><button onclick=mOut2()>descrpcion</button><button onclick=AñadirAlaCesta2()>Añadir</button> <br/> CROSS PERSONAL<br/><button onclick=mOut3()>descrpcion</button><button onclick=AñadirAlaCesta3()>Añadir</button> <br/> RECLINE PERSONAL<br/><button onclick=mOut4()>descrpcion</button><button onclick=AñadirAlaCesta4()>Añadir</button> "
     ;
 }
  
  }
function eliminarCookies(){
    setCookie("use","",0);
    document.getElementById("cen").innerHTML="";

}

