import React from 'react';
import { Link } from 'react-router-dom'

import landing_original from '../../assets/images/landing_original.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css';

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <h1 style={{ fontSize: 60, color: 'white', fontWeight: 'bolder' }}>BenSystem</h1>
          <h2>Olá! Seja Bem-Vindo a nossa Plataforma</h2>
        </div>

        <img src={landing_original} alt="Plataforma Ben System" className="hero-image" />

        <div className="buttons-container">
          <Link to="orcamento" className="study">
            Orçamento
          </Link>

          <Link to="chamado" className="give-classes">
            Chamado
          </Link>
        </div>
        <span className="total-connections">
          Seja Muito Bem Vindo! <img src={purpleHeartIcon} alt="Coração Roxo" />
        </span>
      </div>
    </div>
  )
}

export default Landing;