import React, { Component } from 'react';
import './ToolBar.css';
import LayerSelector from './LayerSelector';

class ToolBar extends Component {
  propTypes: {
    layerSelectionExpanded: React.PropTypes.bool.isRequired,
    layers: React.PropTypes.array.isRequired,
    toggleLayerSelectionExpanded: React.PropTypes.func
  }
  render() {
    let { layerSelectionExpanded, layers, toggleLayerSelectionExpanded } = this.props;
    return(
      <div className="toolBar">
        <LayerSelector
          layers={ layers }
          layerSelectionExpanded={ layerSelectionExpanded }
          toggleLayerSelectionExpanded={ toggleLayerSelectionExpanded } />
        <p>either canvas edit options, or layer selection</p>
      </div>
    );
  }
}

export default ToolBar;
