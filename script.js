function encriptar(){

    var texto = document.getElementById("mensaje").value.toLowerCase();

    var textoEncriptar = texto.replace(/e/img,"enter");
    var textoEncriptar = textoEncriptar.replace(/o/img,"ober");
    var textoEncriptar = textoEncriptar.replace(/i/img,"imes");
    var textoEncriptar = textoEncriptar.replace(/a/img,"ai");
    var textoEncriptar = textoEncriptar.replace(/u/img,"ufat");

    document.getElementById("texto-encriptado").innerHTML = textoEncriptar;
    document.getElementById("sinTexto").style.display = "none";
    document.getElementById("sinMensaje").style.display = "none";
    document.getElementById("btnCopiar").style.display = "inherit";
}

function desencriptar(){

    var texto = document.getElementById("mensaje").value.toLowerCase();

    var textoEncriptar = texto.replace(/enter/img,"e");
    var textoEncriptar = textoEncriptar.replace(/ober/img,"o");
    var textoEncriptar = textoEncriptar.replace(/imes/img,"i");
    var textoEncriptar = textoEncriptar.replace(/ai/img,"a");
    var textoEncriptar = textoEncriptar.replace(/ufat/img,"u");

    document.getElementById("texto-encriptado").innerHTML = textoEncriptar;
    document.getElementById("sinTexto").style.display = "none";
    document.getElementById("sinMensaje").style.display = "none";
    document.getElementById("btnCopiar").style.display = "inherit";
}
function copiar(){
    var contenido = document.querySelector("#texto-encriptado");
    contenido.select();
    document.execCommand("copy");
 }