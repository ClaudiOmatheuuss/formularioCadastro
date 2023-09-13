function envioAutorizado (erros) {
    for(let campo in erros) {
        if(!erros[campo].valido)
        {
            return false
        }
    }
    return true
}

export default envioAutorizado