import React, { useState, FormEvent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

const Chamado: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateCalled = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();

        api
          .post('chamados', {
            name,
            email,
            whatsapp,
            description,
          })
          .then(() => {
            alert('Chamado Criado Com Sucesso!');
            history.push('/');
          });
      } catch (error) {
        alert('Error');
      }
    },
    [name, email, whatsapp, description, history],
  );

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Algo de errado com sua instalação? Ok!"
        description="Entraremos em contato o mais rápido possível!"
      />
      <main>
        <form onSubmit={handleCreateCalled}>
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
            <button type="submit">Enviar Chamado!</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default Chamado;
