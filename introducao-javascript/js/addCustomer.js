var adiciona = document.querySelector("#adicionar-cliente");
var form = document.querySelector("#form-adiciona");


adiciona.addEventListener("click", function (event) {
   event.preventDefault(); 

   var cliente = {
       nome: form.nome.value,
       peso: form.fantasia.value,
       altura: form.email.value,
       imc: form.fone.value
   };
   addTrOnTable(document.querySelector("#clientes"), getTr(cliente));

});
