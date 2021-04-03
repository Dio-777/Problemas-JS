function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado===8)return true;
    var patron=/[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular(){
    var valor1 = document.formulario.cantidad1.value;
    var valor2 = document.formulario.cantidad2.value;
    var valor3 = document.formulario.cantidad3.value;
    var result = parseInt(valor1)+parseInt(valor2)+parseInt(valor3);
    var comision = result*0.1;
    var total = 5000+comision;

    document.formulario.sueldoti.value="$"+total;
}
function borrar(){
    document.formulario.sueldoti.value=" ";
    document.formulario.cantidad1.value=" ";
    document.formulario.cantidad2.value=" ";
    document.formulario.cantidad3.value=" ";
}