import React, { Component } from 'react';
import LayerSelectionPrompt from './LayerSelectionPrompt';
import LayerSelectionOption from './LayerSelectionOption';

class LayerSelector extends Component {
  activeLayerName() {
    let { layers } = this.props;
    let activeLayerIndex = layers.findIndex(layer => layer.active);
    return layers[activeLayerIndex].name;
  }
  render() {
    let { layerSelectionExpanded, layers, selectLayer, toggleLayerSelectionExpanded } = this.props;
    let layerSelectionOptions = layers.map((layer, i) => {
        return(
          <LayerSelectionOption key={i} layer={layer} selectLayer={selectLayer} />
        )
    })
    return(
      <div className="toolBar__layerSelector">
        <LayerSelectionPrompt
          layerSelectionExpanded={ layerSelectionExpanded }
          activeLayerName={ this.activeLayerName() }
          toggleLayerSelectionExpanded={ toggleLayerSelectionExpanded }>
        </LayerSelectionPrompt>

        { layerSelectionExpanded && layerSelectionOptions }
      </div>

    );
  }
}

export default LayerSelector;
