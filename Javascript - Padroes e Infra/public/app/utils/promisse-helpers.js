export const handleStatus = res => res.ok ? res.json() : Promise.reject(res.statusText);

export const timeOutPromise = (milliseconds, promise) => {

    const timeout =  new Promise((resolve, reject) =>
        setTimeout(() => 
            reject(`Limite da promise excedido (limite: ${milliseconds} ms)`), 
                milliseconds));

                return Promise.race([
                    timeout, 
                    promise
                ]);
};


export const delay = milliseconds => data =>
    new Promise((resolve, reject) => 
        setTimeout(() => resolve(data), milliseconds)
    );

export const retry = (retries, miliseconds, fn)  =>  

    fn().catch(err => { 
        console.log(retries); 
        return delay(miliseconds)().then(() => 
               retries > 1 ? retry(retries - 1, miliseconds, fn) : Promise.reject(err)
           );
    });


 