import { handleStatus } from '../utils/promisse-helpers.js';
import {} from '../utils/array-helpers.js';
import {partialize, compose, pipe} from '../utils/operator.js';
import {log} from '../utils/log.js';
import { Maybe } from "../utils/Maybe.js";


const API = 'http://localhost:3000/notas';

const getItemsFromNotas = notas => notas.$flatMap(nota => nota.itens);
const filterItemByCode = (code, items) => items.filter(item => item.codigo == code);
const sumItemsValue = items => items.reduce((total, item) => total + item.valor,0);


export const notasServices = {
   listAll() {
       return fetch(API)
             .then(handleStatus)
             //.then(notas => Maybe.of(notas))
             .catch(err => {
                 log(err);
                 return Promise.reject("Não foi possivel acessar as NF");
              });
   } ,
   sumItems(code){
      const filterItem = partialize(filterItemByCode, code);
      //const sumItems =  notas =>  sumItemsValue(filterItem(getItemsFromNotas(notas)));
      const sumItems = pipe(getItemsFromNotas, filterItem, sumItemsValue);

      return this.listAll()
                 .then(sumItems);
   }

};

