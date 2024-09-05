function leer_comando(com){
    return com
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
    let short = com.slice(slash)
    return com.slice(slash + 1)
}

export {leer_comando, leer_dimension, leer_pos_inicial, leer_instrucciones}