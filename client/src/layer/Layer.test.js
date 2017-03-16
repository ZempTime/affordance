import React from 'react';
import ReactDOM from 'react-dom';
import Layer from './Layer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Layer />, div);
});
