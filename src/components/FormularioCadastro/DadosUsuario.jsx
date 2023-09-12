import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

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
                id="senha"
                label="Senha"
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