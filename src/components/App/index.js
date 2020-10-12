import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

// == Import components
import Homepage from '../Homepage';
import CreateAccount from '../../containers/CreateAccount';
// import Contact from '../Contact';
import Login from '../../containers/Login';
import Error404 from '../error404';
import Header from '../../containers/Header';

import store from '../../store';

import 'semantic-ui-css/semantic.min.css';
import './styles.scss';

// == Composant
const App = () => (

  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Homepage} />
      {/* <Route exact path="/contact" component={Contact} /> */}
      <Route exact path="/signin" component={Login} />
      <Route exact path="/signup" component={CreateAccount} />
      <Route component={Error404} />
    </Switch>
  </Provider>
);

// == Export
export default App;

// <a href='https://pngtree.com/so/weather-forecast'>weather-forecast png from pngtree.com</a>
