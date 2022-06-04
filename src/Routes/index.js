import { Routes as ReactRoutes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Tutorial from "../pages/Tutorial";
import RecuperarSenha from "../pages/RecuperarSenha";
import Carrinho from "../pages/Carrinho";
import Example from "../pages/Example";
import Sobre from "../pages/Sobre";
import Navbar from "../components/Navbar";
import NotFound from "../pages/NotFound";
import { useLocation } from "react-router-dom";

export default function Routes() {

    const location = useLocation();
    
    const externalPages = [
        '/cadastro',
        '/login',
        '/tutorial',
        '/recuperarsenha'
      ];

    let nav = !externalPages.includes(location.pathname) ? <Navbar /> : '';

    return (
        <div className="pageBody">
            { nav }
            <div className="pages">
                <ReactRoutes>
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/exemplo" element={<Example />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/tutorial" element={<Tutorial />} />
                <Route path="/sobre" element={<Sobre />} />

                <Route path="/recuperarsenha" element={<RecuperarSenha />} />
                

                <Route path="/*" element={<NotFound />} />
                </ReactRoutes>
            </div>
        </div>
    )
}