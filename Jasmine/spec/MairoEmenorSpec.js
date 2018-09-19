describe("MairoeMenor", function () {
   it("Deve entender um numero em ordem nao Sequecnial", function () {
       
        var algoritmo = new MaiorMenor();
        algoritmo.encontra([1,22,3,15,8,6,9]);

        expect(algoritmo.pegaMaior()).toEqual(22);
        expect(algoritmo.pegaMenor(1)).toEqual(1);


   }); 

   it("Deve entender numeros em ordem crescente", function () {
       
    var algoritmo = new MaiorMenor();
    algoritmo.encontra([1,2,3,4,5,8,9,15]);

    expect(algoritmo.pegaMaior()).toEqual(15);
    expect(algoritmo.pegaMenor(1)).toEqual(1);

   });

   it("Deve entender numeros em ordem decrescente", function () {
       
    var algoritmo = new MaiorMenor();
    algoritmo.encontra([15,14,13,9,8,7,6,5,2]);

    expect(algoritmo.pegaMaior()).toEqual(15);
    expect(algoritmo.pegaMenor(1)).toEqual(2);

   });
   
   it("Deve entender apenas 1 elemento e retorno ele mesmo com mairo e menor", function () {
       
    var algoritmo = new MaiorMenor();
    algoritmo.encontra([15]);

    expect(algoritmo.pegaMaior()).toEqual(15);
    expect(algoritmo.pegaMenor(1)).toEqual(15);

   });


});