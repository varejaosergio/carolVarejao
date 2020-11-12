import styled from "styled-components";

export const AboutBase = styled.body`
  line-height: 1.5;
  padding: 3em 0;

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

  .profile-foto {
    width: 200px;
    float: left;
    margin: 0 20px 20px 0;
    box-shadow: 10px 10px 10px 0 #000000;
    border-radius: 50%;
  }
`;
