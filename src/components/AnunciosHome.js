import React from 'react';

const AnunciosHome = props => (
    <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
            <a href="#"><img className="card-img-top" src={props.dadosAnuncio.urlImagem} alt="" /></a>
            <div className="card-body">
                <h4 className="card-title">
                    <a to={`/anuncios/ver/`}>{props.dadosAnuncio.titulo}</a>
                </h4>
                <h5> R$ {props.dadosAnuncio.preco}</h5>
                <p className="card-text">{props.dadosAnuncio.descricao}</p>
            </div>
        </div>
    </div>
);

export default AnunciosHome;