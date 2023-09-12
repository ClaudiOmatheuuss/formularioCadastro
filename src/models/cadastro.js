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

  if(cpf.length !== 11){
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

async function validarCEP(cep, logradouro, cidade, estado){
  try {
      let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      let consultaCEPConvertido = await consultaCEP.json()
      if (!consultaCEPConvertido){
        return {valido:false, texto:"CEP não existe"}
      }

      logradouro.value = consultaCEPConvertido.logradouro
      cidade.value = consultaCEPConvertido.localidade
      estado.value = consultaCEPConvertido.uf

      return {valido:true, texto:""}, logradouro, cidade, estado
  } catch(erro) {
      return {valido:false, texto:"CEP não existe"}
  }
}

export { validarSenha, validarNome, validarSobrenome, validarCPF, validarCEP }