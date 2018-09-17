import {HttpServices} from './HttpServices';
import {ConnectionFactory} from './ConnectionFactory';
import {NegociacaoDao} from '../dao/NegociacaoDao';
import {Negociacao} from '../models/Negociacao';

export class NegociacaoService{

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

    obterNegociacoes() {
        
        return Promise.all([
            this.obterNegociacoesDaSemana(),
            this.obterNegociacoesDaSemanaAnterior(),
            this.obterNegociacoesDaSemanaRetrasada()
        ]).then(periodos => {

            let negociacoes = periodos
                .reduce((dados, periodo) => dados.concat(periodo), [])
                .map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor ));

            return negociacoes;
        }).catch(erro => {
            throw new Error(erro);
        });
    } 

    cadastra(negociacao){
         //usando o indexdb
         return ConnectionFactory
                    .getConnection()
                    .then(connection => new NegociacaoDao(connection))
                    .then(dao => dao.adiciona(negociacao))
                    .then(() => 'Negociação adicionada com sucesso')
                    .catch(() => { 
                        throw new Error('Não foi possível adicionar a negociação');
                    });
            
    }

    lista()
    {
        return  ConnectionFactory
                .getConnection()
                .then(connection => new NegociacaoDao(connection))
                .then(dao => dao.listaTodos())
                .catch(erro => {
                    console.log(erro);
                    throw new Error("Não foi possível obter as negociações");
                });
    }

    apaga(){

        return  ConnectionFactory
                .getConnection()
                .then(connection => {
                    new NegociacaoDao(connection)
                    .apagaTodos()
                    .then(() => 'Negociações apagadas com sucess')
                    .catch(erro => {
                        console.log(erro);
                        throw new Error("Erro ao apagar as negociçaões");
                    });
                });
    }


    importa(listaAtual){

        return this.obterNegociacoes()
                .then(negociacoes =>
                    negociacoes.filter(negociacao =>
                        !listaAtual.some(negociacaoExistente =>
                            JSON.stringify(negociacao) == JSON.stringify(negociacaoExistente)))
                    )
                .catch(error => {
                    console.log(error);
                    throw new Error('Não foi possível buscar a lista de negociações');
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