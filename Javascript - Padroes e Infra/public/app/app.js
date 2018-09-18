import {log} from './utils/log.js';
import {} from './utils/array-helpers.js';
import {notasServices as service} from './nota/services.js';
import { takeUtil, debounceTime, partialize  } from "./utils/operator.js";
import { timeOutPromise, retry } from './utils/promisse-helpers.js';
import { EventEmitter } from './utils/event-emitter.js';

 

/// so chama a funcao no maximo 3x
const operation1 = takeUtil(3, () =>  
// coloca um tempo maximo de espera nas promisses
retry(3, 3000, () => timeOutPromise(200, service
            .sumItems('2143')))
            .then(total => {
                EventEmitter.emit('itensTotalizados', total);
            })
            .catch(console.log)
);

//inibe o usuario de ficar clicando freneticamente
const operation2 = debounceTime(500, operation1);

// timeOutPromise(1,operation1);

 
 



document
 .querySelector("#myButton")
 .onclick = () => operation2();


 EventEmitter.on('itenTotalizados', console.log);
 EventEmitter.on('itenTotalizados', total => alert(total));

// const API = 'http://localhost:3000/notas';

// document
//  .querySelector("#myButton")
//  .onclick = () => 
//      fetch(API)
//     .then(res => {
//         if (res.ok)
//         {
//             return res.json();
//         }
//     })
//     .then(a => a.reduce((total, array) => total.concat(array.itens), []))
//     .then(a => a.filter(a => a.codigo == "2143"))
//     .then(a => a.reduce((total, item) => total = total + item.valor, 0))
//     .then(log);


    //return this.map(cb).reduce((destArray, array) => destArray.concat(array), []);
