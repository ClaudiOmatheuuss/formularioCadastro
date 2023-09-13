import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';
import { Typography } from "@mui/material"
import styles from './components/FormularioCadastro/Formulario.module.css'

import { validarSenha, validarNome, validarSobrenome, validarCPF } from './models/cadastro'
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Typography variant="h3" align="center" className={styles.titulo}>Formulário de cadastro</Typography>
        
        <ValidacoesCadastro.Provider value={{ senha: validarSenha, nome: validarNome, sobrenome: validarSobrenome, cpf: validarCPF}}>
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </div>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;