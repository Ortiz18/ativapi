import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Maiores Empresas da América</h1>
      <nav>
        <ul>
          <li><Link to="/regiao/AmericaDoNorte" className="north-america">América do Norte</Link></li>
          <li><Link to="/regiao/AmericaCentral" className="central-america">América Central</Link></li>
          <li><Link to="/regiao/AmericaDoSul" className="south-america">América do Sul</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
