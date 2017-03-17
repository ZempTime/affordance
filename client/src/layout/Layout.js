import React, { Component } from 'react';
import './Layout.css';
import renderData from '../renderData';
import ToolBar from '../toolbar/ToolBar';
import Canvas from '../canvas/Canvas';

class Layout extends Component {
  constructor() {
    super()
    this.state = renderData;
    this.toggleLayerSelectionExpanded = this.toggleLayerSelectionExpanded.bind(this);
    this.selectLayer = this.selectLayer.bind(this);
  }
  toggleLayerSelectionExpanded(e) {
    let { layerSelectionExpanded } = this.state;
    layerSelectionExpanded = !layerSelectionExpanded;
    this.setState({ layerSelectionExpanded });
  }
  selectLayer(layerIndex) {
    let { layers } = this.state;
    layers.forEach((layer) => {
      if (layer.layerIndex === layerIndex) {
        layer.active = true;
      } else {
        layer.active = false;
      }
    })
    this.setState({ layers })
  }
  render() {
    const { layerSelectionExpanded, layers } = this.state;
    const activeLayer = layers.filter((layer) => layer.active);
    return(
      <div className="container">
        <header className="header">
          <p>Header</p>
        </header>

        <div className="content">
          <Canvas layer={ activeLayer } />
          <ToolBar
            layerSelectionExpanded={ layerSelectionExpanded }
            layers={ layers }
            selectLayer = { this.selectLayer }
            toggleLayerSelectionExpanded={ this.toggleLayerSelectionExpanded } />
        </div>
      </div>
    );
  }
}

export default Layout;
