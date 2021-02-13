import React, { useEffect, useState } from "react";
import "./styles.css";

import PageHeader from "../../components/PageHeader/";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import api from '../../services/api';

interface IOrcamentos {
  id: number,
  name: string,
  email: string,
  whatsapp: string,
  description: string
}

export default function ChamadosLista() {
  const [orcamentos, setorOamentos] = useState<IOrcamentos[]>([])

  useEffect(() => {
    api.get('/chamados')
      .then(response => setorOamentos(response.data))
  }, [])

  return (
    <>
      <div className="container" id="page-teacher-list">
        <PageHeader title="Esses são seus Chamados." />

        {
          orcamentos.map(orcamento => (
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
          ))
        }
      </div>
    </>
  );
}
