import React from 'react';

const Dropdown: React.FC = () => {

    return (
        <div className='dropdown-menu'>
            <ul className='dropdown-list'>
                <h2>Moje konto</h2>
                <button className='menu-button'>Zamówienia</button>
                    <span className="menu-line"></span>
                <button className='menu-button'>Potrzebujesz pomocy?</button>
                <button className='menu-button'>Karty podarunkowe</button>
                    <span className="menu-line"></span>
                <button className='menu-button'>Kraj</button>
                <button className='menu-button'>Język</button>
                    <span className="menu-line"></span>
                <button className='menu-button'>Zostań naszym partnerem</button>
            </ul>            
        </div>
    );
};

export default Dropdown;