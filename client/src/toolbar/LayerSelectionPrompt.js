import React, { Component } from 'react';

class LayerSelectionPrompt extends Component {
  activeLayerName() {
    let { layers } = this.props;
    let activeLayerIndex = layers.findIndex(layer => layer.active);
    return layers[activeLayerIndex].name;
  }
  render() {
    return(
      <div className="toolBar__layerSelectionPrompt">
        ActiveLayerName
        <i className="fa fa-chevron-down" />
      </div>
    );
  }
}

export default LayerSelectionPrompt;

