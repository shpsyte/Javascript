var campoFiltro = document.querySelector("#filtrar-tabela");

///adicionamos o evento de inut para capturar todas as teclas
campoFiltro.addEventListener("input", function (event) {
    var busca = this.value;

    //pega todos os pacientes
    var pacientes = document.querySelectorAll(".paciente");

    if (busca.length > 0) {

        // em cada paciente tem que testar com o input
        pacientes.forEach(element => {
            var td = element.querySelector(".info-nome");
            var nome = td.textContent;
            
            // aula 10 usando expessao regurlare, o "i" indica que é Case Insensitive
            var expressao = new RegExp(busca, "i");
            

           // if (!nome.includes(busca, 0)) {
            if (!expressao.test(nome))
            {
                element.classList.add("invisivel");
            } else {
                element.classList.remove("invisivel");
            }

        });
    } else {
        pacientes.forEach(element => {
            element.classList.remove("invisivel");
        });
    }



});