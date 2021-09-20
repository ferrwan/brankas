import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { MemoryRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import BrankasPv from '../components/pages/Brankas/BrankasPv';

const el = document.getElementById('app');

const App = () => (
  <RecoilRoot>
    <Router>
      <BrankasPv />
    </Router>
  </RecoilRoot>
);

function render() {
  ReactDOM.render(<App />, el);
}

render();
