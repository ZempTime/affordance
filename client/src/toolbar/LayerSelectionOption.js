import React, { Component } from 'react';

class LayerSelectionOption extends Component {
  render() {
    let { layer, selectLayer } = this.props;
    let optionClass = "toolBar__layerSelectionOption";
    if (layer.active) { optionClass += ' active'; }

    return(
      <div className={optionClass} onClick={() => selectLayer(layer.layerIndex)}>
        {layer.name}
      </div>
    )
  }
}

export default LayerSelectionOption;
