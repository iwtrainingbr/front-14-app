import {useState} from "react";
import {Button} from "@mui/material";

export default function Carrinho () {
  const [quantidade, alterarQuantidade] = useState(1);

  const add = () => {
    alterarQuantidade(quantidade + 1);
  }

  const remove = () => {
    if (quantidade === 1) {
      alert('o minimo é 1');
      return;
    }

    alterarQuantidade(quantidade - 1);
  }

  return (
    <div>
      <Button onClick={remove} variant="outlined" color="error">-</Button>
      {quantidade}
      <Button onClick={add} variant="outlined" color="error">+</Button>
    </div>
  );

}
