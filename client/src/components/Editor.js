import React from 'react';
import Canvas from './Canvas';
import ToolBar from './ToolBar';

const Editor = (props) => {
  return (
    <div className="container">
      <div className="content">
        <Canvas />
      </div>
    </div>
  );
}

export default Editor;
