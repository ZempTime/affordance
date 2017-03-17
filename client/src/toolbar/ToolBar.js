import React, { Component } from 'react';
import './ToolBar.css';
import LayerSelector from './LayerSelector';

class ToolBar extends Component {
  propTypes: {
    layerSelectionExpanded: React.PropTypes.bool.isRequired,
    layers: React.PropTypes.array.isRequired,
    toggleLayerSelectionExpanded: React.PropTypes.func,
    selectLayer: React.PropTypes.func
  }
  render() {
    let { layerSelectionExpanded, layers, selectLayer, toggleLayerSelectionExpanded } = this.props;
    return(
      <div className="toolBar">
        <LayerSelector
          layers={ layers }
          layerSelectionExpanded={ layerSelectionExpanded }
          selectLayer={selectLayer}
          toggleLayerSelectionExpanded={ toggleLayerSelectionExpanded } />
      </div>
    );
  }
}

export default ToolBar;
