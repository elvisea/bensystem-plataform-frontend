import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import './styles.css';

import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

interface IChamados {
  id: number;
  name: string;
  email: string;
  whatsapp: string;
  description: string;
}

const ChamadosLista: React.FC = () => {
  const [chamados, setChamados] = useState<IChamados[]>([]);
  const history = useHistory();

  useEffect(() => {
    api.get('/chamados').then(response => setChamados(response.data));
  }, []);

  const handleDeleteChamado = useCallback(
    (id: number) => {
      try {
        api.delete(`chamado/${id}`);
        setChamados(chamados.filter(chamado => chamado.id !== id));
      } catch (error) {
        history.push('/success');
      }
    },
    [history, chamados],
  );

  return (
    <div className="container" id="page-teacher-list">
      <PageHeader title="Esses são seus Chamados." />

      {chamados.map(chamado => (
        <main key={chamado.id}>
          <article className="chamado-item">
            <header>
              <img
                src="https://avatars.githubusercontent.com/u/50111083?s=460&u=0effb75d4b27a3c349d5ad4ecca7f8e81fe4e263&v=4"
                alt="Elvis"
              />
              <div>
                <strong>{chamado.name}</strong>
                <span>{chamado.email}</span>
                <div>
                  <button
                    onClick={() => handleDeleteChamado(chamado.id)}
                    type="button"
                  >
                    <FiTrash2 size={20} colorProfile="#FFFF" />
                  </button>
                </div>
              </div>
            </header>
            <p>{chamado.description}</p>
            <footer>
              <p>
                Telefone
                <strong>{chamado.whatsapp}</strong>
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
