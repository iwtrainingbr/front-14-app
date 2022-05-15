
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar";

import "./styles.css";

import Routes from "./Routes";

export default function App() {

  return (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
  );
}
