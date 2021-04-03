function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado===8)return true;
    var patron=/[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}
function Menosdeunaño(){
    var valor1 = document.formulario.Menosdeunaño.value;
    var result = parseInt(valor1)
    var total = valor1*0.5
    document.formulario.sueldoti.value="$"+total;
}
function oneaño(){
    var valor1 = document.formulario.oneaño.value;
    var result = parseInt(valor1)
    var total = valor1*0.7
    document.formulario.sueldoti.value="$"+total;
}
function twoaños(){
    var valor1 = document.formulario.twoaños.value;
    var result = parseInt(valor1)
    var total = valor1*0.10
    document.formulario.sueldoti.value="$"+total;

}
function fiveaños(){
    var valor1 = document.formulario.fiveaños.value;
    var result = parseInt(valor1)
    var total = valor1*0.15
    document.formulario.sueldoti.value="$"+total;
}
function tenaños(){
    var valor1 = document.formulario.tenaños.value;
    var result = parseInt(valor1)
    var total = valor1*0.20
    document.formulario.sueldoti.value="$"+total;
}