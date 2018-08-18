var botaoBuscar = document.querySelector("#buscar-paciente");

//Aula 10
//Buscar api e adicionar na tabela
// ajax
botaoBuscar.addEventListener("click", function (event) {
    //previne o comportamento padrao
    event.preventDefault();

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");


    //adicionar a escutador LOAD para quando ele terminar de carregar a pagina/requisicao
    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");

            // pega a resposta do GET
            var resposta = xhr.responseText;

            //efetua um convert para array atraves da Funcao JSON.parse 
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            erroAjax.classList.remove("invisivel");
        }

    });

    xhr.send();
});