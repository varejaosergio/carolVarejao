import React, { Component } from 'react';
import Form from './components/Form/Form';
import PageDefault from './components/PageDefault';
import {Container} from '@material-ui/core';

class App extends Component {
  render(){
    return (
      <PageDefault>
        
        <Container>
          <Form onSubmit={onSubmitForm} />
        </Container>
              
      </PageDefault>
    );
  }
}

function onSubmitForm(data){
  console.log(data);
}

export default App;
