
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../components/carrusel.css';

function Carrusel() {
    return (
        <div className="carrusel-container">
         <Carousel autoPlay infiniteLoop showArrows={false} showStatus={false}>
                <div>
                    <img src="/src/assets/img/bn.jpg" alt="Banco Nacion" />
                    <p className="legend">Descuentos todos los sabados con Banco Nacion</p>
                </div>
                <div>
                    <img src="/src/assets/img/billetera.jpg" alt="Slide 2" />
                    <p className="legend">Billetera Santa Fe</p>
                </div>
                {/* Agrega más slides según lo necesites */}
            </Carousel>
        </div>
    );
}

export default Carrusel;