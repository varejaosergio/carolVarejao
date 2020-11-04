import React, { Component } from "react";
import Form from "./components/Form/Form";
import PageDefault from "./components/PageDefault";
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from "./components/BannerMain"
import { Container } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <PageDefault>
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription="Mentora Carol Varejão 'Você Marca!'"
        />
        <Container component="article" maxWidth="sm">
          <Form onSubmit={onSubmitForm} />
        </Container>
      </PageDefault>
    );
  }
}

function onSubmitForm(data) {
  console.log(data);
}

export default App;
