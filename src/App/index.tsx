import * as React from 'react';
import * as ReactDOM from 'react-dom';

import BrankasPv from '../components/pages/Brankas/BrankasPv';

const el = document.getElementById('app');
function render() {
  ReactDOM.render(<BrankasPv />, el);
}

render();
