import React from 'react';
import ReactDOM from 'react-dom';
import ToolBar from './ToolBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToolBar />, div);
});
