// src/components/Home.j
import React from 'react';
import Carrusel from './carrusel';
import Card from './card';
import { MenuCentral, HomeContainer } from './styles';

function Home() {
    return (
        <HomeContainer>

            {/* Carrusel */}
            <Carrusel />

            {/* Menú Central con 4 Cards */}
            <MenuCentral>
                <Card imagen="/src/assets/img/vaca.jpg" titulo="Ternera" />
                <Card imagen="/src/assets/img/pollo.jpg" titulo="Pollo" />
                <Card imagen="/src/assets/img/cerdo2.jpg" titulo="Cerdo" />
                <Card imagen="/src/assets/img/cerdo.webp" titulo="Especiales" />
            </MenuCentral>

            {/* Sección Combos */}
            <div className="combos">
                <h2>Combos</h2>
                {/* Aquí irían los productos o elementos que formen parte de los combos */}
            </div>

            {/* Sección Más Vendidos */}
            <div className="mas-vendidos">
                <h2>Más Vendidos</h2>
             
            </div>

        </HomeContainer>
    );
}

export default Home;


