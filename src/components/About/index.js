import React from 'react';
import { AboutBase } from './styles';
import Banner from '../../assets/corpo inteiro.jpeg';
import Foto from '../../assets/profile.jpeg';

function About(){
    return(
        <AboutBase>
            <h3 className="titulo-principal">Carol Varejão</h3>

            <div className="principal-conteudo">
                <img className="foto-right" src={Banner} alt="Banner"/>
                <p><strong>Muito Prazer!</strong> Sou apaixonada pelo que faço e quero te ajudar a
                 desenvolver sua <strong>Marca Pessoal.</strong>
                </p>

                <p><em>Antes de explicar o meu trabalho aqui estão alguns detalhes sobre mim:
                    <strong> Graduada pela UVV-ES em Marketing, Pós graduada com MBA em Gestão Empresarial pela FGV,
                    diretora de relacionamento e marketing na empresa Oficina Renova. "Minha empresa, meu orgulho!"
                    </strong></em>
                </p>

                <p>Desenvolvemos nossa empresa com base nas melhores praticas de gestão.<em>
                    <strong> Muito orgulho de fazer parte de uma gestão premiada Estadual e Nacionalmente. 
                    Vencemos o prêmio MPE - Brasil em 2016.</strong></em>
                </p>
                
                <p className="texto-centro"><em><strong>"Acreditar em você e no seu potencial é a chave para você começar
                     a colocar seus sonhos em prática! Não existe mágica, existe persistência e coragem".</strong></em>
                </p>
            
                <img className="profile-foto" src={Foto} alt="Minha foto."/>
                <br/>
                <p className="texto-centro">Sou Sérgio Varejão, surfista desde 1990, profissional de educação física e pós graduado em treinamento esportivo.<em><strong> "O Surf me motiva a estar sempre em busca de novos métodos de treinamento e técnicas de biomecánica para melhorar o desempenho na água".</strong></em></p>	

                <p>Sempre gostei de compartilhar conhecimento, ajudar amigos e conhecidos a melhorar seu desempenho no surf.<em><strong> "A final de contas, todos nos aprendemos durante esse processo".</strong></em></p>

                <p>Nessa pagina tambem vamos falar sobre experiências de viagens, preparação física para algumas caracteristicas de mares e algumas dicas sobre equipamentos.</p>
    
                <p><strong><em>É um espaço para desfrutar das mais variadas experiências com o surf e suas adversidades.</em></strong></p>
            </div>
        </AboutBase>
    );
}

export default About;