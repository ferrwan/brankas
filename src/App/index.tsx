import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HashRouter as Router } from 'react-router-dom';

import BrankasPv from '../components/pages/Brankas/BrankasPv';

const el = document.getElementById('app');

const App = () => (
  <Router>
    <BrankasPv />
  </Router>
);

function render() {
  ReactDOM.render(<App />, el);
}

render();
