function getTd(nome, classe) {

    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = nome;
    return td;
}

function getTr(item)
{
   var tr = document.createElement("tr");

   tr.classList.add("cliente");

   tr.appendChild(getTd(item.nome,"info-nome"));
   tr.appendChild(getTd(item.peso, "info-peso"));
   tr.appendChild(getTd(item.altura, "info-altura"));
   tr.appendChild(getTd(item.imc, "info-imc"));

   return tr;
}


function addTrOnTable(table, tr)
{
    table.appendChild(tr);
}