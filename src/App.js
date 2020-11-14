import React from "react";
import PageDefault from "./components/PageDefault";
import dadosIniciais from "./data/dados_iniciais.json";
import BannerMain from "./components/BannerMain";
import About from "./components/About";
import Carousel from "./components/Carousel";

import { Container, Typography } from "@material-ui/core";
import Form from "./components/Form/Form";
import Mentoria from "./components/Mentoria";

function App() {
  return (
    <PageDefault>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Mentora Carol Varejão 'Você Marca!'"
      />
      <About />
      <Carousel category={dadosIniciais.categorias[0]} />

      <Mentoria />

      <Container component="article" maxWidth="sm">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          color="textPrimary"
        >
          MENTORIA VOCÊ MARCA!
        </Typography>
        <Form onSubmit={onSubmitForm} />
      </Container>
    </PageDefault>
  );
}

function onSubmitForm(data) {
  console.log(data);
}

export default App;
