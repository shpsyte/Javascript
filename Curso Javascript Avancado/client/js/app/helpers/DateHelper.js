class DateHelper {
    
    constructor(){

        throw new Error('Classe estática');
    }
    /// ... spred transforam o array em parametros

    ///static deixa o metodo acessivel sem precisar instanciar a classe
    static textoParaData(texto){
        return new Date(...texto
            .split('-')
            .map( (item,indice) => item - indice % 2)
        );

    }

    static dataParaTexto(data){

        return data.getDate() +'/' + (data.getMonth() + 1)  +'/' + data.getFullYear();
    }


}