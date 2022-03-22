import React from 'react';
import styledComponents from 'styled-components'

const SmallCardContainer = styledComponents.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 20px;
    margin-bottom: 10px;
    height: 70px;

    > img {
        width: 40px;
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

function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <img src={ props.imagem } />
            <div>
                <p>{ props.info }</p>
            </div>
        </SmallCardContainer>
    )
}

export default CardPequeno;