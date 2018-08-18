var url_old  = "http://www.api.iscosistemas.com.br/v1/Cliente/001/001/1000"; 
var url = "https://api-pacientes.herokuapp.com/pacientes"; 
var token = "C11E87C4-92B4-4654-AB08-47556D985D5E";
 

var botaoBuscar = document.querySelector("#buscar-clientes");
botaoBuscar.addEventListener("click", function(event){
    
  getCustomer();
});


function getCustomer() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  //xhr.setRequestHeader("X-Auth-Token", token);
  xhr.setRequestHeader("Content-Type", "application/json");
  //xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  //xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.addEventListener("load", function () {
    var item = JSON.parse(xhr.responseText);
    item.forEach(element => {
      addTrOnTable(document.querySelector("#clientes"), getTr(element));
    });
  });
  xhr.send();
}

