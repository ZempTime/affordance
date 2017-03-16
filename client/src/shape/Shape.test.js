import React from 'react';
import ReactDOM from 'react-dom';
import Shape from './Shape';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Shape />, div);
});
