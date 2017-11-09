import React, { Component } from 'react';
import base from './database/base';

import HeaderHome from './components/HeaderHome';
import AnunciosHome from './components/AnunciosHome';
import FooterHome from './components/FooterHome';
import LinkCategoria from './components/LinkCategoria';

class App extends Component {

  bindStates(){
    base.bindToState('categorias', {
      context: this,
      state: 'categoriasView'
    });
    
    base.bindToState('anuncios', {
      context: this,
      state: 'anunciosView'
    });
  }
  
  constructor(props){
    super(props);

    this.bindStates();
    this.state = {
      anunciosView: [],
      categoriasView: []
    }
  }

  render() {
    return (
      <div className='App'>
        <HeaderHome />
        <div className='container'>
          <h3>Últimos anúncios</h3>
          <div className='row'>
            {
              this.state.anunciosView.map(objAnuncio => <AnunciosHome dadosAnuncio={objAnuncio} />)
            }
          </div>
          <h3>Categorias</h3>
          <div className='row'>
            {
              this.state.categoriasView.map(objCategoria => <LinkCategoria dadosCategoria={objCategoria} />)
            }
          </div>
        </div>
        <FooterHome />
      </div>
    );
  }
}

export default App;
