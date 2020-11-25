
     function guardar(){
   
    var _nom = document.getElementById("nom").value;
    var _ape = document.getElementById("ape").value;
    var _eda = document.getElementById("eda").value;
    var _dir = document.getElementById("dir").value;
    var _ema = document.getElementById("ema").value;

    var fila="<tr><td>"+_nom+"</td><td>"+_ape +"</td><td>"+_eda +"</td><td>"+_dir +"</td><td>"+_ema +"</td></tr>";

    var btn = document.createElement("TR");
    btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);
}


function validar(){
   var nom = document.getElementById("nom").value;
if( nom == null || nom.length == 0 || /^\s+$/.test(nom)) {
  alert("El Nombre introducido no es válido");
} 
 var ape_ = document.getElementById("ape").value;
if( ape_ == null || ape_.length == 0 || /^\s+$/.test(ape_)) {
  alert("El Apellido introducido no es válido");
} 
    var _eda = document.getElementById("eda").value;
    if( _eda == null || _eda.length == 0 || /^([0-100])*$/.test(_eda)) {
  alert("La edad introducida no es válida");
} 
    var _dir = document.getElementById("dir").value;
   if( _dir == null || _dir.length == 0 || /^\s+$/.test(_dir)) {
  alert("La direccion introducida no es válida");
}

    var _ema = document.getElementById("ema").value;
    if(_ema == null || _ema.length == 0 || /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(_ema))  {
   alert("El email introducido no es válido");;
}
}

