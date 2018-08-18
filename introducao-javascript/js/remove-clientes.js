var clientes = document.querySelector("#clientes");

clientes.addEventListener("dblclick", function(event){
   var alvo = event.target;
   var pai = alvo.parentNode;

   pai.classList.add("fadeOut");

   setInterval(function(){
       pai.remove();

   },500);

});