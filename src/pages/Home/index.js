import React /* SSV 11 25 2020 { useEffect, useState }*/ from 'react';
import { Container, Typography } from '@material-ui/core';
/* não precisa mais SSV 11 25 2020 import categoriasRepository from '../../repositories/categorias';*/
import PageDefault from '../../components/PageDefault';
import BannerMain from "../../components/BannerMain";
import About from "../../components/About";
import Carousel from "../../components/Carousel";
import data from '../../data/dados_iniciais.json';

import Form from "../../components/Form/Form";
import Mentoria from "../../components/Mentoria";

function Home() {  

  return (    
    <PageDefault paddingAll={0}>    
      {data.categorias.map((categoria, indice) => {
        if(indice === 0 ){
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={data.videos[0].titulo}
                url={data.videos[0].url}      
                videoDescription="#VoceMarcaPessoal"
              />
              <About />
              <Carousel
                ignoreFirstVideo
                category={data.categorias[0]}
                videos={data.videos}
              />
            </div>
          );
        }
        
        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      <Mentoria />

      <Container component="article" maxWidth="sm">
        <Typography
          variant="h4"
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

export default Home;