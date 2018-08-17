var pacientes = document.querySelector(".paciente");


//faz um loop no array de pacientes;
//utiliza uma funcao anonima

// pacientes.forEach(function(paciente) {
//     paciente.addEventListener("dblclick", function(event){
//        console.log("fui clicado com duplo clique");

//        this.remove();

//     });
// });


// Aula 7 Delkegando Eventos
       /**O evento é escutado por todos os filhos do elemento! cuidado
        * para evitar o Event Bubblig vamos usar o event parent
        */
var pacientes = document.querySelector("table");
       
pacientes.addEventListener("dblclick", function(event){
    //var alvoEvento = event.target;
    //var paiDoAlvo = alvoEvento.parentNode;
    //paiDoAlvo.remove();

    var elemento = event.target.parentNode;
    //elemento.remove();
    // Aula 8 adicionando animacao para remover o elemento

    elemento.classList.add("fadeOut");
    setInterval(function(){
       elemento.remove();

    },500);
    

});
    





