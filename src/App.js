import {BrowserRouter, Routes, Route} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Example from "./pages/Example";
import RecuperarSenha from "./pages/RecuperarSenha";

export default function App() {
  return (
    <BrowserRouter>

      

      <Routes>
        <Route path="/cadastro" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/exemplo" element={<Example/>} />
        <Route path="/recuperarsenha" element={<RecuperarSenha/>} />
      </Routes>


    </BrowserRouter>
  );
}
