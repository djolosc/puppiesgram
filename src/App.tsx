import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainPage, PostPage } from './pages';

import { RoutesLinkEnum } from './util/enums';

import './scss/main.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/:id" component={PostPage} />
        <Route path={RoutesLinkEnum.MAIN} component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
