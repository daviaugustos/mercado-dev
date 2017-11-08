import React, { Component } from 'react';

import HeaderHome from './HeaderHome';
import AnunciosHome from './AnunciosHome';
import FooterHome from './FooterHome';
import LinkCategoria from './LinkCategoria';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <HeaderHome />
        <div className='container'>
          <h3>Últimos anúncios</h3>
          <div className='row'>
            <AnunciosHome />
            <AnunciosHome />
            <AnunciosHome />
            <AnunciosHome />
          </div>
          <h3>Categorias</h3>
          <div className='row'>
            <LinkCategoria />
            <LinkCategoria />
            <LinkCategoria />
            <LinkCategoria />
          </div>
        </div>
        <FooterHome />
      </div>
    );
  }
}

export default App;
