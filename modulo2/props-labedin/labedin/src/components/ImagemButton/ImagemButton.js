import React from 'react';
import styledComponents from 'styled-components'

const ButtonContainer = styledComponents.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;

> img {
    width: 30px;
    margin-right: 10px;
}
`


function ImagemButton(props) {
    return (
        <ButtonContainer>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ButtonContainer>

    )
}

export default ImagemButton;