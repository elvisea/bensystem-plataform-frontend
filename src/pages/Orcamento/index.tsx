import React, { useState, FormEvent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

const Orcamento: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateOrcamento = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();

        api
          .post('orcamento', {
            name,
            email,
            whatsapp,
            description,
          })
          .then(() => {
            history.push('/success');
          });
      } catch (error) {
        history.push('/success');
      }
    },
    [name, email, whatsapp, description, history],
  );

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Incrível que você chegou até nós!"
        description="Preencha seus dados de contato e descrição do serviço que você deseja."
      />
      <main>
        <form onSubmit={handleCreateOrcamento}>
          <fieldset>
            <legend>Seus Dados</legend>

            <Input
              name="name"
              label="Nome Completo"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            />
            <Input
              name="email"
              label="E-mail"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={e => {
                setWhatsapp(e.target.value);
              }}
            />
            <Textarea
              name="descricao"
              label="Descrição"
              value={description}
              onChange={e => {
                setDescription(e.target.value);
              }}
            />
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Warning" />
              Importante! <br />
              Preencha Todos Os Dados
            </p>
            <button type="submit">Enviar Orçamento!</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default Orcamento;
