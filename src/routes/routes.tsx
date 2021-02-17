import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Landing from '../pages/Landing';
import Chamado from '../pages/Chamado';
import ChamadosLista from '../pages/ChamadosLista';
import Orcamento from '../pages/Orcamento';
import OrcamentoLista from '../pages/OrcamentoLista';
import Success from '../pages/Success';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route exact path="/" component={Landing} />
    <Route path="/orcamento" component={Orcamento} />
    <Route path="/orcamentos" component={OrcamentoLista} />
    <Route path="/chamado" component={Chamado} />
    <Route path="/chamados" component={ChamadosLista} />
    <Route path="/success" component={Success} />
  </BrowserRouter>
);

export default Routes;
