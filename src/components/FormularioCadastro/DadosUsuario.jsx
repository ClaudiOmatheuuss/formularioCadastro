import { Button, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro'
import useErros from '../../hooks/useErros'

import styles from './Formulario.module.css'

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, envioAutorizado] = useErros(validacoes)

    return (
        <form className={styles.formconteudo}
            onSubmit={(event) => {
                event.preventDefault()
                if (envioAutorizado(erros)) {
                    aoEnviar({ email, senha })
                }
            }}>
            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />
            <TextField
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha"
                label="Senha"
                name="senha"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />

            <Button type="submit" size="large" variant="contained" color="primary" >
                Próximo
            </Button>
        </form>
    )
}

export default DadosUsuario