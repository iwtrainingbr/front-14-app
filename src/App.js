import {BrowserRouter, Routes, Route} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Tutorial from "./pages/Tutorial";
import RecuperarSenha from "./pages/RecuperarSenha";
import Carrinho from "./pages/Carrinho";

import Navbar from "./components/Navbar";

import "./styles.css";
import Example from "./pages/Example";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <div className="pages">
        <Routes>
          <Route path="/cadastro" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/tutorial" element={<Tutorial/>} />
          <Route path="/recuperarsenha" element={<RecuperarSenha/>} />
          <Route path="/carrinho" element={<Carrinho/>} />
          <Route path="/exemplo" element={<Example/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
