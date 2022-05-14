import {Button, TextField, InputAdornment, IconButton} from "@mui/material";
import {Favorite, ZoomOut, Visibility,VisibilityOff} from "@mui/icons-material";

import { useState} from "react"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }
  return (

    <div>
    <h1>Login</h1> 
    <hr></hr>
    <TextField fullWidth label="Digite seu E-mail"/>
    
    <TextField
     type={showPassword=== true ? "text" : "password"}
      fullWidth
       label="Digite sua Senha"
       InputProps={{
        endAdornment: <InputAdornment>
        <IconButton onClick={handleShowPassword}>
          {showPassword === true ? <VisibilityOff/> : <Visibility/>}
          </IconButton>
        </InputAdornment>
       }}
       />
    <Button fullWidth color="success" variant="contained">Enviar</Button>
<>Ainda não possui uma conta? <a href="">CADASTRE-SE!</a></>
    </div>   
  )
}
