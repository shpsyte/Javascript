// Aula 3
//Evento
//adicionand linhas na tabela


// var botaoAdicionar = document.querySelector("#adicionar-paciente");

// //addEventListener adiciona o trigger aos eventos do element, clicar, mover...

// botaoAdicionar.addEventListener("click", function(event){
//     // Previne o comportamento padrão da acao
//     event.preventDefault();

//     var form = document.querySelector("#form-adiciona");

//     //cria um objeto to tpo paciente
//     var paciente = 
//       { nome:    form.nome.value, 
//         peso:    form.peso.value, 
//         altura:  form.altura.value, 
//         gordura: form.gordura.value
//       };

//       //criar um elemente HTML
//       var pacienteTr = document.createElement("tr");
//       var nomeTd = document.createElement("td");
//       var pesoTd = document.createElement("td");
//       var alturaTd = document.createElement("td");
//       var gorduraTd = document.createElement("td");
//       var imcTd = document.createElement("td");

//       //muda o texto do elemento
//       nomeTd.textContent = paciente.nome;
//       pesoTd.textContent = paciente.peso;
//       alturaTd.textContent = paciente.altura;
//       gorduraTd.textContent = paciente.gordura;
//       imcTd.textContent = CalculaIMC(paciente.peso, paciente.altura);

//       //funcao que adiciona o elemento dentro do outro.
//       pacienteTr.appendChild(nomeTd);
//       pacienteTr.appendChild(pesoTd);
//       pacienteTr.appendChild(alturaTd);
//       pacienteTr.appendChild(gorduraTd);
//       pacienteTr.appendChild(imcTd);


//       document.querySelector("#tabela-pacientes").appendChild(pacienteTr);
      

// });


// Aula 4 - Melhorando nosso Codigo


var botaoAdicionar = document.querySelector("#adicionar-paciente");

//addEventListener adiciona o trigger aos eventos do element, clicar, mover...
botaoAdicionar.addEventListener("click", function(event){
    // Previne o comportamento padrão da acao
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    //cria um objeto to tipo paciente
    var paciente = obtemPacientedoFormulario(form);
    //criar uma TR
    var pacienteTr = montaTr(paciente);

    var erro = validaPaciente(paciente);
    

    if (erro.length > 0)
    {
        mostraMensagemDeErro(erro);
        return;
    }


    adicionaTrNaTabela(document.querySelector("#tabela-pacientes"), pacienteTr);

    //limpa o formulário
    form.reset();
     
    var mensagem = document.querySelector("#mensagem-erro");
    //controla o HTML interno de um elemento
    mensagem.innerHTML = "";
      

});


function mostraMensagemDeErro(erro) {
    var mensagem = document.querySelector("#mensagem-erro");

    //controla o HTML interno de um elemento
    mensagem.innerHTML = "";

    erro.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        mensagem.appendChild(li);
    });
    
}

function validaPaciente(paciente)
{
    //array
    var erros = [];

    if (paciente.nome.length == 0)
     erros.push("O nome não pode ser em branco");      

    if (paciente.gordura.length == 0)
     erros.push("A gordura não pode ser em branco");      

     if (paciente.peso.length == 0)
     erros.push("Peso não pode ser em branco");      

     if (paciente.altura.length == 0)
     erros.push("Altura não pode ser em branco");      


    if (!validaPeso(paciente.peso))
        erros.push("Peso é inválido");


    if (!validaAltura(paciente.altura))
        erros.push("A Altura inválido");

    

        return erros;

}

function adicionaTrNaTabela(tabela, pacienteTr) {
    tabela.appendChild(pacienteTr);
}

function montaTr(paciente) {
    //cria um element HTML
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    //funcao que adiciona o elemento dentro do outro.
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    return pacienteTr;
}



function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function obtemPacientedoFormulario(form) {
    return {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: CalculaIMC(form.peso.value, form.altura.value)
    };
}



// Aula 5 
// Remover elementos da tabela



