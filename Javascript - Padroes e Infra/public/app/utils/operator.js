export const partialize = (fn, ...args) => fn.bind(null, ...args);

export const compose = (...fns) => value => 
    fns.reduceRight( (previousValues, fn) =>  fn(previousValues), value);
    
export const pipe = (...fns) => value => 
    fns.reduce( (previousValues, fn) =>  fn(previousValues), value);
        
export const takeUtil = (times, fn) => {
    return () => {
         
        if (times-- > 0)
        {
          fn();
        }
    };
};


export const debounceTime = (milliseconds, fn) => {
    let timer = 0;

    return () => {
       clearTimeout(timer);
       timer = setTimeout(fn, milliseconds);
    };


};