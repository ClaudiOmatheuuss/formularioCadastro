import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

import { Typography } from "@mui/material";

function FormularioCadastro({aoEnviar, validarCPF}) {
  
  const [etapaAtual, setEtapaAtual] = useState(0)
  
  function proximo() {
    setEtapaAtual(etapaAtual + 1)
  }

  function formularioAtual(etapaAtual) {
    switch(etapaAtual){
      case 0:
        return <DadosUsuario aoEnviar={proximo} />
      case 1:
        return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />
      case 2:
        return <DadosEntrega aoEnviar={aoEnviar} />
      default:
        return <Typography>Erro ao ser renderizado</Typography>
    }
  
  }
  return (
    <>
      { formularioAtual(etapaAtual) }
    </>
  );
}

export default FormularioCadastro;