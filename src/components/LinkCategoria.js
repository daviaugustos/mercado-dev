import React from 'react';

const LinkCategoria = props => (
    <a to={`/anuncios/categoria/`} className="btn btn-secondary h-100 m-2 col-sm">
        <i className={`fa ${props.dadosCategoria.icone} fa-4x`} aria-hidden="true"></i><br />
        {props.dadosCategoria.nome}
    </a>
);

export default LinkCategoria;