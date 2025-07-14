import React from 'react';

const SearchBar: React.FC = () => {

    return (
        <div className='search-bar'>
            <label htmlFor="search"></label>
            <input type="search" id="search" placeholder="Jastrzębska 2, 44-300 Wodzisław Śląski" />
            <button>Szukaj</button>
        </div>
    );
};

export default SearchBar;