import React from "react";
import { MentoriaBase } from "./styles";
import Banner from "../../assets/corpo inteiro.jpeg";
import Foto from "../../assets/profile.jpeg";

function Mentoria() {
  return (
    <MentoriaBase>
      <h3 className="titulo-principal">Mentoria</h3>

      <div className="principal-conteudo">      

        <img className="foto-left" src={Foto} alt="Minha foto." />
        <br />
        
        <p className="texto-centro">
          
        </p>
        <br />

        <p>
         
        </p>

        <p>
          
        </p>
        <br/>
        <p className="texto-centro">
          
        </p>
        <img className="foto-right" src={Banner} alt="Banner" />
        <p>
          
        </p>

        <p>
          
        </p>

        <p>
          
        </p>

        <p className="texto-centro">
          
        </p>
      </div>
    </MentoriaBase>
  );
}

export default Mentoria;
