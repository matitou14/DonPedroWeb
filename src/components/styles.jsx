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
export const FooterWrapper = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items:center
    padding: 10px;
    background-color: #333;
    color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height:0 auto;
    z-index: 1000; 
    
  
`;

export const FooterSection = styled.div`
    flex: 1
    text-align: center
    margin-bottom: 10px;

    h3 {
        font-size: 16px;
        margin-bottom: 8px;
    }

    p, li, a {
        margin-bottom:0 8px;
    }
`;

export const SocialIcons = styled.div`
    a {
        margin-right: 10px;
        color: #fff;
        transition: color 0.3s;

        &:hover {
            color: #ddd;
        }
    }
`;

export const FooterBottom = styled.div`
    margin-top: 140px;
    margin-left:5px;
    font-size: 14px;
`;