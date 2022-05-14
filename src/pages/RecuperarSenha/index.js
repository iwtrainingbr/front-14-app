import {Button, TextField} from "@mui/material";
import "./style.css";


export default function RecuperarSenha() {
    return (
      
      <div> 
            <h1 className="titulo">Recuperar conta</h1>
            <hr/>

            <TextField fullWidth className="input" id="outlined-basic" label="Email" variant="outlined" />
            
            <Button fullWidth className="botao" variant="contained">Enviar</Button>        
             

            <a className="link" href="#">Cadastre-se</a>
             
      </div>
        
         
    );
  
    

}


