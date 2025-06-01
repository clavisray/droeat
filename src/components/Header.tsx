import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from './Dropdown';
import Logo from '../assets/logomain.jpg';

const Header: React.FC<{
    isAuthForm: boolean;
    //isSearchBar: boolean;
    setIsAuthForm: React.Dispatch<React.SetStateAction<boolean>>;
    //setIsSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
 }> = ({ isAuthForm, setIsAuthForm, /*isSearchBar, setIsSearchBar*/ }) => {

    const navigate = useNavigate();

    const [isDropdown, setIsDropdown] = useState(false);

    const dropdownButtonRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleLoginRedirect = () => {
        navigate('/auth');
        setIsAuthForm(true);
        setIsDropdown(false);
        //setIsSearchBar(false);
    };

    const toggleDropdown = () => {
        setIsDropdown(prev => !prev);
    };

    const handleLogoClick = () => {
        navigate('/');
        setIsAuthForm(false);
        setIsDropdown(false);
        //setIsSearchBar(true);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownButtonRef.current && !dropdownButtonRef.current.contains(event.target as Node) &&
                dropdownRef.current && !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdown(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    
    return (
        <header>
            <div className='header'>
                <div className='logo'>
                    <button className='logo-button' onClick={handleLogoClick}>
                        <img src={Logo} alt='Logo' className='logoMain'/>
                   </button>
                    
                </div>
                {!isAuthForm && (
                    <div className='authform'>                    
                        <button className='PrzejdzDoLogowania' onClick={handleLoginRedirect}>
                        Zaloguj się
                        </button>
                    </div>
                )}
                <div className='dropdown'>
                    <button 
                        className='dropdown-button' 
                        onClick={toggleDropdown}
                        ref={dropdownButtonRef}
                    >
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                    </button>
                    {isDropdown && (
                        <div ref={dropdownRef}>
                            <Dropdown />
                        </div>
                    )}   
                </div>
            </div>     
        </header>
    );
};

export default Header;