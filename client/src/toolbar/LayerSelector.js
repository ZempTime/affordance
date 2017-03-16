import React, { Component } from 'react';
import LayerSelectionPrompt from './LayerSelectionPrompt';

class LayerSelector extends Component {
  activeLayerName() {
    let { layers } = this.props;
    let activeLayerIndex = layers.findIndex(layer => layer.active);
    return layers[activeLayerIndex].name;
  }
  render() {
    let { layerSelectionExpanded, layers, toggleLayerSelectionExpanded } = this.props;

    return(
      <LayerSelectionPrompt
        layerSelectionExpanded={ layerSelectionExpanded }
        activeLayerName={ this.activeLayerName() }
        toggleLayerSelectionExpanded={ toggleLayerSelectionExpanded } />
    );
  }
}

export default LayerSelector;
