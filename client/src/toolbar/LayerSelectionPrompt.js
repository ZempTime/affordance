import React, { Component } from 'react';

class LayerSelectionPrompt extends Component {
  render() {
    let { activeLayerName, layerSelectionExpanded, toggleLayerSelectionExpanded } = this.props;
    let icon = layerSelectionExpanded ? "fa fa-chevron-down" : "fa fa-chevron-left";

    return (
      <div className="toolBar__layerSelectionPrompt" onClick={toggleLayerSelectionExpanded}>
        <p>
          Current: { activeLayerName } <i className={icon}></i>
        </p>
      </div>
    );
  }
}

export default LayerSelectionPrompt;
