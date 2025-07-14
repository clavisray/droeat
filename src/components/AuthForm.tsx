import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const navigate = useNavigate();


  return (

    <div className="auth-form">
      <div className='form-group'>
        { isRegistering ? (
          <>
            <h2>Utwórz konto</h2>
            <button className='continueLoggingWithGoogle'>Kontynuuj przy użyciu konta Google</button>
            <button className='continueLoggingWithFB'>Zaloguj się przez Facebook</button>
            <label htmlFor='imie'>Imie</label>
              <input type="imie" id="imie" placeholder='Imie' />
            <label htmlFor='nazwisko'>Nazwisko</label>
              <input type="nazwisko" id="nazwisko" placeholder='Nazwisko' />
            <label htmlFor='email'>E-mail</label>
              <input type="email" id="email" placeholder='Email' />
            <label htmlFor='password'>Hasło</label>
              <input type="password" id="password" placeholder='Hasło' />
              
            <label htmlFor='checkbox' className='checkbox-label'> 
              <input type="checkbox" id="checkbox" />
              <span>Tak, chcę otrzymywać zniżki, oferty lojalnościowe i inne informacje.</span> 
            </label>
            <button className='createAccount'>Utwórz konto</button>
            <span className='menu-line'></span>
            Masz juz konto ? <button className='alreadyRegistered'>Zaloguj się</button>
            <span className='menu-line'></span>
            Tworząc konto, akceptujesz Regulamin. Zapoznaj się z naszą Polityka prywatności oraz Polityką plików cookie.
          </>
        ) : (
          <>

          </>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
