import { Button, TextField } from "@mui/material";
import React from "react";

function DadosUsuario ({ aoEnviar }) {
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            aoEnviar()
        }}>
            <TextField 
                id="email" 
                label="email" 
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />
            <TextField 
                id="senha"
                label="senha"
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