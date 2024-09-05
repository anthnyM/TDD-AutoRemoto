import { leer_comando , leer_dimension , leer_pos_inicial} from "./auto";

describe("Auto a control remoto", () => {
    it("deberia validar el comando 5,5/1,2N/IAIAIAIAA", () => {
        expect(leer_comando("5,5/1,2N/IAIAIAIAA")).toEqual("5,5/1,2N/IAIAIAIAA");
      });
    it("deberia retornar la dimension del mapa", () => {
       expect(leer_dimension("5,5/1,2N/IAIAIAIAA")).toEqual("5,5");
    });
    it("deberia retornar la dimension del mapa", () => {
        expect(leer_pos_inicial("5,5/1,2N/IAIAIAIAA")).toEqual("1,2N");
      });
})