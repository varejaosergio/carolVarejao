import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Logo from "../../assets/cv-pequena.jpeg";
import "./Menu.css";
import Button from "../Button";
//import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <BrowserRouter>
        <Link to="/">
          <img className="Logo" src={Logo} alt="Carol Varejão Logo" />
        </Link>       
      </BrowserRouter>
    </nav>
  );
}

export default Menu;
