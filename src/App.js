import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

import "./styles.css";

import Routes from "./Routes";

export default function App() {

  return (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
  );
}
