import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';
import {Container, Typography } from "@mui/material"

import { validarSenha, validarNome, validarSobrenome, validarCPF } from './models/cadastro'

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <FormularioCadastro 
          aoEnviar={aoEnviarForm} 
          validacoes={{
            senha: validarSenha, 
            nome: validarNome, 
            sobrenome: validarSobrenome, 
            cpf:validarCPF,
          }}
        />
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}

export default App;