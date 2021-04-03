function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado===8)return true;
    var patron=/[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}
function Menosdeunaño(){
    var valor1 = document.formulario.cantidad1.value;
    var result = parseInt(valor1)
    var total = result*0.05
    document.formulario.sueldoti.value="$"+total;
}
function oneaño(){
    var valor1 = document.formulario.cantidad1.value;
    var result = parseInt(valor1)
    var total = result*0.07
    document.formulario.sueldoti.value="$"+total;
}
function twoaños(){
    var valor1 = document.formulario.cantidad1.value;
    var result = parseInt(valor1)
    var total = result*0.10
    document.formulario.sueldoti.value="$"+total;

}
function fiveaños(){
    var valor1 = document.formulario.cantidad1.value;
    var result = parseInt(valor1)
    var total = result*0.15
    document.formulario.sueldoti.value="$"+total;
}
function tenaños(){
    var valor1 = document.formulario.cantidad1.value;
    var result = parseInt(valor1)
    var total = result*0.20
    document.formulario.sueldoti.value="$"+total;
}