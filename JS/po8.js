function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado===8)return true;
    var patron1=/0[0-9\d .]/;

    
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular(){
    var valor1 = document.formulario.cantidad1.value;
    var valor2 = document.formulario.cantidad2.value;
    var valor3 = document.formulario.cantidad3.value;
    var valor4 = document.formulario.cantidad4.value;
    var valor5 = document.formulario.cantidad5.value;
    
    var promedio = (parseInt(valor1)+parseInt(valor2)+parseInt(valor3))/3
    var calificacionFinal = (promedio*0.55)+(parseInt(valor4)*0.30)+(valor5*0.15)
    
    document.formulario.calif.value = calificacionFinal;
}

function borrar(){
    document.formulario.calif.value=" ";
    document.formulario.cantidad.value=" ";
}