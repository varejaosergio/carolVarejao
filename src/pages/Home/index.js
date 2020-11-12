import React from "react";
import PageDefault from "../../components/PageDefault";
import dadosIniciais from "../../data/dados_iniciais.json";
import BannerMain from "../../components/BannerMain";
import { Container } from "@material-ui/core";
import About from "../../components/About";
import Carousel from "../../components/Carousel";
import Form from "../../components/Form/Form";

function Home() {
    /*const [dadosIniciais, setDadosIniciais] = useStata([]);

    useEffect(() => {
        categoriasRepository.getAllWithVideos()
        const URL = '';

    }, []);*/
    return (
      <PageDefault>
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription="Mentora Carol Varejão 'Você Marca!'"
        />
        <About />
        <Carousel category={dadosIniciais.categorias[0]} />

        <Container component="article" maxWidth="sm">
          <Form onSubmit={onSubmitForm} />
        </Container>
      </PageDefault>
    );
  
}

function onSubmitForm(data) {
  console.log(data);
}

export default Home;
