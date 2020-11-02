import React from 'react';
import Logo from '../../assets/cv-pequena.jpeg';
import { FooterBase } from './styles';


function Footer() {
  return (
    <FooterBase>
      <a href="https://www.instagram.com/carolvarejao/">
        <img className="logoFooter" src={Logo} alt="Logo Carol Varejão" />
      </a>
      <p>
        <a href="https://www.linkedin.com/in/sergio-s-varejao-frontend/">
        Created by Sérgio Varejão 
        </a>        
        {' '}
        <a href="https://www.instagram.com/carolvarejao/">
          Copyright Carol Varejão
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;