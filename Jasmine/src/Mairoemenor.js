function MaiorMenor()  {
    var maior;
    var menor;

    var clazz = {

        encontra: nums => {
            menor = Number.MAX_VALUE;
            maior = Number.MIN_VALUE;

            nums.forEach(num => {
                if (num < menor) menor = num;
                if (num > maior) maior = num;
            });
        },
        pegaMaior : () => maior,
        pegaMenor:  () =>  menor
    }

    return clazz;
}

