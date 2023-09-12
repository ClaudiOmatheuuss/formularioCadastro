import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function DadosUsuario({ aoEnviar, validacoes }) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erros, setErros] = useState({
        senha:{valido:true, texto:""}, 
      })

      function validarCampos (event) {
    
        console.log(event.target)
        const {name, value} = event.target
        const novoEstado = {...erros}
        novoEstado[name] = validacoes[name](value)
        setErros(novoEstado)
        console.log(novoEstado)
      }
    
    
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            aoEnviar({ email, senha })
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
                onBlur={(event) => validarCampos(event)}
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

            <Button type="submit" variant="contained" color="primary" >
                Cadastrar
            </Button>
        </form>
    )
}

export default DadosUsuario