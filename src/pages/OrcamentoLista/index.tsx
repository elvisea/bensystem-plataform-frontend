import React, { useEffect, useState, useCallback } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import './styles.css';

import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

interface IOrcamentos {
  id: number;
  name: string;
  email: string;
  whatsapp: string;
  description: string;
}

const OrcamentoList: React.FC = () => {
  const [orcamentos, setOrcamentos] = useState<IOrcamentos[]>([]);

  useEffect(() => {
    api.get('/orcamentos').then(response => setOrcamentos(response.data));
  }, []);

  const handleDeleteOrcamento = useCallback(
    (id: number) => {
      try {
        api.delete(`orcamento/${id}`);
        setOrcamentos(orcamentos.filter(orcamento => orcamento.id !== id));
      } catch (error) {
        alert('Erro ao deletar Orcamento, tente novamente.');
      }
    },
    [orcamentos],
  );

  return (
    <>
      <div className="container" id="page-teacher-list">
        <PageHeader title="Esses são seus orçamentos." />

        {orcamentos.map(orcamento => (
          <main key={orcamento.id}>
            <article className="orcamento-item">
              <header>
                <img
                  src="https://avatars.githubusercontent.com/u/50111083?s=460&u=0effb75d4b27a3c349d5ad4ecca7f8e81fe4e263&v=4"
                  alt="Elvis"
                />
                <div>
                  <strong>{orcamento.name}</strong>
                  <span>{orcamento.email}</span>
                </div>
                <div>
                  <button
                    onClick={() => handleDeleteOrcamento(orcamento.id)}
                    type="button"
                  >
                    <FiTrash2 size={20} colorProfile="#FFFF" />
                  </button>
                </div>
              </header>
              <p>{orcamento.description}</p>
              <footer>
                <p>
                  Telefone
                  <strong>{orcamento.whatsapp}</strong>
                </p>
                <button type="button">
                  <img src={whatsappIcon} alt="Whatsapp" />
                  Entrar em Contato
                </button>
              </footer>
            </article>
          </main>
        ))}
      </div>
    </>
  );
};

export default OrcamentoList;
