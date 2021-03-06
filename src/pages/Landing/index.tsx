import React from 'react';
import { Link } from 'react-router-dom';

import logoBensystem from '../../assets/images/logobensystem.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const Landing: React.FC = () => (
  <div id="page-landing">
    <div id="page-landing-content" className="container">
      <img
        src={logoBensystem}
        alt="Plataforma Ben System"
        className="hero-image"
      />

      <div className="logo-container">
        <h2>
          Instalações de câmeras de segurança, alarmes, cerca elétrica,
          interfones e controles de acesso.
        </h2>
      </div>

      <div className="buttons-container">
        <Link to="orcamento" className="study">
          Orçamento
        </Link>

        <Link to="chamado" className="give-classes">
          Chamado
        </Link>
      </div>
      <span className="total-connections">
        41 99675-3699 <img src={whatsappIcon} alt="Whatsapp" />
      </span>
    </div>
  </div>
);

export default Landing;
