import styled from 'styled-components';

export const MenuCentral = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;  
    width: 440px;  
    justify-content: space-between;
    margin: 0 auto;  
`;

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: center;  
    height: 100vh;  
`;

export const CardContainer = styled.div`
    width: 200px;  
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 200px;  
    object-fit: cover;
`;

export const CardTitle = styled.h3`
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    margin: 0;
    padding: 10px;
    text-align: center;
`;


