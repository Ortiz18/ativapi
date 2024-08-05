import React from 'react';

const CompanyCard = ({ company }) => {
  return (
    <div className="company-card">
      <h3>{company.nome}</h3>
      <p><strong>País:</strong> {company.pais}</p>
      <p><strong>Setor:</strong> {company.setor}</p>
      <p><strong>Receita Anual:</strong> {company.receitaAnual}</p>
      <p><strong>Número de Empregados:</strong> {company.numeroDeEmpregados}</p>
    </div>
  );
};

export default CompanyCard;
