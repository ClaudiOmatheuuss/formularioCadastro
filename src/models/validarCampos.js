function validarCampos (event, erros, validacoes, setErros) {
    
    const {name, value} = event.target
    const novoEstado = {...erros}
    novoEstado[name] = validacoes[name](value)
    setErros(novoEstado)
}

export default validarCampos