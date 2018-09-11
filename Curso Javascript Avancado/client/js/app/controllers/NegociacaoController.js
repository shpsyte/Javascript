class NegociacaoController{


    constructor() {

        //bind preservar o context da execução para um função que execute em outro contexto
        let $ = document.querySelector.bind(document);
        let form  = $(".form");
        this._quantidade = form.quantidade;
        this._data = form.data;
        this._valor = form.valor;
    }


    adiciona(event){

        event.preventDefault();
        

        
        let negociacao = new Negociacao(DateHelper.textoParaData(this._data.value), this._quantidade.value, this._valor.value);
        console.log(negociacao);

        let dataFormatada = DateHelper.dataParaTexto(negociacao.data);
        console.log(dataFormatada);

        

    }

}