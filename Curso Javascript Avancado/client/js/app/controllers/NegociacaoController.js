class NegociacaoController{


    constructor() {

        //bind preservar o context da execução para um função que execute em outro contexto
        let $ = document.querySelector.bind(document);
        let form  = $(".form");
        this._quantidade = form.quantidade;
        this._data = form.data;
        this._valor = form.valor;
        
                
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(), new NegociacaoView($("#negociaceosView")),
            'adiciona','esvazia'
        );
        
        
        this._mensagem = new Bind(
            new Mensagem(), new MensagemView($("#mensagemView")),
            'texto'
        );
        
        
        
    }


    adiciona(event){

        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = "Adicionado com Sucesso";
        this._limpaFormulario();

    }

    apaga(){

        this._listaNegociacoes.esvazia();
        this._mensagem.texto = "Negociações apagadas com sucesso";
    }

    _criaNegociacao(){

        return new Negociacao(
            DateHelper.textoParaData(this._data.value), 
            this._quantidade.value, 
            this._valor.value
        );
    }

   
    _limpaFormulario(){

        
    

        this._data.value = '';
        this._quantidade.value = 1;
        this._valor.value = 0.0;
        this._data.focus();
    }

    importaNegociacoes(){

       let service = new NegociacaoService();
        
        Promise.all([
            service.obterNegociacoesDaSemana(),
            service.obterNegociacoesDaSemanaAnterior(),
            service.obterNegociacoesDaSemanaRetrasada()]
        ).then(negociacoes => {
            negociacoes
            .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
            .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações importadas com sucesso';
        })
        .catch(erro => this._mensagem.texto = erro);  

  

        // promise.then(negociacoes => { 
        //       negociacoes.forEach(negociacao => {
        //             this._listaNegociacoes.adiciona(negociacao);
        //       });
        //       this._mensagem.texto = 'Negociações importadas com sucesso';
        //  })
        //  .catch(erro => this._mensagem.texto = erro);



    //    services.obterNegocicacaoDaSemana((erro, negociacoes) => {
    //       if (erro)  {
    //           this._mensagem.texto = erro;
    //           return;
    //       }

    //       negociacoes.forEach(element => {
    //           this._listaNegociacoes.adiciona(element);
    //           this._mensagem.texto = "Negociações importadas com sucesso";
    //       });


    //    });
 


    }

}