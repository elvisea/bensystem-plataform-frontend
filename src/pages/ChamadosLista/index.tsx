import React, { useEffect, useState } from 'react';
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

const ChamadosLista: React.FC = () => {
  const [orcamentos, setOrcamentos] = useState<IOrcamentos[]>([]);

  useEffect(() => {
    api.get('/chamados').then(response => setOrcamentos(response.data));
  }, []);

  async function handleDeleteChamado(id: number) {
    try {
      await api.delete(`chamado/${id}`);
      setOrcamentos(orcamentos.filter(orcamento => orcamento.id !== id));
    } catch (error) {
      alert('Erro ao deletar orcamento, tente novamente.');
    }
  }

  return (
    <div className="container" id="page-teacher-list">
      <PageHeader title="Esses são seus Chamados." />

      {orcamentos.map(orcamento => (
        <main key={orcamento.id}>
          <article className="teacher-item">
            <header>
              <img
                src="https://avatars.githubusercontent.com/u/50111083?s=460&u=0effb75d4b27a3c349d5ad4ecca7f8e81fe4e263&v=4"
                alt="Elvis"
              />
              <div>
                <strong>{orcamento.name}</strong>
                <span>{orcamento.email}</span>
                <button
                  onClick={() => handleDeleteChamado(orcamento.id)}
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
  );
};

export default ChamadosLista;
