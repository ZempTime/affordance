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
    this.toggleLayerCreatorExpanded = this.toggleLayerCreatorExpanded.bind(this);
    this.createLayer = this.createLayer.bind(this);
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
  toggleLayerCreatorExpanded(e) {
    e.preventDefault();
    let { layerCreatorExpanded } = this.state;
    layerCreatorExpanded = !layerCreatorExpanded;
    this.setState({layerCreatorExpanded});
  }
  createLayer(layerName) {
    let newLayer = {
      layerIndex: this.state.layers[-1] + 1,
      name: layerName,
      active: true,
      content: '',
    }
    let layers = this.state.layers.map(layer => {
      layer.active = false;
      return layer;
    });
    this.setState({layers: layers.concat(newLayer), layerCreatorExpanded: false, layerSelectionExpanded: true});
  }
  render() {
    const { layerSelectionExpanded, layers, layerCreatorExpanded } = this.state;
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
            layerCreatorExpanded={ layerCreatorExpanded }
            layers={ layers }
            selectLayer={ this.selectLayer }
            toggleLayerSelectionExpanded={ this.toggleLayerSelectionExpanded }
            toggleLayerCreatorExpanded={ this.toggleLayerCreatorExpanded }
            createLayer={ this.createLayer } />
        </div>
      </div>
    );
  }
}

export default Layout;
