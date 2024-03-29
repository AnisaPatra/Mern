import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import NotFoundPage from './pages/NotFoundPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/profile' component={ProfilePage} />
        <Route path='/tables' component={TablesPage} />
        <Route path='/404' component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
