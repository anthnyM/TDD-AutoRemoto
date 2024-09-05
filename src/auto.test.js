import { leer_comando , leer_dimension, leer_instrucciones, leer_pos_inicial, validar_comando} from "./auto.js";

describe("Auto a control remoto", () => {
    it("deberia validar el comando 5,5/1,2N/IAIAIAIAA", () => {
        expect(leer_comando("5,5/1,2N/IAIAIAIAA")).toEqual("5,5/1,2N/IAIAIAIAA");
    });
    it("deberia retornar Comando invalido", () => {
        expect(leer_comando("5,5/1,2/IAI")).toEqual("Comando invalido");
    });
    it("deberia retornar la dimension del mapa", () => {
       expect(leer_dimension("5,5/1,2N/IAIAIAIAA")).toEqual("5,5");
    });
    it("deberia retornar la posicion inicial 1,2N", () => {
        expect(leer_pos_inicial("5,5/1,2N/IAIAIAIAA")).toEqual("1,2N");
    });
    it("deberia retornar las instrucciones AIADAIA", () => {
      expect(leer_instrucciones("6,6/2,1O/AIADAIA")).toEqual("AIADAIA");
    });
    it("deberia retornar las instrucciones IAIAIAIAA", () => {
      expect(leer_instrucciones("5,5/1,2N/IAIAIAIAA")).toEqual("IAIAIAIAA");
    });
    it("deberia retornar true si el comando es valido", () => {
        expect(validar_comando("5,5/1,2N/IAIAIAIAA")).toEqual(true);
    });
    it("deberia retornar false si el comando es invalido", () => {
        expect(validar_comando("5,5/1,2N/zdns")).toEqual(false);
    });
      
    
})