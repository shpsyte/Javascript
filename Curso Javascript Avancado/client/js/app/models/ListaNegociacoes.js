class ListaNegociacoes{


    constructor(){

        this._negociacoes = [];
    }


    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){

        // para evitar que o usuario possa manipular 

        return this._negociacoes.slice(0);
      // return this._negociacoes.map(params =>params);
      // return [].concat(this._negociacoes);
    }
    

}