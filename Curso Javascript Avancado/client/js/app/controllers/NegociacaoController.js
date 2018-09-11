class NegociacaoController{


    constructor() {

        //bind preservar o context da execução para um função que execute em outro contexto
        let $ = document.querySelector.bind(document);
        let form  = $(".form");
        this._quantidade = form.quantidade;
        this._data = form.data;
        this._valor = form.valor;
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacaoView($("#negociaceosView"));
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#mensagemView"));
        this._mensagemView.update(this._mensagem);
    }


    adiciona(event){

        event.preventDefault();
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = "Adicionado com Sucesso";
        this._mensagemView.update(this._mensagem);
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();

    }

    _criaNegociacao(){

        return new  Negociacao(
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

}