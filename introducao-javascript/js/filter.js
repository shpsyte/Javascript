
var input = document.querySelector("#filter");

input.addEventListener("input", function (event) {
    var busca = this.value;
    var clientes = document.querySelectorAll(".cliente");

    if (busca.length > 0) {

        clientes.forEach(cliente => {
            var nome = cliente.querySelector(".info-nome").textContent;

            var reg = new RegExp(busca, "i");

            if (!reg.test(nome)) {
                cliente.classList.add("invisivel");
            }

        });
    }else
    {
        clientes.forEach(cliente => {
                cliente.classList.remove("invisivel");
        });
    }

});