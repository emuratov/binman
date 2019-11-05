import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import MainSection from './MainSection'

function App() {
  return (
    <div className="App">
      <Header />
      <div className = 'container'>
      <Sidebar />
      <MainSection />
      </div>

    </div>
  );
}

export default App;
