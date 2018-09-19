class Paciente{
   constructor(nome, idade, peso, altura){
       this.nome = nome;
       this.idade =idade;
       this.peso = peso;
       this.altura = altura;
   }


   imprime(){

      console.log(`Nome ${this.nome}, Idade ${this.idade}, Peso ${this.peso}`);
   }

   get batimento(){
       return this.idade * 365 * 24 * 60 * 80;
   }

   get imc(){

      return this.peso / (this.altura * this.altura);
   }



}