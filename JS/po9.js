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

    var total=parseInt(valor1)+parseInt(valor2)    
    var porhom= parseInt(valor1)*100/total
    var pormuj= parseInt(valor2)*100/total
    
    document.formulario.porc1.value =pormuj+"%";
    document.formulario.porc2.value =porhom+"%";
}

function borrar(){
    document.formulario.porc1.value=" ";
    document.formulario.porc2.value=" ";
    document.formulario.cantidad2.value=" ";
    document.formulario.cantidad1.value=" ";
}