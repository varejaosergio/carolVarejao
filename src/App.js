import React, { Component } from 'react';
import Form from './components/Form/Form';
import PageDefault from './components/PageDefault';
import {Container} from '@material-ui/core';

class App extends Component {
  render(){
    return (
      <PageDefault>
        
        <Container>
          <Form/>
        </Container>
              
      </PageDefault>
    );
  }
}

export default App;
