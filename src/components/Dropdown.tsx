import React from 'react';

const Dropdown: React.FC = () => {

    return (
        <div className='dropdown-menu'>
            <ul className='dropdown-list'>
                <li><h2>Moje konto</h2></li>
                <li><button className='menu-button'>Zamówienia</button></li>
                    <li><span className="menu-line"></span></li>
                <li><button className='menu-button'>Potrzebujesz pomocy?</button></li>
                <li><button className='menu-button'>Karty podarunkowe</button></li>
                    <li><span className="menu-line"></span></li>
                <li><button className='menu-button'>Kraj</button></li>
                <li><button className='menu-button'>Język</button></li>
                    <li><span className="menu-line"></span></li>
                <li><button className='menu-button'>Zostań naszym partnerem</button></li>
            </ul>            
        </div>
    );
};

export default Dropdown;