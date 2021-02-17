import React from 'react';
import { Link } from 'react-router-dom';

import landingOriginal from '../../assets/images/landingOriginal.svg';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const Landing: React.FC = () => (
  <div id="page-landing">
    <div id="page-landing-content" className="container">
      <div className="logo-container">
        <h1 style={{ fontSize: 60, color: 'white', fontWeight: 'bolder' }}>
          BenSystem
        </h1>
        <h2>Olá! Seja Bem-Vindo a nossa Plataforma</h2>
      </div>

      <img
        src={landingOriginal}
        alt="Plataforma Ben System"
        className="hero-image"
      />

      <div className="buttons-container">
        <Link to="orcamento" className="study">
          Orçamento
        </Link>

        <Link to="chamado" className="give-classes">
          Chamado
        </Link>
      </div>
      <span className="total-connections">
        41 99524-1164 <img src={whatsappIcon} alt="Coração Roxo" />
      </span>
    </div>
  </div>
);

export default Landing;
