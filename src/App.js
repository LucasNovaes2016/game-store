import React, { Fragment } from 'react';
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/layout/Navbar';
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path={["/", "/games"]} component={Home} />
            <Route render={() => <Redirect to={{ pathname: "/" }} />} />
          </Switch>

        </div>
      </Fragment>
    </Router>
  );
}

export default App;
