import React from 'react';

const ValidacoesCadastro = React.createContext(
    { senha: validarSenha, nome: validarNome, sobrenome: validarSobrenome, cpf: validarCPF}
)

function semValidacao(dados) {
    console.log(dados)
    return {valido:true, texto:""}
}

export default ValidacoesCadastro