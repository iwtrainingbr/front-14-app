// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";

import { Hardware } from "@mui/icons-material";
import {Button, IconButton} from "@mui/material";

import {useState} from "react";

export default function Example() {
    const dados = {
        name: 'Ale',
        email: 'ale@email.com',
        address: {
            city: 'FortalCity',
            state: 'Ceará'
        }
    };

    const phone = '85 999999999';

    const tudo = {
        phone: phone,
        ...dados
    };

    const turma1 = ['Chiquim', 'Maria'];

    const turma2 = ['Luiza', 'Jaqueline'];

    const aulao = [...turma1, ...turma2];

    

    console.log(aulao);

    console.log(tudo);





    
    const {address, name} = dados;

    const teste = ({name, address, email}) => {
        alert(`Oi ${name}, do email ${email}, de ${address.city}`);
    }

    return (
        <div>
            <strong>Nome: </strong> {name} <br/>

            <strong>Fortaleza: </strong> {address.city} <br/>

            <button onClick={() => teste(dados)}>Teste</button>  
        </div>
    )
}