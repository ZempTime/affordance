import React from 'react';
import Canvas from './Canvas';

const Editor = (props) => {

  let activeLayer = props.layers.find(layer => layer.active === true );
  console.log(activeLayer);

  return (
    <div className="container">
      <div className="content">
        <Canvas layer={activeLayer} />
      </div>
    </div>
  );
}

export default Editor;
