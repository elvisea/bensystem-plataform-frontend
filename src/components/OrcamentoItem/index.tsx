import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

interface PageOrcamentoListProps {
  id: number;
  name: string;
  email: string;
  whatsapp: string;
  description: string;
}

const OrcamentoItem: React.FC<PageOrcamentoListProps> = props => (
  <article className="teacher-item">
    <header>
      <img
        src="https://avatars.githubusercontent.com/u/50111083?s=460&u=0effb75d4b27a3c349d5ad4ecca7f8e81fe4e263&v=4"
        alt="Elvis"
      />
      <div>
        <strong>Diogo Fernandes</strong>
        <span>Quimica</span>
      </div>
    </header>
    <p>
      Aulas de Matemática bem estruturadas e expositiva.
      <br /> <br />
      Estude para o ENEM e Vestibulares no Melhor Cursinho com o Melhor Preço.
      Pague em até 12x. ENEM com a melhor preparação. Parcelas por menos de R$
      15 reais.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 15,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em Contato
      </button>
    </footer>
  </article>
);

export default OrcamentoItem;
