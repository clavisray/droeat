import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (isRegistering) {
      console.log('Rejestracja zakończona');
    } else {
      console.log('Logowanie zakończone');
    }


    navigate('/');
  };

  return (
    <div className="auth-form">
      <h2 className='logowanie'>{isRegistering ? 'Zarejestruj się' : 'Zaloguj się'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="Wprowadź e-mail" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Hasło</label>
          <input type="password" id="password" placeholder="Wprowadź hasło" />
        </div>
        {isRegistering && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Potwierdź hasło</label>
            <input type="password" id="confirmPassword" placeholder="Potwierdź hasło" />
          </div>
        )}
        <button type="submit">{isRegistering ? 'Zarejestruj' : 'Zaloguj'}</button>
      </form>
      <p onClick={toggleForm} className="toggle-form-link">
        {isRegistering ? 'Masz już konto? Zaloguj się' : 'Nie masz konta? Zarejestruj się'}
      </p>
    </div>
  );
};

export default AuthForm;
