describe("Consulta", () => {

    var jose;

    //executa ante de cada teste
    beforeEach(() =>{
        jose = PacienteBuilder.of();
    });

    //execurta depois dos test
    afterEach(() =>{
      jose = null;
    });


    it("Não deve combrar nada se for retorno", ()=> {

        var consulta = new Consulta(jose,null,false,true);

        expect(consulta.preco).toEqual(0);

    });

    it("Deve cobrar 25 por cada procedimento comum", () =>{
        var consulta = new Consulta(jose,["proc1","proce2", "proce"],false,false);

        expect(consulta.preco).toEqual(75);

    });
    describe("Consulta procedimentos", () => {
        it("Deve cobrar preco espcifico por tipo  procedimento ", () =>{
            var consulta = new Consulta(jose,["raios-x","comum", "comum", "gesso"],false,false);

            expect(consulta.preco).toEqual(55 + 25 + 25 + 32);

        });

        it("Deve cobrar o dobro se for particular ", () =>{
            var consulta = new Consulta(jose,["raios-x","comum", "comum", "gesso"],true,false);

            expect(consulta.preco).toEqual((55 + 25 + 25 + 32)*2) ;

        });

        it("Retorno a constula deve ser 0 ", () =>{
            var consulta = new Consulta(jose,["raios-x","comum", "comum", "gesso"],true,true);
        expect(consulta.preco).toEqual(0) ;

        });
   })

});