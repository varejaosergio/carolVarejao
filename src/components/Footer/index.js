import React from "react";
import Logo from "../../assets/cv-pequena.jpeg";
import Instagram from "../../assets/icone-instagram.png";
import Facebook from "../../assets/icone-facebook.png";
import Whatsapp from "../../assets/icone-whatsapp.png";
import Youtube from "../../assets/icone-youtube.png";

import { FooterBase } from "./styles";

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.instagram.com/carolvarejao/">
        <img className="logoFooter" src={Logo} alt="Logo Carol Varejão" />
      </a>
      <p>
        <a href="https://www.linkedin.com/in/sergio-s-varejao-frontend/">
          Created by Sérgio Varejão
        </a>{"   "}
        <br />
        <br />
        Copyright Carol Varejão
      </p>
      <p className="Icones">
        <a href="https://www.instagram.com/carolvarejao/">
          <img
            className="Icone"
            src={Instagram}
            alt="Instagram da Carol Varejão"
          />
        </a>

        <a href="https://www.facebook.com/carolvarejaomarcapessoal">
          <img 
            className="Icone" 
            src={Facebook} 
            alt="Facebook da Carol Varejão" 
          />
        </a>

        <a href="https://www.youtube.com/channel/UC60uQKM3qu3GmYqIbEdqcQw">
          <img 
            className="Icone" 
            src={Whatsapp} 
            alt="Youtube da Carol Varejão" 
          />
        </a>

        <a href="https://www.youtube.com/channel/UC60uQKM3qu3GmYqIbEdqcQw">
          <img 
            className="Icone" 
            src={Youtube} 
            alt="Youtube da Carol Varejão" 
          />
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
