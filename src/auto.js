function leer_comando(com){
    return com
}

function leer_dimension(com){
    let slash = com.indexOf('/')
    return com.slice(0,slash)
}

export {leer_comando, leer_dimension}