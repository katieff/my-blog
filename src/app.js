require('./assets/skeleton/fonts.css');
require('./assets/skeleton/normalize.css');
require('./assets/skeleton/skeleton.css');
require('./assets/skeleton/custom.css');

import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu.jsx';

ReactDOM.render(
  <Menu />,
  document.getElementById('app')
);

console.log('Hello World!');