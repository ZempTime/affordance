import React, { Component } from 'react';
import './Canvas.css';

class Canvas extends Component {
  render() {
    let { layer } = this.props;
    console.log(layer);
    return(
      <div className="canvas">
      <p>
        { layer[0].content }
      </p>
      </div>
    );
  }
}

export default Canvas;
