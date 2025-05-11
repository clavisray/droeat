import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import HomePage from './components/HomePage';


function App() {

  const [isAuthForm, setIsAuthForm] = useState(false);

 // const [isSearchBar, setIsSearchBar] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <Header isAuthForm={isAuthForm} setIsAuthForm={setIsAuthForm} /> 
      </header>
      <main>
        <Routes>
           {/*Strona główna aplikacji */}
        <Route path="/" element={<HomePage />} />
          {/* Strona logowania/rejestracji */}
          <Route path="/auth" element={<AuthForm />} />
        </Routes>
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
