class PacienteBuilder{

   constructor(){
       this.nome = "jose";
       this.idade = 28;
       this.peso = 80;
       this.altura = 1.80;
   }

   static of(){
 
     return new Paciente(this.nome, this.idade, this.peso, this.altura);
   }

   static comPeso(idade){
       this.idade = idade;
       return this;
   }

}