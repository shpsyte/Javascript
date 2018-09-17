export class HttpServices{
//get

   _handleErrors(res){
       if (res.ok){
           return res;
       }else
       {
           throw new Error(res.statusText);
       }

   }

    get(url){

        //usando novos recurso do es 2016
        return fetch(url)
         .then(res => this._handleErrors(res))
         .then(res => res.json());


        // return new Promise((resolve, reject) =>{
        //     let xhr = new XMLHttpRequest();
        //     xhr.open('GET',url);
        //     xhr.onreadystatechange = () => {
               
        //          // requisicao pronta 
        //         if (xhr.readyState == 4){
    
        //             if(xhr.status == 200){
        //                 resolve(JSON.parse(xhr.responseText));
        //             } else{
        //                 reject('Não foi possivel receber as negociações');
        //             }
        //         }
        //     };
        //     xhr.send();
        // });
    }

    post(url, dado) {

        return fetch(url, {
                    headers: {'Content-type': 'application/json'},
                    method: 'post',
                    body: JSON.stringify(dado)
                })
                .then(res => res.json());


        // usando es 2016

        // return new Promise((resolve, reject) => {

        //     let xhr = new XMLHttpRequest();
        //     xhr.open("POST", url, true);
        //     xhr.setRequestHeader("Content-type", "application/json");
        //     xhr.onreadystatechange = () => {

        //         if (xhr.readyState == 4) {

        //             if (xhr.status == 200) {

        //                 resolve(JSON.parse(xhr.responseText));
        //             } else {

        //                 reject(xhr.responseText);
        //             }
        //         }
        //     };
        //     xhr.send(JSON.stringify(dado)); // usando JSON.stringify para converter objeto em uma string no formato JSON.
        // });

    }
}