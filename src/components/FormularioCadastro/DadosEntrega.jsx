import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

function DadosEntrega({ aoEnviar }) {

    const [cep, setCep] = useState("")
    const [endereco, setEndereco] = useState("")
    const [numero, setNumero] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            aoEnviar({ cep, endereco, numero, estado, cidade })
        }}>
            <TextField
                value={cep}
                onChange={(event) => {
                    setCep(event.target.value)
                }}
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
                required
            />
            <TextField
                value={endereco}
                onChange={(event) => {
                    setEndereco(event.target.value)
                }}
                id="endereco"
                label="Endereço"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />
            <TextField
                value={numero}
                onChange={(event) => {
                    setNumero(event.target.value)
                }}
                id="numero"
                label="Numero"
                type="number"
                variant="outlined"
                margin="normal"
                required
            />
            <TextField
                value={estado}
                onChange={(event) => {
                    setEstado(event.target.value)
                }}
                id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
                required
            />
            <TextField
                value={cidade}
                onChange={(event) => {
                    setCidade(event.target.value)
                }}
                id="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
                required
            />

            <Button type="submit" variant="contained" color="primary" fullWidth >
                Finalizar cadastro
            </Button>
        </form>
    )
}

export default DadosEntrega