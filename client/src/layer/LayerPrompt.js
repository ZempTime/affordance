import React, { Component } from 'react';
import './Layer.css';

class LayerPrompt extends Component {
  propTypes: {
    layerSelectionExpanded: React.PropTypes.bool.isRequired,
    layers: React.Proptypes.array.isRequired
  }
  activeLayerName() {
    let { layers } = this.props;
    let activeLayerIndex = layers.findIndex(layer => layer.active);
    return layers[activeLayerIndex].name;
  }
  render() {
    let { layers, layerSelectionExpanded, toggleLayerSelectionExpanded} = this.props;

    return layerSelectionExpanded ? (
      <div className="layer__layerSelectorPrompt" onClick={ () => toggleLayerSelectionExpanded } >
        { this.activeLayerName() }
        <i className="fa fa-chevron-up" />
      </div>
    ) : (
      <div className="layer__layerSelectorPrompt" onClick={ () => toggleLayerSelectionExpanded } >
        { this.activeLayerName() }
        <i className="fa fa-chevron-left" />
      </div>
    )
  }
}

export default LayerPrompt;
