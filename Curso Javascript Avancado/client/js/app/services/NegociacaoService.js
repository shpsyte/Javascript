class NegociacaoService{

    constructor() {
        this._http = new HttpServices();
    }

    obterNegociacoesDaSemana( ){

        return new Promise((resolve, reject) => {

            this._http.get('negociacoes/semana')
            .then(negociacoes => {
                resolve(negociacoes.map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor)));
            })
            .catch(erro => {
                 console.log(erro);
                 reject('Não foi possível obter as negociacoes da semana');
            });
        });
        
    }

    obterNegociacoesDaSemanaAnterior( ){

        return new Promise((resolve, reject) => {
           
            this._http.get('negociacoes/anterior')
            .then(negociacoes => {
                resolve(negociacoes.map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor)));
            })
            .catch(erro => {
                 console.log(erro);
                 reject('Não foi possível obter as negociacoes da semana');
            });

        });


        
    }


    obterNegociacoesDaSemanaRetrasada(){

        return new Promise((resolve, reject) => {

            this._http.get('negociacoes/retrasada')
            .then(negociacoes => {
                resolve(negociacoes.map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor)));
            })
            .catch(erro => {
                 console.log(erro);
                 reject('Não foi possível obter as negociacoes da semana');
            });

        });
        
    }

    // obterNegocicacaoDaSemana(cb){

 

    //     let xhr = new XMLHttpRequest();
        

    //     xhr.open('GET','negociacoes/semana');
    //     xhr.onreadystatechange = () => {
           
    //          // requisicao pronta 
    //         if (xhr.readyState == 4){

    //             if(xhr.status == 200){
    //                 cb(null, JSON.parse(xhr.responseText)
    //                   .map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor))
    //                   );
    //             } else{
    //                 console.log(xhr.responseText);
    //                 cb('Não foi possivel receber as negociações');
    //             }
    //         }

    //     };

    //     xhr.send();
    // }
}