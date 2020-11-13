import styled from "styled-components";

export const MentoriaBase = styled.body`
  line-height: 1.5;
  padding: 3em 0;
  color: black;

  .titulo-principal {
    text-align: center;
    font-size: 2em;
    margin: 0 0 1em;
  }
  .foto-right {
    width: 300px;
    float: right;
    margin: 0 0 20px 20px;
    box-shadow: 10px 10px 10px 0 #000000;
  }

  .principal-conteudo {
    width: 100%;
    margin: 0 auto;
  }

  .texto-centro {
    text-align: center;
    line-height: 2;

  }

  .principal p {
    margin: 0 0 1em;
  }

  .principal strong {
    font-weight: bold;
  }

  .principal em {
    font-style: italic;
  }

  .foto-left {
    width: 200px;
    float: left;
    margin: 0 20px 20px 0;
    box-shadow: 10px 10px 10px 0 #000000;    
  }
`;
