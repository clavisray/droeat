import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC<{
    isClicked: boolean;
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
 }> = ({ isClicked, setIsClicked }) => {

    const navigate = useNavigate();


    const handleLoginRedirect = () => {
        navigate('/auth');
        setIsClicked(true);
    };
    return (
        <header>
            <div className='logo'>
                <h1>
                    Logo do stylizacji(do lewej)
                    <img src='/logo.png' alt='Logo' />
                </h1>
            </div>
            {!isClicked && (
                <div className='authform'>                    
                    <button className='PrzejdzDoLogowania' onClick={handleLoginRedirect}>
                    Zaloguj się
                     </button>
                </div>
            )}       
        </header>
    );
};

export default Header;