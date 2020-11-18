import React from "react";
import { MentoriaBase } from "./styles";
import Banner from "../../assets/branding.png";
import Banner2 from "../../assets/banner carol.jpg";
import VcMarca from "../../assets/vcmarca.png";

function Mentoria() {
  return (
    <MentoriaBase>
      <h3 className="titulo-principal">
        <em>Você Marca Pessoal</em>
      </h3>

      <div className="principal-conteudo">
        <p>
          <strong>Estou aqui para...</strong>
          <br />
          Ajudar você a se posicionar como Marca através de estratégias de
          Marketing para você se destacar e lucrar na era digital.
          <br />
          <strong>Porque sou apaixonada por marketing,</strong> criar
          relacionamento com pessoas, viver experiências novas e compartilhar
          conhecimento que é o bem mais precioso que podemos levar ao longo de
          nossas vidas.
        </p>
        <img className="foto-left" src={Banner2} alt="Minha foto." />
        <br />

        <p className="texto-centro-font-title">
          <em>
            <strong>
              Pessoas não se conectam com MARCAS, se conectam com pessoas. Qual
              é a sua marca?
            </strong>
          </em>
        </p>
        <br />
        <p>
          <strong>1. Você tem medo de falar sobre você?</strong>
        </p>

        <p>
          Juntas vamos trabalhar ferramentas que vão te ajudar a desenvolver a
          criação de vídeos incríveis e autênticos
        </p>

        <img className="foto-right" src={Banner} alt="Banner" />
        <p>
          <strong>2. A síndrome do impostor está tomando conta de você?</strong>
        </p>

        <p>
          Você tem uma história de vida que já é sucesso! Basta você se
          convencer que essa história é o seu maior conhecimento. Pode ter
          várias pessoas fazendo o que você faz, mas a sua história só você sabe
          contar.
        </p>

        <p className="texto-centro-font-title">
          <strong>O que te impede de sonhar?</strong>
        </p>
        <p>
          <em>
            Vamos encontrar o seu propósito e entender o porque você faz o que
            você faz. Qual é o seu maior objetivo?
          </em>
        </p>

        <img className="marca" src={VcMarca} alt="Logo Você Marca." />
        <p className="texto-chamada">
          Chegou a sua vez de <strong>Destacar Sua Marca </strong>no Mundo!
        </p>

        <p className="texto-chamada">
          Vou te contar como funciona a<strong> Mentoria Você Marca</strong> e
          tudo oque você receberá ao ingressar!
        </p>

        <p className="texto-chamada">
          Faça o seu cadastro abaixo que explico tudo sobre a
          <strong> Mentoria Você Marca!</strong>
        </p>
        <p className="texto-centro"></p>
      </div>
    </MentoriaBase>
  );
}

export default Mentoria;
