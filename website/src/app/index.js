import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { injectLayoutBaseCSS } from 'styled-bootstrap-grid';
import Home from './screens/Home';
import MainCourse from './screens/MainCourse';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}


const customCSS = `
  body {
   margin: 0px !important;
   color: #32323d;
   font-family: "Montserrat", Arial, sans-serif;
  }
`;

injectLayoutBaseCSS(customCSS);

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" index="Login" render={props => <Home {...props} />} />
      <Route exact path="/plat" index="MainCourse" render={props => <MainCourse {...props} />} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);