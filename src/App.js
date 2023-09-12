import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';

import {Container, Typography } from "@mui/material"

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 digitos."}
  } else if (numerosRepetidos(cpf)) {
    return {valido: false, texto:"CPF não pode ter todos os números repetidos."}
  } else{
    return {valido:true, texto:""}
  }

  function numerosRepetidos ( cpf ) {
    const primeiroDigito = cpf[0]
    for (let i = 1; i < cpf.length; i++) {
      if ( cpf[i] !== primeiroDigito ){
        return false
      }
      return true
    }
  }
}


export default App;