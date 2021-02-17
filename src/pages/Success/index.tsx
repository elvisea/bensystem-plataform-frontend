import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const RegistrationSuccess: React.FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <main>
          <h1>Tudo Certo!</h1>

          <p>
            Seu cadastro deu certo e foi enviado ao administrador para ser
            analisado. Agora é só aguardar nosso contato :)
          </p>

          <Link to="/" className="success-enter-app">
            Voltar para a página Principal!
          </Link>
        </main>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
