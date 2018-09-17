class ListaNegociacoes{


    constructor(/*contexto,*/armadilha){

        this._negociacoes = [];
        this._armadilha = armadilha;
        //this._contexto = contexto;
    }


    adiciona(negociacao){
        
        this._negociacoes.push(negociacao);

        //Reflect.apply(this._armadilha, this._contexto, [this]);
        //this._armadilha(this);
    }

    get negociacoes(){

        // para evitar que o usuario possa manipular 

        return this._negociacoes.slice(0);
      // return this._negociacoes.map(params =>params);
      // return [].concat(this._negociacoes);
    }

    esvazia (){

        this._negociacoes = [];
        //Reflect.apply(this._armadilha, this._contexto, [this]);
       //this._armadilha(this);
    }
    

}