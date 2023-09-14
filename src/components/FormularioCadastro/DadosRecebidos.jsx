import { Typography } from "@mui/material";
import React from "react";

import imagemObrigado from './img/obrigado.png'

function DadosRecebidos () {
    return (
        <>
            <Typography variant="h5" align="center" fontFamily="cursive" color="#1976D2">Dados coletados. Obrigado pelo cadastro!</Typography>
            <img src={imagemObrigado} width="70%" alt="Imagem de agradecimento do cadastro" />
        </>
    )
}

export default DadosRecebidos