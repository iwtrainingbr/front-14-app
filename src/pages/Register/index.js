import {Button, TextField} from "@mui/material";
import{Check}from "@mui/icons-material";
import "./styles.css";


export default function Register() {
  return (
    <div>
      <h1 className="titulo">Cadastro de Usuario</h1>
      <TextField fullWidth label="Digite seu Nome"/>
      <TextField fullWidth label="Digite seu Email"/>
      <TextField fullWidth label="Digite seu Telefone"/>
      <TextField fullWidth label="Digite seu CEP"/>
      <TextField fullWidth label="Digite seu Endereço"/>
      <Button  fullWidth color="success" variant="contained"><Check/>Cadastrar</Button>
      <h3 className="conta">Já Possui uma conta?</h3>
      <a className="login"href="url">FAÇA LOGIN</a>


    </div>
  )
}
