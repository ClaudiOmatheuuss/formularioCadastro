import React, { useState, useContext } from "react"
import { TextField, Button, Switch, FormControlLabel } from "@mui/material"

import ValidacoesCadastro from '../../contexts/ValidacoesCadastro'
import styles from './Formulario.module.css'
import useErros from '../../hooks/useErros'

function DadosPessoais({ aoEnviar }) {

  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [cpf, setCpf] = useState("")
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(false)
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, envioAutorizado] = useErros(validacoes)

  return (
    <form className={styles.formconteudo}
      onSubmit={(event) => {
        event.preventDefault()
        if(envioAutorizado(erros)){
          aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value)
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        id="nome"
        label="Nome"
        name="nome"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value)
        }}
        onBlur={validarCampos}
        error={!erros.sobrenome.valido}
        helperText={erros.sobrenome.texto}
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value)
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        label="CPF"
        variant="outlined"
        name="cpf"
        margin="normal"
        fullWidth
        type="text"
        required
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked)
            }}
            name="promocoes"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked)
            }}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" size="large" variant="contained" color="primary" fullWidth>
        Próximo
      </Button>
    </form>
  )
}

export default DadosPessoais