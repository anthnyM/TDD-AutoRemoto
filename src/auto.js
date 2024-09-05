function leer_comando(com){
    if(validar_comando(com))
        return com
    else
        return "Comando invalido"
}

function leer_dimension(com){
    let slash = com.indexOf('/')
    return com.slice(0,slash)
}

function leer_pos_inicial(com){
    let slash1 = com.indexOf('/') + 1;
    let slash2 = com.indexOf('/',4);
    return com.slice(slash1, slash2);
}

function leer_instrucciones(com){
    let slash = com.lastIndexOf('/')
    return com.slice(slash + 1)
}

function validar_comando(com){
    let dim = leer_dimension(com)
    let posi = leer_pos_inicial(com)
    let inst = leer_instrucciones(com)

    let val_dim = /^\d+,\d+$/
    let val_posi = /^\d+,\d+[NSEO]$/
    let val_inst = /^[AID]+$/

    if (val_dim.test(dim) && val_posi.test(posi) && val_inst.test(inst))
        return true
    else
        return false
}

function rotar(direccion, comando) {
    const direcciones = ['N', 'E', 'S', 'O'];
    let indice = direcciones.indexOf(direccion);

    if (comando === 'I') {
        return direcciones[(indice + 3) % 4];  // Rotar a la izquierda
    } else if (comando === 'D') {
        return direcciones[(indice + 1) % 4];  // Rotar a la derecha
    }
    return direccion;
}

function moverAuto(dimension, posicionInicial, comandos) {
    let [x, y_direccion] = posicionInicial.split(",");
    let [y, direccion] = y_direccion.split("")
    x = parseInt(x);
    y = parseInt(y);

    for (let comando of comandos) {
        if (comando === "A") {
            if (direccion === "N") y += 1;
        } else {
            direccion = rotar(direccion, comando);
        }
    }

    return `${x},${y}${direccion}`;
}

export {leer_comando, leer_dimension, leer_pos_inicial, leer_instrucciones, validar_comando, moverAuto}