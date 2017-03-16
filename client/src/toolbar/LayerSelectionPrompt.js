import React, { Component } from 'react';

class LayerSelectionPrompt extends Component {
  render() {
    let { activeLayerName, layerSelectionExpanded } = this.props;

    return layerSelectionExpanded ? (
      <div className="toolBar__layerSelectionPrompt">
        { activeLayerName } <i className="fa fa-chevron-down"></i>
      </div>
    ) : (
      <div className="toolBar__layerSelectionPrompt">
        { activeLayerName } <i className="fa fa-chevron-left"></i>
      </div>
    );
  }
}

export default LayerSelectionPrompt;
