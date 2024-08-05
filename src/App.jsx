import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Region from './pages/Region';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regiao/:region" element={<Region />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
