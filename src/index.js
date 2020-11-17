import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* SSV alteração para utilizar o modelo single page, 
todos os imports abaixo e implementação são as mudanças para SPA
 import App from './App';*/

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  /* SSV implementação SPA, sai esse config <React.StrictMode>
    <App />
  </React.StrictMode>,*/
  <BrowserRouter>
     <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />       
      <Route component={() => (<div>Página 404</div>)} />
     </Switch>
  </BrowserRouter>,  
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

