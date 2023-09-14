function validarSenha( senha ) {
    if(senha.length < 4 || senha.length > 72){
        return {valido:false, texto:"Senha deve ter entre 4 e 72 dígitos."}
      } else{
        return {valido:true, texto:""}
    }
}

function validarNome ( nome ) {
  if ( nome.length < 3 ) {
    return {valido:false, texto:"Um nome precisa ter no mínimo 3 letras."}
  } else {
    return {valido: true, texto:""}
  }
}

function validarSobrenome ( sobrenome ) {
  if ( sobrenome.length < 3 ) {
    return {valido:false, texto:"Um sobrenome precisa ter no mínimo 3 letras."}
  } else {
    return {valido: true, texto:""}
  }
}




function validarCPF(cpf){

  if(caracteresEspeciais(cpf)){
  return {valido: false, texto:"CPF não pode ter caracteres especiais, apenas números."} 
  } else if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 dígitos."}
  } else if (numerosRepetidos(cpf)) {
    return {valido: false, texto:"CPF não pode ter todos os números repetidos."}
  } else if (validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
    return {valido:false, texto:"CPF não existe."}
  }else {
    return {valido:true, texto:""}
  }


  function numerosRepetidos ( cpf ) {
    const numerosRepetidos = [
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
      '000000000000',
      '111111111111',
      '222222222222',
      '333333333333',
      '444444444444',
      '555555555555',
      '666666666666',
      '777777777777',
      '888888888888',
      '999999999999',
      '0000000000000',
      '1111111111111',
      '2222222222222',
      '3333333333333',
      '4444444444444',
      '5555555555555',
      '6666666666666',
      '7777777777777',
      '8888888888888',
      '9999999999999',
      '00000000000000',
      '11111111111111',
      '22222222222222',
      '33333333333333',
      '44444444444444',
      '55555555555555',
      '66666666666666',
      '77777777777777',
      '88888888888888',
      '99999999999999'
  ]

    return numerosRepetidos.includes(cpf) 
  }
  function caracteresEspeciais(cpf) {
    const caracteresEspeciais = ["!", "@", "#", "$", "%", "¨", "&", "*", "(", ")", "-", "_", ",", ".", "=", "+", "`", "[", "{", "]", "}", "<", ">", ":", ";", "/", "?", "|", "'", '"']

    let tamanhoCpf = cpf.length

    for (let i = 0; i < tamanhoCpf; i++) {
      if (caracteresEspeciais.includes(cpf[i])) {
        return true
      }
    }

    return false
  }
  function validaPrimeiroDigito(cpf){
      let soma = 0
      let multiplicador = 10
  
      for (let tamanho = 0; tamanho < 9; tamanho++){ 
          soma += cpf[tamanho] * multiplicador 
          multiplicador-- 
      }
  
      soma = (soma * 10) % 11 
      
      if(soma == 10 || soma == 11){  
          soma = 0
      }
  
      return soma != cpf[9]
  }
  function validaSegundoDigito(cpf){
      let soma = 0
      let multiplicador = 11
  
      for (let tamanho = 0; tamanho < 10; tamanho++){ 
          soma += cpf[tamanho] * multiplicador 
          multiplicador-- 
      }
  
      soma = (soma * 10) % 11 
      
      if(soma == 10 || soma == 11){  
          soma = 0
      }
  
      return soma != cpf[10]
  }
}

export { validarSenha, validarNome, validarSobrenome, validarCPF }