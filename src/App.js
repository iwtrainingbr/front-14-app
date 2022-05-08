import {BrowserRouter, Routes, Route} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Tutorial from "./pages/Tutorial";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/tutorial" element={<Tutorial/>} />
      </Routes>
    </BrowserRouter>
  );
}
