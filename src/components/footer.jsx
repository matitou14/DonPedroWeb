import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {FooterWrapper,FooterSection, FooterBottom, SocialIcons } from './styles'
function Footer() {
    return (
        
         <FooterWrapper>
            <FooterSection>
                <h3>Contacto</h3>
                <p>Dirección: Calle Ficticia #123</p>
                <p>Teléfono: +123456789</p>
                <p>Email: info@example.com</p>
            </FooterSection>

            <FooterSection>
                <h3>Navegación</h3>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/cortes">Cortes</a></li>
                    <li><a href="/recetas">Recetas</a></li>
                </ul>
            </FooterSection>

            <FooterSection>
                <h3>Síguenos</h3>
                <SocialIcons>
                    <a href="https://www.facebook.com/"><FaFacebook /></a>
                    <a href="https://www.instagram.com/"><FaInstagram /></a>
                </SocialIcons>
            </FooterSection>

        

            <FooterBottom>
                <p>&copy; 2023 CodeCraze. Todos los derechos reservados.</p>
            </FooterBottom>
        </FooterWrapper>
     
    );
}

export default Footer;