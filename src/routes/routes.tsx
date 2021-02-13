import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Landing from '../../src/pages/Landing'
import Chamado from '../../src/pages/Chamado'
import ChamadosLista from '../../src/pages/ChamadosLista'
import Orcamento from '../../src/pages/Orcamento'
import OrcamentoList from '../../src/pages/OrcamentoList'

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing} />
            <Route path="/orcamento" component={Orcamento} />
            <Route path="/orcamentos" component={OrcamentoList} />
            <Route path="/chamado" component={Chamado} />
            <Route path="/chamados" component={ChamadosLista} />
        </BrowserRouter>
    )
}

export default Routes;