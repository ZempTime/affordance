import React, { Component } from 'react';
import './ToolBar.css';
import LayerSelector from './LayerSelector';

class ToolBar extends Component {
  propTypes: {
    layerSelectionExpanded: React.PropTypes.bool.isRequired,
    layerCreatorExpanded: React.PropTypes.bool.isRequired,
    layers: React.PropTypes.array.isRequired,
    toggleLayerSelectionExpanded: React.PropTypes.func,
    toggleLayerCreatorExpanded: React.PropTypes.func,
    selectLayer: React.PropTypes.func
  }
  render() {
    let { layerSelectionExpanded, layerCreatorExpanded, layers, selectLayer, toggleLayerSelectionExpanded, toggleLayerCreatorExpanded, createLayer } = this.props;
    return(
      <div className="toolBar">
        <LayerSelector
          layers={ layers }
          layerSelectionExpanded={ layerSelectionExpanded }
          layerCreatorExpanded={ layerCreatorExpanded }
          selectLayer={ selectLayer }
          createLayer={ createLayer }
          toggleLayerSelectionExpanded={ toggleLayerSelectionExpanded }
          toggleLayerCreatorExpanded={ toggleLayerCreatorExpanded } />
      </div>
    );
  }
}

export default ToolBar;
