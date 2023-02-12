const botonNumeros = document.getElementsByName("data-number");
const botonOpera = document.getElementsByName("data-opera");
const botonBorrar = document.getElementsByName("data-borrar")[0];
const botonIgual = document.getElementsByName("data-igual")[0];
var result = document.getElementById("resultados");
var operacionActual= "";
var operacionAnterior= "";
var operacion= undefined;

botonNumeros.forEach(function(boton) {
    boton.addEventListener("click", function (){
        agregarNumero(boton.innerText); 
        
    });
});

botonOpera.forEach(function (boton) {
    boton.addEventListener("click", function () {
        seleccionarOperacion(boton.innerText);

    });
});

botonIgual.addEventListener("click", function () {
    calcular();
    ActualizarDisplay();
});

botonBorrar.addEventListener("click", function () {
    clear();
    ActualizarDisplay();
});

function seleccionarOperacion(op){
    if(operacionActual === "") return;
    if(operacionAnterior !== "" ){
        calcular()
        
    }
    operacion = op.toString();
        operacionAnterior = operacionActual;
        operacionActual = "" ;
};

function calcular(){
    var calculo;
    const anterior = parseFloat(operacionActual);
    const actual = parseFloat(operacionAnterior);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case ("+"):
            calculo= anterior + actual;
            break;
        case ("-"):
        calculo= anterior - actual;   
            break;
        case("x"):
        calculo= anterior * actual;
            break;
        case("/"):
        calculo= anterior / actual;
            break;
        default:
            return;
    };

    operacionActual = calculo;
    operacion=undefined;
    operacionAnterior= "";
};

function agregarNumero(num){
    operacionActual = operacionActual.toString() + num.toString();
    ActualizarDisplay();
};

function clear(){
    operacionActual= "";
    operacionAnterior= "";
    operacion=undefined;
};

function ActualizarDisplay(){
    result.value = operacionActual;
};
