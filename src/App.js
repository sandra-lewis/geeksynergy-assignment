import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Movies from './components/movies/Movies';
import CompanyInfo from './components/CompanyInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [bgColor, setBgColor] = useState('bg-gradient');

  // Change background color to light grey
  const changeBgColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className={bgColor}>
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route
            exact
            path="/movies"
            render={(props) => (
              <Movies {...props} changeBgColor={changeBgColor} />
            )}
          />
          <Route
            exact
            path="/company-info"
            render={(props) => (
              <CompanyInfo {...props} changeBgColor={changeBgColor} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
