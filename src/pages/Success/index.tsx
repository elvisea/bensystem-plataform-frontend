import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationSuccess: React.FC = () => {
  return (
    <div id="page-registration-success">
      <div className="success-content-wrapper">
        <main>
          <h1>Ebaaa!</h1>

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
