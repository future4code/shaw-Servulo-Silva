import React from 'react';
import styledComponents from 'styled-components'

const BigCardContainer = styledComponents.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;

    > img {
        width: 70px;
        margin-right: 10px;
        border-radius: 50%;
    }
    
    h4 {
        margin-bottom: 15px;
    }
    
    div {
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
    }
`;

function CardGrande(props) {
    return (
        <BigCardContainer>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </BigCardContainer>
    )
}

export default CardGrande;