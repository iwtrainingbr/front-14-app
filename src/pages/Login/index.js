import {Button, TextField} from "@mui/material";
import {Favorite, ZoomOut} from "@mui/icons-material";

export default function Login() {
  return (

    <div>
    <h1>Login</h1> 
    <hr></hr>
    <TextField fullWidth label="Digite seu E-mail"/>
    <TextField fullWidth label="Digite sua Senha"/>
    <Button fullWidth color="success" variant="contained">Enviar</Button>
<>Ainda não possui uma conta? <a href="">CADASTRE-SE!</a></>
    </div>   
  )
}
