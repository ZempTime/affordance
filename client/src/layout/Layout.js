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
  }
  toggleLayerSelectionExpanded() {
    console.log("clicked");
    let { layerSelectionExpanded } = this.state;
    layerSelectionExpanded = !layerSelectionExpanded;
    this.setState({ layerSelectionExpanded });
  }
  render() {
    const { layerSelectionExpanded, layers, toggleLayerSelectionExpanded } = this.state;
    return(
      <div className="container">
        <header className="header">
          <p>Header</p>
        </header>

        <div className="content">
          <Canvas />
          <ToolBar
            layerSelectionExpanded={ layerSelectionExpanded }
            layers={ layers }
            toggleLayerSelectionExpanded={ toggleLayerSelectionExpanded } />
        </div>
      </div>
    );
  }
}

export default Layout;
