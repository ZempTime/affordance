import React, { Component } from 'react';
import './ToolBar.css';

class ToolBar extends Component {
  render() {
    return(
      <div className="toolBar">
        <p>layerselectionprompt</p>
        <p>either canvas edit options, or layer selection</p>
      </div>
    );
  }
}

export default ToolBar;
