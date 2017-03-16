import React, { Component } from 'react';
import './ToolBar.css';
import LayerSelectionPrompt from './LayerSelectionPrompt';

class ToolBar extends Component {
  render() {
    return(
      <div className="toolBar">
        <LayerSelectionPrompt />
        <p>either canvas edit options, or layer selection</p>
      </div>
    );
  }
}

export default ToolBar;
