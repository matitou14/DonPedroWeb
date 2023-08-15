
import React from 'react';
import { CardContainer, CardImage, CardTitle } from './styles';

function Card({ imagen, titulo }) {
    return (
        <CardContainer>
            <CardImage src={imagen} alt={titulo} />
            <CardTitle>{titulo}</CardTitle>
        </CardContainer>
    );
}

export default Card;
