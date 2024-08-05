import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CompanyCard from '../components/CompanyCard';
import companiesData from '../data/companies.json';
import './Region.css';

const regionClasses = {
  AmericaDoNorte: 'north-america',
  AmericaCentral: 'central-america',
  AmericaDoSul: 'south-america',
};

const Region = () => {
  const { region } = useParams();
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    setCompanies(companiesData[region]);
  }, [region]);

  return (
    <div className={`region ${regionClasses[region]}`}>
      <h2>Empresas da {region.replace('America', 'América ')}</h2>
      <div className="company-list">
        {companies && companies.map((company, index) => (
          <CompanyCard key={index} company={company} />
        ))}
      </div>
    </div>
  );
};

export default Region;
