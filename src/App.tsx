import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';


function App() {

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Header isClicked={isClicked} setIsClicked={setIsClicked} /> 
      </header>
      <main>
        <Routes>
          {/* Strona logowania/rejestracji */}
          <Route path="/auth" element={<AuthForm />} />
        </Routes>
        <SearchBar isClicked={isClicked} />
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
