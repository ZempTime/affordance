import React, { Component } from 'react';
import '../styles/Canvas.css';

class Canvas extends Component {
  render() {
    let { layer } = this.props;
    return(
      <div className="canvas">
      </div>
    );
  }
}

export default Canvas;
