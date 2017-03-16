import React, { Component } from 'react';
import './Layer.css';

class LayerPrompt extends Component {
  render() {
    return(
      <div className="layer__layerSelectorPrompt">
        ActiveLayerTitle <i className="fa fa-expand"></i>
      </div>
    )
  }
}

export default LayerPrompt;
