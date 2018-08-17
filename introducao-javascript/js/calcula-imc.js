// Busca um elementro no mundo HTML e traz para o mundo  Javascript
var titulo = document.querySelector(".titulo"); 
//textContext (Conteúdo do Texto) usado para spam, td, div. ou seja elemnte sem input
titulo.textContent = "Aparecida Nutricionista";

//para buscar elemendo ID usar o #
var paciente = document.querySelector("#primeiro-paciente");
//podemos busacr ainda dentro do proprio elemento
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoValido =  validaPeso(peso);
var alturaValida = validaAltura(altura);
 
if (alturaValida && pesoValido)
{
 var imc = CalculaIMC(peso, altura);
 tdImc.textContent = imc;
}else
{
    tdImc.textContent = "*";
}


function validaAltura(altura)
{
    if (altura > 0 && altura < 4)
    {
        return true;
    }else
    {
        return false;
    }
}


function validaPeso(peso)
{
    if (peso > 0 && peso < 1000)
    {
        return true;
    }else
    {
        return false;
    }
}


// Aula 2
//buscar todos os elementos pelo Selector
// e faz loop para calcular todos imc
var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(paciente => {
    
    //podemos busacr ainda dentro do proprio elemento
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido =  (peso > 0 && peso <= 1000);
    var alturaValida = (altura > 0 && altura <= 4.00);
    
    if (alturaValida && pesoValido)
    {
        tdImc.textContent = CalculaIMC(peso, altura);
    }else
    {
        paciente.classList.add("paciente-invalido");
        tdImc.textContent = "*";
    }


});
 


function CalculaIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

