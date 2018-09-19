class Consulta{

    constructor(paciente, procedimentos, particular, retorno, data)
    {
        this.paciente = paciente;
        this.procedimentos = procedimentos;
        this.particular = particular;
        this.retorno = retorno;
    }

    get preco(){

        if (this.retorno) 
          return 0;
        let precoFinal;
        

        precoFinal = this.procedimentos.reduce((total, atual) => {
            if (atual == "raios-x") total += 55;
            else if (atual == "gesso") total += 32;
            else total += 25;
            return total;
        },0);

        if (this.particular)
        precoFinal *= 2;

        return precoFinal;
    }

    get nome(){
        
        return this.paciente;
    }

    get procedimentos(){

        return this.procedimentos;
    }





}