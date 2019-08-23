import React, { Fragment } from 'react';
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddGameForm from './components/forms/AddGameForm'
import Home from './components/Home';
import Navbar from './components/layout/Navbar';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path={["/", "/games"]} component={Home} />
              <Route exact path='/games/add' component={AddGameForm} />
              <Route render={() => <Redirect to={{ pathname: "/" }} />} />
            </Switch>

          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
