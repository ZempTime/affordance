import React from 'react';

const Canvas = (props) => {
  return props.layer? (
    <div>{props.layer.content}</div>
  ) : (
    <div>Create your first layer</div>
  )
}

export default Canvas;
