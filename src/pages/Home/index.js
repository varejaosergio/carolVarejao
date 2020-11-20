import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';
import BannerMain from "../../components/BannerMain";
import About from "../../components/About";
import Carousel from "../../components/Carousel";


import Form from "../../components/Form/Form";
import Mentoria from "../../components/Mentoria";

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
    //const URL = 'https://carolvarejao.herokuapp.com/categorias';
    //http://localhost:8080/categorias?_embed=videos
      .then((categoriasComVideos) =>{
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) =>{
        console.log(err.message);
      });    
  }, []);  

  return (    
    <PageDefault paddingAll={0}>    
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if(indice === 0 ){
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}      
                videoDescription="#VoceMarcaPessoal"
              />
              <About />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
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