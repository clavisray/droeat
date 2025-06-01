import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const HomePage: React.FC = () => {
    return (
        <div className='home-page'>
            <h1>Zamów jedzenie i nie tylko</h1>
            <h2>Restauracje z dostawą w pobliżu</h2>
            <SearchBar />
            <div className='home-content'>
                <h1>zawartosc HP</h1>
            </div>
        </div>
    );
}

export default HomePage;