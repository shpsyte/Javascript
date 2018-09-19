describe("Paciente", ()=> {
   it("Deve calcular o IMC", () => {

    var paciente = new Paciente("Jose",28,72,1.82);

    var imcCalculado = 72 / (1.82 * 1.82);
    expect(paciente.imc).toEqual(imcCalculado);

   });
 
   it("Deve verificar os batimentos", () => {

    var paciente = new Paciente("Jose",28,72,1.82);
    var batimentos = 28 * 365 * 24 * 60 * 80;

    expect(paciente.batimento).toEqual(batimentos);

   });


});