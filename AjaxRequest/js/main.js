console.log("esta importando o js...");


var btn = document.querySelector("#buscar-url");
var target = document.querySelector("#target");
var header = document.querySelector("#headertable");

var url = document.querySelector("#url");

url.value = "https://api-pacientes.herokuapp.com/pacientes";


btn.addEventListener("click", function () {
    console.log("Clicked...");
    target.innerHTML = "";
    header.innerHTML = "";

    var url = document.querySelector("#url").value;
    var method = document.querySelector('input[name="method"]:checked').value;

    if (url !== "") {

        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

        xhr.addEventListener("load", function () {
            if (xhr.status === 200) {
                
                var ret = JSON.parse(xhr.responseText);



                var linha = false;
                ret.forEach(element => {

                    var tr = document.createElement("tr");
                    var trHeader = document.createElement("tr");
                    var headers = Object.keys(element);

                    if (!linha) {
                        for (var i = 0; i < headers.length; i++) {
                            var tdHeader = document.createElement("th");
                            tdHeader.textContent = headers[i];
                            trHeader.appendChild(tdHeader);
                        }
                        header.appendChild(trHeader);
                        linha = true;
                    }



                    for (let propertyName in element) {

                        var td = document.createElement("td");
                        td.textContent = element[propertyName];
                        tr.appendChild(td);

                    }

                    target.appendChild(tr);
                });

                // target.innerHTML = xhr.responseText;
            } else {
                console.log(xhr.status);
                target.innerHTML = "Error for Request" + " - " + xhr.responseText;
            }
        });

        xhr.send();
    }






});