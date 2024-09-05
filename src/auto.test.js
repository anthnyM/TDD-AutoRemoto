import { leer_comando , leer_dimension, leer_instrucciones, leer_pos_inicial, validar_comando, moverAuto} from "./auto.js";

describe("Auto a control remoto", () => {
    it("1. deberia validar el comando 5,5/1,2N/IAIAIAIAA", () => {
        expect(leer_comando("5,5/1,2N/IAIAIAIAA")).toEqual("5,5/1,2N/IAIAIAIAA");
    });
    it("2. deberia retornar Comando invalido", () => {
        expect(leer_comando("5,5/1,2/IAI")).toEqual("Comando invalido");
    });
    it("3. deberia retornar la dimension del mapa", () => {
       expect(leer_dimension("5,5/1,2N/IAIAIAIAA")).toEqual("5,5");
    });
    it("4. deberia retornar la posicion inicial 1,2N", () => {
        expect(leer_pos_inicial("5,5/1,2N/IAIAIAIAA")).toEqual("1,2N");
    });
    it("5. deberia retornar las instrucciones AIADAIA", () => {
      expect(leer_instrucciones("6,6/2,1O/AIADAIA")).toEqual("AIADAIA");
    });
    it("6. deberia retornar las instrucciones IAIAIAIAA", () => {
      expect(leer_instrucciones("5,5/1,2N/IAIAIAIAA")).toEqual("IAIAIAIAA");
    });
    it("7. deberia retornar true si el comando es valido", () => {
        expect(validar_comando("5,5/1,2N/IAIAIAIAA")).toEqual(true);
    });
    it("8. deberia retornar false si el comando es invalido", () => {
        expect(validar_comando("5,5/1,2N/zdns")).toEqual(false);
    });
      
    it('9. Debería mantener la posición inicial si no hay comandos', () => {
      const dimension = "5,5";
      const posicionInicial = "1,2 N";
      const comandos = "";
      expect(moverAuto(dimension, posicionInicial, comandos)).toBe("1,2 N");
  });
    
})