import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Inicio from "../pages/Inicio";
import Sugestao from "../pages/Sugestao";
import Tamanho from "../pages/Tamanho";
import Massa from "../pages/Massa";
import Tipo from "../pages/Tipo";
import Sabor from "../pages/Sabor";
import Borda from "../pages/Borda";
import Confirmacao from "../pages/Confirmacao";
import Final from "../pages/Final";
import NotFound from "../pages/NotFound";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Inicio} />
      <Route path="/sugestao" exact component={Sugestao} />
      <Route path="/tamanho" exact component={Tamanho} />
      <Route path="/massa" exact component={Massa} />
      <Route path="/tipo" exact component={Tipo} />
      <Route path="/sabor" exact component={Sabor} />
      <Route path="/borda" exact component={Borda} />
      <Route path="/confirmacao" exact component={Confirmacao} />
      <Route path="/final" exact component={Final} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
