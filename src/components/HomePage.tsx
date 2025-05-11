import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const HomePage: React.FC = () => {
    return (
        <div className='home-page'>
            <h1>Home page</h1>
            <SearchBar />
            <div className='home-content'>
                <h1>zawartosc HP</h1>
            </div>
        </div>
    );
}

export default HomePage;