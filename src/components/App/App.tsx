import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Packs, Cards } from 'components';
import { AppSetup, AppLayout } from 'layouts';

const App = () => (
  <AppSetup>
    <AppLayout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Packs />
          </Route>

          <Route path="/:code">
            <Cards />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppLayout>
  </AppSetup>
);

export default App;
