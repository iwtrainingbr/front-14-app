import {BrowserRouter, Routes, Route} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Example from "./pages/Example";
import Andrade from "./pages/Andrade";


export default function App() {
  return (
    <BrowserRouter>

      Ola mundo

      <Routes>
        <Route path="/cadastro" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/exemplo" element={<Example/>} />
        <Route path="/andrade" element={<Andrade/>} />

      </Routes>


    </BrowserRouter>
  );
}
