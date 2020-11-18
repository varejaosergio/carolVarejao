import React from 'react';
import { AboutBase } from './styles';
import Banner from '../../assets/corpo inteiro.jpeg';
import Foto from '../../assets/profile.jpeg';
/*  eslint "require-jsdoc": ["error", {
    "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": true,
        "ArrowFunctionExpression": true,
        "FunctionExpression": true
    }
}]*/

/**
 * It returns jsx
 */
function About() {
  return (
    <AboutBase>
      <h3 className="titulo-principal">Carol Varejão</h3>

      <div className="principal-conteudo">
        <img className="foto-right" src={Banner} alt="Banner" />
        <p>
          <strong>
            Muito Prazer! 
          </strong>
          {" "}Sou apaixonada pelo que faço e quero te
          ajudar a desenvolver sua 
          <strong>
          {" "}Marca Pessoal.
          </strong>
        </p>

        <p>
          <em>
            Antes de explicar o meu trabalho aqui estão alguns detalhes sobre
            mim:
            <strong>
              {" "}Graduada pela UVV-ES em Marketing, Pós graduada com MBA em Gestão
              Empresarial pela FGV, diretora de relacionamento e marketing na
              empresa Oficina Renova. Minha empresa, meu orgulho!
            </strong>
          </em>
        </p>

        <p>
          Desenvolvemos nossa empresa com base nas melhores praticas de gestão.
          <em>
            <strong>
              Muito orgulho de fazer parte de uma gestão premiada Estadual e
              Nacionalmente. Vencemos o prêmio MPE - Brasil em 2016.
            </strong>
          </em>
        </p>

        <p className="texto-centro">
          <em>
            <strong>
              Acreditar em você e no seu potencial é a chave para você começar
              a colocar seus sonhos em prática! Não existe mágica, existe
              persistência e coragem. Do que não abro mão: Desafios,
              comunicação, felicidade, autenticidade, criatividade e crescimento
              contínuo.
            </strong>
          </em>
        </p>

        <img className="profile-foto" src={Foto} alt="Minha foto." />
        <br />
        <h3>Propósito</h3>
        <p className="texto-centro">
          Sou do brilho, da luz e da força. Sou do fazer, do acontecer, do não
          desistir. Ensinar pessoas me motiva, ver sonhos sendo realizados me
          move e conhecer histórias me enche de alegria. Meu movimento está na
          coragem e na ação. Valorizo os detalhes. Sou do dia, da luz, da
          energia positiva. Me perco em um abraço apertado e em um momento em
          família. Não vejo a hora passar quando estou com Miguel, meu filho.
          Acredito no amor, valorizo a sinceridade e a empatia. Me dá brilho nos
          olhos ajudar pessoas a realizarem seus sonhos através dos resultados
          que gero. Amo o trabalho, a evolução contínua. Minha paixão é
          empreender! Muito prazer, Carol: mãe, mulher, humana. Hoje, ajudo
          mulheres a serem destaque através da sua marca pessoal.
          <em>
            <strong>
              Transformar pessoas através das suas histórias.
            </strong>
          </em>
        </p>
        <br />

        <p>
          <strong>
            Missão:
          </strong>
          Ajudo mulheres a serem destaque através da
          sua marca pessoal.
        </p>

        <p>
          <strong>
            Visão:
          </strong>
          Ter liberdade financeira através do marketing digital, tendo
          relevância e reconhecimento nesse segmento.
        </p>
        <br />
        <p className="texto-centro">
          <strong>
            <em>
              “Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance.
              Invada. Caia. Seja tudo que quiser ser, mas acima de tudo, seja
              você. SEMPRE!”
            </em>
          </strong>
        </p>
      </div>
    </AboutBase>
  );
}

export default About;
