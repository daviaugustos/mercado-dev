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
            <AnunciosHome dadosAnuncio={{ titulo: 'Jetta 2017', descricao: 'Um excelente carro..', preco: '150000', urlImagem: 'https://d2lli4bm7g1p8y.cloudfront.net/Content/Carros/jetta/produto/versoes/thumb/highline.png' }} />
          </div>
          <h3>Categorias</h3>
          <div className='row'>
            <LinkCategoria dadosCategoria={{ nome: 'Carros', icone: 'fa-car' }} />
          </div>
        </div>
        <FooterHome />
      </div>
    );
  }
}

export default App;
